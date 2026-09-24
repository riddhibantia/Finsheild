# FinShield Frontend — Next.js 16 + React 19 + Tailwind

Investigation workstation for the FinShield fraud platform (App Router:
`/`, `/command-center`, `/investigate/[id]`, `/performance`, `/architecture`,
`/privacy/[uid]`, `/glossary`). Works **fully offline**: every API call in
`lib/api.ts` falls back to the built-in simulation engine (`lib/plain.ts` +
client scorer) when no backend is reachable.

## Develop

```bash
npm install
npm run dev        # http://127.0.0.1:5173 (live backend if up, else simulation)
```

Point at a backend with `NEXT_PUBLIC_API_URL=http://127.0.0.1:8000`
(`.env.local`, never committed).

## Deploy (Vercel, when ready)

No backend to deploy and no rewrite rules needed. From this folder:

```bash
vercel --prod
```

The app is offline-first, so the static/server output works standalone with
honest `DEMO_FALLBACK` labels wherever the live engine is unreachable.

## Check

```bash
npm run build      # must pass with zero errors
```
