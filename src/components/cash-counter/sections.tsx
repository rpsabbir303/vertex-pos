import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckItem, FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import {
  cashBoxProduct,
  formatCashBoxPrice,
} from "@/components/cash-counter/catalog";
import {
  CashDrawerClosed,
  CashDrawerOpen,
  CashManagementUi,
  HeroProductVisual,
  IconSvg,
  OrangeIcon,
} from "@/components/cash-counter/mockups";

const imgHands =
  "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1600&q=80";
const imgCounter =
  "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1400&q=80";
const imgClose =
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80";
const imgDining =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80";
const imgBar =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80";

function Inner({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1450px] ${className}`}>{children}</div>;
}

/* 1 — HERO */
export function CashHero() {
  const pills = [
    { label: "Secure Storage", d: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z" },
    { label: "Organized Compartments", d: "M4 6h16v4H4zM4 12h7v6H4zM13 12h7v6h-7z" },
    { label: "Fast Cash Access", d: "M13 2L4 14h7l-1 8 10-12h-7l1-8z" },
    { label: "Shift Reconciliation", d: "M5 12l4 4L19 6" },
  ];

  return (
    <section className="bg-white pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-14">
            <div className="max-w-xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-orange">
                Vertex Cash Counter Box
              </p>
              <h1 className="serif-tight mt-4 text-4xl leading-[1.08] md:text-[52px]">
                Keep every cash transaction organized.
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-ink-muted">
                A secure, restaurant-ready cash drawer designed to keep every
                shift organized — from opening float to final reconciliation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/get-started">Get Started</Button>
                <Button href="/get-started" variant="secondary">
                  Book a Demo
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {pills.map((item) => (
                  <div key={item.label} className="flex flex-col items-start gap-2">
                    <OrangeIcon>
                      <IconSvg d={item.d} />
                    </OrangeIcon>
                    <p className="text-[12px] font-semibold leading-4 text-ink">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <HeroProductVisual />
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 2 — WORKFLOW */
export function CashWorkflow() {
  const steps = [
    {
      num: "01",
      title: "Open Shift",
      copy: "Set the opening cash float.",
      d: "M12 5v14M5 12h14",
    },
    {
      num: "02",
      title: "Take Payments",
      copy: "Keep cash organized during service.",
      d: "M4 7h16v10H4zM4 11h16",
    },
    {
      num: "03",
      title: "Cash Drops",
      copy: "Record and secure excess cash.",
      d: "M12 4v10M8 10l4 4 4-4M5 18h14",
    },
    {
      num: "04",
      title: "Count & Reconcile",
      copy: "Compare expected vs. actual cash.",
      d: "M5 12l4 4L19 6",
    },
    {
      num: "05",
      title: "Close Shift",
      copy: "Finalize the register and report.",
      d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 12h8",
    },
  ];

  return (
    <section className="bg-fog py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <SectionLabel>Cash workflow</SectionLabel>
          <h2 className="serif-tight max-w-2xl text-3xl md:text-4xl">
            From opening float to closing count.
          </h2>

          <div className="mt-10 flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative min-w-[200px] shrink-0 lg:min-w-0">
                <div className="h-full rounded-2xl border border-line bg-white p-5 shadow-card">
                  <OrangeIcon>
                    <IconSvg d={step.d} />
                  </OrangeIcon>
                  <p className="mt-4 text-[12px] font-semibold text-orange">
                    {step.num}
                  </p>
                  <h3 className="mt-1 text-[14px] font-semibold uppercase tracking-[0.06em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-5 text-ink-muted">
                    {step.copy}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <span className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-orange lg:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 3 — ANATOMY with orange leader lines */
export function ProductAnatomy() {
  const left = [
    { title: "Bill Organizer", copy: "Multi-slot bill storage with hold-downs." },
    { title: "Coin Tray", copy: "Five coin cups for quick change." },
    { title: "Durable Build", copy: "Commercial-grade steel enclosure." },
  ];
  const right = [
    { title: "Secure Lock", copy: "Lockable drawer with key access." },
    { title: "Smooth Operation", copy: "Built for repeated daily opens." },
    { title: "Counter Ready", copy: "Compact footprint for FOH counters." },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionLabel>Organized cash storage</SectionLabel>
              <h2 className="serif-tight max-w-md text-3xl md:text-4xl">
                Built to keep cash exactly where it belongs.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-ink-muted">
                Separate notes and coins into dedicated compartments so staff can
                find the right denomination quickly.
              </p>

              <div className="mt-8 space-y-5">
                {left.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="mt-2 h-px w-8 shrink-0 bg-orange md:w-12" />
                    <div>
                      <p className="text-[14px] font-semibold">{item.title}</p>
                      <p className="mt-0.5 text-[13px] text-ink-muted">{item.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-line bg-fog p-4 md:p-6">
                <CashDrawerOpen size="lg" />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:absolute lg:-right-2 lg:top-6 lg:mt-0 lg:w-44 lg:grid-cols-1">
                {right.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-line bg-white px-3 py-3 shadow-card"
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <span className="h-px w-5 bg-orange" />
                      <p className="text-[13px] font-semibold">{item.title}</p>
                    </div>
                    <p className="text-[12px] leading-4 text-ink-muted">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 4 — SOFTWARE / TRACKING */
export function CashTracking() {
  const items = [
    { title: "Opening Float", copy: "Start every shift with a clear balance.", d: "M12 5v14M5 12h14" },
    { title: "Cash Drops", copy: "Secure excess cash with a record.", d: "M12 4v10M8 10l4 4 4-4M5 18h14" },
    { title: "Live Totals", copy: "See expected cash as sales happen.", d: "M4 19V9M10 19V5M16 19v-7" },
    { title: "Shift Report", copy: "Close with a complete cash summary.", d: "M6 4h12v16H6zM9 8h6M9 12h6" },
  ];

  return (
    <section className="bg-fog py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <CashManagementUi />
            <div>
              <SectionLabel>Cash management</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-4xl">
                Accurate cash tracking. Clearer reconciliation.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Pair the Cash Counter Box with shift tracking so opening cash,
                sales, drops, expected totals, and variance stay clear.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {items.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <OrangeIcon>
                      <IconSvg d={item.d} />
                    </OrangeIcon>
                    <div>
                      <p className="text-[14px] font-semibold">{item.title}</p>
                      <p className="mt-1 text-[13px] leading-5 text-ink-muted">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 5 — SECURITY (dark) */
export function SecuritySection() {
  const points = [
    { title: "Secure Storage", copy: "Keep cash protected in a lockable drawer.", d: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z" },
    { title: "Controlled Access", copy: "Key access for authorized staff only.", d: "M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6z" },
    { title: "Shift Accountability", copy: "Clear opening, drops, and closing records.", d: "M9 12l2 2 4-4M6 4h12v16H6z" },
    { title: "Cash Movement", copy: "Track sales, refunds, and cash drops.", d: "M4 12h16M12 4l8 8-8 8" },
  ];

  return (
    <section className="bg-night py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-white">
              <SectionLabel>Security</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-4xl">
                Secure cash. Controlled access. Complete accountability.
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {points.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <OrangeIcon dark>
                      <IconSvg d={item.d} />
                    </OrangeIcon>
                    <div>
                      <p className="text-[14px] font-semibold">{item.title}</p>
                      <p className="mt-1 text-[13px] leading-5 text-white/60">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={imgBar}
                alt="Restaurant counter with locked cash drawer"
                width={1000}
                height={800}
                className="h-[360px] w-full object-cover md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <CashDrawerClosed />
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 6 — REAL SERVICE */
export function RealService() {
  const checks = [
    "Faster cash handling during rush",
    "Organized denominations for change",
    "Easy cash drops when the drawer fills",
    "Accurate closing at end of shift",
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative overflow-hidden rounded-2xl shadow-mock">
              <Image
                src={imgHands}
                alt="Restaurant employee placing cash into the drawer"
                width={1600}
                height={1000}
                className="h-[380px] w-full object-cover md:h-[460px]"
              />
            </div>
            <div>
              <SectionLabel>Made for real service</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-4xl">
                Built for the pace of real restaurant service.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                From the first transaction to the final count, Vertex keeps cash
                handling simple and organized for your team.
              </p>
              <ul className="mt-7 space-y-3">
                {checks.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 7 — SPECS + GALLERY + PRICING (3-col) */
export function SpecsGalleryPricing() {
  const gallery = [
    { src: imgCounter, label: "On counter" },
    { src: imgClose, label: "In service" },
    { src: imgBar, label: "Side view" },
    { src: imgDining, label: "Restaurant setup" },
  ];

  return (
    <section className="bg-fog py-20 md:py-24" id="pricing">
      <FeatureWide>
        <Inner>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
            {/* Specs */}
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              <div className="border-b border-line px-5 py-4">
                <h2 className="text-[16px] font-semibold">
                  Cash Counter Box specifications
                </h2>
              </div>
              <dl className="divide-y divide-line">
                {cashBoxProduct.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid gap-1 px-5 py-3 sm:grid-cols-[110px_1fr]"
                  >
                    <dt className="text-[12px] font-semibold text-ink-muted">
                      {spec.label}
                    </dt>
                    <dd className="text-[13px] font-medium leading-5">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Gallery 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              {gallery.map((item, i) => (
                <div
                  key={item.label}
                  className="relative overflow-hidden rounded-2xl border border-line bg-white"
                >
                  {i === 0 ? (
                    <div className="flex h-full min-h-[140px] items-center bg-[#F3EEE6] p-2 md:min-h-[180px]">
                      <CashDrawerOpen size="sm" />
                    </div>
                  ) : i === 2 ? (
                    <div className="flex h-full min-h-[140px] items-center bg-night p-3 md:min-h-[180px]">
                      <CashDrawerClosed />
                    </div>
                  ) : (
                    <>
                      <Image
                        src={item.src}
                        alt={item.label}
                        width={500}
                        height={400}
                        className="h-full min-h-[140px] w-full object-cover md:min-h-[180px]"
                      />
                      <span className="absolute bottom-2 left-2 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold text-white">
                        {item.label}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Pricing card */}
            <div className="flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-mock">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                  Pricing
                </p>
                <p className="mt-5 text-[14px] text-ink-muted">Starting at</p>
                <p className="mt-1 text-[48px] font-semibold tracking-tight">
                  {formatCashBoxPrice()}
                </p>
                <p className="mt-3 text-[14px] leading-6 text-ink-muted">
                  Add reliable cash handling to your restaurant checkout setup.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <Button href="/get-started" className="w-full">
                  Book a Demo
                </Button>
                <Button href="/get-started" variant="secondary" className="w-full">
                  Get Started
                </Button>
                <p className="text-center text-[12px] text-ink-muted">
                  Compatible with supported Vertex POS setups
                </p>
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 8 — BENEFIT CARDS */
export function BenefitCards() {
  const items = [
    {
      title: "Faster Cash Handling",
      copy: "Find the right denomination quickly with organized bill and coin compartments.",
      d: "M13 2L4 14h7l-1 8 10-12h-7l1-8z",
    },
    {
      title: "Clearer Reconciliation",
      copy: "Compare expected and counted cash with a clean close-of-shift workflow.",
      d: "M5 12l4 4L19 6",
    },
    {
      title: "Better Shift Accountability",
      copy: "Keep opening float, drops, and closing counts visible and consistent.",
      d: "M9 12l2 2 4-4M6 4h12v16H6z",
    },
    {
      title: "Secure Cash Storage",
      copy: "Lockable commercial construction for everyday restaurant cash protection.",
      d: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <FeatureWide>
        <Inner>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-fog p-5"
              >
                <OrangeIcon>
                  <IconSvg d={item.d} />
                </OrangeIcon>
                <h3 className="mt-4 text-[15px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-ink-muted">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 9 — FAQ split layout */
export function CashFaq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="bg-fog py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="serif-tight text-3xl md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Answers specific to the Vertex Cash Counter Box and restaurant
                cash handling.
              </p>
            </div>
            <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
              {items.map((item) => (
                <details key={item.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left md:px-6">
                    <span className="text-[15px] font-semibold text-ink">
                      {item.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink group-open:bg-fog">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="max-w-2xl px-5 pb-5 text-[14px] leading-7 text-ink-muted md:px-6">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 10 — FINAL CTA */
export function CashFinalCta() {
  return (
    <section className="bg-night">
      <FeatureWide className="grid items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="text-white">
          <h2 className="serif-tight text-3xl leading-tight md:text-5xl">
            Keep every shift organized from the first bill to the final count.
          </h2>
          <p className="mt-4 max-w-lg text-[16px] leading-7 text-white/75">
            Give your team a faster, clearer, and more secure way to manage
            restaurant cash.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/get-started">Get Started</Button>
            <Button href="/get-started" variant="white">
              Book a Demo
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={imgDining}
            alt="Restaurant counter setup"
            width={900}
            height={600}
            className="h-[280px] w-full object-cover md:h-[320px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <CashDrawerOpen size="sm" />
          </div>
        </div>
      </FeatureWide>
    </section>
  );
}
