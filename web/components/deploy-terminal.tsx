// The example provisioning run from the current site, shown as a terminal.

const lines: { t: "cmd" | "out" | "ok" | "done"; text: string }[] = [
  { t: "cmd", text: "nng deploy --plan vps-4 --region syd --os ubuntu-24" },
  { t: "out", text: "Provisioning VPS in SYD-01..." },
  { t: "ok", text: "NVMe volume attached (80GB)" },
  { t: "ok", text: "IPv4 + IPv6 assigned" },
  { t: "ok", text: "DDoS protection enabled" },
  { t: "done", text: "Server ready in 14s — SSH: 203.x.x.x" },
];

export function DeployTerminal({ className = "" }: { className?: string }) {
  return (
    <figure className={`card overflow-hidden !rounded-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-border bg-bg/50 px-4 py-2.5">
        <span className="flex items-center gap-2 text-[12px] text-muted">
          <span aria-hidden className="size-1.5 rounded-full bg-green" />
          Terminal — nng@syd-01
        </span>
        <span className="font-mono text-[11px] text-muted">bash</span>
      </div>
      <pre className="whitespace-pre-wrap break-words px-4 py-4 font-mono text-[12.5px] leading-[1.9] sm:text-[13px]">
        {lines.map((l, i) => (
          <div key={i}>
            {l.t === "cmd" && (<><span className="text-green">$ </span><span className="text-fg">{l.text}</span></>)}
            {l.t === "out" && <span className="text-muted">› {l.text}</span>}
            {l.t === "ok" && <span className="text-green">› ✓ {l.text}</span>}
            {l.t === "done" && (
              <span className="text-fg-2">› Server ready in <span className="font-semibold text-amber">14s</span> — SSH: 203.x.x.x</span>
            )}
          </div>
        ))}
        <div><span className="text-green">$ </span><span className="caret inline-block h-3.5 w-2 translate-y-0.5 bg-fg" /></div>
      </pre>
      <figcaption className="sr-only">Example provisioning run.</figcaption>
    </figure>
  );
}
