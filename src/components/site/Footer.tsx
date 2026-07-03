import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-primary text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            BitapTech
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Building the Future with AI. We craft SaaS products and automation platforms
            for modern businesses.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-accent transition"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-accent transition"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Legal</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            <li>
              <a href="mailto:hello@bitaptech.com" className="hover:text-foreground">
                hello@bitaptech.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© 2026 BitapTech. All Rights Reserved.</div>
          <div>MSME Registered Software Company</div>
        </div>
      </div>
    </footer>
  );
}
