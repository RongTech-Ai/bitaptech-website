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
  /** Registered business details — shown publicly for payment-gateway / KYC compliance. */
  business: {
    // Registered entity name as per KYC. TODO: replace with the exact registered name if different.
    registeredName: process.env.NEXT_PUBLIC_BUSINESS_NAME || "6351910962",
    address:
      process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ||
      "Rongpara, Andichak, Chitrasenpur, West Bengal, India",
    // TODO: replace with a real, reachable business phone number (required by PhonePe).
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+91 00000 00000",
    hours: "Monday to Friday, 9:00 – 18:00 IST",
  },
  description:
    "BitapTech builds AI-powered SaaS products, automation platforms and custom software that help businesses scale, automate and grow.",
  logo: `${SITE_URL}/assets/logo-square.png`,
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
  omiLink: {
    name: "OMI Link",
    url: "https://short.bitaptech.com",
    tagline: "Free URL shortener, QR code generator, and link analytics",
  },
} as const;
