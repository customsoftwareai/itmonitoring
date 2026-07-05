import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import "./globals.css"
import SkipLinks from "@/components/SkipLinks"
import AccessibilityMenu from "@/components/AccessibilityMenu"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://itmonitoring.com"),
  title: "ITMonitoring.com — Staff augmentation for IT monitoring & observability",
  description:
    "Staff augmentation exclusively for IT monitoring and observability. We place independent specialists who embed with your team when coverage gets stretched. Free to IT leaders.",
  openGraph: {
    title: "ITMonitoring.com — Staff augmentation for IT monitoring & observability",
    description:
      "Staff augmentation exclusively for IT monitoring and observability. Independent specialists who embed with your team when coverage gets stretched. Free to IT leaders.",
    url: "https://itmonitoring.com",
    siteName: "ITMonitoring.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/itmonitoring-logo.png",
        alt: "ITMonitoring.com — staff augmentation for IT monitoring and observability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITMonitoring.com — Staff augmentation for IT monitoring & observability",
    description:
      "Staff augmentation exclusively for IT monitoring and observability. Independent specialists who embed with your team. Free to IT leaders.",
    images: ["/itmonitoring-logo.png"],
  },
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
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T1G2DDCNGG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T1G2DDCNGG');
          `}
        </Script>
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
