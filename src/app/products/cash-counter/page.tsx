import type { Metadata } from "next";
import {
  BenefitCards,
  CashFaq,
  CashFinalCta,
  CashHero,
  CashTracking,
  CashWorkflow,
  ProductAnatomy,
  RealService,
  SecuritySection,
  SpecsGalleryPricing,
} from "@/components/cash-counter/sections";

export const metadata: Metadata = {
  title: "Cash Counter Box",
  description:
    "Vertex Cash Counter Box — restaurant cash drawer for organized bills and coins, secure storage, shift reconciliation, and cash drops. Starting at $199.",
};

const faqs = [
  {
    question: "What is the Vertex Cash Counter Box?",
    answer:
      "The Vertex Cash Counter Box is a restaurant cash drawer built to store and organize bills and coins securely from opening float through shift close and reconciliation.",
  },
  {
    question: "How does the cash drawer work with Vertex POS?",
    answer:
      "It connects to supported Vertex POS setups so physical cash handling stays aligned with checkout, shift tracking, and closing reconciliation.",
  },
  {
    question: "Can I track cash drops and cash movements?",
    answer:
      "Yes. Record cash drops and other cash movements so excess cash is secured with a clear reason and shift history stays complete.",
  },
  {
    question: "How does cash reconciliation work?",
    answer:
      "At close, compare expected cash with the physical count. Matching totals show a balanced drawer; differences are flagged for review before finalizing the shift.",
  },
  {
    question: "Is the cash drawer lockable?",
    answer:
      "Yes. The Cash Counter Box includes lockable cash storage to help protect cash between transactions and at the end of service.",
  },
  {
    question: "What happens if the counted cash does not match?",
    answer:
      "A variance is shown during reconciliation so managers can review cash movements, investigate the difference, and close the shift with a clear record.",
  },
  {
    question: "Is the Cash Counter Box suitable for busy restaurants?",
    answer:
      "Yes. It is designed for repeated daily opening and closing so staff can access organized cash quickly during busy service.",
  },
];

export default function CashCounterPage() {
  return (
    <>
      <CashHero />
      <CashWorkflow />
      <ProductAnatomy />
      <CashTracking />
      <SecuritySection />
      <RealService />
      <SpecsGalleryPricing />
      <BenefitCards />
      <CashFaq items={faqs} />
      <CashFinalCta />
    </>
  );
}
