import Image from "next/image";

export type PrinterKind = "ticket" | "label";

export function KitchenTicketSlip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-sm border border-[#ddd6c8] bg-[#f7f3ea] px-3 py-3 shadow-card ${className}`}
    >
      <p className="text-center text-[9px] font-bold tracking-[0.14em] text-ink">
        KITCHEN TICKET
      </p>
      <p className="mt-1 text-center text-[8px] text-ink-muted">Order #1842 · Table 12</p>
      <div className="mt-2 space-y-1 border-t border-dashed border-[#ddd6c8] pt-2 text-[8px]">
        {[
          ["2 × Burger — Medium", "Hot"],
          ["1 × Fries", "Hot"],
          ["1 × Salad — No onion", "Cold"],
        ].map(([item, station]) => (
          <div key={item} className="flex justify-between gap-2 text-ink-muted">
            <span className="font-medium text-ink">{item}</span>
            <span className="shrink-0 font-semibold text-orange">{station}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-[7px] text-ink-faint">Fired · 7:42 PM</p>
    </div>
  );
}

export function FoodLabelSlip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-sm border border-[#ddd6c8] bg-[#f7f3ea] px-2.5 py-2 shadow-card ${className}`}
    >
      <p className="text-[8px] font-bold tracking-[0.12em] text-orange">FOOD LABEL</p>
      <p className="mt-1 text-[10px] font-semibold text-ink">Salmon Bowl</p>
      <p className="mt-0.5 text-[7px] text-ink-muted">Order #1842</p>
      <p className="mt-1 border-t border-dashed border-[#ddd6c8] pt-1 text-[7px] text-ink-muted">
        No onion · Extra sauce
      </p>
      <p className="mt-1 text-[7px] font-semibold text-ink">Takeaway</p>
    </div>
  );
}

/** Visually distinct Vertex printers — ticket (taller) vs label (compact). */
export function VertexPrinterUnit({
  kind = "ticket",
  className = "",
  printing = true,
  size = "md",
  highlight = false,
}: {
  kind?: PrinterKind;
  className?: string;
  printing?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  highlight?: boolean;
}) {
  const isLabel = kind === "label";

  const bodyH = isLabel
    ? size === "xl"
      ? "h-32 md:h-36"
      : size === "lg"
        ? "h-28 md:h-32"
        : size === "sm"
          ? "h-20"
          : "h-24 md:h-28"
    : size === "xl"
      ? "h-44 md:h-52"
      : size === "lg"
        ? "h-40 md:h-44"
        : size === "sm"
          ? "h-28"
          : "h-32 md:h-36";

  const maxW = isLabel
    ? size === "xl"
      ? "max-w-[300px]"
      : size === "lg"
        ? "max-w-[260px]"
        : size === "sm"
          ? "max-w-[150px]"
          : "max-w-[220px]"
    : size === "xl"
      ? "max-w-[340px]"
      : size === "lg"
        ? "max-w-[300px]"
        : size === "sm"
          ? "max-w-[170px]"
          : "max-w-[260px]";

  const radius = isLabel ? "rounded-[14px]" : "rounded-[18px]";
  const tag = isLabel ? "LABEL" : "TICKET";

  return (
    <div className={`relative mx-auto w-full ${maxW} ${className}`}>
      {highlight && (
        <div className="pointer-events-none absolute -inset-8 rounded-full bg-orange/10 blur-3xl" />
      )}
      <div className={`relative mx-auto ${isLabel ? "w-[92%]" : "w-[88%]"}`}>
        <div
          className={`${radius} border border-[#2a2a2a] bg-gradient-to-b ${
            isLabel
              ? "from-[#3a3a3a] via-[#222] to-[#101010]"
              : "from-[#2f2f2f] to-[#121212]"
          } p-3 shadow-mock md:p-3.5`}
        >
          <div className="mb-2 flex items-center justify-between px-1">
            <span className="text-[9px] font-bold tracking-[0.16em] text-white/45">
              VERTEX
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isLabel ? "bg-orange" : "bg-[#3dd68c]"
                } shadow-[0_0_6px_rgba(61,214,140,0.5)]`}
              />
              <span className="text-[9px] text-white/35">Ready</span>
            </span>
          </div>

          <div
            className={`relative overflow-hidden rounded-lg border border-white/10 bg-[#1a1a1a] ${bodyH}`}
          >
            <div className="absolute inset-x-3 top-3 h-2 rounded-sm bg-white/10" />
            <div className="absolute inset-x-6 top-7 h-px bg-white/8" />
            {isLabel && (
              <div className="absolute inset-x-8 top-1/2 h-8 -translate-y-1/2 rounded border border-dashed border-white/15 bg-white/5" />
            )}
            <div className="absolute bottom-3 left-3 flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
            <div className="absolute bottom-3 right-3 rounded bg-white/10 px-1.5 py-0.5 text-[8px] font-semibold text-white/40">
              {tag}
            </div>
            {printing && (
              <div className="absolute inset-x-[18%] top-[36%] h-1 animate-pulse rounded-full bg-orange/40" />
            )}
          </div>

          <div className="mt-2 flex items-center justify-between px-1">
            <span className="h-1 w-10 rounded-full bg-white/15" />
            <span className="text-[9px] uppercase tracking-[0.12em] text-white/30">
              Thermal
            </span>
          </div>
        </div>

        {printing && (
          <div
            className={`absolute left-1/2 z-10 -translate-x-1/2 ${
              isLabel ? "top-[58%] w-[52%]" : "top-[54%] w-[58%]"
            }`}
          >
            {isLabel ? <FoodLabelSlip /> : <KitchenTicketSlip />}
          </div>
        )}
      </div>
    </div>
  );
}

export function DualPrinterHeroComposition() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-gradient-to-br from-[#1c222b] via-[#151a22] to-[#0f141c] shadow-mock">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(241,90,36,0.16),transparent_50%)]" />
      <div className="relative px-5 pb-10 pt-6 md:px-8 md:pb-12 md:pt-8">
        <div className="mb-5 flex flex-wrap gap-2">
          {["Kitchen Orders", "Food Labels", "Prep Station", "Takeaway & Delivery"].map(
            (label) => (
              <span
                key={label}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80"
              >
                {label}
              </span>
            ),
          )}
        </div>
        <div className="grid items-end gap-4 sm:grid-cols-2 sm:gap-6">
          <div>
            <VertexPrinterUnit kind="ticket" size="lg" printing highlight />
            <p className="mt-8 text-center text-[12px] font-semibold text-white/65">
              Kitchen Ticket Printer
            </p>
          </div>
          <div className="sm:pt-8">
            <VertexPrinterUnit kind="label" size="lg" printing highlight />
            <p className="mt-8 text-center text-[12px] font-semibold text-white/65">
              Kitchen &amp; Label Printer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SceneWithPrinter({
  image,
  alt,
  kind = "ticket",
  className = "",
  height = "h-[280px] md:h-[320px]",
}: {
  image: string;
  alt: string;
  kind?: PrinterKind;
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[22px] border border-line shadow-mock ${height} ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width:768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
      <div className="absolute bottom-4 right-4 w-[38%] max-w-[150px] rounded-2xl border border-white/15 bg-black/30 p-2 backdrop-blur-md">
        <VertexPrinterUnit kind={kind} size="sm" printing highlight />
      </div>
    </div>
  );
}
