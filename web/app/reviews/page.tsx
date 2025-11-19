import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ReviewForm from "@/components/ReviewForm";
import { contactMethods, reviewChannels, reviews } from "@/lib/content";
import { serviceAreas } from "@/lib/constants";
import { siteNavLinks } from "@/lib/navLinks";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reviews | The Carpet Lad",
  description: "Read what London homeowners say about The Carpet Lad and share your own review with photos in a few taps.",
};

export default function ReviewsPage() {
  return (
    <div className="relative overflow-hidden bg-[var(--neutral-050)] pb-16 text-[var(--neutral-900)] sm:pb-24">
      <div className="absolute inset-x-0 top-[-200px] h-[360px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(3,21,50,0.35),_transparent_70%)] blur-3xl" />
      <div className="layout-grid relative z-10 space-y-12 md:space-y-16">
        <Header navLinks={siteNavLinks} />

        <section className="section-shell">
          <div className="rounded-[32px] bg-white p-8 shadow-[var(--shadow-soft)]">
            <p className="eyebrow">London trusts The Carpet Lad</p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl font-semibold sm:text-4xl">
                  400+ five-star reviews across Google, Trustpilot, and Checkatrade.
                </h1>
                <p className="mt-4 max-w-2xl text-[var(--neutral-600)]">
                  Every clean ends with a follow-up text requesting honest feedback. Drop yours below—photos encouraged—and our team will feature it
                  within a day.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  {reviewChannels.map((channel) => (
                    <span key={channel.label} className="inline-flex items-center gap-2 rounded-full bg-[var(--neutral-100)] px-4 py-2">
                      {channel.label} • {channel.rating} ({channel.count})
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary-900)] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(5,16,41,0.25)]"
              >
                Book a clean
              </Link>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.author} className="rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-2 text-sm text-[var(--accent-aqua)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>⭐️</span>
                  ))}
                  <span className="ml-1 text-xs uppercase tracking-wide text-[var(--neutral-500)]">{review.channel}</span>
                </div>
                <p className="mt-4 text-sm text-[var(--neutral-600)]">“{review.quote}”</p>
                <p className="mt-6 text-sm font-semibold text-[var(--neutral-900)]">
                  {review.author} · {review.location}
                </p>
                <p className="text-xs text-[var(--neutral-500)]">{review.service}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] bg-white p-6 shadow-[var(--shadow-hover)]">
              <p className="eyebrow">Leave a review</p>
              <h2 className="mt-2 text-2xl font-semibold">Share the before/after magic</h2>
              <p className="mt-2 text-sm text-[var(--neutral-600)]">
                Attach your favourite photos (max 3) and we’ll highlight them on the site and socials.
              </p>
              <ReviewForm services={servicesForReviewForm} />
            </div>
            <div className="rounded-[32px] bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="eyebrow">Prefer the phone?</p>
              <div className="mt-4 space-y-4 text-sm text-[var(--neutral-700)]">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center justify-between rounded-2xl border border-[var(--neutral-200)] px-4 py-4 hover:border-[var(--brand-primary-300)]"
                  >
                    <div>
                      <p className="font-semibold text-[var(--neutral-900)]">{method.label}</p>
                      <p>{method.value}</p>
                    </div>
                    <span className="text-xs uppercase tracking-wide text-[var(--neutral-500)]">{method.detail}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer serviceAreas={serviceAreas} />
    </div>
  );
}

const servicesForReviewForm = [
  "Whole-flat carpet reset",
  "Pet treatment & odour lift",
  "Upholstery & area rugs",
  "Emergency water lift",
];
