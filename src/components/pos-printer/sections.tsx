import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import {
  formatPrinterPrice,
  printerProduct,
} from "@/components/pos-printer/catalog";
import {
  CompactPrinterCard,
  HeroPrinterComposition,
  PosPrinterUnit,
  ReceiptSlip,
} from "@/components/pos-printer/mockups";

const imgCafe =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80";
const imgDining =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80";
const imgQsr =
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80";
const imgCta =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80";

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

/* ─── 1. HERO — slate studio, receipt-forward (unique vs other device pages) ─── */
export function PrinterHero() {
  return (
    <section className="overflow-hidden bg-[#0f141c] pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20">
            <div className="max-w-xl text-white">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange">
                Vertex POS Printer
              </p>
              <h1 className="serif-tight mt-5 text-4xl leading-[1.06] md:text-[54px]">
                Print every order.
                <br />
                Keep{" "}
                <span className="accent-word">service moving.</span>
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-white/70">
                {printerProduct.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/get-started">Get Started</Button>
                <Button href="/get-started" variant="white">
                  Book a Demo
                </Button>
              </div>
            </div>
            <HeroPrinterComposition />
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 2. QUICK INFO BAR ─── */
export function PrinterQuickInfo() {
  return (
    <section className="border-b border-line bg-white">
      <FeatureWide>
        <Inner className="grid gap-6 py-6 md:grid-cols-[1.2fr_auto] md:items-center md:py-7">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-orange">
                Vertex POS Printer
              </p>
              <p className="mt-1 text-[14px] text-ink-muted">
                Starting at{" "}
                <span className="text-[22px] font-semibold text-ink">
                  {formatPrinterPrice()}
                </span>
              </p>
            </div>
            {printerProduct.quickInfo.map((item) => (
              <div key={item.label} className="border-l border-line pl-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                  {item.label}
                </p>
                <p className="mt-1 text-[14px] font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
          <Button href="/get-started">Book a Demo</Button>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 3. PRINTING WORKFLOW — connected timeline with printer center ─── */
export function PrintingWorkflow() {
  const steps = [
    { num: "01", title: "Order placed", copy: "Staff completes the check on Vertex POS." },
    { num: "02", title: "Payment confirmed", copy: "The sale is finalized at the counter." },
    { num: "03", title: "Receipt printed", copy: "The POS Printer delivers a clear receipt." },
    { num: "04", title: "Customer served", copy: "Guests leave with a finished transaction." },
  ];

  return (
    <section className="bg-[#F7F5F2] py-24 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Printing workflow</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              From order to receipt in seconds.
            </h2>
          </div>

          <div className="relative mx-auto mt-14 max-w-5xl">
            {/* Center printer */}
            <div className="mx-auto mb-10 max-w-[280px] md:mb-0 md:absolute md:left-1/2 md:top-1/2 md:w-[240px] md:-translate-x-1/2 md:-translate-y-1/2">
              <div className="rounded-2xl border border-line bg-white p-4 shadow-mock">
                <PosPrinterUnit size="md" printing />
                <div className="mt-12" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-x-56 md:gap-y-8">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className={`rounded-2xl border border-line bg-white p-5 shadow-card ${
                    i % 2 === 1 ? "md:mt-16" : ""
                  }`}
                >
                  <p className="text-[12px] font-semibold text-orange">{step.num}</p>
                  <h3 className="mt-2 text-[16px] font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-ink-muted">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 4. PRODUCT DETAILS — callouts around printer ─── */
export function ProductDetails() {
  const callouts = [
    { title: "Auto-cut printing", copy: "Clean receipts, ready to hand over." },
    { title: "Easy paper loading", copy: "Reload quickly between rushes." },
    { title: "Compact counter footprint", copy: "Fits tight FOH stations." },
    { title: "LED status indicator", copy: "See ready status at a glance." },
    { title: "Restaurant-ready housing", copy: "Built for daily service use." },
  ];

  return (
    <section className="bg-white py-24 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Product details</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Small footprint.
                <br />
                Serious performance.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                A compact thermal printer designed to sit at the counter and keep
                receipts moving when service speeds up.
              </p>
              <ul className="mt-8 space-y-4">
                {callouts.map((item) => (
                  <li key={item.title} className="flex gap-3 border-l-2 border-orange pl-4">
                    <div>
                      <p className="text-[14px] font-semibold">{item.title}</p>
                      <p className="mt-0.5 text-[13px] text-ink-muted">{item.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-[28px] border border-line bg-[#F3EEE6] p-8 md:p-12">
              <PosPrinterUnit size="lg" printing />
              <div className="mt-16 flex justify-center">
                <ReceiptSlip className="w-40" />
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 5. SPEED & RELIABILITY — warm gray, non-fake metrics ─── */
export function SpeedReliability() {
  const metrics = [
    {
      title: "High-speed thermal",
      copy: "Built to print receipts quickly during busy service.",
    },
    {
      title: "Auto-cutter ready",
      copy: "Automatic cutting keeps handoffs clean and fast.",
    },
    {
      title: "USB / Ethernet",
      copy: "Connect in the way your counter setup needs.",
    },
    {
      title: "All-day service",
      copy: "Designed for repeated restaurant use, shift after shift.",
    },
  ];

  return (
    <section className="bg-[#EFEAE3] py-24 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="serif-tight text-3xl md:text-5xl">
              Built for the busiest moments.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              When the line gets longer, your printer should never become the
              bottleneck.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#ddd5c8] bg-white/80 p-6"
              >
                <div className="mb-4 h-1 w-8 rounded-full bg-orange" />
                <h3 className="text-[16px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-ink-muted">{item.copy}</p>
              </div>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 6. SPECS + PRICING ─── */
export function SpecsAndPricing() {
  return (
    <section className="bg-white py-24 md:py-28" id="pricing">
      <FeatureWide>
        <Inner>
          <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[28px] border border-line bg-[#0f141c] p-8 shadow-mock md:p-10">
              <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                Product
              </p>
              <PosPrinterUnit size="lg" printing />
              <div className="mt-16" />
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-2xl border border-line bg-fog shadow-card">
                <div className="border-b border-line bg-white px-6 py-4">
                  <h2 className="text-[18px] font-semibold">
                    POS Printer specifications
                  </h2>
                </div>
                <dl className="divide-y divide-line">
                  {printerProduct.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid gap-1 px-6 py-3.5 sm:grid-cols-[140px_1fr]"
                    >
                      <dt className="text-[12px] font-semibold text-ink-muted">
                        {spec.label}
                      </dt>
                      <dd className="text-[14px] font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl border border-line bg-white p-6 shadow-mock md:p-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                  Pricing
                </p>
                <p className="mt-4 text-[14px] text-ink-muted">Starting at</p>
                <p className="mt-1 text-[48px] font-semibold tracking-tight">
                  {formatPrinterPrice()}
                </p>
                <p className="mt-2 text-[14px] text-ink-muted">
                  Dedicated POS Printer pricing for restaurant checkout setups.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/get-started">Book a Demo</Button>
                  <Button href="/get-started" variant="secondary">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 7. USE CASES — stacked photo panels ─── */
export function RestaurantUseCases() {
  const cases = [
    {
      title: "Counter Service",
      copy: "Fast receipt printing without slowing the line.",
      image: imgQsr,
    },
    {
      title: "Full-Service Dining",
      copy: "Clear receipts for every transaction.",
      image: imgDining,
    },
    {
      title: "Café & Quick Service",
      copy: "Compact printing for busy counters.",
      image: imgCafe,
    },
  ];

  return (
    <section className="bg-[#F7F5F2] py-24 md:py-28">
      <FeatureWide>
        <Inner>
          <h2 className="serif-tight max-w-xl text-3xl md:text-5xl">
            One printer.
            <br />
            Every service moment.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {cases.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[24px] border border-line bg-white shadow-card"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 right-3 w-24">
                    <PosPrinterUnit size="sm" printing={false} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[16px] font-semibold">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 8. CONNECTIVITY DIAGRAM ─── */
export function PrinterConnectivity() {
  const nodes = [
    "Vertex POS",
    "Receipt Printing",
    "Restaurant Network",
    "Order System",
    "Cash Management",
  ];

  return (
    <section className="bg-white py-24 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-[1000px]">
            <div className="text-center">
              <SectionLabel>Connectivity</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Connect it to the way you work.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
                Keep receipt printing connected to your restaurant checkout
                workflow without making another device the focus.
              </p>
            </div>

            <div className="mt-14 rounded-[28px] border border-line bg-[#0f141c] p-6 md:p-10">
              <div className="mx-auto max-w-[260px]">
                <PosPrinterUnit size="md" printing />
                <div className="mt-12 text-center">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-orange">
                    Vertex POS Printer
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
                {nodes.map((node) => (
                  <div key={node} className="flex items-center gap-3">
                    <span className="hidden text-orange sm:inline">—</span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-semibold text-white/85">
                      {node}
                    </span>
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

/* ─── 9. FAQ ─── */
export function PrinterFaq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="bg-[#F7F5F2] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="serif-tight text-3xl md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Printer-specific answers for restaurants using Vertex POS.
              </p>
              <div className="mt-8 max-w-[200px]">
                <CompactPrinterCard />
              </div>
            </div>
            <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
              {items.map((item) => (
                <details key={item.question} className="group">
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

/* ─── 10. FINAL CTA ─── */
export function PrinterFinalCta() {
  return (
    <section className="relative overflow-hidden">
      <Image src={imgCta} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-[#0f141c]/88" />
      <FeatureWide className="relative grid items-center gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="text-white">
          <h2 className="serif-tight text-4xl leading-tight md:text-5xl">
            Keep every receipt moving.
          </h2>
          <p className="mt-4 max-w-lg text-[16px] leading-7 text-white/75">
            Give your team a fast, dependable printer built for the pace of
            restaurant service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/get-started">Get Started</Button>
            <Button href="/get-started" variant="white">
              Book a Demo
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm rounded-[24px] border border-white/10 bg-black/30 p-6">
          <PosPrinterUnit size="lg" printing />
          <div className="mt-14" />
        </div>
      </FeatureWide>
    </section>
  );
}
