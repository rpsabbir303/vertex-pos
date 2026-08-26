import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import {
  cardReaderProduct,
  formatCardReaderPrice,
} from "@/components/pos-card-reader/catalog";
import {
  CardReaderUnit,
  ChipCard,
  GlassLabel,
  MiniInteraction,
  PaymentApprovedChip,
  PhonePay,
  SoftLabel,
} from "@/components/pos-card-reader/mockups";

const imgShowcase =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80";
const imgSplit =
  "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1600&q=80";
const imgBusy =
  "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?auto=format&fit=crop&w=1600&q=80";
const imgClose =
  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80";
const imgCta =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80";

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

/* 1 — HERO: product-dominant asymmetric */
export function CardReaderHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F1EC] pt-28 md:pt-32">
      <div className="pointer-events-none absolute -right-24 top-20 h-[420px] w-[420px] rounded-full bg-orange/10 blur-3xl" />
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:pb-20">
            <div className="max-w-xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange">
                Vertex POS Card Reader
              </p>
              <h1 className="serif-tight mt-5 text-4xl leading-[1.05] md:text-[54px]">
                Payments that move at the{" "}
                <span className="accent-word">speed of service.</span>
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-ink-muted">
                {cardReaderProduct.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/get-started">Book a Demo</Button>
                <Button href="#specifications" variant="secondary">
                  View Specifications
                </Button>
              </div>
              <p className="mt-6 text-[14px] font-semibold text-ink">
                From{" "}
                <span className="text-[22px] text-orange">
                  {formatCardReaderPrice()}
                </span>
              </p>
            </div>

            <div className="relative mx-auto flex min-h-[420px] w-full max-w-lg items-center justify-center md:min-h-[480px]">
              <div className="absolute inset-8 rounded-[40px] bg-gradient-to-br from-white/80 to-[#e8e2d8]" />
              <CardReaderUnit size="xl" state="tap" showTap glow angle="tilt" />
              <GlassLabel className="!absolute left-2 top-10 !border-line !bg-white/80 !text-ink md:left-6">
                Contactless
              </GlassLabel>
              <SoftLabel className="absolute right-2 top-16 md:right-8">
                Chip & PIN
              </SoftLabel>
              <SoftLabel className="absolute bottom-24 left-4 md:left-10">
                Digital Wallets
              </SoftLabel>
              <div className="absolute bottom-6 right-2 w-[160px] md:right-4">
                <PaymentApprovedChip />
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 2 — FULL-WIDTH SHOWCASE */
export function ProductShowcase() {
  return (
    <section className="bg-white py-12 md:py-16">
      <FeatureWide>
        <Inner>
          <div className="relative overflow-hidden rounded-[28px] shadow-mock">
            <Image
              src={imgShowcase}
              alt="Restaurant employee accepting payment with a card reader"
              width={2000}
              height={1100}
              className="h-[420px] w-full object-cover md:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 p-6 md:p-10">
              <div className="flex flex-wrap gap-2">
                <GlassLabel>Fast checkout</GlassLabel>
                <GlassLabel>Contactless ready</GlassLabel>
                <GlassLabel>Secure payment</GlassLabel>
              </div>
              <div className="w-[160px] md:w-[190px]">
                <CardReaderUnit size="md" state="approved" angle="tilt-right" />
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 3 — PAYMENT JOURNEY with center device + connectors */
export function PaymentExperience() {
  const stages = [
    { num: "01", title: "TAP", hint: "NFC signal", state: "tap" as const },
    { num: "02", title: "CONFIRM", hint: "Amount visible", state: "ready" as const },
    { num: "03", title: "PAY", hint: "Processing", state: "processing" as const },
    { num: "04", title: "DONE", hint: "Approved", state: "approved" as const },
  ];

  return (
    <section className="bg-[#F4F1EC] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Payment experience</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Tap. Confirm. Pay. Done.
            </h2>
          </div>

          <div className="relative mx-auto mt-14 max-w-4xl">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-[72px] hidden h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent lg:block" />

            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stages.map((s) => (
                <div key={s.num} className="relative text-center">
                  <div className="mx-auto mb-4 flex h-3 w-3 items-center justify-center rounded-full bg-orange ring-4 ring-orange/20" />
                  <p className="text-[11px] font-semibold text-orange">{s.num}</p>
                  <p className="mt-1 text-[18px] font-semibold tracking-wide">
                    {s.title}
                  </p>
                  <p className="mt-1 text-[12px] text-ink-muted">{s.hint}</p>
                  <div className="mt-4">
                    <CardReaderUnit
                      size="sm"
                      state={s.state}
                      showTap={s.state === "tap"}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-[240px]">
              <CardReaderUnit size="lg" state="tap" showTap glow />
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 4 — SPLIT IMMERSIVE: photo + dark panel */
export function RealPaymentScene() {
  return (
    <section className="bg-white py-12 md:py-16">
      <FeatureWide>
        <Inner>
          <div className="grid overflow-hidden rounded-[28px] shadow-mock lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[380px]">
              <Image
                src={imgSplit}
                alt="Employee using Vertex Card Reader at a restaurant counter"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative flex flex-col justify-center bg-night p-8 text-white md:p-10">
              <h2 className="serif-tight text-3xl md:text-4xl">
                Checkout without slowing the line.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-white/70">
                Staff present the amount, guests tap or insert, and service keeps
                moving—even when the counter is at its busiest.
              </p>
              <ul className="mt-7 space-y-3 text-[14px]">
                {[
                  "Fast payment",
                  "Contactless ready",
                  "Simple staff operation",
                  "Clear confirmation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-orange-mid">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 w-[150px]">
                <CardReaderUnit size="sm" state="approved" />
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 5 — PAYMENT METHODS visual composition */
export function PaymentMethods() {
  return (
    <section className="bg-[#F4F1EC] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Payment methods</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-4xl">
              Every way guests want to pay.
            </h2>
          </div>

          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="mx-auto max-w-[230px]">
              <CardReaderUnit size="lg" state="ready" showTap glow />
            </div>

            <div className="mt-10 flex flex-wrap items-end justify-center gap-6 md:gap-10">
              <MiniInteraction label="Contactless">
                <PhonePay />
              </MiniInteraction>
              <MiniInteraction label="Chip & PIN">
                <div className="flex items-center gap-1">
                  <ChipCard />
                  <span className="text-[10px] font-semibold text-orange">IN</span>
                </div>
              </MiniInteraction>
              <MiniInteraction label="Digital Wallet">
                <div className="relative">
                  <PhonePay />
                </div>
              </MiniInteraction>
              <MiniInteraction label="Credit / Debit">
                <ChipCard />
              </MiniInteraction>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 5b — USE CASES: One card reader. Every payment moment. */
export function PaymentMomentsUseCases() {
  const cases = [
    {
      title: "Restaurants & Cafés",
      copy: "Take payments at the table or counter without slowing service.",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
      icon: (
        <>
          <path d="M7 4v16M7 4c0 2 1.5 3 1.5 5S7 12 7 12M11 4v7c0 1.5-1 2-2 2.5V20" />
          <path d="M16 4v16M16 4h3v5c0 1.5-1.5 2-3 2" />
        </>
      ),
      readerState: "tap" as const,
    },
    {
      title: "Retail Stores",
      copy: "Accept quick card and contactless payments at checkout.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
      icon: (
        <>
          <path d="M6 8h12l-1.2 11H7.2L6 8z" />
          <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
        </>
      ),
      readerState: "ready" as const,
    },
    {
      title: "Salons & Clinics",
      copy: "Make every customer payment simple and secure.",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
      icon: (
        <>
          <path d="M6 4l5 8-2 2 9 6" />
          <path d="M18 4l-5 8 2 2-9 6" />
        </>
      ),
      readerState: "approved" as const,
    },
    {
      title: "Delivery & Mobile Service",
      copy: "Take payments wherever your team works.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
      icon: (
        <>
          <path d="M3 15h12V7H3v8z" />
          <path d="M15 10h3.5L21 13v2h-6v-5z" />
          <circle cx="7" cy="17.5" r="1.5" />
          <circle cx="17" cy="17.5" r="1.5" />
        </>
      ),
      readerState: "processing" as const,
    },
    {
      title: "Events & Pop-Ups",
      copy: "Handle fast-moving payments without a fixed checkout.",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
      icon: (
        <>
          <rect x="5" y="6" width="14" height="14" rx="2" />
          <path d="M5 10h14M9 3v4M15 3v4" />
          <path d="M12 13.2l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 15.3l2-.3.9-1.8z" />
        </>
      ),
      readerState: "tap" as const,
    },
  ];

  return (
    <section className="bg-[#F7F5F1] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Where it works</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              One card reader.{" "}
              <span className="relative inline-block text-orange">
                Every payment moment.
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-1/2 h-[3px] w-16 -translate-x-1/2 rounded-full bg-orange md:w-20"
                />
              </span>
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-ink-muted">
              From busy restaurants to on-the-go services, accept secure payments
              wherever your customers are.
            </p>
          </div>

          {/* Mobile: swipe carousel · Tablet: 2-col · Desktop: 5-col */}
          <div className="mt-12 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 lg:grid-cols-5">
            {cases.map((item) => (
              <article
                key={item.title}
                className="group relative min-w-[280px] shrink-0 snap-start overflow-hidden rounded-[18px] border border-line/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] md:min-w-0 md:last:col-span-2 md:last:mx-auto md:last:max-w-[calc(50%-0.625rem)] lg:last:col-span-1 lg:last:mx-0 lg:last:max-w-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} — Vertex POS Card Reader`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 45vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  <div className="pointer-events-none absolute bottom-4 right-3 w-[92px] drop-shadow-lg md:w-[86px] lg:w-[78px]">
                    <CardReaderUnit
                      size="sm"
                      state={item.readerState}
                      showTap={item.readerState === "tap"}
                    />
                  </div>
                </div>

                {/* Orange badge overlaps image / copy seam */}
                <span className="relative z-10 ml-4 -mt-[22px] flex h-11 w-11 items-center justify-center rounded-full bg-orange text-white shadow-[0_6px_16px_rgba(241,90,36,0.35)] md:ml-5">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {item.icon}
                  </svg>
                </span>

                <div className="px-4 pb-5 pt-3 md:px-5 md:pb-6 md:pt-3.5">
                  <h3 className="text-[15px] font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-5 text-ink-muted">
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

/* 6 — ASYMMETRIC FEATURE SHOWCASE */
export function FeatureShowcase() {
  const features = [
    {
      title: "Fast contactless",
      copy: "Tap cards or phones without slowing the counter.",
    },
    {
      title: "Reliable connectivity",
      copy: "Stay linked to your checkout workflow when it matters.",
    },
    {
      title: "Secure processing",
      copy: "Protected payment flow from tap to confirmation.",
    },
    {
      title: "Clear confirmation",
      copy: "Staff and guests see approved payments instantly.",
    },
    {
      title: "Compact footprint",
      copy: "Designed for tight restaurant and café counters.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative overflow-hidden rounded-[28px] bg-[#EEE9E1]">
              <Image
                src={imgClose}
                alt="Close-up payment interaction with card reader"
                width={1400}
                height={1000}
                className="h-[420px] w-full object-cover opacity-90 md:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
              <div className="absolute bottom-8 left-1/2 w-[180px] -translate-x-1/2 md:w-[210px]">
                <CardReaderUnit size="lg" state="tap" showTap angle="tilt" />
              </div>
            </div>

            <div>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Designed around the payment moment.
              </h2>
              <div className="mt-8 divide-y divide-line border-y border-line">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-4 py-5">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                    <div>
                      <p className="text-[16px] font-semibold">{f.title}</p>
                      <p className="mt-1 text-[14px] leading-6 text-ink-muted">
                        {f.copy}
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

/* 7 — SPECS */
export function SpecsSection() {
  return (
    <section className="bg-fog py-20 md:py-24" id="specifications">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex min-h-[420px] items-center justify-center rounded-[28px] bg-[#EFEAE2] p-10">
              <CardReaderUnit size="xl" state="approved" angle="tilt" glow />
            </div>
            <div>
              <SectionLabel>Product details</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-4xl">
                Card Reader specifications
              </h2>
              <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                <dl className="divide-y divide-line">
                  {cardReaderProduct.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid gap-1 px-6 py-4 sm:grid-cols-[150px_1fr]"
                    >
                      <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                        {spec.label}
                      </dt>
                      <dd className="text-[15px] font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 8 — DARK PRICING MOMENT */
export function PriceSection() {
  return (
    <section className="bg-night py-20 md:py-24" id="pricing">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex justify-center">
              <CardReaderUnit size="xl" state="tap" showTap glow />
            </div>
            <div className="text-white">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-mid">
                Vertex POS Card Reader
              </p>
              <p className="mt-6 text-[15px] text-white/55">Starting at</p>
              <p className="mt-1 text-[64px] font-semibold leading-none tracking-tight">
                {formatCardReaderPrice()}
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-white/65">
                A compact payment device built for restaurant counters—fast to
                present, simple for guests, clear for staff.
              </p>
              <ul className="mt-7 space-y-2.5">
                {cardReaderProduct.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px]">
                    <span className="text-orange-mid">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Button href="/get-started" variant="white">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 9 — HUMAN + PRODUCT */
export function BusyCounters() {
  return (
    <section className="bg-white py-12 md:py-16">
      <FeatureWide>
        <Inner>
          <div className="relative overflow-hidden rounded-[28px] shadow-mock">
            <Image
              src={imgBusy}
              alt="Customer paying with phone while staff completes checkout"
              width={1600}
              height={1000}
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-lg flex-col justify-center p-6 text-white md:p-12">
              <h2 className="serif-tight text-3xl md:text-5xl">
                Built for busy counters.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-white/85">
                Keep payments fast during peak service. Present the total, accept
                tap or wallet pay, confirm, and continue to the next guest.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 w-[170px] md:bottom-10 md:right-10 md:w-[200px]">
              <CardReaderUnit size="md" state="processing" angle="tilt-right" />
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 10 — LARGE TYPOGRAPHIC BENEFITS */
export function WhyChoose() {
  const stats = [
    { kicker: "FAST", title: "Payments in seconds" },
    { kicker: "SECURE", title: "Protected transaction flow" },
    { kicker: "SIMPLE", title: "Easy for staff to use" },
    { kicker: "READY", title: "Built for restaurant service" },
  ];

  return (
    <section className="bg-[#F4F1EC] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <h2 className="serif-tight max-w-3xl text-3xl md:text-5xl">
            Small device. Big impact at checkout.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.kicker} className="border-t-2 border-orange pt-5">
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-orange">
                  {item.kicker}
                </p>
                <p className="serif-tight mt-3 text-2xl md:text-3xl">{item.title}</p>
              </div>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 11 — WORKFLOW */
export function CompatibilityFlow() {
  const flow = ["Order", "Vertex POS", "Card Reader", "Payment", "Confirmation"];

  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Workflow</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-4xl">
              The Card Reader in the Vertex POS flow.
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="flex flex-col items-center gap-0 md:flex-row md:justify-between md:gap-2">
              {flow.map((step, i) => (
                <div key={step} className="flex flex-col items-center md:flex-1">
                  <div
                    className={`w-full max-w-[160px] rounded-2xl border px-4 py-4 text-center text-[13px] font-semibold md:max-w-none ${
                      i === 2
                        ? "border-orange bg-orange text-white shadow-mock"
                        : "border-line bg-fog text-ink"
                    }`}
                  >
                    {step}
                  </div>
                  {i < flow.length - 1 && (
                    <span className="py-2 text-orange md:hidden">↓</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <CardReaderUnit size="md" state="approved" />
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* 12 — FAQ editorial */
export function CardReaderFaq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="bg-fog py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Questions before you get started?
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-ink-muted">
                Everything you need to know about the Vertex POS Card Reader.
              </p>
            </div>
            <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
              {items.map((item) => (
                <details key={item.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 md:px-6">
                    <span className="text-[15px] font-semibold">{item.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-sm group-open:bg-fog">
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

/* 13 — CINEMATIC CTA */
export function CardReaderFinalCta() {
  return (
    <section className="relative min-h-[520px] overflow-hidden">
      <Image src={imgCta} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-[#0b0f16]/88" />
      <FeatureWide className="relative grid min-h-[520px] items-center gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        <div className="text-white">
          <h2 className="serif-tight text-4xl leading-tight md:text-5xl">
            Make every payment feel effortless.
          </h2>
          <p className="mt-4 max-w-lg text-[16px] leading-7 text-white/75">
            Give your team a faster, simpler way to accept payments during every
            shift.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/get-started">Book a Demo</Button>
            <Button href="/get-started" variant="white">
              Talk to Sales
            </Button>
          </div>
          <p className="mt-6 text-[13px] font-semibold text-white/55">
            Vertex POS Card Reader · From {formatCardReaderPrice()}
          </p>
        </div>
        <div className="mx-auto">
          <CardReaderUnit size="xl" state="approved" glow angle="tilt" />
        </div>
      </FeatureWide>
    </section>
  );
}
