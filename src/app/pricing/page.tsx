import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { ArrowRight, Check, Cloud, Zap, Wallet } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "BitapTech pricing in INR for the WpAI WhatsApp Business platform — Web Session Connect subscriptions and Official Cloud API prepaid wallet plans.",
  robots: { index: true, follow: true },
};

// NOTE: Prices are in INR (₹) and exclusive of 18% GST unless stated.
// Update these figures to match your live commercial pricing.
const webPlans = [
  {
    name: "Starter",
    price: "₹499",
    period: "/month",
    tagline: "For solo founders testing WhatsApp outreach.",
    highlight: false,
    features: [
      "1 connected WhatsApp number",
      "Up to 1,000 messages/month",
      "Basic AI auto-reply",
      "Contact management",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "₹1,499",
    period: "/month",
    tagline: "For growing teams running regular campaigns.",
    highlight: true,
    features: [
      "2 connected WhatsApp numbers",
      "Up to 10,000 messages/month",
      "Advanced AI auto-reply & chatbots",
      "Bulk campaigns & scheduling",
      "Priority email & chat support",
    ],
  },
  {
    name: "Business",
    price: "₹2,999",
    period: "/month",
    tagline: "For high-volume messaging operations.",
    highlight: false,
    features: [
      "5 connected WhatsApp numbers",
      "Up to 50,000 messages/month",
      "Team inbox & multi-agent",
      "API access & webhooks",
      "Dedicated account manager",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden w-full bg-background text-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-8 relative">
        <Reveal>
          <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">
            Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-display leading-[1.1]">
            Simple pricing,{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              in Indian Rupees
            </span>
            .
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Transparent plans for the WpAI WhatsApp Business platform. All prices are in INR (₹) and
            exclusive of 18% GST. No hidden fees — cancel anytime.
          </p>
        </Reveal>
      </section>

      {/* Web Session Connect subscription plans */}
      <section className="mx-auto max-w-6xl px-6 py-8 relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3.5 py-1 text-xs font-bold border border-emerald-500/20 mb-6">
            <Zap className="h-3.5 w-3.5" /> WpAI Web Session Connect — Subscription
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {webPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <div
                className={`relative rounded-3xl border p-8 h-full flex flex-col bg-card shadow-sm transition-all duration-300 ${
                  plan.highlight
                    ? "border-primary/50 ring-1 ring-primary/20"
                    : "border-border hover:border-primary/20"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 shadow-glow">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold font-display">{plan.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{plan.tagline}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-extrabold font-display">{plan.price}</span>
                  <span className="text-sm text-muted-foreground mb-1">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book-demo"
                  className={`mt-8 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    plan.highlight
                      ? "bg-gradient-primary text-white shadow-glow hover:scale-[1.01]"
                      : "border border-border/60 text-foreground hover:border-primary/40 hover:bg-secondary/40"
                  }`}
                >
                  Get started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Official Cloud API — prepaid wallet */}
      <section className="mx-auto max-w-6xl px-6 py-8 relative">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-sm">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500" />
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 sm:p-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3.5 py-1 text-xs font-bold border border-indigo-500/20 mb-6">
                  <Cloud className="h-3.5 w-3.5" /> WpAI Official Cloud API — Prepaid Wallet
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display">
                  Pay only for what you send
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  The Official Meta Cloud API platform runs on a prepaid wallet. Recharge in ₹, and
                  message charges are metered per conversation based on Meta&apos;s published rates
                  and the destination country and category. A flat platform fee applies for account
                  management and support.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Platform fee: ₹999 / month (includes onboarding & support)",
                    "Messaging billed at Meta conversation rates, deducted from wallet",
                    "Minimum wallet recharge: ₹1,000",
                    "GST (18%) applied on platform fee and recharges as applicable",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/15 dark:bg-white/2 p-8 rounded-2xl border border-border/40 flex flex-col items-center text-center">
                <div className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow">
                  <Wallet className="h-6 w-6" />
                </div>
                <div className="mt-5 text-4xl font-extrabold font-display">₹999</div>
                <div className="text-sm text-muted-foreground">/month platform fee + usage</div>
                <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                  Current per-message conversation rates are shown in your dashboard before you send.
                </p>
                <a
                  href={`mailto:${SITE.salesEmail}?subject=WpAI%20Cloud%20API%20Pricing%20Enquiry`}
                  className="mt-6 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gradient-primary text-white text-sm font-semibold shadow-glow hover:scale-[1.01] transition-all duration-200"
                >
                  Talk to sales <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Fine print */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-4 relative">
        <Reveal>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            All prices are listed in Indian Rupees (₹). Prices are exclusive of GST unless otherwise
            stated; applicable taxes are added at checkout. Meta&apos;s underlying conversation rates
            may change and are passed through at cost. Refunds and cancellations are governed by our{" "}
            <Link href="/refund" className="text-primary font-semibold hover:underline">
              Refund Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-primary font-semibold hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </div>
  );
}
