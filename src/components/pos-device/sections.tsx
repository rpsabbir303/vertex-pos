import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckItem, FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import {
  deviceStartingAt,
  formatDevicePrice,
  posDeviceProduct,
} from "@/components/pos-device/catalog";
import {
  MenuOrderScreen,
  TableCheckScreen,
  TerminalFrame,
  TodaysServiceScreen,
} from "@/components/pos-device/mockups";

/** Distinct from POS Monitor hero imagery — staff terminal focus. */
const heroImage =
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=2200&q=80";
const serviceImage =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80";
const ctaImage =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=80";

function Inner({
  max = "max-w-[1450px]",
  children,
  className = "",
}: {
  max?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full ${max} ${className}`}>{children}</div>;
}

export function DeviceHero() {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-night md:min-h-[720px]">
      <Image
        src={heroImage}
        alt="Restaurant staff using the Vertex POS Device at the counter"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/58 to-black/28" />
      <FeatureWide className="relative flex min-h-[640px] items-center pt-24 md:min-h-[720px]">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_440px]">
          <div className="max-w-xl text-white">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-orange-mid">
              Vertex POS Device
            </p>
            <h1 className="serif-tight mt-4 text-4xl leading-[1.08] md:text-6xl">
              Your restaurant&apos;s{" "}
              <span className="accent-word">command center.</span>
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-7 text-white/85">
              A powerful restaurant POS terminal built for fast ordering, smooth
              checkout, and the pace of everyday service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/get-started">Get Started</Button>
              <Button href="/get-started" variant="white">
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <TerminalFrame>
              <MenuOrderScreen />
            </TerminalFrame>
          </div>
        </div>
      </FeatureWide>
      <div className="relative border-t border-white/10 bg-black/35">
        <FeatureWide className="grid grid-cols-2 gap-4 py-4 md:grid-cols-4 md:py-5">
          {["Take orders", "Manage tables", "Send to kitchen", "Checkout"].map(
            (item) => (
              <p key={item} className="text-sm font-medium text-white">
                {item}
              </p>
            ),
          )}
        </FeatureWide>
      </div>
    </section>
  );
}

export function ProductIntroduction() {
  return (
    <section className="bg-white py-24 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="max-w-lg">
              <SectionLabel>The main POS workstation</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Built for the moments that keep your restaurant moving.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                The Vertex POS Device is the primary front-of-house terminal
                staff use to manage the full order lifecycle — from the first
                menu tap to final payment — on one screen.
              </p>
              <ul className="mt-8 space-y-3">
                {posDeviceProduct.benefits.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[28px] bg-fog md:-inset-6" />
              <div className="relative">
                <TerminalFrame>
                  <TodaysServiceScreen />
                </TerminalFrame>
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function CorePosWorkflow() {
  const steps = [
    "Start an order",
    "Select menu items",
    "Customize the order",
    "Assign table / customer",
    "Send order to kitchen",
    "Review the check",
    "Process payment",
    "Complete the sale",
  ];

  return (
    <section className="bg-fog py-24 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="serif-tight text-3xl md:text-5xl">
              From first tap to final payment.
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              One clear staff workflow on the Vertex POS Device — no switching
              between disconnected systems mid-service.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="mx-auto max-w-[720px]">
              <TerminalFrame>
                <TableCheckScreen />
              </TerminalFrame>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <div
                  key={step}
                  className="rounded-xl border border-line bg-white px-4 py-3 shadow-card"
                >
                  <p className="text-[11px] font-semibold text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-[14px] font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function PosDeviceFeatures() {
  const features = [
    {
      title: "Fast order entry",
      copy: "Move through menus and build orders quickly with a responsive touchscreen.",
      screen: <MenuOrderScreen />,
    },
    {
      title: "Table & order management",
      copy: "Keep tables, open checks, and active orders organized from one workstation.",
      screen: <TodaysServiceScreen />,
    },
    {
      title: "Menu customization",
      copy: "Handle modifiers, add-ons, special requests, and item variations without slowing service.",
      screen: <MenuOrderScreen />,
    },
    {
      title: "Fast checkout",
      copy: "Review totals, apply discounts, and complete payments from the same workflow.",
      screen: <TableCheckScreen />,
    },
    {
      title: "Real-time order control",
      copy: "Keep order details synchronized as staff update items and quantities.",
      screen: <TodaysServiceScreen />,
    },
    {
      title: "Staff-friendly interface",
      copy: "Simple navigation helps new and experienced team members work confidently.",
      screen: <TableCheckScreen />,
    },
  ];

  return (
    <section className="bg-white py-24 md:py-28">
      <FeatureWide>
        <Inner>
          <SectionLabel>POS Device features</SectionLabel>
          <h2 className="serif-tight max-w-2xl text-3xl md:text-5xl">
            Everything staff need on the main terminal.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-panel border border-line bg-fog"
              >
                <div className="border-b border-line bg-white p-3">
                  <div className="origin-top scale-[0.92]">
                    <TerminalFrame>{item.screen}</TerminalFrame>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-ink-muted">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function RealWorldService() {
  const points = [
    "Quick order entry during rush hours",
    "Clear order review before sending",
    "Easy item customization",
    "Faster checkout",
    "Less switching between systems",
  ];

  return (
    <section className="bg-mist py-24 md:py-28">
      <FeatureWide>
        <Inner>
          <div className="relative overflow-hidden rounded-panel shadow-mock">
            <Image
              src={serviceImage}
              alt="Restaurant employee taking an order on the Vertex POS Device"
              width={1800}
              height={1000}
              className="h-[440px] w-full object-cover md:h-[540px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-xl text-white md:bottom-10 md:left-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange-mid">
                Real service
              </p>
              <h2 className="serif-tight mt-2 text-3xl md:text-4xl">
                Made for the pace of real service.
              </h2>
              <ul className="mt-5 space-y-2 text-[14px] text-white/90">
                {points.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-orange-mid">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-5 top-5 hidden w-[240px] lg:block">
              <TerminalFrame>
                <MenuOrderScreen />
              </TerminalFrame>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function SpecsAndPricing() {
  return (
    <section className="bg-white py-24 md:py-28" id="pricing">
      <FeatureWide>
        <Inner>
          <SectionLabel>Specifications & pricing</SectionLabel>
          <h2 className="serif-tight max-w-2xl text-3xl md:text-5xl">
            Product details for the Vertex POS Device.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-ink-muted">
            Core product details for the main restaurant POS terminal.
          </p>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-panel border border-line bg-fog shadow-card">
              <div className="border-b border-line bg-white px-6 py-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                  Specifications
                </p>
                <h3 className="mt-2 text-[22px] font-semibold tracking-tight">
                  {posDeviceProduct.name}
                </h3>
              </div>
              <dl className="divide-y divide-line">
                {posDeviceProduct.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid gap-1 px-6 py-4 sm:grid-cols-[160px_1fr]"
                  >
                    <dt className="text-[13px] font-semibold text-ink-muted">
                      {spec.label}
                    </dt>
                    <dd className="text-[14px] font-medium leading-6">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-panel border border-line bg-night p-6 text-white shadow-mock md:p-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange-mid">
                POS Device
              </p>
              <p className="mt-5 text-[15px] text-white/70">Starting at</p>
              <p className="mt-1 text-[48px] font-semibold tracking-tight">
                {formatDevicePrice(posDeviceProduct.price)}
              </p>
              <p className="mt-3 text-[14px] text-white/55">
                Talk to our team about the right setup for your restaurant.
              </p>
              <div className="mt-8">
                <Button href="/get-started" variant="white" className="w-full">
                  Book a Demo
                </Button>
              </div>
              <p className="mt-4 text-center text-[12px] text-white/45">
                {deviceStartingAt()}
              </p>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function CompatibilityNote() {
  return (
    <section className="bg-fog py-20 md:py-24">
      <FeatureWide>
        <Inner max="max-w-[1000px]">
          <div className="rounded-panel border border-line bg-white px-6 py-10 text-center shadow-card md:px-12 md:py-12">
            <SectionLabel>Compatibility</SectionLabel>
            <h2 className="serif-tight mx-auto max-w-2xl text-3xl md:text-4xl">
              Connect the tools your restaurant already needs.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-ink-muted">
              The Vertex POS Device is the central workstation. It can connect
              with compatible payment hardware, kitchen systems, printers,
              customer-facing displays, and other restaurant peripherals — so
              staff stay on one primary terminal.
            </p>
            <p className="mx-auto mt-6 max-w-lg text-[13px] leading-6 text-ink-muted">
              Payment hardware · Kitchen systems · Printers · Customer-facing
              displays · Other restaurant peripherals
            </p>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function DeviceFinalCta() {
  return (
    <section className="relative overflow-hidden bg-orange">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-20 lg:block">
        <Image
          src={ctaImage}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <FeatureWide className="relative grid items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="text-white">
          <h2 className="serif-tight text-4xl leading-tight md:text-5xl">
            Put your restaurant&apos;s busiest moments on one powerful POS.
          </h2>
          <p className="mt-4 max-w-lg text-[16px] leading-7 text-white/90">
            Give your team a faster way to take orders, manage checks, and keep
            service moving.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/get-started" variant="white">
              Get Started
            </Button>
            <a
              href="/get-started"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/35 px-5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Book a Demo
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <TerminalFrame>
            <MenuOrderScreen />
          </TerminalFrame>
        </div>
      </FeatureWide>
    </section>
  );
}
