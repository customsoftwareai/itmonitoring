import type { Metadata } from "next"
import { SiteNav, SiteFooter } from "@/components/SiteChrome"

export const metadata: Metadata = {
  title: "Careers — Join our network of IT monitoring specialists | ITMonitoring.com",
  description:
    "Apply to join ITMonitoring.com's network of vetted IT monitoring specialists. Get matched with IT leaders who need your expertise.",
}

const PERKS = [
  { title: "Warm, relevant introductions", body: "We connect you with IT leaders who already have a defined monitoring or infrastructure need — no cold outreach." },
  { title: "Work the way you want", body: "Full-time, part-time, or project-based. Engagements are arranged directly between you and the client." },
  { title: "Global, remote-first", body: "Serve clients across borders. Your expertise isn't limited by geography." },
]

const LOOKING_FOR = [
  "Hands-on experience with infrastructure, network, application, or cloud monitoring",
  "Familiarity with observability, logging, APM, or SIEM platforms",
  "A track record of reducing downtime, closing visibility gaps, or taming alert noise",
  "Clear communication with technical and executive stakeholders",
]

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />

      <main id="main-content" role="main" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Careers</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              Join our network of IT monitoring specialists
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We connect vetted specialists with IT leaders who need help solving real infrastructure and monitoring challenges. If that's you, we'd like to meet you.
            </p>
          </div>
        </section>

        {/* PERKS */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {PERKS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE LOOK FOR */}
        <section className="mx-auto max-w-6xl px-6 pb-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-8 md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">What we look for</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {LOOKING_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                  <svg className="mt-1 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* APPLICATION FORM */}
        <section id="apply" className="scroll-mt-20 mx-auto max-w-3xl px-6 py-12 md:py-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Apply to join</h2>
            <p className="mt-3 text-muted-foreground">Tell us about your experience and attach your resume. A cover letter is optional.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card">
            <iframe
              title="IT Monitoring Specialist Application"
              className="h-[2000px] w-full border-none"
              src="https://forms.zohopublic.com/access/form/ITMonitoringSpecialistApplication/formperma/K8fo2MvE19TjCswZ2aOMgCEU_twNDH27sQ18K3_5S7Q"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
