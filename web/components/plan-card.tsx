import { ArrowRight, Check, Cpu, HardDrive, MemoryStick } from "lucide-react";
import { formatAud, type Plan } from "@/content/plans";

function Spec({ icon: Icon, value, label }: { icon: typeof Cpu; value: string; label: string }) {
  return (
    <div className="rounded-xl bg-bg/60 px-3 py-2.5">
      <Icon aria-hidden className="size-4 text-violet-glow" />
      <p className="tnum mt-1.5 text-[15px] font-semibold leading-tight text-fg">{value}</p>
      <p className="text-[12px] text-muted">{label}</p>
    </div>
  );
}

function specValues(plan: Plan) {
  const { vcpu, ramGb, storageGb } = plan.specs;
  return {
    cpu: vcpu ? `${vcpu} ${vcpu === 1 ? "core" : "cores"}` : "Custom",
    ram: ramGb ? `${ramGb} GB` : vcpu ? "Unmetered" : "Custom",
    disk: storageGb ? `${storageGb} GB` : "Custom",
  };
}

// The strip shows the three headline specs, so the list drops a spec line only
// when the strip says all of it. Lines with clock speed or "(shared)" stay.
const STRIP_SPEC = /^(\d+\s*vCores?|\d+(\.\d+)?\s*GB\s*DDR4(\s*RAM)?|\d+(\.\d+)?\s*GB\s*NVMe(\s*Storage)?)$/i;

export function PlanCard({ plan }: { plan: Plan }) {
  const soldOut = plan.status === "out-of-stock";
  const s = specValues(plan);
  const rest = plan.features.filter((f) => !STRIP_SPEC.test(f));

  return (
    <article
      className={`card card-hover relative flex flex-col p-6 ${plan.popular ? "card-featured" : ""} ${soldOut ? "opacity-80" : ""}`}
    >
      {(plan.popular || plan.badge) && (
        <span
          className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
            plan.popular ? "bg-[linear-gradient(135deg,#7b2ff2,#9b5de5)] text-white" : "border border-green/40 bg-surface text-green"
          }`}
        >
          {plan.popular ? "Most popular" : plan.badge}
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[19px] font-bold tracking-tight">{plan.name}</h3>
        {plan.status && (
          <span
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              soldOut ? "bg-amber/12 text-amber" : "bg-green/12 text-green"
            }`}
          >
            <span aria-hidden className={`size-1.5 rounded-full ${soldOut ? "bg-amber" : "bg-green"}`} />
            {soldOut ? "Out of stock" : "Available"}
          </span>
        )}
      </div>
      <p className="mt-1.5 min-h-[2.75rem] text-[14px] leading-snug text-muted">{plan.tagline}</p>

      <p className="mt-5 flex items-baseline gap-1">
        {plan.startsAt && <span className="mr-1 self-center text-[12px] leading-tight text-muted">Starts<br />at</span>}
        <span className="self-start pt-1.5 text-[14px] font-semibold text-fg-2">AU$</span>
        <span className="tnum text-[44px] font-bold leading-none tracking-tight">{formatAud(plan.priceAud)}</span>
        <span className="text-[14px] text-muted">/{plan.billing}</span>
      </p>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <Spec icon={Cpu} value={s.cpu} label="vCPU" />
        <Spec icon={MemoryStick} value={s.ram} label={plan.specs.ramGb ? "DDR4 RAM" : "RAM"} />
        <Spec icon={HardDrive} value={s.disk} label="NVMe" />
      </div>

      {/* Sold-out plans still link to billing, as on the old site, but never as the primary button. */}
      <a href={plan.href} className={`btn mt-6 w-full ${plan.popular && !soldOut ? "btn-primary" : "btn-ghost"}`}>
        {plan.cta} <ArrowRight aria-hidden className="size-4" />
      </a>

      <div className="mt-6 border-t border-border pt-5">
        {plan.inherits && <p className="mb-3 text-[13px] font-semibold text-fg-2">{plan.inherits}</p>}
        <ul className="space-y-2.5">
          {rest.map((f) => (
            <li key={f} className="flex gap-2.5 text-[14px] leading-snug text-fg-2">
              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-green" strokeWidth={2.5} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
