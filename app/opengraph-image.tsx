import { ImageResponse } from "next/og"

export const alt = "ITMonitoring.com — referral network for IT monitoring and observability"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
return new ImageResponse(
(
<div
style={{
width: "100%",
height: "100%",
display: "flex",
flexDirection: "column",
justifyContent: "center",
padding: "80px",
background: "#0b1220",
color: "#ffffff",
fontFamily: "sans-serif",
}}
>
<div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
<div style={{ width: 56, height: 56, borderRadius: 14, background: "#2563eb", marginRight: 22 }} />
<div style={{ fontSize: 32, fontWeight: 600, color: "#e5e9f0" }}>ITMonitoring.com</div>
</div>
<div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1, maxWidth: 1000 }}>
{"Referral network for IT monitoring & observability"}
</div>
<div style={{ fontSize: 28, color: "#94a3b8", marginTop: 34 }}>
{"Independent experts and firms who extend your team. At no cost to IT leaders."}
</div>
</div>
),
{ ...size }
)
}
