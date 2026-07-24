import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a live demo of BitapTech's AI-powered SaaS products — WhatsApp automation, messaging gateways, and custom software engineering.",
  alternates: { canonical: "/book-demo" },
  openGraph: {
    title: "Book a Demo — BitapTech",
    description:
      "Book a live demo of BitapTech's AI-powered SaaS products — WhatsApp automation, messaging gateways, and custom software engineering.",
    url: "/book-demo",
  },
};

export default function BookDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
