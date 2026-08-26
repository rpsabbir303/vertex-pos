import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { featureGroups } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Vertex POS features — including Back Office Menu Engineering and the REST API for developers.",
};

export default function FeaturesPage() {
  return (
    <section className="bg-[#FAF8F4] pt-28 pb-20 md:pt-32 md:pb-24">
      <FeatureWide>
        <div className="mx-auto max-w-[900px]">
          <SectionLabel>Features</SectionLabel>
          <h1 className="serif-tight text-4xl md:text-5xl">
            Tools that help restaurants run smarter.
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-ink-muted">
            Explore Vertex POS feature areas — from Back Office Menu Engineering
            to the REST API for connecting your own applications and workflows.
          </p>

          <div className="mt-12 space-y-8">
            {featureGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                  {group.title}
                </p>
                <div className="mt-4 grid gap-4">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-[22px] border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-mock"
                    >
                      <h2 className="text-[18px] font-semibold text-ink">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                        {item.description}
                      </p>
                      <p className="mt-4 text-[13px] font-semibold text-orange">
                        View feature →
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/features/back-office/menu-engineering">
              Open Menu Engineering
            </Button>
            <Button href="/features/developers/rest-api" variant="secondary">
              Explore REST API
            </Button>
          </div>
        </div>
      </FeatureWide>
    </section>
  );
}
