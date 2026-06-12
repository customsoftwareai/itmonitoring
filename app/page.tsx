import Link from "next/link"
import { SiteNav, SiteFooter } from "@/components/SiteChrome"
import { Faq } from "@/components/Faq"

const TAGLINE =
  "Connecting IT leaders with vetted specialists to solve infrastructure & monitoring challenges"

function Icon({ path }: { path: React.ReactNode }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {path}
    </svg>
  )
}

const PAINS = [
  { title: "Creeping downtime", body: "Outages that start small and quietly compound — until they reach the executive's desk as lost revenue and lost trust.", icon: <><path d="M12 9v4" /><path d="M12 17h.01" /><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /></> },
  { title: "Observability gaps", body: "Blind spots your current tools never surface — the failures you don't see coming are the ones that hurt.", icon: <><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><path d="m2 2 20 20" /></> },
  { title: "Alert fatigue", body: "So much noise that the signal gets buried. Real incidents hide inside thousands of low-value alerts.", icon: <><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></> },
  { title: "Tool sprawl", body: "A patchwork of monitoring systems that don't talk to each other — paying for overlap while gaps remain.", icon: <><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></> },
]

const STEPS = [
  { n: "01", title: "Take the assessment", body: "A short health check surfaces where your monitoring has gaps — downtime exposure, blind spots, alert noise, or tool sprawl." },
  { n: "02", title: "We match you with a specialist", body: "We introduce you to one or more vetted specialists suited to your specific stack and environment. No cold vendor outreach." },
  { n: "03", title: "Solve the problem — no obligation", body: "Have a relevant conversation. There's nothing to buy from us, and any engagement is arranged directly with the specialist." },
]

const SPECIALTIES = [
  "Infrastructure & server monitoring",
  "Network monitoring",
  "Application performance (APM)",
  "Cloud & Kubernetes visibility",
  "Observability & logging",
  "Security & SIEM monitoring",
  "Database monitoring",
  "Alert tuning & noise reduction",
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />

      <main id="main-content" role="main" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-20 text-center md:pt-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Independent matching service — not a provider
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Your monitoring blind spots,
              <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">solved by vetted specialists.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {TAGLINE}. We make the introduction — you keep control, with no obligation and nothing to buy from us.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/assessment" className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                Take the 2-minute assessment
              </Link>
              <Link href="#how-it-works" className="rounded-full border border-white/15 px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                See how it works
              </Link>
            </div>
            <p className="mt-6 text-sm font-medium text-muted-foreground">Free for IT leaders · No obligation · No vendor bias</p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">IT infrastructure rarely fails loudly</h2>
            <p className="mt-4 text-lg text-muted-foreground">It shows up as small problems that compound quietly — until they're already costing you time, money, and trust.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PAINS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.04]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon path={p.icon} /></span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="scroll-mt-20 border-y border-white/5 bg-white/[0.015]">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">A curated introduction, not a sales funnel</h2>
              <p className="mt-4 text-lg text-muted-foreground">Three simple steps from problem to the right specialist.</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="relative rounded-2xl border border-white/10 bg-background p-7">
                  <span className="text-sm font-bold tracking-widest text-primary">{s.n}</span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COST */}
        <section id="pricing" className="scroll-mt-20">
          <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-[280px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                Free for IT leaders
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">What does it cost you? Nothing.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Getting matched and talking to a specialist is completely free — no fee, no markup, no subscription on your side, ever. Our vetted specialists pay us a referral fee when we introduce them, which is how the service stays free for the IT leaders we work with.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The only thing you would ever pay goes to a specialist directly — and only if you choose to engage one. We match you on fit, the right specialist for your environment, never on who pays us most.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-foreground">$0 to get matched</span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-foreground">No obligation</span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-foreground">No vendor bias</span>
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALISTS */}
        <section id="specialists" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Vetted specialists</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Depth across every layer of your stack</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our network is made up of specialists with real, hands-on experience — so the introductions you receive are relevant and credible. We match you to the right expertise for your specific environment.
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-base font-semibold text-foreground">Are you an IT monitoring specialist?</p>
                <p className="mt-1 text-sm text-muted-foreground">Join our network and get matched with IT leaders who need your expertise.</p>
                <Link href="/careers" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                  Apply to join our team
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {SPECIALTIES.map((s) => (
                <li key={s} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm font-medium text-foreground">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section className="mx-auto max-w-6xl px-6 pb-4">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" aria-hidden="true" />
            <div className="relative max-w-3xl">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon path={<><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>} />
              </span>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Transparent by design</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                ITMonitoring.com is an independent matching service — not a provider of tools, software, or consulting. We don't do the technical work ourselves. What we do is make the right introduction, pairing you with a vetted specialist suited to your environment. You're told that upfront, every time.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 mx-auto max-w-3xl px-6 py-20 md:py-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Questions, answered</h2>
          </div>
          <div className="mt-12"><Faq /></div>
        </section>

        {/* FINAL CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-16 text-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">See where your monitoring stands</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">Take the assessment and we'll connect you with the right specialist. No obligation, no pitch.</p>
              <Link href="/assessment" className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                Take the assessment
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
