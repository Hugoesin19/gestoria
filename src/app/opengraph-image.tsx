import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Gestoría en ${site.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg, #fafaf5 0%, #f5f5dc 45%, #d1c7b7 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#556b2f",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#556b2f",
            }}
          />
          {site.city} · {site.locality}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#3b4b21",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#556b2f",
              lineHeight: 1.4,
              maxWidth: 820,
            }}
          >
            Asesoría fiscal, laboral y contable para autónomos y empresas
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#3b4b21",
          }}
        >
          <span>{site.phoneDisplay}</span>
          <span style={{ color: "#556b2f", fontStyle: "italic" }}>{site.tagline}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
