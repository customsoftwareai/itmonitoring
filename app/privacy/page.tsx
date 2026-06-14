import type { Metadata } from "next"
import { LegalPage, type LegalContent } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Privacy Policy | ITMonitoring.com",
  description:
    "How ITMonitoring.com (Event Media 770 Corp.) collects, uses, discloses, shares, stores, and protects your information.",
}

const content: LegalContent = {
  title: "Privacy Policy",
  effectiveDate: "June 14, 2026",
  intro: [
    { type: "p", text: "ITMonitoring.com is owned and operated by Event Media 770 Corp." },
    {
      type: "p",
      text: "Event Media 770 Corp. (“Company,” “ITMonitoring.com,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, share, store, and protect information when you visit our website, submit forms, complete an assessment, communicate with us, or use our services.",
    },
    {
      type: "p",
      text: "By using the website or submitting information to ITMonitoring.com, you acknowledge that you have read and understood this Privacy Policy.",
    },
    {
      type: "p",
      text: "This Privacy Policy should be read together with our Terms of Use, which govern your use of the website and include important disclaimers, limitations of liability, and dispute resolution provisions.",
    },
  ],
  body: [
    { type: "section", n: "1", title: "Information We Collect" },
    { type: "p", text: "We may collect the following categories of information." },
    { type: "subsection", title: "1.1 Information You Provide Directly" },
    {
      type: "p",
      text: "When you complete our IT monitoring assessment, careers application, or other forms, this may include:",
    },
    {
      type: "ul",
      items: [
        "Name;",
        "Company name and organizational structure;",
        "Job title or role;",
        "Email address;",
        "Phone number;",
        "Website URL;",
        "Business address, general location, or timezone;",
        "Description of your current infrastructure (cloud, on-premises, or hybrid; scale; technology stack);",
        "Monitoring, observability, alerting, and reliability challenges or gaps;",
        "Description of your ideal specialist profile (experience, skills, availability);",
        "Engagement goals, budget range, and timeline;",
        "For specialist and careers applicants: resume or CV, LinkedIn profile, work history, references, and skills;",
        "Communications you send to us;",
        "Any other information you choose to submit through our forms or communications.",
      ],
    },
    { type: "subsection", title: "1.2 Information Collected Automatically" },
    {
      type: "p",
      text: "When you visit our website, we may collect certain technical and usage information, such as:",
    },
    {
      type: "ul",
      items: [
        "IP address;",
        "Browser type;",
        "Device type;",
        "Operating system;",
        "Pages visited;",
        "Referring website;",
        "Date and time of visit;",
        "Approximate location derived from IP address;",
        "Interactions with website content, buttons, forms, or pages;",
        "General usage, analytics, and diagnostic data.",
      ],
    },
    { type: "subsection", title: "1.3 Communications Information" },
    {
      type: "p",
      text: "If you contact us by email, phone, form submission, calendar booking, text message, or other means, we may collect and retain records of those communications, including contact details, message content, metadata, and follow-up history.",
    },
    { type: "section", n: "2", title: "How We Use Information" },
    { type: "p", text: "We may use information for the following purposes:" },
    {
      type: "ul",
      items: [
        "To review and respond to your inquiry or assessment;",
        "To understand your infrastructure monitoring, observability, alerting, and reliability needs;",
        "To research your stated environment and evaluate whether your inquiry may be appropriate for one or more specialists or partners;",
        "To match you with relevant IT monitoring specialists, observability consultants, boutique monitoring firms, monitoring and observability platforms, technology vendors, or other service providers;",
        "To share your information with selected specialists and partners who may contact you about your engagement;",
        "To communicate with you about your engagement, inquiry, or related services;",
        "To provide research, matching, referral, lead intake, business development, or related services;",
        "To evaluate, vet, and onboard specialists who apply to join our network;",
        "To operate, maintain, improve, and secure the website;",
        "To improve our forms, content, processes, services, and specialist network;",
        "To manage business records, CRM data, lead tracking, and referral records;",
        "To send administrative, transactional, legal, or marketing communications;",
        "To measure marketing effectiveness and website performance;",
        "To comply with legal obligations;",
        "To protect our rights, users, specialists, partners, website, systems, and business.",
      ],
    },
    { type: "section", n: "3", title: "Sharing Information with Specialists and Partners" },
    {
      type: "p",
      text: "Because ITMonitoring.com operates as an independent intake, research, matching, referral, and business development service, we may share your submitted information with selected third-party specialists and partners who may be able to help with your engagement.",
    },
    {
      type: "p",
      text: "These specialists and partners may include independent IT monitoring consultants, observability specialists, boutique monitoring firms, application performance monitoring (APM) experts, network and infrastructure monitoring practitioners, logging and SIEM specialists, monitoring and observability platforms, technology vendors, implementation firms, or related service providers.",
    },
    {
      type: "p",
      text: "By submitting your information, you authorize ITMonitoring.com to share your information with such specialists and partners so they may evaluate your inquiry and contact you regarding your engagement or related services. Typically, we narrow recommendations to a small number of best-matched specialists and secure their availability before introducing them to you.",
    },
    {
      type: "p",
      text: "ITMonitoring.com may receive referral fees, marketing fees, lead generation fees, commissions, revenue share, network membership fees, or other compensation from specialists and service partners. Our service is free to you, and we do not take a commission on hours billed by the specialist you choose to engage.",
    },
    {
      type: "p",
      text: "ITMonitoring.com does not sell your personal information. We share your information with specialists and partners only to provide our matching and referral service, as described in this Privacy Policy.",
    },
    { type: "section", n: "4", title: "Other Ways We May Share Information" },
    { type: "p", text: "We may also share information:" },
    {
      type: "ul",
      items: [
        "With vendors who help us operate our website, hosting, forms, CRM, email, analytics, scheduling, communications, data storage, security, or business systems;",
        "With legal, accounting, compliance, insurance, or professional advisors;",
        "With service providers who process information on our behalf;",
        "If required by law, subpoena, court order, legal process, regulator request, or governmental request;",
        "To protect our rights, privacy, safety, users, specialists, partners, website, systems, property, or business;",
        "To investigate suspected fraud, abuse, security incidents, unauthorized access, or unlawful activity;",
        "In connection with a merger, acquisition, sale, financing, restructuring, bankruptcy, transfer, or other disposition of all or part of our business or assets.",
      ],
    },
    { type: "section", n: "5", title: "Cookies and Tracking Technologies" },
    {
      type: "p",
      text: "We may use cookies, pixels, analytics tools, and similar technologies to operate the website, understand visitor behavior, improve performance, measure marketing effectiveness, remember preferences, and enhance user experience.",
    },
    {
      type: "p",
      text: "You may be able to disable cookies through your browser settings, but some website features may not function properly.",
    },
    { type: "section", n: "6", title: "Analytics and Advertising" },
    {
      type: "p",
      text: "We may use analytics tools to understand how visitors use the website, what pages they visit, what forms they interact with, and how the website performs.",
    },
    {
      type: "p",
      text: "We may use marketing or advertising tools to measure campaign performance, understand traffic sources, or communicate with users who have shown interest in our services. If we later implement additional advertising, remarketing, or tracking technologies, we may update this Privacy Policy to describe those practices in more detail.",
    },
    { type: "section", n: "7", title: "Referral and Compensation Disclosure" },
    {
      type: "p",
      text: "ITMonitoring.com may receive compensation from third-party specialists and service partners in connection with referrals, leads, introductions, engagement opportunities, network membership, or resulting business relationships.",
    },
    {
      type: "p",
      text: "The information you submit may be used to determine which specialist or partner may be appropriate for your inquiry. Specialists and partners may contact you directly using the contact information you provide.",
    },
    { type: "section", n: "8", title: "Data Security" },
    {
      type: "p",
      text: "We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. However, no website, transmission, database, email system, CRM system, or electronic storage method is completely secure.",
    },
    {
      type: "p",
      text: "You acknowledge that you submit information at your own risk and that ITMonitoring.com cannot guarantee absolute security.",
    },
    { type: "section", n: "9", title: "Data Retention" },
    {
      type: "p",
      text: "We retain information for as long as reasonably necessary for the purposes described in this Privacy Policy, including to respond to inquiries, maintain business records, manage specialist and partner referrals, comply with legal obligations, resolve disputes, enforce agreements, protect our rights, and maintain historical records of communications and referrals.",
    },
    {
      type: "p",
      text: "We may retain certain information even after an inquiry is closed if retention is reasonably necessary for legal, accounting, compliance, fraud prevention, dispute resolution, or business recordkeeping purposes.",
    },
    { type: "section", n: "10", title: "Your Choices" },
    {
      type: "p",
      text: "You may contact us to request that we update, correct, or delete certain personal information, subject to legal, operational, contractual, and recordkeeping requirements.",
    },
    {
      type: "p",
      text: "You may opt out of marketing emails by using the unsubscribe link included in marketing emails, if available, or by contacting us directly.",
    },
    {
      type: "p",
      text: "Even if you opt out of marketing communications, we may still send transactional, administrative, legal, or inquiry-related communications.",
    },
    { type: "section", n: "11", title: "Privacy Rights" },
    {
      type: "p",
      text: "Depending on your state, country, or place of residence, you may have certain rights regarding your personal information. These may include rights to request access, correction, deletion, portability, restriction, or opt-out of certain uses or disclosures.",
    },
    {
      type: "p",
      text: "ITMonitoring.com will review privacy requests in accordance with applicable law. We may need to verify your identity before processing a request.",
    },
    {
      type: "section",
      n: "12",
      title: "GDPR Notice for Users in the European Economic Area and United Kingdom",
    },
    {
      type: "p",
      text: "If you are located in the European Economic Area (EEA) or the United Kingdom, the General Data Protection Regulation (GDPR) and UK GDPR may apply to our processing of your personal data.",
    },
    {
      type: "p",
      text: "Legal bases for processing. We process personal data on one or more of the following legal bases: your consent; the performance of, or steps taken at your request prior to entering, a contract or service; our legitimate interests in operating, securing, and improving our service and matching you with appropriate specialists (balanced against your rights); and compliance with our legal obligations.",
    },
    {
      type: "p",
      text: "Your rights. Subject to applicable law, you may have the right to request access to, correction of, deletion of, or portability of your personal data; to restrict or object to certain processing; and to withdraw consent at any time without affecting the lawfulness of processing before withdrawal.",
    },
    {
      type: "p",
      text: "Data minimization and retention. We collect only the personal data reasonably necessary for the purposes described in this Privacy Policy and retain it only as long as necessary for those purposes or as required by law.",
    },
    {
      type: "p",
      text: "International transfers. Your personal data may be transferred to and processed in the United States or other jurisdictions, which may have different data protection laws. Where required, we will use appropriate safeguards for such transfers.",
    },
    { type: "p", text: "Complaints. You have the right to lodge a complaint with your local supervisory authority." },
    {
      type: "p",
      text: "To exercise any of these rights, contact us in accordance with the Notices and Contact sections below.",
    },
    { type: "section", n: "13", title: "California Privacy Notice" },
    {
      type: "p",
      text: "California residents may have rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act, and other California privacy laws.",
    },
    { type: "p", text: "Depending on the circumstances, California residents may have the right to:" },
    {
      type: "ul",
      items: [
        "Know what categories of personal information we collect;",
        "Know the categories of sources from which personal information is collected;",
        "Know the business or commercial purposes for collecting, using, disclosing, selling, or sharing personal information;",
        "Know the categories of third parties to whom personal information is disclosed;",
        "Request access to personal information;",
        "Request deletion of personal information;",
        "Request correction of inaccurate personal information;",
        "Opt out of certain sales or sharing of personal information, where applicable;",
        "Limit certain uses of sensitive personal information, where applicable;",
        "Not be discriminated against for exercising privacy rights.",
      ],
    },
    {
      type: "p",
      text: "Because ITMonitoring.com shares assessment and lead information with third-party specialists and partners so that they may contact you about your engagement, certain privacy laws may treat some of this sharing as “sharing” of personal information depending on the circumstances. ITMonitoring.com does not sell your personal information.",
    },
    { type: "section", n: "14", title: "Notice at Collection" },
    {
      type: "p",
      text: "At or before the point where we collect information, we may provide a notice explaining that we collect contact information, business and infrastructure information, monitoring and engagement information, communications information, and website usage information for the purposes of responding to inquiries, researching and evaluating your monitoring needs, matching you with potential specialists and service providers, operating the website, communicating about related services, and managing referral relationships.",
    },
    { type: "section", n: "15", title: "Children’s Privacy" },
    {
      type: "p",
      text: "This website is intended for business users and is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.",
    },
    {
      type: "p",
      text: "If we learn that we have collected personal information from a child under 13, we will take reasonable steps to delete it, unless retention is required or permitted by law.",
    },
    { type: "section", n: "16", title: "International Users" },
    {
      type: "p",
      text: "If you access the website from outside the United States, you understand that your information may be processed, transferred, and stored in the United States or other jurisdictions where privacy laws may differ from those in your location.",
    },
    { type: "section", n: "17", title: "Third-Party Websites and Partners" },
    {
      type: "p",
      text: "Our website or communications may link to third-party websites, platforms, specialists, or partner services. This Privacy Policy does not apply to third-party websites, platforms, vendors, or service providers that are not controlled by ITMonitoring.com.",
    },
    {
      type: "p",
      text: "Third-party specialists and partners who receive your information may have their own privacy policies, terms, data practices, contracts, and security procedures. You should review those policies and agreements before engaging any third party.",
    },
    { type: "section", n: "18", title: "Changes to This Privacy Policy" },
    {
      type: "p",
      text: "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date. Your continued use of the website after updates are posted means you acknowledge the updated Privacy Policy.",
    },
    { type: "section", n: "19", title: "Disputes" },
    {
      type: "p",
      text: "Any dispute, claim, or controversy arising out of or relating to this Privacy Policy, the website, your submitted information, any referral, or any relationship with ITMonitoring.com shall be handled in accordance with the dispute resolution and arbitration provisions contained in the ITMonitoring.com Terms of Use, including the binding arbitration provisions administered by the American Arbitration Association in New York, New York, to the fullest extent permitted by law.",
    },
    { type: "section", n: "20", title: "Notices" },
    {
      type: "p",
      text: "All legal notices to ITMonitoring.com or Event Media 770 Corp. must be sent by certified mail, return receipt requested, to the following address:",
    },
    {
      type: "ul",
      items: ["Event Media 770 Corp.", "Address for Notices", "PO Box 597", "Lawrence, NY 11516-2242"],
    },
    {
      type: "p",
      text: "Notices shall be deemed given when received, as shown by certified mail return receipt, delivery confirmation, or other reliable written proof of delivery.",
    },
    {
      type: "p",
      text: "For general privacy inquiries or privacy requests, you may contact ITMonitoring.com through the contact methods provided on the website. General business or privacy communications do not replace the certified mail notice requirement for legal notices.",
    },
    { type: "section", n: "21", title: "Company Information" },
    { type: "p", text: "ITMonitoring.com is owned and operated by:" },
    {
      type: "ul",
      items: ["Event Media 770 Corp.", "499 Chestnut Street", "Cedarhurst, NY 11516"],
    },
    { type: "section", n: "22", title: "Contact Us" },
    {
      type: "p",
      text: "For general questions about this Privacy Policy, contact us through the contact information provided on the ITMonitoring.com website.",
    },
    { type: "p", text: "Legal notices must be sent in accordance with the Notices section above." },
  ],
}

export default function PrivacyPage() {
  return <LegalPage content={content} />
}
