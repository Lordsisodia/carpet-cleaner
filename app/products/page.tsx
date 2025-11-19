import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { serviceAreas } from "@/lib/constants";
import { siteNavLinks } from "@/lib/navLinks";
import type { Metadata } from "next";

const products = [
  {
    name: "Residue-Free Spotter",
    tagline: "Plant-based booster for wool, sisal, and nylon",
    description:
      "pH-neutral surfactants plus oxygen boosters that lift spills without leaving crunchy fibres. Perfect for between-visit cleanups.",
    status: "Launching February",
    price: "£19",
    features: ["WoolSafe pending", "Includes lint-free cloth", "Refill pouch option"],
  },
  {
    name: "Calm After Clean Mist",
    tagline: "Signature ‘clean flat’ scent built with bergamot and cedar",
    description:
      "Room + textile mist that cancels wet-dog smell after rainy-day visits. Safe for upholstery and rugs.",
    status: "Pilot batches",
    price: "£24",
    features: ["Non-aerosol", "Pet-safe oils", "Glass atomiser"],
  },
  {
    name: "Carpet Care Companion Kit",
    tagline: "Everything you need to treat stains within 5 minutes",
    description:
      "Includes spotter, neutraliser, microfiber pads, gloss guide, and QR-linked tutorial clips.",
    status: "Pre-order",
    price: "£48",
    features: ["QR lessons", "Emergency text support", "Refill service"],
  },
];

export const metadata: Metadata = {
  title: "Products | The Carpet Lad",
  description: "Future-friendly care line with residue-free spotters, mists, and DIY kits.",
};

export default function ProductsPage() {
  return (
    <div className="relative overflow-hidden bg-[var(--neutral-050)] pb-16 text-[color:var(--neutral-900)] sm:pb-24">
      <div className="absolute inset-x-0 top-[-200px] h-[420px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(30,91,216,0.12),_transparent_65%)] blur-3xl" />
      <div className="layout-grid relative z-10 space-y-16">
        <Header navLinks={siteNavLinks} />

        <section className="section-shell">
          <p className="eyebrow">Product studio</p>
          <h1 className="mt-3 text-4xl font-semibold text-[var(--neutral-900)]">Tools to keep fibres photo-ready between visits.</h1>
          <p className="mt-4 max-w-2xl text-[var(--neutral-600)]">
            These are the upcoming formulas and kits clients keep asking for. Add yourself to the early list and we’ll text when each drop ships across London.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--neutral-500)]">
            <span className="rounded-full bg-white px-4 py-2">Small-batch pours</span>
            <span className="rounded-full bg-white px-4 py-2">Pet-safe ingredients</span>
            <span className="rounded-full bg-white px-4 py-2">Courier delivery</span>
          </div>
        </section>

        <section className="section-shell grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="flex h-full flex-col gap-4 rounded-[28px] bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--neutral-400)]">{product.status}</p>
              <div>
                <h2 className="text-2xl font-semibold text-[var(--neutral-900)]">{product.name}</h2>
                <p className="text-sm text-[var(--neutral-500)]">{product.tagline}</p>
              </div>
              <p className="text-sm text-[var(--neutral-600)]">{product.description}</p>
              <ul className="space-y-2 text-sm text-[var(--neutral-700)]">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent-aqua)]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between rounded-2xl bg-[var(--neutral-050)] px-4 py-3">
                <span className="text-lg font-semibold text-[var(--neutral-900)]">{product.price}</span>
                <button className="rounded-full bg-[var(--brand-primary-900)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(5,16,41,0.2)]">
                  Join waitlist
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="section-shell grid gap-8 rounded-[32px] bg-white p-8 shadow-[var(--shadow-soft)] lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Want first dibs?</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--neutral-900)]">Pop your details in and we’ll text you samples.</h2>
            <p className="mt-4 text-sm text-[var(--neutral-600)]">
              Early clients get refill discounts, behind-the-scenes R&D clips, and direct messaging with the founder when a stain emergency hits.
            </p>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-[var(--neutral-200)] px-4 py-3 text-sm"
              required
            />
            <input
              type="email"
              placeholder="Best email"
              className="w-full rounded-2xl border border-[var(--neutral-200)] px-4 py-3 text-sm"
              required
            />
            <input
              type="tel"
              placeholder="WhatsApp / mobile"
              className="w-full rounded-2xl border border-[var(--neutral-200)] px-4 py-3 text-sm"
            />
            <textarea
              placeholder="Tell us what you’d use it for"
              className="h-24 w-full rounded-2xl border border-[var(--neutral-200)] px-4 py-3 text-sm"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[var(--brand-primary-900)] px-4 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(5,16,41,0.25)]"
            >
              Save my spot
            </button>
            <p className="text-xs text-[var(--neutral-500)]">We only launch in micro-batches. No spam—just drop alerts and care guides.</p>
          </form>
        </section>
      </div>
      <Footer serviceAreas={serviceAreas} />
    </div>
  );
}
