import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — BitapTech" },
      { name: "description", content: "The terms that govern your use of BitapTech's website and products." },
      { property: "og:title", content: "Terms of Service — BitapTech" },
      { property: "og:description", content: "Terms governing BitapTech services." },
      { property: "og:url", content: "/terms" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2026</p>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            By using BitapTech's website and services, you agree to these terms.
            These terms may be updated from time to time; changes take effect when posted.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Use of services</h2>
            <p className="mt-2">
              You agree to use our services lawfully and not to attempt to disrupt,
              reverse engineer, or misuse them.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
            <p className="mt-2">
              All content, product names, logos and code on this site are the property
              of BitapTech unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Disclaimer</h2>
            <p className="mt-2">
              Our services are provided "as is" without warranties of any kind.
              We are not liable for indirect or consequential damages.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-2">
              Questions? Email <a href="mailto:hello@bitaptech.com" className="text-primary">hello@bitaptech.com</a>.
            </p>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
