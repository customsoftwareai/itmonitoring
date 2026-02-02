import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header role="banner" className="sr-only">
        <nav id="main-nav" aria-label="Main navigation">
          <Link href="/">ITMonitoring.com</Link>
        </nav>
      </header>

      <main
        id="main-content"
        className="flex flex-1 items-center justify-center px-6 py-12 text-center"
        role="main"
      >
        <div className="max-w-[900px]">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Independent IT Monitoring Consulting
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Identify blind spots, reduce downtime risk, and improve monitoring
            strategy — without vendor bias.
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-4"
            aria-label="Primary actions"
          >
            <Link
              href="/assessment"
              className="rounded-[10px] bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              Take the IT Monitoring Assessment
            </Link>
            <Link
              href="/whitepaper"
              className="rounded-[10px] border border-border px-6 py-3.5 font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              Get the White Paper
            </Link>
          </nav>
        </div>
      </main>

      <footer
        id="footer"
        role="contentinfo"
        className="px-6 py-6 text-center text-sm text-muted-foreground"
      >
        <nav aria-label="Footer navigation" className="mb-2">
          <Link
            href="/accessibility"
            className="underline underline-offset-2 transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Accessibility Statement
          </Link>
        </nav>
        <p>© ITMonitoring.com — Advisory Services Only</p>
      </footer>
    </div>
  )
}
