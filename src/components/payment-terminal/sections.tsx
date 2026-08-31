import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { FaqSection } from "@/components/layout/FaqSection";
import {
  businessBenefits,
  customerExperienceFeatures,
  paymentTerminalFaqs,
  paymentTerminalProduct,
  paymentTerminalSetupOptions,
  paymentTerminalTrustIndicators,
  paymentTerminalUseCases,
} from "@/components/payment-terminal/catalog";
import {
  PaymentTerminalUnit,
  TerminalCheckoutScene,
  TerminalCustomerScene,
  TerminalHeroVisual,
  TerminalPaymentScene,
  TerminalProductDetailsDiagram,
  TerminalProductOnlyVisual,
  TerminalTrustAtmosphereVisual,
} from "@/components/payment-terminal/mockups";
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
export function TerminalHero() {
  return (
    <section className="bg-white pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-orange">
                  {paymentTerminalProduct.category}
                </p>
                <h1 className="serif-tight mt-5 text-4xl leading-[1.05] text-ink md:text-[56px]">
                  {paymentTerminalProduct.tagline}
                </h1>
                <p className="mt-5 text-[16px] leading-7 text-ink-muted md:text-[17px]">
                  {paymentTerminalProduct.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/get-started">Get a Quote</Button>
                  <Button href="/get-started" variant="secondary">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <TerminalHeroVisual />
            </Reveal>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 2. PAYMENTS INTRO ─── */
export function ProductIntroduction() {
  return (
    <FeatureSection
      id="features"
      eyebrow="Payments"
      title="Everything you need to take payments."
      copy={paymentTerminalProduct.intro}
      bullets={paymentTerminalProduct.benefits}
      visual={<TerminalPaymentScene mode="tap" />}
    />
  );
}

/* ─── 3. CUSTOMER EXPERIENCE ─── */
export function CustomerExperienceSection() {
  return (
    <FeatureSection
      eyebrow="Customer experience"
      title="Make every payment feel effortless."
      copy="From tap to approval, keep the payment experience simple for customers and straightforward for your team."
      bullets={customerExperienceFeatures}
      bg="fog"
      reverse
      visual={<TerminalCustomerScene />}
    />
  );
}

/* ─── 4. REAL-WORLD CHECKOUT ─── */
export function RealWorldCheckoutSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionLabel>Real-world checkout</SectionLabel>
                <h2 className="serif-tight text-3xl text-ink md:text-[40px] md:leading-[1.12]">
                  Built for real-world checkout.
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                  A professional payment terminal that fits naturally into
                  restaurants, cafés, retail stores, and service businesses.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {paymentTerminalUseCases.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-line bg-[#FAF8F4] p-5 transition-shadow hover:shadow-card"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white">
                        <LineIcon d={item.icon} />
                      </span>
                      <h3 className="mt-4 text-[14px] font-semibold uppercase tracking-[0.08em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-5 text-ink-muted">
                        {item.copy}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <TerminalCheckoutScene />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 5. HARDWARE DETAILS ─── */
export function HardwareDetailsSection() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Hardware details</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Designed around every payment.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-ink-muted">
                Explore the hardware features that make everyday payments simple,
                clear, and reliable.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <TerminalProductDetailsDiagram />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 6. PRODUCT DETAILS ─── */
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
                  A payment terminal built for business.
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                  Professional payment hardware designed to provide a clear,
                  dependable experience for both customers and staff.
                </p>
                <dl className="mt-8 divide-y divide-line rounded-2xl border border-line bg-[#FAF8F4]">
                  {paymentTerminalProduct.specs.map((spec) => (
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
              <TerminalProductOnlyVisual />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 7. BUILT FOR BUSINESS ─── */
export function BusinessBenefitsSection() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Built for business</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                A smoother way to get paid.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Give your team and customers a payment experience that feels
                simple, familiar, and professional.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {businessBenefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-[#FAF8F4]">
                    <LineIcon d={item.icon} />
                  </span>
                  <h3 className="mt-5 text-[14px] font-semibold uppercase tracking-[0.08em] text-ink">
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

/* ─── 8. SETUP ─── */
export function SetupSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Setup</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Choose the payment setup that fits your business.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Start with a Vertex Payment Terminal or work with Vertex to create
                the right payment setup for your business.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {paymentTerminalSetupOptions.map((option) => (
                <article
                  key={option.name}
                  className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-mock md:p-8 ${
                    option.featured
                      ? "border-orange/30 bg-orange-soft/40 shadow-card"
                      : "border-line bg-white shadow-card"
                  }`}
                >
                  <div className="mb-6 flex justify-center rounded-xl border border-line bg-[#FAF8F4] p-6">
                    <PaymentTerminalUnit
                      size="sm"
                      state={option.featured ? "ready" : "approved"}
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
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 9. TRUST / DARK ─── */
export function TerminalTrustSection() {
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
                Payments your customers can trust.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-white/60">
                Create a professional checkout experience with payment hardware
                designed around clarity, simplicity, and everyday business use.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {paymentTerminalTrustIndicators.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-medium text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <TerminalTrustAtmosphereVisual />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 10. FAQ ─── */
export function TerminalFaq() {
  return (
    <FaqSection
      compact
      eyebrow="FAQ"
      title="Payment Terminal questions, answered."
      items={[...paymentTerminalFaqs]}
    />
  );
}

/* ─── 11. FINAL CTA ─── */
export function TerminalFinalCta() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange">
                Ready to get paid?
              </p>
              <h2 className="serif-tight mt-4 text-3xl text-ink md:text-4xl">
                Make every payment simpler.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
                Bring a clean, professional payment experience to your checkout
                with Vertex.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/get-started">Get a Quote</Button>
                <Button href="/get-started" variant="secondary">
                  Contact Sales
                </Button>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-lg">
              <div className="rounded-[28px] border border-line bg-white p-8 shadow-mock md:p-10">
                <PaymentTerminalUnit size="xl" state="ready" />
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}
