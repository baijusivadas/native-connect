import { NextRequest, NextResponse } from 'next/server';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------
const MIN_DELAY_BETWEEN_REQUESTS_MS = 400; // Serialize requests to avoid 429
const MAX_RETRIES = 3;
const GOOGLE_ENDPOINT = 'https://translate.googleapis.com/translate_a/single';
const MYMEMORY_ENDPOINT = 'https://api.mymemory.translated.net/get';

// ---------------------------------------------------------------------------
// In-memory cache + request queue
// ---------------------------------------------------------------------------
const translationCache = new Map<string, string>();
let lastRequestAt = 0;

async function waitForSlot() {
  const elapsed = Date.now() - lastRequestAt;
  if (elapsed < MIN_DELAY_BETWEEN_REQUESTS_MS) {
    await new Promise((r) =>
      setTimeout(r, MIN_DELAY_BETWEEN_REQUESTS_MS - elapsed)
    );
  }
  lastRequestAt = Date.now();
}

// ---------------------------------------------------------------------------
// Provider 1: Google Translate (free, but rate-limited)
// ---------------------------------------------------------------------------
type GoogleResponse = [Array<[string, string?]>];

async function googleTranslate(
  text: string,
  targetLang: string
): Promise<string> {
  await waitForSlot();

  const url = `${GOOGLE_ENDPOINT}?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(
    text
  )}`;

  const res = await fetch(url, {
    cache: 'no-store',
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });

  if (res.status === 429) throw new Error('GOOGLE_429');
  if (!res.ok) throw new Error(`GOOGLE_${res.status}`);

  const data = (await res.json()) as GoogleResponse;
  const translated = data[0].map((chunk) => chunk[0] ?? '').join('');
  if (!translated) throw new Error('GOOGLE_EMPTY');
  return translated;
}

// ---------------------------------------------------------------------------
// Provider 2: MyMemory (free fallback, 5000 words/day per IP)
// ---------------------------------------------------------------------------
async function myMemoryTranslate(
  text: string,
  targetLang: string
): Promise<string> {
  await waitForSlot();

  const url = `${MYMEMORY_ENDPOINT}?q=${encodeURIComponent(
    text
  )}&langpair=en|${targetLang}`;

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`MYMEMORY_${res.status}`);

  const data = await res.json();
  const translated = data?.responseData?.translatedText;
  if (!translated || typeof translated !== 'string') {
    throw new Error('MYMEMORY_EMPTY');
  }

  // Clean HTML entities
  return translated
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

// ---------------------------------------------------------------------------
// Unified translate with fallback chain
// ---------------------------------------------------------------------------
async function translateText(
  text: string,
  targetLang: string
): Promise<string> {
  let lastErr: unknown = null;

  // Try Google up to MAX_RETRIES with exponential backoff
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      return await googleTranslate(text, targetLang);
    } catch (err) {
      lastErr = err;
      const msg = String(err);
      if (!msg.includes('429')) break;
      // Exponential backoff: 1s, 2s, 4s
      await new Promise((r) => setTimeout(r, 1000 * Math.pow(2, attempt)));
    }
  }

  // Fallback to MyMemory
  try {
    return await myMemoryTranslate(text, targetLang);
  } catch (fallbackErr) {
    console.error(`All providers failed for "${text}" -> ${targetLang}`, {
      googleError: lastErr,
      myMemoryError: fallbackErr,
    });
    return text; // Graceful degradation
  }
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  try {
    const { texts, targetLang } = (await req.json()) as {
      texts: string[];
      targetLang: string;
    };

    if (!texts || !Array.isArray(texts) || texts.length === 0) {
      return NextResponse.json({ translations: {} });
    }

    // English = identity (no translation needed)
    if (targetLang === 'en') {
      const identity: Record<string, string> = {};
      texts.forEach((t) => (identity[t] = t));
      return NextResponse.json({ translations: identity });
    }

    const results: Record<string, string> = {};
    const missing: string[] = [];

    // 1. Check cache
    for (const text of texts) {
      const key = `${targetLang}:${text}`;
      const cached = translationCache.get(key);
      if (cached) {
        results[text] = cached;
      } else {
        missing.push(text);
      }
    }

    // 2. Translate missing strings (serialized via waitForSlot)
    for (const text of missing) {
      const translated = await translateText(text, targetLang);
      results[text] = translated;
      if (translated !== text) {
        translationCache.set(`${targetLang}:${text}`, translated);
      }
    }

    return NextResponse.json({ translations: results });
  } catch (error) {
    console.error('Translation route error:', error);
    return NextResponse.json({ translations: {} }, { status: 500 });
  }
}