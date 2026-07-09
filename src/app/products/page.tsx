import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Zap,
  MessageSquare,
  ShieldCheck,
  Terminal,
  Server,
  Send,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Products & Messaging Solutions",
  description:
    "Enterprise messaging gateways, WhatsApp Cloud API, session-based Web Connect, high TPS SMPP servers, and RCS templates.",
};

const comparisonData = [
  {
    feature: "Hosting Node",
    cloud: "Meta Hosted Cloud Infrastructure",
    web: "Local Web Session Node",
    sms: "Tier-1 Operator Telephony Centers",
  },
  {
    feature: "Approval Overhead",
    cloud: "Required (Meta approved templates)",
    web: "None (Scan QR and dispatch text)",
    sms: "DLT Registration required in India",
  },
  {
    feature: "Message Surcharges",
    cloud: "Yes (Pay-per-conversation Meta tariffs)",
    web: "Zero ($0 platform flatrate)",
    sms: "Operator specific DLT SMS tariffs",
  },
  {
    feature: "Official Branding",
    cloud: "Verified green checkmark eligible",
    web: "Standard phone profile text",
    sms: "Sender ID Header (e.g. BT-BITAP)",
  },
  {
    feature: "Hardware Bond",
    cloud: "None (Queued in cloud state)",
    web: "Active linked phone required online",
    sms: "None (Managed carrier network)",
  },
  {
    feature: "Broadcast Speed",
    cloud: "80 messages/sec (Scales to custom tiers)",
    web: "Throttled (Safeguards connection)",
    sms: "Up to 2,000 messages/sec (SMPP v3.4)",
  },
];

export default function ProductsPage() {
  return (
    <div className="relative overflow-hidden w-full bg-background text-foreground">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-10 relative">
        <Reveal>
          <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">
            Our Solutions Suite
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-display leading-[1.1]">
            Enterprise-grade messaging{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              channels
            </span>
            .
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Run transactional OTP alerts, dispatch marketing campaigns, and connect automated AI
            chats across WhatsApp, SMS, and RCS with direct carrier operator connectivity.
          </p>
        </Reveal>
      </section>

      {/* WHATSAPP PORTFOLIO */}
      <section id="cloud-api" className="mx-auto max-w-7xl px-6 py-8 scroll-mt-24">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-sm hover:border-primary/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500" />
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 sm:p-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3.5 py-1 text-xs font-bold border border-indigo-500/20 mb-6">
                  <Cloud className="h-3.5 w-3.5" /> Official Meta Cloud Routing
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display">
                  WpAI Official Cloud API
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Connect your business endpoints directly to Meta's secure cloud database. Ideal
                  for enterprise support departments requiring high message concurrency, verified
                  green badges, and strict compliance alignment with Meta platform policies.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display font-display">
                        Official Green Checkmark
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Elevate client trust with Meta verified badges.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display font-display font-display">
                        Cloud Session Queues
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Store messages safely in queues even during handset outages.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display font-display font-display">
                        Multi-Agent Allocation
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Assign chats to support executives seamlessly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display font-display font-display">
                        Meta Encryption Standards
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Highest grade security complying with international privacy regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/15 dark:bg-white/2 p-6 rounded-2xl border border-border/40 flex flex-col gap-4">
                <h3 className="text-xs font-bold text-foreground flex items-center gap-1.5 font-display">
                  <Terminal className="h-3.5 w-3.5 text-indigo-500" /> Cloud API Specifications
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Uses JSON endpoints to trigger message payloads. All message templates must follow
                  Meta's standard categories (Marketing, Utility, Authentication, Service) and
                  undergo verification before campaign execution.
                </p>
                <div className="border-t border-border/20 pt-4 mt-2">
                  <a
                    href="https://wpai.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                  >
                    Launch WpAI Platform <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHATSAPP WEB SESSION */}
      <section id="web-session" className="mx-auto max-w-7xl px-6 py-8 scroll-mt-24">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-sm hover:border-emerald-500/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 sm:p-12">
              <div className="order-2 md:order-1 bg-secondary/15 dark:bg-white/2 p-6 rounded-2xl border border-border/40 flex flex-col gap-4">
                <h3 className="text-xs font-bold text-foreground flex items-center gap-1.5 font-display">
                  <Zap className="h-3.5 w-3.5 text-emerald-500" /> Session Connectivity Rules
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Operates by automating your browser instance session via scanned QR code. To
                  prevent delivery timeouts, ensure your paired phone maintains battery power, has
                  constant network coverage, and conforms to active platform guidelines.
                </p>
                <div className="border-t border-border/20 pt-4 mt-2">
                  <a
                    href="https://inst.wpai.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                  >
                    Launch Scan Dashboard <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3.5 py-1 text-xs font-bold border border-emerald-500/20 mb-6">
                  <Zap className="h-3.5 w-3.5" /> Scan-and-Go Session API
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display">
                  WpAI Web Session Connect
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  A high-velocity, cost-effective messaging connection designed for developers and
                  growing businesses. Simply pair your existing active phone line by scanning our
                  dashboard QR code to initiate customized alerts, PDF bills, and reminders
                  instantly.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display font-display">
                        Zero Surcharges
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Absolutely no charges or conversation billing from Meta.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display font-display">
                        No Pre-Approvals
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Publish arbitrary marketing text and media instantly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display font-display">
                        Quick Start Console
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Link your number and configure hooks in under 5 minutes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display font-display">
                        Custom Invoice Dispatch
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Send custom generated media, orders, and receipts directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ENTERPRISE SMS & SMPP GATEWAY */}
      <section id="sms-gateway" className="mx-auto max-w-7xl px-6 py-8 scroll-mt-24">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-sm hover:border-rose-500/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-rose-500" />
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 sm:p-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 px-3.5 py-1 text-xs font-bold border border-rose-500/20 mb-6">
                  <Server className="h-3.5 w-3.5" /> High TPS Telephony Gateway
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display">
                  Enterprise Bulk SMS & SMPP
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Connect directly to Tier-1 telecom operators (Airtel, Jio, Vi) for bulk marketing
                  campaigns and ultra-fast OTP verification codes. Equipped with SMPP v3.4 server
                  setups capable of supporting up to 2,000 Transactions Per Second (TPS).
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display">
                        DLT Templates Helper
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Guidance for registering headers and templates in India.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display">
                        Ultra-Low Latency Alerts
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Dispatch critical OTP security notifications in &lt; 2.5s.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display">
                        SMPP v3.4 Interface
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Developer-friendly bindings for continuous bulk volume streams.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-foreground font-display font-display">
                        Direct Operator Pipes
                      </h4>
                      <p className="text-[10px] text-muted-foreground">
                        Directly integrated with operators to minimize queue drops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/15 dark:bg-white/2 p-6 rounded-2xl border border-border/40 flex flex-col gap-4">
                <h3 className="text-xs font-bold text-foreground flex items-center gap-1.5 font-display">
                  <Send className="h-3.5 w-3.5 text-rose-500" /> Operator Compliance
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  In compliance with TRAI regulations, all transactional and promotional SMS traffic
                  routed in India requires verified DLT registration, template approvals, and
                  registered headers.
                </p>
                <div className="border-t border-border/20 pt-4 mt-2">
                  <a
                    href={`mailto:${SITE.email}?subject=Setup%20SMPP%20Endpoint%20Inquiry%20-%20BitapTech&body=Hi%20BitapTech%20Team%2C%0A%0AI%20would%20like%20to%20request%20setup%20assistance%20for%20an%20SMPP%20v3.4%20telephony%20endpoint.%0A%0AName%3A%0ACompany%3A%0APhone%20Number%3A`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                  >
                    Setup SMPP Endpoint <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* DETAILED TECHNICAL MATRIX */}
      <section className="mx-auto max-w-7xl px-6 py-10 border-t border-border/20">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-display">
              Channel Matrix & Specifications
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Technical analysis of message throughput, compliance boundaries, and hosting
              structures.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="overflow-x-auto rounded-2xl border border-border/50 bg-card shadow-sm">
            <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/15 dark:bg-white/2">
                  <th className="p-4 font-bold text-foreground">Feature</th>
                  <th className="p-4 font-bold text-indigo-600 dark:text-indigo-400">
                    WpAI Cloud API
                  </th>
                  <th className="p-4 font-bold text-emerald-600 dark:text-emerald-400">
                    WpAI Web Connect
                  </th>
                  <th className="p-4 font-bold text-rose-600 dark:text-rose-400">
                    Enterprise SMS Gateway
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-muted-foreground">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-secondary/10 dark:hover:bg-white/2 transition-colors"
                  >
                    <td className="p-4 font-bold text-foreground">{row.feature}</td>
                    <td className="p-4 font-medium">{row.cloud}</td>
                    <td className="p-4 font-medium">{row.web}</td>
                    <td className="p-4 font-medium">{row.sms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* OMNICHANNEL RCS SUITE */}
      <section
        id="omnichannel"
        className="mx-auto max-w-7xl px-6 py-10 border-t border-border/20 scroll-mt-24"
      >
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1 text-xs font-bold border border-amber-500/20 mb-4">
            <MessageSquare className="h-3.5 w-3.5" /> Next-Gen Messaging Channels
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-display">
            Unified RCS & Fallback Routing
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Upgrade from text SMS. Build rich, interactive conversational setups inside standard
            phone inboxes with operator verified senders.
          </p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "RCS Business Cards",
              desc: "Embed full visual carousels, custom action links (e.g. Open Maps, Call Agent), verified checkmarks, and read logs directly in user message threads.",
            },
            {
              title: "Network Fallback Queues",
              desc: "Ensure alert delivery. If internet-dependent routes (WhatsApp or RCS) fail to deliver, automatically re-route and send via operator carrier SMS.",
            },
            {
              title: "SMTP Transactional Pipeline",
              desc: "Co-ordinate receipt delivery workflows. Combine automated WhatsApp alerts and email notifications under a single dashboard campaign trigger.",
            },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group relative rounded-2xl border border-border bg-card/50 p-6 h-full overflow-hidden hover:border-primary/20 transition-all duration-300">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary/80 dark:bg-white/5 border border-border/40 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-foreground">
                  Beta Phase
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-bold font-display">{p.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS CALLOUT */}
      <section className="mx-auto max-w-7xl px-6 py-10 relative">
        <div className="rounded-3xl border border-border/45 p-8 sm:p-12 text-center bg-card shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-display">
            Align your communications
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Partner with BitapTech solutions engineering. We'll assist your team in deploying stable
            conversational templates and customized operator routing loops.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={`mailto:${SITE.salesEmail}?subject=Book%20Setup%20Consultation%20-%20BitapTech&body=Hi%20BitapTech%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20setup%20consultation%20for%20my%20business.%0A%0AName%3A%0ACompany%3A%0APhone%20Number%3A%0ANotes%3A`}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-gradient-primary text-white font-semibold shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
            >
              Book Setup Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
