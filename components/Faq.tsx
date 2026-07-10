"use client"

import * as Accordion from "@radix-ui/react-accordion"

const FAQS = [
{
q: "What does it cost to use ITMonitoring.com?",
a: "Nothing. Getting matched and having an introductory conversation with a specialist is at no cost to you and carries no obligation — there's no fee, markup, or subscription on your side. The only thing you'd ever pay goes to a specialist directly, and only if you choose to engage one.",
},
{
q: "If it's at no cost to me, how does ITMonitoring.com make money?",
a: "Our specialists pay us a referral fee when we place them with a client. That's the entire model — it's how the service stays at no cost to the IT leaders we work with, and it means you never pay us anything. We match you on fit, for your environment, not on who pays us most.",
},
{
q: "Does ITMonitoring.com provide the monitoring service itself?",
a: "No. We're a staff augmentation network built only for monitoring and observability. We don't sell tools, software, or consulting, and we don't do the technical work ourselves. What we do is place independent specialists who embed with your team and help extend your monitoring and observability coverage. You're told that upfront, every time.",
},
{
q: "How does the matching process work?",
a: "You start with a short assessment that surfaces where your monitoring has gaps — downtime exposure, blind spots, alert noise, or tool sprawl — plus space to describe your environment in your own words. Based on what you share, we match you to the two or three specialists who best fit your stack, with a clear read on how each one fits. All work only in monitoring and observability, and once you choose, the specialist embeds with your team. There's no obligation, and nothing to buy from us.",
},
{
q: "How many specialists will you introduce me to?",
a: "Usually two or three. Based on your assessment, we match you to the specialists who best fit what you described, then explain how each one fits so you can choose with confidence. If none is right, just tell us and we'll dig deeper until we find the right person — we're not a directory that hands you a list and walks away.",
},
{
q: "What kinds of problems do the specialists handle?",
a: "Infrastructure and server monitoring, network monitoring, application performance (APM), cloud and Kubernetes visibility, observability and logging, security and SIEM monitoring, and reducing alert fatigue and tool sprawl — across most major platforms.",
},
{
q: "Do you work with organizations outside the United States?",
a: "Yes. Our specialists serve clients remotely across borders, so we can make relevant introductions regardless of where your team is based.",
},
{
q: "How do you choose which specialists to introduce?",
a: "We're a staff augmentation network — not a vetting, certification, or background-check service. We don't screen, verify, or endorse specialists, and we don't guarantee their work. We match you based on the experience specialists describe and the needs you share, then make the introduction so you can evaluate them and decide for yourself. Any due diligence is always yours.",
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
