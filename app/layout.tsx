import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SkipLinks from "@/components/SkipLinks"
import AccessibilityMenu from "@/components/AccessibilityMenu"

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
      </body>
    </html>
  )
}
