"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"

const STORAGE_KEY = "itm-cookie-consent"
const OPEN_EVENT = "itm-open-cookie-preferences"

type ConsentValue = "accepted" | "declined"

/**
 * Read the current stored consent value. Returns null if no choice has been made.
 * Safe to call from analytics/advertising scripts to gate non-essential cookies:
 *   if (getCookieConsent() === "accepted") { /* load analytics *\/ }
 */
export function getCookieConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === "accepted" || value === "declined" ? value : null
  } catch {
    return null
  }
}

/** Programmatically re-open the consent banner (used by the footer link). */
export function openCookiePreferences() {
  if (typeof window === "undefined") return
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore storage errors
  }
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  const store = useCallback((value: ConsentValue) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore storage errors
    }
  }, [])

  useEffect(() => {
    // Respect Global Privacy Control silently: treat as declined, no banner.
    const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl
    if (gpc === true) {
      store("declined")
      setVisible(false)
      return
    }

    // Show the banner only if no choice has been stored yet.
    if (getCookieConsent() === null) {
      setVisible(true)
    }

    const handleOpen = () => setVisible(true)
    window.addEventListener(OPEN_EVENT, handleOpen)
    return () => window.removeEventListener(OPEN_EVENT, handleOpen)
  }, [store])

  const handleChoice = useCallback(
    (value: ConsentValue) => {
      store(value)
      setVisible(false)
    },
    [store],
  )

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-background/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 id="cookie-consent-title" className="sr-only">
            Cookie consent
          </h2>
          <p id="cookie-consent-desc" className="text-sm leading-relaxed text-gray-300">
            We use cookies to operate and improve this site and, with your consent, for analytics. Read our{" "}
            <Link
              href="/privacy"
              className="text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Decline non-essential
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
