import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Globe, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BitapTech" },
      { name: "description", content: "Get in touch with BitapTech. Let's build something amazing together." },
      { property: "og:title", content: "Contact — BitapTech" },
      { property: "og:description", content: "Reach out to start your next AI or SaaS project." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-16">
        <Reveal>
          <div className="text-sm font-medium text-primary">Contact</div>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl">
            Let's build something <span className="text-gradient">amazing together</span>.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            Tell us about your idea. Whether it's an AI product, an automation
            platform or a custom SaaS — we'd love to hear about it.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              <a href="mailto:hello@bitaptech.com" className="flex items-start gap-4 rounded-2xl border border-border p-5 bg-card hover:shadow-elegant transition">
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-primary text-white shadow-glow"><Mail className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium">hello@bitaptech.com</div>
                </div>
              </a>
              <a href="https://bitaptech.com" target="_blank" rel="noreferrer" className="flex items-start gap-4 rounded-2xl border border-border p-5 bg-card hover:shadow-elegant transition">
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-primary text-white shadow-glow"><Globe className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Website</div>
                  <div className="font-medium">bitaptech.com</div>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-2xl glass p-5">
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-primary text-white shadow-glow"><MessageSquare className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Response time</div>
                  <div className="font-medium">Usually within 24 hours</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-elegant"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="text-sm">
                  <span className="text-muted-foreground">Name</span>
                  <input required className="mt-1 w-full h-11 rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                </label>
                <label className="text-sm">
                  <span className="text-muted-foreground">Email</span>
                  <input required type="email" className="mt-1 w-full h-11 rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" placeholder="you@company.com" />
                </label>
              </div>
              <label className="block text-sm mt-4">
                <span className="text-muted-foreground">Company</span>
                <input className="mt-1 w-full h-11 rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" placeholder="Company name" />
              </label>
              <label className="block text-sm mt-4">
                <span className="text-muted-foreground">Project details</span>
                <textarea required rows={5} className="mt-1 w-full rounded-lg border border-input bg-background p-3 outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us what you'd like to build..." />
              </label>
              <button className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-gradient-primary text-white font-medium shadow-glow hover:opacity-95 transition">
                Send message <ArrowRight className="h-4 w-4" />
              </button>
              {sent && (
                <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                  Thanks — we'll be in touch soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
