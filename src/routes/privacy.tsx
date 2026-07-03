import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BitapTech" },
      { name: "description", content: "How BitapTech collects, uses and protects your data." },
      { property: "og:title", content: "Privacy Policy — BitapTech" },
      { property: "og:description", content: "Our privacy practices, in plain language." },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-10 prose-neutral">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2026</p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            This page is maintained by BitapTech to explain how we handle information
            on our marketing website and product surfaces. It is not legal advice.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
            <p className="mt-2">
              We collect information you provide directly — such as your name, email
              and message when you contact us — and basic analytics needed to operate
              and improve our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">How we use information</h2>
            <p className="mt-2">
              We use the information you share to respond to inquiries, deliver
              services, and improve product experience. We do not sell personal data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Data protection</h2>
            <p className="mt-2">
              Data is stored on trusted cloud infrastructure with access controls,
              encryption in transit, and regular reviews.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Your choices</h2>
            <p className="mt-2">
              You can request access to or deletion of your personal data by writing
              to us at <a href="mailto:hello@bitaptech.com" className="text-primary">hello@bitaptech.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              For privacy questions, email <a href="mailto:hello@bitaptech.com" className="text-primary">hello@bitaptech.com</a>.
            </p>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
