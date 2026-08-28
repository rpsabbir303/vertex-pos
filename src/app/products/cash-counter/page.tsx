import type { Metadata } from "next";
import {
  AccurateCountingSection,
  ComparisonCtaSection,
  CounterFaq,
  CounterFinalCta,
  CounterHero,
  CounterTrustSection,
  EverydayOperationsSection,
  FasterCashSection,
  HardwareDetailsSection,
  HardwareSpecs,
  PeaceOfMindSection,
  ProductIntroduction,
  UseCasesSection,
} from "@/components/cash-counter/sections";

export const metadata: Metadata = {
  title: "Cash Counter",
  description:
    "Vertex Cash Counter — automatic banknote counting machine for fast, efficient everyday cash handling. Professional commercial design with digital counting display.",
};

export default function CashCounterPage() {
  return (
    <>
      <CounterHero />
      <ProductIntroduction />
      <AccurateCountingSection />
      <FasterCashSection />
      <EverydayOperationsSection />
      <HardwareDetailsSection />
      <HardwareSpecs />
      <UseCasesSection />
      <ComparisonCtaSection />
      <CounterTrustSection />
      <PeaceOfMindSection />
      <CounterFaq />
      <CounterFinalCta />
    </>
  );
}
