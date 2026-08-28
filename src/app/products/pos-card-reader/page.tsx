import type { Metadata } from "next";
import {
  BusinessTypesSection,
  CardReaderFaq,
  CardReaderFinalCta,
  CardReaderHero,
  CardReaderTrustSection,
  CheckoutWorkflowSection,
  CustomerExperienceSection,
  HardwareSpecs,
  PackageSection,
  PeaceOfMindSection,
  PaymentExperienceSection,
  PaymentMethodsSection,
  ProductComponentsShowcase,
  ProductDesignSection,
  ProductIntroduction,
  RealBusinessSection,
  VertexEcosystemSection,
} from "@/components/pos-card-reader/sections";

export const metadata: Metadata = {
  title: "Card Reader",
  description:
    "Vertex POS Card Reader — contactless, Chip & PIN, and digital wallet payments with Wi-Fi, Ethernet, and Bluetooth connectivity. Vertex POS compatible. From $299.",
};

export default function PosCardReaderPage() {
  return (
    <>
      <CardReaderHero />
      <ProductIntroduction />
      <PaymentExperienceSection />
      <PaymentMethodsSection />
      <RealBusinessSection />
      <CheckoutWorkflowSection />
      <VertexEcosystemSection />
      <CustomerExperienceSection />
      <BusinessTypesSection />
      <ProductDesignSection />
      <HardwareSpecs />
      <ProductComponentsShowcase />
      <CardReaderTrustSection />
      <PackageSection />
      <PeaceOfMindSection />
      <CardReaderFaq />
      <CardReaderFinalCta />
    </>
  );
}
