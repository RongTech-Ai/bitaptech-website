"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, Rocket, Bot, MessageSquare, Cloud, Cpu, Code2, Layers,
  ShieldCheck, Zap, Server, LifeBuoy, TrendingUp, Sparkles, CheckCircle2,
  Globe, Mail,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

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

export default function HomePage() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-4 md:pt-8">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full opacity-35 dark:opacity-20 blur-[140px] pointer-events-none"
          style={{ background: "conic-gradient(from 180deg at 50% 50%, #2563EB, #3B82F6, #60a5fa, #2563EB)" }}
        />
        
        <div className="relative mx-auto max-w-6xl px-6 pb-12 sm:pb-16 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-wide text-primary border border-primary/20 bg-primary/5 shadow-sm mb-6">
              <Rocket className="h-3.5 w-3.5" />
              MSME Registered Software Company
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Building <span className="text-gradient font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent">AI Products</span> that power modern businesses.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              BitapTech develops AI-powered SaaS products, automation platforms and custom
              software that help businesses scale faster, automate operations and improve
              customer experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-gradient-primary text-white font-semibold shadow-glow hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl glass-strong font-semibold hover:bg-secondary/60 border border-border/40 dark:border-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-xs text-muted-foreground border-t border-border/30 pt-6">
              <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="h-4 w-4 text-primary" /> Enterprise ready</div>
              <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="h-4 w-4 text-primary" /> Cloud native</div>
              <div className="flex items-center gap-2 font-medium"><CheckCircle2 className="h-4 w-4 text-primary" /> AI first</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 hidden md:block relative z-10"
          >
            <div className="relative w-full max-w-[480px] aspect-square mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <Image
                src="/assets/hero-ai.png"
                alt="AI Hub Illustration"
                width={480}
                height={480}
                priority
                className="w-full h-auto object-contain animate-float-slow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / MISSION */}
      <section className="mx-auto max-w-6xl px-6 py-14 border-t border-border/20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">About BitapTech</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              An Indian software company building the AI-native future.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              BitapTech is focused on innovative SaaS products and AI-powered business
              solutions. We combine deep engineering with product craft to deliver software
              that scales.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Our mission:</span> Build
              simple yet powerful software that helps businesses automate, grow and scale.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Artificial Intelligence", "SaaS Platforms", "Business Automation",
                "WhatsApp Automation", "API Development", "Cloud Infrastructure",
                "Enterprise Software", "Custom Solutions",
              ].map((s) => (
                <div key={s} className="glass rounded-xl p-4 flex items-center gap-2.5 text-sm font-medium hover:border-primary/30 transition-colors duration-300">
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-border/20">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Featured Product</div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Meet WpAI.</h2>
            </div>
            <a
              href="https://wpai.co.in"
              target="_blank" rel="noreferrer"
              className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1.5 transition-colors"
            >
              Visit WpAI <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/65 backdrop-blur-sm shadow-elegant hover:border-primary/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="p-8 sm:p-12 flex flex-col">
                <div className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs font-semibold border border-emerald-500/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Live Product
                </div>
                <h3 className="mt-5 text-3xl sm:text-4xl font-bold font-display">WpAI</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">WhatsApp AI Automation Platform</p>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  WpAI helps businesses automate conversations, customer support, marketing
                  campaigns, lead management and business communication — all powered by AI.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm font-medium">
                  {["AI Auto Reply","Broadcast Messaging","CRM","Shared Team Inbox","API","Campaigns","Analytics"].map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <a
                    href="https://wpai.co.in"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-gradient-primary text-white font-semibold shadow-glow hover:opacity-95 hover:scale-[1.02] transition-all duration-200"
                  >
                    Visit WpAI <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="relative bg-gradient-hero p-6 md:p-10 flex justify-center items-center">
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

      {/* UPCOMING PRODUCTS */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-border/20">
        <Reveal>
          <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Upcoming</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">More products, in the making.</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { title: "Smart URL", desc: "Enterprise URL shortening and analytics platform." },
            { title: "AI Business Extractor", desc: "AI-powered business data extraction platform." },
            { title: "More SaaS Products", desc: "More innovative AI products are under development." },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group relative rounded-2xl border border-border/40 bg-card/50 p-7 h-full overflow-hidden hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-elegant transition-all duration-300">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-primary opacity-10 blur-2xl group-hover:opacity-20 transition" />
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary/80 dark:bg-white/5 border border-border/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
                  Coming Soon
                </div>
                <h3 className="mt-5 text-xl font-bold font-display">{p.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-border/20">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Services</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              End-to-end engineering, done right.
            </h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="group relative rounded-2xl border border-border bg-card p-6 h-full hover:shadow-elegant hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-primary text-white mb-5 shadow-glow group-hover:scale-105 transition-transform duration-300">
                  <s.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="font-bold text-base leading-tight font-display">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY BITAPTECH */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-border/20">
        <Reveal>
          <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Why BitapTech</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            A partner engineered for growth.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.04}>
              <div className="rounded-2xl glass p-6 h-full flex flex-col justify-between border border-border/40 hover:border-primary/25 transition-all duration-300">
                <w.icon className="h-6 w-6 text-primary" />
                <div className="mt-4 font-semibold text-sm tracking-wide">{w.title}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <section className="py-12 border-y border-border/40 bg-secondary/15 dark:bg-white/2 overflow-hidden relative">
        <Reveal>
          <div className="mx-auto max-w-6xl px-6 mb-10">
            <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Tech Stack</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Modern tools, production tested.
            </h2>
          </div>
        </Reveal>
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-5 animate-marquee w-max py-2">
            {[...stack, ...stack, ...stack].map((t, i) => (
              <div
                key={t + i}
                className="shrink-0 rounded-2xl border border-border/40 bg-card px-7 py-3.5 font-semibold text-sm shadow-sm hover:border-primary/30 transition-colors"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-16 relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 sm:p-20 text-white shadow-glow">
            <div aria-hidden className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Have a product in mind? Let&apos;s ship it.
              </h2>
              <p className="mt-5 text-white/85 text-base sm:text-lg leading-relaxed">
                From first wireframe to production scale — we design, build and run AI
                products and automation platforms. Tell us where you are and we&apos;ll map
                the fastest path to launch.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:info@bitaptech.com"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white text-primary font-bold shadow-md hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <Mail className="h-4.5 w-4.5" /> info@bitaptech.com
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl border border-white/40 text-white font-bold hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
