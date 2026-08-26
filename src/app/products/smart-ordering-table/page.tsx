import type { Metadata } from "next";
import {
  EditorialBenefits,
  ExperienceJourney,
  InterfaceShowcase,
  MenuBrowsingExperience,
  OrderingFlow,
  ProductCloseUp,
  ProductSpecifications,
  RestaurantEnvironment,
  SmartTableFinalCta,
  SmartTableHero,
  UseCasesEditorial,
} from "@/components/smart-ordering-table/sections";

export const metadata: Metadata = {
  title: "Smart Ordering Table",
  description:
    "Vertex Smart Ordering Table — smart ordering at the table, without the wait. Guests browse, customize, and order from a built-in customer-facing screen.",
};

export default function SmartOrderingTablePage() {
  return (
    <>
      <SmartTableHero />
      <ExperienceJourney />
      <MenuBrowsingExperience />
      <OrderingFlow />
      <RestaurantEnvironment />
      <EditorialBenefits />
      <InterfaceShowcase />
      <UseCasesEditorial />
      <ProductSpecifications />
      <ProductCloseUp />
      <SmartTableFinalCta />
    </>
  );
}
