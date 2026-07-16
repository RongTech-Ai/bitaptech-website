import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-4 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 pt-6 pb-4 grid gap-8 grid-cols-2 md:grid-cols-5 relative z-10">
        <div className="col-span-2 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
              src="/assets/logo-horizontal.png"
              alt="BitapTech Logo"
              width={220}
              height={96}
              className="h-14 sm:h-16 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Building the Future of Conversations. We craft high-performance SaaS messaging platforms
            and enterprise integrations for modern businesses.
          </p>
        </div>

        <div className="col-span-1">
          <div className="text-sm font-semibold mb-4 tracking-tight">Our Products</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href="https://wpai.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors duration-200"
              >
                WpAI Cloud API (Official)
              </a>
            </li>
            <li>
              <a
                href="https://inst.wpai.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors duration-200"
              >
                WpAI Web Session Connect
              </a>
            </li>
            <li>
              <Link
                href="/products#omnichannel"
                className="hover:text-foreground transition-colors duration-200"
              >
                Omnichannel Suite (Beta)
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-foreground transition-colors duration-200"
              >
                Bespoke Engineering
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <div className="text-sm font-semibold mb-4 tracking-tight">Legal & Support</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link
                href="/pricing"
                className="hover:text-foreground transition-colors duration-200"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-foreground transition-colors duration-200">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/refund" className="hover:text-foreground transition-colors duration-200">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <div className="text-sm font-semibold mb-4 tracking-tight">Contact Us</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>Email Us</span>
              </a>
            </li>
            <li>
              <a
                href={SITE.sameAs[0]}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4 shrink-0" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href={SITE.sameAs[1]}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
              >
                <Instagram className="h-4 w-4 shrink-0" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href={SITE.sameAs[2]}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
              >
                <Facebook className="h-4 w-4 shrink-0" />
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40 relative z-10 text-xs text-muted-foreground py-3">
        <div className="mx-auto max-w-6xl px-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} BitapTech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
