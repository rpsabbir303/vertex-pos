import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { FaqSection } from "@/components/layout/FaqSection";
import {
  deviceBusinessTypes,
  deviceFaqs,
  deviceGrowthBullets,
  deviceGrowthLinks,
  deviceManagementBullets,
  devicePowerFeatures,
  deviceSetupOptions,
  deviceTrustFeatures,
  deviceTrustIndicators,
  deviceWorkflowBullets,
  formatDevicePrice,
  posDeviceProduct,
} from "@/components/pos-device/catalog";
import {
  DeviceCounterScene,
  DeviceHeroVisual,
  DeviceProductDetailsDiagram,
  DeviceUnit,
} from "@/components/pos-device/mockups";
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
export function DeviceHero() {
  return (
    <section className="bg-white pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:pb-24">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-orange">
                  {posDeviceProduct.category}
                </p>
                <h1 className="serif-tight mt-5 text-4xl leading-[1.05] text-ink md:text-[56px]">
                  {posDeviceProduct.tagline}
                </h1>
                <p className="mt-5 text-[16px] leading-7 text-ink-muted md:text-[17px]">
                  {posDeviceProduct.heroSupport}
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
              <DeviceHeroVisual />
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
      eyebrow="At the counter"
      title="Everything you need at the counter."
      copy={posDeviceProduct.intro}
      bullets={posDeviceProduct.benefits}
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <DeviceUnit size="lg" screen="service" />
        </div>
      }
    />
  );
}

/* ─── 3. POWERFUL TOOLS ─── */
export function PowerfulToolsSection() {
  return (
    <FeatureSection
      id="features"
      title="Powerful tools. Simple experience."
      copy="The Vertex POS Device helps employees complete everyday restaurant tasks efficiently — from the first order tap to final payment."
      bullets={devicePowerFeatures}
      bg="fog"
      reverse
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <DeviceUnit size="lg" screen="order" />
        </div>
      }
    />
  );
}

/* ─── 4. BUSINESS IN MOTION ─── */
export function BusinessMovingSection() {
  return (
    <FeatureSection
      title="One device to keep your business moving."
      copy="The Vertex POS Device fits naturally into front-of-house service — giving staff one clear workstation for the pace of real restaurant operations."
      bullets={deviceBusinessTypes.map((type) => `Built for ${type.toLowerCase()}`)}
      visual={<DeviceCounterScene screen="order" />}
    />
  );
}

/* ─── 5. CHECKOUT WORKFLOW ─── */
export function EasierCheckoutSection() {
  return (
    <FeatureSection
      title="Make every checkout easier."
      copy="Give staff and guests a smoother experience with clear order review, fast payment processing, and a professional checkout flow on one terminal."
      bullets={deviceWorkflowBullets}
      bg="fog"
      reverse
      visual={
        <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
          <DeviceUnit size="lg" screen="table" />
        </div>
      }
    />
  );
}

/* ─── 6. BUSINESS MANAGEMENT ─── */
export function BusinessManagementSection() {
  return (
    <FeatureSection
      title="Run your business with confidence."
      copy="Manage daily restaurant operations from one connected POS experience — orders, tables, menu, kitchen, and checkout on the primary staff terminal."
      bullets={deviceManagementBullets}
      visual={
        <div className="overflow-hidden rounded-[28px] border border-line bg-[#0B1220] p-8 md:p-10">
          <DeviceUnit size="lg" screen="dashboard" />
          <p className="mt-6 text-center text-[12px] text-white/45">
            Service performance · Vertex POS
          </p>
        </div>
      }
    />
  );
}

/* ─── 7. GROWTH ─── */
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
                  Built to grow with your business.
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                  As your business grows, your POS should grow with you. Expand
                  your Vertex setup with complementary hardware and workflows.
                </p>
                <ul className="mt-8 space-y-3">
                  {deviceGrowthBullets.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                        aria-hidden
                      />
                      <span className="text-[14px] leading-6 text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-8 flex flex-wrap gap-3">
                  {deviceGrowthLinks.map((link) => (
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
                  <DeviceUnit size="sm" screen="service" />
                </div>
                <div className="flex items-center justify-center rounded-2xl border border-line bg-white p-6 shadow-card">
                  <DeviceUnit size="sm" screen="order" />
                </div>
                <div className="col-span-2 flex items-center justify-center rounded-2xl border border-line bg-white p-8 shadow-card">
                  <DeviceUnit size="md" screen="table" />
                </div>
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 8. PRODUCT DETAILS DIAGRAM ─── */
export function ProductDetailsShowcase() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Hardware details</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Built for the way restaurants serve.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-ink-muted">
                Explore the physical design and staff-facing capabilities of the
                Vertex POS Device.
              </p>
            </div>
            <div className="mt-12 md:mt-16">
              <DeviceProductDetailsDiagram />
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 9. SPECIFICATIONS ─── */
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
                  {posDeviceProduct.name} specifications
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                  Product specifications for the Vertex POS Device. Contact sales
                  for configuration and peripheral options.
                </p>
                <dl className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white">
                  {posDeviceProduct.specs.map((spec) => (
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
                    {formatDevicePrice(posDeviceProduct.price)}
                  </span>
                </p>
              </div>
              <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
                <DeviceUnit size="lg" screen="service" />
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["Display", "Touch", "Vertex POS", "Connectivity"].map(
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

/* ─── 10. TRUST (no fabricated testimonial) ─── */
export function DeviceTrustSection() {
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
                Everything your team needs to keep checkout simple and efficient.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-white/60">
                The Vertex POS Device is built as the primary staff workstation
                for restaurants that need fast ordering, clear workflows, and
                reliable daily operation.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {deviceTrustIndicators.map((item) => (
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

/* ─── 11. SETUP OPTIONS ─── */
export function SetupOptionsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Setup</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                Choose the right setup for your business
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Start with the POS Device or pair it with a customer-facing
                monitor for a fuller counter experience.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {deviceSetupOptions.map((option) => (
                <article
                  key={option.name}
                  className={`flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-mock md:p-8 ${
                    option.featured
                      ? "border-orange/30 bg-orange-soft/40 shadow-card"
                      : "border-line bg-white shadow-card"
                  }`}
                >
                  <div className="mb-6 flex justify-center rounded-xl border border-line bg-[#FAF8F4] p-6">
                    <DeviceUnit size="sm" screen={option.screen} />
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
                Hardware and support designed to keep your restaurant running
                smoothly.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {deviceTrustFeatures.map((item) => (
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
export function DeviceFaq() {
  return (
    <FaqSection
      compact
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      items={[...deviceFaqs]}
    />
  );
}

/* ─── 14. FINAL CTA ─── */
export function DeviceFinalCta() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="serif-tight text-3xl text-ink md:text-4xl">
                Ready to upgrade your POS?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
                Give your business a smarter, more professional checkout
                experience with Vertex.
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
                <DeviceUnit size="lg" screen="service" />
              </div>
            </div>
          </Reveal>
        </Inner>
      </FeatureWide>
    </section>
  );
}
