// Top band for inner pages: the brand glow wash with a two-tone heading.

export function PageHero({
  lead,
  accent,
  lede,
  children,
}: {
  lead: React.ReactNode;
  accent?: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="wash-page relative overflow-hidden border-b border-border">
      <div aria-hidden className="hero-grid absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-28 lg:pb-20">
        <h1 className="h-display max-w-4xl text-[clamp(2.25rem,6.5vw,4.75rem)]">
          {lead} {accent && <span className="text-[#d4c8ef]">{accent}</span>}
        </h1>
        {lede && <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-fg-2">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
