import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import "./globals.css"
import SkipLinks from "@/components/SkipLinks"
import AccessibilityMenu from "@/components/AccessibilityMenu"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "ITMonitoring.com — Connecting IT leaders with vetted specialists",
  description:
    "An independent matching service that connects IT leaders with vetted specialists to solve infrastructure & monitoring challenges.",
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SkipLinks />
        {children}
        <AccessibilityMenu />
        <CookieConsent />
        {/* Zoho SalesIQ — visitor tracking (chat widget hidden) */}
        <Script id="zsiq-init" strategy="afterInteractive">
          {`window.$zoho=window.$zoho||{};$zoho.salesiq=$zoho.salesiq||{ready:function(){$zoho.salesiq.floatbutton.visible("hide");}};`}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siqe5ff5f3527484a4853333206c1e1c5287297a4ebd4e0a4c894997ff2e0912122"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
