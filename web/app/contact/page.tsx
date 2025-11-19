import ContactForm from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contactMethods } from "@/lib/content";
import { serviceAreas } from "@/lib/constants";
import { siteNavLinks } from "@/lib/navLinks";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact The Carpet Lad | Book a clean in London",
  description:
    "Reach The Carpet Lad team for London carpet, upholstery, and emergency water lift appointments. Call, text, or send the form for a reply within 20 minutes.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-[var(--neutral-050)] pb-16 text-[var(--neutral-900)] sm:pb-24">
      <div className="absolute inset-x-0 top-[-180px] h-[320px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(30,91,216,0.28),_transparent_65%)] blur-3xl" />
      <div className="layout-grid relative z-10 space-y-12 md:space-y-16">
        <Header navLinks={siteNavLinks} />

        <section className="section-shell">
          <div className="rounded-[32px] bg-white p-8 shadow-[var(--shadow-soft)]">
            <p className="eyebrow">Let’s get you in the diary</p>
            <h1 className="mt-4 text-3xl font-semibold text-[var(--neutral-900)] sm:text-4xl">
              Text, call, or drop the form—either way you’ll hear back within 20 minutes.
            </h1>
            <p className="mt-4 max-w-3xl text-[var(--neutral-600)]">
              The Carpet Lad covers Zones 1–4 plus neighbouring Surrey and Hertfordshire postcodes. Share a few details about your flat or
              townhouse and we’ll confirm prep instructions, quote ranges, and arrival times.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <Link href="tel:+447545836823" className="inline-flex items-center gap-2 rounded-full bg-[var(--neutral-100)] px-4 py-2">
                📞 07545 836823
              </Link>
              <Link href="mailto:thecarpetlad@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-[var(--neutral-100)] px-4 py-2">
                ✉️ thecarpetlad@gmail.com
              </Link>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-white p-8 shadow-[var(--shadow-soft)]">
              <p className="eyebrow">Call, text, or email</p>
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
              <div className="mt-8 rounded-2xl bg-[var(--neutral-100)] p-4">
                <p className="text-sm font-semibold text-[var(--neutral-700)]">Service area</p>
                <p className="mt-2 text-xs text-[var(--neutral-500)]">Same-week across these boroughs, with travel add-ons beyond.</p>
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
