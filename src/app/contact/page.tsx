import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with BitapTech. Let's build something amazing together.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact BitapTech",
    description: "Get in touch with BitapTech. Let's build something amazing together.",
    url: "/contact",
  },
  twitter: {
    title: "Contact BitapTech",
    description: "Get in touch with BitapTech. Let's build something amazing together.",
  },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 relative">
        <Reveal>
          <div className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">
            Solutions Consultation
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl font-display leading-[1.1]">
            Let's scale your{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              communications pipeline
            </span>
            .
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Talk directly with our solution engineers. We'll map out the fastest paths to sync your CRM with WhatsApp sessions, config official API routes, or set up carrier fallbacks.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-5 gap-10 relative z-10">
          <Reveal className="lg:col-span-2 flex flex-col gap-5 justify-start">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-start gap-4 rounded-2xl border border-border/50 p-6 bg-card hover:shadow-elegant hover:border-primary/20 transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-primary text-white shadow-glow shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Email
                </div>
                <div className="font-semibold text-foreground mt-1">{SITE.email}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl glass p-6 border border-border/50">
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-primary text-white shadow-glow shrink-0">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Response time
                </div>
                <div className="font-semibold text-foreground mt-1">Usually within 24 hours</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
