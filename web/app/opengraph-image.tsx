import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Social share card (1200×630), drawn in the site's own look.
export const alt = "Neon Next Generation — Next-gen hosting infrastructure from Australia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/icon-512.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  // Inter Bold (SIL OFL) bundled locally so the build needs no network.
  const interBold = await readFile(join(process.cwd(), "assets/fonts/inter-latin-700-normal.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#050208",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(123,47,242,0.5), transparent 55%), radial-gradient(circle at 0% 100%, rgba(52,211,153,0.2), transparent 50%)",
          color: "#f0f0fa",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img src={logoSrc} width={64} height={64} alt="" />
          <span style={{ fontSize: 30, fontWeight: 700 }}>Neon Next Generation</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02 }}>NEXT-GEN</span>
          <span style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02, color: "#b47aff" }}>HOSTING</span>
          <span style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02 }}>INFRASTRUCTURE</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 28 }}>
          <span style={{ color: "#c9c3dc" }}>NVMe Gen 4 · 10Gbps · DDoS protection · Sydney</span>
          <span
            style={{
              padding: "14px 28px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #7b2ff2, #9b5de5)",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            VPS from AU$5.94/mo
          </span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Inter", data: interBold, weight: 700, style: "normal" }] },
  );
}
