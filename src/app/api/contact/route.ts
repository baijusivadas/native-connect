import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, language, goal, message, preferredDate, preferredTime, source } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json(
        {
          error:
            'Contact collection is not configured yet. Add CONTACT_WEBHOOK_URL to .env.local.',
        },
        { status: 503 }
      );
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone || '').trim(),
      language: String(language || '').trim(),
      goal: String(goal || '').trim(),
      message: String(message || '').trim(),
      preferredDate: String(preferredDate || '').trim(),
      preferredTime: String(preferredTime || '').trim(),
      source: String(source || 'website').trim(),
    };

    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Could not save your details. Please try again.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Could not submit the form.' }, { status: 500 });
  }
}
