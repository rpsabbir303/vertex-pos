import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import {
  editorialBenefits,
  environmentBenefits,
  experienceSteps,
  galleryItems,
  interfaceCallouts,
  menuAnnotations,
  orderingStages,
  smartOrderingTableProduct,
  specifications,
  useCases,
} from "@/components/smart-ordering-table/catalog";
import {
  FlowStageVisual,
  MiniFlowChip,
  OrderingScreenUI,
  SmartOrderingTableUnit,
} from "@/components/smart-ordering-table/mockups";

const imgHero =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80";
const imgExperience =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80";
const imgEnvironment =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2200&q=80";
const imgCta =
  "https://images.unsplash.com/photo-1600565193348-f74bd3bb3b36?auto=format&fit=crop&w=1600&q=80";

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

/* 1 — Cinematic hero */
export function SmartTableHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f141c] pt-28 md:pt-32">
      <div className="absolute inset-0">
        <Image
          src={imgHero}
          alt="Modern restaurant dining room with tables ready for service"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f141c] via-[#0f141c]/88 to-[#0f141c]/35" />
      </div>

      <FeatureWide className="relative">
        <Inner>
          <div className="grid items-end gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20">
            <div className="max-w-xl text-white">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange">
                Smart Ordering Table
              </p>
              <h1 className="serif-tight mt-5 text-4xl leading-[1.05] md:text-[54px]">
                Let every table become a smarter way to{" "}
                <span className="accent-word">order.</span>
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-white/75">
                {smartOrderingTableProduct.heroCopy}
              </p>
              <p className="mt-4 text-[14px] font-medium text-white/55">
                {smartOrderingTableProduct.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/get-started">Book a Demo</Button>
                <Button href="#experience" variant="white">
                  Explore Features
                </Button>
              </div>
            </div>

            <div className="relative">
              <SmartOrderingTableUnit size="xl" showScreen />
              <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/45 p-4 backdrop-blur-md md:left-8 md:right-auto md:max-w-xs">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
                  Ordering flow
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <MiniFlowChip label="Browse" active />
                  <MiniFlowChip label="Customize" />
                  <MiniFlowChip label="Send" />
                </div>
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 2 — Experience journey around a visual anchor */
export function ExperienceJourney() {
  return (
    <section id="experience" className="bg-[#FAF8F4] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>The experience</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              From first glance to first order.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              A simple guest journey that starts at the table — and stays there.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="relative mx-auto aspect-[16/10] max-w-3xl overflow-hidden rounded-[28px]">
              <Image
                src={imgExperience}
                alt="Guests dining at a refined restaurant table"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 720px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-1/2 w-[58%] -translate-x-1/2 md:bottom-8">
                <SmartOrderingTableUnit size="md" showScreen />
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-0 lg:contents">
              {experienceSteps.map((step, i) => {
                const positions = [
                  "lg:absolute lg:left-0 lg:top-[8%] lg:max-w-[200px]",
                  "lg:absolute lg:right-0 lg:top-[8%] lg:max-w-[200px] lg:text-right",
                  "lg:absolute lg:left-0 lg:bottom-[6%] lg:max-w-[200px]",
                  "lg:absolute lg:right-0 lg:bottom-[6%] lg:max-w-[200px] lg:text-right",
                ];
                return (
                  <div key={step.step} className={positions[i]}>
                    <p className="text-[12px] font-semibold tracking-[0.14em] text-orange">
                      {step.step}
                    </p>
                    <h3 className="mt-2 text-[18px] font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-6 text-ink-muted">
                      {step.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 3 — Immersive menu browsing with annotations */
export function MenuBrowsingExperience() {
  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="mb-12 max-w-xl">
            <SectionLabel>Menu browsing</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              The menu lives on the table.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              Categories, dishes, pricing, and checkout stay clear on a
              customer-facing touchscreen built into the dining surface.
            </p>
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_1.35fr_1fr]">
            <div className="order-2 space-y-10 lg:order-1 lg:space-y-16 lg:text-right">
              {menuAnnotations
                .filter((a) => a.side === "left")
                .map((a) => (
                  <div key={a.label} className="lg:ml-auto lg:max-w-[180px]">
                    <div className="mb-2 hidden h-px w-12 bg-orange lg:ml-auto lg:block" />
                    <p className="text-[15px] font-semibold text-ink">{a.label}</p>
                  </div>
                ))}
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-[32px] border border-line bg-[#F3EEE6] p-6 shadow-mock md:p-10">
                <div className="mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[22px] border border-night/20 bg-night p-2">
                  <OrderingScreenUI variant="menu" />
                </div>
              </div>
            </div>

            <div className="order-3 space-y-10 lg:space-y-16">
              {menuAnnotations
                .filter((a) => a.side === "right")
                .map((a) => (
                  <div key={a.label} className="lg:max-w-[180px]">
                    <div className="mb-2 hidden h-px w-12 bg-orange lg:block" />
                    <p className="text-[15px] font-semibold text-ink">{a.label}</p>
                  </div>
                ))}
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 4 — Vertical ordering workflow */
export function OrderingFlow() {
  return (
    <section className="bg-[#F7F5F2] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="max-w-xl">
            <SectionLabel>Ordering flow</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              A clear path from browse to kitchen.
            </h2>
          </div>

          <div className="relative mt-14">
            <div
              className="absolute left-[27px] top-4 bottom-4 hidden w-px bg-line md:left-1/2 md:block"
              aria-hidden
            />
            <div className="space-y-10 md:space-y-0">
              {orderingStages.map((stage, i) => {
                const reverse = i % 2 === 1;
                return (
                  <div
                    key={stage.step}
                    className={`relative grid items-center gap-6 md:grid-cols-2 md:gap-16 ${
                      i > 0 ? "md:mt-14" : ""
                    }`}
                  >
                    <div
                      className={`flex items-start gap-5 ${
                        reverse ? "md:order-2" : ""
                      }`}
                    >
                      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white text-[13px] font-semibold text-orange shadow-card">
                        {stage.step}
                      </div>
                      <div>
                        <h3 className="text-[20px] font-semibold text-ink">
                          {stage.title}
                        </h3>
                        <p className="mt-2 max-w-sm text-[15px] leading-6 text-ink-muted">
                          {stage.copy}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`flex ${
                        reverse ? "md:order-1 md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <FlowStageVisual index={i} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 5 — Full-bleed restaurant environment */
export function RestaurantEnvironment() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <Image
        src={imgEnvironment}
        alt="Upscale restaurant dining room with multiple tables in service"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <FeatureWide className="relative flex min-h-[70vh] items-end py-16 md:py-20">
        <Inner>
          <div className="max-w-2xl text-white">
            <h2 className="serif-tight text-3xl md:text-5xl">
              Give guests more control over their dining experience.
            </h2>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {environmentBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[15px] font-medium text-white/90"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 6 — Editorial asymmetric benefits */
export function EditorialBenefits() {
  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <h2 className="serif-tight max-w-3xl text-3xl md:text-5xl">
            More than a table. A smarter ordering point.
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
            {smartOrderingTableProduct.positioning}
          </p>

          <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-y-20">
            {editorialBenefits.map((b, i) => {
              const spans = [
                "md:col-span-5 md:col-start-1",
                "md:col-span-5 md:col-start-7 md:mt-16",
                "md:col-span-5 md:col-start-2",
                "md:col-span-5 md:col-start-8 md:mt-10",
              ];
              return (
                <article key={b.title} className={spans[i]}>
                  <p className="text-[12px] font-semibold tracking-[0.16em] text-orange">
                    0{i + 1}
                  </p>
                  <h3 className="serif-tight mt-3 text-2xl md:text-3xl">{b.title}</h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-7 text-ink-muted">
                    {b.copy}
                  </p>
                  <div className="mt-5 h-px w-16 bg-line" />
                </article>
              );
            })}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 7 — Dark interface showcase */
export function InterfaceShowcase() {
  return (
    <section className="bg-[#0f141c] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center text-white">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
              Product interface
            </p>
            <h2 className="serif-tight mt-4 text-3xl md:text-5xl">
              Everything the guest needs, on one screen.
            </h2>
          </div>

          <div className="relative mx-auto mt-14 max-w-4xl">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-10">
              <SmartOrderingTableUnit size="xl" showScreen screenVariant="menu" />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {interfaceCallouts.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 px-4 py-2 text-[13px] font-medium text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 8 — Horizontal editorial use cases */
export function UseCasesEditorial() {
  return (
    <section className="bg-[#FAF8F4] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <SectionLabel>Use cases</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Built for real dining rooms.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-6 text-ink-muted md:text-right">
              From quiet fine dining to high-turnover casual spaces.
            </p>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
            {useCases.map((uc) => (
              <article
                key={uc.title}
                className="min-w-[78%] snap-start md:min-w-0"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={uc.image}
                    alt={`${uc.title} restaurant environment`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(max-width:768px) 80vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-[18px] font-semibold">{uc.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-5 text-white/75">
                      {uc.copy}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 9 — Specs table only */
export function ProductSpecifications() {
  return (
    <section id="specifications" className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-3xl">
            <SectionLabel>Specifications</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Smart Ordering Table details.
            </h2>

            <div className="mt-10 overflow-hidden border-y border-line">
              <table className="w-full text-left">
                <tbody>
                  {specifications.map((row) => (
                    <tr key={row.label} className="border-b border-line last:border-0">
                      <th className="w-[42%] py-4 pr-4 align-top text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-muted md:w-[36%]">
                        {row.label}
                      </th>
                      <td className="py-4 text-[15px] font-medium text-ink md:text-[16px]">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 10 — Asymmetric gallery */
export function ProductCloseUp() {
  const primary = galleryItems.find((g) => g.large)!;
  const others = galleryItems.filter((g) => !g.large);

  return (
    <section className="bg-[#F3EEE6] py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="mb-10 max-w-xl">
            <SectionLabel>Product close-up</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              See the table in context.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2 md:gap-5">
            <figure className="relative min-h-[320px] overflow-hidden md:col-span-7 md:row-span-2 md:min-h-[560px]">
              <Image
                src={primary.image}
                alt={`Smart Ordering Table — ${primary.caption}`}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 58vw"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm">
                {primary.caption}
              </figcaption>
            </figure>

            {others.map((item, i) => (
              <figure
                key={item.caption}
                className={`relative min-h-[180px] overflow-hidden md:col-span-5 ${
                  i === 2 ? "md:min-h-[220px]" : "md:min-h-[260px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={`Smart Ordering Table — ${item.caption}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/45 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 11 — Final CTA (different from hero) */
export function SmartTableFinalCta() {
  return (
    <section className="overflow-hidden bg-[#0f141c]">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-24">
            <div className="text-white">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                Smart Ordering Table
              </p>
              <h2 className="serif-tight mt-4 text-4xl leading-tight md:text-5xl">
                Bring smarter ordering to every table.
              </h2>
              <p className="mt-4 max-w-lg text-[16px] leading-7 text-white/70">
                Give guests a faster, easier way to order while helping your team
                serve more efficiently.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/get-started">Book a Demo</Button>
                <Button href="/get-started" variant="white">
                  Talk to Sales
                </Button>
              </div>
            </div>

            <div className="relative min-h-[340px] overflow-hidden rounded-[28px] md:min-h-[400px]">
              <Image
                src={imgCta}
                alt="Restaurant table ready for service with smart ordering"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
                <SmartOrderingTableUnit size="sm" showScreen screenVariant="cart" />
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}
