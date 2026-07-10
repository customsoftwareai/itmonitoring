import type { Metadata } from "next"
import { SiteNav, SiteFooter } from "@/components/SiteChrome"
import { ZohoFormEmbed } from "@/components/ZohoFormEmbed"

export const metadata: Metadata = {
title: "Contact | ITMonitoring.com",
description:
"Get in touch with ITMonitoring.com. Ask a question or tell us about your monitoring and observability needs, and we'll point you to the right independent specialist.",
}

export default function ContactPage() {
return (
<div className="flex min-h-screen flex-col bg-background">
<SiteNav />
<main id="main-content" role="main" className="flex-1">
<section className="relative overflow-hidden border-b border-white/5">
<div className="pointer-events-none absolute left-1/2 top-[-30%] h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" aria-hidden="true" />
<div className="relative mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
<span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
<h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
Get in touch
</h1>
<p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
Have a question, or want to tell us about your monitoring and observability needs? Send us a note and we'll get back to you. Ready to be matched with a specialist? The 2-minute assessment is the fastest way.
</p>
</div>
</section>
<section className="mx-auto w-full max-w-3xl px-6 py-12">
<ZohoFormEmbed
  title="Contact ITMonitoring.com"
  src="https://forms.itmonitoring.com/access/form/ITMonitoringcomContact/formperma/qsN4BvNMYZc_th4HCXr9xuNW680zXtQ5GXnlVJz27UA"
/>
</section>
</main>
<SiteFooter />
</div>
)
}
