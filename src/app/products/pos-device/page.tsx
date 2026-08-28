import type { Metadata } from "next";
import {
  BusinessManagementSection,
  BusinessMovingSection,
  DesignedToGrowSection,
  DeviceFaq,
  DeviceFinalCta,
  DeviceHero,
  DeviceTrustSection,
  EasierCheckoutSection,
  HardwareSpecs,
  PeaceOfMindSection,
  PowerfulToolsSection,
  ProductDetailsShowcase,
  ProductIntroduction,
  SetupOptionsSection,
} from "@/components/pos-device/sections";

export const metadata: Metadata = {
  title: "POS Device",
  description:
    "Vertex POS Device — the main restaurant POS terminal for staff order entry, table management, menu customization, kitchen routing, and checkout.",
};

export default function PosDevicePage() {
  return (
    <>
      <DeviceHero />
      <ProductIntroduction />
      <PowerfulToolsSection />
      <BusinessMovingSection />
      <EasierCheckoutSection />
      <BusinessManagementSection />
      <DesignedToGrowSection />
      <ProductDetailsShowcase />
      <HardwareSpecs />
      <DeviceTrustSection />
      <SetupOptionsSection />
      <PeaceOfMindSection />
      <DeviceFaq />
      <DeviceFinalCta />
    </>
  );
}
