import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-10 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-8 grid gap-10 md:grid-cols-4 relative z-10">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-white border border-border/70 shadow-sm rounded-xl flex items-center justify-center h-11 w-44 overflow-hidden relative hover:border-primary/20 transition-colors">
              <Image
                src="/assets/logo-horizontal.jpg"
                alt="BitapTech Logo"
                width={240}
                height={54}
                className="absolute inset-0 h-full w-full object-contain scale-[1.6] mix-blend-multiply"
              />
            </div>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Building the Future of Conversations. We craft high-performance SaaS messaging platforms and enterprise integrations for modern businesses.
          </p>
          <div className="flex items-center gap-3 mt-6 text-[11px] text-muted-foreground border-t border-border/20 pt-4 max-w-sm">
            <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
            <span>GDPR Aligned Data Privacy & Secure SSL Endpoints</span>
          </div>
          <div className="flex items-center gap-3.5 mt-4">
            <a
              href={SITE.sameAs[0]}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="BitapTech on LinkedIn"
              className="h-10 w-10 grid place-items-center rounded-xl border border-border/60 bg-secondary/20 dark:bg-white/5 hover:bg-accent hover:border-primary/45 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email BitapTech"
              className="h-10 w-10 grid place-items-center rounded-xl border border-border/60 bg-secondary/20 dark:bg-white/5 hover:bg-accent hover:border-primary/45 hover:text-primary transition-all duration-300"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4 tracking-tight">Our Products</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="/products#cloud-api" className="hover:text-foreground transition-colors duration-200">WpAI Cloud API (Official)</Link></li>
            <li><Link href="/products#web-session" className="hover:text-foreground transition-colors duration-200">WpAI Web Session Connect</Link></li>
            <li><Link href="/products#omnichannel" className="hover:text-foreground transition-colors duration-200">Omnichannel Suite (Beta)</Link></li>
            <li><Link href="/services" className="hover:text-foreground transition-colors duration-200">Bespoke Engineering</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4 tracking-tight">Legal & Support</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="/privacy" className="hover:text-foreground transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-foreground transition-colors duration-200">Terms of Service</Link></li>
            <li><Link href="/refund" className="hover:text-foreground transition-colors duration-200">Refund Policy</Link></li>
            <li>
              <a href="mailto:info@bitaptech.com" className="hover:text-foreground transition-colors duration-200">
                info@bitaptech.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-border/40 relative z-10 text-xs text-muted-foreground py-4">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <p>© {new Date().getFullYear()} BitapTech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
