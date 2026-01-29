import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "IT Monitoring Assessment — ITMonitoring.com",
  description:
    "Take the IT Monitoring Health Check and Visibility Assessment to identify blind spots and improve your monitoring strategy.",
}

export default function AssessmentPage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-12">
      <div className="w-full max-w-[900px]">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </Link>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            IT Monitoring Health Check
          </h1>
          <p className="text-muted-foreground">
            Complete the assessment below to evaluate your monitoring visibility
            and identify improvement areas.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <iframe
            aria-label="Monitoring Health Check / Visibility Assessment"
            frameBorder="0"
            className="h-[600px] w-full border-none md:h-[700px]"
            src="https://forms.itmonitoring.com/access/form/ITMonitoring/formperma/Q4jyf8liwn5wFrjUS0Q9SCZ2okjFyyCA6e-nXWE_aws"
          />
        </div>

        <footer className="mt-10 text-center text-sm text-muted-foreground">
          © ITMonitoring.com — Advisory Services Only
        </footer>
      </div>
    </main>
  )
}
