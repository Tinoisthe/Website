import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/vps", priority: 0.9, changeFrequency: "weekly" },
    { path: "/web-hosting", priority: 0.9, changeFrequency: "weekly" },
    { path: "/containers", priority: 0.8, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/roadmap", priority: 0.6, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    // Legal pages are noindex, as on the old site, so they stay out of the sitemap.
  ];
  return pages.map((p) => ({ url: `${SITE}${p.path}`, changeFrequency: p.changeFrequency, priority: p.priority }));
}
