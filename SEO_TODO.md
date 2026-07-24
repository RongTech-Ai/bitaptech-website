# SEO execution checklist — bitaptech_website

See `../ecosystem-seo-growth-architecture.md` for the cross-product strategy this fits into.

## Done (Phase 1 & Phase 2)

- Added `alternates.canonical` to every page's own metadata (`about`, `contact`, `pricing`, `products`, `services`, `privacy`, `terms`, `refund`) — previously all inherited the root layout's `canonical: "/"`, so every page was telling Google it was a duplicate of the homepage.
- Added `src/app/book-demo/layout.tsx` with its own title/description/canonical/OG — `book-demo/page.tsx` is `'use client'` so it can't export metadata itself; this is the same server-layout-around-client-page pattern already proven on `/docs` elsewhere in this ecosystem.
- Added `/book-demo` to `sitemap.ts` — it was linked from every page's nav/footer but missing from the sitemap entirely.
- Added page-specific `openGraph`/`twitter` blocks to `about`, `contact`, `pricing`, `products`, `services`, `book-demo`, `privacy`, `terms`, `refund`.
- Added page-specific JSON-LD structured data (`OfferCatalog`, `Product`, `Offer`) to `/pricing`, and `BreadcrumbList` & `AboutPage`/`ContactPage` schema to `/about` and `/contact`.
- Regenerated `public/favicon.ico` (was a 227KB PNG mislabeled `.ico` — now a real multi-resolution 943-byte `.ico`), `src/app/icon.png` (646×646/227KB → 512×512/optimized), and added `src/app/apple-icon.png` (180×180).
- Added `public/icons/icon-192.png` + `icon-512.png` and pointed `manifest.ts` at them instead of the raw 227KB `logo-square.png`.
- Added `/about` and `/contact` links to the footer's "Legal & Support" column.
- Removed dead unreferenced `src/lib/error-page.ts` helper file.

## Still open (lower severity or optional)

- **Low**: unused/orphaned images in `public/assets/` — `hero-ai.png` (400KB), `hero-dashboard.png` (363KB), `wpai-dashboard.jpg` (184KB), plus duplicate `.jpg`/`.svg` variants of both logos. Reserved for potential future landing page content — keep or delete manually.
- **Non-standard**: `robots.txt`'s `Host:` directive is Yandex-only (ignored by Google/Bing) — harmless, left as-is.
- Organization JSON-LD `@id` here (`https://bitaptech.com/#organization`) is the intended cross-site root per the ecosystem architecture — other products' Organization schema should reference this `@id` as `publisher` instead of declaring themselves as the Organization.

