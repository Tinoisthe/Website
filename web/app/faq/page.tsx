import type { Metadata } from "next";
import { breadcrumbLd, faqLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { ChevronDown, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { RichText } from "@/components/rich-text";
import { faq } from "@/content/faq";
import { links } from "@/content/site";

export const metadata: Metadata = pageMeta("Hosting FAQ", "Answers about VPS and web hosting plans, website migration, security, payments, support and our upcoming VPN.", "/faq");

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "FAQ", path: "/faq" }])} />
      <JsonLd data={faqLd(faq.flatMap((g) => g.items))} />
      <PageHero lead="Common" accent="questions" lede="Hosting, billing, support and the VPN that's on the way." />

      <div className="wash-pricing">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <nav aria-label="FAQ sections" className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <ul className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1">
                {faq.map((g) => (
                  <li key={g.id}>
                    <a href={`#${g.id}`} className="block whitespace-nowrap rounded-full border border-border px-4 py-2 text-[14px] font-medium text-fg-2 hover:border-border-strong hover:text-fg lg:rounded-xl">
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="card mt-6 hidden p-5 lg:block">
                <p className="text-[15px] font-semibold">Still stuck?</p>
                <p className="mt-1 text-[13px] text-muted">The team and community answer on Discord.</p>
                <a href={links.discord} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4 h-10 w-full text-[14px]">
                  <MessageCircle aria-hidden className="size-4" /> Ask on Discord
                </a>
              </div>
            </div>
          </nav>

          <div className="space-y-16 lg:col-span-8 lg:col-start-5">
            {faq.map((g) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-32">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 id={`${g.id}-h`} className="text-[26px] font-bold tracking-tight">{g.title}</h2>
                  {g.note && <span className="rounded-full bg-amber/12 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber">{g.note}</span>}
                </div>
                <div className="mt-6 space-y-3">
                  {g.items.map((it) => (
                    <details key={it.q} className="card group !rounded-2xl">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-[16px] font-semibold [&::-webkit-details-marker]:hidden">
                        {it.q}
                        <ChevronDown aria-hidden className="size-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180 group-open:text-violet-glow" />
                      </summary>
                      <div className="prose-nng space-y-3 border-t border-border px-6 py-5 text-[15px]">
                        {it.a.map((p, i) => <p key={i}><RichText text={p} /></p>)}
                        {it.steps && (
                          <ol className="space-y-2">
                            {it.steps.map((s, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="tnum flex size-6 shrink-0 items-center justify-center rounded-full bg-violet/18 text-[12px] font-bold text-violet-glow">{i + 1}</span>
                                <span><RichText text={s} /></span>
                              </li>
                            ))}
                          </ol>
                        )}
                        {it.after?.map((p, i) => <p key={`a${i}`}><RichText text={p} /></p>)}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
