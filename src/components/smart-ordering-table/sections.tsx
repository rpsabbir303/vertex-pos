import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { FaqSection } from "@/components/layout/FaqSection";
import {
  posWorkflowSteps,
  serviceBenefits,
  smartPosTableFaqs,
  smartPosTableProduct,
  smartPosTableSetupOptions,
  smartPosTableTrustIndicators,
  smartPosTableUseCases,
  touchscreenFeatures,
} from "@/components/smart-ordering-table/catalog";
import {
  SmartPosTableCounterScene,
  SmartPosTableDetailsDiagram,
  SmartPosTableHeroVisual,
  SmartPosTableProductOnlyVisual,
  SmartPosTableRestaurantScene,
  SmartPosTableScreenScene,
  SmartPosTableTrustAtmosphereVisual,
  SmartPosTableUnit,
} from "@/components/smart-ordering-table/mockups";
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
export function SmartPosTableHero() {
  return (
    <section className="bg-white pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-orange">
                  {smartPosTableProduct.category}
                </p>
                <h1 className="serif-tight mt-5 text-4xl leading-[1.05] text-ink md:text-[56px]">
                  {smartPosTableProduct.tagline}
                </h1>
                <p className="mt-5 text-[16px] leading-7 text-ink-muted md:text-[17px]">
                  {smartPosTableProduct.description}
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
              <SmartPosTableHeroVisual />
            </Reveal>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 2. ALL-IN-ONE WORKSTATION ─── */
export function AllInOneWorkstationSection() {
  return (
    <FeatureSection
      id="features"
      eyebrow="All-in-one workstation"
      title="Everything your counter needs."
      copy={smartPosTableProduct.intro}
      bullets={smartPosTableProduct.benefits}
      visual={<SmartPosTableCounterScene />}
    />
  );
}

/* ─── 3. TOUCHSCREEN EXPERIENCE ─── */
export function TouchscreenExperienceSection() {
  return (
    <FeatureSection
      eyebrow="Touchscreen experience"
      title="A smarter way to run every order."
      copy="Give staff a clear touchscreen interface for browsing menus, building orders, reviewing totals, and completing checkout without switching between multiple workstations."
      bullets={touchscreenFeatures}
      bg="fog"
      reverse
      visual={<SmartPosTableScreenScene />}
    />
  );
}

/* ─── 4. BUILT FOR RESTAURANTS ─── */
export function BuiltForRestaurantsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionLabel>Built for restaurants</SectionLabel>
                <h2 className="serif-tight text-3xl text-ink md:text-[40px] md:leading-[1.12]">
                  One workstation. Many service environments.
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                  The Smart POS Table fits naturally into restaurants, cafés,
                  quick-service counters, and other customer-facing service
                  environments.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {smartPosTableUseCases.map((item) => (
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
              <SmartPosTableRestaurantScene />
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
                Built around the way you serve.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-ink-muted">
                Explore the physical design and staff-facing capabilities of the
                Vertex Smart POS Table.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <SmartPosTableDetailsDiagram />
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
                  Vertex Smart POS Table specifications
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                  Product specifications for the Vertex Smart POS Table. Contact
                  sales for configuration and integration options.
                </p>
                <dl className="mt-8 divide-y divide-line rounded-2xl border border-line bg-[#FAF8F4]">
                  {smartPosTableProduct.specs.map((spec) => (
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
              <SmartPosTableProductOnlyVisual />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 7. POS WORKFLOW ─── */
export function PosWorkflowSection() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>POS workflow</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                From menu to checkout, all in one place.
              </h2>
            </div>
            <div className="mx-auto mt-12 max-w-4xl">
              <ol className="flex flex-col gap-3 md:gap-0">
                {posWorkflowSteps.map((step, index) => (
                  <li key={step} className="flex flex-col items-center">
                    <div className="flex w-full items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 shadow-card md:mx-auto md:max-w-md">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-orange/30 bg-orange-soft/50 text-[13px] font-semibold text-orange">
                        {index + 1}
                      </span>
                      <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink">
                        {step}
                      </p>
                    </div>
                    {index < posWorkflowSteps.length - 1 ? (
                      <span aria-hidden className="py-1 text-orange/50">
                        ↓
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 8. BENEFITS ─── */
export function ServiceBenefitsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Built for service</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Simplify the way your team works.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Give staff one clear workstation for everyday ordering and
                checkout.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {serviceBenefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-line bg-[#FAF8F4] p-6 transition-shadow hover:shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white">
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

/* ─── 9. SETUP ─── */
export function SetupSection() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Setup</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Choose the setup that fits your business.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Start with an all-in-one Smart POS Table or work with Vertex to
                configure your complete service counter.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {smartPosTableSetupOptions.map((option) => (
                <article
                  key={option.name}
                  className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-mock md:p-8 ${
                    option.featured
                      ? "border-orange/30 bg-orange-soft/40 shadow-card"
                      : "border-line bg-white shadow-card"
                  }`}
                >
                  <div className="mb-6 flex justify-center rounded-xl border border-line bg-[#FAF8F4] p-6">
                    <SmartPosTableUnit size="sm" />
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

/* ─── 10. TRUST ─── */
export function SmartPosTableTrustSection() {
  return (
    <section className="bg-night py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-mid">
                Built for the counter
              </p>
              <h2 className="serif-tight mt-6 text-3xl text-white md:text-4xl">
                One smart workstation for every service.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-white/60">
                Bring ordering, checkout, and everyday POS operations together in
                a clean integrated setup designed for modern restaurant
                environments.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {smartPosTableTrustIndicators.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-medium text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <SmartPosTableTrustAtmosphereVisual />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 11. FAQ ─── */
export function SmartPosTableFaq() {
  return (
    <FaqSection
      compact
      eyebrow="FAQ"
      title="Smart POS Table questions, answered."
      items={[...smartPosTableFaqs]}
    />
  );
}

/* ─── 12. FINAL CTA ─── */
export function SmartPosTableFinalCta() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange">
                Ready to simplify checkout?
              </p>
              <h2 className="serif-tight mt-4 text-3xl text-ink md:text-4xl">
                Put your whole POS workflow in one place.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
                Bring ordering, checkout, and everyday restaurant operations
                together with the Vertex Smart POS Table.
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
                <SmartPosTableUnit size="lg" />
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}
