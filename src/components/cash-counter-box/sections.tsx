import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { FaqSection } from "@/components/layout/FaqSection";
import {
  cashBoxBusinessTypes,
  cashBoxDesignFeatures,
  cashBoxEcosystemProducts,
  cashBoxFaqs,
  cashBoxIncluded,
  cashBoxOrganizationFeatures,
  cashBoxPeaceOfMind,
  cashBoxProduct,
  cashBoxSecurityFeatures,
  cashBoxSetupOptions,
  cashBoxTrustIndicators,
  cashBoxWorkflowBullets,
  formatCashBoxPrice,
} from "@/components/cash-counter-box/catalog";
import {
  CashBoxBusinessScene,
  CashBoxCheckoutScene,
  CashBoxEcosystemVisual,
  CashBoxHeroVisual,
  CashBoxOpenDrawerVisual,
  CashBoxProductDetailsDiagram,
  CashBoxUnit,
} from "@/components/cash-counter-box/mockups";
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
export function CashBoxHero() {
  return (
    <section className="bg-white pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-orange">
                  {cashBoxProduct.category}
                </p>
                <h1 className="serif-tight mt-5 text-4xl leading-[1.05] text-ink md:text-[56px]">
                  {cashBoxProduct.tagline}
                </h1>
                <p className="mt-5 text-[16px] leading-7 text-ink-muted md:text-[17px]">
                  {cashBoxProduct.description}
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
              <CashBoxHeroVisual />
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
      eyebrow="Cash handling"
      title="Everything in its place."
      copy={cashBoxProduct.intro}
      bullets={cashBoxProduct.benefits}
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <CashBoxUnit size="lg" visual="open" />
        </div>
      }
    />
  );
}

/* ─── 3. CASH ORGANIZATION ─── */
export function CashOrganizationSection() {
  return (
    <FeatureSection
      id="features"
      title="Keep cash organized."
      copy="The Vertex Cash Counter Box supports organized bill and coin storage with a multi-slot tray — so staff can access cash quickly during everyday checkout."
      bullets={cashBoxOrganizationFeatures}
      bg="fog"
      reverse
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <CashBoxUnit size="lg" visual="open" />
        </div>
      }
    />
  );
}

/* ─── 4. CHECKOUT WORKFLOW ─── */
export function CheckoutWorkflowSection() {
  return (
    <FeatureSection
      title="Built for everyday checkout."
      copy="The Cash Counter Box fits naturally into busy checkout environments — giving staff organized, accessible cash storage during everyday POS transactions."
      bullets={cashBoxWorkflowBullets}
      visual={<CashBoxCheckoutScene size="lg" visual="open" />}
    />
  );
}

/* ─── 5. SECURE CASH STORAGE ─── */
export function SecureStorageSection() {
  return (
    <FeatureSection
      title="Keep your cash where it belongs."
      copy="Lockable cash storage with a key helps protect bills and coins between transactions and at the end of service — built with commercial-grade steel for everyday counter use."
      bullets={cashBoxSecurityFeatures}
      bg="fog"
      reverse
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <CashBoxUnit size="lg" visual="closed" />
        </div>
      }
    />
  );
}

/* ─── 6. PRODUCT DESIGN ─── */
export function ProductDesignSection() {
  return (
    <FeatureSection
      title="Designed for the checkout counter."
      copy="A counter-ready cash drawer designed for professional appearance, easy access, and everyday restaurant and retail checkout operations."
      bullets={cashBoxDesignFeatures}
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <CashBoxUnit size="lg" visual="closed" />
        </div>
      }
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
                  Complete your Vertex checkout setup.
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                  The Cash Counter Box is Vertex POS compatible and designed to
                  work alongside other Vertex hardware as part of a connected
                  checkout environment.
                </p>
                <ul className="mt-8 flex flex-wrap gap-3">
                  {cashBoxEcosystemProducts.map((product) => (
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
              <CashBoxEcosystemVisual />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 8. REAL BUSINESS ─── */
export function RealBusinessSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <CashBoxBusinessScene size="lg" />
              <div>
                <SectionLabel>Business environments</SectionLabel>
                <h2 className="serif-tight text-3xl text-ink md:text-[40px]">
                  Made for real-world business.
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                  From restaurant counters to retail and service desks — organized
                  cash storage that fits naturally into everyday checkout
                  environments.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {cashBoxBusinessTypes.map((type) => (
                    <div
                      key={type.title}
                      className="rounded-xl border border-line bg-[#FAF8F4] p-4"
                    >
                      <p className="text-[14px] font-semibold text-ink">
                        {type.title}
                      </p>
                      <p className="mt-1 text-[13px] leading-5 text-ink-muted">
                        {type.copy}
                      </p>
                    </div>
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
                  {cashBoxProduct.name} specifications
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                  Confirmed product information for the Vertex Cash Counter Box.
                  Contact sales for configuration details.
                </p>
                <dl className="mt-8 divide-y divide-line rounded-2xl border border-line bg-[#FAF8F4]">
                  {cashBoxProduct.specs.map((spec) => (
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
                    {formatCashBoxPrice(cashBoxProduct.price)}
                  </span>
                </p>
              </div>
              <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
                <CashBoxUnit size="lg" visual="open" />
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["Bills", "Coins", "Lock", "Vertex POS"].map((label) => (
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
                Built for organized cash handling.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-ink-muted">
                Explore the physical design and compartments of the Vertex Cash
                Counter Box.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <CashBoxProductDetailsDiagram />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 11. OPEN DRAWER VISUAL ─── */
export function OpenDrawerSection() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Internal layout</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Organized from the inside out.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-ink-muted">
                Multi-slot bill and coin tray organization for everyday cash
                handling at the counter.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-2xl">
              <CashBoxOpenDrawerVisual />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 12. WHAT'S INCLUDED ─── */
export function PackageSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Package</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Everything you need to get started.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Start with the Cash Counter Box or plan a complete Vertex counter
                setup with sales.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {cashBoxSetupOptions.map((option) => (
                <article
                  key={option.name}
                  className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-mock md:p-8 ${
                    option.featured
                      ? "border-orange/30 bg-orange-soft/40 shadow-card"
                      : "border-line bg-white shadow-card"
                  }`}
                >
                  <div className="mb-6 flex justify-center rounded-xl border border-line bg-[#FAF8F4] p-6">
                    <CashBoxUnit size="sm" visual={option.visual} />
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
              {cashBoxIncluded.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-line bg-[#FAF8F4] p-6"
                >
                  <div className="w-[100px] shrink-0">
                    <CashBoxUnit size="sm" visual="open" />
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

/* ─── 13. TRUST ─── */
export function CashBoxTrustSection() {
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
                Built for everyday business.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-white/60">
                Secure cash storage, organized compartments, and Vertex POS
                compatibility — built for restaurant counters that handle cash
                every day.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {cashBoxTrustIndicators.map((item) => (
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

/* ─── 14. PEACE OF MIND ─── */
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
                Hardware and support designed to keep your counter running
                smoothly.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cashBoxPeaceOfMind.map((item) => (
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

/* ─── 15. FAQ ─── */
export function CashBoxFaq() {
  return (
    <FaqSection
      compact
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      items={[...cashBoxFaqs]}
    />
  );
}

/* ─── 16. FINAL CTA ─── */
export function CashBoxFinalCta() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="serif-tight text-3xl text-ink md:text-4xl">
                Keep your checkout organized.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
                Add reliable cash handling to your Vertex POS environment.
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
                <CashBoxUnit size="xl" visual="open" />
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}
