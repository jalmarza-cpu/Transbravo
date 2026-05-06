# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project structure note: dual implementations coexist

This repo contains **two parallel implementations** of the same Transbravo landing page in the same directory. Be sure you know which one you're modifying:

1. **`index.html`** — self-contained static page. Plain HTML + Tailwind via CDN + vanilla JS + Google Fonts. No build step. This is what `README.md` documents and what the `Dockerfile` actually deploys.
2. **React/Vite/TypeScript app** — `index.tsx`, `App.tsx`, `components/*.tsx`, `constants.ts`, `types.ts`. React 19 + Vite 7 + `lucide-react` icons. Has its own dev/build scripts in `package.json`. **Not** what production serves today.

The `Dockerfile` copies the repo root to `/usr/share/nginx/html` and serves `index.html` directly — it does **not** run `vite build` first, so changes to the React tree do not reach production unless the Dockerfile is updated to build first and copy `dist/`. When the user asks for a content/styling change, ask (or check the most recently edited file) which implementation they intend; ideally mirror changes to both if both are meant to stay in sync.

## Commands

React app (Vite):
- `npm install` — install deps
- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview built output

Static site has no commands — open `index.html` directly or serve any way.

Docker (production deploy target — Easypanel):
- `docker build -t transbravo-landing .`
- `docker run -p 80:80 transbravo-landing`

There is no configured linter, formatter, or test runner.

## Architecture (React side)

- `index.tsx` mounts `<App />` into `#root` with `React.StrictMode`.
- `App.tsx` composes one-page sections in order: `Navbar → Hero → Services → Authority → ContactForm → Footer + WhatsAppButton`.
- `constants.ts` is the single source of truth for **content** (`SERVICES`, `FEATURES`, `GALLERY_IMAGES`), **contact info** (`PHONE_NUMBER`, `EMAIL_ADDRESS`, `ADDRESS`, `WHATSAPP_LINK`), and **inline style objects** (`INDUSTRIAL_STYLES`: `ASPHALT_BG`, `ORANGE_STEEL`, `ORANGE_TEXT_GRADIENT`, `BLACK_CHROME`). Edit copy and brand styling here, not in components.
- `types.ts` defines `ServiceItem`, `FeatureItem`, `GalleryImage` (icons typed as `LucideIcon`).
- TypeScript path alias: `@/*` → repo root (configured in `tsconfig.json`).
- Vite config sets `base: './'` so the build is path-relative (works under any subpath).

The static `index.html` is largely standalone — its Tailwind config and brand colors (`brand-orange #FF6600`, `brand-dark #0f0f0f`, `brand-gray #1a1a1a`, fonts Oswald + Roboto) are inlined in a `<script>` tag at the top, mirrored loosely by `INDUSTRIAL_STYLES` on the React side.

## Contact form / n8n integration

Both implementations ship with a placeholder webhook URL that must be replaced before the form actually submits:

- Static: search `index.html` for `const WEBHOOK = 'https://YOUR_N8N_WEBHOOK_URL_HERE'`.
- React: `components/ContactForm.tsx`, constant `WEBHOOK_URL`. When the URL still contains `YOUR_N8N`, the form simulates success without sending — useful for demos but easy to ship by accident.

## nginx caching policy

`nginx.conf` is intentional, not boilerplate: `*.html` is `no-cache, no-store, must-revalidate` so a redeploy is visible immediately; images/video cache 7 days; JS/CSS 1 day. Keep this in mind before adding cache-busting query strings.

## Language and audience

All user-facing copy is **Spanish (Chile)**. Contact details, addresses, and service descriptions target the Región Metropolitana market. Keep new copy in Spanish and match the existing tone (direct, problem→solution).
