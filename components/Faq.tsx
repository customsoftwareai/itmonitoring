"use client"

import * as Accordion from "@radix-ui/react-accordion"

const FAQS = [
  {
    q: "Does ITMonitoring.com provide the monitoring service itself?",
    a: "No. We're an independent matching service. We don't sell tools, software, or consulting, and we don't do the technical work ourselves. What we do is connect you with vetted specialists who analyze your stack and help solve your infrastructure and monitoring challenges. You're told that upfront, every time.",
  },
  {
    q: "How does the matching process work?",
    a: "You start with a short assessment that surfaces where your monitoring has gaps — downtime exposure, blind spots, alert noise, or tool sprawl. From there, we introduce you to one or more vetted specialists suited to your specific environment. There's no obligation, and nothing to buy from us.",
  },
  {
    q: "What does it cost to be introduced?",
    a: "Getting matched and having an introductory conversation is free and carries no obligation. Any engagement you choose to pursue afterward is arranged directly between you and the specialist.",
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
    q: "How are specialists vetted?",
    a: "Specialists join our network through an application and review process focused on real, hands-on monitoring and infrastructure experience — so the introductions you receive are relevant and credible, not cold vendor outreach.",
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
