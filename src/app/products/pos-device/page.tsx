import type { Metadata } from "next";
import { FaqSection } from "@/components/layout/FaqSection";
import {
  CompatibilityNote,
  CorePosWorkflow,
  DeviceFinalCta,
  DeviceHero,
  PosDeviceFeatures,
  ProductIntroduction,
  RealWorldService,
  SpecsAndPricing,
} from "@/components/pos-device/sections";

export const metadata: Metadata = {
  title: "POS Device",
  description:
    "Vertex POS Device — the main restaurant POS terminal for staff order entry, table management, menu customization, kitchen routing, and checkout.",
};

const faqs = [
  {
    question: "Is the Vertex POS Device designed for restaurants?",
    answer:
      "Yes. The Vertex POS Device is built as a front-of-house restaurant terminal for ordering, tables, kitchen routing, and checkout during live service.",
  },
  {
    question: "What can staff do from the POS Device?",
    answer:
      "Staff can take orders, browse the menu, customize items, manage tables, send tickets to the kitchen, apply discounts, process payments, and complete checkout from one workstation.",
  },
  {
    question: "Can the POS Device handle table orders?",
    answer:
      "Yes. Open checks, table assignments, and active orders stay organized on the main POS workstation.",
  },
  {
    question: "Can staff customize menu items?",
    answer:
      "Yes. Modifiers, add-ons, special requests, and item variations can be handled without leaving the order workflow.",
  },
  {
    question: "Can orders be sent to the kitchen?",
    answer:
      "Yes. Staff can send orders from the POS Device so the kitchen receives tickets as soon as they are fired.",
  },
  {
    question: "Can payments be processed from the POS workflow?",
    answer:
      "Yes. Review the check, apply discounts, and complete payment from the same POS Device workflow.",
  },
  {
    question: "Is the POS Device suitable for busy service periods?",
    answer:
      "Yes. The interface is built for fast order entry and checkout when the dining room is at its busiest.",
  },
  {
    question: "Can it connect with other restaurant peripherals?",
    answer:
      "Yes. The POS Device can connect with compatible payment hardware, kitchen systems, printers, customer-facing displays, and other restaurant peripherals while remaining the primary staff terminal.",
  },
];

export default function PosDevicePage() {
  return (
    <>
      <DeviceHero />
      <ProductIntroduction />
      <CorePosWorkflow />
      <PosDeviceFeatures />
      <RealWorldService />
      <SpecsAndPricing />
      <CompatibilityNote />
      <FaqSection compact items={faqs} title="Frequently Asked Questions" />
      <DeviceFinalCta />
    </>
  );
}
