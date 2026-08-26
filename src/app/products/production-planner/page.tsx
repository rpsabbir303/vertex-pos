import type { Metadata } from "next";
import { FaqSection } from "@/components/layout/FaqSection";
import { FinalCta } from "@/components/layout/FinalCta";
import {
  Capabilities,
  DemandPlanning,
  ForecastToPrep,
  KitchenSync,
  Outcomes,
  PlannerHero,
  PrepProblem,
  RushTimeline,
} from "@/components/production-planner/sections";

export const metadata: Metadata = {
  title: "Production Planner",
  description:
    "Plan restaurant prep from forecasted demand. Vertex Production Planner helps kitchens cook the right batches, reduce waste, and stay ready for every rush.",
};

const faqs = [
  {
    question: "What is Production Planner?",
    answer:
      "Production Planner is the Vertex POS module that turns forecasted demand into a daily prep plan. Managers see what to cook, how much, which station owns it, and when it needs to be ready.",
  },
  {
    question: "How does Vertex determine production needs?",
    answer:
      "Vertex compares expected portions with what is already prepared. The remaining gap becomes production needed, with priority and prep time attached so the kitchen is not guessing batch sizes.",
  },
  {
    question: "Can production planning use forecasted demand?",
    answer:
      "Yes. Plans can follow recent same-day sales, day-of-week patterns, and reservation volume. Managers can still adjust a batch before it is sent to the line.",
  },
  {
    question: "Does Production Planner work with recipes and inventory?",
    answer:
      "It does. Planned batches pull from recipes, so ingredient quantities stay aligned with what is on hand. That keeps prep from outrunning the walk-in.",
  },
  {
    question: "Can production plans be used across multiple locations?",
    answer:
      "Yes. Each kitchen can run its own plan while groups still see demand, progress, and waste patterns across locations from the same Vertex platform.",
  },
];

export default function ProductionPlannerPage() {
  return (
    <>
      <PlannerHero />
      <PrepProblem />
      <DemandPlanning />
      <RushTimeline />
      <ForecastToPrep />
      <KitchenSync />
      <Capabilities />
      <Outcomes />
      <FaqSection items={faqs} title="Production Planner questions, answered." />
      <FinalCta
        headline="Stay ready for every rush."
        copy="Plan smarter, reduce waste, and keep your kitchen ready with Vertex POS. See Production Planner in a live walkthrough."
        points={[
          "See a production plan built from real demand",
          "Walk through station tasks before a rush",
          "No long setup before you see the product",
        ]}
      />
    </>
  );
}
