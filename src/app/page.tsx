"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  MessageSquare,
  Cloud,
  Zap,
  Cpu,
  Code2,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Mail,
  Terminal,
  Users,
  Database,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Award,
  Rocket,
  Lock,
  BarChart3,
  Brain,
  Send,
  TrendingUp,
  ShoppingBag,
  Server,
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
    desc: "Official Meta Cloud API. Stable endpoints, high-speed broadcasts, and green checkmark eligibility.",
    badge: "Official Meta API",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  },
  {
    id: "wp-web",
    category: "whatsapp",
    title: "WpAI Web Session Connect",
    desc: "Instantly scan QR to connect. Draft and dispatch arbitrary messages or media. Zero Meta conversation charges.",
    badge: "Scan & Connect",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    id: "rcs-rich",
    category: "sms-rcs",
    title: "RCS Business Messaging",
    desc: "Rich media, carousel menus, and verified sender names inside default SMS. Perfect for interactive promotions.",
    badge: "Next-Gen SMS",
    badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  },
  {
    id: "otp-alert",
    category: "sms-rcs",
    title: "Transactional OTP Gateway",
    desc: "Direct operator-connected SMS routes for OTP notifications with smart failover.",
    badge: "Low Latency SMS",
    badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  },
  {
    id: "custom-software",
    category: "custom-dev",
    title: "Bespoke Enterprise Software",
    desc: "Bespoke dashboards and panels custom-engineered for your company's workflows.",
    badge: "Bespoke Dev",
    badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  },
  {
    id: "middleware-api",
    category: "custom-dev",
    title: "Messaging Middleware & Syncs",
    desc: "Custom database connectors and APIs linking messaging channels to HubSpot, Zoho, Salesforce, etc.",
    badge: "API Integration",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
];

// FAQs Data
const faqs = [
  {
    question: "What is the difference between WhatsApp Cloud API and Web Session Connect?",
    answer:
      "Cloud API is Meta's official hosting service (highly stable, requires template approval, and incurs official conversation fees). Web Session Connect works by scanning a QR code like WhatsApp Web (no approvals needed, 100% free of Meta fees, but requires your phone to stay online).",
  },
  {
    question: "Do I need Meta Business Verification to get started?",
    answer:
      "Only for the Cloud API (to unlock higher message quotas, though you can start in a sandbox). For Web Session Connect, no verification is required—just scan and send.",
  },
  {
    question: "How does the SMS and RCS failover configuration work?",
    answer:
      "If a WhatsApp message fails to deliver, our router automatically falls back to an RCS rich card or standard SMS within a set time window to guarantee delivery.",
  },
  {
    question: "What are the costs associated with WhatsApp Cloud API?",
    answer:
      "You pay Meta's official conversation rates (based on category: utility, marketing, authentication) plus our platform subscription. We offer direct-rate pricing with zero markup.",
  },
  {
    question: "Can BitapTech customize integrations with our custom CRM or internal database?",
    answer:
      "Yes. Our software engineering team specializes in custom admin panels, database hooks, and proprietary CRM integrations to connect our messaging engines directly to your workspace.",
  },
];

const iconMap = {
  "wp-cloud": MessageSquare,
  "wp-web": Zap,
  "rcs-rich": Sparkles,
  "otp-alert": Lock,
  "custom-software": Code2,
  "middleware-api": Database,
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Filter features
  const filteredFeatures =
    activeTab === "all" ? features : features.filter((f) => f.category === activeTab);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden w-full bg-background text-foreground">
      {/* Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:16px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Ambient Glows */}
      <div className="absolute top-[20%] left-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/2 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[45%] right-[-200px] h-[600px] w-[600px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[70%] left-[-200px] h-[550px] w-[550px] rounded-full bg-primary/5 dark:bg-primary/2 blur-[120px] pointer-events-none z-0" />

      {/* HERO SECTION */}
      <section className="relative pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full opacity-35 dark:opacity-20 blur-[130px] pointer-events-none"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, oklch(0.48 0.22 280), oklch(0.58 0.23 275), oklch(0.72 0.16 160), oklch(0.48 0.22 280))",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Hero Copy (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-[1.1] max-w-2xl text-left"
          >
            {/* Top Badge */}
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#16a34a] dark:text-[#4ade80] uppercase mb-4 block font-mono animate-fade-in">
              Official WhatsApp Business API & Omnichannel Gateway
            </span>

            {/* H1 Title */}
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold leading-[1.1] tracking-tight text-foreground font-display">
              AI-Powered WhatsApp API <br />
              <span className="text-gradient bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                & Omnichannel Messaging
              </span>
            </h1>

            {/* Subtitle description */}
            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              Official WhatsApp Cloud API, WhatsApp Web QR sync, AI chat agents, and high-performance SMS/RCS triggers — unified in one developer-friendly platform.
            </p>

            {/* 3 Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 max-w-xl">
              {/* Card 1 */}
              <div className="bg-white/70 dark:bg-zinc-950/45 border border-border/50 rounded-2xl p-3.5 shadow-sm hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-lg font-extrabold text-foreground">99.9%</span>
                </div>
                <span className="text-[10px] text-muted-foreground leading-snug mt-1.5 block font-semibold">
                  Uptime & delivery rate via operator routes¹
                </span>
              </div>

              {/* Card 2 */}
              <div className="bg-white/70 dark:bg-zinc-950/45 border border-border/50 rounded-2xl p-3.5 shadow-sm hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <TrendingUp className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-lg font-extrabold text-foreground">3.3x</span>
                </div>
                <span className="text-[10px] text-muted-foreground leading-snug mt-1.5 block font-semibold">
                  Higher conversion with WhatsApp campaigns²
                </span>
              </div>

              {/* Card 3 */}
              <div className="bg-white/70 dark:bg-zinc-950/45 border border-border/50 rounded-2xl p-3.5 shadow-sm hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Zap className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-lg font-extrabold text-foreground">$0</span>
                </div>
                <span className="text-[10px] text-muted-foreground leading-snug mt-1.5 block font-semibold">
                  Meta convo fees via Web Session Connect³
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-gradient-primary text-white font-bold shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-xs sm:text-sm cursor-pointer"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border/85 bg-background/50 text-foreground font-semibold hover:bg-secondary/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-xs sm:text-sm"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>

          {/* Interactive Ecosystem Orbital Diagram (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex-1 w-full lg:max-w-[480px] relative mt-8 lg:mt-0"
          >
            <div className="relative w-full aspect-square flex items-center justify-center overflow-visible">
              {/* Concentric Orbiting Rings */}
              <div className="absolute rounded-full border border-dashed border-primary/10 w-[95%] h-[95%] animate-[spin_150s_linear_infinite]" />
              <div className="absolute rounded-full border border-dashed border-indigo-500/15 w-[75%] h-[75%] animate-[spin_100s_linear_infinite_reverse]" />
              <div className="absolute rounded-full border border-primary/5 w-[55%] h-[55%]" />

              {/* Central Circle Hub */}
              <div className="absolute w-[150px] h-[150px] md:w-[170px] md:h-[170px] rounded-full bg-white dark:bg-zinc-950 border border-border/80 flex flex-col items-center justify-center p-3 text-center shadow-lg shadow-black/5 z-20">
                <div className="h-10 w-10 rounded-full bg-[#4f46e5] flex items-center justify-center text-white mb-2.5 shadow-md">
                  <Users className="h-5 w-5" />
                </div>
                <div className="text-[11px] md:text-xs font-extrabold text-foreground font-display tracking-tight leading-tight">
                  Hyper <br />
                  Personalization
                </div>
                <div className="text-[#4f46e5] dark:text-[#818cf8] font-bold text-[9px] mt-1">
                  (Our MOAT)
                </div>
              </div>

              {/* ORBITAL DOTS */}
              {/* Inner ring green dot (top) */}
              <div className="absolute top-[22.5%] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-emerald-500 z-10 border border-white dark:border-zinc-950 shadow-sm" />
              {/* Inner ring blue dot (left) */}
              <div className="absolute top-[41%] left-[29%] h-2.5 w-2.5 rounded-full bg-emerald-400 z-10 border border-white dark:border-zinc-950 shadow-sm" />
              {/* Inner ring violet dot (right) */}
              <div className="absolute top-[41%] right-[29%] h-2.5 w-2.5 rounded-full bg-indigo-500 z-10 border border-white dark:border-zinc-950 shadow-sm" />
              {/* Inner ring bottom dot */}
              <div className="absolute bottom-[22.5%] left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-indigo-400 z-10 border border-white dark:border-zinc-950 shadow-sm" />
              {/* Middle ring purple dot (right) */}
              <div className="absolute top-1/2 -translate-y-1/2 right-[12.5%] h-2.5 w-2.5 rounded-full bg-indigo-600 z-10 border border-white dark:border-zinc-950 shadow-sm" />

              {/* FLOATING ORBITAL NODES */}

              {/* 1. WhatsApp Cloud API (top) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[2%] left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border border-[#25D366]/20 shadow-md shadow-black/5 rounded-xl p-1.5 px-3 z-10 hover:scale-[1.03] hover:border-[#25D366]/50 transition-all duration-300"
              >
                <div className="relative h-7 w-7 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                  <span className="absolute -inset-0.5 rounded-lg bg-[#25D366] opacity-10 animate-ping" />
                  <MessageSquare className="h-3.5 w-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-foreground leading-none">WhatsApp</div>
                  <p className="text-[8px] text-muted-foreground font-semibold mt-0.5">Cloud API</p>
                </div>
              </motion.div>

              {/* 2. SMS Campaigns (middle-right) */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[34%] right-[-6%] flex items-center gap-2 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border border-indigo-500/20 shadow-md shadow-black/5 rounded-xl p-1.5 px-3 z-10 hover:scale-[1.03] hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="relative h-7 w-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <span className="absolute -inset-0.5 rounded-lg bg-indigo-500 opacity-10 animate-ping" />
                  <MessageSquare className="h-3.5 w-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-foreground leading-none">SMS</div>
                  <p className="text-[8px] text-muted-foreground font-semibold mt-0.5">Campaigns</p>
                </div>
              </motion.div>

              {/* 3. AI-Driven Insights & Predictions (bottom-right) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] right-[-4%] flex items-center gap-2 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border border-pink-500/20 shadow-md shadow-black/5 rounded-xl p-1.5 px-3 z-10 hover:scale-[1.03] hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="relative h-7 w-7 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0">
                  <Brain className="h-3.5 w-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-foreground leading-none">
                    AI-Driven Insights
                  </div>
                  <p className="text-[8px] text-muted-foreground font-semibold mt-0.5">
                    & Predictions
                  </p>
                </div>
              </motion.div>

              {/* 4. Email Engagement (bottom center-right) */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[4%] right-[16%] flex items-center gap-2 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border border-orange-500/20 shadow-md shadow-black/5 rounded-xl p-1.5 px-3 z-10 hover:scale-[1.03] hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="relative h-7 w-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-foreground leading-none">Email</div>
                  <p className="text-[8px] text-muted-foreground font-semibold mt-0.5">
                    Engagement
                  </p>
                </div>
              </motion.div>

              {/* 5. AI Automation & Chatbots (bottom center-left) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[4%] left-[16%] flex items-center gap-2 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border border-emerald-500/20 shadow-md shadow-black/5 rounded-xl p-1.5 px-3 z-10 hover:scale-[1.03] hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="relative h-7 w-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-foreground leading-none">
                    AI Automation
                  </div>
                  <p className="text-[8px] text-muted-foreground font-semibold mt-0.5">
                    & Chatbots
                  </p>
                </div>
              </motion.div>

              {/* 6. Unified Customer Intelligence (middle-left) */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                className="absolute top-[52%] left-[-10%] flex items-center gap-2 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border border-blue-500/20 shadow-md shadow-black/5 rounded-xl p-1.5 px-3 z-10 hover:scale-[1.03] hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="relative h-7 w-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Database className="h-3.5 w-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-foreground leading-none">
                    Unified Customer
                  </div>
                  <p className="text-[8px] text-muted-foreground font-semibold mt-0.5">
                    Intelligence
                  </p>
                </div>
              </motion.div>

              {/* 7. RCS Messaging (top-left) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute top-[22%] left-[4%] flex items-center gap-2 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border border-sky-500/20 shadow-md shadow-black/5 rounded-xl p-1.5 px-3 z-10 hover:scale-[1.03] hover:border-sky-500/50 transition-all duration-300"
              >
                <div className="relative h-7 w-7 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                  <MessageSquare className="h-3.5 w-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-foreground leading-none">RCS</div>
                  <p className="text-[8px] text-muted-foreground font-semibold mt-0.5">Messaging</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom subtitle pill */}
            <div className="mt-6 rounded-2xl border border-indigo-500/10 bg-indigo-50/10 dark:bg-indigo-950/5 p-3.5 text-center max-w-xs mx-auto shadow-sm">
              <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">
                Unify workflows, automate chats, and drive{" "}
                <span className="font-bold text-[#4f46e5] dark:text-[#818cf8]">
                  business growth.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sources footnote citation at bottom left */}
        <div className="relative mx-auto max-w-7xl px-6 mt-12 text-left pointer-events-none">
          <span className="text-[9px] text-muted-foreground/60 block font-mono">
            Sources: ¹ Industry Benchmarks | ² Salesforce State of the Connected Customer | ³
            BitapTech Web Session Flatrate Model
          </span>
        </div>
      </section>

      {/* INTEGRATIONS MARQUEE */}
      <section className="border-y border-border/40 bg-secondary/15 dark:bg-zinc-950/20 py-6 overflow-hidden relative z-10">
        <div className="mx-auto max-w-7xl px-6 text-center mb-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground/80 font-mono">
            Supported Messaging Channels & Gateways
          </p>
        </div>
        <div className="relative flex overflow-x-hidden w-full">
          <div className="animate-marquee flex whitespace-nowrap gap-16 text-xs sm:text-sm font-semibold text-muted-foreground">
            {/* Set 1 */}
            <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
              <MessageSquare className="h-4.5 w-4.5 text-[#25D366]" />
              <span>WhatsApp Cloud API</span>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
              <Zap className="h-4.5 w-4.5 text-[#10B981]" />
              <span>WhatsApp Web Connect</span>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
              <Sparkles className="h-4.5 w-4.5 text-[#3B82F6]" />
              <span>RCS Business Cards</span>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
              <Server className="h-4.5 w-4.5 text-[#EF4444]" />
              <span>Enterprise Bulk SMS</span>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
              <Send className="h-4.5 w-4.5 text-[#6366F1]" />
              <span>Custom Webhooks Gateway</span>
            </div>

            {/* Set 2 (for seamless loop) */}
            <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
              <MessageSquare className="h-4.5 w-4.5 text-[#25D366]" />
              <span>WhatsApp Cloud API</span>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
              <Zap className="h-4.5 w-4.5 text-[#10B981]" />
              <span>WhatsApp Web Connect</span>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
              <Sparkles className="h-4.5 w-4.5 text-[#3B82F6]" />
              <span>RCS Business Cards</span>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
              <Server className="h-4.5 w-4.5 text-[#EF4444]" />
              <span>Enterprise Bulk SMS</span>
            </div>
            <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-200">
              <Send className="h-4.5 w-4.5 text-[#6366F1]" />
              <span>Custom Webhooks Gateway</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT & SOLUTIONS SHOWCASES */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 space-y-20 md:space-y-28 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">
              Our Products & Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground leading-tight">
              Powerful messaging channels & custom software.
            </h2>
            <p className="mt-3 text-muted-foreground text-xs sm:text-sm max-w-lg mx-auto">
              Explore how our official WhatsApp APIs, session integrations, and bespoke engineering connect customer communications.
            </p>
          </div>
        </Reveal>

        {/* SHOWCASE 1: WhatsApp Official Cloud API (Text Left, Graphic Right) */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3 py-1 text-xs font-bold border border-indigo-500/20">
              <Cloud className="h-3.5 w-3.5" /> Official Meta Cloud API
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">
              Scale messaging with Meta's official hosting
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Connect your business CRM or support desks directly to Meta's verified endpoints. Perfect for enterprise campaigns, green badge recognition, and unlimited daily broadcasts with guaranteed deliverability.
            </p>
            <ul className="space-y-2.5 text-xs text-muted-foreground font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" /> Verified official Green Checkmark eligibility
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" /> Cloud session queues preserve messages during outages
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0" /> Connect multiple custom support agents seamlessly
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/products#cloud-api"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] dark:text-[#818cf8] hover:underline"
              >
                View Cloud API Specifications <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex justify-center">
            {/* Mock WhatsApp Chat UI Visual */}
            <div className="relative w-full max-w-[280px] rounded-[36px] border-8 border-zinc-800 dark:border-zinc-700 bg-zinc-950 p-2.5 shadow-2xl overflow-hidden aspect-[9/18]">
              {/* Speaker/Camera notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3.5 w-24 bg-zinc-800 rounded-b-xl z-20" />
              
              {/* Chat Screen container */}
              <div className="h-full w-full rounded-[20px] bg-[#efeae2] dark:bg-zinc-900 flex flex-col justify-between overflow-hidden relative font-sans text-[10px]">
                {/* Whatsapp Chat Header */}
                <div className="bg-[#075e54] text-white p-2.5 pt-4 flex items-center gap-2 shadow-sm">
                  <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-[9px] shadow-sm">BT</div>
                  <div>
                    <div className="font-bold flex items-center gap-0.5 leading-tight text-[9px]">
                      BitapTech Bot
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[5px] shrink-0 font-extrabold">✓</span>
                    </div>
                    <span className="text-[7px] text-emerald-300 font-semibold block leading-none mt-0.5">Online</span>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="flex-1 p-2 space-y-2 overflow-y-auto flex flex-col justify-end bg-[radial-gradient(#dfdcd6_1px,transparent_1px)] bg-[size:8px_8px] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] text-[9px]">
                  {/* Bot Message 1 */}
                  <div className="self-start bg-white dark:bg-zinc-800 text-foreground p-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] leading-relaxed">
                    Hello! How can we help you scale your customer communications today? 🚀
                  </div>
                  {/* User Message */}
                  <div className="self-end bg-[#dcf8c6] dark:bg-emerald-950 text-foreground p-2 rounded-lg rounded-tr-none shadow-sm max-w-[85%] leading-relaxed">
                    We need to broadcast notifications to 10k users.
                  </div>
                  {/* Bot Message 2 */}
                  <div className="self-start bg-white dark:bg-zinc-800 text-foreground p-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] leading-relaxed">
                    Understood. We recommend the Official Cloud API for safe broadcasts. Click below to view:
                    <div className="mt-2 border-t border-border/20 pt-1.5 flex justify-center">
                      <Link href="/book-demo" className="inline-flex items-center gap-1 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-extrabold px-2.5 py-1 rounded-md text-[8px] shadow-sm">
                        View Demo <ArrowRight className="h-2 w-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Chat Input Bar */}
                <div className="bg-[#f0f0f0] dark:bg-zinc-800/80 p-1.5 flex items-center gap-1.5 border-t border-border/10">
                  <div className="flex-1 bg-white dark:bg-zinc-700 rounded-full py-1 px-3 text-[8px] text-muted-foreground border border-border/40">
                    Type a message...
                  </div>
                  <div className="h-6 w-6 rounded-full bg-[#075e54] flex items-center justify-center text-white shadow-sm shrink-0">
                    <Send className="h-2.5 w-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* SHOWCASE 2: WpAI Web Session Connect (Graphic Left, Text Right) */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal className="order-2 md:order-1 flex justify-center">
            {/* Mock QR Scan Dashboard Visual */}
            <div className="flex flex-col items-center justify-center p-6 border border-border/80 rounded-2xl bg-white/40 dark:bg-zinc-950/20 shadow-sm backdrop-blur-sm relative overflow-hidden min-h-[330px] w-full max-w-[340px]">
              {/* Floating ambient orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-36 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
              
              {/* Mock QR Dashboard Frame */}
              <div className="relative border border-border/60 rounded-xl bg-card p-4 shadow-md w-full max-w-[220px] text-center z-10 hover:scale-[1.02] transition-transform duration-300">
                <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-2.5">
                  WpAI Web Session Sync
                </div>
                
                {/* QR Code Container */}
                <div className="relative mx-auto w-28 h-28 border border-border/40 p-1.5 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                  {/* Simulated QR Grid Patterns */}
                  <div className="grid grid-cols-4 gap-1.5 w-full h-full opacity-85">
                    <div className="border-[5px] border-zinc-955 rounded" />
                    <div className="grid grid-cols-2 gap-0.5 p-0.5">
                      <div className="bg-zinc-955 rounded-[1px]" /><div className="bg-zinc-955 rounded-[1px]" />
                    </div>
                    <div className="grid grid-cols-2 gap-0.5 p-0.5">
                      <div className="bg-zinc-955 rounded-[1px]" /><div className="bg-zinc-955 rounded-[1px]" />
                    </div>
                    <div className="border-[5px] border-zinc-955 rounded" />
                    <div className="bg-zinc-955 rounded-sm" />
                    <div className="bg-zinc-955 rounded-sm" />
                    <div className="bg-zinc-955 rounded-sm" />
                    <div className="border-[5px] border-zinc-955 rounded" />
                  </div>
                  {/* Animated scanline */}
                  <div className="absolute left-0 w-full h-[2px] bg-emerald-500 shadow-[0_0_8px_#10b981] animate-[bounce_3s_infinite]" />
                </div>
                
                {/* Status Indicator */}
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[8px] font-bold text-muted-foreground">Waiting for Scan...</span>
                </div>
              </div>
              
              {/* Secondary status overlay */}
              <div className="mt-3.5 text-center z-10 px-4">
                <span className="text-[9px] text-muted-foreground font-semibold leading-normal block">
                  Scan and sync your existing WhatsApp line to send notifications instantly.
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-xs font-bold border border-emerald-500/20">
              <Zap className="h-3.5 w-3.5" /> Scan-to-Connect QR Session
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">
              Send alerts from your number with zero Meta tariffs
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Pair your active phone number in under 5 minutes. No template registration or Business Verification required. Send customized PDF bills, transactional invoices, and automated updates directly from your number.
            </p>
            <ul className="space-y-2.5 text-xs text-muted-foreground font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Zero conversation fees (100% Meta tariff-free)
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Sends images, PDF attachments, and media instantly
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Uses standard WhatsApp Web QR sync mechanics
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/products#web-session"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Explore Session Specifications <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* SHOWCASE 3: Custom Dev & Routing Pipeline (Text Left, Graphic Right) */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 px-3 py-1 text-xs font-bold border border-rose-500/20">
              <Cpu className="h-3.5 w-3.5" /> Custom Middleware & APIs
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">
              Bespoke CRM integrations & failover routing
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Need custom admin dashboards, database triggers, or operator routes? Our software engineers write dedicated synchronization middleware linking your HubSpot, Zoho, or custom ERP systems to active messaging routes.
            </p>
            <ul className="space-y-2.5 text-xs text-muted-foreground font-medium">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0" /> High-speed carrier SMPP setups (up to 2,000 TPS)
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0" /> Automatic SMS/RCS fallback when chats fail
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-rose-500 shrink-0" /> Custom React/Next.js dashboard interfaces
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-500 hover:underline"
              >
                View Bespoke Services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex justify-center">
            {/* Pipeline Flowchart Visual */}
            <div className="flex flex-col gap-2.5 justify-center p-5 border border-border/80 rounded-2xl bg-white/40 dark:bg-zinc-950/20 shadow-sm backdrop-blur-sm min-h-[310px] w-full max-w-[340px] relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-36 rounded-full bg-rose-500/10 blur-2xl pointer-events-none" />
              
              {/* Flow Node 1 */}
              <div className="relative border border-border/60 rounded-xl bg-card p-2.5 shadow-sm z-10 flex items-center gap-2.5 hover:scale-[1.01] transition-transform duration-300">
                <div className="h-7 w-7 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                  <Server className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-foreground leading-tight">API / Webhook Trigger</h4>
                  <p className="text-[8px] text-muted-foreground font-semibold">User triggers transactional notification</p>
                </div>
              </div>
              
              {/* Connecting arrow line */}
              <div className="h-5 w-[2px] bg-gradient-to-b from-rose-500/80 to-indigo-500/80 ml-6 self-start animate-pulse" />
              
              {/* Flow Node 2 */}
              <div className="relative border border-border/60 rounded-xl bg-card p-2.5 shadow-sm z-10 flex items-center gap-2.5 hover:scale-[1.01] transition-transform duration-300">
                <div className="h-7 w-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Cloud className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-foreground leading-tight">WpAI Routing Middleware</h4>
                  <p className="text-[8px] text-muted-foreground font-semibold">Checking primary WhatsApp channel state</p>
                </div>
              </div>
              
              {/* Connecting arrow line */}
              <div className="h-5 w-[2px] bg-gradient-to-b from-indigo-500/80 to-emerald-500/80 ml-6 self-start animate-pulse" />
              
              {/* Flow Node 3 */}
              <div className="relative border border-border/60 rounded-xl bg-card p-2.5 shadow-sm z-10 flex items-center gap-2.5 hover:scale-[1.01] transition-transform duration-300">
                <div className="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Send className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold text-foreground leading-tight">Carrier SMS / RCS Fallback</h4>
                  <p className="text-[8px] text-muted-foreground font-semibold">Automatic operator fallback triggers in &lt; 2s</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTERACTIVE FAQ ACCORDION */}
      <section className="mx-auto max-w-5xl px-6 py-4 border-t border-border/20 relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Get answers to technical details about compliance, onboarding, and platform
              configurations.
            </p>
          </div>
        </Reveal>

        <div className="space-y-3 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  openFaq === idx
                    ? "border-primary/30 bg-indigo-50/5 dark:bg-zinc-950/20 shadow-md border-l-2 border-l-primary"
                    : "border-border/80 bg-white/40 dark:bg-zinc-950/15 hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 flex items-center justify-between text-left font-semibold text-xs sm:text-sm text-foreground hover:bg-secondary/20 dark:hover:bg-white/1 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-300 shrink-0 ml-4 ${
                      openFaq === idx ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-350 ease-in-out ${
                    openFaq === idx
                      ? "max-h-[200px] border-t border-border/40"
                      : "max-h-0 pointer-events-none"
                  } overflow-hidden`}
                >
                  <p className="p-4 text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-6 pt-4 pb-2 relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 sm:p-16 text-white shadow-glow">
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight font-display">
                Ready to optimize your customer communication?
              </h2>
              <p className="mt-4 text-white/80 text-xs sm:text-sm leading-relaxed">
                Connect your business lines to WpAI or schedule a review with our software solutions
                engineering team. We'll map the fastest path to set up conversational bots and
                broadcast channels.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white text-primary font-bold shadow-md hover:bg-white/95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  <Mail className="h-4 w-4" /> {SITE.email}
                </a>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-white/40 text-white font-bold hover:bg-white/10 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  Schedule Demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
