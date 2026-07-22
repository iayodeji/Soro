import { ImageResponse } from "next/og"

export const alt = "Sóró — Nigerian Gen Z market research"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FDFBF2",
          color: "#1F1612",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "76px",
          width: "100%",
        }}
      >
        <div style={{ color: "#B74A26", display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: 3 }}>
          SÓRÓ
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 930 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 800, letterSpacing: -4, lineHeight: 1.02 }}>
            <div>Nigerian Gen Z insight,</div>
            <div>without the wait.</div>
          </div>
          <div style={{ color: "#6C6358", fontSize: 32, lineHeight: 1.25 }}>
            Verified university students. AI-moderated conversations. Decision-ready research in 48 hours.
          </div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ background: "#B74A26", borderRadius: 999, height: 18, width: 220 }} />
          <div style={{ background: "#CFA331", borderRadius: 999, height: 18, width: 80 }} />
          <div style={{ background: "#7A8452", borderRadius: 999, height: 18, width: 50 }} />
        </div>
      </div>
    ),
    size,
  )
}
