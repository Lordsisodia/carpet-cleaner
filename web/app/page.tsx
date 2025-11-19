import ContactForm from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ReviewForm from "@/components/ReviewForm";
import { contactMethods, reviewChannels, reviews } from "@/lib/content";
import { serviceAreas } from "@/lib/constants";
import { siteNavLinks } from "@/lib/navLinks";
import Link from "next/link";

const services = [
  {
    name: "Whole-flat carpet reset",
    description:
      "Truck-mounted extraction, plant-based pretreat, grooming, and complimentary protectant for London terraces and flats.",
    icon: "🧼",
    price: "From £45 / room",
    bullets: ["Dry in under 2 hrs", "Includes stair treads"],
  },
  {
    name: "Pet treatment & odour lift",
    description:
      "Enzyme flush plus UV inspection to neutralise stains before they wick back through wool and sisal fibres.",
    icon: "🐾",
    price: "From £70 / visit",
    bullets: ["UV detection", "Enzyme + oxy blend"],
  },
  {
    name: "Upholstery & area rugs",
    description:
      "Low-moisture hand detail for sofas, townhome stairs, and delicate Persian pieces with pH-balanced rinse.",
    icon: "🛋️",
    price: "Custom bundles",
    bullets: ["WoolSafe certified", "Colourfast tested"],
  },
  {
    name: "Emergency water lift",
    description:
      "24/7 extraction, antimicrobial treatment, and turbo air movers for leaks or boiler mishaps.",
    icon: "💧",
    price: "By assessment",
    bullets: ["Arrival within 60 min", "Insurance ready report"],
  },
];

const stats = [
  { value: "2,800+", label: "London homes revived" },
  { value: "2 hrs", label: "Average dry time" },
  { value: "420", label: "5-star public reviews" },
  { value: "97%", label: "Repeat / referral clients" },
];

const processSteps = [
  {
    title: "Inspect & prep",
    detail:
      "Colorfast test, move light furniture, and protect corners before hoses roll in.",
    duration: "15 min",
  },
  {
    title: "Pretreat & spot lift",
    detail:
      "Target pet zones, traffic lanes, and spills with plant-based pretreat + agitation.",
    duration: "20 min",
  },
  {
    title: "PureSteam extraction",
    detail:
      "Dual extraction wand removes soils with 210º steam, softened water, and pH-balanced rinse.",
    duration: "30–60 min",
  },
  {
    title: "Groom & guarantee",
    detail:
      "Speed-dry air movers, fiber grooming, and a 7-day touch-up guarantee.",
    duration: "10 min",
  },
];

const faqs = [
  {
    q: "How fast does everything dry?",
    a: "Most rooms are photo-ready within 2 hours thanks to low-moisture passes and air movers we stage as we exit.",
  },
  {
    q: "What areas do you serve?",
    a: "Greater London zones 1–4 plus select Surrey and Hertfordshire postcodes; travel fees may apply beyond.",
  },
  {
    q: "Can I leave a review later?",
    a: "Yes—submit below or reply to our follow-up text/email with photos and we’ll publish within 24 hours.",
  },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className={`h-4 w-4 ${filled ? "text-[#FDB86D]" : "text-[var(--neutral-300)]"}`}
  >
    <path
      d="M12 2.5l2.8 6 6.7.6-5 4.4 1.5 6.5-6-3.4-6 3.4 1.5-6.5-5-4.4 6.7-.6z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[var(--neutral-050)] pb-16 text-[color:var(--neutral-900)] sm:pb-24">
      <div className="absolute inset-x-0 top-[-200px] h-[420px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(30,91,216,0.3),_transparent_65%)] blur-3xl" />
      <div className="layout-grid relative z-10 space-y-12 md:space-y-16">
        <Header navLinks={siteNavLinks} />

        <section id="hero" className="section-shell scroll-mt-32">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <div className="hero-gradient relative overflow-hidden rounded-[28px] p-8 text-white shadow-[var(--shadow-hover)] sm:p-10">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(1,8,18,0.95),_rgba(4,33,85,0.75))]" />
              <div className="relative z-10">
                <p className="eyebrow text-white">Residue-free by design</p>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Carpets that feel brand new in <span className="text-[var(--accent-aqua)]">two hours</span> flat.
                </h1>
                <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
                  The Carpet Lad combines pure steam extraction, plant-safe chemistry, and relentless reviews to keep London flats, terraces, and townhouses soft, clean, and pet approved.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-primary-700)] shadow-lg"
                  >
                    Book a cleaning
                  </Link>
                  <Link
                    href="/reviews"
                    className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
                  >
                    Browse 300+ reviews
                  </Link>
                </div>
                <div className="mt-10 grid gap-6 text-sm text-white/85 sm:grid-cols-3">
                  {stats.slice(0, 3).map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <p className="stat-number text-3xl text-white">{stat.value}</p>
                      <p className="text-xs uppercase tracking-wide text-white/75">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative rounded-[28px] bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <p className="font-semibold text-[var(--neutral-700)]">This week at a glance</p>
                <span className="rounded-full bg-[var(--neutral-100)] px-3 py-1 text-xs font-semibold text-[var(--neutral-700)]">
                  Updated daily
                </span>
              </div>
              <ul className="space-y-5 text-sm text-[var(--neutral-700)]">
                {[
                  { label: "Average response time", value: "11 minutes" },
                  { label: "Homes on deck", value: "23 cleanings" },
                  { label: "Late-night slots", value: "2 emergency holds" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center justify-between border-b border-[var(--neutral-200)] pb-3 last:border-none last:pb-0">
                    <span>{item.label}</span>
                    <span className="font-semibold text-[var(--brand-primary-500)]">{item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-[var(--neutral-100)] p-4">
                <p className="text-sm font-semibold text-[var(--neutral-700)]">Review snapshot</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} filled />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-[var(--neutral-700)]">4.9 average</p>
                </div>
                <p className="mt-2 text-xs text-[var(--neutral-500)]">Verified via Google & Yelp</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell scroll-mt-32">
          <div className="mb-6 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="text-3xl font-semibold text-[var(--neutral-900)]">Everything you need for spotless floors.</h2>
            </div>
            <p className="max-w-xl text-[var(--neutral-600)]">
              Transparent bundles, add-ons for pets and emergencies, and a team that documents each pass so you know exactly what was treated.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.name} className="card-surface flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>
                    {service.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--neutral-900)]">{service.name}</h3>
                    <p className="text-sm font-semibold text-[var(--brand-primary-500)]">{service.price}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--neutral-600)]">{service.description}</p>
                <ul className="flex flex-wrap gap-2 text-xs font-semibold text-[var(--brand-primary-500)]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-full bg-[var(--neutral-100)] px-3 py-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="proof" className="section-shell scroll-mt-32">
          <div className="rounded-[28px] bg-white p-8 shadow-[var(--shadow-soft)]">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
              <div>
                <p className="eyebrow">Proof & Guarantees</p>
                <h2 className="mt-2 text-3xl font-semibold text-[var(--neutral-900)]">
                  Numbers + promises, right up front.
                </h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-[var(--neutral-200)] p-5">
                      <p className="stat-number text-4xl text-[var(--brand-primary-700)]">{stat.value}</p>
                      <p className="text-sm text-[var(--neutral-600)]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-[var(--brand-primary-900)] p-6 text-white">
                <h3 className="text-2xl font-semibold">Gotta-love-it guarantee</h3>
                <p className="mt-3 text-sm text-white/80">
                  If any section wick backs or still feels gritty after 7 days, we return and re-treat free. Emergency water lifts include moisture tracking and insurance-ready reports.
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent-aqua)]" />
                    Fiber-safe chemistry certified by Carpet & Rug Institute
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent-sunrise)]" />
                    Team background checked & insured up to $2M
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--support-success)]" />
                    Text + email updates every step of the visit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section-shell scroll-mt-32">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <div>
              <p className="eyebrow">Process</p>
              <h2 className="text-3xl font-semibold text-[var(--neutral-900)]">A four-step playbook homeowners rave about.</h2>
              <div className="mt-8 space-y-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="rounded-2xl border border-[var(--neutral-200)] p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-[var(--brand-primary-500)]">0{index + 1}</span>
                        <h3 className="text-lg font-semibold text-[var(--neutral-900)]">{step.title}</h3>
                      </div>
                      <span className="rounded-full bg-[var(--neutral-100)] px-3 py-1 text-xs text-[var(--neutral-600)]">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-[var(--neutral-600)]">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold text-[var(--neutral-900)]">FAQs in 30 seconds</h3>
              <div className="mt-6 space-y-5">
                {faqs.map((faq) => (
                  <details key={faq.q} className="rounded-2xl border border-[var(--neutral-200)] p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-[var(--neutral-900)]">
                      {faq.q}
                    </summary>
                    <p className="mt-3 text-sm text-[var(--neutral-600)]">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="section-shell scroll-mt-32">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="eyebrow">Reviews & proof</p>
                  <h2 className="text-3xl font-semibold text-[var(--neutral-900)]">Real people, residue-free floors.</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {reviewChannels.map((channel) => (
                    <a
                      key={channel.label}
                      href={channel.url}
                      className="rounded-2xl border border-[var(--neutral-200)] px-4 py-2 text-xs font-semibold text-[var(--neutral-600)] hover:border-[var(--brand-primary-300)]"
                    >
                      {channel.label} · {channel.rating} ({channel.count})
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {reviews.map((review) => (
                  <article key={review.author} className="rounded-3xl bg-white p-5 shadow-[var(--shadow-soft)]">
                    <div className="flex items-center gap-2 text-sm text-[var(--accent-aqua)]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon key={index} filled={index < review.rating} />
                      ))}
                      <span className="ml-1 text-xs uppercase tracking-wide text-[var(--neutral-500)]">
                        {review.channel}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-[var(--neutral-600)]">“{review.quote}”</p>
                    <p className="mt-6 text-sm font-semibold text-[var(--neutral-900)]">
                      {review.author} · {review.location}
                    </p>
                    <p className="text-xs text-[var(--neutral-500)]">{review.service}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] bg-white p-6 shadow-[var(--shadow-hover)]">
              <p className="eyebrow">Leave a review</p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--neutral-900)]">Share your results + photos</h3>
              <p className="mt-2 text-sm text-[var(--neutral-600)]">
                Your words fuel our next jobs. Send your highlight reel and we’ll feature you within a day.
              </p>
              <ReviewForm services={services.map((service) => service.name)} />
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell scroll-mt-32">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-white p-8 shadow-[var(--shadow-soft)]">
              <p className="eyebrow">Contact & lead form</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--neutral-900)]">Tell us what needs love.</h2>
              <p className="mt-3 text-sm text-[var(--neutral-600)]">
                No scheduling tool yet—just a fast form, real humans, and a promise to reply within 20 minutes during London hours.
              </p>
              <div className="mt-6 space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center justify-between rounded-2xl border border-[var(--neutral-200)] px-4 py-4 text-sm text-[var(--neutral-700)] hover:border-[var(--brand-primary-300)]"
                  >
                    <div>
                      <p className="font-semibold text-[var(--neutral-900)]">{method.label}</p>
                      <p>{method.value}</p>
                    </div>
                    <span className="text-xs uppercase tracking-wide text-[var(--neutral-500)]">{method.detail}</span>
                  </a>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-[var(--neutral-100)] p-4">
                <p className="text-sm font-semibold text-[var(--neutral-700)]">Service area</p>
                <p className="mt-2 text-xs text-[var(--neutral-500)]">
                  Same-week across these boroughs, with travel add-ons beyond.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-[var(--brand-primary-500)]">
                  {serviceAreas.map((area) => (
                    <span key={area} className="rounded-full bg-white px-3 py-1">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-[32px] bg-white p-6 shadow-[var(--shadow-hover)] sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
      <Footer serviceAreas={serviceAreas} />
    </div>
  );
}
