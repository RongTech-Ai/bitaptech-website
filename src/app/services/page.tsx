import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2, Bot, MessageSquare, Cloud, Layers, Globe, Server, Cpu, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom software, AI development, WhatsApp automation, cloud, APIs and more.",
};

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Bespoke platforms crafted around your workflow, users and scale." },
  { icon: Bot, title: "AI Development", desc: "Custom LLM apps, agents, RAG systems and intelligent automation." },
  { icon: MessageSquare, title: "WhatsApp Automation", desc: "Conversational commerce, campaigns and support at scale." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Cloud-native architectures on Azure, AWS and Cloudflare." },
  { icon: Layers, title: "API Development", desc: "Versioned, secure, well-documented APIs your team will love." },
  { icon: Globe, title: "Web Applications", desc: "Blazing-fast web apps built with React, Next.js and Tailwind CSS." },
  { icon: Server, title: "Mobile Backend", desc: "Scalable backends powering iOS and Android at any scale." },
  { icon: Cpu, title: "Automation Solutions", desc: "Replace manual workflows with reliable, observable automation." },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 relative">
        <Reveal>
          <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Services</div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight font-display leading-[1.1]">
            Engineering that <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">moves the needle</span>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            From product discovery to launch and beyond — BitapTech partners with
            teams to design, build and scale software that ships.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative rounded-2xl border border-border/40 bg-card/65 p-7 h-full hover:shadow-elegant hover:border-primary/20 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition" />
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-primary text-white mb-5 shadow-glow group-hover:scale-105 transition-transform duration-300">
                  <s.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-lg font-bold font-display leading-snug">{s.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 relative">
        <div className="rounded-3xl bg-gradient-primary text-white p-12 sm:p-20 relative overflow-hidden shadow-glow">
          <div aria-hidden className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display leading-tight">
              Ready to build with a team that ships?
            </h2>
            <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
              We focus on clean code, solid architectures, and fast execution to help your company scale.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white text-primary font-bold shadow-md hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
