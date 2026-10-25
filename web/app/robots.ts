import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://neonnextgeneration.com/sitemap.xml",
    host: "https://neonnextgeneration.com",
  };
}
