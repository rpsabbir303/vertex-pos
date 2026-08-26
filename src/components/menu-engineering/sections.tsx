import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import {
  benefits,
  insightCards,
  menuEngineeringProduct,
  recommendations,
  workflowSteps,
} from "@/components/menu-engineering/catalog";
import {
  CategoryAnalysisVisual,
  ItemPerformanceTable,
  MenuEngineeringHeroVisual,
  MenuMatrixChart,
  MenuPerformanceDashboard,
} from "@/components/menu-engineering/mockups";
import {
  matrixFoodStrip,
  mePhotos,
} from "@/components/menu-engineering/photos";

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

export function MenuEngineeringHero() {
  return (
    <section className="overflow-hidden bg-[#FAF8F4] pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pb-20">
            <div className="max-w-xl">
              <SectionLabel>Menu Engineering</SectionLabel>
              <p className="text-[13px] font-medium text-ink-muted">
                Back Office · {menuEngineeringProduct.description}
              </p>
              <h1 className="serif-tight mt-5 text-4xl leading-[1.06] md:text-[52px]">
                Turn menu data into{" "}
                <span className="accent-word">smarter decisions.</span>
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-ink-muted">
                {menuEngineeringProduct.heroCopy}
              </p>
              <p className="mt-4 text-[15px] font-medium text-ink">
                {menuEngineeringProduct.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/get-started">Book a Demo</Button>
                <Button href="#menu-performance" variant="secondary">
                  Explore Features
                </Button>
              </div>
              <p className="mt-5 max-w-md text-[13px] leading-6 text-ink-muted">
                {menuEngineeringProduct.supportCopy}
              </p>
            </div>
            <MenuEngineeringHeroVisual />
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function MenuPerformanceOverview() {
  return (
    <section id="menu-performance" className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Menu performance</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              See what&apos;s really driving your menu.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              Understand the relationship between item popularity, sales
              performance, and profitability without digging through complicated
              reports.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-16">
            <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-0">
              <div className="relative min-h-[320px] overflow-hidden rounded-[28px] lg:min-h-full lg:rounded-r-none lg:rounded-l-[28px]">
                <Image
                  src={mePhotos.performanceService}
                  alt="Restaurant team plating and serving dishes during service"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                <div className="absolute bottom-5 left-5 right-5 max-w-xs">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                    Live service
                  </p>
                  <p className="mt-2 text-[18px] font-semibold text-white">
                    Every plate connects to performance.
                  </p>
                </div>
              </div>
              <div className="relative lg:-ml-6 lg:pt-8">
                <MenuPerformanceDashboard />
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function MenuEngineeringMatrix() {
  return (
    <section className="bg-[#F7F5F2] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>The menu matrix</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Know which items deserve the spotlight.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              Compare popularity and profitability so you can see which dishes to
              promote, reprice, reposition, or review.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {matrixFoodStrip.map((food) => (
              <figure
                key={food.label}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line"
              >
                <Image
                  src={food.src}
                  alt={`${food.label} — example menu item for matrix analysis`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 to-transparent px-3 pb-3 pt-8 text-[12px] font-semibold text-white">
                  {food.label}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8">
            <MenuMatrixChart />
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function ActionableInsights() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="relative min-h-[360px] overflow-hidden rounded-[28px] md:min-h-[440px]">
              <Image
                src={mePhotos.insightsManager}
                alt="Restaurant manager reviewing menu decisions in a professional kitchen"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                  Menu decisions
                </p>
                <p className="mt-2 text-[18px] font-semibold text-white">
                  Clarity for the people shaping the menu.
                </p>
              </div>
            </div>

            <div>
              <SectionLabel>From data to action</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Know what to change — and why.
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {insightCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[22px] border border-line bg-[#FAF8F4] p-5 transition-shadow hover:shadow-card"
                  >
                    <div className="mb-3 h-1 w-10 rounded-full bg-orange" />
                    <h3 className="text-[16px] font-semibold text-ink">{card.title}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                      {card.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function ItemPerformance() {
  return (
    <section className="bg-[#FAF8F4] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Item performance</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Every item tells a story.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              Review orders, revenue, food cost, profit, and margin together —
              then classify each dish by how it contributes.
            </p>
          </div>
          <div className="mt-12">
            <ItemPerformanceTable />
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function CategoryAnalysis() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mb-10 max-w-2xl">
            <SectionLabel>Category analysis</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              See where your menu performs best.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              Understand which categories deserve more attention — and which ones
              already carry the menu.
            </p>
          </div>
          <CategoryAnalysisVisual />
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function SmartRecommendations() {
  return (
    <section className="bg-[#F7F5F2] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <SectionLabel>Smart insights</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Turn performance data into your next move.
              </h2>
              <p className="mt-4 max-w-lg text-[16px] leading-7 text-ink-muted">
                Practical menu recommendations based on demand and margin — not
                guesswork.
              </p>
              <div className="mt-8 grid gap-4">
                {recommendations.map((rec) => (
                  <article
                    key={rec.title}
                    className="rounded-[22px] border border-line bg-white p-5 shadow-card md:p-6"
                  >
                    <div
                      className={`mb-4 h-1 w-10 rounded-full ${
                        rec.tone === "strong"
                          ? "bg-orange"
                          : rec.tone === "warn"
                            ? "bg-night/30"
                            : "bg-night/15"
                      }`}
                    />
                    <h3 className="text-[17px] font-semibold text-ink">{rec.title}</h3>
                    <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                      {rec.detail}
                    </p>
                    <p className="mt-3 text-[14px] font-medium text-ink">{rec.action}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] lg:min-h-[560px] lg:sticky lg:top-28">
              <Image
                src={mePhotos.recommendationsChef}
                alt="Chef preparing dishes that map to menu engineering recommendations"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                  Next move
                </p>
                <p className="mt-2 text-[18px] font-semibold text-white">
                  Promote what earns. Review what lags.
                </p>
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              From sales data to menu decisions.
            </h2>
          </div>
          <div className="relative mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
            <div
              className="pointer-events-none absolute left-[16%] right-[16%] top-7 hidden h-px bg-line md:block"
              aria-hidden
            />
            {workflowSteps.map((step) => (
              <div key={step.step} className="relative text-center md:px-4">
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white text-[13px] font-semibold text-orange shadow-card">
                  {step.step}
                </div>
                <h3 className="mt-5 text-[18px] font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-ink-muted">{step.copy}</p>
              </div>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0">
        <Image
          src={mePhotos.benefitsDining}
          alt="Warm restaurant dining environment supporting confident menu decisions"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#FAF8F4]/92" />
      </div>

      <FeatureWide className="relative">
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Benefits</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Make every menu decision with confidence.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {benefits.map((b, i) => (
              <article
                key={b.title}
                className={`border border-line bg-white/90 p-6 backdrop-blur-sm md:p-7 ${
                  i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-6"
                }`}
              >
                <div className="mb-4 h-1 w-8 bg-orange" />
                <h3 className="text-[17px] font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-ink-muted">{b.copy}</p>
              </article>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function MenuEngineeringFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#0f141c]">
      <div className="absolute inset-0">
        <Image
          src={mePhotos.ctaPlated}
          alt="Beautifully plated restaurant dish representing a better-performing menu"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f141c] via-[#0f141c]/88 to-[#0f141c]/55" />
      </div>

      <FeatureWide className="relative">
        <Inner>
          <div className="max-w-2xl py-20 text-white md:py-24">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
              Menu Engineering
            </p>
            <h2 className="serif-tight mt-4 text-4xl leading-tight md:text-5xl">
              Build a better-performing menu.
            </h2>
            <p className="mt-4 max-w-lg text-[16px] leading-7 text-white/75">
              See how Vertex POS can help you understand your menu and make smarter
              decisions with real restaurant data.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/get-started">Book a Demo</Button>
              <Button href="/" variant="white">
                Explore Vertex POS
              </Button>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}
