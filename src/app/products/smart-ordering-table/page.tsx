import type { Metadata } from "next";
import {
  AllInOneWorkstationSection,
  BuiltForRestaurantsSection,
  HardwareDetailsSection,
  HardwareSpecs,
  PosWorkflowSection,
  ServiceBenefitsSection,
  SetupSection,
  SmartPosTableFaq,
  SmartPosTableFinalCta,
  SmartPosTableHero,
  SmartPosTableTrustSection,
  TouchscreenExperienceSection,
} from "@/components/smart-ordering-table/sections";

export const metadata: Metadata = {
  title: "Smart POS Table",
  description:
    "Vertex Smart POS Table — all-in-one touchscreen POS workstation for restaurant ordering, checkout, and everyday front-of-house operations.",
};

export default function SmartPosTablePage() {
  return (
    <>
      <SmartPosTableHero />
      <AllInOneWorkstationSection />
      <TouchscreenExperienceSection />
      <BuiltForRestaurantsSection />
      <HardwareDetailsSection />
      <HardwareSpecs />
      <PosWorkflowSection />
      <ServiceBenefitsSection />
      <SetupSection />
      <SmartPosTableTrustSection />
      <SmartPosTableFaq />
      <SmartPosTableFinalCta />
    </>
  );
}
