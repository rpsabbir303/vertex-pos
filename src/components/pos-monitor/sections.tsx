import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { FaqSection } from "@/components/layout/FaqSection";
import {
  monitorFaqs,
  monitorGrowthLinks,
  monitorIntroAdvantages,
  monitorProduct,
  monitorSetupOptions,
  monitorSpecs,
  monitorTestimonial,
  monitorTrustFeatures,
  monitorWorkFeatures,
} from "@/components/pos-monitor/catalog";
import {
  MonitorCounterScene,
  MonitorHeroVisual,
  MonitorUnit,
  ProductDetailsDiagram,
} from "@/components/pos-monitor/mockups";
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
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                reverse ? "" : ""
              }`}
            >
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
export function MonitorHero() {
  return (
    <section className="bg-white pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-orange">
                  {monitorProduct.category}
                </p>
                <h1 className="serif-tight mt-5 text-4xl leading-[1.05] text-ink md:text-[56px]">
                  {monitorProduct.tagline}
                </h1>
                <p className="mt-5 text-[16px] leading-7 text-ink-muted md:text-[17px]">
                  {monitorProduct.heroSupport}
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
              <MonitorHeroVisual />
            </Reveal>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 2. PRODUCT INTRODUCTION ─── */
export function ProductIntro() {
  return (
    <FeatureSection
      eyebrow="At the counter"
      title="Everything you need at the counter."
      copy={monitorProduct.intro}
      bullets={monitorIntroAdvantages}
      bg="fog"
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <MonitorUnit size="lg" angle="front" screen="showcase" />
        </div>
      }
      reverse
    />
  );
}

/* ─── 3. BUILT FOR THE WAY YOU WORK ─── */
export function BuiltForWorkSection() {
  return (
    <FeatureSection
      id="features"
      title="Built for the way you work"
      copy="A customer-facing monitor shaped for everyday restaurant service — clear to read, compact to place, and ready for busy counters."
      bullets={monitorWorkFeatures}
      visual={
        <div className="overflow-hidden rounded-[28px] border border-line bg-[#FAF8F4]">
          <MonitorCounterScene screen="order" />
        </div>
      }
    />
  );
}

/* ─── 4. BETTER CHECKOUT ─── */
export function BetterCheckoutSection() {
  return (
    <FeatureSection
      title="One monitor. A better checkout experience."
      copy="The Vertex POS Monitor helps staff move through checkout with confidence while giving customers a clear, professional view of their order and total."
      bg="fog"
      reverse
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <MonitorUnit size="lg" angle="tilt" screen="total" label="Total" />
        </div>
      }
    />
  );
}

/* ─── 5. RUN WITH CONFIDENCE ─── */
export function RunWithConfidenceSection() {
  return (
    <FeatureSection
      title="Run your business with confidence"
      copy="Keep transaction information visible at the counter with hardware designed for reliable daily operation and a straightforward Vertex POS workflow."
      bullets={[
        "Reliable daily operation at the counter",
        "Easy-to-follow POS workflow",
        "Centralized transaction visibility",
        "Designed for busy restaurant environments",
      ]}
      visual={
        <div className="overflow-hidden rounded-[28px] border border-line bg-[#0B1220] p-8 md:p-10">
          <MonitorUnit size="lg" angle="front" screen="showcase" />
          <p className="mt-6 text-center text-[12px] text-white/45">
            Customer-facing transaction display
          </p>
        </div>
      }
    />
  );
}

/* ─── 6. DESIGNED TO GROW ─── */
export function DesignedToGrowSection() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionLabel>Grow with Vertex</SectionLabel>
                <h2 className="serif-tight text-3xl text-ink md:text-[40px]">
                  Designed to grow with your business
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                  Start with the POS Monitor at your counter, then expand your
                  Vertex setup as your restaurant grows.
                </p>
                <ul className="mt-8 flex flex-wrap gap-3">
                  {monitorGrowthLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-orange/40 hover:text-orange"
                      >
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center rounded-2xl border border-line bg-white p-6 shadow-card">
                  <MonitorUnit size="sm" angle="tilt" screen="order" />
                </div>
                <div className="flex items-center justify-center rounded-2xl border border-line bg-white p-6 shadow-card">
                  <MonitorUnit size="sm" angle="front" screen="total" />
                </div>
                <div className="col-span-2 flex items-center justify-center rounded-2xl border border-line bg-white p-8 shadow-card">
                  <MonitorUnit size="md" angle="tilt" screen="showcase" />
                </div>
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 7. PRODUCT DETAILS DIAGRAM ─── */
export function ProductDetailsShowcase() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Hardware details</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Built to stay clear at every counter.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-ink-muted">
                Explore the physical design and customer-facing capabilities of
                the Vertex POS Monitor.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <ProductDetailsDiagram />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 8. SPECIFICATIONS ─── */
export function HardwareSpecs() {
  return (
    <section id="specifications" className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <SectionLabel>Product details</SectionLabel>
                <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                  POS Monitor specifications
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                  Confirmed product information for the Vertex POS Monitor. For
                  sizing, mounting, and connection options, contact sales.
                </p>
                <dl className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white">
                  {monitorSpecs.map((spec) => (
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
                <MonitorUnit size="lg" angle="tilt" screen="showcase" />
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["Display", "Stand", "Integration", "Countertop"].map(
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

/* ─── 9. TESTIMONIAL ─── */
export function MonitorTestimonial() {
  return (
    <section className="bg-night py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center gap-1 text-orange-mid" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="serif-tight mt-8 text-2xl leading-snug text-white md:text-3xl">
                &ldquo;{monitorTestimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-[14px] font-semibold text-white/80">
                {monitorTestimonial.attribution}
              </p>
              <p className="mt-1 text-[13px] text-white/45">
                {monitorTestimonial.role}
              </p>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 10. SETUP OPTIONS ─── */
export function SetupOptionsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Setup</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Choose the setup that fits your business
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Start with the POS Monitor or work with Vertex to plan your full
                counter configuration.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {monitorSetupOptions.map((option) => (
                <article
                  key={option.name}
                  className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-mock md:p-8 ${
                    option.featured
                      ? "border-orange/30 bg-orange-soft/40 shadow-card"
                      : "border-line bg-white shadow-card"
                  }`}
                >
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

/* ─── 11. PEACE OF MIND ─── */
export function PeaceOfMindSection() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="serif-tight text-3xl text-ink md:text-4xl">
                Built for peace of mind
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Hardware and support designed to keep your counter running
                smoothly.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {monitorTrustFeatures.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-[#FAF8F4]">
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

/* ─── 12. FAQ ─── */
export function MonitorFaq() {
  return (
    <FaqSection
      compact
      eyebrow="FAQ"
      title="Questions about the POS Monitor"
      items={[...monitorFaqs]}
    />
  );
}

/* ─── 13. FINAL CTA ─── */
export function MonitorFinalCta() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h2 className="serif-tight text-3xl text-ink md:text-4xl">
                  Upgrade your checkout experience.
                </h2>
                <p className="mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
                  Bring a cleaner, faster, and more professional POS experience
                  to your business with Vertex.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/get-started">Get Started</Button>
                  <Button href="/get-started" variant="secondary">
                    Contact Sales
                  </Button>
                </div>
              </div>
              <div className="rounded-[28px] border border-line bg-[#FAF8F4] p-8 shadow-card md:p-10">
                <MonitorUnit size="lg" angle="tilt" screen="showcase" />
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}
