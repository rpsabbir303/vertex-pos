import type { Metadata } from "next";
import {
  PrinterConnectivity,
  PrinterFaq,
  PrinterFinalCta,
  PrinterHero,
  PrinterQuickInfo,
  PrintingWorkflow,
  ProductDetails,
  RestaurantUseCases,
  SpecsAndPricing,
  SpeedReliability,
} from "@/components/pos-printer/sections";

export const metadata: Metadata = {
  title: "POS Printer",
  description:
    "Vertex POS Printer — fast thermal receipt printing for restaurants, cafés, and counter service. Auto-cutter, USB/Ethernet, starting at $299.",
};

const faqs = [
  {
    question: "Does the printer work with Vertex POS?",
    answer:
      "Yes. The Vertex POS Printer is designed to work with supported Vertex POS setups for restaurant receipt printing.",
  },
  {
    question: "What type of paper does it use?",
    answer:
      "It uses standard thermal receipt paper widths commonly used in restaurant checkout stations.",
  },
  {
    question: "How fast does it print?",
    answer:
      "It is built for high-speed thermal printing so receipts can keep up with busy counter service. Exact print-speed ratings can be confirmed with our team for your configuration.",
  },
  {
    question: "Does it support automatic cutting?",
    answer:
      "Yes. The printer includes automatic receipt cutting so staff can hand guests a clean, finished slip.",
  },
  {
    question: "How does it connect to the POS?",
    answer:
      "Connectivity options include USB and Ethernet so you can match the printer to your restaurant network and counter layout.",
  },
  {
    question: "Is it suitable for busy restaurants?",
    answer:
      "Yes. It is designed for repeated daily use in restaurants, cafés, bars, and counter-service operations.",
  },
  {
    question: "Can multiple printers be used in one restaurant?",
    answer:
      "Yes. Restaurants can deploy multiple printers across counters or stations as part of a supported Vertex POS setup.",
  },
];

export default function PosPrinterPage() {
  return (
    <>
      <PrinterHero />
      <PrinterQuickInfo />
      <PrintingWorkflow />
      <ProductDetails />
      <SpeedReliability />
      <SpecsAndPricing />
      <RestaurantUseCases />
      <PrinterConnectivity />
      <PrinterFaq items={faqs} />
      <PrinterFinalCta />
    </>
  );
}
