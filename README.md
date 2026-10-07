This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Lead and AI architecture

The site intentionally keeps integrations behind Next.js server routes:

- Contact form → `/api/contact` → Google Apps Script → `Leads` sheet tab
- Demo form → `/api/contact` → Google Apps Script → `Demo Requests` sheet tab
- AI chat → `/api/chat` → configured LLM provider → browser response
- AI chat lead capture → `/api/contact` → Google Apps Script → `Chat Leads` sheet tab

`LLM_API_KEY` and `CONTACT_WEBHOOK_URL` are server-only environment variables. Do not prefix either with `NEXT_PUBLIC_`.

### Vercel environment variables

Set these in Vercel for Production (and Preview if desired):

```text
NEXT_PUBLIC_SITE_URL=https://native-connect.vercel.app
CONTACT_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
LLM_API_KEY=...
LLM_API_URL=https://generativelanguage.googleapis.com/v1beta/openai/chat/completions
LLM_MODEL=gemini-2.5-flash
```

The browser never receives the LLM API key or the Google Apps Script URL. Existing Gemini-native deployments can continue using `GEMINI_API_KEY` and `GEMINI_MODEL` when the `LLM_*` variables are unset.
