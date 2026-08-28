import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { FaqSection } from "@/components/layout/FaqSection";
import {
  cardReaderBusinessTypes,
  cardReaderCustomerThemes,
  cardReaderDesignFeatures,
  cardReaderEcosystemProducts,
  cardReaderExperienceFeatures,
  cardReaderFaqs,
  cardReaderIncluded,
  cardReaderPeaceOfMind,
  cardReaderProduct,
  cardReaderSetupOptions,
  cardReaderTrustIndicators,
  cardReaderWorkflowBullets,
  formatCardReaderPrice,
} from "@/components/pos-card-reader/catalog";
import {
  CardReaderBusinessCard,
  CardReaderBusinessScene,
  CardReaderCheckoutScene,
  CardReaderCustomerScene,
  CardReaderEcosystemVisual,
  CardReaderHeroVisual,
  CardReaderPaymentMethodsVisual,
  CardReaderProductDetailsDiagram,
  CardReaderUnit,
} from "@/components/pos-card-reader/mockups";
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
export function CardReaderHero() {
  return (
    <section className="bg-white pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-orange">
                  {cardReaderProduct.category}
                </p>
                <h1 className="serif-tight mt-5 text-4xl leading-[1.05] text-ink md:text-[56px]">
                  {cardReaderProduct.tagline}
                </h1>
                <p className="mt-5 text-[16px] leading-7 text-ink-muted md:text-[17px]">
                  {cardReaderProduct.heroSupport}
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
              <CardReaderHeroVisual />
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
      eyebrow="Payments"
      title="Payments made simple."
      copy={cardReaderProduct.intro}
      bullets={cardReaderProduct.benefits}
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <CardReaderUnit size="lg" state="ready" />
        </div>
      }
    />
  );
}

/* ─── 3. PAYMENT EXPERIENCE ─── */
export function PaymentExperienceSection() {
  return (
    <FeatureSection
      id="features"
      title="Make every payment feel effortless."
      copy="The Vertex Card Reader creates a clear, simple payment experience for customers and staff — from amount presentation through confirmation."
      bullets={cardReaderExperienceFeatures}
      bg="fog"
      reverse
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <CardReaderUnit size="lg" state="tap" showTap angle="tilt" />
        </div>
      }
    />
  );
}

/* ─── 4. PAYMENT METHODS ─── */
export function PaymentMethodsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Payment methods</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Ready for the way customers pay.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Accept contactless, chip, and digital wallet payments at the
                counter.
              </p>
            </div>
            <div className="mt-12">
              <CardReaderPaymentMethodsVisual />
            </div>
            <div className="mx-auto mt-10 max-w-lg">
              <CardReaderCustomerScene />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 5. REAL BUSINESS ─── */
export function RealBusinessSection() {
  return (
    <FeatureSection
      title="Built for real-world checkout."
      copy="From restaurant counters to retail and service desks — the Card Reader fits naturally into everyday customer-facing payment environments."
      bg="fog"
      visual={<CardReaderBusinessScene size="lg" state="approved" />}
    />
  );
}

/* ─── 6. CHECKOUT WORKFLOW ─── */
export function CheckoutWorkflowSection() {
  return (
    <FeatureSection
      title="Keep checkout moving."
      copy="Connect payments to your Vertex POS workflow for a cleaner, more efficient checkout — from order review through payment confirmation."
      bullets={cardReaderWorkflowBullets}
      reverse
      visual={<CardReaderCheckoutScene />}
    />
  );
}

/* ─── 7. VERTEX ECOSYSTEM ─── */
export function VertexEcosystemSection() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionLabel>Vertex ecosystem</SectionLabel>
                <h2 className="serif-tight text-3xl text-ink md:text-[40px]">
                  One connected checkout experience.
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                  The Card Reader plays a key role in a complete Vertex checkout
                  environment — alongside your POS Device, Monitor, Printer, and
                  counter hardware.
                </p>
                <ul className="mt-8 flex flex-wrap gap-3">
                  {cardReaderEcosystemProducts.map((product) => (
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
              <CardReaderEcosystemVisual />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 8. CUSTOMER EXPERIENCE ─── */
export function CustomerExperienceSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionLabel>Customer experience</SectionLabel>
                <h2 className="serif-tight text-3xl text-ink md:text-[40px]">
                  Designed for your customers.
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                  A clear payment display and simple interaction help customers
                  complete checkout with confidence.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {cardReaderCustomerThemes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                        aria-hidden
                      />
                      <span className="text-[14px] leading-6 text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <CardReaderCustomerScene />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 9. BUSINESS TYPES ─── */
export function BusinessTypesSection() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Business types</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Made for the way businesses work.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Professional card payments for different customer-facing checkout
                environments.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cardReaderBusinessTypes.map((type) => (
                <article key={type.title}>
                  <CardReaderBusinessCard
                    title={type.title}
                    state={type.title === "Restaurant" ? "tap" : "ready"}
                  />
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

/* ─── 10. PRODUCT DESIGN ─── */
export function ProductDesignSection() {
  return (
    <FeatureSection
      title="Small footprint. Big role."
      copy="A compact countertop payment device designed for clear customer interaction and professional presentation at the counter."
      bullets={cardReaderDesignFeatures}
      reverse
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <CardReaderUnit size="lg" state="ready" angle="tilt-right" />
        </div>
      }
    />
  );
}

/* ─── 11. PRODUCT DETAILS ─── */
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
                  {cardReaderProduct.name} specifications
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                  Confirmed product information for the Vertex POS Card Reader.
                  Contact sales for configuration details.
                </p>
                <dl className="mt-8 divide-y divide-line rounded-2xl border border-line bg-[#FAF8F4]">
                  {cardReaderProduct.specs.map((spec) => (
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
                    {formatCardReaderPrice(cardReaderProduct.price)}
                  </span>
                </p>
              </div>
              <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
                <CardReaderUnit size="lg" state="ready" glow />
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["Contactless", "Chip & PIN", "Wallets", "Vertex POS"].map(
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

/* ─── 12. PRODUCT ANNOTATION ─── */
export function ProductComponentsShowcase() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Components</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Built for modern payments.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-ink-muted">
                Explore the design and features of the Vertex POS Card Reader.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <CardReaderProductDetailsDiagram />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 13. TRUST / SECURITY ─── */
export function CardReaderTrustSection() {
  return (
    <section className="bg-night py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-mid">
                Trusted payments
              </p>
              <h2 className="serif-tight mt-6 text-3xl text-white md:text-4xl">
                Payments you can trust.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-white/60">
                Secure payment processing and Vertex POS integration — built for
                restaurants and counter-service operations that need reliable
                payments every day.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {cardReaderTrustIndicators.map((item) => (
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

/* ─── 14. PACKAGE ─── */
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
                Start with the Card Reader or plan a complete Vertex checkout
                setup with sales.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {cardReaderSetupOptions.map((option) => (
                <article
                  key={option.name}
                  className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-mock md:p-8 ${
                    option.featured
                      ? "border-orange/30 bg-orange-soft/40 shadow-card"
                      : "border-line bg-white shadow-card"
                  }`}
                >
                  <div className="mb-6 flex justify-center rounded-xl border border-line bg-[#FAF8F4] p-6">
                    <CardReaderUnit size="sm" state="ready" />
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
              {cardReaderIncluded.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-line bg-[#FAF8F4] p-6"
                >
                  <div className="w-[100px] shrink-0">
                    <CardReaderUnit size="sm" state="ready" />
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

/* ─── 15. PEACE OF MIND ─── */
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
                Hardware and support designed to keep your payments running
                smoothly.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cardReaderPeaceOfMind.map((item) => (
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

/* ─── 16. FAQ ─── */
export function CardReaderFaq() {
  return (
    <FaqSection
      compact
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      items={[...cardReaderFaqs]}
    />
  );
}

/* ─── 17. FINAL CTA ─── */
export function CardReaderFinalCta() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="serif-tight text-3xl text-ink md:text-4xl">
                Make every payment a better experience.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
                Bring a cleaner, more professional payment experience to your
                Vertex POS setup.
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
                <CardReaderUnit size="xl" state="approved" glow />
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}
