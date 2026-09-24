import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are the helpful website assistant for Native Connects, a language-learning service.
Answer questions about Native Connects using only the information provided on its public website.
Be concise, warm, practical, and honest. Do not invent prices, tutors, schedules, guarantees, reviews, or policies.
If a visitor asks for something that requires a human, suggest booking a demo or using the contact form.
Native Connects focuses on personalized language learning with native speakers, real conversations, practical goals, cultural context, flexible scheduling, and online lessons.
Available learning formats include one-on-one tutoring, small group classes, conversation practice, cultural insights, flexible scheduling, and progress reports.
Languages and current pricing may change, so when exact current details are not available, tell the visitor to contact Native Connects.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid message format.' }, { status: 400 });
    }

    const apiKey = process.env.LLM_API_KEY;
    const apiUrl = process.env.LLM_API_URL || 'https://api.openai.com/v1/chat/completions';
    const model = process.env.LLM_MODEL || 'gpt-4o-mini';

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            'The AI assistant is not configured yet. Add LLM_API_KEY, LLM_API_URL and LLM_MODEL to .env.local.',
        },
        { status: 503 }
      );
    }

    const safeMessages = messages
      .filter(
        (message: { role?: string; content?: string }) =>
          (message.role === 'user' || message.role === 'assistant') &&
          typeof message.content === 'string'
      )
      .slice(-12)
      .map((message: { role: 'user' | 'assistant'; content: string }) => ({
        role: message.role,
        content: message.content.slice(0, 2000),
      }));

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.3,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...safeMessages],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.message || 'The AI service returned an error.' },
        { status: response.status }
      );
    }

    const message = data?.choices?.[0]?.message?.content;
    if (!message) {
      return NextResponse.json({ error: 'The AI service returned no message.' }, { status: 502 });
    }

    return NextResponse.json({ message });
  } catch {
    return NextResponse.json({ error: 'Unable to process the chat request.' }, { status: 500 });
  }
}
