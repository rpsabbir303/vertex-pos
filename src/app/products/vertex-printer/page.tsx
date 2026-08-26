import type { Metadata } from "next";
import {
  CloudOrLocalPrinting,
  FinalCta,
  HowTheyWorkTogether,
  KeyFeatures,
  KitchenTicketSection,
  LabelPrintingSection,
  ProductShowcase,
  RestaurantUseCases,
  Specifications,
  TwoPrinterSolutions,
  VertexPrinterHero,
} from "@/components/vertex-printer/sections";

export const metadata: Metadata = {
  title: "Restaurant Printing",
  description:
    "Vertex restaurant printing — Kitchen Ticket Printer and Kitchen & Label Printer for kitchen orders, food labels, and packaging. Cloud or local.",
};

export default function VertexPrinterPage() {
  return (
    <>
      <VertexPrinterHero />
      <TwoPrinterSolutions />
      <HowTheyWorkTogether />
      <ProductShowcase />
      <KitchenTicketSection />
      <LabelPrintingSection />
      <CloudOrLocalPrinting />
      <RestaurantUseCases />
      <KeyFeatures />
      <Specifications />
      <FinalCta />
    </>
  );
}
