export const siteNavLinks = [
  { href: "/", label: "Home" },
  { href: "/reviews", label: "Reviews" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/contact", label: "Contact" },
] as const;

export type SiteNavLink = (typeof siteNavLinks)[number];
