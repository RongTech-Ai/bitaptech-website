import type { Metadata } from "next";
import { LegalDoc, COMPANY, type LegalSection } from "@/components/site/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of BitapTech's website, products, and WhatsApp Business messaging platform.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "7 July 2026";

const sections: LegalSection[] = [
  {
    heading: "Acceptance of terms",
    body: [
      `By accessing or using ${COMPANY.name}'s website, dashboards, APIs, and products (together, the "Services"), you agree to be bound by these Terms of Service. If you use the Services on behalf of a business, you represent that you are authorised to bind that business.`,
    ],
  },
  {
    heading: "The Services",
    body: [
      `${COMPANY.name} provides software products including ${COMPANY.product}, a WhatsApp Business messaging platform built on Meta's official WhatsApp Cloud API. Features may include connecting a WhatsApp Business Account, sending template campaigns, automating conversations with AI, and managing contacts. We may add, change, or remove features over time.`,
    ],
  },
  {
    heading: "Eligibility and accounts",
    body: [
      "You must be at least 18 years old and able to form a binding contract to use the Services. You are responsible for the accuracy of your account information, for keeping your credentials secure, and for all activity that occurs under your account.",
    ],
  },
  {
    heading: "WhatsApp and Meta compliance",
    body: [
      "When you use our WhatsApp Business messaging features, you agree to comply with all applicable Meta and WhatsApp policies, including the WhatsApp Business Messaging Policy, WhatsApp Commerce Policy, and Meta's Business Terms.",
      {
        list: [
          "You must obtain valid opt-in consent from recipients before messaging them.",
          "You must not send spam, unsolicited, deceptive, or prohibited content.",
          "You are responsible for the content of the messages and templates you send.",
          "Meta may review, restrict, or disable message templates, phone numbers, or accounts at its discretion, and we are not liable for such actions.",
        ],
      },
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "You agree not to:",
      {
        list: [
          "Use the Services for any unlawful, harmful, fraudulent, or abusive purpose.",
          "Send messages without proper consent or in violation of applicable laws (including anti-spam and data protection laws).",
          "Attempt to disrupt, reverse engineer, scrape, or gain unauthorised access to the Services.",
          "Resell or provide access to the Services in a way that violates these terms or Meta's policies.",
        ],
      },
    ],
  },
  {
    heading: "Wallet, billing, and pricing",
    body: [
      "The Services operate on a prepaid wallet model. You recharge your wallet, and message charges are metered per message based on Meta's conversation rates and the destination country and category. Applicable taxes (such as GST) are added where required.",
      "Prices and Meta's underlying rates may change. We will make current pricing available in the dashboard. Wallet balances and message charges are governed by our Refund Policy.",
    ],
  },
  {
    heading: "Third-party services",
    body: [
      "The Services rely on third parties including Meta (WhatsApp Cloud API), payment processors (such as Razorpay, Stripe, and PhonePe), and AI providers (such as Groq, OpenAI, and Anthropic). Your use of those features is also subject to the respective third party's terms. We are not responsible for the availability, acts, or omissions of third-party services.",
    ],
  },
  {
    heading: "Service availability",
    body: [
      'We work to keep the Services reliable but do not guarantee uninterrupted or error-free operation. The Services are provided "as is" and "as available", without warranties of any kind, whether express or implied, to the maximum extent permitted by law.',
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      `All software, content, product names, logos, and code that make up the Services are the property of ${COMPANY.name} or its licensors, unless otherwise stated. You retain ownership of the content and data you upload; you grant us a limited licence to process it solely to provide the Services.`,
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      `To the maximum extent permitted by law, ${COMPANY.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or business, arising out of or related to your use of the Services. Our total liability for any claim shall not exceed the amounts you paid to us for the Services in the three months preceding the claim.`,
    ],
  },
  {
    heading: "Indemnity",
    body: [
      `You agree to indemnify and hold ${COMPANY.name} harmless from any claims, damages, or expenses arising from your use of the Services, your content or messages, or your violation of these terms or applicable law (including Meta's and WhatsApp's policies).`,
    ],
  },
  {
    heading: "Suspension and termination",
    body: [
      "We may suspend or terminate your access to the Services if you breach these terms, violate Meta's or WhatsApp's policies, or use the Services in a way that creates risk or legal exposure. You may stop using the Services at any time. Certain provisions (such as intellectual property, limitation of liability, and indemnity) survive termination.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      'We may update these terms from time to time. Changes take effect when posted, and we will update the "Last updated" date above. Your continued use of the Services after changes take effect constitutes acceptance.',
    ],
  },
  {
    heading: "Governing law",
    body: [
      `These terms are governed by the laws of ${COMPANY.jurisdiction}, and the courts located in ${COMPANY.jurisdiction} shall have exclusive jurisdiction over any disputes, unless otherwise required by applicable law.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      intro={`These terms govern your use of ${COMPANY.name}'s website, products, and WhatsApp Business messaging platform. Please read them carefully.`}
      sections={sections}
    />
  );
}
