/**
 * Vertex Kitchen & Label Printer visuals.
 * Distinct from standard POS receipt printer — kitchen ticket + food label hardware.
 */

export type PrinterKind = "ticket" | "label";
type PrinterSize = "sm" | "md" | "lg" | "xl";

export function KitchenTicketSlip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-sm border border-[#ddd6c8] bg-[#f7f3ea] px-3 py-3 shadow-card ${className}`}
    >
      <p className="text-center text-[9px] font-bold tracking-[0.14em] text-ink">
        KITCHEN ORDER
      </p>
      <p className="mt-1 text-center text-[8px] text-ink-muted">
        Order #1025 · Table 8
      </p>
      <div className="mt-2 space-y-1 border-t border-dashed border-[#ddd6c8] pt-2 text-[8px]">
        {[
          ["1 × Chicken Wrap", "Hot"],
          ["1 × Fries", "Hot"],
          ["1 × Salad — No onion", "Cold"],
        ].map(([item, station]) => (
          <div key={item} className="flex justify-between gap-2 text-ink-muted">
            <span className="font-medium text-ink">{item}</span>
            <span className="shrink-0 font-semibold text-orange">{station}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-[7px] text-ink-faint">Fired · 12:28 PM</p>
    </div>
  );
}

export function FoodLabelSlip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-sm border border-[#ddd6c8] bg-[#f7f3ea] px-2.5 py-2 shadow-card ${className}`}
    >
      <p className="text-[9px] font-bold tracking-[0.1em] text-ink">Chicken Wrap</p>
      <p className="mt-1 text-[8px] text-ink-muted">12:30 PM</p>
      <p className="mt-1 border-t border-dashed border-[#ddd6c8] pt-1 text-[8px] font-semibold text-orange">
        Order #1025
      </p>
    </div>
  );
}

/** Black kitchen receipt / order printer. */
export function KitchenTicketPrinter({
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
  const maxW =
    size === "xl"
      ? "max-w-[320px]"
      : size === "lg"
        ? "max-w-[280px]"
        : size === "sm"
          ? "max-w-[160px]"
          : "max-w-[240px]";

  const bodyH =
    size === "xl" || size === "lg"
      ? "h-36 md:h-40"
      : size === "sm"
        ? "h-24"
        : "h-28 md:h-32";

  if (imageSrc) {
    return (
      <div className={`relative mx-auto w-full ${maxW} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt="Vertex Kitchen Printer"
          className="w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`relative mx-auto w-full ${maxW} ${className}`}>
      <div className="relative mx-auto w-[90%]">
        <div className="rounded-[18px] border border-[#1a1a1a] bg-gradient-to-b from-[#2c2c2c] via-[#171717] to-[#0a0a0a] p-3 shadow-mock md:p-3.5">
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
            className={`relative overflow-hidden rounded-lg border border-white/10 bg-[#141414] ${bodyH}`}
          >
            <div className="absolute inset-x-3 top-3 h-2 rounded-sm bg-white/10" />
            <div className="absolute inset-x-6 top-7 h-px bg-white/8" />
            <div className="absolute bottom-3 left-3 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
            <div className="absolute bottom-3 right-3 rounded bg-white/10 px-1.5 py-0.5 text-[8px] font-semibold text-white/40">
              KITCHEN
            </div>
            {printing ? (
              <div className="absolute inset-x-[18%] top-[40%] h-1 animate-pulse rounded-full bg-orange/35" />
            ) : null}
          </div>
          <div className="mt-2 flex items-center justify-between px-1">
            <span className="h-1 w-10 rounded-full bg-white/15" />
            <span className="text-[9px] uppercase tracking-[0.12em] text-white/30">
              Order
            </span>
          </div>
        </div>
        {printing ? (
          <div className="absolute left-1/2 top-[56%] z-10 w-[58%] -translate-x-1/2">
            <KitchenTicketSlip />
          </div>
        ) : null}
      </div>
    </div>
  );
}

/** Compact white/black food label printer. */
export function LabelPrinterUnit({
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
  const maxW =
    size === "xl"
      ? "max-w-[280px]"
      : size === "lg"
        ? "max-w-[240px]"
        : size === "sm"
          ? "max-w-[140px]"
          : "max-w-[200px]";

  const bodyH =
    size === "xl" || size === "lg"
      ? "h-28 md:h-32"
      : size === "sm"
        ? "h-20"
        : "h-24 md:h-28";

  if (imageSrc) {
    return (
      <div className={`relative mx-auto w-full ${maxW} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt="Vertex Label Printer"
          className="w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`relative mx-auto w-full ${maxW} ${className}`}>
      <div className="relative mx-auto w-[92%]">
        <div className="overflow-hidden rounded-[14px] border border-[#d8d4ce] bg-gradient-to-b from-[#f7f5f2] to-[#e8e4dc] shadow-mock">
          <div className="border-b border-[#d8d4ce] bg-[#1a1a1a] px-3 py-2">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-bold tracking-[0.16em] text-white/50">
                VERTEX
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            </div>
          </div>
          <div className="p-3">
            <div
              className={`relative overflow-hidden rounded-lg border border-[#cfc9be] bg-[#faf8f4] ${bodyH}`}
            >
              <div className="absolute inset-x-4 top-3 h-1.5 rounded-sm bg-[#ddd6c8]" />
              <div className="absolute inset-x-8 top-1/2 h-10 -translate-y-1/2 rounded border border-dashed border-[#cfc9be] bg-white/70" />
              <div className="absolute bottom-2 right-2 rounded bg-[#1a1a1a]/8 px-1.5 py-0.5 text-[7px] font-semibold text-ink-muted">
                LABEL
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between px-0.5">
              <span className="h-1 w-8 rounded-full bg-[#cfc9be]" />
              <span className="text-[8px] uppercase tracking-[0.12em] text-ink-faint">
                Food label
              </span>
            </div>
          </div>
        </div>
        {printing ? (
          <div className="absolute left-1/2 top-[52%] z-10 w-[52%] -translate-x-1/2">
            <FoodLabelSlip />
          </div>
        ) : null}
      </div>
    </div>
  );
}

/** Unified unit selector for setup cards / diagram. */
export function VertexPrinterUnit({
  kind = "ticket",
  ...props
}: {
  kind?: PrinterKind;
  className?: string;
  printing?: boolean;
  size?: PrinterSize;
  imageSrc?: string;
}) {
  return kind === "label" ? (
    <LabelPrinterUnit {...props} />
  ) : (
    <KitchenTicketPrinter {...props} />
  );
}

/** Hero — both printers on stainless kitchen counter. */
export function KitchenLabelHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[32px] border border-line bg-[#E8E6E1] shadow-mock">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(160deg,#d8d5cf_0%,#eceae5_45%,#cfcbc4_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#9a9a9a]/35 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-6 bottom-[18%] h-3 rounded-full bg-[#b8b8b8]/50 blur-sm"
      />
      <div className="relative grid min-h-[360px] grid-cols-2 items-end gap-4 px-6 pb-10 pt-12 md:min-h-[420px] md:gap-6 md:px-10 md:pb-12">
        <KitchenTicketPrinter size="md" printing />
        <LabelPrinterUnit size="md" printing />
      </div>
      <p className="relative pb-5 text-center text-[11px] font-medium text-ink-faint">
        Kitchen ticket + food label printing
      </p>
    </div>
  );
}

/** Kitchen printer on stainless prep counter. */
export function KitchenPrintingScene() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#E4E2DD]">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#8f8f8f]/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-[14%] h-2 rounded-full bg-[#aaa]/45"
      />
      <div className="relative flex min-h-[320px] items-end justify-center px-6 pb-10 pt-12 md:min-h-[380px]">
        <KitchenTicketPrinter size="lg" printing />
      </div>
    </div>
  );
}

/** Label printer with food label output. */
export function LabelPrintingScene() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#F0EDE7]">
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-0 h-14 rounded-t-[20px] bg-[#E8E4DC]"
      />
      <div className="relative flex min-h-[320px] items-end justify-center px-6 pb-10 pt-12 md:min-h-[380px]">
        <LabelPrinterUnit size="lg" printing />
      </div>
    </div>
  );
}

/** Restaurant kitchen environment with both printers. */
export function KitchenEnvironmentScene() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#E4E2DD]">
      <div
        aria-hidden
        className="absolute left-4 top-4 rounded-lg border border-line/60 bg-white/60 px-3 py-2"
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
          Prep station
        </p>
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-[#8f8f8f]/35 to-transparent"
      />
      <div className="relative grid min-h-[300px] grid-cols-2 items-end gap-3 px-5 pb-10 pt-14 md:min-h-[360px] md:gap-6 md:px-8">
        <KitchenTicketPrinter size="md" printing />
        <LabelPrinterUnit size="md" printing />
      </div>
    </div>
  );
}

/** Product-only studio presentation. */
export function KitchenLabelProductOnlyVisual() {
  return (
    <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-12">
      <div className="grid grid-cols-2 items-end gap-4 md:gap-8">
        <KitchenTicketPrinter size="md" printing={false} />
        <LabelPrinterUnit size="md" printing={false} />
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {["Kitchen tickets", "Food labels", "Packaging", "Restaurant"].map(
          (label) => (
            <span
              key={label}
              className="rounded-full border border-line bg-[#FAF8F4] px-3 py-1 text-[11px] font-medium text-ink-muted"
            >
              {label}
            </span>
          ),
        )}
      </div>
    </div>
  );
}

const hardwareCallouts = {
  left: [
    {
      id: "fast",
      title: "Fast order printing",
      copy: "Designed to produce clear kitchen tickets quickly during service.",
    },
    {
      id: "clear",
      title: "Clear print output",
      copy: "Easy-to-read order information helps kitchen teams work efficiently.",
    },
    {
      id: "compact",
      title: "Compact countertop design",
      copy: "A small professional footprint designed for kitchen and prep counters.",
    },
  ],
  right: [
    {
      id: "labels",
      title: "Label printing",
      copy: "Supports clear labels for food preparation and packaging workflows.",
    },
    {
      id: "replace",
      title: "Easy paper / label replacement",
      copy: "Designed for straightforward everyday operation.",
    },
    {
      id: "build",
      title: "Restaurant-ready build",
      copy: "Professional hardware suited to continuous restaurant use.",
    },
  ],
} as const;

function HardwareCallout({
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

function HardwareMobileCard({ title, copy }: { title: string; copy: string }) {
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

/** Annotated hardware details with both printers. */
export function KitchenLabelProductDetailsDiagram() {
  return (
    <div className="w-full">
      <div className="hidden items-center gap-4 lg:grid lg:grid-cols-[1fr_minmax(280px,420px)_1fr] lg:gap-6 xl:gap-10">
        <div className="flex flex-col justify-center gap-10 py-4">
          {hardwareCallouts.left.map((item) => (
            <HardwareCallout
              key={item.id}
              title={item.title}
              copy={item.copy}
              side="left"
            />
          ))}
        </div>
        <div className="relative mx-auto w-full max-w-[420px]">
          <div
            aria-hidden
            className="absolute inset-x-6 bottom-2 top-8 rounded-[32px] bg-[#F0EDE7]"
          />
          <div className="relative grid grid-cols-2 items-end gap-3 px-2 py-8">
            <KitchenTicketPrinter size="md" printing />
            <LabelPrinterUnit size="md" printing />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 py-4">
          {hardwareCallouts.right.map((item) => (
            <HardwareCallout
              key={item.id}
              title={item.title}
              copy={item.copy}
              side="right"
            />
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <div className="mx-auto max-w-md">
          <div className="rounded-[28px] border border-line bg-white p-6 shadow-card">
            <div className="grid grid-cols-2 items-end gap-3">
              <KitchenTicketPrinter size="sm" printing />
              <LabelPrinterUnit size="sm" printing />
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[...hardwareCallouts.left, ...hardwareCallouts.right].map((item) => (
            <HardwareMobileCard
              key={item.id}
              title={item.title}
              copy={item.copy}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Subtle product for dark trust section. */
export function KitchenLabelTrustAtmosphereVisual() {
  return (
    <div className="mx-auto mt-10 flex max-w-sm items-end justify-center gap-4 opacity-70">
      <KitchenTicketPrinter size="sm" printing={false} />
      <LabelPrinterUnit size="sm" printing={false} />
    </div>
  );
}
