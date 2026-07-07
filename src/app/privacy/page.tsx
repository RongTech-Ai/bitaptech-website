import type { Metadata } from "next";
import { LegalDoc, COMPANY, type LegalSection } from "@/components/site/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BitapTech collects, uses, shares and protects your data across our products, including our WhatsApp Business messaging platform built on Meta's official Cloud API.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "7 July 2026";

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      `${COMPANY.name} ("we", "us", "our") builds AI-powered SaaS products and business automation platforms. This Privacy Policy explains how we handle information across our website and products, including our WhatsApp Business messaging platform (${COMPANY.product}), which is built on Meta's official WhatsApp Cloud API.`,
      `This policy applies to our website, dashboards, and APIs (together, the "Services"). By using the Services, you agree to the practices described here.`,
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "Depending on how you use the Services, we may collect:",
      {
        list: [
          "Account information — your name, business name, email, phone number, and password (stored hashed) when you register.",
          "WhatsApp Business data — your WhatsApp Business Account (WABA) ID, phone number IDs, display name, message templates, quality rating, and the access tokens you connect. Tokens and API keys are encrypted at rest.",
          "Customer & contact data — contacts, phone numbers, names, tags, and segments that you upload or that are generated from inbound WhatsApp messages.",
          "Message content — the content and metadata of messages sent and received through your connected numbers, including template messages, chatbot replies, and delivery/read receipts.",
          "Billing information — wallet balance, transactions, and invoices. Card and bank details are processed directly by our payment partners and are not stored on our servers.",
          "Usage & technical data — log data, IP address, browser and device information, and dashboard activity, used for security and to operate the Services.",
          "Cookies — session and preference cookies needed to keep you signed in and remember your settings.",
        ],
      },
    ],
  },
  {
    heading: "How we use information",
    body: [
      "We use the information we collect to:",
      {
        list: [
          "Provide, operate, and maintain the Services, including sending and receiving WhatsApp messages on your behalf.",
          "Connect and manage your WhatsApp Business Account through the Meta Cloud API.",
          "Process wallet recharges, meter per-message usage, and generate invoices.",
          "Power AI chatbot and automation features you choose to enable.",
          "Provide customer support and respond to your requests.",
          "Protect the Services against fraud, abuse, and security threats.",
          "Comply with legal obligations and enforce our Terms of Service.",
        ],
      },
      "We do not sell your personal data, and we do not use WhatsApp message content for advertising.",
    ],
  },
  {
    heading: "WhatsApp and Meta Platform data",
    body: [
      `Our access to and use of information from Meta's WhatsApp Cloud API, and any actions we take using that API, comply with Meta's Platform Terms, Developer Policies, and the WhatsApp Business Messaging Policy.`,
      `For the messages and contact data of your end customers, you are the data controller and ${COMPANY.name} acts as a data processor — we process that data only to provide the Services to you and according to your instructions. You are responsible for obtaining valid opt-in consent from your customers before messaging them, as required by WhatsApp's policies.`,
    ],
  },
  {
    heading: "How we share information",
    body: [
      "We share information only as needed to run the Services:",
      {
        list: [
          "Meta Platforms — to send and receive messages and manage your WABA via the WhatsApp Cloud API.",
          "Payment processors (such as Razorpay, Stripe, and PhonePe) — to process wallet recharges securely.",
          "AI providers (such as Groq, OpenAI, and Anthropic) — only where you enable AI features, message content may be processed to generate replies.",
          "Infrastructure and service providers — cloud hosting, database, and email providers that help us operate the Services under confidentiality obligations.",
          "Legal and safety — where required by law, regulation, or legal process, or to protect the rights, safety, and property of our users or the public.",
        ],
      },
      "We do not sell your data or your customers' data to third parties.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We retain account and business data for as long as your account is active. Message and contact data is retained while needed to provide the Services and to meet legal, tax, and accounting requirements. When you delete your account or disconnect a WABA, we delete or anonymise the associated data within a reasonable period, except where retention is required by law.",
    ],
  },
  {
    heading: "Data security",
    body: [
      "We apply industry-standard safeguards, including encryption in transit (TLS) and encryption at rest for sensitive secrets such as WhatsApp access tokens and API keys (AES-256-GCM). Access to production data is restricted and monitored. No system is completely secure, but we work continuously to protect your information.",
    ],
  },
  {
    heading: "Your rights and choices",
    body: [
      "Depending on your location, you may have the right to access, correct, export, or delete your personal data, and to object to or restrict certain processing. You can manage most of your data directly in the dashboard, or contact us to exercise these rights. We will respond within the timeframes required by applicable law.",
    ],
  },
  {
    heading: "International data transfers",
    body: [
      "Our providers may process data in countries other than yours. Where data is transferred internationally, we take steps to ensure it remains protected consistently with this policy and applicable law.",
    ],
  },
  {
    heading: "Children",
    body: [
      "The Services are intended for businesses and are not directed to individuals under 18. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      'We may update this Privacy Policy from time to time. When we make material changes, we will update the "Last updated" date above. Your continued use of the Services after changes take effect constitutes acceptance of the updated policy.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={`${COMPANY.name} respects your privacy. This policy describes how we collect, use, share, and protect information across our products, including our WhatsApp Business messaging platform.`}
      sections={sections}
    />
  );
}
