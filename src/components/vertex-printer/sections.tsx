import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import {
  formatVertexPrinterPrice,
  labelPrinter,
  restaurantPrintingProduct,
  ticketPrinter,
  vertexPrinterPricing,
} from "@/components/vertex-printer/catalog";
import {
  DualPrinterHeroComposition,
  FoodLabelSlip,
  KitchenTicketSlip,
  SceneWithPrinter,
  VertexPrinterUnit,
} from "@/components/vertex-printer/mockups";

const imgKitchenOrders =
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=80";
const imgKitchenStation =
  "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80";
const imgFoodPackaging =
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80";
const imgPrep =
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80";
const imgTakeaway =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80";
const imgMultiStation =
  "https://images.unsplash.com/photo-1600565193348-f74bd3bb3b36?auto=format&fit=crop&w=1200&q=80";
const imgCta =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80";

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

function DiagramNode({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 text-center text-[13px] font-semibold md:px-5 md:text-[14px] ${
        accent
          ? "border-orange/30 bg-orange/5 text-orange"
          : "border-line bg-white text-ink shadow-card"
      }`}
    >
      {children}
    </div>
  );
}

/* ─── 1. HERO ─── */
export function VertexPrinterHero() {
  return (
    <section className="overflow-hidden bg-[#FAF8F4] pt-28 md:pt-32">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:pb-20">
            <div className="max-w-xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-orange">
                Restaurant Printing
              </p>
              <h1 className="serif-tight mt-5 text-4xl leading-[1.06] md:text-[54px]">
                Every order. Every label.{" "}
                <span className="accent-word">Printed where it matters.</span>
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-ink-muted">
                {restaurantPrintingProduct.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/get-started">Book a Demo</Button>
                <Button href="#specifications" variant="secondary">
                  View Specifications
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-line bg-white px-3 py-1.5 text-[12px] font-semibold shadow-card">
                  Kitchen Ticket Printer
                </span>
                <span className="rounded-full border border-line bg-white px-3 py-1.5 text-[12px] font-semibold shadow-card">
                  Kitchen &amp; Label Printer
                </span>
              </div>
            </div>
            <DualPrinterHeroComposition />
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 2. TWO PRINTER SOLUTIONS ─── */
export function TwoPrinterSolutions() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>One platform. Two printing solutions.</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Choose the printer for every part of your kitchen.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[24px] border border-line bg-[#FAF8F4] shadow-card">
              <div className="relative h-56 overflow-hidden md:h-64">
                <Image
                  src={imgKitchenStation}
                  alt="Kitchen Ticket Printer in a restaurant kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-4 right-4 w-[42%] max-w-[160px] rounded-2xl border border-white/15 bg-black/30 p-2 backdrop-blur-md">
                  <VertexPrinterUnit kind="ticket" size="sm" printing />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                  Card 01
                </p>
                <h3 className="mt-2 text-[24px] font-semibold tracking-tight">
                  {ticketPrinter.name}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-ink-muted">
                  {ticketPrinter.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {ticketPrinter.features.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="overflow-hidden rounded-[24px] border border-line bg-[#FAF8F4] shadow-card">
              <div className="relative h-56 overflow-hidden md:h-64">
                <Image
                  src={imgFoodPackaging}
                  alt="Kitchen & Label Printer for food packaging"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-4 right-4 w-[38%] max-w-[150px] rounded-2xl border border-white/15 bg-black/30 p-2 backdrop-blur-md">
                  <VertexPrinterUnit kind="label" size="sm" printing />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
                  Card 02
                </p>
                <h3 className="mt-2 text-[24px] font-semibold tracking-tight">
                  {labelPrinter.name}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-ink-muted">
                  {labelPrinter.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {labelPrinter.features.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 3. HOW THEY WORK TOGETHER ─── */
export function HowTheyWorkTogether() {
  return (
    <section className="bg-[#F7F5F2] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Connected kitchen workflow</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              From order received to ready for pickup.
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="flex flex-col items-center gap-3 rounded-[28px] border border-line bg-white px-5 py-8 shadow-card md:px-10 md:py-10">
              <DiagramNode>Customer Order</DiagramNode>
              <span className="text-orange/50">↓</span>
              <DiagramNode accent>Vertex POS</DiagramNode>
              <span className="text-orange/50">↓</span>

              <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="flex flex-col items-center gap-3">
                  <DiagramNode>Kitchen Ticket Printer</DiagramNode>
                  <span className="text-orange/50">↓</span>
                  <p className="text-center text-[13px] leading-5 text-ink-muted">
                    Kitchen prepares the order
                  </p>
                  <div className="w-full max-w-[160px]">
                    <VertexPrinterUnit kind="ticket" size="sm" printing />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <DiagramNode>Label Printer</DiagramNode>
                  <span className="text-orange/50">↓</span>
                  <p className="text-center text-[13px] leading-5 text-ink-muted">
                    Package / item gets labeled
                  </p>
                  <div className="w-full max-w-[140px]">
                    <VertexPrinterUnit kind="label" size="sm" printing />
                  </div>
                </div>
              </div>

              <span className="mt-2 text-orange/50">↓</span>
              <DiagramNode accent>Ready</DiagramNode>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <h3 className="text-[15px] font-semibold">Kitchen Ticket Printer</h3>
              <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                Routes order details to the right kitchen station.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <h3 className="text-[15px] font-semibold">Label Printer</h3>
              <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                Prints the labels needed for packaging, prep and fulfillment.
              </p>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 4. PRODUCT SHOWCASE ─── */
export function ProductShowcase() {
  return (
    <section className="bg-[#0f141c] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center text-white">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
              Built for restaurants
            </p>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Two printers. One connected workflow.
            </h2>
          </div>

          <div className="mt-12 grid items-end gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-[#151b24] p-8 md:p-10">
              <VertexPrinterUnit kind="ticket" size="xl" printing highlight />
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80">
                  Kitchen Orders
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80">
                  Prep Station
                </span>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#151b24] p-8 md:p-10">
              <VertexPrinterUnit kind="label" size="xl" printing highlight />
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80">
                  Food Labels
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80">
                  Takeaway &amp; Delivery
                </span>
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 5. KITCHEN TICKET PRINTER ─── */
export function KitchenTicketSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <SceneWithPrinter
              image={imgKitchenOrders}
              alt="Restaurant kitchen order station"
              kind="ticket"
              height="min-h-[380px] md:min-h-[460px]"
            />
            <div>
              <SectionLabel>Kitchen ticket printing</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Keep every kitchen order in view.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                Send orders directly from Vertex POS to the kitchen station that needs
                them.
              </p>
              <ul className="mt-8 space-y-3">
                {ticketPrinter.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-l-2 border-orange pl-4 text-[15px] font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 max-w-[200px]">
                <KitchenTicketSlip />
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 6. LABEL PRINTING ─── */
export function LabelPrintingSection() {
  return (
    <section className="bg-[#F3EEE6] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="order-2 lg:order-1">
              <SectionLabel>Label printing</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-5xl">
                Keep every item clearly identified.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                Print food, preparation and packaging labels to keep takeaway and
                delivery workflows organized.
              </p>
              <ul className="mt-8 space-y-3">
                {labelPrinter.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-l-2 border-orange pl-4 text-[15px] font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <FoodLabelSlip className="w-28" />
                <FoodLabelSlip className="w-28 rotate-[2deg]" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SceneWithPrinter
                image={imgTakeaway}
                alt="Restaurant food packaging and labels"
                kind="label"
                height="min-h-[380px] md:min-h-[460px]"
              />
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 7. CLOUD OR LOCAL ─── */
export function CloudOrLocalPrinting() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Flexible connectivity</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Cloud or local. Print the way your restaurant works.
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="flex flex-col items-center gap-3 rounded-[28px] border border-line bg-[#FAF8F4] px-5 py-8 md:px-10">
              <DiagramNode accent>Vertex POS</DiagramNode>
              <span className="text-orange/50">↓</span>
              <DiagramNode>Cloud / Local</DiagramNode>
              <span className="text-orange/50">↓</span>
              <div className="grid w-full gap-4 sm:grid-cols-2">
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-white p-5 shadow-card">
                  <DiagramNode>Kitchen Ticket Printer</DiagramNode>
                  <span className="text-orange/50">↓</span>
                  <p className="text-[13px] font-medium text-ink-muted">Kitchen Order Ticket</p>
                  <VertexPrinterUnit kind="ticket" size="sm" printing />
                </div>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-white p-5 shadow-card">
                  <DiagramNode>Label Printer</DiagramNode>
                  <span className="text-orange/50">↓</span>
                  <p className="text-[13px] font-medium text-ink-muted">Food / Package Labels</p>
                  <VertexPrinterUnit kind="label" size="sm" printing />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="text-[16px] font-semibold">Cloud Printing</h3>
              <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                Send print jobs through the connected Vertex workflow.
              </p>
            </article>
            <article className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="text-[16px] font-semibold">Local Printing</h3>
              <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                Connect printers directly through the restaurant&apos;s local network.
              </p>
            </article>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── 8. USE CASES ─── */
export function RestaurantUseCases() {
  const cases = [
    {
      num: "01",
      title: "Kitchen Orders",
      copy: "Print incoming orders at the preparation station.",
      image: imgKitchenStation,
      kind: "ticket" as const,
    },
    {
      num: "02",
      title: "Food Preparation",
      copy: "Print labels for prepared items and ingredients.",
      image: imgPrep,
      kind: "label" as const,
    },
    {
      num: "03",
      title: "Takeaway & Delivery",
      copy: "Identify packaged orders clearly and consistently.",
      image: imgFoodPackaging,
      kind: "label" as const,
    },
    {
      num: "04",
      title: "Multi-Station Kitchens",
      copy: "Route printing to the station where the work happens.",
      image: imgMultiStation,
      kind: "ticket" as const,
    },
  ];

  return (
    <section className="bg-[#F7F5F2] py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="max-w-xl">
            <SectionLabel>Where it fits</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Printing for every restaurant workflow.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {cases.map((item) => (
              <article
                key={item.num}
                className="overflow-hidden rounded-[22px] border border-line bg-white shadow-card"
              >
                <SceneWithPrinter
                  image={item.image}
                  alt={item.title}
                  kind={item.kind}
                  height="h-[230px] md:h-[250px]"
                  className="rounded-none border-0 shadow-none"
                />
                <div className="p-5 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
                    {item.num} — {item.title}
                  </p>
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

/* ─── 9. KEY FEATURES ─── */
export function KeyFeatures() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Key features</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Everything your kitchen needs to print.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {restaurantPrintingProduct.keyFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[20px] border border-line bg-[#FAF8F4] p-6"
              >
                <div className="mb-4 h-1 w-8 rounded-full bg-orange" />
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

/* ─── 10. SPECIFICATIONS ─── */
export function Specifications() {
  return (
    <section className="bg-[#F7F5F2] py-20 md:py-24" id="specifications">
      <FeatureWide>
        <Inner>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Specifications</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-5xl">
              Vertex Printer solutions.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[24px] border border-line bg-white shadow-card">
              <div className="border-b border-line bg-[#0f141c] px-6 py-8">
                <VertexPrinterUnit kind="ticket" size="md" printing />
                <p className="mt-6 text-center text-[13px] font-semibold text-white/70">
                  {ticketPrinter.name}
                </p>
              </div>
              <dl className="divide-y divide-line">
                {ticketPrinter.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid gap-1 px-6 py-4 sm:grid-cols-[140px_1fr]"
                  >
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
                      {spec.label}
                    </dt>
                    <dd className="text-[14px] font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-line bg-white shadow-card">
              <div className="border-b border-line bg-[#0f141c] px-6 py-8">
                <VertexPrinterUnit kind="label" size="md" printing />
                <p className="mt-6 text-center text-[13px] font-semibold text-white/70">
                  {labelPrinter.name}
                </p>
              </div>
              <dl className="divide-y divide-line">
                {labelPrinter.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid gap-1 px-6 py-4 sm:grid-cols-[140px_1fr]"
                  >
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-muted">
                      {spec.label}
                    </dt>
                    <dd className="text-[14px] font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-xl rounded-[22px] border border-line bg-white p-6 text-center shadow-card md:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
              Starting at
            </p>
            <p className="mt-2 text-[40px] font-semibold tracking-tight">
              {formatVertexPrinterPrice(vertexPrinterPricing.starting)}
            </p>
            <p className="mt-2 text-[14px] text-ink-muted">
              Restaurant printing solutions for kitchen tickets and labels.
            </p>
            <div className="mt-5">
              <Button href="/get-started">Book a Demo</Button>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

/* ─── FINAL CTA ─── */
export function FinalCta() {
  return (
    <section className="relative min-h-[440px] overflow-hidden md:min-h-[520px]">
      <Image
        src={imgCta}
        alt="Restaurant kitchen during service"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0f141c]/84" />
      <FeatureWide className="relative flex min-h-[440px] flex-col justify-center py-20 md:min-h-[520px] md:py-24">
        <Inner>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-white">
              <h2 className="serif-tight text-4xl leading-tight md:text-5xl">
                One restaurant. Every print workflow.
              </h2>
              <p className="mt-4 max-w-lg text-[16px] leading-7 text-white/75">
                {restaurantPrintingProduct.valueStatement}
              </p>
              <div className="mt-8">
                <Button href="/get-started">Book a Demo</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[20px] border border-white/15 bg-black/30 p-3 backdrop-blur-md">
                <VertexPrinterUnit kind="ticket" size="sm" printing />
              </div>
              <div className="rounded-[20px] border border-white/15 bg-black/30 p-3 backdrop-blur-md">
                <VertexPrinterUnit kind="label" size="sm" printing />
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}
