# InfoLog.io Site Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild infolog.io as an Astro static site with enterprise AI consulting positioning, clean corporate design, and content-config architecture.

**Architecture:** Astro SSG with Tailwind CSS. Content in TypeScript config files (`src/content/home.ts`, `src/content/caseStudies.ts`). Components read from config. Builds to static HTML for GitHub Pages.

**Tech Stack:** Astro 5.x, Tailwind CSS 4.x (via @astrojs/tailwind), TypeScript content files, JetBrains Mono (Google Fonts), system sans-serif stack.

**Design doc:** `docs/plans/2026-02-22-site-redesign-design.md`

**CTA URL (use everywhere):** `https://calendar.google.com/calendar/appointments/schedules/AcZssZ1oOIhW1MXziKKbxiU2LFypY37tf-l12ffxJ4CmNnbHbva_c6PsCbIunxxel4KruhyEWZCMOnLT`

---

## Task 1: Scaffold Astro Project

**Goal:** Replace the current vanilla HTML setup with a working Astro project that builds and serves.

**Step 1: Initialize Astro in the existing repo**

```bash
cd /Users/louie/INFOLOG/infolog-site
# Remove old files (keep docs/ and .git/)
rm -rf public/ package.json package-lock.json node_modules/

# Create Astro project
npm create astro@latest . -- --template minimal --no-install --no-git --typescript strict

# Install deps + Tailwind integration
npm install
npx astro add tailwind --yes
```

**Step 2: Configure Astro for GitHub Pages**

File: `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.infolog.io',
  integrations: [tailwind()],
});
```

**Step 3: Add CNAME for custom domain**

File: `public/CNAME`

```
www.infolog.io
```

**Step 4: Add JetBrains Mono font**

This will be added in the Base layout (Task 2). No separate step needed.

**Step 5: Verify build and dev server**

```bash
npm run dev
# Should open at localhost:4321 with default Astro page
npm run build
# Should produce dist/ folder
```

**Step 6: Commit**

```bash
git add -A
git commit -m "chore: scaffold Astro project with Tailwind"
```

---

## Task 2: Base Layout + CSS Variables + Theme Toggle

**Goal:** Create the Base layout with head/meta, CSS custom properties (light/dark), theme toggle JS, and Tailwind config.

**Files:**
- Create: `src/layouts/Base.astro`
- Modify: `tailwind.config.mjs` (Astro generates this)

**Step 1: Create Base layout**

File: `src/layouts/Base.astro`

```astro
---
interface Props {
  title?: string;
  description?: string;
}

const {
  title = 'Information Logistics — Enterprise AI Trust, Governance & Evaluation UX',
  description = 'I design systems that make AI measurable, auditable, and safe to operate. Enterprise UX infrastructure, trust architecture, and evaluation tooling.',
} = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- OpenGraph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content="https://www.infolog.io" />
  <meta property="og:type" content="website" />

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

  <!-- Theme: apply saved preference before paint -->
  <script is:inline>
    if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');
  </script>

  <style is:global>
    html { scroll-behavior: smooth; }
    body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

    :root {
      --surface: #f5f3ef;
      --card: #eae8e3;
      --card-border: rgba(50,45,30,0.08);
      --text-1: #1a1814;
      --text-2: rgba(26,24,20,0.55);
      --text-3: rgba(26,24,20,0.38);
      --accent: #3d7a5f;
      --accent-soft: rgba(61,122,95,0.08);
    }

    .dark {
      --surface: #111110;
      --card: #1a1918;
      --card-border: rgba(255,240,210,0.07);
      --text-1: #ede9e0;
      --text-2: rgba(237,233,224,0.55);
      --text-3: rgba(237,233,224,0.38);
      --accent: #7bbf8a;
      --accent-soft: rgba(123,191,138,0.08);
    }

    body {
      background: var(--surface);
      color: var(--text-1);
      transition: background 0.4s, color 0.4s;
    }
  </style>
</head>
<body class="font-sans antialiased overflow-x-hidden">
  <slot />

  <!-- Theme toggle script -->
  <script is:inline>
    window.toggleTheme = function() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    };
  </script>
</body>
</html>
```

**Step 2: Configure Tailwind**

File: `tailwind.config.mjs`

```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

**Step 3: Update index.astro to use Base layout**

File: `src/pages/index.astro`

```astro
---
import Base from '../layouts/Base.astro';
---

<Base>
  <main class="min-h-screen flex items-center justify-center">
    <p class="text-lg" style="color: var(--text-2);">Site rebuild in progress.</p>
  </main>
</Base>
```

**Step 4: Verify**

```bash
npm run dev
# Visit localhost:4321 — should show placeholder with correct fonts/colors
# Toggle dark mode via console: document.documentElement.classList.toggle('dark')
npm run build
# Should succeed
```

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Base layout with CSS variables, theme toggle, SEO meta"
```

---

## Task 3: Content Config Files

**Goal:** Create the centralized content config so all copy lives in one place.

**Files:**
- Create: `src/content/home.ts`
- Create: `src/content/caseStudies.ts`
- Create: `src/content/config.ts` (shared constants like CTA URL)

**Step 1: Create shared config**

File: `src/content/config.ts`

```typescript
export const BOOKING_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1oOIhW1MXziKKbxiU2LFypY37tf-l12ffxJ4CmNnbHbva_c6PsCbIunxxel4KruhyEWZCMOnLT';

export const LINKEDIN_URL = 'https://www.linkedin.com/in/brendanlee/';

export const SITE_TITLE = 'Information Logistics — Enterprise AI Trust, Governance & Evaluation UX';

export const SITE_DESCRIPTION = 'I design systems that make AI measurable, auditable, and safe to operate. Enterprise UX infrastructure, trust architecture, and evaluation tooling.';
```

**Step 2: Create homepage content**

File: `src/content/home.ts`

```typescript
export const hero = {
  eyebrow: 'Enterprise AI · UX Infrastructure · Trust Systems',
  headline: 'Make AI systems measurable, auditable, and safe to operate.',
  subhead: 'Enterprise AI trust, governance, and evaluation UX — built by an ex-AWS IAM + Oracle Cloud UX infrastructure leader.',
  credibility: [
    'UX infrastructure at platform scale — Oracle Cloud: 100+ teams, 150+ products',
    'Security & policy tooling — AWS IAM',
    'Cloud financial governance — Billing, Budgets, Organizations',
  ],
};

export const signatureProblems = {
  eyebrow: 'What We See',
  headline: 'The problems that keep showing up.',
  items: [
    'AI outputs aren\'t auditable enough for compliance or risk review.',
    'No clear human override or escalation path when automation fails.',
    'Teams can\'t measure model behavior reliably in production.',
    'Policy and permissions UX is brittle, inconsistent, or dangerous.',
    'Platform UI lacks governance — fragmented components, telemetry gaps, slow delivery.',
  ],
};

export const offers = {
  eyebrow: 'Services',
  headline: 'Engagements built to reduce risk.',
  items: [
    {
      title: 'AI Trust & Evaluation Diagnostic',
      bestFor: 'Teams shipping AI into regulated or high-stakes environments',
      deliverables: [
        'Risk map',
        'Evaluation plan',
        'Control surface inventory',
        'Measurement strategy',
        'Prioritized roadmap',
      ],
      success: 'A clear, auditable path from prototype to production trust.',
      timeline: '2–4 weeks',
    },
    {
      title: 'Governed Agent Workflow Design',
      bestFor: 'Teams building agentic systems that need human oversight',
      deliverables: [
        'Human-in-the-loop flows',
        'Escalation / rollback patterns',
        'Policy editor UX',
        'Transparency surfaces',
      ],
      success: 'Agents that fail gracefully and remain auditable.',
      timeline: '3–6 weeks',
    },
    {
      title: 'Platform UX Infrastructure Sprint',
      bestFor: 'Orgs with fragmented component libraries or platform UI governance gaps',
      deliverables: [
        'Component strategy',
        'Token governance',
        'Telemetry plan',
        'Rollout / adoption model',
      ],
      success: 'Consistent, measurable UI delivery across distributed teams.',
      timeline: '2–4 weeks',
    },
  ],
};

export const approach = {
  eyebrow: 'How I Work',
  headline: 'Small diffs. Measurable outcomes.',
  steps: [
    {
      number: '01',
      title: 'Diagnose',
      description: 'Audit current surfaces, map risk, identify measurement gaps. Deliver a prioritized roadmap, not a slide deck.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Design control surfaces, evaluation UX, and override patterns. Every decision logged and reviewable.',
    },
    {
      number: '03',
      title: 'Implement',
      description: 'Ship working prototypes in production context. Validate with real users, real data, real constraints.',
    },
    {
      number: '04',
      title: 'Operationalize',
      description: 'Establish governance, telemetry, and handoff. The system works after I leave.',
    },
  ],
};

export const pov = {
  eyebrow: 'Point of View',
  headline: 'Writing.',
  items: [
    {
      title: 'Designing AI Systems That Survive Audit',
      description: 'What evaluation UX looks like when compliance isn\'t optional.',
      slug: 'designing-ai-systems-that-survive-audit',
    },
    {
      title: 'Human Override Patterns for Agentic Workflows',
      description: 'Escalation, rollback, and transparency for systems that act autonomously.',
      slug: 'human-override-patterns-for-agentic-workflows',
    },
    {
      title: 'Evaluation UX: Traces, Scorecards, and Policy Controls',
      description: 'The interface layer between model behavior and organizational trust.',
      slug: 'evaluation-ux-traces-scorecards-and-policy-controls',
    },
  ],
};

export const about = {
  eyebrow: 'About',
  statements: [
    'I design systems that make intelligent technology understandable, measurable, and safe to operate.',
    'Twenty years of enterprise platform work — from cloud console infrastructure (Oracle) to identity and access management (AWS IAM) to financial governance tooling (AWS Billing). I\'ve led both design and engineering organizations.',
    'I take a limited number of engagements at a time. Every project is principal-led.',
  ],
  creative: 'Also: illustration and brand work for companies like Nike SB, Five Bor Skateboards, Google Cloud.',
  instagram: 'https://www.instagram.com/brendandanlee/',
  instagramFollowers: '~19k',
};

export const contact = {
  headline: 'Let\'s talk.',
  subtext: 'I take a limited number of engagements at a time. If you\'re building AI into enterprise software, book a call.',
};
```

**Step 3: Create case studies content**

File: `src/content/caseStudies.ts`

```typescript
export interface CaseStudy {
  title: string;
  scope: string;
  artifacts: string[];
  outcome: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Console Development Platform',
    scope: 'Oracle Cloud — UX infrastructure enabling 100+ teams and 150+ JS products',
    artifacts: ['Component libraries', 'Templates', 'Telemetry / metrics', 'CI/CD', 'Governance'],
    outcome: 'Platform-scale design consistency and delivery velocity',
  },
  {
    title: 'Identity & Access Management',
    scope: 'AWS IAM — policy tooling and identity UX',
    artifacts: ['Policy editor UX', 'Permission flows', 'Guardrail patterns'],
    outcome: 'Usable security at enterprise scale',
  },
  {
    title: 'Cloud Financial Governance',
    scope: 'AWS Billing / Cost Management — Insights, Budgets, Organizations, Apptio context',
    artifacts: ['Dashboard UX', 'Budget controls', 'Organizational hierarchy', 'Suite coherence'],
    outcome: 'Measurable cloud cost governance',
  },
  {
    title: 'Enterprise Collaboration Suite',
    scope: 'AWS WorkMail / WorkDocs — admin and end-user UX',
    artifacts: ['Admin consoles', 'Onboarding flows', 'Suite branding'],
    outcome: 'Coherent enterprise collaboration tooling',
  },
  {
    title: 'Voice & Calendar Interaction',
    scope: 'Alexa for Business — group, time, and calendar management',
    artifacts: ['Interaction flows', 'Scheduling UX', 'Group admin'],
    outcome: 'Enterprise voice interface patterns',
  },
  {
    title: 'Infrastructure Engineering',
    scope: 'Istari Digital — infrastructure deployments, Lockheed Martin Skunk Works partnership',
    artifacts: ['Deployment tooling', 'Engineering leadership'],
    outcome: 'Production infrastructure at defense-grade standards',
  },
];
```

**Step 4: Commit**

```bash
git add src/content/
git commit -m "feat: add centralized content config files"
```

---

## Task 4: Header + Footer Components

**Goal:** Build the sticky header (nav + CTA + theme toggle) and footer.

**Files:**
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`

**Step 1: Create Header**

File: `src/components/Header.astro`

The header has:
- Left: "information logistics" text wordmark (accent color)
- Center: nav links (Services, Proof, Approach, POV, About) — anchor scrolls
- Right: theme toggle button + "Book a call" CTA
- Sticky, glass-blur background
- Nav links are `font-sans text-[12px] tracking-[0.06em]`

**Step 2: Create Footer**

File: `src/components/Footer.astro`

The footer has:
- Left: (c) 2026 Information Logistics LLC
- Right: LinkedIn link
- Simple border-top, small text

**Step 3: Add to index.astro**

Import Header and Footer into `src/pages/index.astro`. Verify they render.

**Step 4: Verify**

```bash
npm run dev
# Check header sticks on scroll, theme toggle works, nav links exist
# Check footer renders at bottom
```

**Step 5: Commit**

```bash
git add src/components/Header.astro src/components/Footer.astro src/pages/index.astro
git commit -m "feat: add Header and Footer components"
```

---

## Task 5: Hero Component

**Goal:** Build S1 Hero section reading from `home.ts`.

**Files:**
- Create: `src/components/Hero.astro`
- Modify: `src/pages/index.astro`

Import `hero` from content config. Render:
- Eyebrow (font-mono, uppercase, tracked, accent color)
- H1 (system sans, large clamp(), tight leading/tracking)
- Subhead (text-2 color, 15-17px)
- Two CTA buttons
- Credibility bar (3 lines, small, text-3)

Full viewport height, centered, no decorative elements.

**Verify:** Dev server, both themes. H1 is the only `<h1>` on the page.

**Commit:** `feat: add Hero section`

---

## Task 6: Signature Problems Component

**Goal:** Build S2 — 5 buyer-pain cards.

**Files:**
- Create: `src/components/SignatureProblems.astro`
- Modify: `src/pages/index.astro`

Import `signatureProblems` from content config. Render:
- Eyebrow + heading
- 5 cards in responsive grid (cards have flat background, 1px border, rounded 16px)
- Each card is just the problem text — no icons, no numbers

**Verify:** Dev server, responsive (stacks on mobile).

**Commit:** `feat: add Signature Problems section`

---

## Task 7: Offers Component

**Goal:** Build S3 — 3 service offer cards with CTAs.

**Files:**
- Create: `src/components/Offers.astro`
- Modify: `src/pages/index.astro`

Import `offers` from content config. Render:
- Eyebrow + heading
- 3 cards, each with: title (h3), "Best for" line, deliverables list, success line, timeline, "Book a call" CTA button
- Cards stack on mobile, side-by-side on desktop (grid-cols-3)

**Verify:** Dev server, both themes, CTA links work.

**Commit:** `feat: add Offers section with booking CTAs`

---

## Task 8: Approach Steps Component

**Goal:** Build S4 — 4-step process.

**Files:**
- Create: `src/components/ApproachSteps.astro`
- Modify: `src/pages/index.astro`

Import `approach` from content config. Render:
- Eyebrow + heading
- 4 steps in horizontal row (stacks on mobile)
- Each step: number (mono, accent), title (bold), description (text-2)
- Subtle separator between steps (border or spacing)

**Verify:** Dev server, responsive.

**Commit:** `feat: add Approach section`

---

## Task 9: Proof Tiles Component

**Goal:** Build S5 — 6 case study tiles.

**Files:**
- Create: `src/components/ProofTiles.astro`
- Modify: `src/pages/index.astro`

Import `caseStudies` from content config. Render:
- Section id="proof" for anchor nav
- Grid of 6 tiles (2 or 3 columns)
- Each tile: title (h3), scope line (text-2), artifact tags (small pills), outcome line

**Verify:** Dev server, responsive.

**Commit:** `feat: add Proof tiles section`

---

## Task 10: POV Component + Stub Pages

**Goal:** Build S6 — 3 article stubs with links to placeholder pages.

**Files:**
- Create: `src/components/POV.astro`
- Create: `src/pages/pov/designing-ai-systems-that-survive-audit.astro`
- Create: `src/pages/pov/human-override-patterns-for-agentic-workflows.astro`
- Create: `src/pages/pov/evaluation-ux-traces-scorecards-and-policy-controls.astro`
- Modify: `src/pages/index.astro`

Each POV card links to its stub page. Stub pages use Base layout and show:
- Title
- "Coming soon." message
- Back link to homepage

**Verify:** Dev server, links navigate correctly, stub pages render.

**Commit:** `feat: add POV section and article stub pages`

---

## Task 11: About Block Component

**Goal:** Build S7 — compact credibility narrative.

**Files:**
- Create: `src/components/AboutBlock.astro`
- Modify: `src/pages/index.astro`

Import `about` from content config. Render:
- Section id="about"
- Eyebrow
- 3 statement paragraphs
- Creative work line (smaller, secondary treatment) with Instagram link
- LinkedIn link

**Verify:** Dev server, both themes.

**Commit:** `feat: add About section`

---

## Task 12: Contact CTA Component

**Goal:** Build S8 — final CTA before footer.

**Files:**
- Create: `src/components/ContactCTA.astro`
- Modify: `src/pages/index.astro`

Import `contact` from content config. Render:
- Section id="contact"
- Heading: "Let's talk."
- Subtext
- "Book a call" primary CTA button (large)

**Verify:** Dev server, CTA link works.

**Commit:** `feat: add Contact CTA section`

---

## Task 13: Assemble Homepage + Polish

**Goal:** Wire all sections into index.astro in order, add scroll-reveal animations, verify full page flow.

**Step 1:** Ensure index.astro imports all components in order:
1. Header
2. Hero
3. SignatureProblems
4. Offers
5. ApproachSteps
6. ProofTiles
7. POV
8. AboutBlock
9. ContactCTA
10. Footer

**Step 2:** Add scroll-reveal (IntersectionObserver) via a small inline script in Base.astro — same pattern as current site's `.rv` class.

**Step 3:** Verify anchor navigation from header links scrolls to correct sections.

**Step 4:** Verify all "Book a call" CTAs point to the booking URL.

**Step 5:** Test mobile responsive (resize browser to ~375px).

**Step 6:** Test dark/light theme toggle across all sections.

**Commit:** `feat: assemble full homepage with scroll animations`

---

## Task 14: Build, Deploy, Verify

**Goal:** Build the site, deploy to GitHub Pages, verify live.

**Step 1: Build**

```bash
npm run build
ls dist/
# Should contain index.html, CNAME, pov/ directory, _astro/ assets
```

**Step 2: Deploy to GitHub Pages repo**

```bash
# Copy build output to pages repo
cp -r dist/* /tmp/informationlog.github.io/
cd /tmp/informationlog.github.io
git add -A
git commit -m "Deploy redesigned site — enterprise positioning, Astro build"
git push origin main
```

**Step 3: Verify live**

Visit `https://www.infolog.io` and check:
- All sections render
- Theme toggle works
- CTAs link to booking
- POV stub pages work
- Mobile responsive
- No console errors

**Step 4: Push source to origin**

```bash
cd /Users/louie/INFOLOG/infolog-site
git push origin main
```

**Step 5: Update CLAUDE.md**

Update the project README to reflect the new Astro architecture, content config locations, build/deploy process.

**Commit:** `docs: update CLAUDE.md for Astro architecture`

---

## Task 15: Cleanup Checklist (PRD Section 6)

Run through the PRD feedback checklist before considering done:

- [ ] No hype words ("revolutionary," "world-class," "cutting-edge")
- [ ] No vague claims
- [ ] Proof tiles map to allowed facts only
- [ ] No invented client names/logos/numbers
- [ ] Header nav anchors scroll correctly
- [ ] One clear primary CTA ("Book a call")
- [ ] Homepage doesn't bury Services/Proof below too much content
- [ ] Readable typography on mobile
- [ ] Focus states visible on interactive elements
- [ ] Contrast reasonable in both themes
- [ ] Build succeeds with no errors
- [ ] No console errors in browser
- [ ] Executive skim test passes (8 seconds: what, who, why trust, what next)
