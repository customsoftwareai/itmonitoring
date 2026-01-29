import Link from "next/link"
import type { Metadata } from "next"
import { PrintButton } from "@/components/print-button"

export const metadata: Metadata = {
  title: "White Paper | ITMonitoring.com",
  description:
    "Reducing IT Monitoring Blind Spots in Modern Organizations — A strategic reference for evaluating monitoring maturity.",
}

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen px-6 py-12 print:bg-white print:text-black">
      <article className="mx-auto max-w-3xl">
        <header className="mb-10 border-b border-border pb-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground print:hidden"
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
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            White Paper
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Reducing IT Monitoring Blind Spots in Modern Organizations
          </h1>
          <p className="text-muted-foreground">
            A strategic reference for evaluating monitoring maturity
          </p>
        </header>

        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Executive Summary
            </h2>
            <p className="leading-relaxed">
              Most IT monitoring stacks fail not because of the tools
              themselves, but due to configuration gaps, alert fatigue, and
              blind spots that accumulate over time. This white paper provides
              an independent perspective on identifying and addressing these
              issues without vendor bias.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Why Most IT Monitoring Stacks Fail
            </h2>
            <ul className="list-inside list-disc space-y-2 leading-relaxed">
              <li>
                Tool sprawl creates fragmented visibility across infrastructure
              </li>
              <li>
                Alert thresholds set during initial deployment become outdated
              </li>
              <li>
                Teams lack time to continuously tune and optimize configurations
              </li>
              <li>
                Vendor lock-in prevents objective evaluation of coverage gaps
              </li>
              <li>
                Metrics are collected but rarely correlated for actionable
                insights
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Common Blind Spots in Alerts and Coverage
            </h2>
            <ul className="list-inside list-disc space-y-2 leading-relaxed">
              <li>
                Network edge devices and remote infrastructure often go
                unmonitored
              </li>
              <li>
                Application-level metrics ignored in favor of basic server
                health checks
              </li>
              <li>
                Cloud resources provisioned dynamically without monitoring
                automation
              </li>
              <li>
                Security events siloed from operational monitoring dashboards
              </li>
              <li>
                End-user experience metrics absent from incident response
                workflows
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              How Independent Assessments Outperform Vendor-Led Audits
            </h2>
            <p className="mb-4 leading-relaxed">
              Vendor-led audits often result in recommendations that favor their
              own product ecosystem. Independent assessments provide:
            </p>
            <ul className="list-inside list-disc space-y-2 leading-relaxed">
              <li>Unbiased evaluation of current tool effectiveness</li>
              <li>Cross-platform visibility recommendations</li>
              <li>Prioritized remediation based on business impact</li>
              <li>Actionable roadmaps without upsell pressure</li>
              <li>
                Knowledge transfer to internal teams for long-term improvement
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Steps to Modernize Monitoring Strategy
            </h2>
            <ol className="list-inside list-decimal space-y-3 leading-relaxed">
              <li>
                <strong>Audit current coverage</strong> — Map all assets and
                identify what is and is not monitored
              </li>
              <li>
                <strong>Consolidate alert channels</strong> — Reduce noise by
                centralizing notifications with proper escalation paths
              </li>
              <li>
                <strong>Implement correlation</strong> — Connect metrics across
                infrastructure, application, and security layers
              </li>
              <li>
                <strong>Automate discovery</strong> — Ensure new resources are
                automatically added to monitoring scope
              </li>
              <li>
                <strong>Review quarterly</strong> — Schedule regular assessments
                to prevent configuration drift
              </li>
            </ol>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              Next Steps
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Ready to identify blind spots in your monitoring strategy? Take
              our free IT Monitoring Assessment to receive a personalized
              analysis.
            </p>
            <Link
              href="/assessment"
              className="inline-block rounded-[10px] bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-95 print:hidden"
            >
              Take the Assessment
            </Link>
          </section>
        </div>

        <footer className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-4">© ITMonitoring.com — Advisory Services Only</p>
          <PrintButton />
        </footer>
      </article>
    </main>
  )
}
