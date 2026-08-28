import type { Metadata } from "next";
import {
  BetterCheckoutSection,
  BuiltForWorkSection,
  DesignedToGrowSection,
  HardwareSpecs,
  MonitorFaq,
  MonitorFinalCta,
  MonitorHero,
  MonitorTestimonial,
  PeaceOfMindSection,
  ProductDetailsShowcase,
  ProductIntro,
  RunWithConfidenceSection,
  SetupOptionsSection,
} from "@/components/pos-monitor/sections";

export const metadata: Metadata = {
  title: "POS Monitor",
  description:
    "Vertex POS Monitor — a customer-facing display that delivers a clean, reliable, and professional checkout experience for modern restaurant counters.",
};

export default function PosMonitorPage() {
  return (
    <>
      <MonitorHero />
      <ProductIntro />
      <BuiltForWorkSection />
      <BetterCheckoutSection />
      <RunWithConfidenceSection />
      <DesignedToGrowSection />
      <ProductDetailsShowcase />
      <HardwareSpecs />
      <MonitorTestimonial />
      <SetupOptionsSection />
      <PeaceOfMindSection />
      <MonitorFaq />
      <MonitorFinalCta />
    </>
  );
}
