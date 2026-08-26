import type { Metadata } from "next";
import {
  PaymentTerminalHero,
  TerminalBusyRestaurants,
  TerminalConnectivityOps,
  TerminalFaq,
  TerminalFinalCta,
  TerminalKeyFeatures,
  TerminalPaymentEnvironments,
  TerminalPaymentExperience,
  TerminalPaymentMethods,
  TerminalPricing,
  TerminalProductCloseUp,
  TerminalRealPaymentMoment,
  TerminalScreenExperience,
  TerminalSecurity,
  TerminalSpecifications,
} from "@/components/payment-terminal/sections";

export const metadata: Metadata = {
  title: "Payment Terminal",
  description:
    "Vertex Payment Terminal — fast, secure countertop payments for restaurants. Contactless, Chip & PIN, digital wallets, and Vertex POS integration.",
};

const faqs = [
  {
    question: "What payment methods does the Vertex Payment Terminal support?",
    answer:
      "It supports contactless/NFC, chip cards, swipe, PIN entry, digital wallets, and major credit and debit networks for restaurant checkout.",
  },
  {
    question: "Can customers pay using contactless cards?",
    answer:
      "Yes. Guests can tap eligible cards or phones on the terminal for fast contactless checkout at the counter.",
  },
  {
    question: "Does it support chip and PIN?",
    answer:
      "Yes. When contactless is not used, guests can insert a chip card and enter a PIN securely on the terminal display.",
  },
  {
    question: "How does the payment confirmation work?",
    answer:
      "The terminal presents clear on-screen approval states so staff and customers know when a payment is complete before moving to the next transaction.",
  },
  {
    question: "Is the terminal suitable for busy restaurants?",
    answer:
      "Yes. It is designed for continuous restaurant use at checkout, helping staff complete fast, repeated payment interactions during busy service.",
  },
  {
    question: "How does the terminal connect to the POS system?",
    answer:
      "It supports Wi-Fi and Ethernet connectivity and integrates into the supported Vertex POS payment workflow so totals and confirmations stay linked to checkout.",
  },
  {
    question: "How is the terminal integrated into checkout?",
    answer:
      "The Payment Terminal sits at your counter as a dedicated payment device within the supported Vertex POS checkout flow — presenting totals, accepting payment, and confirming authorization.",
  },
  {
    question: "How are payments kept secure?",
    answer:
      "Payments move through encrypted processing with PIN entry on the terminal display and clear authorization states from start to confirmation.",
  },
];

export default function PaymentTerminalPage() {
  return (
    <>
      <PaymentTerminalHero />
      <TerminalPaymentExperience />
      <TerminalRealPaymentMoment />
      <TerminalKeyFeatures />
      <TerminalPaymentMethods />
      <TerminalScreenExperience />
      <TerminalSecurity />
      <TerminalBusyRestaurants />
      <TerminalPaymentEnvironments />
      <TerminalProductCloseUp />
      <TerminalConnectivityOps />
      <TerminalSpecifications />
      <TerminalPricing />
      <TerminalFaq items={faqs} />
      <TerminalFinalCta />
    </>
  );
}
