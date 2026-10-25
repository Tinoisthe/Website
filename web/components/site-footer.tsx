import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { company, legalDocs, links } from "@/content/site";

const columns = [
  {
    title: "Products",
    items: [
      { label: "VPS hosting", href: "/vps" },
      { label: "Container hosting", href: "/containers" },
      { label: "Web hosting", href: "/web-hosting" },
      { label: "Pricing", href: "/pricing" },
      { label: "Billing portal", href: links.billing },
      { label: "Hosting panel", href: links.panel },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", href: links.docs },
      { label: "About us", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Open source", href: links.github },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: legalDocs.map((d) => ({ label: d.label, href: `/legal/${d.slug}` })),
  },
  {
    title: "Community",
    items: [
      { label: "Discord", href: links.discord },
      { label: "GitHub", href: links.github },
      { label: "TikTok", href: links.tiktok },
      { label: "Partner: BytArch", href: links.bytarch },
    ],
  },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = "text-[14px] text-muted transition-colors hover:text-fg";
  return href.startsWith("http") ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div aria-hidden className="divider absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-10 sm:px-6 lg:grid-cols-[1.1fr_2fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/brand/logo.png" alt="" width={44} height={44} className="size-11" />
            <span className="text-lg font-bold tracking-tight">Neon Next Generation</span>
          </Link>
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted">
            Next-generation hosting from Australia. Digital-first: reach us by email or on Discord.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={links.trustpilot} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-raised px-3.5 py-2 text-[13px] font-medium text-fg-2 hover:border-border-strong hover:text-fg">
              <Star aria-hidden className="size-3.5 fill-green text-green" /> Review us on Trustpilot
            </a>
            <a href={links.hostingArtisan} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-border bg-raised px-3.5 py-2 text-[13px] font-medium text-fg-2 hover:border-border-strong hover:text-fg">
              Listed on HostingArtisan
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-[13px] font-semibold text-fg">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((it) => (
                  <li key={it.label}><FooterLink href={it.href}>{it.label}</FooterLink></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-[13px] text-muted sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p className="tnum">ABN {company.abn}</p>
        </div>
      </div>
    </footer>
  );
}
