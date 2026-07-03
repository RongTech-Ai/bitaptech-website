"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSent(true);
    setLoading(false);
  };

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
            className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-semibold flex flex-col gap-2">
          <span className="text-muted-foreground">Email</span>
          <input
            required
            type="email"
            className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="block text-sm font-semibold mt-5 flex flex-col gap-2">
        <span className="text-muted-foreground">Company</span>
        <input
          className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
          placeholder="Company name"
        />
      </label>
      <label className="block text-sm font-semibold mt-5 flex flex-col gap-2">
        <span className="text-muted-foreground">Project details</span>
        <textarea
          required
          rows={5}
          className="w-full rounded-xl border border-border/60 bg-background p-4 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 resize-none"
          placeholder="Tell us what you'd like to build..."
        />
      </label>
      <button
        disabled={loading}
        className="mt-8 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-gradient-primary text-white font-bold shadow-glow hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-75 disabled:scale-100 transition-all duration-200 cursor-pointer"
      >
        {loading ? "Sending..." : "Send message"} <ArrowRight className="h-4 w-4" />
      </button>
      {sent && (
        <p className="mt-5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          Thanks — we'll be in touch soon.
        </p>
      )}
    </form>
  );
}
