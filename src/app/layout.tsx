import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Providers } from "./providers";
import { SITE, SITE_URL, PRODUCTS } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BitapTech — AI & SaaS Products for Modern Businesses",
    template: "%s — BitapTech",
  },
  description: SITE.description,
  metadataBase: new URL(SITE_URL),
  applicationName: "BitapTech",
  keywords: [
    "AI SaaS",
    "WhatsApp Automation",
    "WhatsApp Business API",
    "Custom Software India",
    "Business Automation",
    "SaaS Products",
  ],
  authors: [{ name: "BitapTech" }],
  creator: "BitapTech",
  publisher: "BitapTech",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "BitapTech — AI & SaaS Products for Modern Businesses",
    description: "AI-powered SaaS products, automation platforms and custom software.",
    type: "website",
    url: SITE_URL,
    siteName: "BitapTech",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BitapTech — AI & SaaS Products for Modern Businesses",
    description: "AI-powered SaaS products, automation platforms and custom software.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE_URL,
      logo: SITE.logo,
      email: SITE.email,
      description: SITE.description,
      sameAs: SITE.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: PRODUCTS.wpai.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: PRODUCTS.wpai.url,
      description:
        "WpAI helps businesses automate WhatsApp conversations, marketing campaigns, lead management and support with AI.",
      offers: { "@type": "Offer", priceCurrency: "INR" },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YYS4GLQT0X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYS4GLQT0X');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Nav />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
