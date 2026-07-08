import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Bot, Cloud, Layers, Globe, Cpu, ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Enterprise Custom Engineering & Services",
  description: "Custom software development, AI integrations, messaging middleware, cloud architectures, and dashboard services by BitapTech.",
};

const services = [
  { 
    icon: Code2, 
    title: "Bespoke Enterprise Software", 
    desc: "Custom platforms, client portals, and administrative dashboards designed around your operations and internal teams." 
  },
  { 
    icon: Bot, 
    title: "AI & Conversational Integrations", 
    desc: "Integrating advanced LLM agents, automated message responders, and RAG pipelines into your customer touchpoints." 
  },
  { 
    icon: Layers, 
    title: "Messaging Middleware & Bridges", 
    desc: "Custom API pipelines connecting WpAI endpoints with your internal CRM systems like HubSpot, Zoho, or proprietary databases." 
  },
  { 
    icon: Cloud, 
    title: "Cloud Infrastructure & Scale", 
    desc: "Secure, load-balanced container setups and serverless pipelines deployed across Cloudflare, AWS, or Azure." 
  },
  { 
    icon: Globe, 
    title: "High-Performance Web Apps", 
    desc: "Blazing-fast web portals, analytics boards, and workflow interfaces crafted with React, Next.js, and TypeScript." 
  },
  { 
    icon: Cpu, 
    title: "Workflow Automations", 
    desc: "Observe and automate manual data syncs, notifications, and alerts between disjointed internal programs." 
  },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden w-full bg-background text-foreground">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-10 relative">
        <Reveal>
          <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Custom Services</div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-display leading-[1.1]">
            Engineering custom extensions <span className="text-gradient bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">for your workflows</span>.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We don't just supply a communications SaaS. Our senior engineering division designs, integrates, and deploys custom software layers to bridge WpAI with your internal infrastructure.
          </p>
        </Reveal>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-10 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative rounded-2xl border border-border bg-card/65 p-7 h-full hover:shadow-elegant hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition" />
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-primary text-white mb-5 shadow-glow group-hover:scale-105 transition-transform duration-300">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold font-display leading-snug text-foreground">{s.title}</h3>
                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service Methodology Block */}
      <section className="mx-auto max-w-7xl px-6 py-8 border-t border-border/20">
        <Reveal>
          <div className="rounded-3xl border border-border/40 p-8 sm:p-12 bg-secondary/5 dark:bg-white/2">
            <h3 className="text-xl font-bold font-display mb-4">Our Engineering Standard</h3>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div>
                <ShieldCheck className="h-6 w-6 text-primary mb-2" />
                <h4 className="text-sm font-bold">Secure Integrations</h4>
                <p className="text-xs text-muted-foreground mt-1">GDPR-aligned database security, TLS encryption, and secure API keys management.</p>
              </div>
              <div>
                <Cloud className="h-6 w-6 text-primary mb-2" />
                <h4 className="text-sm font-bold">Resilient Cloud Native</h4>
                <p className="text-xs text-muted-foreground mt-1">Dockerized microservices, high-availability clusters, and automated backups.</p>
              </div>
              <div>
                <Code2 className="h-6 w-6 text-primary mb-2" />
                <h4 className="text-sm font-bold">Clean Code Standards</h4>
                <p className="text-xs text-muted-foreground mt-1">Well-documented API systems, version control tracking, and strict code review gates.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA Footer Callout */}
      <section className="mx-auto max-w-7xl px-6 py-10 relative">
        <div className="rounded-3xl bg-gradient-primary text-white p-12 sm:p-20 relative overflow-hidden shadow-glow">
          <div aria-hidden="true" className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display leading-tight">
              Ready to construct a tailored dashboard?
            </h2>
            <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
              We focus on building stable connections, transparent communication channels, and secure data syncs. Partner with us to scale your customer outreach.
            </p>
            <div className="mt-8">
              <a
                href="mailto:info@bitaptech.com?subject=Custom%20Services%20Consultation%20-%20BitapTech&body=Hi%20BitapTech%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20consultation%20for%20custom%20software%20and%20integration%20services.%0A%0AName%3A%0ACompany%3A%0APhone%20Number%3A%0ANotes%3A"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white text-primary font-bold shadow-md hover:bg-white/95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                Request Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
