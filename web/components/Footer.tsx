import { LogoMark } from "./LogoMark";

type FooterProps = {
  serviceAreas: string[];
};

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Our process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Book a visit" },
];

const contactChannels = [
  {
    label: "Call or text",
    value: "07545 836823",
    href: "tel:+447545836823",
    detail: "Live humans 7a–9p GMT",
    icon: IconPhone,
  },
  {
    label: "Email dispatch",
    value: "thecarpetlad@gmail.com",
    href: "mailto:thecarpetlad@gmail.com",
    detail: "Replies within 1 hr",
    icon: IconMail,
  },
];

const trustHighlights = [
  {
    title: "IICRC Certified",
    detail: "Firm #UK-654321 • Residue-free chemistry",
  },
  {
    title: "Licensed & insured",
    detail: "Background-checked crew + COI on request",
  },
];

export function Footer({ serviceAreas }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-[32px] bg-[var(--brand-primary-900)] text-white shadow-[0_30px_65px_rgba(5,22,52,0.35)]">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_rgba(65,161,255,0.35),_transparent_70%)] blur-3xl"
          aria-hidden
        />

        <div className="relative px-6 pt-8 sm:px-10">
          <div className="flex flex-col gap-4 rounded-[28px] border border-white/15 bg-white/10 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
                Need a rush clean?
              </p>
              <p className="mt-2 max-w-xl text-base text-white/90">
                Text our dispatcher—most same-week slots open if you ping before 11a GMT.
              </p>
            </div>
            <a
              href="sms:+447545836823"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-primary-900)] shadow-[0_15px_35px_rgba(6,7,32,0.25)] transition hover:-translate-y-0.5"
              aria-label="Text The Carpet Lad dispatch"
            >
              <IconSparkle />
              Text dispatch
            </a>
          </div>
        </div>

        <div className="relative grid gap-10 border-b border-white/10 px-6 py-12 sm:px-10 md:grid-cols-3">
          <div className="space-y-4">
            <LogoMark tagline="Residue-free across London" />
            <p className="text-sm text-white/70">
              The Carpet Lad brings IICRC-certified techs, pure steam, and pet-safe chemistry for carpets, rugs, and upholstery across London.
            </p>
            <div className="flex gap-3 text-sm text-white/80">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <IconShield />
                7-day touch-up guarantee
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Navigate</p>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-white/85 transition hover:text-[var(--accent-aqua)]"
                  >
                    <IconArrow />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Contact</p>
              <div className="mt-3 space-y-3 text-sm">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.href}
                    href={channel.href}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 px-4 py-3 text-white/85 transition hover:border-white/40"
                  >
                    <channel.icon />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60">{channel.label}</p>
                      <p className="text-base font-semibold text-white">{channel.value}</p>
                      <p className="text-xs text-white/70">{channel.detail}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Trust</p>
              <div className="mt-4 space-y-3">
                {trustHighlights.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Service area</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
                {serviceAreas.map((area) => (
                  <span key={area} className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1">
                    <IconLocation />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center gap-3 px-6 py-6 text-xs text-white/65 sm:flex-row sm:justify-between sm:px-10">
          <p>© {year} The Carpet Lad. All rights reserved.</p>
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-4">
            <a href="#hero" className="flex items-center gap-1 text-white transition hover:text-[var(--accent-aqua)]">
              <IconChevronUp />
              Back to top
            </a>
            <span>License & insured · IICRC certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconPhone() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 text-[var(--accent-aqua)]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5c1 2 3 3.9 5 5l1.6-2L19.5 13l1 3a2 2 0 0 1-1.7 2.5c-6.7-.4-12.3-6-12.7-12.7A2 2 0 0 1 6.5 3.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 text-[var(--accent-aqua)]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="m8 5 8 7-8 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3 5 6v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9V6l-7-3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg className="h-3.5 w-3.5 text-[var(--accent-aqua)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function IconChevronUp() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m6 14 6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg className="h-5 w-5 text-[var(--brand-primary-900)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3v4M12 17v4M4.2 7.2l2.8 2.8M17 16l2.8 2.8M3 12h4M17 12h4M6 18l3-3m5-5 3-3" strokeLinecap="round" />
    </svg>
  );
}
