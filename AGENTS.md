# AGENTS.md

## What this repo is

The imported repository contained only a `README.md`. This is a fresh scaffold: a static
marketing landing page for the "AUREVIA" property-development brand, built with
Vite + React + TypeScript + Tailwind CSS v4. There is no backend, database, or external
service — nothing needs credentials.

Note on naming: the build brief opened with the brand name "AUREVIA" while the rest of the
reference specification (copied from a "NEXORA" template) used NEXORA. AUREVIA is used as the
brand throughout; the third property was renamed "Aurevia Heights" for consistency.

## Running it

- `docker compose -f docker-compose.base44.yml up -d --build` — web entry point on host port 3000.
- The `web` service runs `npm install` on start, then Vite's dev server (`--host 0.0.0.0 --port 3000`).
  `node_modules` lives in the named volume `web_node_modules`, not in the working tree.
- `npm run build` (vite build) is available but is **not** used by the dev compose service.

## Non-obvious things

- `vite.config.ts` sets `allowedHosts: true` and `watch.usePolling: true`. Both are required:
  the preview is proxied from an external host (host/origin checks would otherwise block it),
  and file watching across a Docker bind mount does not work reliably with inotify.
- All imagery is remote Unsplash URLs (`images.unsplash.com`) referenced from components and
  `src/data/properties.ts`. The browser loads them directly, so the sandbox needs outbound
  network in the *browser*, not in the container.
- Fonts (Cormorant Garamond, Inter, Italianno) come from Google Fonts via `index.html`.
- Tailwind v4 is configured entirely in `src/index.css` via `@theme` (no `tailwind.config.js`).
  Design tokens: `ink` #0A0F0D, `charcoal` #101815, `ivory` #F5F1EB, `beige` #E8E1D7,
  `muted` #77746F, `gold` #C5A073.

## How to verify

1. `curl -sI http://localhost:3000/` → 200 and the served HTML contains `/src/main.tsx`
   (proof it is the live dev server, not a prebuilt bundle).
2. `docker compose -f docker-compose.base44.yml ps` → `web` healthy.

## Section anchors

`#home` (hero, also the carousel), `#services` (benefits strip), `#properties` (featured cards),
`#about`, `#contact` (final CTA banner). Nav links, the header CTA and property cards all
point at these.
