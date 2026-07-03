import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Providers } from "./providers";

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
  description:
    "BitapTech builds AI-powered SaaS products, automation platforms and custom software that help businesses scale, automate and grow.",
  metadataBase: new URL("https://bitaptech.com"),
  keywords: ["AI SaaS", "WhatsApp Automation", "Custom Software India", "Business Automation", "SaaS Products"],
  authors: [{ name: "BitapTech" }],
  openGraph: {
    title: "BitapTech — AI & SaaS Products for Modern Businesses",
    description: "AI-powered SaaS products, automation platforms and custom software.",
    type: "website",
    url: "https://bitaptech.com",
    siteName: "BitapTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "BitapTech — AI & SaaS Products for Modern Businesses",
    description: "AI-powered SaaS products, automation platforms and custom software.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20`}
      >
        <Providers>
          <Nav />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
