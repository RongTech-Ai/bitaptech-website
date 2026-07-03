import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BitapTech collects, uses and protects your data.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden w-full bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      
      <article className="mx-auto max-w-3xl px-6 py-12 relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight font-display text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground font-medium">Last updated: January 2026</p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <p>
            This page is maintained by BitapTech to explain how we handle information
            on our marketing website and product surfaces. It is not legal advice.
          </p>

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-xl font-bold text-foreground font-display">Information we collect</h2>
            <p className="mt-3">
              We collect information you provide directly — such as your name, email
              and message when you contact us — and basic analytics needed to operate
              and improve our website.
            </p>
          </div>

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-xl font-bold text-foreground font-display">How we use information</h2>
            <p className="mt-3">
              We use the information you share to respond to inquiries, deliver
              services, and improve product experience. We do not sell personal data.
            </p>
          </div>

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-xl font-bold text-foreground font-display">Data protection</h2>
            <p className="mt-3">
              Data is stored on trusted cloud infrastructure with access controls,
              encryption in transit, and regular reviews.
            </p>
          </div>

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-xl font-bold text-foreground font-display">Your choices</h2>
            <p className="mt-3">
              You can request access to or deletion of your personal data by writing
              to us at{" "}
              <a href="mailto:info@bitaptech.com" className="text-primary font-semibold hover:underline">
                info@bitaptech.com
              </a>
              .
            </p>
          </div>

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-xl font-bold text-foreground font-display">Contact</h2>
            <p className="mt-3">
              For privacy questions, email{" "}
              <a href="mailto:info@bitaptech.com" className="text-primary font-semibold hover:underline">
                info@bitaptech.com
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
