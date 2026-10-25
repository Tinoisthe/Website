import type { NextConfig } from "next";

// Keep old PHP URLs working after the move.
const legacy: Record<string, string> = {
  "/about.php": "/about",
  "/pricing.php": "/pricing",
  "/roadmap.php": "/roadmap",
  "/contact.php": "/contact",
  "/faq.php": "/faq",
  "/terms.php": "/legal/terms",
  "/privacy.php": "/legal/privacy",
  "/fairusepolicy.php": "/legal/fair-use",
  "/dmca.php": "/legal/dmca",
  "/sla.php": "/legal/sla",
  "/refunds.php": "/legal/refunds",
  "/index.php": "/",
  // Leftover template pages on the old host; send them to the real About page.
  "/about-us.php": "/about",
  "/why-us.php": "/about",
};

const nextConfig: NextConfig = {
  // Lets a verification build run beside `next dev` without sharing .next.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return Object.entries(legacy).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
