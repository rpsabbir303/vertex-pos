import Image from "next/image";
import { Fragment } from "react";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import {
  paymentTerminalProduct,
  terminalPricing,
  terminalStartingLabel,
  formatTerminalPrice,
} from "@/components/payment-terminal/catalog";
import {
  CompactTerminalCard,
  PaymentTerminalUnit,
  TerminalFeatureCallout,
  TerminalMethodPanel,
  TerminalNetworkMark,
  TerminalScene,
  TerminalScreenPanel,
  type TerminalAngle,
} from "@/components/payment-terminal/mockups";

/* Unique lifestyle photography — do not reuse across sections */
const imgHero =
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=80";
const imgPaymentMoment =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=80";
const imgBusyRush =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80";
const imgEnvCounter =
  "https://images.unsplash.com/photo-1578478381215-7fc0a4e0a9e0?auto=format&fit=crop&w=1200&q=80";
const imgEnvCafe =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80";
const imgEnvBar =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80";
const imgEnvTakeaway =
  "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?auto=format&fit=crop&w=1200&q=80";
const imgCtaFinal =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80";

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

function FlowArrow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`flex shrink-0 items-center justify-center text-orange/55 ${className}`}
    >
      →
    </div>
  );
}

/* ─── 1. HERO ─── */
export function PaymentTerminalHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F4] pt-28 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-2 bg-orange md:block"
      />
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="max-w-xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange">
                Payment Terminal
              </p>
              <h1 className="serif-tight mt-5 text-4xl leading-[1.06] md:text-[54px]">
                Fast, secure payments
                <br />
                at the{" "}
                <span className="accent-word">restaurant counter.</span>
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-ink-muted">
                {paymentTerminalProduct.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/get-started">Book a Demo</Button>
                <Button href="#specifications" variant="secondary">
                  View Specifications
                </Button>
              </div>
            </div>

            <TerminalScene
              image={imgHero}
              alt="Vertex Payment Terminal at a restaurant checkout counter"
              state="ready"
              height="min-h-[440px] md:min-h-[540px]"
              terminalPosition="center-right"
              className="shadow-mock"
            />
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 2. PAYMENT EXPERIENCE ─── */
const paymentFlowSteps = [
  {
    num: "01",
    title: "Tap",
    copy: "Contactless card or phone",
    state: "tap" as const,
    showTap: true,
    highlight: false,
  },
  {
    num: "02",
    title: "Insert / Swipe",
    copy: "Use chip or swipe when needed",
    state: "insert" as const,
    showTap: false,
    highlight: false,
  },
  {
    num: "03",
    title: "Enter PIN",
    copy: "Secure PIN confirmation",
    state: "pin" as const,
    showTap: false,
    highlight: false,
  },
  {
    num: "04",
    title: "Approved",
    copy: "Payment completed successfully",
    state: "approved" as const,
    showTap: false,
    highlight: true,
  },
];

function FlowStepVisual({
  step,
}: {
  step: (typeof paymentFlowSteps)[number];
}) {
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-[22px] border bg-white shadow-card transition-shadow hover:shadow-mock ${
        step.highlight
          ? "border-[#1F7A45]/25 ring-1 ring-[#1F7A45]/10"
          : "border-line"
      }`}
    >
      <div className="border-b border-line bg-gradient-to-b from-[#FAF8F4] to-[#F7F5F2] px-4 py-5 md:py-6">
        <PaymentTerminalUnit
          size="md"
          state={step.state}
          showTap={step.showTap}
          glow={step.highlight || step.state === "tap"}
        />
      </div>
      <div className="p-4 md:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
          {step.num} — {step.title}
        </p>
        <p className="mt-1.5 text-[13px] leading-5 text-ink-muted">{step.copy}</p>
      </div>
    </article>
  );
}

export function TerminalPaymentExperience() {
  return (
    <section className="overflow-hidden bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Payment experience</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              From tap to approval, every payment stays clear.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              Make every checkout step simple for staff and easy for customers to
              follow.
            </p>
          </div>

          {/* Desktop: connected 4-step terminal journey */}
          <div className="relative mx-auto mt-12 hidden max-w-[1200px] lg:flex lg:items-stretch lg:gap-2">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[6%] right-[6%] top-[42%] h-px bg-gradient-to-r from-orange/15 via-orange/40 to-[#1F7A45]/35"
            />
            {paymentFlowSteps.map((step, i) => (
              <Fragment key={step.num}>
                <div className="min-w-0 flex-1">
                  <FlowStepVisual step={step} />
                </div>
                {i < paymentFlowSteps.length - 1 && (
                  <FlowArrow className="self-center px-1" />
                )}
              </Fragment>
            ))}
          </div>

          {/* Tablet: 2×2 */}
          <div className="relative mx-auto mt-10 hidden max-w-[720px] md:grid md:grid-cols-2 md:gap-4 lg:hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[20%] right-[20%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-orange/20 via-orange/45 to-[#1F7A45]/30"
            />
            {paymentFlowSteps.map((step, i) => (
              <div key={step.num} className="relative">
                {i % 2 === 0 && i < 2 && (
                  <FlowArrow className="absolute -right-2 top-1/2 z-10 -translate-y-1/2" />
                )}
                <FlowStepVisual step={step} />
              </div>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="relative mx-auto mt-10 max-w-[400px] md:hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-4 left-1/2 top-4 w-px -translate-x-1/2 bg-gradient-to-b from-orange/20 via-orange/45 to-[#1F7A45]/40"
            />
            <div className="space-y-3">
              {paymentFlowSteps.map((step, i) => (
                <Fragment key={step.num}>
                  <FlowStepVisual step={step} />
                  {i < paymentFlowSteps.length - 1 && (
                    <div className="flex justify-center text-orange/55">↓</div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 3. REAL PAYMENT MOMENT ─── */
export function TerminalRealPaymentMoment() {
  return (
    <section className="bg-[#F7F5F2] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <TerminalScene
              image={imgPaymentMoment}
              alt="Restaurant employee and customer completing payment on the Vertex Payment Terminal"
              state="tap"
              showTap
              height="min-h-[400px] md:min-h-[520px] lg:min-h-[580px]"
              terminalPosition="bottom-right"
            />
            <div className="max-w-md">
              <SectionLabel>Real payment moment</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-4xl">
                Built around the payment moment.
              </h2>
              <p className="mt-5 text-[16px] leading-7 text-ink-muted">
                At the counter, the Payment Terminal gives staff and customers a
                clear, simple checkout — presenting the total, guiding the
                payment method, and confirming approval without confusion.
              </p>
              <ul className="mt-8 space-y-4 border-l-2 border-orange pl-5">
                <li className="text-[14px] leading-6 text-ink-muted">
                  Staff see payment status on a dedicated terminal display
                </li>
                <li className="text-[14px] leading-6 text-ink-muted">
                  Customers follow on-screen prompts through tap, insert, or PIN
                </li>
                <li className="text-[14px] leading-6 text-ink-muted">
                  Approvals are confirmed clearly before the next guest pays
                </li>
              </ul>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 4. KEY FEATURES ─── */
export function TerminalKeyFeatures() {
  const [lead, ...rest] = paymentTerminalProduct.features;

  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <SectionLabel>Key features</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Built for payment confidence at the counter.
              </h2>
            </div>
            <p className="text-[16px] leading-7 text-ink-muted lg:max-w-md">
              Purpose-built for restaurant checkout — a dedicated payment terminal
              your team can trust during service.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <article className="overflow-hidden rounded-[24px] border border-line bg-[#0f141c] lg:col-span-5 lg:row-span-2">
              <div className="border-b border-white/10 p-6 lg:p-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                  {lead.title}
                </p>
                <p className="mt-3 text-[15px] leading-7 text-white/75">{lead.copy}</p>
              </div>
              <div className="p-6 lg:p-8">
                <PaymentTerminalUnit size="lg" state="tap" showTap glow />
              </div>
            </article>

            {rest.map((feature, i) => (
              <article
                key={feature.title}
                className={`rounded-[20px] border border-line bg-[#FAF8F4] p-5 md:p-6 ${
                  i < 2 ? "lg:col-span-3" : "lg:col-span-4"
                }`}
              >
                <div className="mb-3 h-1 w-8 rounded-full bg-orange" />
                <h3 className="text-[16px] font-semibold">{feature.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-ink-muted">{feature.copy}</p>
              </article>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 5. PAYMENT METHODS ─── */
export function TerminalPaymentMethods() {
  const methods = [
    {
      label: "Contactless tap",
      copy: "Guests tap cards or phones on the terminal contactless area.",
      state: "tap" as const,
      showTap: true,
    },
    {
      label: "Chip",
      copy: "Insert chip cards when contactless is not available.",
      state: "insert" as const,
    },
    {
      label: "Swipe",
      copy: "Swipe eligible cards through the reader slot when needed.",
      state: "swipe" as const,
    },
    {
      label: "PIN",
      copy: "Enter PIN securely on the terminal display.",
      state: "pin" as const,
    },
    {
      label: "Digital wallet",
      copy: "Accept phone wallet payments via contactless tap.",
      state: "tap" as const,
      showTap: true,
    },
  ];
  const networks = ["Visa", "Mastercard", "Amex", "Discover"];

  return (
    <section className="bg-[#F3EEE6] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Payment methods</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Every way guests pay — on one terminal.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              Each method is shown on the Payment Terminal display so staff and
              customers know exactly what to do.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {methods.map((method) => (
              <TerminalMethodPanel
                key={method.label}
                label={method.label}
                copy={method.copy}
                state={method.state}
                showTap={method.showTap}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {networks.map((network) => (
              <TerminalNetworkMark key={network} label={network} />
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 6. TERMINAL SCREEN EXPERIENCE ─── */
export function TerminalScreenExperience() {
  const screens = [
    { title: "Enter Amount", state: "amount" as const },
    { title: "Ready to Pay", state: "ready" as const },
    { title: "Processing Payment", state: "processing" as const },
    { title: "Payment Approved", state: "approved" as const },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Terminal display</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">Clear at every step.</h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              Simple on-screen guidance keeps customers and staff confident
              throughout checkout.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {screens.map((screen) => (
              <TerminalScreenPanel
                key={screen.title}
                title={screen.title}
                state={screen.state}
              />
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 7. SECURITY ─── */
export function TerminalSecurity() {
  const callouts = [
    { label: "Secure PIN entry", position: "left-[8%] top-[18%]" },
    { label: "Protected payment flow", position: "right-[6%] top-[28%]" },
    { label: "Encrypted transaction", position: "left-[10%] bottom-[22%]" },
    { label: "Clear payment confirmation", position: "right-[8%] bottom-[18%]" },
  ];

  return (
    <section className="bg-[#0f141c] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div className="text-white">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                Security
              </p>
              <h2 className="serif-tight mt-4 text-3xl md:text-5xl">
                Protected payments, clearly confirmed.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-white/70">
                The Payment Terminal is designed for encrypted processing, secure
                PIN entry on screen, and clear authorization states — keeping
                checkout factual and product-focused.
              </p>
            </div>

            <div className="relative rounded-[28px] border border-white/10 bg-[#151b24] p-8 md:p-10">
              <PaymentTerminalUnit size="xl" state="pin" glow />
              {callouts.map((item) => (
                <TerminalFeatureCallout
                  key={item.label}
                  label={item.label}
                  className={`absolute ${item.position} hidden md:inline-flex`}
                />
              ))}
              <div className="mt-6 grid gap-2 sm:grid-cols-2 md:hidden">
                {callouts.map((item) => (
                  <span
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[12px] font-semibold text-white/80"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 8. BUILT FOR BUSY RESTAURANTS ─── */
export function TerminalBusyRestaurants() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imgBusyRush}
          alt="Busy restaurant checkout with Vertex Payment Terminal"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0f141c]/75" />
      </div>
      <FeatureWide className="relative py-24 md:py-32">
        <Inner>
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_300px]">
            <div className="max-w-xl text-white">
              <SectionLabel>Busy service</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Ready when the rush arrives.
              </h2>
              <p className="mt-5 text-[16px] leading-7 text-white/78">
                During peak hours, your team needs a payment terminal built for
                fast, repeated interactions — presenting totals quickly, accepting
                every common payment type, and confirming approvals without
                slowing the line.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/15 bg-black/30 p-5 backdrop-blur-md">
              <PaymentTerminalUnit size="md" state="processing" glow />
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 9. PAYMENT ENVIRONMENTS ─── */
export function TerminalPaymentEnvironments() {
  const environments = [
    {
      num: "01",
      title: "Restaurant counter",
      copy: "Full-service checkout at the host stand or counter.",
      image: imgEnvCounter,
      state: "approved" as const,
    },
    {
      num: "02",
      title: "Café checkout",
      copy: "Quick payments between espresso orders and pastry pickup.",
      image: imgEnvCafe,
      state: "tap" as const,
      showTap: true,
    },
    {
      num: "03",
      title: "Bar & casual dining",
      copy: "Settle tabs and table payments without leaving the floor.",
      image: imgEnvBar,
      state: "ready" as const,
    },
    {
      num: "04",
      title: "Takeaway & quick service",
      copy: "Keep the pickup line moving with fast terminal payments.",
      image: imgEnvTakeaway,
      state: "insert" as const,
    },
  ];

  return (
    <section className="bg-[#F7F5F2] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="max-w-xl">
            <SectionLabel>Where it works</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              One terminal. Every checkout environment.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {environments.map((env) => (
              <article key={env.num} className="group overflow-hidden rounded-[24px] border border-line bg-white shadow-card">
                <TerminalScene
                  image={env.image}
                  alt={`Vertex Payment Terminal at ${env.title}`}
                  state={env.state}
                  showTap={env.showTap}
                  height="h-[260px] md:h-[280px]"
                  className="rounded-none border-0 shadow-none"
                />
                <div className="p-5 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
                    {env.num} — {env.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-6 text-ink-muted">{env.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 10. PRODUCT CLOSE-UP ─── */
export function TerminalProductCloseUp() {
  const angles: { label: string; angle: TerminalAngle; feature?: string }[] = [
    { label: "Front", angle: "front", feature: "Display" },
    { label: "Side", angle: "side", feature: "Card slot" },
    { label: "Angled", angle: "angled", feature: "Contactless area" },
    { label: "Connectivity", angle: "back", feature: "Connectivity" },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel>Product close-up</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Designed for the counter.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                A compact countertop payment terminal with a clear display,
                contactless reader, and card slot — built for daily restaurant
                checkout.
              </p>
              <ul className="mt-8 space-y-3">
                {["Display", "Contactless area", "Card slot", "Connectivity"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[14px] font-medium"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2 rounded-[28px] border border-line bg-[#F7F5F2] p-8 shadow-mock">
                <PaymentTerminalUnit size="xl" state="ready" glow angle="front" />
                <p className="mt-4 text-center text-[12px] font-semibold text-ink-muted">
                  Front — Display
                </p>
              </div>
              {angles.slice(1).map((view) => (
                <div
                  key={view.label}
                  className="rounded-[22px] border border-line bg-[#FAF8F4] p-5 shadow-card"
                >
                  <PaymentTerminalUnit
                    size="sm"
                    state="ready"
                    angle={view.angle}
                  />
                  <p className="mt-3 text-center text-[12px] font-semibold">
                    {view.label}
                    {view.feature ? ` — ${view.feature}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 11. CONNECTIVITY & OPERATIONS ─── */
export function TerminalConnectivityOps() {
  const ops = [
    {
      title: "Counter placement",
      copy: "Sits at checkout as a dedicated payment terminal for guest-facing transactions.",
    },
    {
      title: "Wi-Fi / Ethernet",
      copy: "Connect to your restaurant network in the way your counter setup requires.",
    },
    {
      title: "Vertex POS workflow",
      copy: "Payment totals and confirmations stay linked to your supported checkout flow.",
    },
    {
      title: "Daily service rhythm",
      copy: "Built for repeated use across lunch, dinner, and late service rushes.",
    },
  ];

  return (
    <section className="bg-[#FAF8F4] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <SectionLabel>Connectivity & operations</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Connected to the way your counter runs.
              </h2>
              <div className="mt-8 divide-y divide-line">
                {ops.map((item, i) => (
                  <div
                    key={item.title}
                    className="grid gap-3 py-5 md:grid-cols-[100px_1fr]"
                  >
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="text-[16px] font-semibold">{item.title}</h3>
                      <p className="mt-1 text-[14px] leading-6 text-ink-muted">
                        {item.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-line bg-white p-6 shadow-mock md:p-8">
              <PaymentTerminalUnit size="lg" state="ready" glow />
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Wi-Fi", "Ethernet", "Checkout", "Confirmation"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl border border-line bg-fog px-3 py-2.5 text-center text-[12px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 12. SPECIFICATIONS ─── */
export function TerminalSpecifications() {
  return (
    <section className="bg-white py-20 md:py-24" id="specifications">
      <FeatureWide>
        <Inner>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="rounded-[28px] border border-line bg-[#F7F5F2] p-8 shadow-mock md:p-10">
              <SectionLabel>Specifications</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-4xl">
                Payment Terminal details.
              </h2>
              <div className="mt-8">
                <PaymentTerminalUnit size="xl" state="approved" glow />
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-line bg-fog shadow-card">
              <div className="border-b border-line bg-white px-6 py-4">
                <h3 className="text-[18px] font-semibold">
                  Vertex Payment Terminal specifications
                </h3>
              </div>
              <dl className="divide-y divide-line">
                {paymentTerminalProduct.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid gap-1 bg-white px-6 py-4 sm:grid-cols-[180px_1fr]"
                  >
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
                      {spec.label}
                    </dt>
                    <dd className="text-[14px] font-medium leading-6">{spec.value}</dd>
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

/* ─── 13. PRICING ─── */
export function TerminalPricing() {
  return (
    <section className="bg-[#F3EEE6] py-20 md:py-24" id="pricing">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[28px] border border-[#ddd5c8] bg-[#0f141c] p-8 shadow-mock md:p-10">
              <PaymentTerminalUnit size="xl" state="ready" glow />
            </div>

            <div className="rounded-[28px] border border-[#ddd5c8] bg-white p-8 shadow-mock md:p-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                Pricing
              </p>
              <h2 className="serif-tight mt-3 text-3xl">Vertex Payment Terminal</h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                {paymentTerminalProduct.valueStatement}
              </p>
              <div className="mt-6 border-t border-line pt-6">
                {terminalPricing.starting != null ? (
                  <>
                    <p className="text-[14px] text-ink-muted">Starting at</p>
                    <p className="mt-1 text-[44px] font-semibold tracking-tight">
                      {formatTerminalPrice(terminalPricing.starting)}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-[14px] text-ink-muted">Starting price</p>
                    <p className="mt-2 text-[22px] font-semibold tracking-tight">
                      {terminalStartingLabel()}
                    </p>
                    <p className="mt-2 text-[13px] text-ink-muted">
                      Contact our team for restaurant pricing on this device.
                    </p>
                  </>
                )}
              </div>
              <div className="mt-8">
                <Button href="/get-started">Book a Demo</Button>
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 14. FAQ ─── */
export function TerminalFaq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="serif-tight text-3xl md:text-4xl">
                Payment Terminal FAQ
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Answers for restaurants evaluating the Vertex Payment Terminal.
              </p>
              <div className="mt-8 max-w-[240px]">
                <CompactTerminalCard />
              </div>
            </div>
            <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-fog">
              {items.map((item) => (
                <details key={item.question} className="group bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 md:px-6">
                    <span className="text-[15px] font-semibold">{item.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line group-open:bg-fog">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-[14px] leading-7 text-ink-muted md:px-6">
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

/* ─── 15. FINAL CTA ─── */
export function TerminalFinalCta() {
  return (
    <section className="relative min-h-[480px] overflow-hidden md:min-h-[560px]">
      <Image
        src={imgCtaFinal}
        alt="Vertex Payment Terminal during restaurant service"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0f141c]/82" />
      <FeatureWide className="relative flex min-h-[480px] flex-col justify-center py-20 md:min-h-[560px] md:py-24">
        <Inner>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-white">
              <h2 className="serif-tight text-4xl leading-tight md:text-5xl">
                Make every payment feel effortless.
              </h2>
              <p className="mt-4 max-w-lg text-[16px] leading-7 text-white/75">
                Give your team a dedicated Payment Terminal built for secure,
                countertop checkout during restaurant service.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/get-started">Book a Demo</Button>
                <Button href="#specifications" variant="white">
                  View Specifications
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[300px] rounded-[24px] border border-white/15 bg-black/30 p-5 backdrop-blur-md">
              <PaymentTerminalUnit size="lg" state="approved" glow />
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}
