import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { serviceAreas } from "@/lib/constants";
import { siteNavLinks } from "@/lib/navLinks";
import type { Metadata } from "next";
import Link from "next/link";

const caseStudies = [
  {
    title: "Canal-side flat refresh",
    location: "Angel, N1",
    service: "Whole-flat reset + odour lift",
    problem:
      "Four-year-old wool loop with pet accidents and balcony moisture that left a musty smell across the lounge.",
    solution:
      "Blacklight mapping, enzyme flood, low-moisture wool rinse, and turbo dryers angled out the balcony door.",
    metrics: [
      { label: "Dry time", value: "2 hrs" },
      { label: "Stains removed", value: "9 / 9" },
      { label: "Review score", value: "⭐️⭐️⭐️⭐️⭐️" },
    ],
    notes: "Client rebooked for a quarterly freshen and left before/after photos for socials.",
  },
  {
    title: "Boutique letting turnover",
    location: "Shoreditch, E2",
    service: "Emergency water lift",
    problem:
      "Burst radiator valve soaked a bedroom and hallway runner 48 hours before new tenants arrived.",
    solution:
      "Two-stage extraction, antimicrobial misting, subfloor moisture logging, and insurance-ready documentation.",
    metrics: [
      { label: "Arrival", value: "45 min" },
      { label: "Moisture drop", value: "27% → 6%" },
      { label: "Tenancy delay", value: "0 days" },
    ],
    notes: "Lettings agent now keeps The Carpet Lad on retainer for rush jobs.",
  },
  {
    title: "Heritage townhouse stairs",
    location: "Kensington, W8",
    service: "Staircase & runner detail",
    problem:
      "Hand-bound sisal runner embedded with soot and cocktail spills after a private event.",
    solution:
      "Dry soil extraction, pH-balanced spotters, fan-assisted drying, and grooming to restore the weave definition.",
    metrics: [
      { label: "Steps detailed", value: "32" },
      { label: "Touch-ups needed", value: "0" },
      { label: "Client", value: "Event planner" },
    ],
    notes: "Resulted in a referral to a full-building maintenance contract down the street.",
  },
];

export const metadata: Metadata = {
  title: "Case Studies | The Carpet Lad",
  description: "Documented before-and-after stories for London flats, rentals, and heritage homes.",
};

export default function CaseStudiesPage() {
  return (
    <div className="relative overflow-hidden bg-[var(--neutral-050)] pb-16 text-[color:var(--neutral-900)] sm:pb-24">
      <div className="absolute inset-x-0 top-[-200px] h-[420px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(30,91,216,0.15),_transparent_65%)] blur-3xl" />
      <div className="layout-grid relative z-10 space-y-16">
        <Header navLinks={siteNavLinks} />

        <section className="section-shell">
          <p className="eyebrow">Proof in practice</p>
          <h1 className="mt-3 text-4xl font-semibold text-[var(--neutral-900)]">Before-and-after stories across London.</h1>
          <p className="mt-4 max-w-2xl text-[var(--neutral-600)]">
            Each visit is documented with moisture logs, chemistry callouts, and photos we can hand back to landlords, agencies, and homeowners.
            Here are a few favourites that showcase what residue-free cleaning looks like in the city.
          </p>
        </section>

        <section className="section-shell grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="flex h-full flex-col gap-5 rounded-[28px] bg-white p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-[var(--neutral-400)]">
                <span>{study.location}</span>
                <span>{study.service}</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[var(--neutral-900)]">{study.title}</h2>
                <p className="mt-2 text-sm text-[var(--neutral-600)]">{study.problem}</p>
                <p className="mt-3 rounded-2xl bg-[var(--neutral-050)] p-4 text-sm text-[var(--neutral-700)]">
                  <span className="font-semibold text-[var(--brand-primary-600)]">Solution: </span>
                  {study.solution}
                </p>
              </div>
              <dl className="grid grid-cols-3 gap-3 text-center text-sm">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-[var(--neutral-200)] p-3">
                    <dt className="text-xs uppercase tracking-[0.25em] text-[var(--neutral-500)]">{metric.label}</dt>
                    <dd className="mt-1 text-lg font-semibold text-[var(--neutral-900)]">{metric.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-[var(--neutral-500)]">{study.notes}</p>
            </article>
          ))}
        </section>

        <section className="section-shell rounded-[32px] bg-[var(--brand-primary-900)] p-8 text-white">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow text-white">Have a project worth capturing?</p>
              <h2 className="mt-3 text-3xl font-semibold">We’ll document it like a magazine spread.</h2>
              <p className="mt-4 text-sm text-white/80">
                Paired before/after shots, moisture readings, and leave-behind care notes—perfect for landlords, facilities teams, and marketing recaps.
              </p>
            </div>
            <div className="rounded-[28px] bg-white/10 p-6">
              <p className="text-sm font-semibold text-white">Same-week dispatch</p>
              <ul className="mt-3 space-y-2 text-sm text-white/85">
                <li>📸 Micro-gallery of every treated surface</li>
                <li>🧪 Chemistry + dwell time log</li>
                <li>📊 Moisture + temperature chart</li>
              </ul>
              <Link
                href="/#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-[var(--brand-primary-700)]"
              >
                Book a documented visit
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer serviceAreas={serviceAreas} />
    </div>
  );
}
