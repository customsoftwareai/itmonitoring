"use client"

import Link from "next/link"
import { useState } from "react"
import { openCookiePreferences } from "@/components/cookie-consent"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-500 shadow-lg shadow-primary/30">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 12h4l2.5 7 5-15L18 12h4" />
        </svg>
      </span>
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
