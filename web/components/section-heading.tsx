// Centered or left-aligned section heading: first line in ink, second line
// in the brand incumbent lavender, as on the original site.

export function SectionHeading({
  id,
  lead,
  accent,
  sub,
  align = "center",
}: {
  id?: string;
  lead: string;
  accent: string;
  sub?: React.ReactNode;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <h2 id={id} className="h-display text-[clamp(2.25rem,4.6vw,3.75rem)]">
        {lead} <span className="text-[#d4c8ef]">{accent}</span>
      </h2>
      {sub && <p className={`mt-5 text-[17px] leading-relaxed text-fg-2 ${center ? "mx-auto max-w-xl" : ""}`}>{sub}</p>}
    </div>
  );
}
