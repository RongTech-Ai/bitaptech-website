import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "BitapTech — AI & SaaS products for modern businesses";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: "linear-gradient(135deg, #0b1220 0%, #111a35 45%, #1e3a8a 100%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 16,
            background: "linear-gradient(135deg, #2563EB, #3B82F6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
          }}
        >
          B
        </div>
        BitapTech
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div
          style={{
            fontSize: 74,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          AI products that power modern businesses.
        </div>
        <div style={{ fontSize: 32, color: "#cbd5e1", maxWidth: 820 }}>
          SaaS platforms · WhatsApp automation · custom software
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: 26,
          color: "#93c5fd",
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 999,
            background: "#22c55e",
          }}
        />
        bitaptech.com · MSME Registered Software Company
      </div>
    </div>,
    { ...size },
  );
}
