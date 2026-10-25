import type { Metadata } from "next";
import { breadcrumbLd, pageMeta, planListLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { Suspense } from "react";
import { CreditCard, Globe2, RefreshCcw, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PlanBoard, UrlPlanBoard } from "@/components/plan-board";
import { SectionHeading } from "@/components/section-heading";
import { fromPrice } from "@/content/landing";
import { vpcPlans, vpsPlans, webAnnualPlans, webMonthlyPlans } from "@/content/plans";
import { links } from "@/content/site";

export const metadata: Metadata = pageMeta(
  "VPS, Container & Web Hosting Pricing",
  `Compare hosting prices: VPS from AU$${fromPrice.vps}/mo, containers from AU$${fromPrice.vpc}/mo and web hosting from AU$${fromPrice.web}/mo. No hidden fees, no lock-in contracts.`,
  "/pricing",
);

const included = [
  { icon: ShieldCheck, t: "No hidden fees", b: "The price you see is the price you pay. Scale up or down any time." },
  { icon: RefreshCcw, t: "No lock-in", b: "Monthly billing. Cancel from the billing portal whenever you like." },
  { icon: Globe2, t: "13 currencies", b: "AUD, USD, EUR, JPY, GBP, CAD, CHF, CNY, HKD, NZD, INR, PHP and BZD." },
  { icon: CreditCard, t: "Stripe & PayPal", b: "All major cards, processed over encrypted connections." },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Pricing", path: "/pricing" }])} />
      <JsonLd data={planListLd("Hosting plans", "/pricing", [...vpsPlans, ...vpcPlans, ...webMonthlyPlans, ...webAnnualPlans])} />
      <PageHero
        lead="Simple, transparent"
        accent="pricing"
        lede="No hidden fees. No lock-in contracts. Scale up or down any time on Australian-based infrastructure."
      />

      <section aria-label="Plans" className="wash-pricing">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <Suspense fallback={<PlanBoard />}>
            <UrlPlanBoard />
          </Suspense>
        </div>
      </section>

      <section aria-labelledby="included-h" className="wash-infra">
        <div aria-hidden className="divider" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading id="included-h" lead="Included with" accent="every plan" />
          <ul className="card mt-12 grid !rounded-3xl sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
            {included.map(({ icon: Icon, t, b }) => (
              <li key={t} className="flex gap-3.5 p-6">
                <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-violet-glow" />
                <div>
                  <p className="text-[15px] font-semibold">{t}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted">{b}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="card mt-10 flex flex-col items-start gap-5 !rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[22px] font-bold tracking-tight">Not sure which plan fits?</p>
              <p className="mt-1 text-[15px] text-muted">Read the FAQ or ask the team on Discord. We&rsquo;ll point you to the right one.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/faq" className="btn btn-ghost">Read the FAQ</Link>
              <a href={links.discord} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ask on Discord</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
