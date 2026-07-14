"use client"

import * as Accordion from "@radix-ui/react-accordion"

const FAQS = [
{
q: "What does it cost to use ITMonitoring.com?",
a: "Nothing. Getting matched and talking to a partner is at no cost to you and carries no obligation — there's no fee, markup, or subscription on your side. The only thing you'd ever pay goes directly to a partner you choose to engage, at a rate you agree with them.",
},
{
q: "If it's at no cost to me, how does ITMonitoring.com make money?",
a: "When you engage a partner we introduced, that partner pays us. That's the entire model — it's how the service stays at no cost to the IT leaders we work with, and it means you never pay us anything. We never add a markup, and you agree your rate directly with the partner.",
},
{
q: "Does ITMonitoring.com provide the monitoring service itself?",
a: "No. We're a referral network built only for monitoring and observability. We don't sell tools, software, or consulting, and we don't do the technical work ourselves. What we do is introduce you to independent experts or firms who do — you engage the one you choose directly. You're told that upfront, every time.",
},
{
q: "How does the matching process work?",
a: "You start with a short assessment that surfaces where your monitoring has gaps — downtime exposure, blind spots, alert noise, or tool sprawl — plus space to describe your environment in your own words. Based on what you share, we introduce you to the two or three partners who best fit your stack, with a clear read on how each one fits. Once you choose, you engage that partner directly. There's no obligation, and nothing to buy from us.",
},
{
q: "How many partners will you introduce me to?",
a: "Usually two or three. Based on your assessment, we match you to the partners who best fit what you described, then explain how each one fits so you can choose with confidence. If none is right, just tell us and we'll dig deeper until we find the right fit — we're not a directory that hands you a list and walks away.",
},
{
q: "What kinds of problems do the partners handle?",
a: "Infrastructure and server monitoring, network monitoring, application performance (APM), cloud and Kubernetes visibility, observability and logging, security and SIEM monitoring, and reducing alert fatigue and tool sprawl — across most major platforms.",
},
{
q: "Do you work with organizations outside the United States?",
a: "Yes. Our partners serve clients remotely across borders, so we can make relevant introductions regardless of where your team is based.",
},
{
q: "How do you choose which partners to introduce?",
a: "We're a referral network — not a vetting, certification, or background-check service. We don't screen, verify, or endorse partners, and we don't guarantee their work. We match you based on the experience each partner describes and the needs you share, then make the introduction so you can evaluate them and decide for yourself. Any due diligence is always yours.",
},
]

export function Faq() {
return (
<Accordion.Root type="single" collapsible className="space-y-3">
{FAQS.map((item, i) => (
<Accordion.Item key={i} value={`item-${i}`} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
<Accordion.Header>
<Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-foreground transition-colors hover:bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
<span>{item.q}</span>
<svg className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
<path d="m6 9 6 6 6-6" />
</svg>
</Accordion.Trigger>
</Accordion.Header>
<Accordion.Content className="acc-content overflow-hidden">
<p className="px-6 pb-6 pt-0 text-[15px] leading-relaxed text-muted-foreground">{item.a}</p>
</Accordion.Content>
</Accordion.Item>
))}
</Accordion.Root>
)
}
