# The Carpet Lad Landing – Iteration Plan (from screenshot audit)

## Quick Snapshot
- Screenshot date: Nov 19, 2025 · viewport ≈2880×10050 (desktop full scroll).
- Layout already responsive but desktop view shows large white gutters, uniform cards, and low visual hierarchy between sections.
- Goal: amplify brand personality, fix contrast regressions (white text on white cards), and tighten mobile parity before hand-off.

## Improvement Backlog
| Priority | Area | Issue Observed | Proposed Change | Success Signal |
| --- | --- | --- | --- | --- |
| P0 | Site-wide | White-on-white text in hero CTAs + stat chips reduces readability | Introduce tinted backgrounds / gradient chips, ensure minimum contrast 4.5:1, add dark CTA variant | WCAG AA contrast for all states, manual QA screenshot shows legible text |
| P0 | Hero | Lacks imagery or contextual proof, hero height feels empty on large screens | Add carpet/lifestyle image or texture overlay + trust microcopy; reduce empty gutters on widescreen | Hero features supporting media + consistent margins ≤1440px |
| P0 | Reviews block | Cards use same white as background so they blend; review tags cramped | Apply alternating surface tokens, add avatars/initials, ensure 3-column layout collapses gracefully | Visual separation visible at 100% zoom + mobile snapshot shows stacked cards |
| P1 | Navigation | Sticky pill takes entire width on desktop; CTA sits flush with nav text | Add mobile hamburger + collapse nav links at <1024px; keep CTA row pinned to right on desktop | Lighthouse screenshot confirms nav heights <92px and CTA retains prominence |
| P1 | Services grid | Cards feel identical; icons as emoji look temporary | Replace emoji with vector icons, add background tint per service type, include “learn more” micro CTA | Usability review reports faster scannability; new icons aligned with brand tokens |
| P1 | Proof section | Stats + guarantee card misaligned heights; dark card text lacks spacing | Convert to CSS grid with shared height, add bullet dividers + icon markers | On QA, stats align baseline and guarantee card text has 24px padding |
| P2 | Process & FAQ | Large left column but right FAQ card floats without anchor | Use two-column layout only ≥1200px; on mobile, stack and introduce timeline connector with icons | Mobile view shows chevron timeline; FAQ anchored via heading |
| P2 | Contact form | Plain inputs, no inline validation, success message static | Add field-level validation, success state toast, loading indicator, and copy that clarifies no scheduling | Form demonstrates inline errors for empty required fields |
| P2 | Footer | Minimal info, lacks CTA to reviews/social proof | Add social icons, secondary CTA, service area micro-map | Footer screenshot shows icons + contact CTA |

## Section-by-Section Tasks

### 1. Navigation & Hero
- [ ] **Responsive nav restructure** – convert link list into accessible disclosure on mobile; keep desktop inline with CTA cluster.
- [ ] **Hero composition** – introduce right-side media (before/after slider or abstract texture). Use CSS clamp for smoother vertical rhythm.
- [ ] **CTA styling** – create `ButtonPrimary`/`ButtonSecondary` tokens (filled aqua, outline white-on-gradient) with hover/active states meeting AA.
- [ ] **Proof badges** – add rotating review badge ("326 public reviews") with icon to occupy upper-right corner.
- [ ] **Status pill positioning** – pull "Same-week openings" badge outside hero copy (negative translate) and offer alternate statuses ("Emergency ready", "Pet-safe certified").
- [ ] **Hero enhancer ideas** – embed quick trust strip (IICRC badge + “Reply in 11 min”), add toggle for "Residential / Commercial", and consider looping background video of extraction for extra depth.

### 2. Services Snapshot
- [ ] Replace emoji placeholders with Lucide/Phosphor icons tinted by service type.
- [ ] Add subtle corner accents or gradient borders for hero services.
- [ ] Introduce “Add to inquiry” micro CTA per card for future functionality.

### 3. Proof & Guarantees
- [ ] Align stat cards via CSS grid (`auto-fit, minmax(220px, 1fr)`).
- [ ] Reformat guarantee copy using bullet icons + highlight coverages (IICRC, pet-safe) with badges.
- [ ] Add “Before / After” toggle panel showing image pair (use placeholder until assets arrive).

### 4. Process + FAQ
- [ ] Convert process steps into timeline with icons and vertical connector, ensuring good spacing on mobile.
- [ ] Add CTA button after steps (“See prep checklist”).
- [ ] Expand FAQ list to include collapsible accordions with open/close animation + icons.

### 5. Reviews & Capture
- [ ] Introduce filter pills (Pet, Whole-home, Emergency) to allow quick scanning.
- [ ] Style review cards with tinted headers, add reviewer avatar initials.
- [ ] Improve review form success messaging (toast + inline copy) and loading indicator.
- [ ] Enforce client-side photo size validation feedback.

### 6. Contact Layer
- [ ] Rebalance two-column layout so lead form gets more width on desktop (60/40 split) and stack at <1024px.
- [ ] Add trust strip (coverage hours, insured, “reply in 15 min”).
- [ ] Include optional “Send me prep checklist” checkbox.

### 7. Footer & Utility
- [ ] Expand footer to include sitemap, social links, licensing numbers.
- [ ] Add small subfooter with “Made in London” + microbrand icon.

## Rollout Checklist
1. Create design tokens for buttons + cards (Tailwind layer).
2. Update `app/page.tsx` to use new components (`Button`, `Section`, `StatCard`).
3. Ensure forms use ARIA attributes + inline validation.
4. Capture new desktop + mobile screenshots for approval.
5. Run accessibility check (axe) + Lighthouse mobile scores.

## Open Questions
- Need hero/media assets? placeholder vs actual client photography.
- Should review form upload to storage or keep webhook? plan accordingly.
- Confirm nav link destinations before shipping anchor adjustments.
