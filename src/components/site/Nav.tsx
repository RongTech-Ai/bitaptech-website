"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";

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
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

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
            <Image
              src="/assets/logo-horizontal.jpg"
              alt="BitapTech Logo"
              width={160}
              height={36}
              priority
              className="h-9 w-auto rounded-lg mix-blend-multiply dark:invert dark:mix-blend-screen"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1.5 bg-secondary/20 dark:bg-white/5 p-1 rounded-xl border border-border/30">
            {links.map((l) => {
              const active = pathname === l.to;
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
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-10 w-10 grid place-items-center rounded-xl hover:bg-secondary/60 dark:hover:bg-white/5 border border-transparent hover:border-border/30 transition-all duration-300"
            >
              {mounted && (resolvedTheme === "dark" ? <Sun className="h-4.5 w-4.5 text-amber-400" /> : <Moon className="h-4.5 w-4.5 text-slate-700" />)}
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center h-10 px-5 rounded-xl bg-gradient-primary text-white text-sm font-semibold shadow-glow hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Get in touch
            </Link>
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
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-11 px-5 rounded-xl bg-secondary dark:bg-white/5 border border-border/40 text-sm font-semibold hover:bg-secondary/80 transition-all duration-200"
            >
              Get in touch
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
