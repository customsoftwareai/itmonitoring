import type { Metadata } from "next"
import { LegalPage, LegalLink, type LegalContent } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Terms of Use | ITMonitoring.com",
  description:
    "The Terms of Use governing your access to and use of the ITMonitoring.com website, forms, content, communications, and related services.",
}

const content: LegalContent = {
  title: "Terms of Use",
  effectiveDate: "July 14, 2026",
  intro: [
    { type: "p", text: "ITMonitoring.com is owned and operated by Event Media 770 Corp." },
    {
      type: "p",
      text: "Welcome to ITMonitoring.com. These Terms of Use govern your access to and use of the ITMonitoring.com website, forms, content, communications, and related services. In these Terms of Use, “Company,” “ITMonitoring.com,” “we,” “us,” and “our” refer to Event Media 770 Corp.",
    },
    {
      type: "p",
      text: "By accessing this website, submitting information through our forms, communicating with us, or using any part of our services, you agree to these Terms of Use. If you do not agree, you should not use this website or submit information through it.",
    },
    {
      type: "p",
      text: (
        <>
          Your use of the website and submission of information are also subject to our{" "}
          <LegalLink href="/privacy">Privacy Policy</LegalLink>, which explains how we collect, use, disclose, share,
          and protect information.
        </>
      ),
    },
  ],
  body: [
    { type: "section", n: "1", title: "About ITMonitoring.com" },
    {
      type: "p",
      text: "ITMonitoring.com is a referral network that connects IT leaders and organizations with independent IT monitoring and observability specialists, firms, and providers. We provide intake, matching, referral, and introduction services for individuals and organizations seeking help with infrastructure monitoring, observability, alert optimization, application and network performance monitoring, logging, and related IT monitoring needs.",
    },
    {
      type: "p",
      text: "ITMonitoring.com does not vet, screen, verify, certify, endorse, or guarantee any specialist, partner, or service provider. We do not independently confirm the credentials, qualifications, experience, references, background, work history, licensing, insurance, or quality of any specialist. Specialists are included in our network based on the information they provide about themselves, and any match is based on that self-described experience and stated fit. You are solely responsible for evaluating, verifying, and selecting any specialist, and for conducting your own due diligence before engaging them.",
    },
    {
      type: "p",
      text: "ITMonitoring.com may collect information from prospective customers and share that information with the independent monitoring and observability specialists we match to the requested engagement.",
    },
    {
      type: "p",
      text: "Unless expressly stated in a separate written agreement signed by ITMonitoring.com, ITMonitoring.com does not itself design, implement, configure, host, maintain, manage, or deliver any monitoring system, observability solution, software, or related service; that work is performed by the independent specialist, firm, or provider you choose to engage, who is an independent business and may recommend or provide its own tools or software as part of its work. Our service is at no cost to IT leaders. We are compensated by the specialists, firms, and providers in our network — through referral fees, commissions, or other arrangements — when we introduce or place them with you.",
    },
    { type: "section", n: "2", title: "No Guarantee of Specialist Engagement or Project Results" },
    { type: "p", text: "Submitting information through ITMonitoring.com does not guarantee that:" },
    {
      type: "ul",
      items: [
        "Any specialist or partner will contact you;",
        "Any specialist or partner will accept your engagement;",
        "Any engagement will be approved, quoted, funded, started, completed, or maintained;",
        "Your engagement can be completed within your desired budget or timeline;",
        "Any specific technical result, business outcome, cost savings, uptime improvement, reduction in alert noise, mean-time-to-resolution improvement, security outcome, compliance outcome, or performance level will be achieved; or",
        "Any referred specialist will be suitable for your needs.",
      ],
    },
    {
      type: "p",
      text: "Any services provided by a third-party specialist or partner are subject to that specialist’s or partner’s own agreements, pricing, qualifications, timelines, scope of work, warranties, limitations, data practices, intellectual property terms, support policies, and business practices.",
    },
    { type: "section", n: "3", title: "Referral and Information Sharing Disclosure" },
    {
      type: "p",
      text: "By submitting a form, completing an assessment, requesting information, scheduling a consultation, or otherwise providing your information to ITMonitoring.com, you authorize ITMonitoring.com to review your information and, where appropriate, share it with one or more independent specialists we match to your inquiry who may contact you about your engagement.",
    },
    {
      type: "p",
      text: "ITMonitoring.com may receive referral fees, commissions, residual or recurring compensation, network membership fees, or other compensation from the specialists, firms, and providers in our network if you are referred to them, communicate with them, engage them, or enter into a business relationship with them.",
    },
    {
      type: "p",
      text: "You understand and agree that ITMonitoring.com may have a financial or business relationship with the specialists, firms, and providers to whom your information is referred, and may receive ongoing or recurring compensation in connection with your engagement. Our service is at no cost to you; you agree any rate or fee directly with the specialist, firm, or provider you choose to engage, and ITMonitoring.com does not add any markup to what you pay them.",
    },
    { type: "section", n: "4", title: "No Professional Advice" },
    {
      type: "p",
      text: "The content on this website is provided for general informational and business purposes only. It should not be considered legal, financial, accounting, tax, technical, cybersecurity, compliance, investment, or professional advice.",
    },
    {
      type: "p",
      text: "You should consult qualified advisors before making important business, legal, financial, technical, security, privacy, compliance, or operational decisions.",
    },
    { type: "section", n: "5", title: "User Responsibilities" },
    {
      type: "p",
      text: "You agree that all information you submit through the website will be accurate, current, and complete to the best of your knowledge.",
    },
    {
      type: "p",
      text: "You are responsible for evaluating any third-party specialist, consultant, firm, vendor, or service provider before entering into any agreement. You should carefully review all contracts, proposals, pricing, engagement scopes, technical specifications, ownership terms, confidentiality terms, intellectual property provisions, data security obligations, service commitments, cancellation terms, and warranties before proceeding.",
    },
    {
      type: "p",
      text: "You are solely responsible for determining whether any specialist, proposal, tool, vendor, or solution is appropriate for your business, engagement, budget, legal obligations, security requirements, and operational needs.",
    },
    { type: "section", n: "6", title: "Third-Party Specialists and Partners" },
    {
      type: "p",
      text: "ITMonitoring.com is not responsible for the acts, omissions, representations, warranties, services, pricing, proposals, contracts, deliverables, delays, errors, failures, security practices, privacy practices, support practices, or performance of any third-party specialist, partner, or service provider.",
    },
    {
      type: "p",
      text: "Any dispute between you and a third-party specialist or partner is solely between you and that specialist or partner. ITMonitoring.com is not liable for any damages, losses, claims, costs, delays, business interruption, data loss, failed engagement, system defect, monitoring gap, security incident, compliance issue, or other harm arising from your relationship with a third-party provider.",
    },
    { type: "section", n: "7", title: "No Employment, Agency, Joint Venture, or Partnership Relationship" },
    {
      type: "p",
      text: "Nothing on this website or in these Terms creates an employment, agency, joint venture, fiduciary, partnership, franchise, representative, or other special relationship between you and ITMonitoring.com or between ITMonitoring.com and any third-party provider, unless expressly agreed in a separate written contract signed by the applicable parties.",
    },
    { type: "section", n: "8", title: "Website Content and Intellectual Property" },
    {
      type: "p",
      text: "All content on this website, including text, graphics, branding, logos, layouts, designs, forms, buttons, user interface elements, copy, and other materials, is owned by or licensed to ITMonitoring.com and is protected by applicable intellectual property laws.",
    },
    {
      type: "p",
      text: "You may not copy, reproduce, distribute, modify, scrape, republish, sell, lease, create derivative works from, or otherwise exploit website content without prior written permission from ITMonitoring.com.",
    },
    { type: "section", n: "9", title: "Acceptable Use" },
    { type: "p", text: "You agree not to use this website to:" },
    {
      type: "ul",
      items: [
        "Submit false, misleading, fraudulent, unlawful, or incomplete information;",
        "Interfere with the operation, security, or availability of the website;",
        "Attempt to gain unauthorized access to systems, accounts, data, forms, databases, or networks;",
        "Upload or transmit malicious code, spam, bots, scripts, or harmful content;",
        "Scrape, harvest, or collect data from the website without authorization;",
        "Impersonate another person or entity;",
        "Violate any applicable law, regulation, contract, privacy right, intellectual property right, or third-party right.",
      ],
    },
    { type: "section", n: "10", title: "Communications Consent" },
    {
      type: "p",
      text: "By submitting your contact information, you authorize ITMonitoring.com and, where applicable, the independent specialists we match to your inquiry to contact you by email, phone, text message, voicemail, postal mail, or other communication methods regarding your inquiry, engagement, or requested services.",
    },
    {
      type: "p",
      text: "You may opt out of marketing communications at any time, but we may still send transactional, administrative, legal, or inquiry-related communications.",
    },
    {
      type: "p",
      text: "Text messaging (SMS). If you provide your mobile number and opt in, you consent to receive text messages from ITMonitoring.com and, where applicable, the independent specialists we match to your inquiry, which may be sent using automated technology, regarding your inquiry, engagement, or related services. Consent to receive text messages is not a condition of any purchase or service. Message and data rates may apply, and message frequency may vary. You can opt out at any time by replying STOP to any text message, and reply HELP for help. We will honor opt-out requests as required by law.",
    },
    { type: "section", n: "11", title: "Disclaimer of Warranties" },
    {
      type: "p",
      text: "The website and related services are provided on an “as is” and “as available” basis. ITMonitoring.com makes no warranties or representations of any kind, whether express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, completeness, availability, uptime, security, reliability, suitability, or error-free operation.",
    },
    {
      type: "p",
      text: "ITMonitoring.com does not warrant that the website will be uninterrupted, secure, available at any particular time, free of errors, free of viruses or harmful components, or that any defects will be corrected.",
    },
    { type: "section", n: "12", title: "Limitation of Liability" },
    {
      type: "p",
      text: "To the fullest extent permitted by law, ITMonitoring.com, Event Media 770 Corp., and their respective owners, officers, directors, employees, contractors, affiliates, representatives, agents, licensors, service providers, and business partners shall not be liable for any indirect, incidental, consequential, special, exemplary, punitive, enhanced, or lost-profit damages arising out of or related to your use of the website, submission of information, referral to a specialist or partner, communication with a specialist or partner, engagement with any third-party provider, or reliance on any website content.",
    },
    {
      type: "p",
      text: "This limitation applies to damages including, without limitation, lost revenue, lost profits, lost business opportunity, business interruption, loss of goodwill, loss of data, failed engagement, defective or insufficient monitoring, security incident, privacy incident, compliance failure, technology failure, or cost of substitute services.",
    },
    {
      type: "p",
      text: "To the fullest extent permitted by law, ITMonitoring.com’s total liability for any claim shall not exceed the amount, if any, you paid directly to ITMonitoring.com for the specific service giving rise to the claim.",
    },
    { type: "section", n: "13", title: "Indemnification" },
    {
      type: "p",
      text: "You agree to indemnify, defend, and hold harmless ITMonitoring.com, Event Media 770 Corp., and their respective owners, officers, directors, employees, contractors, affiliates, representatives, agents, licensors, service providers, and business partners from and against any claims, demands, damages, liabilities, losses, judgments, settlements, costs, and expenses, including reasonable attorneys’ fees, arising out of or related to:",
    },
    {
      type: "ul",
      items: [
        "Your use of the website;",
        "Your submitted information;",
        "Your violation of these Terms;",
        "Your violation of applicable law or third-party rights;",
        "Your communications, agreements, or dealings with third-party providers;",
        "Any engagement, monitoring system, observability solution, or technology solution you pursue with a third party;",
        "Any misrepresentation or inaccurate information you provide.",
      ],
    },
    { type: "section", n: "14", title: "Third-Party Links" },
    {
      type: "p",
      text: "This website may contain links to third-party websites or services. ITMonitoring.com is not responsible for the content, privacy practices, security, availability, accuracy, statements, offers, or practices of third-party websites or services.",
    },
    { type: "p", text: "Accessing third-party links is at your own risk." },
    { type: "section", n: "15", title: "Changes to These Terms" },
    {
      type: "p",
      text: "We may update these Terms from time to time. The updated version will be posted on this page with a revised effective date. Your continued use of the website after updated Terms are posted constitutes acceptance of the updated Terms.",
    },
    { type: "section", n: "16", title: "Governing Law" },
    {
      type: "p",
      text: "These Terms and any dispute, claim, or controversy arising out of or relating to these Terms, the website, any submitted inquiry, any referral, any communication with ITMonitoring.com, or any relationship with ITMonitoring.com shall be governed by the laws of the State of New York, without regard to conflict-of-law principles.",
    },
    { type: "section", n: "17", title: "Binding Arbitration; American Arbitration Association; New York Venue" },
    {
      type: "p",
      text: "Please read this section carefully. It requires certain disputes to be resolved through binding arbitration rather than in court, except where prohibited by law or expressly stated below.",
    },
    { type: "subsection", title: "17.1 Agreement to Arbitrate" },
    {
      type: "p",
      text: "To the fullest extent permitted by law, any dispute, claim, demand, cause of action, or controversy arising out of or relating to these Terms, the website, your use of the website, any form submission, any inquiry, any referral, any communication with ITMonitoring.com, any alleged privacy or data-related issue, any compensation or referral arrangement, or any relationship or interaction with ITMonitoring.com shall be resolved exclusively by final and binding arbitration administered by the American Arbitration Association (AAA).",
    },
    { type: "subsection", title: "17.2 AAA Rules" },
    {
      type: "p",
      text: "The arbitration shall be administered by the American Arbitration Association under its applicable rules, including, where applicable, the AAA Commercial Arbitration Rules or other AAA rules determined by the AAA to apply to the dispute.",
    },
    {
      type: "p",
      text: "If there is any conflict between these Terms and the applicable AAA rules, these Terms shall control to the fullest extent permitted by law, unless the AAA rules or applicable law require otherwise.",
    },
    { type: "subsection", title: "17.3 Location and Venue of Arbitration" },
    {
      type: "p",
      text: "The arbitration shall take place in New York, New York, unless the parties mutually agree in writing to conduct the arbitration remotely, by video conference, by telephone, or based on written submissions.",
    },
    {
      type: "p",
      text: "The parties agree that New York, New York is a convenient and appropriate venue for arbitration. The arbitrator shall have authority to permit remote appearances, virtual hearings, or other procedures designed to reduce cost and improve efficiency.",
    },
    { type: "subsection", title: "17.4 Authority of the Arbitrator" },
    {
      type: "p",
      text: "The arbitrator shall have authority to resolve all issues submitted to arbitration, including issues relating to the interpretation, applicability, enforceability, or formation of this arbitration agreement, except where applicable law requires a court to decide a particular issue.",
    },
    {
      type: "p",
      text: "The arbitrator may award any individual relief that would be available in a court of competent jurisdiction, subject to the limitations of liability, disclaimers, and other terms set forth in these Terms.",
    },
    { type: "subsection", title: "17.5 Individual Claims Only; No Class Actions" },
    {
      type: "p",
      text: "To the fullest extent permitted by law, all disputes shall be brought and resolved only on an individual basis. You and ITMonitoring.com agree that neither party may bring or participate in any class action, collective action, consolidated action, representative action, private attorney general action, or similar proceeding in arbitration or in court.",
    },
    {
      type: "p",
      text: "The arbitrator may not consolidate the claims of multiple persons or entities and may not preside over any class, collective, consolidated, or representative proceeding, unless both parties expressly agree in writing.",
    },
    { type: "subsection", title: "17.6 Jury Trial Waiver" },
    {
      type: "p",
      text: "To the fullest extent permitted by law, you and ITMonitoring.com knowingly and voluntarily waive any right to a trial by jury for any dispute, claim, or controversy arising out of or relating to these Terms, the website, any submitted inquiry, any referral, or any relationship with ITMonitoring.com.",
    },
    { type: "subsection", title: "17.7 Court Proceedings for Limited Purposes" },
    {
      type: "p",
      text: "Notwithstanding the agreement to arbitrate, either party may seek temporary, preliminary, or emergency injunctive relief in a court of competent jurisdiction to protect intellectual property, confidential information, data, systems, business relationships, or other rights pending the appointment of an arbitrator or final resolution of the dispute.",
    },
    {
      type: "p",
      text: "Either party may also bring an action in court to compel arbitration, stay court proceedings, confirm an arbitration award, modify an arbitration award, or enforce an arbitration award.",
    },
    { type: "subsection", title: "17.8 Fees and Costs" },
    {
      type: "p",
      text: "Arbitration fees and costs shall be allocated in accordance with the applicable AAA rules, unless otherwise required by law or ordered by the arbitrator. Each party shall be responsible for its own attorneys’ fees and costs unless a statute, contract, or arbitrator’s award provides otherwise.",
    },
    { type: "subsection", title: "17.9 Confidentiality of Arbitration" },
    {
      type: "p",
      text: "To the fullest extent permitted by law, the arbitration proceeding, submissions, evidence, testimony, documents, settlement discussions, and award shall be kept confidential, except as necessary to conduct the arbitration, comply with law, enforce or challenge an award, seek judicial relief, or disclose information to legal, accounting, tax, insurance, or other professional advisors.",
    },
    { type: "subsection", title: "17.10 Time Limit to Bring Claims" },
    {
      type: "p",
      text: "To the fullest extent permitted by law, any claim or dispute arising out of or relating to these Terms, the website, any submitted inquiry, any referral, or any relationship with ITMonitoring.com must be brought within one (1) year after the claim accrues. Any claim not brought within that period is permanently barred, unless applicable law requires a longer period.",
    },
    { type: "subsection", title: "17.11 Severability of Arbitration Terms" },
    {
      type: "p",
      text: "If any part of this arbitration section is found to be invalid or unenforceable, the remaining portions shall remain in full force and effect to the fullest extent permitted by law. If the class action waiver is found to be invalid or unenforceable as to a particular claim or request for relief, then that claim or request for relief shall proceed in court and not in arbitration, unless otherwise permitted by law.",
    },
    { type: "subsection", title: "17.12 Your Right to Opt Out of Arbitration" },
    {
      type: "p",
      text: "You may opt out of the agreement to arbitrate in this Section 17 by sending written notice to ITMonitoring.com within thirty (30) days after you first accept these Terms. Your notice must include your name, the email address and mailing address associated with your use of the website, and a clear statement that you wish to opt out of arbitration, and must be sent to legal@itmonitoring.com or by certified mail to the address in the Notices section. If you opt out, the jury trial waiver and class action waiver in this Section 17 will not apply to you, but all other provisions of these Terms will remain in effect. Opting out of arbitration will not affect any other aspect of your relationship with ITMonitoring.com.",
    },
    { type: "section", n: "18", title: "General Provisions" },
    {
      type: "p",
      text: "18.1 Modifications to and Availability of the Website. We may change, suspend, limit, or discontinue the website, or any feature or content, at any time and without notice. We do not guarantee that the website will always be available or available in any particular location.",
    },
    {
      type: "p",
      text: "18.2 Termination and Suspension of Access. We may suspend, restrict, or terminate your access to the website at any time, with or without notice, including if we believe you have violated these Terms or applicable law.",
    },
    {
      type: "p",
      text: (
        <>
          18.3 Entire Agreement. These Terms, together with our{" "}
          <LegalLink href="/privacy">Privacy Policy</LegalLink> and any notices posted on the website, constitute the
          entire agreement between you and ITMonitoring.com regarding the website and supersede any prior or
          contemporaneous agreements or understandings on that subject.
        </>
      ),
    },
    {
      type: "p",
      text: "18.4 Severability. If any provision of these Terms is held to be invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.",
    },
    {
      type: "p",
      text: "18.5 Assignment. You may not assign or transfer these Terms, or any rights or obligations under them, without our prior written consent. We may assign these Terms, in whole or in part, without restriction.",
    },
    {
      type: "p",
      text: "18.6 No Waiver. Our failure to enforce any provision of these Terms is not a waiver of that provision or of our right to enforce it later.",
    },
    {
      type: "p",
      text: "18.7 Force Majeure. We are not liable for any delay or failure to perform resulting from causes beyond our reasonable control, including acts of God, natural disasters, outages, failures of third-party services, labor disputes, or governmental actions.",
    },
    {
      type: "p",
      text: "18.8 Survival. Provisions that by their nature should survive termination of these Terms will survive, including disclaimers, limitations of liability, indemnification, intellectual property terms, and dispute resolution provisions.",
    },
    {
      type: "p",
      text: "18.9 Electronic Communications and Records. You consent to receive communications, agreements, and notices from us electronically, and you agree that electronic communications and records satisfy any legal requirement that such communications or records be in writing.",
    },
    {
      type: "p",
      text: "18.10 Headings. Section headings are for convenience only and do not affect the interpretation of these Terms.",
    },
    { type: "section", n: "19", title: "Notices" },
    {
      type: "p",
      text: "All legal notices to ITMonitoring.com or Event Media 770 Corp. must be sent by certified mail, return receipt requested, to the following address:",
    },
    {
      type: "ul",
      items: ["Event Media 770 Corp.", "PO Box 597", "Lawrence, NY 11516-2242"],
    },
    {
      type: "p",
      text: "Notices shall be deemed given when received, as shown by certified mail return receipt, delivery confirmation, or other reliable written proof of delivery.",
    },
    {
      type: "p",
      text: "For general business inquiries, you may contact ITMonitoring.com at legal@itmonitoring.com or through the contact methods provided on the website. General business communications do not replace the certified mail notice requirement for legal notices.",
    },
    { type: "section", n: "20", title: "Company Information" },
    { type: "p", text: "ITMonitoring.com is owned and operated by:" },
    {
      type: "ul",
      items: ["Event Media 770 Corp.", "499 Chestnut Street", "Cedarhurst, NY 11516"],
    },
    { type: "section", n: "21", title: "Contact Us" },
    {
      type: "p",
      text: "For general questions about these Terms, contact us at legal@itmonitoring.com or through the contact information provided on the ITMonitoring.com website.",
    },
    { type: "p", text: "Legal notices must be sent in accordance with the Notices section above." },
  ],
}

export default function TermsPage() {
  return <LegalPage content={content} />
}
