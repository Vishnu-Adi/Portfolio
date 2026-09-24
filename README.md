# Vishnu Adithya Portfolio

A responsive software engineering and machine learning portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS, CSS/SVG technical visuals, and the AI SDK.

## Requirements

- Node.js 22.13+ (Node.js 24 is recommended; `.nvmrc` selects Node 24)
- npm

## Local development

```bash
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The portfolio UI and deployment build do not require an API key. The portfolio chatbot does.

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_studio_key
```

Never commit `.env.local`. For Vercel, add `GOOGLE_GENERATIVE_AI_API_KEY` under **Project Settings → Environment Variables** for the environments where the chatbot should work.

## Validation commands

```bash
npm run lint
npm run typecheck
npm run build
```

## Vercel deployment

Vercel can detect this repository automatically as a Next.js application.

- Framework preset: **Next.js**
- Install command: `npm ci`
- Build command: `npm run build`
- Node.js: **24.x** (read from `.nvmrc` and `package.json`)
