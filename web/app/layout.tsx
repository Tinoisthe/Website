import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { fromPrice } from "@/content/landing";
import { company, links } from "@/content/site";
import { SITE } from "@/lib/seo";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains" });

const TITLE = "VPS & Web Hosting Australia · Neon Next Generation";
const DESCRIPTION =
  `Buy a VPS from AU$${fromPrice.vps}/mo, container hosting from AU$${fromPrice.vpc} and web hosting with free migration. NVMe storage, up to 10Gbps networking, no lock-in contracts.`;

// Favicons come from the file conventions in app/: favicon.ico, icon.png, apple-icon.png.
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: "%s · Neon Next Generation",
  },
  description: DESCRIPTION,
  applicationName: company.name,
  keywords: [
    "VPS", "buy VPS", "VPS hosting", "VPS Australia", "cheap VPS", "virtual private server", "server hosting",
    "hosting", "web hosting", "WordPress hosting", "container hosting", "bot hosting", "NVMe hosting",
    "Neon Next Generation", "NeonNextGeneration",
  ],
  authors: [{ name: company.legalName, url: SITE }],
  creator: company.legalName,
  publisher: company.legalName,
  category: "technology",
  // No site-wide canonical: it would leak to pages without their own (e.g. 404).
  // The home page sets "/" itself; every other page sets its own via pageMeta.
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE,
    siteName: company.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Neon Next Generation — Next-gen hosting infrastructure" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
  other: { "discord:invite": links.discord },
};

export const viewport: Viewport = {
  themeColor: "#050208",
  colorScheme: "dark",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: "NeonNextGeneration",
  url: SITE,
  logo: `${SITE}/brand/icon-512.png`,
  foundingDate: String(company.founded),
  taxID: `ABN ${company.abn}`,
  email: "contact@neonnextgeneration.com",
  address: { "@type": "PostalAddress", addressCountry: "AU" },
  sameAs: [links.discord, links.github, links.tiktok, links.trustpilot],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.name,
  alternateName: ["NeonNextGeneration", "NNG"],
  url: SITE,
  inLanguage: "en-AU",
  publisher: { "@type": "Organization", name: company.legalName },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh">
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-violet focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
