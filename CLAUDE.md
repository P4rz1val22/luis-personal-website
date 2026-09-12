# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # production build into dist/
npm run preview  # serve the built dist/
npm run lint     # ESLint over the whole repo (flat config, eslint.config.js)
```

There is no test framework in this project — `npm run lint` is the only automated check.

## What this is

Luis Sarmiento's personal site: a static React 18 + Vite SPA, plain JSX (no TypeScript), with `react-router-dom` as the only runtime dependency beyond React. All content is hardcoded in the components; there is no CMS, API, or data layer.

Deployment is `.github/workflows/deploy.yml`: any push to `main` builds and publishes `dist/` to GitHub Pages, served at the `luissarmiento.me` custom domain (`CNAME`). The `gh-pages` devDependency and the Vercel URL in `package.json`'s `homepage` field are leftovers and are not used by the deploy path.

## Architecture

### Routing and the base path

`src/App.jsx` uses **`HashRouter`**, not `BrowserRouter` — routes are `/#/work`, `/#/skills`, `/#/projects`. This is load-bearing in two ways and should not be swapped without also fixing both:

- GitHub Pages has no server-side rewrite, so path-based routes would 404 on refresh.
- `vite.config.js` sets `base: "/luis-personal-website/"` while every runtime asset reference in the components is a **relative** `./assets/...` string. Hash routing keeps the browser's path segment fixed at the base, so those relative URLs keep resolving. Changing to path routing, or changing `base`, breaks images, PDFs, and sounds.

Static files live in `public/assets/{Images,PDFs,Sounds}` and Vite copies them to `dist/assets/`, alongside the hashed bundle output.

### Page / component layout

`src/pages/*.jsx` are thin compositions; the substance lives in `src/components/<Name>/<Name>.{jsx,css}` — one folder per component, each JSX file importing its own sibling CSS directly. Every page ends with the shared `Intercom` (contact) component.

The components are skeuomorphic renderings of physical office objects, each built entirely from nested `div`s and CSS — no SVG, no images for the objects themselves:

| Component | Page | Role |
|---|---|---|
| `TV` | Home | Title card; button cycles striped gradient backgrounds with a static-transition animation |
| `Printer` | Home | Selector for résumé / letters of recommendation PDFs |
| `Intercom` | all | Rotating wheel of contact links (Form, GitHub, Mail, LinkedIn) |
| `Clock` | Work | Live analog punch clock, driven by a 1s `setInterval` |
| `Board` | Work | Corkboard notes describing the selected job |
| `Jukebox` | Projects | Carousel + spinning disc for personal projects |

### Content lives in parallel arrays

Editing site content means editing index-aligned arrays inside components, not data files. Keep the arrays the same length and in the same order:

- `Printer.jsx` — `texts[]` / `links[]`
- `Intercom.jsx` — `links[]` (order must match the four wheel icons in the JSX)
- `Jukebox.jsx` — `projects[]` / `projectDescs[]` / `repos[]`, **plus** the hardcoded `.album` divs in the carousel JSX, which are written out one per project
- `Board.jsx` — `texts[]`, an array of exactly three bullet strings per job; `Work.jsx` hardcodes the matching punch-card `div`s and their index

### Shared layout vocabulary

`src/pages/Pages.css` (imported by `Home.jsx`, but effectively global) and `src/App.css` define the classes used across every page: `hoz-container` / `vert-container` for flex direction, `section`, and the section headers built as `heading` > `sideLines` + `title` + `sideLines Reverse`, with `Blue` / `Orange` / `Pink` as the stripe color modifiers. Nearly all sizing is in `vw` units so the whole layout scales with viewport width.

### Recurring patterns

- **Fade-in on mount:** a page or section holds `useState({ opacity: 0, marginTop: '6vw' })` in inline style and clears it to `{}` inside an empty-deps `useEffect`, animating via the `transition` on `.section`. `Board.jsx` does the same keyed on its `number` prop to flash on change.
- **Mobile:** `const isMobile = window.innerWidth <= 768` is read during render in several components and toggles class names. It is not reactive — it does not update on resize or orientation change.
- **Sounds:** either a `<audio ref>` played on click, or `new Audio('./assets/Sounds/*.mov')` constructed per event. Where the latter can fire rapidly, a `canPlay` boolean state debounces playback for ~500ms.
- Existing code uses inline style objects and `setTimeout`-based sequencing for animation rather than CSS classes; several files carry stray `console.log`s and unused imports.
