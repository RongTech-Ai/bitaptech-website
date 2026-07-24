# SEO execution checklist — bitaptech_website

See `../ecosystem-seo-growth-architecture.md` for the cross-product strategy this fits into.

## Done (Phase 1, this pass)

- Added `alternates.canonical` to every page's own metadata (`about`, `contact`, `pricing`, `products`, `services`, `privacy`, `terms`, `refund`) — previously all inherited the root layout's `canonical: "/"`, so every page was telling Google it was a duplicate of the homepage.
- Added `src/app/book-demo/layout.tsx` with its own title/description/canonical/OG — `book-demo/page.tsx` is `'use client'` so it can't export metadata itself; this is the same server-layout-around-client-page pattern already proven on `/docs` elsewhere in this ecosystem.
- Added `/book-demo` to `sitemap.ts` — it was linked from every page's nav/footer but missing from the sitemap entirely.
- Added page-specific `openGraph`/`twitter` blocks to `about`, `contact`, `pricing`, `products`, `services`, `book-demo` — previously every page shared the homepage's OG/Twitter title, description, and URL, so sharing e.g. `/pricing` on LinkedIn showed the homepage's card.
- Regenerated `public/favicon.ico` (was a 227KB PNG mislabeled `.ico` — now a real multi-resolution 943-byte `.ico`), `src/app/icon.png` (646×646/227KB → 512×512/optimized), and added `src/app/apple-icon.tsx` equivalent `src/app/apple-icon.png` (180×180) which didn't exist before.
- Added `public/icons/icon-192.png` + `icon-512.png` and pointed `manifest.ts` at them instead of the raw 227KB `logo-square.png`.
- Added `/about` and `/contact` links to the footer's "Legal & Support" column — previously only reachable via top nav, now also linked from every page's footer.

## Still open (not done in this pass — lower severity or needs your input)

- **Medium**: no page-specific structured data. `/pricing` is a good `Product`/`Offer` schema candidate; `/about`/`/contact` are good `BreadcrumbList` candidates. Deferred to the shared schema-utility pass across all 4 repos (tracked in the ecosystem doc §4/§8).
- **Low**: unused/orphaned images in `public/assets/` — `hero-ai.png` (400KB), `hero-dashboard.png` (363KB), `wpai-dashboard.jpg` (184KB), plus duplicate `.jpg`/`.svg` variants of both logos. Not deleted here since I can't be 100% certain they're not reserved for planned content — confirm and delete manually, or tell me to remove them.
- **Low**: `privacy`/`terms`/`refund` didn't get page-specific OG/Twitter (only canonical) — legal pages are rarely shared socially, deprioritized. Trivial to add if you want full parity.
- **Low**: dead `src/lib/error-page.ts` string helper with a stray unused `<h1>` — appears unreferenced anywhere; confirm before deleting.
- **Non-standard**: `robots.txt`'s `Host:` directive is Yandex-only (ignored by Google/Bing) — harmless, left as-is.
- Organization JSON-LD `@id` here (`https://bitaptech.com/#organization`) is the intended cross-site root per the ecosystem architecture — other products' Organization schema should reference this `@id` as `publisher` instead of declaring themselves as the Organization. Done in the cross-repo schema pass, not here.
