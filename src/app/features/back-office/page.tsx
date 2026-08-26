import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { featureGroups } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Back Office",
  description:
    "Vertex POS Back Office features — Menu Engineering for profitability analysis and menu-mix reporting.",
};

const backOffice =
  featureGroups.find((group) => group.title === "Back Office") ??
  featureGroups[0];

export default function BackOfficeFeaturesPage() {
  return (
    <section className="bg-[#FAF8F4] pt-28 pb-20 md:pt-32 md:pb-24">
      <FeatureWide>
        <div className="mx-auto max-w-[900px]">
          <p className="text-[13px] font-medium text-ink-muted">
            <Link href="/features" className="hover:text-orange">
              Features
            </Link>
            <span className="mx-2 text-ink-muted">/</span>
            Back Office
          </p>
          <SectionLabel>Back Office</SectionLabel>
          <h1 className="serif-tight text-4xl md:text-5xl">
            Run the business behind the floor.
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-ink-muted">
            Back Office features help you understand performance, protect
            margins, and make clearer operating decisions.
          </p>

          <div className="mt-12 grid gap-4">
            {backOffice.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-[22px] border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-mock"
              >
                <h2 className="text-[18px] font-semibold text-ink">{item.title}</h2>
                <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                  {item.description}
                </p>
                <p className="mt-4 text-[13px] font-semibold text-orange">
                  Open {item.title} →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/features/back-office/menu-engineering">
              Open Menu Engineering
            </Button>
            <Button href="/features" variant="secondary">
              All Features
            </Button>
          </div>
        </div>
      </FeatureWide>
    </section>
  );
}
