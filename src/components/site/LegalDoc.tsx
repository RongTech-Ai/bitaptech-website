import Link from "next/link";

// Company details used across legal pages.
export const COMPANY = {
  name: "BitapTech",
  product: "WpAi",
  site: "https://bitaptech.com",
  email: "info@bitaptech.com",
  jurisdiction: "India",
};

export type LegalBlock = string | { list: string[] };
export type LegalSection = { heading: string; body: LegalBlock[] };

export function LegalDoc({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="relative overflow-hidden w-full bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <article className="mx-auto max-w-3xl px-6 py-12 relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight font-display text-foreground">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-medium">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed text-sm sm:text-base">
          <p>{intro}</p>

          {sections.map((section, i) => (
            <div key={i} className="border-t border-border/40 pt-6">
              <h2 className="text-xl font-bold text-foreground font-display">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((block, j) =>
                  typeof block === "string" ? (
                    <p key={j}>{block}</p>
                  ) : (
                    <ul key={j} className="list-disc pl-5 space-y-2">
                      {block.list.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            </div>
          ))}

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-xl font-bold text-foreground font-display">Contact</h2>
            <p className="mt-3">
              For any questions about this document, email{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-primary font-semibold hover:underline"
              >
                {COMPANY.email}
              </a>
              . You can also reach us through our{" "}
              <Link href="/contact" className="text-primary font-semibold hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
