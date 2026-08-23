import { ImageResponse } from "next/og";

// Generated from this site's own BrandIcon (see components/BrandMark.tsx)
// so the favicon matches the header mark and brand palette exactly,
// instead of every site sharing one generic icon.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#100f16",
          color: "#5a5fa8",
          borderRadius: 36,
        }}
      >
        <svg width="124" height="124" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 3.5V8h4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.7 14.3l2.1 2.1 4.2-4.4" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </div>
    ),
    size
  );
}
