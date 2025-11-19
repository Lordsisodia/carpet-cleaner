# Carpet Cleaner Experience Planning

## 0. Visual Language & Tokens
### Palette
| Token | Hex | Notes |
| --- | --- | --- |
| `brand.primary.900` | #031532 | Anchor/nav background, dark gradient stop |
| `brand.primary.700` | #083777 | Hero background, buttons (default) |
| `brand.primary.500` | #1E5BD8 | Links, icons, form focus rings |
| `brand.primary.300` | #5E8DFF | Hover state, cards accents |
| `brand.accent.aqua` | #37D6FF | Highlight stat numbers, CTA underline |
| `brand.accent.sunrise` | #FDB86D | Trust badge glow, promo pills |
| `neutral.900` | #0F172A | Primary text on light surfaces |
| `neutral.700` | #1F2937 | Secondary text, icon strokes |
| `neutral.500` | #6B7280 | Body copy, captions |
| `neutral.200` | #E2E8F0 | Dividers, card borders |
| `neutral.050` | #F8FAFC | Background sections |
| `support.success` | #2DD4BF | Review success badge |
| `support.warning` | #F97316 | Pet stain/emergency alert pills |

### Gradient & Surface Tokens
- `gradient.hero`: linear(135deg, #031532 0%, #083777 45%, #1E5BD8 100%).
- `surface.glass`: rgba(8, 55, 119, 0.75) with `backdrop-filter: blur(12px)` for floating cards.
- `surface.card`: white background, 1px `neutral.200` border, 16px radius.

### Typography
- Display/Headlines — **Sora**, 600 weight; tracking -1%; use for hero + section titles.
- Body — **Inter**, 400/500 weight; comfortable line-height (1.6).
- Numeric — Use **Space Grotesk** 500 for stat counters to pair with round numerals.
- Button — Uppercase Inter 600, letter-spacing 0.04em, 14px.

### Spacing Scale (`rem` based on 4px)
- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-3`: 0.75rem (12px)
- `space-4`: 1rem (16px)
- `space-6`: 1.5rem (24px)
- `space-8`: 2rem (32px)
- `space-12`: 3rem (48px)
- `space-16`: 4rem (64px)

### Radii & Elevation
- `radius-sm`: 8px, controls chips/pills.
- `radius-md`: 16px, cards & CTA buttons.
- `radius-lg`: 28px, hero cards.
- `shadow-soft`: 0 12px 40px rgba(3, 21, 50, 0.18).
- `shadow-hover`: 0 16px 50px rgba(8, 55, 119, 0.24).

### Iconography & Imagery
- Icons: outlined stroke 1.5px, `brand.primary.500` fill, `neutral.200` circle background.
- Imagery: focus on macro carpet textures + lifestyle shots; overlay gradient scrims using hero gradient.
- Use `blob` motif built from 32px radius rectangles for section separators.

## 1. Step-by-step Research & Planning Backlog
1. Brand Alignment — baseline tokens defined above; pending approval on final blue palette, typography locking, and icon asset delivery from client.
2. Audience & Jobs-to-be-Done — interview the client on common customer personas (busy parents, property managers, pet owners) and map their trigger events, timelines, and top objections.
3. Competitive Teardowns — screenshot and annotate at least four leading carpet-cleaning experiences (Stanley Steemer, Oxi Fresh, Chem-Dry, Zerorez) focusing on hero messaging, booking funnels, review handling, differentiators, and mobile breakpoints.
4. Content Inventory — list all value props (eco-friendly, fast dry times, emergency service, guarantees) plus legal copy, certifications, and service coverage statements required for compliance.
5. Information Architecture — lock navigation for a single-page funnel (Hero, Services, Process, Reviews, Contact, Footer) with in-page anchors for desktop/mobile.
6. Conversion Flows — sketch responsive user journeys for "Book a cleaning" and "Leave a review" (no live scheduling; CTAs link to contact form + review capture section).
7. Component Library — define modular UI pieces (Hero, Service Grid, Stats Band, Review Carousel, Contact Drawer, etc.) with props/data contracts before writing implementation code.
8. Technical Stack Decision — adopt React + Next.js (web landing) with potential React Native reuse later; aim for static export for fast hosting.
9. Integrations & Data — prioritize analytics (GA4), form handling (Formspree/Email), and review aggregation (manual seed or Google reviews), skipping scheduling for MVP.
10. Validation & QA — prepare usability tests, browser/device matrix, performance budgets, and analytics dashboards to verify KPIs post-launch.

## 2. Competitor Insights
### Stanley Steemer (steemer.com)
- Pairs same-day-service messaging with repeated "Get Quote" CTAs and geographic "Serving" statements to reduce friction for urgent jobs.
- Highlights proprietary hot-water extraction equipment, allergen removal stats, and text-message opt-ins to stress trust + innovation.
- Includes explicit allergen/allergy outcomes (99% removal) and video explainer placements, suggesting we need measurable proof plus rich media.
citeturn2search0

### Oxi Fresh (oxifresh.com)
- Nationwide coverage map, prominent online scheduling form, and CTA buttons above the fold show the importance of instant booking.
- Eco metrics (86M gallons of water saved) and "over 330k reviews" badge demonstrate that quantified sustainability + social proof can boost trust.
- Repeats localized city links and franchise locator, implying we should plan a geo-personalized hero or quick zip-code entry.
citeturn0search3

### Chem-Dry (chemdry.com)
- Hero plus explainer video sells its Hot Carbonating Extraction differentiator and emphasizes faster dry times (<2 hours) as a headline promise.
- Offers franchise/service-area search, FAQ accordions, featured customer reviews, and coupon/offers modules on the homepage.
- Clear CTA split between "Schedule" and "Find Your Local Chem-Dry" hints we might need separate flows for digital booking vs. human callback.
citeturn0search10

### Zerorez (zerorez.com)
- Uses twin CTAs ("Schedule Service" / "Learn More"), an explainer video, and a 4-step process diagram to simplify the service story.
- Promotes the "Gotta-Love-It Guarantee" and proprietary Zr™ Water technology to reduce risk and emphasize innovation.
- Surfaces 25K+ five-star reviews and a "Get quote" price estimator, reinforcing that testimonial quantity + transparent pricing boost conversions.
citeturn1search0

### Cross-Industry Best Practices
- Cleaning-service sites perform best with bold hero imagery, concise copy, consistent brand colors, clear CTA, service list, testimonials, FAQs, and optional blog/resources for SEO.
- Mobile-first layouts, trust badges, updated reviews, pricing transparency, and straightforward contact points are now considered table stakes for home-service providers.
citeturn3search0turn3search1turn3search3

## 3. Single-Landing IA & Modules
| Anchor Section | Goal | Content & Components |
| --- | --- | --- |
| Hero (`#hero`) | Convey core promise in one glance, push toward booking or reviews. | `HeroPrimary`, CTA pair (Book Cleaning / See Proof), review badge, hero image, subtle particles animation. |
| Services Snapshot (`#services`) | Show breadth quickly without leaving page. | `ServiceGrid` with 3–4 cards, icon + short copy, "Add-on" chips, learn-more modals. |
| Why Choose Us (`#proof`) | Provide evidence for speed, eco-friendliness, guarantee. | `ValueStatsBand`, trust badges, before/after slider, guarantee pill. |
| Process (`#process`) | Reduce uncertainty on what happens after booking. | `ProcessTimeline` plus small `FAQAccordion` for prep/dry time. |
| Reviews & Stories (`#reviews`) | Social proof + capture new reviews inline. | `TestimonialCarousel`, video testimonial embed, `ReviewCaptureForm` (uploads to CRM/email). |
| Contact CTA (`#contact`) | Offer phone, SMS, form, hours in one card; no scheduling integration. | `ContactDrawer` layout, `FormLead` (name/email/service/pref date), map thumbnail. |
| Footer (`#footer`) | Reinforce coverage area, certifications, legal. | `FooterTrust`, quick-links, social icons, privacy links. |

Secondary (optional) anchors for blog/resources or app promo can be appended later but remain out of MVP scope per "landing only" requirement.

## 4. Component System (Initial Inventory)
| Component | Description | Data Needed |
| --- | --- | --- |
| `HeroPrimary` | Full-bleed hero with gradient blue background, service promise, CTA pair, optional video thumbnail. | Title, subtitle, CTA labels/links, background asset, badge icons. |
| `ServiceGrid` | Responsive grid with service cards, icons, price from, CTA. | Service list, descriptions, icon refs, base price. |
| `ProcessTimeline` | Four-step visual mirroring Zerorez-style explanation. | Step title, copy, illustration. |
| `ValueStatsBand` | Number counters for water saved, reviews, years in service (mirrors Oxi Fresh). | Metric label, value, delta description. |
| `TestimonialCarousel` | Scrollable cards with rating, photo, city, service type. | Review objects, filter tags. |
| `ReviewCaptureForm` | Input stack for rating, text, service date, media upload. | Form schema, guidelines, automation hook. |
| `ContactDrawer` | Persistent call/SMS/request-a-quote widget. | Phone numbers, availability, icon. |
| `ServiceAreaFinder` | Zip-code input with coverage validation + CTA. | Geo coverage dataset, fallback message. |
| `AppPromoBanner` | Showcase mobile/desktop downloads with store badges + QR. | Platform links, screenshot carousel. |
| `FAQAccordion` | Expandable Q&A for cleaning prep, drying times, policies. | FAQ dataset from content team. |
| `FooterTrust` | Certifications, payment methods, insurance badges, CTA to reviews. | Badge images, link targets. |

- Validate actual blue palette (hex values) + iconography once client supplies reference asset (draft defined in Section 0).
- Request copy blocks for value statements (eco-friendly, pet-safe, satisfaction guarantee) so they echo differentiators seen in competitor messaging.
- Gather stats (years in business, average response time, gallons saved, reviews) for the ValueStatsBand.
- Define lead-handling workflow for the contact form (email inbox, CRM ownership) and review moderation path.
- Define moderation rules and data retention for reviews to ensure compliance with app-store guidelines.

## 6. Implementation Roadmap
1. Discovery Sprint — finalize research backlog, capture content, decide integrations, document UX flows.
2. UX + Content Sprint — produce low-fi wireframes/mobile-first layouts, copy deck, component map.
3. UI System Sprint — craft blue-themed design tokens, interactive prototypes, accessibility checklist.
4. MVP Build Sprint — implement shared components + Home/Contact/Reviews screens in chosen stack, integrate booking + review APIs.
5. Hardening Sprint — instrumentation, tests, performance tuning, offline/desktop packaging, launch checklist.

## 7. Sample Component Data Model
```ts
export type Review = {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  service: 'carpet' | 'upholstery' | 'tile' | 'water-damage';
  location: string;
  publishedAt: string; // ISO date
  channel: 'google' | 'yelp' | 'in-app' | 'email';
  body: string;
  media?: { url: string; alt: string };
};
```

```ts
export const homePageSections = [
  { id: 'hero', component: 'HeroPrimary', props: { ctaPrimary: 'Book Cleaning', ctaSecondary: 'See Reviews' } },
  { id: 'services', component: 'ServiceGrid', props: { layout: '3-col' } },
  { id: 'process', component: 'ProcessTimeline', props: { steps: 4 } },
  { id: 'stats', component: 'ValueStatsBand', props: { theme: 'blue' } },
  { id: 'reviews', component: 'TestimonialCarousel', props: { source: 'google' } },
];
```

## 8. Form Handling & Integrations
- **Contact form** posts to `/api/contact`, which forwards payloads to `CONTACT_WEBHOOK_URL` (JSON webhook, e.g., Slack, CRM) when set; otherwise logs server-side for local testing. Fields include name, email, phone (optional), preferred window, and project details.
- **Review form** posts to `/api/review` and accepts up to three base64 images (4MB each). Payloads forward to `REVIEW_WEBHOOK_URL` if configured, or log locally. Fields include service selection, rating, testimonial, and attachments metadata.
- Both endpoints timestamp submissions, add a `source` identifier, and respond with `{ success: true }` on success or detailed error messages for validation.
