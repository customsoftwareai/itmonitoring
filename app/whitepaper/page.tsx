import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "White Paper Coming Soon | ITMonitoring.com",
  description:
    "The IT Monitoring White Paper is being updated with the latest insights and best practices. Check back soon.",
}

export default function WhitepaperPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header role="banner" className="px-6 py-4">
        <nav id="main-nav" aria-label="Main navigation">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </nav>
      </header>

      <main
        id="main-content"
        className="flex flex-1 items-center justify-center px-6 py-8"
        role="main"
      >
        <article className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center" aria-hidden="true">
            <div className="rounded-full bg-primary/10 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </div>
          </div>

          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Coming Soon
          </p>

          <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The IT Monitoring White Paper Is Being Updated
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            We're currently updating our IT Monitoring White Paper to ensure it
            reflects the latest insights, best practices, and real-world
            monitoring strategies. The updated version will be available soon.
          </p>

          <aside className="rounded-lg border border-border bg-card p-6">
            <p className="mb-4 text-muted-foreground">
              In the meantime, discover how your monitoring stack measures up.
            </p>
            <Link
              href="/assessment"
              className="inline-block rounded-[10px] bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              Take the IT Monitoring Assessment
            </Link>
          </aside>
        </article>
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
