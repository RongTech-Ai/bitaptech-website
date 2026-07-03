import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import {
  Code2, Bot, MessageSquare, Cloud, Layers, Globe, Server, Cpu, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — BitapTech" },
      { name: "description", content: "Custom software, AI development, WhatsApp automation, cloud, APIs and more." },
      { property: "og:title", content: "Services — BitapTech" },
      { property: "og:description", content: "End-to-end engineering for AI, SaaS and automation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Bespoke platforms crafted around your workflow, users and scale." },
  { icon: Bot, title: "AI Development", desc: "Custom LLM apps, agents, RAG systems and intelligent automation." },
  { icon: MessageSquare, title: "WhatsApp Automation", desc: "Conversational commerce, campaigns and support at scale." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Cloud-native architectures on Azure, AWS and Cloudflare." },
  { icon: Layers, title: "API Development", desc: "Versioned, secure, well-documented APIs your team will love." },
  { icon: Globe, title: "Web Applications", desc: "Blazing-fast web apps built with React, Next.js and TanStack." },
  { icon: Server, title: "Mobile Backend", desc: "Scalable backends powering iOS and Android at any scale." },
  { icon: Cpu, title: "Automation Solutions", desc: "Replace manual workflows with reliable, observable automation." },
];

function Services() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-12">
        <Reveal>
          <div className="text-sm font-medium text-primary">Services</div>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight">
            Engineering that <span className="text-gradient">moves the needle</span>.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            From product discovery to launch and beyond — BitapTech partners with
            teams to design, build and scale software that ships.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative rounded-2xl border border-border bg-card p-6 h-full hover:shadow-elegant hover:-translate-y-1 transition overflow-hidden">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition" />
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-primary text-white mb-4 shadow-glow">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-gradient-primary text-white p-10 sm:p-14 relative overflow-hidden shadow-glow">
          <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-xl">
            Ready to build with a team that ships?
          </h2>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white text-primary font-medium hover:bg-white/95 transition">
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
