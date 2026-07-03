import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of BitapTech's website and products.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="relative overflow-hidden w-full bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <article className="mx-auto max-w-3xl px-6 py-12 relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight font-display text-foreground">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground font-medium">Last updated: January 2026</p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <p>
            By using BitapTech's website and services, you agree to these terms.
            These terms may be updated from time to time; changes take effect when posted.
          </p>

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-xl font-bold text-foreground font-display">Use of services</h2>
            <p className="mt-3">
              You agree to use our services lawfully and not to attempt to disrupt,
              reverse engineer, or misuse them.
            </p>
          </div>

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-xl font-bold text-foreground font-display">Intellectual property</h2>
            <p className="mt-3">
              All content, product names, logos and code on this site are the property
              of BitapTech unless otherwise stated.
            </p>
          </div>

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-xl font-bold text-foreground font-display">Disclaimer</h2>
            <p className="mt-3">
              Our services are provided "as is" without warranties of any kind.
              We are not liable for indirect or consequential damages.
            </p>
          </div>

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-xl font-bold text-foreground font-display">Contact</h2>
            <p className="mt-3">
              Questions? Email{" "}
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
