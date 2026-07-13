import type { Metadata } from "next";
import { LegalDoc, COMPANY, type LegalSection } from "@/components/site/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BitapTech collects, uses, shares and protects your data across our products, including our WhatsApp Business messaging platform built on Meta's official Cloud API.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "13 July 2026";

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      `${COMPANY.name} ("we", "us", "our") is owned by 6351910962, a company incorporated under the Companies Act, 1956 with its registered office at rongpara,andichak,chitrasenpur (hereinafter referred to as "Platform Owner"). This Privacy Policy describes how we collect, use, share, protect or otherwise process your information/ personal data through our website www.bitaptech.com (the "Website" or "Platform") and across our products, including our WhatsApp Business messaging platform (${COMPANY.product}), which is built on Meta's official WhatsApp Cloud API.`,
      "Please note that you may be able to browse certain sections of the Platform without registering with us. We do not offer any product/service under this Platform outside India and your personal data will primarily be stored and processed in India.",
      "By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use, and the applicable service/product terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy. If you do not agree please do not use or access our Platform.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We collect your personal data when you use our Platform, services or otherwise interact with us during the course of our relationship, and related information provided from time to time. This includes:",
      {
        list: [
          "Account information — your name, business name, date of birth, address, telephone/mobile number, email ID, password (stored hashed), and/or any such information shared as proof of identity or address when you register.",
          "WhatsApp Business data — your WhatsApp Business Account (WABA) ID, phone number IDs, display name, message templates, quality rating, and the access tokens you connect. Tokens and API keys are encrypted at rest.",
          "Customer & contact data — contacts, phone numbers, names, tags, and segments that you upload or that are generated from inbound WhatsApp messages.",
          "Message content — the content and metadata of messages sent and received through your connected numbers, including template messages, chatbot replies, and delivery/read receipts.",
          "Billing and transaction information — wallet balance, transactions on the Platform and third-party business partner platforms, invoices, and GST details. Card and bank details are processed directly by our payment partners and are not stored on our servers.",
          "Usage, behaviour & technical data — log data, IP address, browser and device information, behaviour/preferences on our Platform, and dashboard activity, used for security, to operate the Services, and compiled and analysed on an aggregated basis.",
          "Cookies — session and preference cookies needed to keep you signed in and remember your settings.",
          "Sensitive personal data (collected with your consent) — bank account or credit/debit card or other payment instrument information, or biometric information (such as facial features or physiological information to enable specific features when opted for), in accordance with applicable laws. You always have the option to not provide information, by choosing not to use a particular service or feature on the Platform, though your access to these products/services may be affected.",
        ],
      },
      "Important Warning: If you receive an email or call from a person or association claiming to be BitapTech seeking any personal data like debit/credit card PIN, net-banking or mobile banking password, we request you to never provide such information. If you have already revealed such information, report it immediately to an appropriate law enforcement agency.",
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
          "Provide customer support, resolve disputes, troubleshoot problems, and respond to your requests.",
          "Assist sellers and business partners in handling and fulfilling orders, and enhance customer experience.",
          "Inform you about online and offline offers, products, services, updates, and customising your experience.",
          "Conduct marketing research, analysis, surveys, and other activities as described to you at the time of collection of information.",
          "Protect the Services against error, fraud, abuse, and other criminal activity, and enforce our terms and conditions.",
          "Comply with legal obligations and enforce our Terms of Service.",
        ],
      },
      "To the extent we use your personal data to market to you, we will provide you the ability to opt-out of such uses. We do not sell your personal data, and we do not use WhatsApp message content for advertising.",
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
    heading: "Product-specific data handling",
    body: [
      "We offer more than one WhatsApp product, and the data we process differs by product:",
      "WpAi Official (Meta WhatsApp Cloud API): For our official platform we connect to your WhatsApp Business Account through Meta's Cloud API. We store your WABA ID, phone number IDs, templates, and encrypted access tokens, and we process the messages routed through the API to deliver the Services, as described throughout this policy. For your end customers' messages and contacts, you are the data controller and we act as a data processor.",
      "WpAi Unofficial (device-based sync): Our unofficial product is an independent pipeline-synchronisation tool (based on WPPConnect/Baileys web clients) that connects to your own WhatsApp session from your device. It does not persist your raw chat messages or media files on our central servers — WhatsApp communications are fetched directly from your device via the web connection and processed in memory. When AI auto-reply is enabled, our server retains at most a 10-minute trailing conversation context window in memory to generate replies, after which the buffer is cleared. Outbound campaign messages are held in a temporary in-memory queue only long enough to enforce safety delays (a 5–12 second randomised interval) and are then purged. For this product we store account/profile information, session metadata (session names, auto-reply prompts, and any AI API keys you supply, encrypted at rest), and connection/delivery logs used for quota tracking and alerts.",
    ],
  },
  {
    heading: "How we share information",
    body: [
      "We share information only as needed to run the Services:",
      {
        list: [
          "Meta Platforms — to send and receive messages and manage your WABA via the WhatsApp Cloud API.",
          "Payment processors (such as Razorpay, Stripe, and PhonePe) and prepaid payment instrument issuers — to process wallet recharges securely.",
          "AI providers (such as Groq, OpenAI, and Anthropic) — only where you enable AI features, message content may be processed to generate replies.",
          "Infrastructure, logistics, and service providers — cloud hosting, database, logistics partners, and email providers that help us operate the Services under confidentiality obligations.",
          "Corporate affiliates & group entities — we may share personal data internally within our group/corporate entities and affiliates to provide you access to the services and products offered by them. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt-out.",
          "Third-party partners — sellers, business partners, and third-party reward programs opted by you, as required to provide access to services and products.",
          "Legal, safety & government agencies — where required by law, regulation, subpoena, court order, or legal process, or in the good faith belief that disclosure is reasonably necessary to respond to government or law enforcement offices, protect the rights, property, and personal safety of our users, third party rights owners, or the general public.",
        ],
      },
      "We do not sell your data or your customers' data to third parties.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We retain account and business data for as long as your account is active. Message and contact data is retained while needed to provide the Services and to meet legal, tax, and accounting requirements. When you delete your account or disconnect a WABA, we delete or anonymise the associated data within a reasonable period, except where retention is required by law. Please note that we may refuse or delay account deletion in the event of pending grievances, claims, pending shipments, or other active services. We may retain data related to you if we believe it may be necessary to prevent fraud or future abuse, or for other legitimate purposes, and we may continue to retain your data in anonymised form for analytical and research purposes.",
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
      "Depending on your location, you may have the right to access, rectify, update, correct, export, or delete your personal data, and to object to or restrict certain processing. You can manage most of your data directly in the dashboard, or contact us to exercise these rights. We will respond within the timeframes required by applicable law.",
    ],
  },
  {
    heading: "Consent and communication",
    body: [
      "By visiting our Platform or providing your information, you consent to the collection, use, storage, disclosure, and processing of your information on the Platform in accordance with this Privacy Policy. If you disclose any personal data relating to other people, you represent that you have the authority to do so and permit us to use the information accordingly.",
      "You consent to us (including our corporate entities, affiliates, lending partners, technology partners, marketing channels, and business partners) contacting you through SMS, instant messaging apps (such as WhatsApp), phone calls, and/or email for the purposes specified in this Privacy Policy.",
      "You have the option to withdraw your consent at any time by writing to our Grievance Officer using the contact information below. Please mention 'Withdrawal of consent for processing personal data' in the subject line. We may verify such requests before acting on them. Please note that withdrawal of consent is not retrospective, will be in accordance with this policy, Terms of Service, and applicable laws, and we reserve the right to restrict or deny the provision of services for which such information is considered necessary.",
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
    heading: "Grievance Officer",
    body: [
      "In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:",
      "Name / Designation: Grievance Officer",
      "Company / Office: 6351910962 (BitapTech)",
      "Address: rongpara,andichak,chitrasenpur",
      "Email: info@bitaptech.com",
      "Contact Hours: Monday to Friday (9:00 - 18:00)",
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
