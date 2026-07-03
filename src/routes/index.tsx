import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Rocket, Bot, MessageSquare, Cloud, Cpu, Code2, Layers,
  ShieldCheck, Zap, Server, LifeBuoy, TrendingUp, Sparkles, CheckCircle2,
  Globe, Mail,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import heroAi from "@/assets/hero-ai.png";
import wpaiDash from "@/assets/wpai-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BitapTech — AI & SaaS Products for Modern Businesses" },
      {
        name: "description",
        content:
          "BitapTech builds AI-powered SaaS products, automation platforms and custom software that help businesses scale, automate and grow.",
      },
      { property: "og:title", content: "BitapTech — AI & SaaS Products for Modern Businesses" },
      { property: "og:description", content: "AI-powered SaaS products, automation platforms and custom software." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BitapTech",
          url: "https://bitaptech.com",
          email: "hello@bitaptech.com",
          description:
            "Indian software company building AI-powered SaaS products and automation platforms.",
          sameAs: ["https://wpai.co.in"],
        }),
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Bespoke platforms tailored to your workflow." },
  { icon: Bot, title: "AI Development", desc: "LLM apps, agents and intelligent automation." },
  { icon: MessageSquare, title: "WhatsApp Automation", desc: "Conversational commerce & support at scale." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Modern, resilient cloud-native architectures." },
  { icon: Layers, title: "API Development", desc: "Robust, versioned, well-documented APIs." },
  { icon: Globe, title: "Web Applications", desc: "Fast, accessible web apps that convert." },
  { icon: Server, title: "Mobile Backend", desc: "Scalable backends for iOS and Android." },
  { icon: Cpu, title: "Automation Solutions", desc: "Replace manual work with reliable automation." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Enterprise Security" },
  { icon: TrendingUp, title: "Scalable Infrastructure" },
  { icon: Zap, title: "Fast Development" },
  { icon: LifeBuoy, title: "Reliable Support" },
  { icon: Cloud, title: "Cloud Native" },
  { icon: Sparkles, title: "Modern Technologies" },
  { icon: CheckCircle2, title: "Affordable Pricing" },
  { icon: Rocket, title: "Built for Growth" },
];

const stack = [
  "Node.js", "TypeScript", "React", "Next.js", "Docker",
  "Azure", "Cloudflare", "Redis", "PostgreSQL", "OpenAI",
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-40 blur-3xl"
          style={{ background: "conic-gradient(from 180deg at 50% 50%, #2563EB, #3B82F6, #60a5fa, #2563EB)" }}
        />
        <img
          src={heroAi}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-20 top-24 w-[520px] max-w-[70vw] opacity-70 dark:opacity-40 animate-float-slow hidden md:block"
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-16 sm:pt-24 pb-20 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">
              <Rocket className="h-3.5 w-3.5 text-primary" />
              MSME Registered Software Company
            </span>

            <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Building <span className="text-gradient">AI Products</span> that power modern businesses.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              BitapTech develops AI-powered SaaS products, automation platforms and custom
              software that help businesses scale faster, automate operations and improve
              customer experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-gradient-primary text-white font-medium shadow-glow hover:opacity-95 transition"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl glass-strong font-medium hover:bg-accent transition"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Enterprise ready</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Cloud native</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> AI first</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / MISSION */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="text-sm font-medium text-primary">About BitapTech</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              An Indian software company building the AI-native future.
            </h2>
            <p className="mt-5 text-muted-foreground">
              BitapTech is focused on innovative SaaS products and AI-powered business
              solutions. We combine deep engineering with product craft to deliver software
              that scales.
            </p>
            <p className="mt-4 text-muted-foreground">
              <span className="font-semibold text-foreground">Our mission:</span> Build
              simple yet powerful software that helps businesses automate, grow and scale.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Artificial Intelligence", "SaaS Platforms", "Business Automation",
                "WhatsApp Automation", "API Development", "Cloud Infrastructure",
                "Enterprise Software", "Custom Solutions",
              ].map((s) => (
                <div key={s} className="glass rounded-xl p-4 flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
            <div>
              <div className="text-sm font-medium text-primary">Featured Product</div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Meet WpAI.</h2>
            </div>
            <a
              href="https://wpai.co.in"
              target="_blank" rel="noreferrer"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
            >
              Visit WpAI <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-elegant">
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-10 flex flex-col">
                <div className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Live
                </div>
                <h3 className="mt-4 text-3xl font-bold">WpAI</h3>
                <p className="mt-1 text-sm text-muted-foreground">WhatsApp AI Automation Platform</p>
                <p className="mt-4 text-muted-foreground">
                  WpAI helps businesses automate conversations, customer support, marketing
                  campaigns, lead management and business communication — all powered by AI.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                  {["AI Auto Reply","Broadcast Messaging","CRM","Shared Team Inbox","API","Campaigns","Analytics"].map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="https://wpai.co.in"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-gradient-primary text-white font-medium shadow-glow hover:opacity-95 transition"
                  >
                    Visit WpAI <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="relative bg-gradient-hero p-6 md:p-8">
                <div className="rounded-2xl overflow-hidden border border-border shadow-elegant bg-background">
                  <img
                    src={wpaiDash}
                    alt="WpAI dashboard preview"
                    loading="lazy"
                    width={1600} height={1024}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* UPCOMING */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="text-sm font-medium text-primary">Upcoming</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">More products, in the making.</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { title: "Smart URL", desc: "Enterprise URL shortening and analytics platform." },
            { title: "AI Business Extractor", desc: "AI-powered business data extraction platform." },
            { title: "More SaaS Products", desc: "More innovative AI products are under development." },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group relative rounded-2xl border border-border bg-card p-6 h-full overflow-hidden hover:-translate-y-1 transition">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-primary opacity-10 blur-2xl group-hover:opacity-20 transition" />
                <div className="inline-flex items-center gap-2 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-medium text-accent-foreground">
                  Coming Soon
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-sm font-medium text-primary">Services</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              End-to-end engineering, done right.
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="group relative rounded-2xl border border-border bg-card p-5 h-full hover:shadow-elegant transition">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-primary text-white mb-4 shadow-glow">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="text-sm font-medium text-primary">Why BitapTech</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
            A partner engineered for growth.
          </h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.04}>
              <div className="rounded-2xl glass p-5 h-full">
                <w.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 font-medium">{w.title}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <section className="py-16 border-y border-border/60 bg-secondary/30 overflow-hidden">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 mb-8">
            <div className="text-sm font-medium text-primary">Tech Stack</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              Modern tools, production tested.
            </h2>
          </div>
        </Reveal>
        <div className="relative">
          <div className="flex gap-4 animate-marquee w-max">
            {[...stack, ...stack].map((t, i) => (
              <div
                key={t + i}
                className="shrink-0 rounded-xl border border-border bg-card px-6 py-3 font-medium text-sm"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 sm:p-16 text-white shadow-glow">
            <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                Let's build something amazing together.
              </h2>
              <p className="mt-4 text-white/85">
                Tell us about your project — we'll help design, engineer and scale it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@bitaptech.com"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white text-primary font-medium hover:bg-white/95 transition"
                >
                  <Mail className="h-4 w-4" /> hello@bitaptech.com
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-white/40 text-white font-medium hover:bg-white/10 transition"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
