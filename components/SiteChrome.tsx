"use client"

import Link from "next/link"
import { useState } from "react"
import { openCookiePreferences } from "@/components/cookie-consent"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 512 512" className="shrink-0" aria-hidden="true">
        <circle cx="256" cy="256" r="236" fill="#0c2a55" stroke="#6cc1ff" strokeWidth="16" />
        <polyline points="96.0,256.0 100.0,276.9 104.0,296.2 108.0,313.2 112.0,327.2 116.0,337.8 120.0,344.6 124.0,347.4 128.0,346.4 132.0,341.7 136.0,333.6 140.0,322.6 144.0,309.3 148.0,294.3 152.0,278.4 156.0,262.2 160.0,246.4 164.0,231.7 168.0,218.6 172.0,207.7 176.0,199.2 180.0,193.5 184.0,190.7 188.0,190.7 192.0,193.4 196.0,198.6 200.0,205.9 204.0,214.9 208.0,225.2 212.0,236.2 216.0,247.5 220.0,258.5 224.0,268.8 228.0,277.9 232.0,285.7 236.0,291.7 240.0,295.8 244.0,298.1 248.0,298.4 252.0,296.9 256.0,293.8 260.0,289.4 264.0,283.8 268.0,277.4 272.0,270.6 276.0,263.7 280.0,257.0 284.0,250.8 288.0,245.3 292.0,240.7 296.0,237.2 300.0,234.8 304.0,233.5 308.0,233.4 312.0,234.2 316.0,236.0 320.0,238.4 324.0,241.3 328.0,244.6 332.0,248.0 336.0,251.3 340.0,254.5 344.0,257.2 348.0,259.5 352.0,261.3 356.0,262.5 360.0,263.2 364.0,263.4 368.0,263.1 372.0,262.5 376.0,261.6 380.0,260.6 384.0,259.5 388.0,258.5 392.0,257.6 396.0,256.8 400.0,256.3 404.0,256.0 408.0,255.9 412.0,255.9 416.0,256.0" fill="none" stroke="#ffffff" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="416" cy="256" r="22" fill="#7cc8ff" />
      </svg>
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        ITMonitoring<span className="text-primary">.com</span>
      </span>
    </span>
  )
}

const NAV_LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#specialists", label: "Specialists" },
  { href: "/about", label: "About" },
{ href: "/#faq", label: "FAQ" },
  { href: "/careers", label: "Careers" },
{ href: "/contact", label: "Contact" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  return (
    <header role="banner" className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <nav id="main-nav" aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
          <Logo />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-400 transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded">
              {l.label}
            </Link>
          ))}
          <Link href="/assessment" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
            Take the Assessment
          </Link>
        </div>
        <button onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle menu" className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden focus:outline-none focus:ring-2 focus:ring-ring">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></> : <><path d="M4 12h16" /><path d="M4 6h16" /><path d="M4 18h16" /></>}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/5 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-foreground">
                {l.label}
              </Link>
            ))}
            <Link href="/assessment" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground">
              Take the Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer id="footer" role="contentinfo" className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A referral network built only for monitoring and observability — connecting IT leaders with independent experts and firms that specialize in monitoring and observability when coverage gets stretched.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
            <Link href="/#how-it-works" className="text-gray-400 hover:text-foreground">How it works</Link>
            <Link href="/#specialists" className="text-gray-400 hover:text-foreground">Specialists</Link>
<Link href="/about" className="text-gray-400 hover:text-foreground">About</Link>
            <Link href="/#faq" className="text-gray-400 hover:text-foreground">FAQ</Link>
            <Link href="/careers" className="text-gray-400 hover:text-foreground">Careers</Link>
<Link href="/contact" className="text-gray-400 hover:text-foreground">Contact</Link>
            <Link href="/assessment" className="text-gray-400 hover:text-foreground">Assessment</Link>
            <Link href="/accessibility" className="text-gray-400 hover:text-foreground">Accessibility</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-foreground">Terms of Use</Link>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="text-left text-gray-400 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded"
            >
              Cookie preferences
            </button>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-gray-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} ITMonitoring.com. All rights reserved.</p>
          <p>ITMonitoring.com is a referral network for monitoring and observability — not a provider of tools, software, or consulting.</p>
        </div>
      </div>
    </footer>
  )
}
