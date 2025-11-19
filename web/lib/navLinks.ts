export const siteNavLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#proof", label: "Proof" },
  { href: "/#process", label: "Process" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/products", label: "Products" },
] as const;

export type SiteNavLink = (typeof siteNavLinks)[number];
