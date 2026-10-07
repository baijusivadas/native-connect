import { NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Periodic cleanup of expired entries to prevent memory growth
  if (rateLimitMap.size > 200) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now >= val.resetAt) rateLimitMap.delete(key);
    }
  }

  const current = rateLimitMap.get(ip);
  if (!current || now >= current.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) return true;

  current.count += 1;
  return false;
}

const sanitize = (value: unknown, maxLength: number): string =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

interface ContactRequestBody {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  language?: unknown;
  goal?: unknown;
  level?: unknown;
  message?: unknown;
  preferredDate?: unknown;
  preferredTime?: unknown;
  source?: unknown;
  type?: unknown;
  conversationSummary?: unknown;
  website?: unknown; // honeypot
}

export async function POST(request: Request) {
  try {
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again shortly.' },
        { status: 429 }
      );
    }

    const body = (await request.json().catch(() => null)) as ContactRequestBody | null;
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 });
    }

    // Silent reject for honeypot bot submissions
    const honeypot = sanitize(body.website, 100);
    if (honeypot) return NextResponse.json({ success: true });

    const name  = sanitize(body.name,  100);
    const email  = sanitize(body.email, 200);
    const rawPhone = sanitize(body.phone, 30);
    const preferredDate = sanitize(body.preferredDate, 30);
    const preferredTime = sanitize(body.preferredTime, 30);
    const rawSource = sanitize(body.source, 50).toLowerCase();
    const rawType = sanitize(body.type, 50).toLowerCase();
    const isDemo =
      rawSource === 'demo-booking' ||
      rawType === 'demo' ||
      Boolean(preferredDate) ||
      Boolean(preferredTime);

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid name and email address.' },
        { status: 400 }
      );
    }

    // Validate phone if provided (10–15 digits after stripping formatting)
    const digitsOnly = rawPhone.replace(/[\s\-().+]/g, '');
    if (isDemo && !rawPhone) {
      return NextResponse.json(
        { error: 'Please enter a phone number to book a demo.' },
        { status: 400 }
      );
    }

    if (rawPhone && (!/^\d+$/.test(digitsOnly) || digitsOnly.length < 10 || digitsOnly.length > 15)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number (10–15 digits).' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { error: 'Contact collection is not configured yet.' },
        { status: 503 }
      );
    }

    const isChat =
      rawSource === 'chat' ||
      rawSource === 'ai-chat' ||
      rawType === 'chat' ||
      rawSource.includes('chat');

    const targetTab = isDemo ? 'Demo Requests' : isChat ? 'Chat Leads' : 'Leads';

    // All website lead forms intentionally use this single server endpoint.
    // The Apps Script webhook decides the Google Sheet tab from targetTab.


    const payload = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: digitsOnly || '',  // store digits-only, no + prefix
      language: sanitize(body.language, 50),
      goal: sanitize(body.goal, 500),
      level: sanitize(body.level, 50),
      message: sanitize(body.message, 2000),
      preferredDate,
      preferredTime,
      source: sanitize(body.source, 50) || (isDemo ? 'demo-booking' : 'website'),
      conversationSummary: sanitize(body.conversationSummary, 2000),
      isDemo,
      isChat,
      targetTab,
    };

    // Google Apps Script can take 15-30 s on cold starts — use a generous timeout.
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(30_000),
      });

      if (!response.ok) {
        console.error('Webhook returned non-OK status:', response.status);
        // Still return success to the user; data may have been saved by GAS.
      }
    } catch (webhookErr) {
      // Log but don't surface webhook errors to the user.
      // GAS often closes the connection before responding even when it succeeds.
      console.error('Webhook fetch error (non-fatal):', webhookErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact submission error:', err);
    return NextResponse.json(
      { error: 'Could not submit the form. Please try again.' },
      { status: 500 }
    );
  }
}
