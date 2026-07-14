import type { Metadata } from "next"
import Link from "next/link"
import { SiteNav, SiteFooter } from "@/components/SiteChrome"

export const metadata: Metadata = {
title: "About | ITMonitoring.com — Staff augmentation for IT monitoring & observability",
description:
"ITMonitoring.com is a staff augmentation network that connects IT leaders with independent monitoring and observability specialists. Free to you; the specialist pays our fee.",
}

const PRINCIPLES = [
{ title: "One specialty only", body: "Every specialist in our network works exclusively in monitoring and observability — never as a generalist." },
{ title: "Independent, not ours", body: "Specialists are independent. You engage the one you choose directly, and any due diligence is yours." },
{ title: "Free to IT leaders", body: "You never pay us. Specialists pay a referral fee when we place them with you — so we match on fit, not on who pays most." },
]

export default function AboutPage() {
return (
<div className="flex min-h-screen flex-col bg-background">
<SiteNav />

<main id="main-content" role="main" className="flex-1">
{/* HERO */}
<section className="relative overflow-hidden">
<div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
<div className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" aria-hidden="true" />
<div className="relative mx-auto max-w-4xl px-6 pb-20 pt-20 text-center md:pt-28">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted-foreground">
<span className="h-1.5 w-1.5 rounded-full bg-primary" /> About ITMonitoring.com
</span>
<h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
We do one thing:
<span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent pb-[0.2em]">staff augmentation for IT monitoring & observability</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
ITMonitoring.com connects IT leaders with independent specialists who embed with your team when monitoring coverage gets stretched — matched to your stack, and free to you.
</p>
</div>
</section>

{/* WHAT WE DO */}
<section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
<h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">What we do</h2>
<div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
<p>We're a staff augmentation network built only for monitoring and observability. When your coverage is stretched — a migration, a growth spurt, mounting alert noise, or an audit on the calendar — we introduce you to independent specialists who already live in this space and know stacks like yours.</p>
<p>They slot in alongside your team and extend your coverage for as long as you need. We don't sell tools or software, and we don't do the technical work ourselves — the specialist you engage does. We simply make the right introduction, based on what you tell us.</p>
</div>
</section>

{/* PRINCIPLES */}
<section className="border-y border-white/5 bg-white/[0.015]">
<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
<div className="grid gap-6 md:grid-cols-3">
{PRINCIPLES.map((p) => (
<div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
<h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
<p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
</div>
))}
</div>
</div>
</section>

{/* HOW IT STAYS FREE */}
<section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
<h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">How the service stays free</h2>
<div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
<p>Getting matched and talking to a specialist costs you nothing — no fee, no markup, no subscription, ever. Our specialists pay us a referral fee when we place them with you, which is how the service stays free for the IT leaders we work with.</p>
<p>The only thing you would ever pay goes to a specialist directly, and only if you choose to engage one. Because our fee comes from the specialist side, we match you on fit for your environment — never on who pays us most.</p>
</div>
</section>

{/* TRANSPARENCY */}
<section className="mx-auto max-w-6xl px-6 pb-4">
<div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12">
<div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" aria-hidden="true" />
<div className="relative max-w-3xl">
<h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Transparent by design</h2>
<p className="mt-4 text-lg leading-relaxed text-muted-foreground">
We're a staff augmentation network — not a reseller of tools or software, and not the party doing the technical work. We don't vet, screen, or endorse specialists; they're included in our network based on the experience they describe, and any match is based on that and the needs you share. You engage the specialist you choose directly, and any due diligence is yours. You're told exactly how it works upfront, every time.
</p>
</div>
</div>
</section>

{/* WHO WE ARE */}
<section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
<h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Who we are</h2>
<div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
<p>ITMonitoring.com is owned and operated by Event Media 770 Corp., based in Cedarhurst, New York.</p>
<p>For details on how we handle your information and the terms that govern the site, see our Privacy Policy and Terms of Use, linked in the footer.</p>
</div>
</section>

{/* FINAL CTA */}
<section className="mx-auto max-w-6xl px-6 pb-24 pt-4">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-16 text-center">
<div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" aria-hidden="true" />
<div className="relative">
<h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">See where your monitoring stands</h2>
<p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">Take the assessment and we'll match you with a specialist who fits your stack. No obligation, no pitch.</p>
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
