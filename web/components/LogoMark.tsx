import type { CSSProperties } from "react";

const badgeStyle: CSSProperties = {
  backgroundImage: "var(--gradient-hero)",
};

export function LogoMark({ tagline }: { tagline?: string }) {
  return (
    <div className="flex items-center gap-3" aria-label="The Carpet Lad">
      <span
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-[var(--shadow-hover)]"
        style={badgeStyle}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.7 14.3c0 4.8-3.9 8.7-8.7 8.7s-8.7-3.9-8.7-8.7S9.2 5.6 14 5.6c1.6 0 3.1.4 4.4 1.2-2 .5-3.8 1.5-5.2 2.9-1.5 1.5-2.5 3.4-2.9 5.4 1.4-1.5 3.4-2.4 5.6-2.4 2.2 0 4.2.9 5.6 2.4.1-.7.2-1.3.2-2z"
            fill="url(#waveGradient)"
          />
          <defs>
            <linearGradient
              id="waveGradient"
              x1="6"
              y1="6"
              x2="22"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#37D6FF" />
              <stop offset="1" stopColor="#5E8DFF" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <div>
        <p className="text-sm font-semibold text-[var(--brand-primary-500)]">
          The Carpet Lad
        </p>
        <p className="text-xs text-[var(--neutral-500)]">
          {tagline ?? "Residue-free cleaning across London"}
        </p>
      </div>
    </div>
  );
}
