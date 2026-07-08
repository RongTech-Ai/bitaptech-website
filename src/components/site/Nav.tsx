"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Cloud, Zap, MessageSquare } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 px-4 sm:px-6 ${
          scrolled
            ? "glass-strong rounded-2xl shadow-md border border-white/10 dark:border-white/5 w-full max-w-[calc(100%-2rem)] md:max-w-6xl"
            : "w-full max-w-6xl"
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-white border border-border/70 shadow-sm rounded-xl flex items-center justify-center h-11 w-44 overflow-hidden relative transition-all duration-300 hover:border-primary/20">
              <Image
                src="/assets/logo-horizontal.jpg"
                alt="BitapTech Logo"
                width={240}
                height={54}
                priority
                className="absolute inset-0 h-full w-full object-contain scale-[1.6] mix-blend-multiply"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1.5 bg-secondary/20 dark:bg-white/5 p-1 rounded-xl border border-border/30">
            {links.map((l) => {
              const active = pathname === l.to;
              if (l.label === "Products") {
                return (
                  <div
                    key={l.to}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                        pathname.startsWith("/products")
                          ? "bg-background text-foreground shadow-sm border border-border/40"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/40 dark:hover:bg-white/5"
                      }`}
                    >
                      Products <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    {/* Hover Dropdown Menu */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-1 w-80 rounded-2xl border border-border/50 bg-card p-3 shadow-lg transition-all duration-200 origin-top z-50 ${
                        dropdownOpen
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <div className="flex flex-col gap-1">
                        <Link
                          href="/products#cloud-api"
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-secondary/60 dark:hover:bg-white/5 transition-colors"
                        >
                          <div className="h-8.5 w-8.5 grid place-items-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                            <Cloud className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-foreground">WpAI Official Cloud API</div>
                            <p className="text-[10px] text-muted-foreground mt-0.5">Meta-powered WhatsApp Business Solutions</p>
                          </div>
                        </Link>
                        
                        <Link
                          href="/products#web-session"
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-secondary/60 dark:hover:bg-white/5 transition-colors"
                        >
                          <div className="h-8.5 w-8.5 grid place-items-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                            <Zap className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-foreground">WpAI Web Session Connect</div>
                            <p className="text-[10px] text-muted-foreground mt-0.5">Scan-to-connect WhatsApp Web Integration</p>
                          </div>
                        </Link>
                        
                        <Link
                          href="/products#omnichannel"
                          className="flex items-start gap-3 p-2 rounded-xl hover:bg-secondary/60 dark:hover:bg-white/5 transition-colors"
                        >
                          <div className="h-8.5 w-8.5 grid place-items-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                            <MessageSquare className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
                              Omnichannel Suite <span className="text-[8px] bg-amber-500/15 text-amber-600 px-1.5 py-0.5 rounded-full font-bold uppercase">Beta</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-0.5">RCS, Bulk SMS, and smart fallbacks</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    active
                      ? "bg-background text-foreground shadow-sm border border-border/40"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/40 dark:hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="mailto:info@bitaptech.com?subject=Book%20a%20Demo%20-%20BitapTech&body=Hi%20BitapTech%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20custom%20demonstration%20of%20the%20platform%20for%20my%20business.%0A%0AName%3A%0ACompany%3A%0APhone%20Number%3A%0ANotes%3A"
              className="hidden md:inline-flex items-center h-10 px-5 rounded-xl bg-gradient-primary text-white text-sm font-semibold shadow-glow hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Book a Demo
            </a>
            <button
              className="md:hidden h-10 w-10 grid place-items-center rounded-xl hover:bg-secondary/60 dark:hover:bg-white/5 border border-transparent hover:border-border/30 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-5 pt-3 flex flex-col gap-1 border-t border-border/20 mt-2 animate-fade-in">
            {links.map((l) => {
              const active = pathname === l.to;
              if (l.label === "Products") {
                return (
                  <div key={l.to} className="flex flex-col">
                    <button
                      onClick={() => setMobileProductsOpen(v => !v)}
                      className={`px-4 py-2.5 text-sm font-medium rounded-xl flex items-center justify-between transition-all duration-300 ${
                        pathname.startsWith("/products")
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/40 dark:hover:bg-white/5"
                      }`}
                    >
                      <span>Products</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileProductsOpen && (
                      <div className="pl-6 flex flex-col gap-1.5 mt-1 border-l border-border/40 ml-4 py-1">
                        <Link
                          href="/products#cloud-api"
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
                        >
                          <Cloud className="h-4 w-4 text-indigo-500" /> WpAI Cloud API (Official Meta)
                        </Link>
                        <Link
                          href="/products#web-session"
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
                        >
                          <Zap className="h-4 w-4 text-emerald-500" /> WpAI Web Connect (Session-based)
                        </Link>
                        <Link
                          href="/products#omnichannel"
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
                        >
                          <MessageSquare className="h-4 w-4 text-amber-500" /> Omnichannel Suite (Beta)
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                    active
                      ? "bg-gradient-primary text-white shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/40 dark:hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <a
              href="mailto:info@bitaptech.com?subject=Book%20a%20Demo%20-%20BitapTech&body=Hi%20BitapTech%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20custom%20demonstration%20of%20the%20platform%20for%20my%20business.%0A%0AName%3A%0ACompany%3A%0APhone%20Number%3A%0ANotes%3A"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-11 px-5 rounded-xl bg-secondary dark:bg-white/5 border border-border/40 text-sm font-semibold hover:bg-secondary/80 transition-all duration-200"
            >
              Book a Demo
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
