import type { Metadata } from "next";
import {
  BusinessBenefitsSection,
  CustomerExperienceSection,
  HardwareDetailsSection,
  HardwareSpecs,
  ProductIntroduction,
  RealWorldCheckoutSection,
  SetupSection,
  TerminalFaq,
  TerminalFinalCta,
  TerminalHero,
  TerminalTrustSection,
} from "@/components/payment-terminal/sections";

export const metadata: Metadata = {
  title: "Payment Terminal",
  description:
    "Vertex Payment Terminal — dedicated customer-facing payment hardware for contactless, chip, and digital everyday checkout. Get a quote from Vertex.",
};

export default function PaymentTerminalPage() {
  return (
    <>
      <TerminalHero />
      <ProductIntroduction />
      <CustomerExperienceSection />
      <RealWorldCheckoutSection />
      <HardwareDetailsSection />
      <HardwareSpecs />
      <BusinessBenefitsSection />
      <SetupSection />
      <TerminalTrustSection />
      <TerminalFaq />
      <TerminalFinalCta />
    </>
  );
}
