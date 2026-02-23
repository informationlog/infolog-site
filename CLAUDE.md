# Information Logistics — infolog.io

## Project Overview
Marketing homepage for Information Logistics LLC, an enterprise AI trust/governance/evaluation UX consultancy. Astro static site with component architecture.

## Architecture
- **Astro 5.x** — static site generator, zero client JS by default
- **Tailwind CSS 3.x** via `@astrojs/tailwind` integration
- **TypeScript content config** — all copy in `src/content/` files
- **Components** read from content config, render to static HTML

## File Structure
```
src/
  content/
    siteConfig.ts    — shared constants (booking URL, LinkedIn, site meta)
    home.ts          — all homepage section content
    caseStudies.ts   — proof tiles data
  components/
    Header.astro     — sticky nav with glass blur, theme toggle, CTA
    Footer.astro     — copyright + LinkedIn
    Hero.astro       — S1: eyebrow, H1, subhead, CTAs, credibility
    SignatureProblems.astro — S2: 5 buyer-pain cards
    Offers.astro     — S3: 3 service cards with CTAs
    ApproachSteps.astro — S4: 4-step process
    ProofTiles.astro — S5: 6 case study tiles
    POV.astro        — S6: 3 article cards
    AboutBlock.astro — S7: credibility narrative + headshot
    ContactCTA.astro — S8: final CTA
  layouts/
    Base.astro       — HTML shell, CSS vars, fonts, theme toggle, scroll reveal
  pages/
    index.astro      — homepage (assembles all components)
    pov/             — article stub pages
public/
  CNAME              — www.infolog.io
  headshot.jpg       — principal headshot
```

## Typography (2 fonts, 2 roles)
- **System sans-serif** (-apple-system / SF Pro): Headlines, body, UI chrome, CTAs
- **JetBrains Mono** (Google Fonts): Eyebrow labels and technical accents only

## Color System
- **Light mode (default):** Warm-neutral — `#f5f3ef` surface, `#eae8e3` cards, `#1a1814` text, `#3d7a5f` accent
- **Dark mode:** Warm-dark — `#111110` surface, `#1a1918` cards, `#ede9e0` text, `#7bbf8a` accent
- CSS custom properties in `:root` / `.dark` selectors
- Theme persists via `localStorage`

## Content
- **Principal:** Brendan Lee — AWS IAM, Oracle Cloud, enterprise platform background
- **Services:** AI Trust & Evaluation Diagnostic, Governed Agent Workflow Design, Platform UX Infrastructure Sprint
- **CTA:** All "Book a call" buttons → Google Calendar booking link (in `siteConfig.ts`)
- **LinkedIn:** https://www.linkedin.com/in/brendanlee/

## Dev Server
```bash
npm run dev
# Opens at localhost:4321
```

## Build & Deploy
```bash
npm run build          # Produces dist/
```
Deploy `dist/` contents to `informationlog.github.io` repo (GitHub Pages). CNAME handles `www.infolog.io`.
