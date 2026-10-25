"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Globe, Server } from "lucide-react";
import { vpcPlans, vpsPlans, webAnnualPlans, webMonthlyPlans, type ProductLine } from "@/content/plans";
import { PlanCard } from "./plan-card";

const TABS: { id: ProductLine; label: string; icon: typeof Server }[] = [
  { id: "vps", label: "VPS", icon: Server },
  { id: "vpc", label: "Containers", icon: Box },
  { id: "web", label: "Web hosting", icon: Globe },
];

/** PlanBoard opened on the tab named by `?line=`. Render inside <Suspense> so the page stays static. */
export function UrlPlanBoard() {
  const line = useSearchParams().get("line");
  const initial: ProductLine = line === "vpc" || line === "web" ? line : "vps";
  return <PlanBoard key={initial} initialLine={initial} />;
}

export function PlanBoard({ initialLine = "vps", limit }: { initialLine?: ProductLine; limit?: number }) {
  const [line, setLine] = useState<ProductLine>(initialLine);
  const [annual, setAnnual] = useState(false);

  const plans = line === "vps" ? vpsPlans : line === "vpc" ? vpcPlans : annual ? webAnnualPlans : webMonthlyPlans;
  const shown = limit ? plans.slice(0, limit) : plans;

  function onKey(e: React.KeyboardEvent<HTMLButtonElement>, i: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = TABS[(i + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length].id;
    setLine(next);
    document.getElementById(`tab-${next}`)?.focus();
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div role="tablist" aria-label="Product" className="inline-flex rounded-full border border-border bg-surface/80 p-1.5">
          {TABS.map((t, i) => {
            const active = t.id === line;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                role="tab"
                type="button"
                aria-selected={active}
                aria-controls="plan-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => setLine(t.id)}
                onKeyDown={(e) => onKey(e, i)}
                className={`inline-flex h-10 items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-[13px] font-semibold transition-all sm:gap-2 sm:px-5 sm:text-[14px] ${
                  active ? "bg-[linear-gradient(135deg,#7b2ff2,#9b5de5)] text-white shadow-[0_8px_24px_-10px_rgb(123_47_242/0.9)]" : "text-fg-2 hover:text-fg"
                }`}
              >
                <Icon aria-hidden className="size-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {line === "web" && (
          <div role="group" aria-label="Billing period" className="inline-flex items-center gap-1 rounded-full border border-border p-1">
            {[
              { v: false, label: "Monthly" },
              { v: true, label: "Yearly · save up to 17%" },
            ].map((o) => (
              <button
                key={o.label}
                type="button"
                aria-pressed={annual === o.v}
                onClick={() => setAnnual(o.v)}
                className={`h-8 rounded-full px-3.5 text-[13px] font-medium transition-colors ${
                  annual === o.v ? "bg-raised-2 text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        )}

        <p className="text-[13px] text-muted">Prices in AUD. Pay in 13 currencies at checkout.</p>
      </div>

      <div
        key={`${line}-${annual}`}
        id="plan-panel"
        role="tabpanel"
        aria-labelledby={`tab-${line}`}
        className="swap mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3"
      >
        {shown.map((p) => (
          <PlanCard key={p.id} plan={p} />
        ))}
      </div>
    </div>
  );
}
