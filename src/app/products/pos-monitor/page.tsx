import type { Metadata } from "next";
import {
  CounterUseCases,
  DeviceDetails,
  HardwareSpecs,
  MonitorFaq,
  MonitorFeatures,
  MonitorFinalCta,
  MonitorHero,
  ProductExperience,
  ProductIntro,
  WhatsIncluded,
} from "@/components/pos-monitor/sections";

export const metadata: Metadata = {
  title: "POS Monitor",
  description:
    "Vertex POS Monitor — a customer-facing display that keeps orders, totals, and payments clear at the restaurant counter.",
};

export default function PosMonitorPage() {
  return (
    <>
      <MonitorHero />
      <ProductIntro />
      <MonitorFeatures />
      <DeviceDetails />
      <CounterUseCases />
      <ProductExperience />
      <HardwareSpecs />
      <WhatsIncluded />
      <MonitorFaq />
      <MonitorFinalCta />
    </>
  );
}
