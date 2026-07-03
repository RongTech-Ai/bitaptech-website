import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import wpaiDash from "@/assets/wpai-dashboard.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — BitapTech" },
      { name: "description", content: "Explore BitapTech's AI-powered SaaS products including WpAI, Smart URL and more." },
      { property: "og:title", content: "Products — BitapTech" },
      { property: "og:description", content: "AI-powered SaaS products built for modern businesses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-12">
        <Reveal>
          <div className="text-sm font-medium text-primary">Our Products</div>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight">
            SaaS products, <span className="text-gradient">powered by AI</span>.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            We build focused products that solve real business problems — from
            customer communication to analytics and automation.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <Reveal>
          <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-elegant">
            <div className="grid md:grid-cols-2">
              <div className="p-10 flex flex-col">
                <div className="inline-flex self-start items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Live
                </div>
                <h2 className="mt-4 text-3xl font-bold">WpAI</h2>
                <p className="text-sm text-muted-foreground">WhatsApp AI Automation Platform</p>
                <p className="mt-4 text-muted-foreground">
                  Automate conversations, customer support, marketing campaigns, lead management
                  and business communication — all in one AI platform.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                  {["AI Auto Reply","Broadcast Messaging","CRM","Shared Team Inbox","API","Campaigns","Analytics"].map(f => (
                    <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {f}</li>
                  ))}
                </ul>
                <a
                  href="https://wpai.co.in" target="_blank" rel="noreferrer"
                  className="mt-8 inline-flex self-start items-center gap-2 h-11 px-5 rounded-xl bg-gradient-primary text-white font-medium shadow-glow hover:opacity-95 transition"
                >
                  Visit WpAI <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="bg-gradient-hero p-8">
                <img src={wpaiDash} alt="WpAI dashboard" loading="lazy" width={1600} height={1024}
                  className="rounded-2xl border border-border shadow-elegant w-full h-auto" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Upcoming products</h2>
          <p className="mt-2 text-muted-foreground">A pipeline of AI-native products, launching soon.</p>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[
            { t: "Smart URL", d: "Enterprise URL shortening and analytics platform." },
            { t: "AI Business Extractor", d: "AI-powered business data extraction platform." },
            { t: "More SaaS Products", d: "More innovative AI products are under development." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="group relative rounded-2xl border border-border bg-card p-6 h-full overflow-hidden hover:-translate-y-1 transition">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-primary opacity-10 blur-2xl group-hover:opacity-20 transition" />
                <div className="inline-flex items-center gap-2 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-medium">Coming Soon</div>
                <h3 className="mt-4 text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-border p-10 sm:p-14 text-center glass">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Have a product idea?</h2>
          <p className="mt-3 text-muted-foreground">Let's build it together.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-gradient-primary text-white font-medium shadow-glow">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
