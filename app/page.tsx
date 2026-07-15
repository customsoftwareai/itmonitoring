import Link from "next/link"
import { SiteNav, SiteFooter } from "@/components/SiteChrome"
import { Faq } from "@/components/Faq"


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
{ n: "01", title: "Take the assessment", body: "A short health check surfaces where your monitoring coverage is thin — downtime exposure, blind spots, alert noise, or tool sprawl. The more you share about your environment, the sharper the match." },
{ n: "02", title: "We shortlist two or three partners", body: "Based on what you share, we introduce you to two or three independent experts or firms whose monitoring and observability expertise fits your stack. It's all we focus on — no generalist staffing, no cold vendor outreach." },
{ n: "03", title: "You choose and engage directly", body: "Talk to the shortlist, judge the fit yourself, and pick the partner who's right for you. They can embed with your team for as long as you need. You engage them directly, and there's nothing to buy from us." },
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
<span className="h-1.5 w-1.5 rounded-full bg-primary" /> Independent experts & firms · Specializing in Monitoring & Observability
</span>
<h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
The right match for your stack —
<span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent pb-[0.2em]">on your terms</span>
</h1>
<p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-foreground sm:text-xl">An observability seat empties on short notice and no one owns the dashboards. Time is of the essence. Reach out, and the right independent individual or firm is matched and introduced at no cost to you — no weeks-long search, no ramp-up or getting up to speed. They already know your tools and your environment.</p>
<div className="mt-9 flex flex-wrap items-center justify-center gap-4">
<Link href="/assessment" className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
Take the 2-minute assessment
</Link>
<Link href="#how-it-works" className="rounded-full border border-white/15 px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
See how it works
</Link>
</div>
<p className="mt-6 text-sm font-medium text-muted-foreground">When your stack needs immediate attention, think ITMonitoring.com</p>
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

{/* WHO COMES TO US */}
<section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
<div className="grid items-start gap-12 lg:grid-cols-2">
<div>
<span className="text-sm font-semibold uppercase tracking-wider text-primary">Who comes to us</span>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">The moment coverage gets stretched</h2>
<p className="mt-4 text-lg leading-relaxed text-muted-foreground">Most IT leaders reach out at a moment of strain, not on a quiet afternoon. The most common one we see: a monitoring or observability specialist leaves on short notice, and suddenly no one owns the dashboards, the alerts, or the on-call rotation.</p>
<p className="mt-4 text-lg leading-relaxed text-muted-foreground">We work with IT teams of every size — lean startups to enterprises — across the United States and internationally.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
<p className="text-base font-semibold text-foreground">Other common triggers</p>
<ul className="mt-4 grid gap-3">
<li className="flex items-start gap-3 text-sm font-medium text-foreground"><svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>A migration or cloud move that's outpacing the team</li>
<li className="flex items-start gap-3 text-sm font-medium text-foreground"><svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>An audit or compliance deadline bearing down</li>
<li className="flex items-start gap-3 text-sm font-medium text-foreground"><svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>Rapid growth burying the team in alert noise</li>
<li className="flex items-start gap-3 text-sm font-medium text-foreground"><svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>A tool consolidation no one has the bandwidth to lead</li>
</ul>
<p className="mt-5 text-sm leading-relaxed text-muted-foreground">If any of these sound familiar, that's exactly when a matched specialist helps most.</p>
</div>
</div>
</section>

{/* HOW IT WORKS */}
<section id="how-it-works" className="scroll-mt-20 border-y border-white/5 bg-white/[0.015]">
<div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
<div className="mx-auto max-w-2xl text-center">
<span className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</span>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">From coverage gap to the right introduction</h2>
<p className="mt-4 text-lg text-muted-foreground">Three steps to extend your team with the right partner.</p>
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
At no cost to IT leaders
</span>
<h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">What does it cost you? Nothing.</h2>
<p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
Getting matched and talking to a partner is at no cost to you — no fee, no markup, no subscription on your side, ever. The way we make money is simple: when you engage a partner we introduced, that partner pays us. You never pay us.
</p>
<p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
<strong className="text-foreground">You're always in control of the cost.</strong> We never add a markup. You agree your rate directly with each partner, up front — and because we introduce you to two or three, you can compare and choose on fit and terms before you commit to anyone.
</p>
<div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
<span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-foreground">At no cost to you</span>
<span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-foreground">No obligation</span>
<span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-foreground">You agree the rate directly</span>
</div>
</div>
</div>
</section>

{/* SPECIALISTS */}
<section id="specialists" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20 md:py-24">
<div className="grid items-center gap-12 lg:grid-cols-2">
<div>
<span className="text-sm font-semibold uppercase tracking-wider text-primary">Independent experts & firms</span>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">One focus, every layer of your monitoring stack</h2>
<p className="mt-4 text-lg leading-relaxed text-muted-foreground">
We focus only on monitoring and observability — that's the whole network. We match you on the stack and needs you describe, and you evaluate each introduction directly.
</p>
<div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
<p className="text-base font-semibold text-foreground">Are you a monitoring & observability expert or firm?</p>
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
ITMonitoring.com is a referral network built only for monitoring and observability — not a reseller of tools or software, and not the party doing the technical work. We connect you with an independent expert or firm who does. We shortlist based on the expertise each partner describes and the needs you share; we don't vet, screen, or endorse them, and any due diligence is yours. Partners are independent businesses or individuals — some may recommend or provide tools as part of their own work, and anything you buy is agreed directly with them. You engage the partner you choose directly, that partner pays us, and you're told exactly how it works upfront, every time.
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
<p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">Take the assessment. We'll personally review your responses and introduce you to the partners who best fit your stack. No obligation, no pitch.</p>
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
