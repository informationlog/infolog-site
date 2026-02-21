# Information Logistics — infolog.io

## Project Overview
Marketing homepage for Information Logistics LLC, an AI Product Design consultancy. Single-page static site.

## Architecture
- **Static HTML** — single `public/index.html`, no build step
- **Tailwind CSS** via CDN (`cdn.tailwindcss.com`)
- **No framework** — vanilla JS for theme toggle and scroll reveals

## Typography System (3 fonts, 3 roles)
- **EB Garamond** (Google Fonts): All editorial — headlines, body copy, spec values, blockquote
- **System sans-serif** (-apple-system / SF Pro): All UI chrome — nav, labels, CTAs, tags, metrics, footer
- **JetBrains Mono** (Google Fonts): Terminal block ONLY — do not use elsewhere

## Color System
- **Dark mode (default):** Warm palette — `#0e0c09` surface, `#1c1915` cards, `#f5f0e8` text, `#e8a54b` accent
- **Light mode:** Cool palette — `#f0f2f6` surface, `#e6e9ef` cards, `#1d1d1f` text, `#0066cc` accent
- All colors use CSS custom properties in `:root` / `.dark` selectors
- Theme persists via `localStorage`

## Design Principles
- Apple.com marketing page architecture (hero → glass panel → text reveal → bento → social proof → quote → spec table → CTA)
- Apple-scale typography: hero is `clamp(4.5rem, 10vw, 9rem)`
- Bento grid: 4-column with `span-2` / `span-3` cards, collapses to 1-col on mobile
- No decorative icons. Metrics as focal points. Short headlines (4-7 words).
- Glass treatment on principal panel and nav only. Cards are flat with 28px radius.

## Content
- **Principal:** Brendan Lee — AWS, Oracle, AudioEye background
- **Services:** AI Product Design, Design Ops, UX Infrastructure, Human-AI Interaction
- **Domains:** Multi-Cloud, Identity & Access, Accessibility, Compliance, Design Systems, AI Governance
- **Contact:** bdl@infolog.io
- **LinkedIn:** https://www.linkedin.com/in/brendanlee/

## Dev Server
```bash
npm start
# or
npx serve public
```

## Deployment
Static file — deploy `public/` to any CDN (Vercel, Netlify, Cloudflare Pages, S3+CloudFront).
