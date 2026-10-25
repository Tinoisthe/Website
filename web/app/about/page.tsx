import type { Metadata } from "next";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Gauge, HeartHandshake, Infinity as InfinityIcon, MapPin, Radar, Settings2, ShieldCheck, Users, Zap } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { pillars, team, values } from "@/content/site";

export const metadata: Metadata = pageMeta("About Us · Australian Hosting Company", "NeonNextGeneration is an Australian hosting company built by system administrators, developers and hosting professionals.", "/about");

const pillarIcons = [MapPin, Gauge, HeartHandshake];
const valueIcons = [Settings2, ShieldCheck, Zap, Users, InfinityIcon, Radar];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "About", path: "/about" }])} />
      <PageHero
        lead="We are"
        accent={<>NeonNext<wbr />Generation</>}
        lede="Next-generation hosting for businesses, developers and enterprises who refuse to compromise on performance. Based in Australia, with global reach."
      />

      <section aria-labelledby="philosophy-h" className="wash-pricing">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <SectionHeading id="philosophy-h" align="left" lead="An obsession with" accent="absolute performance" />
            <p className="text-[17px] leading-relaxed text-fg-2">
              We combine enterprise-grade hardware with custom-optimised software to eliminate every millisecond of latency. We don&rsquo;t rely on off-the-shelf solutions; we engineer our own stack from the ground up.
            </p>
          </div>
          <ul className="mt-14 grid gap-4 md:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = pillarIcons[i];
              return (
                <li key={p.title} className="card card-hover p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgb(123_47_242/0.35),rgb(52_211_153/0.2))] text-fg">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-5 text-[19px] font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="values-h" className="wash-infra">
        <div aria-hidden className="divider" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading id="values-h" lead="Built on" accent="real principles" />
          <dl className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={v.title} className="bg-surface p-7">
                  <Icon aria-hidden className="size-5 text-green" />
                  <dt className="mt-4 text-[17px] font-semibold">{v.title}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{v.body}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section aria-labelledby="team-h" className="wash-community">
        <div aria-hidden className="divider" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            id="team-h"
            lead="Brains behind"
            accent="the cloud"
            sub="A small team with a big vision. System administrators, developers and hosting professionals building the hosting platform we always wanted."
          />
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {team.map((m) => (
              <li key={m.name} className="card card-hover flex flex-col p-7">
                <div className="flex items-center gap-4">
                  <span aria-hidden className="flex size-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7b2ff2,#9b5de5_55%,#34d399)] text-[20px] font-bold text-white">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="text-[17px] font-semibold">{m.name}</p>
                    <p className="text-[13px] font-medium text-violet-glow">{m.role}</p>
                  </div>
                </div>
                <blockquote className="mt-5 text-[15px] leading-relaxed text-fg-2">&ldquo;{m.quote}&rdquo;</blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
