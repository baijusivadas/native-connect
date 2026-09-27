import { NextResponse } from 'next/server';

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requests = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function rateLimited(key: string) {
  const now = Date.now();
  const current = requests.get(key);
  if (!current || now >= current.resetAt) {
    requests.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (current.count >= MAX_REQUESTS_PER_WINDOW) return true;
  current.count += 1;
  return false;
}

const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

export async function POST(request: Request) {
  try {
    if (rateLimited(getClientKey(request))) {
      return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 });
    }

    const body = await request.json();
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }

    const name = clean(body.name, 100);
    const email = clean(body.email, 200);
    const honeypot = clean(body.website, 100);
    if (honeypot) return NextResponse.json({ success: true });
    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid name and email.' }, { status: 400 });
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json({ error: 'Contact collection is not configured yet.' }, { status: 503 });
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: clean(body.phone, 30),
      language: clean(body.language, 50),
      goal: clean(body.goal, 500),
      message: clean(body.message, 2000),
      preferredDate: clean(body.preferredDate, 30),
      preferredTime: clean(body.preferredTime, 30),
      source: clean(body.source, 50) || 'website',
    };

    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Could not save your details. Please try again.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Could not submit the form.' }, { status: 500 });
  }
}
