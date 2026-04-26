import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "RABBIT｜オンライン結婚相談所";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fdf7f2 0%, #fbe7e5 45%, #e2c79b 100%)",
          color: "#2d2423",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: "rgba(199, 91, 110, 0.25)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "rgba(182, 140, 90, 0.25)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 9999,
              background: "#c75b6e",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 700,
            }}
          >
            R
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 36,
              letterSpacing: "0.04em",
              color: "#2d2423",
            }}
          >
            <span>RABBIT</span>
            <span style={{ color: "#c75b6e" }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#a8364c",
              marginBottom: 16,
            }}
          >
            Online Marriage Agency
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              fontSize: 76,
              lineHeight: 1.15,
              color: "#2d2423",
              maxWidth: 980,
            }}
          >
            <span>あなたの一歩に、</span>
            <span style={{ color: "#c75b6e" }}>夫婦で寄り添う</span>
            <span>結婚相談所。</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 26,
              color: "#5b4d4c",
              maxWidth: 900,
            }}
          >
            国内・国際結婚 / 語学レッスン / 占い鑑定 — 沖縄から全国へ
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {["Marriage", "Language", "Fortune"].map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  border: "1.5px solid rgba(168, 54, 76, 0.4)",
                  background: "rgba(255, 255, 255, 0.5)",
                  borderRadius: 9999,
                  padding: "8px 18px",
                  fontSize: 18,
                  color: "#a8364c",
                  letterSpacing: "0.15em",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#2d2423",
              opacity: 0.7,
            }}
          >
            rabbiton.pages.dev
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
