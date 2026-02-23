# InfoLog.io Site Redesign — Design Document

**Date:** 2026-02-22
**Status:** Approved

---

## Summary

Redesign infolog.io from an "AI Product Design Studio" single-page HTML site to an enterprise-positioned "AI trust/governance/evaluation UX" consultancy site. Migrate from vanilla HTML to Astro. Clean corporate visual direction. Content-driven, component-based architecture.

## Decisions

- **Framework:** Astro (static site generator, zero client JS by default)
- **Visual direction:** Clean corporate. Drop globe, dithered blobs, edge vignette, film grain, serif display fonts. Subtle SVG grid/diagram motifs, monospace accents, muted warm-neutral palette, generous whitespace.
- **Studio lane:** Minimal mention in About section only. No dedicated page.
- **Deployment:** Static build to `informationlog.github.io` (GitHub Pages), CNAME `www.infolog.io`
- **CTA:** All "Book a call" buttons → `https://calendar.google.com/calendar/appointments/schedules/AcZssZ1oOIhW1MXziKKbxiU2LFypY37tf-l12ffxJ4CmNnbHbva_c6PsCbIunxxel4KruhyEWZCMOnLT`

## What Gets Removed

- WebGL globe (background + card)
- Dithered canvas blobs + edge vignette
- Film grain overlay
- Instrument Serif font
- "The Problem" editorial section
- Bento grid (services)
- Marquee ticker
- Quote section
- "How we work" spec rows
- Count-up stat cards ("20 years", "5 patents")
- Terminal block
- Ornament dividers

## Information Architecture

### Global: Sticky Header
- Left: InfoLog wordmark (text)
- Nav: Services, Proof, Approach, POV, About, Contact
- Primary CTA: "Book a call" (filled button)
- Theme toggle (dark/light)

### Homepage Sections

#### S1: Hero
- Eyebrow: `ENTERPRISE AI · UX INFRASTRUCTURE · TRUST SYSTEMS` (monospace, accent)
- H1: "Make AI systems measurable, auditable, and safe to operate."
- Subhead: "Enterprise AI trust, governance, and evaluation UX — built by an ex-AWS IAM + Oracle Cloud UX infrastructure leader."
- CTAs: "Book a call" (primary) + "See proof" (ghost, scrolls to Proof)
- Credibility bar (3 lines, small text):
  - "UX infrastructure at platform scale — Oracle Cloud: 100+ teams, 150+ products"
  - "Security & policy tooling — AWS IAM"
  - "Cloud financial governance — Billing, Budgets, Organizations"

#### S2: Signature Problems
- Eyebrow: `WHAT WE SEE`
- Heading: "The problems that keep showing up."
- 5 cards:
  1. "AI outputs aren't auditable enough for compliance or risk review."
  2. "No clear human override or escalation path when automation fails."
  3. "Teams can't measure model behavior reliably in production."
  4. "Policy and permissions UX is brittle, inconsistent, or dangerous."
  5. "Platform UI lacks governance — fragmented components, telemetry gaps, slow delivery."

#### S3: Services / Offers
- 3 cards, each with: title, "best for", deliverables, success line, timeline, CTA

**Offer A: AI Trust & Evaluation Diagnostic**
- Best for: Teams shipping AI into regulated or high-stakes environments
- Deliverables: Risk map, evaluation plan, control surface inventory, measurement strategy, prioritized roadmap
- Success: A clear, auditable path from prototype to production trust
- Timeline: 2-4 weeks

**Offer B: Governed Agent Workflow Design**
- Best for: Teams building agentic systems that need human oversight
- Deliverables: Human-in-the-loop flows, escalation/rollback patterns, policy editor UX, transparency surfaces
- Success: Agents that fail gracefully and remain auditable
- Timeline: 3-6 weeks

**Offer C: Platform UX Infrastructure Sprint**
- Best for: Orgs with fragmented component libraries or platform UI governance gaps
- Deliverables: Component strategy, token governance, telemetry plan, rollout/adoption model
- Success: Consistent, measurable UI delivery across distributed teams
- Timeline: 2-4 weeks

#### S4: Approach
- Eyebrow: `HOW I WORK`
- Heading: "Small diffs. Measurable outcomes."
- 4 steps (horizontal, stacks on mobile):
  1. **Diagnose** — Audit current surfaces, map risk, identify measurement gaps. Deliver a prioritized roadmap, not a slide deck.
  2. **Design** — Design control surfaces, evaluation UX, and override patterns. Every decision logged and reviewable.
  3. **Implement** — Ship working prototypes in production context. Validate with real users, real data, real constraints.
  4. **Operationalize** — Establish governance, telemetry, and handoff. The system works after I leave.

#### S5: Proof
- Grid of 6 tiles, each with: title, scope, artifacts, outcome

1. **Console Development Platform** — Oracle Cloud, UX infrastructure enabling 100+ teams and 150+ JS products. Artifacts: component libraries, templates, telemetry/metrics, CI/CD, governance. Outcome: Platform-scale design consistency and delivery velocity.
2. **Identity & Access Management** — AWS IAM, policy tooling and identity UX. Artifacts: policy editor UX, permission flows, guardrail patterns. Outcome: Usable security at enterprise scale.
3. **Cloud Financial Governance** — AWS Billing / Cost Management: Insights, Budgets, Organizations, Apptio context. Artifacts: dashboard UX, budget controls, organizational hierarchy, suite coherence. Outcome: Measurable cloud cost governance.
4. **Enterprise Collaboration Suite** — AWS WorkMail / WorkDocs, admin and end-user UX. Artifacts: admin consoles, onboarding flows, suite branding. Outcome: Coherent enterprise collaboration tooling.
5. **Voice & Calendar Interaction** — Alexa for Business, group/time/calendar management. Artifacts: interaction flows, scheduling UX, group admin. Outcome: Enterprise voice interface patterns.
6. **Infrastructure Engineering** — Istari Digital, infrastructure deployments, Lockheed Martin Skunk Works partnership. Artifacts: deployment tooling, engineering leadership. Outcome: Production infrastructure at defense-grade standards.

#### S6: POV (Point of View)
- 3 article stubs:
  1. "Designing AI Systems That Survive Audit" — What evaluation UX looks like when compliance isn't optional.
  2. "Human Override Patterns for Agentic Workflows" — Escalation, rollback, and transparency for systems that act autonomously.
  3. "Evaluation UX: Traces, Scorecards, and Policy Controls" — The interface layer between model behavior and organizational trust.
- Each links to stub page with "Coming soon" message.

#### S7: About
- "I design systems that make intelligent technology understandable, measurable, and safe to operate."
- "Twenty years of enterprise platform work — from cloud console infrastructure (Oracle) to identity and access management (AWS IAM) to financial governance tooling (AWS Billing). I've led both design and engineering organizations."
- "I take a limited number of engagements at a time. Every project is principal-led."
- Creative mention: "Also: illustration and brand work for companies like Nike SB, Five Bor Skateboards, Google Cloud." + Instagram link (~19k followers)
- LinkedIn link

#### S8: Contact / CTA Footer
- Heading: "Let's talk."
- Subtext: "I take a limited number of engagements at a time. If you're building AI into enterprise software, book a call."
- Primary CTA: "Book a call"
- Footer: (c) 2026 Information Logistics LLC, LinkedIn

## Visual Design

### Typography
- **Headlines:** System sans (-apple-system / SF Pro), large, tight letter-spacing
- **Body:** System sans, 15-17px, comfortable line-height
- **Technical accents:** JetBrains Mono for eyebrow labels, code references
- **No serif fonts**

### Color
- Warm-neutral palette (keep warm undertone, flatten it)
- Light mode: off-white surface, subtle card backgrounds, dark text
- Dark mode: near-black warm surface, warm dark cards, light text
- Accent: muted green or teal (less saturated than current)
- All via CSS custom properties, dark/light toggle preserved

### Motifs
- Subtle SVG grid lines or node-diagram patterns (not globe/space)
- Clean card borders, no shadows or hover lift
- Generous whitespace between sections
- No film grain, no dithering, no canvas effects

### Components
- Cards: flat, 1px border, rounded corners (16-20px)
- Buttons: filled primary, outline ghost
- Eyebrow labels: monospace, uppercase, tracked, accent color
- Section spacing: large (120-160px vertical padding)

## File Structure

```
infolog-site/
  astro.config.mjs
  package.json
  src/
    content/
      home.ts
      caseStudies.ts
    components/
      Header.astro
      Footer.astro
      Hero.astro
      SignatureProblems.astro
      Offers.astro
      ApproachSteps.astro
      ProofTiles.astro
      POV.astro
      AboutBlock.astro
      ContactCTA.astro
    layouts/
      Base.astro
    pages/
      index.astro
      pov/
        designing-ai-systems-that-survive-audit.astro
        human-override-patterns-for-agentic-workflows.astro
        evaluation-ux-traces-scorecards-and-policy-controls.astro
  public/
    (static assets if any)
```

## SEO & Metadata
- Title: "Information Logistics — Enterprise AI Trust, Governance & Evaluation UX"
- Description: "I design systems that make AI measurable, auditable, and safe to operate. Enterprise UX infrastructure, trust architecture, and evaluation tooling."
- OpenGraph tags with title, description, URL
- Semantic HTML: one H1, proper heading hierarchy, landmark elements

## Deployment
- `npm run build` → `dist/` folder
- Copy `dist/` contents to `informationlog.github.io` repo
- CNAME file for `www.infolog.io` included in `public/`
