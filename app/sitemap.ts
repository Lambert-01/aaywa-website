import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const routes: Array<[string, number]> = [
    ["", 1],
    ["/about", 0.8],
    ["/our-work", 0.9],
    ["/impact", 0.8],
    ["/stories", 0.8],
    ["/resources", 0.7],
    ["/get-involved", 0.7],
    ["/contact", 0.6],
  ];

  return routes.map(([route, priority]) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}