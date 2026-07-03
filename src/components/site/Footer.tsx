import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-4 relative z-10">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo-horizontal.jpg"
              alt="BitapTech Logo"
              width={140}
              height={32}
              className="h-8 w-auto rounded-lg mix-blend-multiply dark:invert dark:mix-blend-screen"
            />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Building the Future with AI. We craft high-performance SaaS products and intelligent business automation platforms for modern enterprises.
          </p>
          <div className="flex items-center gap-3.5 mt-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="h-10 w-10 grid place-items-center rounded-xl border border-border/60 bg-secondary/20 dark:bg-white/5 hover:bg-accent hover:border-primary/45 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="h-10 w-10 grid place-items-center rounded-xl border border-border/60 bg-secondary/20 dark:bg-white/5 hover:bg-accent hover:border-primary/45 hover:text-primary transition-all duration-300"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4 tracking-tight">Quick Links</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground transition-colors duration-200">Home</Link></li>
            <li><Link href="/products" className="hover:text-foreground transition-colors duration-200">Products</Link></li>
            <li><Link href="/about" className="hover:text-foreground transition-colors duration-200">About</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4 tracking-tight">Legal & Support</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="/privacy" className="hover:text-foreground transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-foreground transition-colors duration-200">Terms of Service</Link></li>
            <li>
              <a href="mailto:info@bitaptech.com" className="hover:text-foreground transition-colors duration-200">
                info@bitaptech.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-border/40 bg-secondary/10 dark:bg-white/5 relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} BitapTech. All Rights Reserved.</div>
          <div className="flex items-center gap-1.5 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            MSME Registered Software Company
          </div>
        </div>
      </div>
    </footer>
  );
}
