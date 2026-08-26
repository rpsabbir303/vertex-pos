/** Unique POS Printer hardware visuals — receipt-forward, not terminal/cash-drawer style. */

export function PosPrinterUnit({
  className = "",
  printing = true,
  size = "md",
}: {
  className?: string;
  printing?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const bodyH = size === "lg" ? "h-36 md:h-44" : size === "sm" ? "h-24" : "h-28 md:h-32";

  return (
    <div className={`relative w-full ${className}`}>
      {/* Printer body */}
      <div className="relative mx-auto w-[85%] max-w-[320px]">
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

          {/* Paper mouth */}
          <div className={`relative overflow-hidden rounded-lg border border-white/10 bg-[#1a1a1a] ${bodyH}`}>
            <div className="absolute inset-x-3 top-3 h-2 rounded-sm bg-white/10" />
            <div className="absolute inset-x-6 top-7 h-px bg-white/8" />
            {/* LED */}
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

        {/* Emerging receipt */}
        {printing && (
          <div className="absolute left-1/2 top-[58%] z-10 w-[58%] -translate-x-1/2">
            <ReceiptSlip />
          </div>
        )}
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
        ].map(([l, v]) => (
          <div key={l} className="flex justify-between text-ink-muted">
            <span>{l}</span>
            <span className="font-semibold text-ink">{v}</span>
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

export function HeroPrinterComposition() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#1c222b] shadow-mock">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(241,90,36,0.18),transparent_55%)]" />
      <div className="relative px-6 pb-8 pt-6 md:px-8 md:pb-10 md:pt-8">
        <div className="mb-5 flex flex-wrap gap-2">
          {[
            "Fast thermal printing",
            "Compact footprint",
            "Auto-cutter",
            "Reliable connectivity",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="mx-auto max-w-[340px] pb-16 md:pb-20">
          <PosPrinterUnit size="lg" printing />
        </div>
        <p className="text-center text-[13px] font-semibold text-white/70">
          Vertex POS Printer
        </p>
      </div>
    </div>
  );
}

export function CompactPrinterCard() {
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
      <PosPrinterUnit size="sm" printing />
      <p className="mt-10 text-center text-[12px] font-semibold text-ink-muted">
        Vertex POS Printer
      </p>
    </div>
  );
}
