import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BitapTech — AI & SaaS Products",
    short_name: "BitapTech",
    description:
      "BitapTech builds AI-powered SaaS products, automation platforms and custom software for modern businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/assets/logo-square.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
