import type { Metadata } from "next";
import {
  BusinessTypesSection,
  CheckoutWorkflowSection,
  HardwareSpecs,
  PackageSection,
  PeaceOfMindSection,
  PrinterFaq,
  PrinterFinalCta,
  PrinterHero,
  PrinterTrustSection,
  PrintingPerformanceSection,
  ProductComponentsShowcase,
  ProductDesignSection,
  ProductIntroduction,
  RealBusinessSection,
  VertexEcosystemSection,
} from "@/components/pos-printer/sections";

export const metadata: Metadata = {
  title: "POS Printer",
  description:
    "Vertex POS Printer — fast thermal receipt printing with USB/Ethernet connectivity, automatic cutting, and Vertex POS compatibility. Starting at $299.",
};

export default function PosPrinterPage() {
  return (
    <>
      <PrinterHero />
      <ProductIntroduction />
      <PrintingPerformanceSection />
      <RealBusinessSection />
      <CheckoutWorkflowSection />
      <VertexEcosystemSection />
      <BusinessTypesSection />
      <ProductDesignSection />
      <HardwareSpecs />
      <ProductComponentsShowcase />
      <PrinterTrustSection />
      <PackageSection />
      <PeaceOfMindSection />
      <PrinterFaq />
      <PrinterFinalCta />
    </>
  );
}
