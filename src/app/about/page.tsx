import type { Metadata } from "next";
import { CheckCircle2, Target, Rocket, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "BitapTech is an Indian software company building AI-powered SaaS products and business automation platforms.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About BitapTech",
    description:
      "BitapTech is an Indian software company building AI-powered SaaS products and business automation platforms.",
    url: "/about",
  },
  twitter: {
    title: "About BitapTech",
    description:
      "BitapTech is an Indian software company building AI-powered SaaS products and business automation platforms.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${SITE_URL}/about`,
        },
      ],
    },
    {
      "@type": "AboutPage",
      url: `${SITE_URL}/about`,
      name: "About BitapTech",
      description:
        "BitapTech is an Indian software company building AI-powered SaaS products and business automation platforms.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 relative">
        <Reveal>
          <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">
            About BitapTech
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl font-display leading-[1.1]">
            Bridging customer conversations with{"  "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              enterprise automation
            </span>
            .
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            BitapTech is an Indian software company built on communication infrastructure. We design API pipelines, session endpoints, and bespoke system integrations that make customer outreach fast, reliable, and highly cost-effective.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 grid md:grid-cols-2 gap-8 relative z-10">
        <Reveal>
          <div className="rounded-2xl border border-border/50 p-8 h-full bg-card hover:border-primary/20 transition-all duration-300 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h2 className="mt-5 text-2xl font-bold font-display">Our Mission</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To supply businesses with high-volume, lightweight messaging channels that eliminate outreach friction and reduce notification costs by up to 80%.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-border/50 p-8 h-full glass hover:border-primary/20 transition-all duration-300 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            <h2 className="mt-5 text-2xl font-bold font-display">Our Vision</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To democratize business automation, giving small to mid-sized teams access to high-delivery carrier pipes, verified WhatsApp accounts, and smart workflows.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight font-display mb-8">
            What we specialize in
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Artificial Intelligence",
            "SaaS Platforms",
            "Business Automation",
            "WhatsApp Automation",
            "API Development",
            "Cloud Infrastructure",
            "Enterprise Software",
            "Custom Solutions",
          ].map((s) => (
            <div
              key={s}
              className="rounded-xl border border-border/40 bg-card/65 p-4 flex items-center gap-3 text-sm font-semibold hover:border-primary/25 transition-colors"
            >
              <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0" /> {s}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-border/40 p-10 sm:p-16 bg-gradient-hero shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
          <div className="h-11 w-11 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10 mb-6">
            <Users className="h-5.5 w-5.5 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl font-display leading-tight">
            An engineering-first team focused on setup & integration.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
            We don't just sell software licenses. Our solution engineers coordinate with your team to setup direct API lines, link WhatsApp QR sessions, configure CRM databases, and manage TRAI compliance parameters to ensure high delivery.
          </p>
        </div>
      </section>
    </div>
  );
}
