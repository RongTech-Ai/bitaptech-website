"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import {
  ArrowRight,
  Mail,
  Phone,
  Building2,
  UserCircle2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function BookDemoPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(result.error || "Failed to submit demo request.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const loading = status === "loading";

  return (
    <div className="relative min-h-screen overflow-hidden w-full bg-gradient-hero pt-28 pb-16 flex items-center justify-center">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="w-full max-w-4xl px-6 relative z-10 grid md:grid-cols-5 gap-10 items-center">
        {/* Left Side Content - Text and Value Prop */}
        <div className="md:col-span-2 text-left">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-4 animate-fade-in">
              <Sparkles className="h-3 w-3" /> Custom Solutions
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-foreground leading-[1.2]">
              Experience the power of{" "}
              <span className="text-gradient bg-gradient-primary">BitapTech</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Book a custom demo session with our senior engineers to discover how WpAI Cloud API,
              RCS, and custom software syncs can transform your customer communication.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-4">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 grid place-items-center font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-muted-foreground">
                  Meta Cloud API setups
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 grid place-items-center font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-muted-foreground">
                  High-TPS transactional SMTP routes
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 grid place-items-center font-bold">
                  ✓
                </div>
                <span className="text-xs font-semibold text-muted-foreground">
                  Omnichannel RCS integrations
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:col-span-3">
          <Reveal delay={0.1}>
            {status === "success" ? (
              <div className="rounded-3xl border border-emerald-500/20 bg-card/60 glass p-8 sm:p-10 shadow-elegant text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500 grid place-items-center mb-6 animate-float">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold font-display text-foreground mb-2">
                  Request Submitted!
                </h2>
                <p className="text-sm text-muted-foreground max-w-sm mb-6 leading-relaxed">
                  Thank you for booking a demo. Our team has received your request and will contact
                  you shortly. If you have questions, please reach out to us at{" "}
                  <span className="font-semibold text-foreground">{SITE.salesEmail}</span>.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-gradient-primary text-white text-xs font-semibold shadow-glow hover:opacity-95 transition-all duration-200 cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border/50 bg-card/60 glass p-6 sm:p-10 shadow-elegant hover:border-primary/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary" />

                <h2 className="text-xl font-bold font-display text-foreground mb-6">
                  Request a Demo
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground/60 pointer-events-none">
                      <UserCircle2 className="h-4.5 w-4.5" />
                    </span>
                    <input
                      required
                      name="name"
                      placeholder="Your name"
                      disabled={loading}
                      className="w-full h-11 pl-10 pr-4 rounded-xl border border-border/50 bg-background/50 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all duration-200"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground/60 pointer-events-none">
                      <Mail className="h-4.5 w-4.5" />
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Work email"
                      disabled={loading}
                      className="w-full h-11 pl-10 pr-4 rounded-xl border border-border/50 bg-background/50 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground/60 pointer-events-none">
                      <Building2 className="h-4.5 w-4.5" />
                    </span>
                    <input
                      required
                      name="company"
                      placeholder="Company"
                      disabled={loading}
                      className="w-full h-11 pl-10 pr-4 rounded-xl border border-border/50 bg-background/50 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all duration-200"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-muted-foreground/60 pointer-events-none">
                      <Phone className="h-4.5 w-4.5" />
                    </span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      disabled={loading}
                      className="w-full h-11 pl-10 pr-4 rounded-xl border border-border/50 bg-background/50 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    disabled={loading}
                    className="w-full p-4 rounded-xl border border-border/50 bg-background/50 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-gradient-primary text-white font-semibold text-sm shadow-glow hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:scale-100 transition-all duration-200 cursor-pointer"
                >
                  {loading ? "Submitting Request..." : "Request Demo"}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </button>

                {error && (
                  <p className="mt-4 text-xs font-semibold text-destructive text-center bg-destructive/10 p-3 rounded-lg animate-fade-in">
                    {error}
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
