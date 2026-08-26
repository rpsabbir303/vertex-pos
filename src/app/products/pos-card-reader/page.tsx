import type { Metadata } from "next";
import {
  BusyCounters,
  CardReaderFaq,
  CardReaderFinalCta,
  CardReaderHero,
  CompatibilityFlow,
  FeatureShowcase,
  PaymentExperience,
  PaymentMethods,
  PaymentMomentsUseCases,
  PriceSection,
  ProductShowcase,
  RealPaymentScene,
  SpecsSection,
  WhyChoose,
} from "@/components/pos-card-reader/sections";

export const metadata: Metadata = {
  title: "Card Reader",
  description:
    "Vertex POS Card Reader — contactless, Chip & PIN, and digital wallet payments for restaurants. From $299.",
};

const faqs = [
  {
    question: "What payment methods does the Vertex Card Reader support?",
    answer:
      "It supports contactless/NFC, Chip & PIN, credit and debit cards, and digital wallets for restaurant checkout.",
  },
  {
    question: "Does it support contactless payments?",
    answer:
      "Yes. Guests can tap eligible cards or phones for fast contactless checkout at the counter.",
  },
  {
    question: "Can customers pay with digital wallets?",
    answer:
      "Yes. Digital wallets such as Apple Pay and Google Pay are supported on compatible devices.",
  },
  {
    question: "How does the Card Reader connect to Vertex POS?",
    answer:
      "It connects into the Vertex POS checkout workflow so payments stay linked from amount presentation through confirmation.",
  },
  {
    question: "Is the Card Reader suitable for busy restaurants?",
    answer:
      "Yes. It is designed for busy counters where staff need a compact, reliable way to take payments without slowing the line.",
  },
  {
    question: "Is payment information securely processed?",
    answer:
      "Yes. Payments move through a secure processing flow from tap or insert through confirmation.",
  },
  {
    question: "Can the Card Reader be used at multiple checkout stations?",
    answer:
      "Yes. Restaurants can use Card Readers across checkout stations as part of their Vertex POS payment setup.",
  },
];

export default function PosCardReaderPage() {
  return (
    <>
      <CardReaderHero />
      <ProductShowcase />
      <PaymentExperience />
      <RealPaymentScene />
      <PaymentMethods />
      <PaymentMomentsUseCases />
      <FeatureShowcase />
      <SpecsSection />
      <PriceSection />
      <BusyCounters />
      <WhyChoose />
      <CompatibilityFlow />
      <CardReaderFaq items={faqs} />
      <CardReaderFinalCta />
    </>
  );
}
