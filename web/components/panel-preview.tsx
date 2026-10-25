import Image from "next/image";
import { Activity, CreditCard, Globe, HardDrive, Home, Lock, Server, Settings } from "lucide-react";

// An illustrative preview of the hosting panel, following the mock on the
// original site (greeting, servers, website disk usage, activity log).
// Figures are placeholders, and the caption says so.

const side = [
  { icon: Home, label: "Home", active: true },
  { icon: Server, label: "Servers" },
  { icon: Globe, label: "Websites" },
  { icon: HardDrive, label: "Storage" },
  { icon: CreditCard, label: "Billing" },
  { icon: Settings, label: "Settings" },
];

const usage = [38, 52, 44, 61, 48, 70, 57, 64, 49, 58, 72, 66, 54, 60];

export function PanelPreview() {
  return (
    <figure className="card overflow-hidden !rounded-2xl shadow-[0_40px_80px_-40px_rgb(123_47_242/0.6)]" aria-label="Hosting control panel preview">
      <div className="flex items-center gap-3 border-b border-border bg-bg/60 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto flex max-w-xs flex-1 items-center gap-2 rounded-md bg-raised px-3 py-1 text-[11px] text-muted">
          <Lock aria-hidden className="size-3 text-green" />
          hosting.neonnextgeneration.com
        </span>
        <span className="hidden text-[10px] font-semibold text-green sm:inline">● Secure</span>
      </div>

      <div className="grid grid-cols-[3.25rem_1fr] sm:grid-cols-[9.5rem_1fr]">
        <aside className="border-r border-border bg-bg/40 p-2.5">
          <div className="mb-3 flex items-center gap-2 px-1.5">
            <Image src="/brand/logo.png" alt="" width={22} height={22} className="size-[22px]" />
            <span className="hidden text-[11px] font-bold sm:inline">NNG Panel</span>
          </div>
          <ul className="space-y-0.5">
            {side.map(({ icon: Icon, label, active }) => (
              <li key={label} className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${active ? "bg-violet/18 text-fg" : "text-muted"}`}>
                <Icon aria-hidden className="size-3.5 shrink-0" />
                <span className="hidden sm:inline">{label}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="p-4 pb-14 sm:p-5 sm:pb-20">
          <p className="text-[11px] text-muted">Welcome back</p>
          <p className="text-[15px] font-semibold">Hi, User</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-raised/70 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold">Master server</span>
                <span className="rounded-full bg-green/15 px-2 py-0.5 text-[9px] font-bold text-green">ONLINE</span>
              </div>
              <p className="mt-1 font-mono text-[10px] text-muted">SYD-01</p>
              <div className="mt-3 space-y-1.5">
                {[
                  { k: "CPU", v: 24, c: "bg-violet" },
                  { k: "RAM", v: 46, c: "bg-violet-glow" },
                  { k: "NVMe", v: 31, c: "bg-green" },
                ].map((m) => (
                  <div key={m.k} className="flex items-center gap-2 text-[10px] text-muted">
                    <span className="w-8">{m.k}</span>
                    <span className="h-1.5 flex-1 rounded-full bg-bg">
                      <span className={`block h-full rounded-full ${m.c}`} style={{ width: `${m.v}%` }} />
                    </span>
                    <span className="tnum w-7 text-right">{m.v}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-raised/70 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold">Website disk usage</span>
                <Activity aria-hidden className="size-3.5 text-violet-glow" />
              </div>
              <div className="mt-3 flex h-[58px] items-end gap-1" aria-hidden>
                {usage.map((h, i) => (
                  <span key={i} className="flex-1 rounded-sm bg-[linear-gradient(180deg,#b47aff,#7b2ff2)]" style={{ height: `${h}%`, opacity: 0.45 + i / 30 }} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-raised/70 px-3 py-2.5 text-[11px]">
            <span className="text-fg-2">Activity log</span>
            <span className="text-muted">See all activity</span>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">Illustrative preview of the hosting panel</figcaption>
    </figure>
  );
}
