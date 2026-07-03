import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { CheckCircle2, Target, Rocket, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BitapTech" },
      { name: "description", content: "BitapTech is an Indian software company building AI-powered SaaS products and business automation platforms." },
      { property: "og:title", content: "About — BitapTech" },
      { property: "og:description", content: "Meet the team building AI-native SaaS for modern businesses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-16">
        <Reveal>
          <div className="text-sm font-medium text-primary">About</div>
          <h1 className="mt-2 text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl">
            We build software that <span className="text-gradient">helps businesses grow</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            BitapTech is an Indian software company focused on building innovative SaaS
            products and AI-powered business solutions. We help teams automate, scale and
            deliver better customer experiences.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-2xl border border-border p-8 h-full bg-card">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              Build simple yet powerful software that helps businesses automate, grow
              and scale — without complexity or friction.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-border p-8 h-full glass">
            <Rocket className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">
              An AI-native future where every business — small or large — has access
              to enterprise-grade automation and intelligence.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight">What we specialize in</h2>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            "Artificial Intelligence","SaaS Platforms","Business Automation","WhatsApp Automation",
            "API Development","Cloud Infrastructure","Enterprise Software","Custom Solutions",
          ].map((s) => (
            <div key={s} className="rounded-xl border border-border bg-card p-4 flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-primary" /> {s}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-border p-10 sm:p-14 bg-gradient-hero">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            A small team obsessed with product quality.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            We work in tight, senior teams — designers and engineers who care about the
            details that make products feel great to use.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
