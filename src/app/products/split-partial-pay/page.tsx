import type { Metadata } from "next";
import { FaqSection } from "@/components/layout/FaqSection";
import { FinalCta } from "@/components/layout/FinalCta";
import {
  AnySplit,
  FastService,
  ItemShares,
  MixedPayments,
  PartialPay,
  PayFlexibility,
  PaymentJourney,
  PaymentProblem,
  PayInsights,
  SplitHero,
} from "@/components/split-pay/sections";

export const metadata: Metadata = {
  title: "Split & Partial Pay",
  description:
    "Split restaurant bills by item or equally, take partial payments, mix tenders, and always see what remains unpaid — with Vertex POS.",
};

const faqs = [
  {
    question: "Can guests split a bill by item?",
    answer:
      "Yes. Staff can assign dishes and drinks to each guest. The remaining amount updates as items move off the shared check.",
  },
  {
    question: "Can a bill be split equally between guests?",
    answer:
      "Yes. Vertex divides the total across the table, including tax and tip, so each share is ready to tender.",
  },
  {
    question: "Can customers make partial payments?",
    answer:
      "Yes. Guests can pay their share as they are ready. The check stays open until the remaining balance is settled.",
  },
  {
    question: "Can multiple payment methods be used on one check?",
    answer:
      "Yes. Card, cash, wallets, and gift cards can all apply to the same table. Each tender posts against the live balance.",
  },
  {
    question: "How does staff know what amount is still unpaid?",
    answer:
      "The check always shows paid vs remaining, plus who has settled. Servers do not need a separate calculator or notepad.",
  },
  {
    question: "Can one guest pay the remaining balance for the table?",
    answer:
      "Yes. After others have paid, one guest can cover whatever is left — without rebuilding the check.",
  },
];

export default function SplitPartialPayPage() {
  return (
    <>
      <SplitHero />
      <PaymentProblem />
      <AnySplit />
      <ItemShares />
      <PartialPay />
      <MixedPayments />
      <PayFlexibility />
      <PaymentJourney />
      <PayInsights />
      <FastService />
      <FaqSection
        compact
        items={faqs}
        title="Split & Partial Pay questions, answered."
      />
      <FinalCta
        headline="Make every group payment easier."
        copy="Give your team a faster way to split checks, accept mixed payments, and close every table with confidence."
        points={[
          "See splits, tenders, and remaining balance on one check",
          "Walk through a group table in a live demo",
          "No long setup before you see the product",
        ]}
      />
    </>
  );
}
