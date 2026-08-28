import type { Metadata } from "next";
import {
  CashBoxFaq,
  CashBoxFinalCta,
  CashBoxHero,
  CashBoxTrustSection,
  CashOrganizationSection,
  CheckoutWorkflowSection,
  HardwareSpecs,
  OpenDrawerSection,
  PackageSection,
  PeaceOfMindSection,
  ProductComponentsShowcase,
  ProductDesignSection,
  ProductIntroduction,
  RealBusinessSection,
  SecureStorageSection,
  VertexEcosystemSection,
} from "@/components/cash-counter-box/sections";

export const metadata: Metadata = {
  title: "Cash Counter Box",
  description:
    "Vertex Cash Counter Box — restaurant cash drawer with organized bill and coin compartments, lockable storage, and Vertex POS-compatible checkout workflows. From $199.",
};

export default function CashCounterBoxPage() {
  return (
    <>
      <CashBoxHero />
      <ProductIntroduction />
      <CashOrganizationSection />
      <CheckoutWorkflowSection />
      <SecureStorageSection />
      <ProductDesignSection />
      <VertexEcosystemSection />
      <RealBusinessSection />
      <HardwareSpecs />
      <ProductComponentsShowcase />
      <OpenDrawerSection />
      <PackageSection />
      <CashBoxTrustSection />
      <PeaceOfMindSection />
      <CashBoxFaq />
      <CashBoxFinalCta />
    </>
  );
}
