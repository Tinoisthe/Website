import Link from "next/link";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import type { Landing } from "@/content/landing";
import { landings } from "@/content/landing";
import { lines } from "@/content/plans";
import { breadcrumbLd, faqLd, planListLd } from "@/lib/seo";
import { JsonLd } from "./json-ld";
import { PageHero } from "./page-hero";
import { PlanCard } from "./plan-card";
import { RichText } from "./rich-text";
import { SectionHeading } from "./section-heading";

// Keyword landing page for one product line: hero, every plan server-rendered,
// a plain-language explainer, what's included, use cases, FAQ, and links to
// the other lines.
export function LandingPage({ data }: { data: Landing }) {
  const others = landings.filter((l) => l.line !== data.line);
  const allPlans = [...data.plans, ...(data.extraPlans?.plans ?? [])];

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: data.name, path: data.path }])} />
      <JsonLd data={planListLd(lines[data.line].label, data.path, allPlans)} />
      <JsonLd data={faqLd(data.faq)} />

      <PageHero lead={data.h1.lead} accent={data.h1.accent} lede={data.lede}>
        <nav aria-label="Breadcrumb" className="mt-8 text-[13px] text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-fg">Home</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-fg-2">{data.name}</li>
          </ol>
        </nav>
      </PageHero>

      <section aria-labelledby="plans-h" className="wash-pricing">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <h2 id="plans-h" className="text-center text-[26px] font-bold tracking-tight">
            {lines[data.line].label} plans
          </h2>
          <p className="mt-2 text-center text-[13px] text-muted">Prices in AUD. Pay in 13 currencies at checkout.</p>
          <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {data.plans.map((p) => <PlanCard key={p.id} plan={p} />)}
          </div>
          {data.extraPlans && (
            <>
              <h2 className="mt-20 text-center text-[26px] font-bold tracking-tight">{data.extraPlans.heading}</h2>
              <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
                {data.extraPlans.plans.map((p) => <PlanCard key={p.id} plan={p} />)}
              </div>
            </>
          )}
        </div>
      </section>

      <section aria-labelledby="intro-h" className="wash-infra">
        <div aria-hidden className="divider" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <SectionHeading id="intro-h" align="left" lead={data.intro.heading.lead} accent={data.intro.heading.accent} />
          <div className="space-y-4 text-[17px] leading-relaxed text-fg-2">
            {data.intro.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {data.included.map((f) => (
              <li key={f.title} className="bg-surface p-7">
                <Check aria-hidden className="size-5 text-green" strokeWidth={2.5} />
                <h3 className="mt-4 text-[17px] font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{f.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <h3 className="text-[15px] font-semibold text-fg">Popular uses</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {data.useCases.map((u) => (
                <li key={u} className="rounded-full border border-border bg-raised px-3.5 py-1.5 text-[13px] text-fg-2">{u}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-h" className="wash-community">
        <div aria-hidden className="divider" />
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
          <SectionHeading id="faq-h" lead={data.name} accent="questions" />
          <div className="mt-12 space-y-3">
            {data.faq.map((it) => (
              <details key={it.q} className="card group !rounded-2xl">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-[16px] font-semibold [&::-webkit-details-marker]:hidden">
                  <h3>{it.q}</h3>
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
                </div>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-[14px] text-muted">
            More answers in the <Link href="/faq" className="text-violet-glow hover:text-fg">full FAQ</Link>.
          </p>
        </div>
      </section>

      <section aria-labelledby="more-h" className="wash-contact">
        <div aria-hidden className="divider" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 id="more-h" className="text-[22px] font-bold tracking-tight">More hosting from Neon Next Generation</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <li key={o.path}>
                <Link href={o.path} className="card card-hover group flex h-full flex-col p-6">
                  <span className="text-[17px] font-semibold">{lines[o.line].label}</span>
                  <span className="mt-1.5 flex-1 text-[14px] leading-relaxed text-muted">{lines[o.line].blurb}</span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-violet-glow">
                    {o.h1.accent.replace(/^from /, "From ")} <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/pricing" className="card card-hover group flex h-full flex-col p-6">
                <span className="text-[17px] font-semibold">Compare every plan</span>
                <span className="mt-1.5 flex-1 text-[14px] leading-relaxed text-muted">VPS, containers and web hosting side by side.</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-violet-glow">
                  See pricing <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
