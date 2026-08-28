import { DeviceUnit } from "@/components/pos-device/mockups";
import { CounterStationUnit } from "@/components/cash-counter/legacy-checkout-station";

type PrinterSize = "sm" | "md" | "lg" | "xl";

const printerSizeMap: Record<PrinterSize, string> = {
  sm: "max-w-[200px]",
  md: "max-w-[280px]",
  lg: "max-w-[340px]",
  xl: "max-w-[400px]",
};

/** Primary Vertex POS Printer hardware visual. */
export function PosPrinterUnit({
  className = "",
  printing = true,
  size = "md",
  imageSrc,
}: {
  className?: string;
  printing?: boolean;
  size?: PrinterSize;
  imageSrc?: string;
}) {
  if (imageSrc) {
    return (
      <div className={`relative mx-auto w-full ${printerSizeMap[size]} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt="Vertex POS Printer"
          className="w-full object-contain"
        />
      </div>
    );
  }

  const bodyH =
    size === "xl" || size === "lg"
      ? "h-36 md:h-44"
      : size === "sm"
        ? "h-24"
        : "h-28 md:h-32";

  return (
    <div className={`relative mx-auto w-full ${printerSizeMap[size]} ${className}`}>
      <div className="relative mx-auto w-[90%]">
        <div className="rounded-[18px] border border-[#2a2a2a] bg-gradient-to-b from-[#2f2f2f] to-[#121212] p-3 shadow-mock md:p-3.5">
          <div className="mb-2 flex items-center justify-between px-1">
            <span className="text-[9px] font-bold tracking-[0.16em] text-white/45">
              VERTEX
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3dd68c]" />
              <span className="text-[9px] text-white/35">Ready</span>
            </span>
          </div>

          <div
            className={`relative overflow-hidden rounded-lg border border-white/10 bg-[#1a1a1a] ${bodyH}`}
          >
            <div className="absolute inset-x-3 top-3 h-2 rounded-sm bg-white/10" />
            <div className="absolute inset-x-6 top-7 h-px bg-white/8" />
            <div className="absolute bottom-3 left-3 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
            <div className="absolute bottom-3 right-3 rounded bg-white/10 px-1.5 py-0.5 text-[8px] font-semibold text-white/40">
              AUTO CUT
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between px-1">
            <span className="h-1 w-10 rounded-full bg-white/15" />
            <span className="text-[9px] uppercase tracking-[0.12em] text-white/30">
              Thermal
            </span>
          </div>
        </div>

        {printing ? (
          <div className="absolute left-1/2 top-[58%] z-10 w-[58%] -translate-x-1/2">
            <ReceiptSlip />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ReceiptSlip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-sm border border-[#ddd6c8] bg-[#f7f3ea] px-3 py-3 shadow-card ${className}`}
    >
      <p className="text-center text-[9px] font-bold tracking-[0.14em] text-ink">
        VERTEX DINING
      </p>
      <p className="mt-1 text-center text-[8px] text-ink-muted">Order #1842 · Table 12</p>
      <div className="mt-2 space-y-1 border-t border-dashed border-[#ddd6c8] pt-2 text-[8px]">
        {[
          ["2 × Burger", "$28.00"],
          ["1 × Fries", "$6.00"],
          ["Tax", "$3.40"],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between text-ink-muted">
            <span>{label}</span>
            <span className="font-semibold text-ink">{value}</span>
          </div>
        ))}
        <div className="flex justify-between border-t border-dashed border-[#ddd6c8] pt-1 font-bold text-ink">
          <span>Total</span>
          <span>$37.40</span>
        </div>
      </div>
      <p className="mt-2 text-center text-[7px] text-ink-faint">Thank you — come again</p>
    </div>
  );
}

/** Premium hero presentation on white stage. */
export function PrinterHeroVisual({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="rounded-[32px] border border-line bg-white p-10 shadow-mock md:p-14">
        <PosPrinterUnit size="xl" printing imageSrc={imageSrc} />
      </div>
      <div
        aria-hidden
        className="absolute -bottom-4 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-full bg-black/10 blur-xl"
      />
    </div>
  );
}

/** Business environment scene — printer at the counter. */
export function PrinterBusinessScene({
  size = "lg" as PrinterSize,
  printing = true,
}: {
  size?: PrinterSize;
  printing?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#F0EDE7]">
      <div
        aria-hidden
        className="absolute left-4 top-4 rounded-lg border border-line/60 bg-white/60 px-3 py-2"
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
          Checkout
        </p>
      </div>
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-0 h-14 rounded-t-[20px] bg-[#E8E4DC]"
      />
      <div className="relative flex min-h-[300px] items-end justify-center px-6 pb-10 pt-14 md:min-h-[360px]">
        <PosPrinterUnit size={size} printing={printing} />
      </div>
    </div>
  );
}

/** Checkout workflow — printer alongside POS hardware. */
export function PrinterCheckoutScene({
  size = "md" as PrinterSize,
}: {
  size?: PrinterSize;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-white shadow-card">
      <div className="border-b border-line bg-[#FAF8F4] px-5 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Connected checkout
        </p>
      </div>
      <div className="relative p-6 md:p-8">
        <div className="grid items-end gap-4 md:grid-cols-2">
          <DeviceUnit size="sm" screen="order" />
          <PosPrinterUnit size={size} printing />
        </div>
        <p className="mt-5 text-center text-[12px] text-ink-faint">
          POS Device + Printer on Vertex checkout
        </p>
      </div>
    </div>
  );
}

/** Ecosystem visual — printer with Vertex hardware family. */
export function PrinterEcosystemVisual() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 rounded-2xl border border-orange/20 bg-orange-soft/30 p-6 shadow-card md:p-8">
        <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Complete POS setup
        </p>
        <div className="grid items-end gap-4 md:grid-cols-3">
          <DeviceUnit size="sm" screen="service" />
          <PosPrinterUnit size="md" printing />
          <div className="hidden md:block">
            <CounterStationUnit size="sm" layout="minimal" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-2xl border border-line bg-white p-5 shadow-card">
        <DeviceUnit size="sm" screen="order" />
      </div>
      <div className="flex items-center justify-center rounded-2xl border border-line bg-white p-5 shadow-card">
        <PosPrinterUnit size="sm" printing={false} />
      </div>
    </div>
  );
}

/** Small business-type preview card. */
export function PrinterBusinessCard({
  title,
  printing = true,
}: {
  title: string;
  printing?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-mock">
      <div className="border-b border-line bg-[#FAF8F4] px-4 py-3">
        <p className="text-[12px] font-semibold text-ink">{title}</p>
      </div>
      <div className="p-4">
        <PosPrinterUnit size="sm" printing={printing} />
      </div>
    </div>
  );
}

const printerDetailCallouts = {
  left: [
    {
      id: "output",
      title: "Paper output",
      copy: "Thermal receipt output with automatic cutting.",
    },
    {
      id: "roll",
      title: "Paper roll area",
      copy: "Supports standard receipt paper widths for easy loading.",
    },
    {
      id: "status",
      title: "Status indicator",
      copy: "Ready status visible at a glance during service.",
    },
  ],
  right: [
    {
      id: "connectivity",
      title: "Connectivity",
      copy: "USB and Ethernet options for your counter setup.",
    },
    {
      id: "cutter",
      title: "Auto cutter",
      copy: "Automatic receipt cutting for clean handoffs.",
    },
    {
      id: "thermal",
      title: "Thermal printing",
      copy: "High-speed thermal printing for busy checkout.",
    },
  ],
} as const;

function PrinterDetailCallout({
  title,
  copy,
  side,
}: {
  title: string;
  copy: string;
  side: "left" | "right";
}) {
  const isLeft = side === "left";
  return (
    <div
      className={`flex items-center gap-3 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className={`min-w-0 flex-1 ${isLeft ? "text-right" : "text-left"}`}>
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
          {title}
        </p>
        <p className="mt-1.5 text-[13px] leading-5 text-ink-muted">{copy}</p>
      </div>
      <div
        className={`flex shrink-0 items-center ${
          isLeft ? "" : "flex-row-reverse"
        }`}
        aria-hidden
      >
        <span className="h-px w-8 bg-orange/70 md:w-12" />
        <span className="h-2.5 w-2.5 rounded-full bg-orange ring-4 ring-orange/15" />
      </div>
    </div>
  );
}

function PrinterMobileDetailCard({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-orange" aria-hidden />
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
          {title}
        </p>
      </div>
      <p className="text-[13px] leading-5 text-ink-muted">{copy}</p>
    </div>
  );
}

/** Annotated hardware diagram for product components. */
export function PrinterProductDetailsDiagram({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="w-full">
      <div className="hidden items-center gap-4 lg:grid lg:grid-cols-[1fr_minmax(280px,400px)_1fr] lg:gap-6 xl:gap-10">
        <div className="flex flex-col justify-center gap-10 py-4">
          {printerDetailCallouts.left.map((item) => (
            <PrinterDetailCallout
              key={item.id}
              title={item.title}
              copy={item.copy}
              side="left"
            />
          ))}
        </div>
        <div className="relative mx-auto w-full max-w-[400px]">
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-2 top-10 rounded-[32px] bg-[#F0EDE7]"
          />
          <div className="relative px-2 py-8">
            <PosPrinterUnit size="xl" printing imageSrc={imageSrc} />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 py-4">
          {printerDetailCallouts.right.map((item) => (
            <PrinterDetailCallout
              key={item.id}
              title={item.title}
              copy={item.copy}
              side="right"
            />
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <div className="mx-auto max-w-sm">
          <div className="rounded-[28px] border border-line bg-white p-6 shadow-card">
            <PosPrinterUnit size="lg" printing imageSrc={imageSrc} />
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[...printerDetailCallouts.left, ...printerDetailCallouts.right].map(
            (item) => (
              <PrinterMobileDetailCard
                key={item.id}
                title={item.title}
                copy={item.copy}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
