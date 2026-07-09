"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

// Web3Forms lets a fully static site accept submissions with no backend.
// Set NEXT_PUBLIC_WEB3FORMS_KEY to enable; otherwise we fall back to mailto.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Graceful fallback when no form endpoint is configured.
    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(
        `New project enquiry from ${data.get("name") || "website"}`,
      );
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company")}\n\n${data.get("message")}`,
      );
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("loading");
    setError("");
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", `New project enquiry — ${SITE.name} website`);
    data.append("from_name", `${SITE.name} website`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const loading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border/50 bg-card p-6 sm:p-10 shadow-elegant hover:border-primary/10 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary" />
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="text-sm font-semibold flex flex-col gap-2">
          <span className="text-muted-foreground">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-semibold flex flex-col gap-2">
          <span className="text-muted-foreground">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="block text-sm font-semibold mt-5 flex flex-col gap-2">
        <span className="text-muted-foreground">Company</span>
        <input
          name="company"
          autoComplete="organization"
          className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
          placeholder="Company name"
        />
      </label>
      <label className="block text-sm font-semibold mt-5 flex flex-col gap-2">
        <span className="text-muted-foreground">Project details</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-xl border border-border/60 bg-background p-4 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 resize-none"
          placeholder="Tell us what you'd like to build..."
        />
      </label>
      {/* Honeypot — bots fill this, humans never see it */}
      <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="hidden" />
      <button
        disabled={loading}
        className="mt-8 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-gradient-primary text-white font-bold shadow-glow hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-75 disabled:scale-100 transition-all duration-200 cursor-pointer"
      >
        {loading ? "Sending..." : "Send message"} <ArrowRight className="h-4 w-4" />
      </button>
      {status === "success" && (
        <p className="mt-5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          Thanks — we&apos;ll be in touch within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="mt-5 text-sm font-semibold text-destructive flex items-center gap-1.5">
          {error || "Something went wrong. Please email us directly."}
        </p>
      )}
    </form>
  );
}
