# FinShield Frontend — React 19 + Vite + Tailwind

Investigation workstation for the FinShield fraud platform. Works **fully offline**:
every API call in `src/api.ts` falls back to the built-in simulation engine
(`src/plain.ts` + client scorer) when no backend is reachable, so the static
build is a complete interactive demo with zero hosting cost.

## Develop

```bash
npm install
npm run dev        # http://127.0.0.1:5173 (uses live backend if up, else simulation)
```

Point at a backend explicitly with `VITE_API_URL=http://127.0.0.1:8000`.

## Host the static demo (no backend needed)

```bash
npm run build      # outputs frontend/dist/
```

Deploy `dist/` anywhere static:

| Host | How |
|---|---|
| Vercel / Netlify | root `frontend/`, build `npm run build`, publish `dist/` |
| GitHub Pages (project) | `VITE_BASE=/Finsheild/ npm run build`, publish `dist/` to `gh-pages` |
| Any static server | `npx vite preview` or copy `dist/` to nginx/S3 |

No server rewrites needed — the app uses `HashRouter`. With no backend,
all pages (Command Center, Investigation, Performance, Privacy, Glossary,
Cashfree studio) run on the offline simulation with honest `DEMO_FALLBACK` labels.

## Check

```bash
npm run build      # tsc + vite must pass with zero errors
npm run lint
```
