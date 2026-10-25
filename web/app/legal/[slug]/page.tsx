import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { company, legalDocs } from "@/content/site";
import terms from "@/content/legal/terms.json";
import privacy from "@/content/legal/privacy.json";
import fairUse from "@/content/legal/fair-use.json";
import dmca from "@/content/legal/dmca.json";
import sla from "@/content/legal/sla.json";
import refunds from "@/content/legal/refunds.json";

type Block =
  | { type: "p"; html: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; rows: string[][] }
  | { type: "note"; title: string; blocks: Block[] };

interface LegalDoc {
  slug: string;
  title: string;
  volume: string;
  intro: string;
  /** Cross-references to the other policies, with links. */
  preface: string;
  version: string | null;
  effective: string | null;
  sections: { id: string; title: string; blocks: Block[] }[];
}

const docs: Record<string, LegalDoc> = {
  terms, privacy, "fair-use": fairUse, dmca, sla, refunds,
} as unknown as Record<string, LegalDoc>;

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = docs[slug];
  if (!doc) return {};
  // The old site kept policy pages out of search results; keep that.
  return { ...pageMeta(doc.title, doc.intro, `/legal/${slug}`, "article"), robots: { index: false, follow: true } };
}

// Legal copy is first-party static content migrated from the old site.
function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />;
          case "h3":
            return <h3 key={i} className="pt-2 text-[17px] font-semibold text-fg">{b.text}</h3>;
          case "list":
            return (
              <ul key={i} className="space-y-2">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3">
                    <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-violet-glow" />
                    <span dangerouslySetInnerHTML={{ __html: it }} />
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-left text-[15px]">
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-b border-border last:border-0">
                        {r.map((c, k) => (
                          <td key={k} className={`px-4 py-3 align-top ${k === 0 ? "w-1/3 bg-raised font-semibold text-fg" : ""}`}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "note":
            return (
              <div key={i} className="card !rounded-2xl p-5">
                <p className="mb-2 text-[14px] font-semibold text-violet-glow">{b.title}</p>
                <div className="space-y-3"><Blocks blocks={b.blocks} /></div>
              </div>
            );
        }
      })}
    </>
  );
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = docs[slug];
  if (!doc) notFound();

  return (
    <>
      <section className="wash-page relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-14 sm:px-6 lg:px-8 lg:pt-24">
          <nav aria-label="Legal documents" className="mb-10 flex flex-wrap gap-2">
            {legalDocs.map((d) => (
              <Link
                key={d.slug}
                href={`/legal/${d.slug}`}
                aria-current={d.slug === slug ? "page" : undefined}
                className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                  d.slug === slug ? "bg-[linear-gradient(135deg,#7b2ff2,#9b5de5)] text-white" : "border border-border text-fg-2 hover:border-border-strong hover:text-fg"
                }`}
              >
                {d.label}
              </Link>
            ))}
          </nav>
          <h1 className="h-display max-w-4xl text-[clamp(2.5rem,5.5vw,4.25rem)]">{doc.title}</h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-fg-2">{doc.intro}</p>
          <p
            className="prose-nng mt-4 max-w-3xl border-l border-border-strong pl-5 text-[15px]"
            dangerouslySetInnerHTML={{ __html: doc.preface }}
          />
          <p className="tnum mt-6 inline-flex flex-wrap gap-x-1 rounded-full border border-border bg-raised/60 px-4 py-1.5 text-[13px] text-muted">
            {doc.version && <>Version {doc.version} · </>}
            {doc.effective && <>Effective {doc.effective} · </>}
            ABN {company.abn}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
        <nav aria-label="On this page" className="lg:col-span-3">
          <div className="card p-4 lg:sticky lg:top-32 lg:max-h-[calc(100dvh-10rem)] lg:overflow-y-auto">
            <p className="px-2 text-[13px] font-semibold text-fg">On this page</p>
            <ol className="mt-2">
              {doc.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex gap-3 rounded-lg px-2 py-1.5 text-[13px] text-fg-2 hover:bg-violet/10 hover:text-fg">
                    <span className="tnum w-5 shrink-0 text-muted">{i + 1}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="prose-nng min-w-0 text-[15.5px] lg:col-span-8 lg:col-start-5">
          {doc.sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-32 border-t border-border py-10 first:border-0 first:pt-0">
              <h2 className="flex items-center gap-3 text-fg">
                <span className="tnum flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet/15 text-[13px] font-bold text-violet-glow">{i + 1}</span>
                <span className="text-[clamp(1.25rem,2.2vw,1.6rem)] font-bold tracking-tight">{s.title}</span>
              </h2>
              <div className="mt-5 max-w-[70ch] space-y-4"><Blocks blocks={s.blocks} /></div>
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
