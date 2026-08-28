import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { FaqSection } from "@/components/layout/FaqSection";
import {
  cashCounterProduct,
  checkoutExperienceBullets,
  counterBusinessTypes,
  counterDesignFeatures,
  counterEcosystemProducts,
  counterFaqs,
  counterIncluded,
  counterPeaceOfMind,
  counterSetupOptions,
  counterTrustIndicators,
} from "@/components/cash-counter/catalog";
import {
  CounterBusinessCard,
  CounterBusinessScene,
  CounterCheckoutScene,
  CounterEcosystemVisual,
  CounterHeroVisual,
  CounterProductDetailsDiagram,
  CounterStationUnit,
} from "@/components/cash-counter/mockups";
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
export function CounterHero() {
  return (
    <section className="bg-white pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-orange">
                  {cashCounterProduct.category}
                </p>
                <h1 className="serif-tight mt-5 text-4xl leading-[1.05] text-ink md:text-[56px]">
                  {cashCounterProduct.tagline}
                </h1>
                <p className="mt-5 text-[16px] leading-7 text-ink-muted md:text-[17px]">
                  {cashCounterProduct.heroSupport}
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
              <CounterHeroVisual />
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
      eyebrow="Checkout station"
      title="Everything your checkout needs."
      copy={cashCounterProduct.intro}
      bullets={cashCounterProduct.benefits}
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <CounterStationUnit size="lg" layout="full" />
        </div>
      }
    />
  );
}

/* ─── 3. COUNTER DESIGN ─── */
export function CounterDesignSection() {
  return (
    <FeatureSection
      id="features"
      title="Designed around your POS."
      copy="The Vertex Cash Counter is built to accommodate your POS equipment and create an organized, professional checkout environment."
      bullets={counterDesignFeatures}
      bg="fog"
      reverse
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <CounterStationUnit size="lg" layout="full" />
        </div>
      }
    />
  );
}

/* ─── 4. REAL BUSINESS ─── */
export function RealBusinessSection() {
  return (
    <FeatureSection
      title="Made for real-world business."
      copy="The Vertex Cash Counter fits naturally into everyday customer-facing environments — from retail floors to restaurant counters and service desks."
      visual={<CounterBusinessScene size="lg" layout="full" />}
    />
  );
}

/* ─── 5. CHECKOUT EXPERIENCE ─── */
export function CheckoutExperienceSection() {
  return (
    <FeatureSection
      title="A better space for every transaction."
      copy="A dedicated POS counter creates a cleaner, more professional checkout experience — with organized hardware placement and a clear workspace for staff and customers."
      bullets={checkoutExperienceBullets}
      bg="fog"
      reverse
      visual={<CounterCheckoutScene size="lg" />}
    />
  );
}

/* ─── 6. COMPLETE POS SETUP ─── */
export function CompletePosSetupSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionLabel>Vertex ecosystem</SectionLabel>
                <h2 className="serif-tight text-3xl text-ink md:text-[40px]">
                  Your POS. Your workspace. One complete setup.
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                  Combine the Cash Counter with Vertex POS hardware to create a
                  complete, connected checkout environment.
                </p>
                <ul className="mt-8 flex flex-wrap gap-3">
                  {counterEcosystemProducts.map((product) => (
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
              <CounterEcosystemVisual />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 7. FLEXIBLE BUSINESS ─── */
export function FlexibleBusinessSection() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Business types</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Designed to fit your business.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                A professional checkout station for different customer-facing
                environments.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {counterBusinessTypes.map((type) => (
                <article key={type.title}>
                  <CounterBusinessCard title={type.title} layout="full" />
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

/* ─── 8. PRODUCT DETAILS ─── */
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
                  {cashCounterProduct.name} specifications
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                  Confirmed product information for the Vertex Cash Counter.
                  Contact sales for configuration details.
                </p>
                <dl className="mt-8 divide-y divide-line rounded-2xl border border-line bg-[#FAF8F4]">
                  {cashCounterProduct.specs.map((spec) => (
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
              </div>
              <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
                <CounterStationUnit size="lg" layout="full" />
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["POS Device", "POS Monitor", "Work surface", "Vertex POS"].map(
                    (label) => (
                      <span
                        key={label}
                        className="rounded-full border border-line bg-[#FAF8F4] px-3 py-1 text-[11px] font-medium text-ink-muted"
                      >
                        {label}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 9. PRODUCT ANNOTATION ─── */
export function ProductComponentsShowcase() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Components</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Built for the modern checkout.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-ink-muted">
                Explore the design of the Vertex Cash Counter checkout station.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <CounterProductDetailsDiagram />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 10. TRUST ─── */
export function CounterTrustSection() {
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
                Designed for better business.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-white/60">
                A professional checkout station designed to create a cleaner,
                more organized POS environment for everyday business operations.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {counterTrustIndicators.map((item) => (
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

/* ─── 11. COMPLETE SETUP ─── */
export function CompleteSetupSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Setup</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Create your complete checkout setup.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Start with the Cash Counter or plan a full Vertex checkout
                environment with sales.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {counterSetupOptions.map((option) => (
                <article
                  key={option.name}
                  className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-mock md:p-8 ${
                    option.featured
                      ? "border-orange/30 bg-orange-soft/40 shadow-card"
                      : "border-line bg-white shadow-card"
                  }`}
                >
                  <div className="mb-6 flex justify-center rounded-xl border border-line bg-[#FAF8F4] p-6">
                    <CounterStationUnit
                      size="sm"
                      layout={option.layout === "ecosystem" ? "full" : "minimal"}
                    />
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
              {counterIncluded.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-line bg-[#FAF8F4] p-6"
                >
                  <div className="w-[120px] shrink-0">
                    <CounterStationUnit size="sm" layout="minimal" />
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

/* ─── 12. PEACE OF MIND ─── */
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
              {counterPeaceOfMind.map((item) => (
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

/* ─── 13. FAQ ─── */
export function CounterFaq() {
  return (
    <FaqSection
      compact
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      items={[...counterFaqs]}
    />
  );
}

/* ─── 14. FINAL CTA ─── */
export function CounterFinalCta() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="serif-tight text-3xl text-ink md:text-4xl">
                Build a checkout space that works.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
                Create a cleaner, more professional POS environment with Vertex.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/get-started">Get Started</Button>
                <Button href="/get-started" variant="secondary">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-2xl">
              <div className="rounded-[28px] border border-line bg-white p-8 shadow-mock md:p-10">
                <CounterStationUnit size="xl" layout="full" />
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}
