import { NextResponse } from 'next/server';

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 10;
const requests = new Map<string, { count: number; resetAt: number }>();

const SYSTEM_PROMPT = `You are the helpful website assistant for Native Connects, a language-learning service.
Answer questions about Native Connects using only the information provided on its public website.
Be concise, warm, practical, and honest. Do not invent prices, tutors, schedules, guarantees, reviews, or policies.
If a visitor asks for something that requires a human, suggest booking a demo or using the contact form.
Native Connects focuses on personalized language learning with native speakers, real conversations, practical goals, cultural context, flexible scheduling, and online lessons.
Available learning formats include one-on-one tutoring, small group classes, conversation practice, cultural insights, flexible scheduling, and progress reports.
Languages and current pricing may change, so when exact current details are not available, tell the visitor to contact Native Connects.`;

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

export async function POST(request: Request) {
  try {
    if (rateLimited(getClientKey(request))) {
      return NextResponse.json({ error: 'Too many chat requests. Please try again shortly.' }, { status: 429 });
    }

    const body = await request.json();
    const messages = body?.messages;
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 12) {
      return NextResponse.json({ error: 'Invalid message format.' }, { status: 400 });
    }

    const safeMessages = messages
      .filter((message: { role?: string; content?: string }) =>
        (message.role === 'user' || message.role === 'assistant') && typeof message.content === 'string'
      )
      .slice(-12)
      .map((message: { role: 'user' | 'assistant'; content: string }) => ({
        role: message.role,
        content: message.content.trim().slice(0, 2000),
      }))
      .filter((message: { content: string }) => message.content.length > 0);

    if (safeMessages.length === 0) {
      return NextResponse.json({ error: 'Please enter a message.' }, { status: 400 });
    }

    const apiKey = process.env.LLM_API_KEY;
    const apiUrl = process.env.LLM_API_URL || 'https://api.openai.com/v1/chat/completions';
    const model = process.env.LLM_MODEL || 'gpt-4o-mini';
    if (!apiKey) return NextResponse.json({ error: 'The AI assistant is not configured yet.' }, { status: 503 });

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model, temperature: 0.3, messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...safeMessages] }),
      signal: AbortSignal.timeout(20_000),
    });
    const data = await response.json();
    if (!response.ok) return NextResponse.json({ error: data?.error?.message || 'The AI service returned an error.' }, { status: response.status });
    const message = data?.choices?.[0]?.message?.content;
    if (!message) return NextResponse.json({ error: 'The AI service returned no message.' }, { status: 502 });
    return NextResponse.json({ message: String(message).slice(0, 4000) });
  } catch {
    return NextResponse.json({ error: 'Unable to process the chat request.' }, { status: 500 });
  }
}
