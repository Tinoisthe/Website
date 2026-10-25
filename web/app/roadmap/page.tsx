import type { Metadata } from "next";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Check, CircleDashed, Loader } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { roadmap, type RoadmapStatus } from "@/content/site";

export const metadata: Metadata = pageMeta("Roadmap", "What we've shipped, what we're building now, and what's coming next.", "/roadmap");

const statusStyle: Record<RoadmapStatus, { label: string; pill: string; dot: string; icon: typeof Check }> = {
  completed: { label: "Completed", pill: "bg-green/12 text-green", dot: "bg-green text-bg", icon: Check },
  "in-progress": { label: "In progress", pill: "bg-violet/18 text-violet-glow", dot: "bg-violet text-white", icon: Loader },
  planned: { label: "Planned", pill: "bg-amber/12 text-amber", dot: "bg-raised-2 text-amber border border-amber/40", icon: CircleDashed },
};

export default function RoadmapPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Roadmap", path: "/roadmap" }])} />
      <PageHero
        lead="Our path"
        accent="forward"
        lede="Transparency in development. Here's what we've shipped, what we're building now, and what's coming next."
      >
        <ul className="mt-8 flex flex-wrap gap-2">
          {roadmap.map((g) => (
            <li key={g.group}>
              <a href={`#${g.status}`} className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold ${statusStyle[g.status].pill}`}>
                {g.group} <span className="tnum opacity-70">{g.items.length}</span>
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <div className="wash-pricing">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
          {roadmap.map((group) => {
            const st = statusStyle[group.status];
            const Icon = st.icon;
            return (
              <section key={group.group} id={group.status} aria-labelledby={`h-${group.status}`} className="scroll-mt-32 pb-16 last:pb-0">
                <h2 id={`h-${group.status}`} className="h-display text-[clamp(1.75rem,3.4vw,2.5rem)]">{group.group}</h2>
                <ol className="relative mt-8 space-y-5 border-l border-border pl-8">
                  {group.items.map((item) => (
                    <li key={item.title} className="relative">
                      <span aria-hidden className={`absolute top-6 -left-[45px] flex size-7 items-center justify-center rounded-full ${st.dot}`}>
                        <Icon className="size-3.5" strokeWidth={3} />
                      </span>
                      <article className="card p-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h3 className="text-[18px] font-semibold">{item.title}</h3>
                          <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${st.pill}`}>{st.label}</span>
                        </div>
                        <p className="mt-2 text-[15px] leading-relaxed text-fg-2">{item.body}</p>
                        <ul className="mt-4 space-y-1.5">
                          {item.points.map((p) => (
                            <li key={p} className="flex gap-2.5 text-[14px] text-muted">
                              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-glow" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </li>
                  ))}
                </ol>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
