import type { Metadata } from "next"
import { SiteNav, SiteFooter } from "@/components/SiteChrome"

export const metadata: Metadata = {
  title: "IT Monitoring Assessment — ITMonitoring.com",
  description:
    "Take the IT Monitoring Health Check and Visibility Assessment. We'll connect you with a vetted specialist suited to your environment — no obligation.",
}

export default function AssessmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main id="main-content" role="main" className="flex-1">
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="pointer-events-none absolute left-1/2 top-[-30%] h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Health check</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              IT Monitoring Assessment
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Answer a few questions about your monitoring visibility. Choose the 2-minute express or the deeper full assessment — then we'll connect you with the right vetted specialist. No obligation.
            </p>
          </div>
        </section>
        <section className="mx-auto w-full max-w-3xl px-6 py-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card">
            <iframe
              title="Monitoring Health Check / Visibility Assessment"
              className="h-[640px] w-full border-none md:h-[740px]"
              src="https://forms.itmonitoring.com/access/form/ITMonitoring/formperma/Q4jyf8liwn5wFrjUS0Q9SCZ2okjFyyCA6e-nXWE_aws"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
