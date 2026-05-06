# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **single-file static landing page** for Transbravo (movimiento de tierras y retiro de escombros, Región Metropolitana, Chile). All markup, styles, and behavior live in `index.html`. There is **no build step, no bundler, no package manager**. Tailwind is loaded via CDN and configured inline in a `<script>` tag near the top of `index.html`.

If you find yourself reaching for `npm`, `vite`, `tsconfig`, or React components — stop. This repo previously held a parallel React/Vite implementation that was intentionally deleted. Everything ships from `index.html`.

## Commands

There are no scripts to run. Editing happens directly in `index.html`.

To preview locally:
```bash
python -m http.server 8000   # or: npx serve .
```

To test the production container (what Easypanel actually deploys):
```bash
docker build -t transbravo-landing .
docker run -p 8080:80 transbravo-landing
```

There is no configured linter, formatter, or test runner.

## Architecture

- **`index.html`** — the entire site. Contains: meta/SEO tags (Open Graph + Twitter Card), Tailwind CDN + inline `tailwind.config` (brand colors `brand-orange #FF6600`, `brand-dark #0f0f0f`, `brand-gray #1a1a1a`; fonts Oswald + Roboto), a `<style>` block defining the asphalt-texture system (SVG-noise data URI assigned to `--asphalt-texture` and stacked on `body`, `.bg-black`, `.bg-brand-dark`, `.asphalt`, `.hero-bg`), and inline JS (including the n8n contact-form handler).
- **`images/`** — referenced by relative paths from `index.html` (e.g. `images/equipos-maquinaria/...`, `images/logos/...`). Keep names ASCII and stable.
- **`videos/`** — same convention.
- **`Dockerfile`** — `nginx:alpine`, copies the whole repo to `/usr/share/nginx/html`, applies `nginx.conf`. No build stage.
- **`nginx.conf`** — deliberate caching policy: `*.html` is `no-cache, no-store, must-revalidate` so a redeploy is visible immediately; images/video cache 7 days; JS/CSS/fonts 1 day. Don't add cache-busting query strings — the policy already guarantees fresh HTML.
- **`metadata.json`** — site descriptor (title/description), not consumed by any build, kept for tooling/registry use.

## n8n contact form (must-fix before deploy)

The contact form uses a hardcoded placeholder webhook URL inside `index.html`. Search for:

```js
const WEBHOOK = 'https://YOUR_N8N_WEBHOOK_URL_HERE';
```

While the URL still contains `YOUR_N8N`, the form **will not actually send anything to n8n** — verify the real URL is in place before any production deploy.

## Conventions

- **All user-facing copy is Spanish (Chile).** Tone is direct, problem→solution. Match it when adding sections.
- **Brand styling** is centralized at the top of `index.html`: change Tailwind extend colors there, not by sprinkling hex codes inline. The asphalt texture is the visual signature — apply it via the existing `.asphalt`, `.bg-black`, `.bg-brand-dark`, or `.hero-bg` hooks instead of redefining the SVG noise per section.
- **Editing in place beats new files.** This is a one-file site by design. Resist the urge to extract partials, introduce a build step, or split JS into separate files unless the user explicitly asks for it.
