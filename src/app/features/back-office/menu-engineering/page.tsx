import type { Metadata } from "next";
import {
  ActionableInsights,
  BenefitsSection,
  CategoryAnalysis,
  HowItWorks,
  ItemPerformance,
  MenuEngineeringFinalCta,
  MenuEngineeringHero,
  MenuEngineeringMatrix,
  MenuPerformanceOverview,
  SmartRecommendations,
} from "@/components/menu-engineering/sections";

export const metadata: Metadata = {
  title: "Menu Engineering",
  description:
    "Vertex POS Menu Engineering — Back Office profitability analysis and menu-mix reporting. Know what sells. Know what earns.",
};

export default function MenuEngineeringPage() {
  return (
    <>
      <MenuEngineeringHero />
      <MenuPerformanceOverview />
      <MenuEngineeringMatrix />
      <ActionableInsights />
      <ItemPerformance />
      <CategoryAnalysis />
      <SmartRecommendations />
      <HowItWorks />
      <BenefitsSection />
      <MenuEngineeringFinalCta />
    </>
  );
}
