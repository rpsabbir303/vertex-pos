import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { FaqSection } from "@/components/layout/FaqSection";
import {
  monitorBenefits,
  monitorExperience,
  monitorFaqs,
  monitorFeatures,
  monitorIncluded,
  monitorProduct,
  monitorSpecs,
  monitorUseCases,
} from "@/components/pos-monitor/catalog";
import {
  MiniMonitorCard,
  MonitorDetailStage,
  MonitorHeroStage,
  MonitorUnit,
  ProductDetailsDiagram,
} from "@/components/pos-monitor/mockups";

function Inner({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1450px] ${className}`}>{children}</div>
  );
}

function FeatureIcon({ index }: { index: number }) {
  const paths = [
    "M4 5h16v11H4zM8 19h8",
    "M12 4v4M8 10h8M9 14h6M10 18h4",
    "M5 19h14V8H5zM8 8V5h8v3",
    "M4 7h16M4 12h10M4 17h14",
    "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z",
    "M5 12h14M12 5v14",
  ];
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-[#FAF8F4]">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d={paths[index % paths.length]}
          stroke="#F15A24"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ─── 1. HERO ─── */
export function MonitorHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F4] pt-28 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange/10 blur-3xl"
      />
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:pb-20">
            <div className="max-w-xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange">
                POS Monitor
              </p>
              <h1 className="serif-tight mt-5 text-4xl leading-[1.05] text-ink md:text-[54px]">
                {monitorProduct.tagline}
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-ink-muted">
                {monitorProduct.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/get-started">Book a Demo</Button>
                <Button href="/get-started" variant="secondary">
                  Talk to Sales
                </Button>
              </div>
            </div>
            <MonitorHeroStage />
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 2. PRODUCT INTRODUCTION ─── */
export function ProductIntro() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="rounded-[28px] border border-line bg-[#FAF8F4] p-8 md:p-12">
                <MonitorUnit size="lg" angle="front" screen="order" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionLabel>Built for the counter</SectionLabel>
              <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
                A clear view of every transaction.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                {monitorProduct.intro}
              </p>
              <ul className="mt-8 space-y-3">
                {monitorBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      aria-hidden
                    />
                    <span className="text-[15px] leading-6 text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── PRODUCT DETAILS SHOWCASE ─── */
export function ProductDetailsShowcase() {
  return (
    <section className="bg-[#FAF8F4] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Product details</SectionLabel>
            <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
              Built to stay clear at every counter.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-ink-muted md:text-[16px]">
              Designed for fast-moving restaurants, the Vertex POS Monitor keeps
              every transaction visible with a clear customer-facing display and
              a durable countertop design.
            </p>
          </div>
          <div className="mt-12 md:mt-16">
            <ProductDetailsDiagram />
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 3. KEY FEATURES ─── */
export function MonitorFeatures() {
  return (
    <section className="bg-[#F3F1EC] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="max-w-2xl">
            <h2 className="serif-tight text-3xl text-ink md:text-4xl">
              Everything customers need to see.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {monitorFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-mock"
              >
                <FeatureIcon index={index} />
                <h3 className="mt-5 text-[17px] font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                  {feature.copy}
                </p>
              </article>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 4. DEVICE DETAILS ─── */
export function DeviceDetails() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="serif-tight text-3xl text-ink md:text-4xl">
              Designed around the way restaurants serve.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-ink-muted">
              A customer-facing monitor shaped for the counter — clear to read,
              compact to place, and built for everyday service.
            </p>
          </div>
          <div className="mt-12 md:mt-16">
            <MonitorDetailStage />
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 5. USE CASES ─── */
export function CounterUseCases() {
  return (
    <section className="bg-[#FAF8F4] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="max-w-2xl">
            <h2 className="serif-tight text-3xl text-ink md:text-4xl">
              Made for busy restaurant counters.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {monitorUseCases.map((item) => (
              <MiniMonitorCard
                key={item.title}
                title={item.title}
                copy={item.copy}
              />
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 6. PRODUCT EXPERIENCE ─── */
export function ProductExperience() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div>
              <h2 className="serif-tight text-3xl text-ink md:text-4xl">
                Clear information. Smoother service.
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
                The POS Monitor keeps important transaction information visible
                at the counter, helping staff and customers stay on the same
                page.
              </p>
              <ol className="mt-10 space-y-8">
                {monitorExperience.map((item) => (
                  <li key={item.step} className="flex gap-5">
                    <span className="font-mono text-[13px] font-semibold text-orange">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-6 text-ink-muted">
                        {item.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-[28px] border border-line bg-[#0B1220] p-8 md:p-12">
              <MonitorUnit size="lg" angle="tilt" screen="total" label="Total" />
              <p className="mt-6 text-center font-mono text-[11px] tracking-wide text-white/40">
                Customer-facing total view
              </p>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 7. SPECIFICATIONS ─── */
export function HardwareSpecs() {
  return (
    <section id="specifications" className="bg-[#F3F1EC] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="max-w-2xl">
            <SectionLabel>Specifications</SectionLabel>
            <h2 className="serif-tight mt-2 text-3xl text-ink md:text-4xl">
              POS Monitor specifications.
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-ink-muted">
              Product-level details for the Vertex POS Monitor. For sizing,
              mounting, and connection options for your counter, talk to sales.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
              <div className="flex items-center justify-center border-b border-line bg-[#FAF8F4] p-8 md:border-b-0 md:border-r">
                <MonitorUnit size="md" angle="front" screen="order" />
              </div>
              <dl className="divide-y divide-line">
                {monitorSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-1 gap-1 px-5 py-4 transition-colors hover:bg-orange-soft/30 sm:grid-cols-[minmax(140px,0.4fr)_1fr] sm:gap-6 sm:px-6"
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
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 8. WHAT'S INCLUDED ─── */
export function WhatsIncluded() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="max-w-2xl">
            <h2 className="serif-tight text-3xl text-ink md:text-4xl">
              Everything you need at the counter.
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-ink-muted">
              The POS Monitor is the customer-facing display unit for your
              Vertex POS counter. Stand and connection options can be configured
              with sales for your restaurant.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {monitorIncluded.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-line bg-[#FAF8F4] p-6"
              >
                <div className="w-[100px] shrink-0">
                  <MonitorUnit size="sm" angle="front" screen="blank" />
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
            <div className="flex flex-col justify-center rounded-2xl border border-dashed border-line bg-white p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-orange">
                Counter setup
              </p>
              <h3 className="mt-2 text-[17px] font-semibold text-ink">
                Mounting &amp; connection options
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                Talk to sales for stand, placement, and connection options
                matched to your checkout.
              </p>
              <div className="mt-5">
                <Button href="/get-started" variant="secondary" size="sm">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 9. FAQ ─── */
export function MonitorFaq() {
  return (
    <FaqSection
      compact
      eyebrow="FAQ"
      title="Questions about the POS Monitor."
      items={[...monitorFaqs]}
    />
  );
}

/* ─── 10. FINAL CTA ─── */
export function MonitorFinalCta() {
  return (
    <section className="bg-night py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="serif-tight text-3xl text-white md:text-4xl">
                Put every transaction in view.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/60">
                See how Vertex POS can make your restaurant counter clearer,
                faster, and easier to manage.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/get-started">Book a Demo</Button>
                <Button href="/get-started" variant="white">
                  Talk to Sales
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <MonitorUnit size="md" angle="tilt" screen="order" />
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}
