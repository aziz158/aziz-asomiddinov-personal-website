# Aziz Asomiddinov — Personal Portfolio

Personal portfolio website for Azizkhuja Asomiddinov, a software engineer with 5+ years of experience. Built with React 19, TypeScript, and Vite, deployed on Netlify.

## Tech Stack

- **React 19** + **TypeScript** — UI and type safety
- **Vite** (SWC) — dev server and bundler
- **SCSS Modules** — scoped component styles
- **Zustand** — mobile burger menu state
- **react-hook-form** — contact form validation
- **react-toastify** — toast notifications
- **Netlify Functions** — serverless backend for the contact form

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Contact Form Setup

The contact form forwards messages to a Telegram chat via a Netlify serverless function. Two environment variables are required:

```
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

Add these to `.env.local` for local development and to the Netlify dashboard for production.

## Deployment

The site deploys automatically on Netlify. The build command is `npm run build` and the publish directory is `dist`. Netlify Functions are compiled from `netlify/functions/` using esbuild.
