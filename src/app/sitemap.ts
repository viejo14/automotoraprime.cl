import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteConfig.url}/automotora-prime-hero.webp`],
    },
  ];
}
