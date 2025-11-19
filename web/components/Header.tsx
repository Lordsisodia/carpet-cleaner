"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "./LogoMark";

type NavLink = {
  href: string;
  label: string;
};

type HeaderProps = {
  navLinks: NavLink[];
};

export function Header({ navLinks }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-4 z-30">
        <div className="flex flex-col gap-3 rounded-[32px] border border-white/50 bg-white/90 px-5 py-4 text-sm shadow-[0_20px_40px_rgba(3,21,50,0.08)] backdrop-blur-xl sm:px-6 sm:py-5">
          <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
            <LogoMark />
            <nav
              className="hidden flex-1 flex-wrap items-center justify-center gap-2 text-sm font-medium text-[var(--neutral-700)] lg:flex"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-1 transition hover:bg-[var(--neutral-100)] hover:text-[var(--brand-primary-500)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden items-center gap-2 lg:flex">
              <Link
                href="/#reviews"
                className="rounded-full border border-[var(--brand-primary-200)] px-4 py-2 text-sm font-semibold text-[var(--brand-primary-500)] transition hover:border-[var(--brand-primary-500)]"
              >
                Leave a review
              </Link>
              <Link
                href="/#contact"
                className="rounded-full bg-[var(--accent-aqua)] px-4 py-2 text-sm font-semibold text-[var(--brand-primary-900)] shadow-[0_10px_25px_rgba(8,55,119,0.18)] transition hover:-translate-y-[1px]"
              >
                Book cleaning
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/70 bg-white/85 px-4 py-2 text-xs font-semibold text-[var(--neutral-600)] shadow-[0_12px_25px_rgba(3,20,55,0.12)] lg:hidden">
            <span className="inline-flex items-center gap-2 text-[var(--neutral-500)]">
              <span className="inline-flex h-2 w-2 rounded-full bg-[var(--support-success)]" />
              Same-week openings
            </span>
            <Link
              href="/#contact"
              className="flex-1 rounded-full bg-[var(--accent-aqua)] px-4 py-2 text-center text-sm font-semibold text-[var(--brand-primary-900)] shadow-[0_10px_25px_rgba(8,55,119,0.18)]"
            >
              Book cleaning
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--neutral-200)] text-[var(--neutral-700)] transition hover:border-[var(--neutral-400)]"
              aria-label="Open site navigation"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-[rgba(5,10,24,0.55)] backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden
          />
          <nav
            id="mobile-nav"
            className="fixed inset-x-4 top-16 z-50 rounded-[32px] bg-white p-6 text-[var(--neutral-900)] shadow-[0_35px_80px_rgba(5,16,41,0.35)]"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--neutral-400)]">
                Navigate
              </p>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--neutral-200)] text-[var(--neutral-700)] transition hover:border-[var(--neutral-400)]"
                aria-label="Close navigation"
                onClick={closeMenu}
              >
                <CloseIcon />
              </button>
            </div>
            <div className="mt-4 space-y-2 text-lg font-semibold text-[var(--neutral-800)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl px-3 py-3 transition hover:bg-[var(--neutral-050)]"
                  onClick={closeMenu}
                >
                  {link.label}
                  <ArrowIcon />
                </Link>
              ))}
            </div>
            <Link
              href="/#contact"
              className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[var(--brand-primary-900)] px-4 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(5,16,41,0.25)]"
              onClick={closeMenu}
            >
              Book a cleaning
            </Link>
            <Link
              href="/#reviews"
              className="mt-3 block text-center text-sm font-semibold text-[var(--brand-primary-500)]"
              onClick={closeMenu}
            >
              Leave a review
            </Link>
            <div className="mt-6 rounded-2xl bg-[var(--neutral-050)] p-4 text-sm text-[var(--neutral-700)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--neutral-500)]">
                Text dispatch
              </p>
              <p className="mt-2 text-base font-semibold text-[var(--neutral-900)]">07545 836823</p>
              <p className="text-xs text-[var(--neutral-500)]">Live humans 7a–9p GMT • Most same-week slots open.</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 7h14M5 12h14M5 17h10" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m7 7 10 10M17 7 7 17" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-5 w-5 text-[var(--neutral-300)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
