/**
 * Central site + organization constants.
 * Single source of truth for SEO metadata, JSON-LD, sitemap and manifest.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://bitaptech.com";

export const SITE = {
  name: "BitapTech",
  legalName: "BitapTech",
  url: SITE_URL,
  email: process.env.NEXT_PUBLIC_SITE_EMAIL || "info@bitaptech.com",
  salesEmail: process.env.NEXT_PUBLIC_SALES_EMAIL || "sales@bitaptech.com",
  description:
    "BitapTech builds AI-powered SaaS products, automation platforms and custom software that help businesses scale, automate and grow.",
  logo: `${SITE_URL}/assets/logo-square.jpg`,
  ogImage: `${SITE_URL}/opengraph-image`,
  sameAs: [
    process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/bitaptech2026",
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/bitap_tech/",
    process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/people/BitapTech/61591364087127/",
  ],
} as const;

/** Products in the BitapTech ecosystem — reused for schema + navigation. */
export const PRODUCTS = {
  wpaiOfficial: {
    name: "WpAI Official",
    url: "https://wpai.co.in",
    tagline: "Official WhatsApp Business Platform on Meta's Cloud API",
  },
  wpai: {
    name: "WpAI",
    url: "https://wpai.co.in",
    tagline: "WhatsApp automation for growing businesses",
  },
  metaCloudApi: {
    name: "WpAI Official Cloud API",
    url: "https://wpai.co.in",
  },
  scannerOne: {
    name: "WpAI Web Session Connect",
    url: "https://inst.wpai.co.in",
  },
} as const;
