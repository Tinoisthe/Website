import type { Metadata } from "next";
import type { Plan } from "@/content/plans";

export const SITE = "https://neonnextgeneration.com";
const BRAND = "Neon Next Generation";

const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: "Neon Next Generation — Next-gen hosting infrastructure" };

/** Per-page metadata. A page's openGraph/twitter replace the root's, so the share image is repeated here. */
export function pageMeta(
  title: string,
  description: string,
  path: string,
  type: "website" | "article" = "website",
  keywords?: string[],
): Metadata {
  const full = `${title} · ${BRAND}`;
  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: path },
    openGraph: { type, title: full, description, url: path, siteName: BRAND, locale: "en_AU", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title: full, description, images: [OG_IMAGE.url] },
  };
}

// ── JSON-LD builders (schema.org). Rendered with <JsonLd />. ──

/** Strips the FAQ inline markup (**bold**, [label](href)) to plain text. */
export function plainText(s: string) {
  return s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE}${t.path === "/" ? "" : t.path}`,
    })),
  };
}

export function faqLd(items: { q: string; a: string[]; steps?: string[]; after?: string[] }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: [...it.a, ...(it.steps ?? []).map((s, i) => `${i + 1}. ${s}`), ...(it.after ?? [])].map(plainText).join(" "),
      },
    })),
  };
}

/** One Product per plan, each with its AUD offer and live stock status. */
export function planListLd(name: string, path: string, plans: Plan[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: `${SITE}${path}`,
    itemListElement: plans.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `${p.name} ${p.line === "web" ? "web hosting" : p.line.toUpperCase()}${p.billing === "year" ? " (annual)" : ""}`,
        description: `${p.tagline}. ${p.features.join(", ")}.`,
        brand: { "@type": "Brand", name: BRAND },
        category: name,
        offers: {
          "@type": "Offer",
          url: p.href,
          price: p.priceAud.toFixed(2),
          priceCurrency: "AUD",
          availability: p.status === "out-of-stock" ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
          seller: { "@type": "Organization", name: `${BRAND} PTY LTD` },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: p.priceAud.toFixed(2),
            priceCurrency: "AUD",
            unitCode: p.billing === "year" ? "ANN" : "MON",
            // "Starts at" plans: the listed price is the entry price.
            ...(p.startsAt && { minPrice: p.priceAud.toFixed(2) }),
          },
        },
      },
    })),
  };
}
