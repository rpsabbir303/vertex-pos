import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/LayoutBits";

export const metadata: Metadata = {
  title: "Request a demo",
  description: "See Vertex POS and Production Planner in a live walkthrough.",
};

export default function GetStartedPage() {
  return (
    <section className="bg-night pb-24 pt-32">
      <Container className="grid gap-12 md:grid-cols-[1fr_0.9fr] md:items-start">
        <div className="text-white">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange-mid">
            Request a demo
          </p>
          <h1 className="serif-tight mt-4 text-4xl md:text-5xl">
            See Vertex on your next rush.
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-7 text-white/75">
            Tell us about your restaurant. A Vertex specialist will walk through
            POS, kitchen, and Production Planner with your service style in mind.
          </p>
        </div>
        <form className="rounded-panel bg-white p-6 shadow-mock md:p-8">
          <label className="block text-sm font-semibold">
            Full name
            <input className="mt-2 h-12 w-full rounded-lg border border-line px-3" />
          </label>
          <label className="mt-4 block text-sm font-semibold">
            Work email or phone
            <input className="mt-2 h-12 w-full rounded-lg border border-line px-3" />
          </label>
          <label className="mt-4 block text-sm font-semibold">
            Restaurant name
            <input className="mt-2 h-12 w-full rounded-lg border border-line px-3" />
          </label>
          <label className="mt-4 block text-sm font-semibold">
            Locations
            <select className="mt-2 h-12 w-full rounded-lg border border-line px-3">
              <option>1 location</option>
              <option>2–5 locations</option>
              <option>6+ locations</option>
            </select>
          </label>
          <div className="mt-6">
            <Button href="/products/production-planner" className="w-full">
              Request Demo
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
