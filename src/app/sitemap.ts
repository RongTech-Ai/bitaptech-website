import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const routes = [
    "",
    "/products",
    "/pricing",
    "/services",
    "/about",
    "/contact",
    "/book-demo",
    "/privacy",
    "/terms",
    "/refund",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/products" || route === "/services" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1.0
        : route === "/products" || route === "/services" || route === "/book-demo"
          ? 0.9
          : 0.7,
  }));
}
