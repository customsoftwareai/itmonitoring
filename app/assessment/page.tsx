import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "IT Monitoring Assessment — ITMonitoring.com",
  description:
    "Take the IT Monitoring Health Check and Visibility Assessment to identify blind spots and improve your monitoring strategy.",
}

export default function AssessmentPage() {
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
        className="flex flex-1 flex-col items-center px-6 py-8"
        role="main"
      >
        <div className="w-full max-w-[900px]">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              IT Monitoring Health Check
            </h1>
            <p className="text-muted-foreground">
              Complete the assessment below to evaluate your monitoring visibility
              and identify improvement areas.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              title="Monitoring Health Check / Visibility Assessment"
              className="h-[600px] w-full border-none md:h-[700px]"
              src="https://forms.itmonitoring.com/access/form/ITMonitoring/formperma/Q4jyf8liwn5wFrjUS0Q9SCZ2okjFyyCA6e-nXWE_aws"
            />
          </div>
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
