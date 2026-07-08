"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Bot, MessageSquare, Cloud, Zap, Cpu, Code2, Layers,
  ShieldCheck, CheckCircle2, Globe, Mail, Terminal, Users, Database, Sparkles, HelpCircle, ChevronDown,
  Award, Rocket, Lock, BarChart3
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

// Tab types
type Category = "all" | "whatsapp" | "sms-rcs" | "custom-dev";

// Feature list
const features = [
  {
    id: "wp-cloud",
    category: "whatsapp",
    title: "WpAI Official Cloud API",
    desc: "Built directly on Meta's official cloud endpoints. Requires template pre-approvals and business verification, but yields 100% official stability, high-speed broadcasts, and green checkmark eligibility.",
    badge: "Official Meta API",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20"
  },
  {
    id: "wp-web",
    category: "whatsapp",
    title: "WpAI Web Session Connect",
    desc: "Connect your existing WhatsApp number instantly via QR scan. Draft and dispatch arbitrary messages or custom media invoices immediately. Free sending with zero Meta conversation charges.",
    badge: "Scan & Connect",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
  },
  {
    id: "rcs-rich",
    category: "sms-rcs",
    title: "RCS Business Messaging",
    desc: "Send interactive visual carousels, verified business cards, and clickable action triggers direct to client native message inboxes. Achieves 3x higher click-through rates than classic text broadcasts.",
    badge: "RCS Suite",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
  },
  {
    id: "otp-alert",
    category: "sms-rcs",
    title: "Transactional OTP Gateway",
    desc: "Direct operator-connected SMS routes for time-critical transactional notifications. Achieves average OTP handset delivery rates in under 2.5 seconds with smart carrier failover fallbacks.",
    badge: "Low Latency SMS",
    badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20"
  },
  {
    id: "custom-software",
    category: "custom-dev",
    title: "Bespoke Enterprise Software",
    desc: "Complete internal workflow ecosystem design, centralized dashboards, and proprietary administrative panels custom engineered around your precise company operations.",
    badge: "Bespoke Dev",
    badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20"
  },
  {
    id: "middleware-api",
    category: "custom-dev",
    title: "Messaging Middleware & Syncs",
    desc: "Custom database connectors, webhook handlers, and middleware APIs linking our messaging channels directly with your legacy ERP systems (HubSpot, Zoho, SAP, Salesforce).",
    badge: "API Integration",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
  }
];

// FAQs Data
const faqs = [
  {
    question: "What is the difference between WhatsApp Cloud API and Web Session Connect?",
    answer: "WhatsApp Cloud API is Meta's official hosting service. It requires message templates to be pre-approved, charges conversation-based fees, and is highly stable for enterprise broadcasting. Web Session Connect acts as an automated handler on top of WhatsApp Web, requiring you to scan a QR code. It bypasses Meta template approval queues and is completely free of Meta messaging fees, but is dependent on your physical phone staying active and connected."
  },
  {
    question: "Do I need Meta Business Verification to get started?",
    answer: "For WpAI Cloud API, Meta Business Verification is highly recommended to unlock higher messaging limits, although you can start in sandbox tiers. For WpAI Web Session Connect, no verification or approval is required; you simply scan a QR code and start sending immediately."
  },
  {
    question: "How does the SMS and RCS failover configuration work?",
    answer: "You can define smart fallback logic in your messaging triggers. If an internet-based notification (such as a WhatsApp template) fails to deliver within a specific time window, our platform automatically routes the notification as a verified RCS card, or falls back to direct operator carrier SMS to guarantee handset delivery."
  },
  {
    question: "What are the costs associated with WhatsApp Cloud API?",
    answer: "There are two pricing layers: Meta's official conversation charges (which vary depending on whether the conversation category is Utility, Marketing, Authentication, or Service) and our platform subscription fee. We maintain full pricing transparency with no hidden markups on Meta's official conversation rates."
  },
  {
    question: "Can BitapTech customize integrations with our custom CRM or internal database?",
    answer: "Yes. Beside our subscription SaaS, we operate a senior custom software division. We specialize in building secure webhook middleware, custom admin panels, and legacy ERP connectors to bridge our communication engine with your proprietary databases."
  }
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Filter features
  const filteredFeatures = activeTab === "all" 
    ? features 
    : features.filter(f => f.category === activeTab);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden w-full bg-background text-foreground">
      {/* Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:16px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative pt-6 pb-10 md:pt-10 md:pb-14">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full opacity-30 dark:opacity-20 blur-[130px] pointer-events-none"
          style={{ background: "conic-gradient(from 180deg at 50% 50%, oklch(0.48 0.22 280), oklch(0.58 0.23 275), oklch(0.72 0.16 160), oklch(0.48 0.22 280))" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-[1.1] max-w-2xl text-left"
          >
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase mb-4 block font-mono">
              Powering Conversations. Building Connections.
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold leading-[1.1] tracking-tight text-foreground font-display">
              AI-Powered Messaging <br />
              <span className="text-gradient bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">for Modern Businesses</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Launch official WhatsApp Cloud campaigns, link scan-and-go Web Connect routes, deploy AI chat agents, and trigger enterprise SMS or RCS pipelines — all custom integrated for your software infrastructure.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="mailto:info@bitaptech.com?subject=Book%20a%20Demo%20-%20BitapTech&body=Hi%20BitapTech%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20custom%20demonstration%20of%20the%20platform%20for%20my%20business.%0A%0AName%3A%0ACompany%3A%0APhone%20Number%3A%0ANotes%3A"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-gradient-primary text-white font-semibold shadow-glow hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-xs sm:text-sm"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl glass-strong border border-border/50 font-semibold hover:bg-secondary/60 dark:hover:bg-white/5 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-xs sm:text-sm"
              >
                Explore Products
              </Link>
            </div>

            {/* Features Row */}
            <div className="mt-8 pt-6 border-t border-border/30 grid grid-cols-5 gap-2 text-center">
              {[
                { icon: Sparkles, text: "AI Automation" },
                { icon: ShieldCheck, text: "Reliable Delivery" },
                { icon: BarChart3, text: "Real-time Analytics" },
                { icon: Code2, text: "Developer Friendly" },
                { icon: Lock, text: "Secure & Compliant" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <div className="h-8.5 w-8.5 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-[9px] font-bold text-muted-foreground tracking-tight leading-tight max-w-[72px]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Sub-badge Pill */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary">
              <Rocket className="h-4 w-4 text-primary animate-pulse" />
              <span>One Platform. Every Channel. <span className="font-bold text-indigo-600">Endless Possibilities.</span></span>
            </div>
          </motion.div>

          {/* Interactive Orbital Globe Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex-1 w-full lg:max-w-[480px] relative"
          >
            <div className="relative w-full aspect-square flex items-center justify-center overflow-visible">
              {/* Concentric Orbiting Rings */}
              <div className="absolute rounded-full border border-dashed border-primary/20 w-[95%] h-[95%] animate-[spin_120s_linear_infinite]" />
              <div className="absolute rounded-full border border-dashed border-indigo-500/15 w-[75%] h-[75%] animate-[spin_80s_linear_infinite_reverse]" />
              <div className="absolute rounded-full border border-primary/10 w-[55%] h-[55%]" />

              {/* Central Glowing Globe Visual */}
              <div className="absolute w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full bg-gradient-to-tr from-primary/10 via-indigo-500/5 to-transparent flex items-center justify-center shadow-inner">
                {/* Dotted Globe Grid */}
                <div className="absolute inset-2 rounded-full border border-primary/20 opacity-40 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] animate-pulse" />
                
                {/* Glowing Core */}
                <div className="h-36 w-36 md:h-44 md:w-44 rounded-full bg-gradient-to-tr from-primary/20 to-indigo-500/20 blur-2xl pointer-events-none animate-pulse" />
                
                <Globe className="h-16 w-16 md:h-20 md:w-20 text-primary opacity-25 absolute animate-[spin_40s_linear_infinite]" />
              </div>

              {/* FLOATING COMMUNICATION NODES */}
              
              {/* WhatsApp Cloud API */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[8%] right-[8%] flex items-center gap-3 bg-white border border-[#25D366]/30 shadow-md rounded-2xl p-2.5 px-4 z-10 hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="relative h-9.5 w-9.5 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] font-bold">
                  <span className="absolute -inset-0.5 rounded-xl bg-[#25D366] opacity-10 animate-ping" />
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">WhatsApp</div>
                  <p className="text-[9px] text-muted-foreground font-semibold">Cloud API</p>
                </div>
              </motion.div>

              {/* SMS Campaigns */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[35%] -right-[5%] flex items-center gap-3 bg-white border border-indigo-500/30 shadow-md rounded-2xl p-2.5 px-4 z-10 hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="relative h-9.5 w-9.5 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 font-bold">
                  <span className="absolute -inset-0.5 rounded-xl bg-indigo-500 opacity-10 animate-ping" />
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">SMS</div>
                  <p className="text-[9px] text-muted-foreground font-semibold">Campaigns</p>
                </div>
              </motion.div>

              {/* Email Engagement */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[10%] right-[5%] flex items-center gap-3 bg-white border border-amber-500/30 shadow-md rounded-2xl p-2.5 px-4 z-10 hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="relative h-9.5 w-9.5 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold">
                  <span className="absolute -inset-0.5 rounded-xl bg-amber-500 opacity-10 animate-ping" />
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">Email</div>
                  <p className="text-[9px] text-muted-foreground font-semibold">Engagement</p>
                </div>
              </motion.div>

              {/* AI Automation */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[5%] left-[8%] flex items-center gap-3 bg-white border border-primary/30 shadow-md rounded-2xl p-2.5 px-4 z-10 hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="relative h-9.5 w-9.5 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                  <span className="absolute -inset-0.5 rounded-xl bg-primary opacity-10 animate-ping" />
                  <Bot className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">AI Automation</div>
                  <p className="text-[9px] text-muted-foreground font-semibold">& Chatbots</p>
                </div>
              </motion.div>

              {/* RCS Messaging */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[28%] -left-[5%] flex items-center gap-3 bg-white border border-sky-500/30 shadow-md rounded-2xl p-2.5 px-4 z-10 hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="relative h-9.5 w-9.5 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600 font-bold">
                  <span className="absolute -inset-0.5 rounded-xl bg-sky-500 opacity-10 animate-ping" />
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">RCS</div>
                  <p className="text-[9px] text-muted-foreground font-semibold">Messaging</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST FACTORS ROW */}
      <section className="border-y border-border/40 bg-secondary/15 dark:bg-white/2 py-5 relative z-10">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center justify-center gap-3 p-2 lg:border-r border-border/40 last:border-none">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-foreground">Enterprise Grade</div>
              <p className="text-[9px] text-muted-foreground font-semibold">Secure & Resilient Infrastructure</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-2 lg:border-r border-border/40 last:border-none">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Zap className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-foreground">High Performance</div>
              <p className="text-[9px] text-muted-foreground font-semibold">Low Latency Carrier Pipes</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-2 lg:border-r border-border/40 last:border-none">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Users className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-foreground">Trusted by 2000+</div>
              <p className="text-[9px] text-muted-foreground font-semibold">Businesses Globally</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-2 last:border-none">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Award className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-foreground">MSME Registered</div>
              <p className="text-[9px] text-muted-foreground font-semibold">Official Gov Recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC CATEGORY FILTER SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Our Capabilities</div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground leading-tight">
              Explore messaging platforms & custom software.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              Filter through our specialized messaging services, scan-to-connect nodes, and custom middleware structures.
            </p>
          </div>
        </Reveal>

        {/* Tab Selectors */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {(["all", "whatsapp", "sms-rcs", "custom-dev"] as const).map((tab) => {
            const labels: Record<Category, string> = {
              all: "Show All",
              whatsapp: "Conversational (WhatsApp)",
              "sms-rcs": "Enterprise SMS & RCS",
              "custom-dev": "Bespoke Software Services"
            };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-primary text-white border-primary shadow-glow"
                    : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/20"
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((f, i) => (
              <motion.div
                layout
                key={f.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-border bg-card p-6 h-full flex flex-col justify-between hover:shadow-elegant hover:border-primary/20 transition-all duration-300"
              >
                <div>
                  <div className={`inline-flex self-start rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider mb-4 ${f.badgeColor}`}>
                    {f.badge}
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground leading-snug">{f.title}</h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/20 flex items-center justify-between text-xs font-bold text-primary">
                  <Link href={f.category === "custom-dev" ? "/services" : "/products"} className="hover:underline inline-flex items-center gap-1">
                    Explore Details <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* WHATSAPP ARCHITECTURAL TRANSPARENCY */}
      <section className="mx-auto max-w-7xl px-6 py-8 border-t border-border/20">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Cloud API Card */}
            <div className="group relative rounded-2xl border border-border bg-card p-8 flex flex-col justify-between hover:border-primary/25 hover:shadow-elegant transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-500 rounded-t-2xl" />
              <div>
                <div className="h-9 w-9 grid place-items-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-6">
                  <Cloud className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-xl font-bold font-display">WpAI Cloud API (Official Meta)</h3>
                <p className="mt-1 text-xs font-semibold text-indigo-500">For enterprise scale & verified green badge recognition</p>
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Processes transactions directly through Meta cloud endpoints. Highly resilient for massive broadcasts, multi-agent workspaces, and automated answering agents.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-muted-foreground font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" /> 100% Meta endpoint Uptime guarantee</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" /> Requires template approval & business profile checks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" /> Subject to Meta's category conversation charges</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-border/40">
                <Link href="/products#cloud-api" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  View Cloud API specs <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Web Session Card */}
            <div className="group relative rounded-2xl border border-border bg-card p-8 flex flex-col justify-between hover:border-accent/25 hover:shadow-elegant transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500 rounded-t-2xl" />
              <div>
                <div className="h-9 w-9 grid place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6">
                  <Zap className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-xl font-bold font-display">WpAI Web Session Connect</h3>
                <p className="mt-1 text-xs font-semibold text-emerald-500">For cost-effective transactional notifications & zero Meta fees</p>
                <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Integrates with standard web session endpoints. Simply scan the QR code to pair your device and start broadcasting custom alerts and transactional logs instantly.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-muted-foreground font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Zero Meta conversation messaging charges</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Send plain text, media PDFs, and custom forms instantly</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Paired phone must remain powered & online</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-border/40">
                <Link href="/products#web-session" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  View Web Connect specs <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CUSTOM ENGINEERING SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-8 border-t border-border/20">
        <Reveal>
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">Bespoke Custom Engineering</div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight font-display text-foreground">
                Need tailored dashboard workflows? Let's build.
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                If WpAI needs to sync with a custom administrative platform, proprietary internal database, or complex third-party ERP webhook triggers, our software development division custom builds the API integration layers for you.
              </p>
              <div className="mt-6">
                <Link href="/services" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                  View Custom Services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Code2, title: "Custom Admin Portals", desc: "Design and build dedicated web panels, user dashboards, and management portals using React, Next.js, and Node." },
                { icon: Database, title: "Database Sync Middleware", desc: "Construct low-latency connectors syncing your internal client databases safely with our messaging queues." },
                { icon: Layers, title: "Custom API Middleware", desc: "Setup secure endpoints, data mapping bridges, and backend triggers for custom messaging alerts." },
                { icon: Cpu, title: "Workflow Automations", desc: "Automate manual entry workflows, trigger-based updates, and coordinate webhooks across your platforms." }
              ].map((s) => (
                <div key={s.title} className="glass rounded-xl p-5 border border-border/50 hover:border-primary/20 transition-all duration-300">
                  <div className="h-8.5 w-8.5 grid place-items-center rounded-lg bg-primary/10 text-primary mb-4">
                    <s.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-bold text-sm font-display text-foreground">{s.title}</h3>
                  <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* INTERACTIVE FAQ ACCORDION */}
      <section className="mx-auto max-w-5xl px-6 py-10 border-t border-border/20">
        <Reveal>
          <div className="text-center mb-12">
            <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">FAQ</div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display">Frequently Asked Questions</h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Get answers to technical details about compliance, onboarding, and platform configurations.</p>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-semibold text-xs sm:text-sm text-foreground hover:bg-secondary/40 dark:hover:bg-white/2 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 shrink-0 ml-4 ${openFaq === idx ? "rotate-180 text-primary" : ""}`} />
                </button>
                <div
                  className={`transition-all duration-350 ease-in-out ${
                    openFaq === idx ? "max-h-[200px] border-t border-border/40" : "max-h-0 pointer-events-none"
                  } overflow-hidden`}
                >
                  <p className="p-5 text-xs text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-6 py-10 relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 sm:p-16 text-white shadow-glow">
            <div aria-hidden="true" className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight font-display">
                Ready to optimize your customer communication?
              </h2>
              <p className="mt-4 text-white/80 text-xs sm:text-sm leading-relaxed">
                Connect your business lines to WpAI or schedule a review with our software solutions engineering team. We'll map the fastest path to set up conversational bots and broadcast channels.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:info@bitaptech.com`}
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white text-primary font-bold shadow-md hover:bg-white/95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  <Mail className="h-4 w-4" /> info@bitaptech.com
                </a>
                <a
                  href="mailto:info@bitaptech.com?subject=Schedule%20a%20Demo%20-%20BitapTech&body=Hi%20BitapTech%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20custom%20demonstration%20of%20the%20platform%20for%20my%20business.%0A%0AName%3A%0ACompany%3A%0APhone%20Number%3A%0ANotes%3A"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-white/40 text-white font-bold hover:bg-white/10 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  Schedule Demo <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
