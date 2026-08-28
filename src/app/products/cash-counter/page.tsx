import type { Metadata } from "next";
import {
  CheckoutExperienceSection,
  CompletePosSetupSection,
  CompleteSetupSection,
  CounterFaq,
  CounterFinalCta,
  CounterHero,
  CounterTrustSection,
  CounterDesignSection,
  FlexibleBusinessSection,
  HardwareSpecs,
  PeaceOfMindSection,
  ProductComponentsShowcase,
  ProductIntroduction,
  RealBusinessSection,
} from "@/components/cash-counter/sections";

export const metadata: Metadata = {
  title: "Cash Counter",
  description:
    "Vertex Cash Counter — a professional POS checkout station designed around the modern POS experience for retail, restaurant, and service businesses.",
};

export default function CashCounterPage() {
  return (
    <>
      <CounterHero />
      <ProductIntroduction />
      <CounterDesignSection />
      <RealBusinessSection />
      <CheckoutExperienceSection />
      <CompletePosSetupSection />
      <FlexibleBusinessSection />
      <HardwareSpecs />
      <ProductComponentsShowcase />
      <CounterTrustSection />
      <CompleteSetupSection />
      <PeaceOfMindSection />
      <CounterFaq />
      <CounterFinalCta />
    </>
  );
}
