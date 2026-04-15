import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FastSEO — Specialist SEO for iGaming, Crypto, Adult & SaaS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#080B14",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(232,255,71,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,255,71,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,255,178,0.1) 0%, transparent 65%)",
          }}
        />

        {/* Glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232,255,71,0.07) 0%, transparent 65%)",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
          {/* Logo wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "rgba(232,255,71,0.12)",
                border: "1px solid rgba(232,255,71,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  border: "2px solid #E8FF47",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#00FFB2",
                  }}
                />
              </div>
            </div>
            <span
              style={{
                fontFamily: "sans-serif",
                fontWeight: 900,
                fontSize: 28,
                color: "#F5F7FA",
                letterSpacing: "-0.5px",
              }}
            >
              Fast
              <span style={{ color: "#E8FF47" }}>SEO</span>
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontFamily: "sans-serif",
              fontWeight: 900,
              fontSize: 62,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              color: "#F5F7FA",
              marginBottom: 24,
              maxWidth: 820,
            }}
          >
            Specialist SEO for{" "}
            <span style={{ color: "#E8FF47" }}>Regulated</span> &{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #E8FF47, #00FFB2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Competitive
            </span>{" "}
            Niches
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 22,
              color: "#8A93A6",
              marginBottom: 44,
              maxWidth: 640,
              lineHeight: 1.5,
            }}
          >
            iGaming · Crypto · Adult · Cannabis · Dental · SaaS
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: 12 }}>
            {["AI Search Ready", "E-E-A-T Specialists", "Free Audit"].map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(232,255,71,0.06)",
                  border: "1px solid rgba(232,255,71,0.15)",
                  borderRadius: 100,
                  padding: "8px 18px",
                  fontFamily: "sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#E8FF47",
                  letterSpacing: "0.08em",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Domain bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            fontFamily: "sans-serif",
            fontSize: 18,
            color: "#3D4A5C",
            fontWeight: 500,
          }}
        >
          fastseosolutions.com
        </div>
      </div>
    ),
    { ...size }
  );
}
