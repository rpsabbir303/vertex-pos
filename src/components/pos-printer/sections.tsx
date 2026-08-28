import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { FaqSection } from "@/components/layout/FaqSection";
import {
  formatPrinterPrice,
  printerBusinessTypes,
  printerDesignFeatures,
  printerEcosystemProducts,
  printerFaqs,
  printerIncluded,
  printerPeaceOfMind,
  printerPerformanceFeatures,
  printerProduct,
  printerSetupOptions,
  printerTrustIndicators,
  printerWorkflowBullets,
} from "@/components/pos-printer/catalog";
import {
  PosPrinterUnit,
  PrinterBusinessCard,
  PrinterBusinessScene,
  PrinterCheckoutScene,
  PrinterEcosystemVisual,
  PrinterHeroVisual,
  PrinterProductDetailsDiagram,
} from "@/components/pos-printer/mockups";
import { Reveal } from "@/components/pos-monitor/Reveal";

function Inner({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] ${className}`}>{children}</div>
  );
}

function LineIcon({ d }: { d: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={d}
        stroke="#F15A24"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type FeatureSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  copy: string;
  bullets?: readonly string[];
  visual: React.ReactNode;
  reverse?: boolean;
  bg?: "white" | "fog";
};

function FeatureSection({
  id,
  eyebrow,
  title,
  copy,
  bullets,
  visual,
  reverse = false,
  bg = "white",
}: FeatureSectionProps) {
  return (
    <section
      id={id}
      className={bg === "fog" ? "bg-[#F5F4F2] py-20 md:py-28" : "bg-white py-20 md:py-28"}
    >
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className={reverse ? "lg:order-2" : ""}>
                {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
                <h2 className="serif-tight text-3xl text-ink md:text-[40px] md:leading-[1.12]">
                  {title}
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ink-muted">{copy}</p>
                {bullets ? (
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                          aria-hidden
                        />
                        <span className="text-[14px] leading-6 text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className={reverse ? "lg:order-1" : ""}>{visual}</div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 1. HERO ─── */
export function PrinterHero() {
  return (
    <section className="bg-white pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-orange">
                  {printerProduct.category}
                </p>
                <h1 className="serif-tight mt-5 text-4xl leading-[1.05] text-ink md:text-[56px]">
                  {printerProduct.tagline}
                </h1>
                <p className="mt-5 text-[16px] leading-7 text-ink-muted md:text-[17px]">
                  {printerProduct.heroSupport}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/get-started">Get Started</Button>
                  <Button href="#features" variant="secondary">
                    Explore Features
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <PrinterHeroVisual />
            </Reveal>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 2. PRODUCT INTRODUCTION ─── */
export function ProductIntroduction() {
  return (
    <FeatureSection
      eyebrow="Receipt printing"
      title="Everything you need to keep receipts moving."
      copy={printerProduct.intro}
      bullets={printerProduct.benefits}
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <PosPrinterUnit size="lg" printing />
        </div>
      }
    />
  );
}

/* ─── 3. PRINTING PERFORMANCE ─── */
export function PrintingPerformanceSection() {
  return (
    <FeatureSection
      id="features"
      title="Built for busy checkout environments."
      copy="The Vertex POS Printer is designed for repeated daily use — delivering fast thermal receipts when your counter is at its busiest."
      bullets={printerPerformanceFeatures}
      bg="fog"
      reverse
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <PosPrinterUnit size="lg" printing />
        </div>
      }
    />
  );
}

/* ─── 4. REAL BUSINESS ─── */
export function RealBusinessSection() {
  return (
    <FeatureSection
      title="Ready for the everyday rush."
      copy="From restaurant counters to retail checkout and service desks — the POS Printer fits naturally into real-world business environments."
      visual={<PrinterBusinessScene size="lg" />}
    />
  );
}

/* ─── 5. CHECKOUT WORKFLOW ─── */
export function CheckoutWorkflowSection() {
  return (
    <FeatureSection
      title="Keep checkout simple."
      copy="Pair reliable receipt printing with your Vertex POS workflow for a cleaner, more efficient checkout experience at the counter."
      bullets={printerWorkflowBullets}
      bg="fog"
      reverse
      visual={<PrinterCheckoutScene size="md" />}
    />
  );
}

/* ─── 6. VERTEX ECOSYSTEM ─── */
export function VertexEcosystemSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionLabel>Vertex ecosystem</SectionLabel>
                <h2 className="serif-tight text-3xl text-ink md:text-[40px]">
                  Designed to work as part of your POS setup.
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                  The POS Printer plays a key role in a complete Vertex checkout
                  environment — alongside your POS Device, Monitor, and counter
                  hardware.
                </p>
                <ul className="mt-8 flex flex-wrap gap-3">
                  {printerEcosystemProducts.map((product) => (
                    <li key={product.href}>
                      <Link
                        href={product.href}
                        className={`inline-flex rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
                          "primary" in product && product.primary
                            ? "border-orange/40 bg-orange-soft/50 text-orange"
                            : "border-line bg-white text-ink hover:border-orange/40 hover:text-orange"
                        }`}
                      >
                        {product.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <PrinterEcosystemVisual />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 7. BUSINESS TYPES ─── */
export function BusinessTypesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Business types</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Made for the way businesses work.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Reliable receipt printing for different customer-facing checkout
                environments.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {printerBusinessTypes.map((type) => (
                <article key={type.title}>
                  <PrinterBusinessCard title={type.title} />
                  <p className="mt-4 text-[14px] leading-6 text-ink-muted">
                    {type.copy}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 8. PRODUCT DESIGN ─── */
export function ProductDesignSection() {
  return (
    <FeatureSection
      title="Designed for the counter."
      copy="A thermal receipt printer built to sit at the counter and support everyday checkout — with clear status, automatic cutting, and reliable connectivity."
      bullets={printerDesignFeatures}
      bg="fog"
      reverse
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <PosPrinterUnit size="lg" printing={false} />
        </div>
      }
    />
  );
}

/* ─── 9. PRODUCT DETAILS ─── */
export function HardwareSpecs() {
  return (
    <section id="specifications" className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <SectionLabel>Product details</SectionLabel>
                <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                  {printerProduct.name} specifications
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                  Confirmed product information for the Vertex POS Printer.
                  Contact sales for configuration details.
                </p>
                <dl className="mt-8 divide-y divide-line rounded-2xl border border-line bg-[#FAF8F4]">
                  {printerProduct.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid gap-1 px-5 py-4 sm:grid-cols-[minmax(130px,0.42fr)_1fr] sm:gap-6"
                    >
                      <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-faint">
                        {spec.label}
                      </dt>
                      <dd className="text-[15px] font-medium text-ink">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-[14px] font-semibold text-ink">
                  From{" "}
                  <span className="text-orange">
                    {formatPrinterPrice(printerProduct.price)}
                  </span>
                </p>
              </div>
              <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
                <PosPrinterUnit size="lg" printing />
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["Thermal", "USB", "Ethernet", "Auto cut"].map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-line bg-[#FAF8F4] px-3 py-1 text-[11px] font-medium text-ink-muted"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 10. PRODUCT ANNOTATION ─── */
export function ProductComponentsShowcase() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Components</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Built for reliable receipt printing.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-ink-muted">
                Explore the design and features of the Vertex POS Printer.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <PrinterProductDetailsDiagram />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 11. TRUST ─── */
export function PrinterTrustSection() {
  return (
    <section className="bg-night py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-mid">
                Trusted at the counter
              </p>
              <h2 className="serif-tight mt-6 text-3xl text-white md:text-4xl">
                Reliable printing for everyday business.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-white/60">
                Fast thermal printing, automatic receipt cutting, and Vertex POS
                compatibility — built for restaurants, cafés, and counter-service
                operations.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {printerTrustIndicators.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-medium text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 12. PACKAGE / SETUP ─── */
export function PackageSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Setup</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Everything you need to get started.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Start with the POS Printer or plan a complete Vertex checkout
                setup with sales.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {printerSetupOptions.map((option) => (
                <article
                  key={option.name}
                  className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-mock md:p-8 ${
                    option.featured
                      ? "border-orange/30 bg-orange-soft/40 shadow-card"
                      : "border-line bg-white shadow-card"
                  }`}
                >
                  <div className="mb-6 flex justify-center rounded-xl border border-line bg-[#FAF8F4] p-6">
                    <PosPrinterUnit size="sm" printing />
                  </div>
                  <h3 className="text-[20px] font-semibold text-ink">
                    {option.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                    {option.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2">
                    {option.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[14px] text-ink"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange"
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href={option.href}
                      variant={option.featured ? "primary" : "secondary"}
                      className="w-full sm:w-auto"
                    >
                      {option.cta}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {printerIncluded.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-line bg-[#FAF8F4] p-6"
                >
                  <div className="w-[100px] shrink-0">
                    <PosPrinterUnit size="sm" printing={false} />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                      {item.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 13. PEACE OF MIND ─── */
export function PeaceOfMindSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="serif-tight text-3xl text-ink md:text-4xl">
                Peace of mind with Vertex.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Hardware and support designed to keep your checkout running
                smoothly.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {printerPeaceOfMind.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-line bg-[#FAF8F4] p-6 transition-shadow hover:shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white">
                    <LineIcon d={item.icon} />
                  </span>
                  <h3 className="mt-5 text-[16px] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 14. FAQ ─── */
export function PrinterFaq() {
  return (
    <FaqSection
      compact
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      items={[...printerFaqs]}
    />
  );
}

/* ─── 15. FINAL CTA ─── */
export function PrinterFinalCta() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="serif-tight text-3xl text-ink md:text-4xl">
                Keep your checkout moving.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
                Add reliable receipt printing to your Vertex POS setup.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/get-started">Get Started</Button>
                <Button href="/get-started" variant="secondary">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-lg">
              <div className="rounded-[28px] border border-line bg-white p-8 shadow-mock md:p-10">
                <PosPrinterUnit size="xl" printing />
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}
