import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Code2, Bot, Cloud, Layers, Globe, Cpu, ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Enterprise Custom Engineering & Services",
  description:
    "Custom software development, AI integrations, messaging middleware, cloud architectures, and dashboard services by BitapTech.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Enterprise Custom Engineering & Services — BitapTech",
    description:
      "Custom software development, AI integrations, messaging middleware, cloud architectures, and dashboard services by BitapTech.",
    url: "/services",
  },
  twitter: {
    title: "Enterprise Custom Engineering & Services — BitapTech",
    description:
      "Custom software development, AI integrations, messaging middleware, cloud architectures, and dashboard services by BitapTech.",
  },
};

const services = [
  {
    icon: Code2,
    title: "Bespoke Portals & Dashboards",
    desc: "Bespoke client portals and internal dashboards built to streamline communications, manage team workloads, and monitor outreach metrics.",
  },
  {
    icon: Bot,
    title: "AI Support & Answering Bots",
    desc: "Automating customer chats and training custom AI agents to resolve support inquiries instantly, 24/7, inside WhatsApp.",
  },
  {
    icon: Layers,
    title: "CRM Sync Middleware",
    desc: "Stop copy-pasting customer details. We link messaging endpoints directly to HubSpot, Zoho, Salesforce, or custom databases.",
  },
  {
    icon: Cloud,
    title: "High-Availability Broadcasts",
    desc: "Configuring load-balanced messaging containers and cloud failover routes that handle over 100,000 notifications daily.",
  },
  {
    icon: Globe,
    title: "Custom Billing Automations",
    desc: "Synchronizing accounting software (Tally, Zoho Books) to automatically trigger billing updates and PDF invoices to clients.",
  },
  {
    icon: Cpu,
    title: "Workflow Operations",
    desc: "Mapping internal data updates to messaging endpoints so your team is automatically notified when orders are placed or shipped.",
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
          <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">
            Bespoke Engineering
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-display leading-[1.1]">
            Custom messaging integrations{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              built for your business CRM
            </span>
            .
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We don't just supply communications software. Our senior solutions division integrates, customizes, and deploys custom API synchronization layers to connect your databases and CRM platforms with direct SMS and WhatsApp gateways.
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
                <h3 className="text-lg font-bold font-display leading-snug text-foreground">
                  {s.title}
                </h3>
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
                <p className="text-xs text-muted-foreground mt-1">
                  GDPR-aligned database security, TLS encryption, and secure API keys management.
                </p>
              </div>
              <div>
                <Cloud className="h-6 w-6 text-primary mb-2" />
                <h4 className="text-sm font-bold">Resilient Cloud Native</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Dockerized microservices, high-availability clusters, and automated backups.
                </p>
              </div>
              <div>
                <Code2 className="h-6 w-6 text-primary mb-2" />
                <h4 className="text-sm font-bold">Clean Code Standards</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Well-documented API systems, version control tracking, and strict code review
                  gates.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA Footer Callout */}
      <section className="mx-auto max-w-7xl px-6 py-10 relative">
        <div className="rounded-3xl bg-gradient-primary text-white p-12 sm:p-20 relative overflow-hidden shadow-glow">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display leading-tight">
              Ready to construct a tailored dashboard?
            </h2>
            <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
              We focus on building stable connections, transparent communication channels, and
              secure data syncs. Partner with us to scale your customer outreach.
            </p>
            <div className="mt-8">
              <a
                href={`mailto:${SITE.email}?subject=Custom%20Services%20Consultation%20-%20BitapTech&body=Hi%20BitapTech%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20consultation%20for%20custom%20software%20and%20integration%20services.%0A%0AName%3A%0ACompany%3A%0APhone%20Number%3A%0ANotes%3A`}
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
