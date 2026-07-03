import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore BitapTech's AI-powered SaaS products including WpAI, Smart URL and more.",
};

export default function ProductsPage() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 relative">
        <Reveal>
          <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Our Products</div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-display leading-[1.1]">
            SaaS products, <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">powered by AI</span>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We build focused products that solve real business problems — from
            customer communication to analytics and automation.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 relative z-10">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/65 backdrop-blur-sm shadow-elegant hover:border-primary/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="p-8 sm:p-12 flex flex-col">
                <div className="inline-flex self-start items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs font-semibold border border-emerald-500/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Live Product
                </div>
                <h2 className="mt-5 text-3xl font-bold font-display">WpAI</h2>
                <p className="text-sm font-medium text-muted-foreground">WhatsApp AI Automation Platform</p>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Automate conversations, customer support, marketing campaigns, lead management
                  and business communication — all in one AI platform.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm font-medium">
                  {["AI Auto Reply", "Broadcast Messaging", "CRM", "Shared Team Inbox", "API", "Campaigns", "Analytics"].map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wpai.co.in"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex self-start items-center gap-2 h-12 px-6 rounded-xl bg-gradient-primary text-white font-semibold shadow-glow hover:opacity-95 hover:scale-[1.02] transition-all duration-200"
                >
                  Visit WpAI <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="bg-gradient-hero p-6 md:p-10 flex justify-center items-center">
                <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-background group relative w-full aspect-video">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  <video
                    src="https://res.cloudinary.com/dqneqoigw/video/upload/v1782501718/wpaihero_moc2m2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-xl shadow-lg border border-border/40 hover:scale-[1.01] transition-transform duration-500 relative z-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-border/20">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-display">Upcoming products</h2>
          <p className="mt-2 text-muted-foreground">A pipeline of AI-native products, launching soon.</p>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { t: "Smart URL", d: "Enterprise URL shortening and analytics platform." },
            { t: "AI Business Extractor", d: "AI-powered business data extraction platform." },
            { t: "More SaaS Products", d: "More innovative AI products are under development." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="group relative rounded-2xl border border-border/40 bg-card/50 p-7 h-full overflow-hidden hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-elegant transition-all duration-300">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-primary opacity-10 blur-2xl group-hover:opacity-20 transition" />
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary/80 dark:bg-white/5 border border-border/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">Coming Soon</div>
                <h3 className="mt-5 text-xl font-bold font-display">{p.t}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 relative">
        <div className="rounded-3xl border border-border/45 p-12 sm:p-16 text-center glass shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">Have a product idea?</h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">Let's partner up to design, build, and deploy it with our modern enterprise stack.</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-gradient-primary text-white font-semibold shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
