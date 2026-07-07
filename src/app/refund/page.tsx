import type { Metadata } from "next";
import { LegalDoc, COMPANY, type LegalSection } from "@/components/site/LegalDoc";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "BitapTech's refund and cancellation policy for wallet recharges, message charges, and subscriptions on our WhatsApp Business platform.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "7 July 2026";

const sections: LegalSection[] = [
  {
    heading: "Overview",
    body: [
      `${COMPANY.name}'s WhatsApp Business platform (${COMPANY.product}) uses a prepaid wallet model. You add funds to your wallet, and charges are deducted as you send messages, based on Meta's conversation rates and applicable taxes. This policy explains when refunds are and are not available.`,
    ],
  },
  {
    heading: "Wallet recharges",
    body: [
      "Wallet recharges add prepaid credit to your account for use on messaging and platform features. Recharged amounts are intended to be consumed through usage and are generally non-refundable once credited, except as described below or where required by applicable law.",
    ],
  },
  {
    heading: "Message charges",
    body: [
      "Charges for messages that have been successfully submitted to or delivered by Meta's WhatsApp Cloud API are non-refundable, as these reflect real costs charged by Meta. If a message fails before being sent due to a verified platform error on our side, the corresponding charge will be credited back to your wallet.",
    ],
  },
  {
    heading: "Failed or duplicate payments",
    body: [
      "If you are charged but the funds are not credited to your wallet, or if you are charged more than once for the same transaction due to a payment or technical error, we will refund the affected amount after verification. Refunds for failed or duplicate payments are made to the original payment method.",
    ],
  },
  {
    heading: "Subscriptions and platform fees",
    body: [
      "Where any subscription or platform fee applies, it is billed in advance for the chosen period and is non-refundable for the current period once the period has begun, unless required by law. You may cancel to prevent renewal for future periods.",
    ],
  },
  {
    heading: "Unused wallet balance",
    body: [
      "Requests to refund an unused, unspent wallet balance may be considered on a case-by-case basis at our discretion, subject to identity and payment verification and deduction of any applicable transaction or processing fees. Promotional credits, bonuses, and taxes already paid are not refundable.",
    ],
  },
  {
    heading: "How to request a refund",
    body: [
      `To request a refund, email ${COMPANY.email} from your registered email address with your account details, the transaction ID, and the reason for the request. We may ask for additional information to verify the request.`,
    ],
  },
  {
    heading: "Processing time",
    body: [
      "Approved refunds are processed to the original payment method. Once approved, refunds are typically initiated within 5–7 business days; the time for the amount to reflect in your account depends on your bank or payment provider.",
    ],
  },
  {
    heading: "Chargebacks",
    body: [
      "If you have a concern about a charge, please contact us first so we can resolve it. Initiating a chargeback without contacting us may result in suspension of your account while the dispute is reviewed.",
    ],
  },
];

export default function RefundPage() {
  return (
    <LegalDoc
      title="Refund Policy"
      lastUpdated={LAST_UPDATED}
      intro={`This Refund Policy explains how refunds and cancellations work for wallet recharges, message charges, and subscriptions on ${COMPANY.name}'s platform.`}
      sections={sections}
    />
  );
}
