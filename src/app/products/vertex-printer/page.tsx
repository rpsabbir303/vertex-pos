import type { Metadata } from "next";
import {
  BuiltForRestaurantsSection,
  HardwareDetailsSection,
  HardwareSpecs,
  KitchenLabelFaq,
  KitchenLabelFinalCta,
  KitchenLabelHero,
  KitchenLabelTrustSection,
  KitchenPrintingSection,
  LabelPrintingSection,
  RestaurantWorkflowSection,
  ServiceBenefitsSection,
  SetupSection,
} from "@/components/vertex-printer/sections";

export const metadata: Metadata = {
  title: "Kitchen & Label Printer",
  description:
    "Vertex Kitchen & Label Printer — kitchen order tickets and food packaging labels for restaurants, cafés, takeaway, and delivery workflows.",
};

export default function KitchenLabelPrinterPage() {
  return (
    <>
      <KitchenLabelHero />
      <KitchenPrintingSection />
      <LabelPrintingSection />
      <BuiltForRestaurantsSection />
      <HardwareDetailsSection />
      <HardwareSpecs />
      <RestaurantWorkflowSection />
      <ServiceBenefitsSection />
      <SetupSection />
      <KitchenLabelTrustSection />
      <KitchenLabelFaq />
      <KitchenLabelFinalCta />
    </>
  );
}
