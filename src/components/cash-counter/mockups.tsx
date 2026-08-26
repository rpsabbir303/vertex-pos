import { cashDemoFigures } from "@/components/cash-counter/catalog";

/** Photorealistic open cash drawer matching reference product shots. */
export function CashDrawerOpen({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const billH =
    size === "lg" ? "h-[72px] md:h-28" : size === "sm" ? "h-14" : "h-16 md:h-20";
  const coinH =
    size === "lg" ? "h-14 md:h-[68px]" : size === "sm" ? "h-11" : "h-12 md:h-14";

  return (
    <div className={`w-full ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#2a2a2a] to-[#111] p-2.5 shadow-mock md:p-3">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-[10px] font-bold tracking-[0.18em] text-white/55">
            VERTEX
          </span>
          <span className="h-1 w-10 rounded-full bg-white/15" />
        </div>
        <div className="rounded-xl bg-gradient-to-b from-[#e8dcc6] to-[#c9b896] p-2.5 md:p-3">
          <div className="grid grid-cols-5 gap-1 md:gap-1.5">
            {["$1", "$5", "$10", "$20", "$50"].map((d) => (
              <div
                key={d}
                className="relative overflow-hidden rounded border border-[#a89068] bg-[#bfa882]"
              >
                <div className={`flex ${billH} flex-col items-center justify-end pb-1.5`}>
                  <div className="absolute inset-x-0.5 top-1 space-y-0.5">
                    <div className="h-1.5 rounded-sm bg-[#1f6b42]/70" />
                    <div className="h-1.5 rounded-sm bg-[#1f6b42]/45" />
                    <div className="h-1.5 rounded-sm bg-[#1f6b42]/30" />
                  </div>
                  <span className="relative z-10 rounded bg-[#1f6b42] px-1 py-0.5 text-[8px] font-bold text-white md:text-[9px]">
                    {d}
                  </span>
                </div>
                <div className="absolute inset-x-1 top-[42%] h-0.5 rounded bg-[#8a734f]/60" />
              </div>
            ))}
          </div>
          <div className="mt-1.5 grid grid-cols-5 gap-1 md:gap-1.5">
            {["1¢", "5¢", "10¢", "25¢", "$1"].map((c) => (
              <div
                key={c}
                className={`flex ${coinH} flex-col items-center justify-center rounded border border-[#a89068] bg-[#bfa882]`}
              >
                <span className="h-6 w-6 rounded-full border border-[#8a734f] bg-gradient-to-b from-[#d4c4a4] to-[#b8a47e] shadow-sm md:h-7 md:w-7" />
                <span className="mt-1 text-[8px] font-semibold text-[#5c4a30] md:text-[9px]">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between px-1">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-[#222]">
            <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
          </span>
          <span className="h-1 w-12 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}

export function CashDrawerClosed({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#2a2a2a] to-[#0f0f0f] p-3 shadow-mock">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-[10px] font-bold tracking-[0.18em] text-white/50">
            VERTEX
          </span>
          <span className="text-[10px] text-white/35">Locked</span>
        </div>
        <div className="relative flex h-32 items-end justify-center rounded-xl border border-white/10 bg-[#161616] pb-5 md:h-40">
          <div className="h-2 w-20 rounded-full bg-white/20" />
          <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#1f1f1f]">
            <span className="h-3 w-3 rounded-full bg-[#d4af37]" />
            <span className="absolute -right-2 top-1/2 h-1.5 w-4 -translate-y-1/2 rounded-sm bg-[#d4af37]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Hero product card — drawer on wood counter with subtle POS context. */
export function HeroProductVisual() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-line bg-[#2a221c] shadow-mock">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #3d3228 0%, #1a1512 50%, #2c241e 100%)",
        }}
      />
      <div className="relative p-5 md:p-7">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div className="rounded-lg border border-white/10 bg-[#1a1a1a] px-3 py-2">
            <p className="text-[9px] font-semibold text-white/40">POS</p>
            <div className="mt-1 h-10 w-16 rounded bg-white/10" />
          </div>
          <div className="rounded-md border border-white/10 bg-[#222] px-2 py-1.5">
            <p className="text-[8px] text-white/35">Printer</p>
            <div className="mt-1 h-6 w-10 rounded-sm bg-white/10" />
          </div>
        </div>
        <CashDrawerOpen size="lg" />
        <p className="mt-4 text-center text-[12px] font-semibold text-white/70">
          Vertex Cash Counter Box
        </p>
      </div>
    </div>
  );
}

export function CashManagementUi() {
  const rows = [
    ["Opening Cash", cashDemoFigures.opening, ""],
    ["Cash Sales", cashDemoFigures.cashSales, "text-[#7ddea8]"],
    ["Cash Drops", cashDemoFigures.cashDrops, "text-[#f0a0a0]"],
    ["Expected Cash", cashDemoFigures.expected, ""],
    ["Counted Cash", cashDemoFigures.counted, ""],
    ["Variance", cashDemoFigures.variance, "text-[#7ddea8]"],
  ] as const;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#141820] shadow-mock">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Cash Management
          </p>
          <p className="mt-1 text-[15px] font-semibold text-white">
            Shift reconciliation
          </p>
        </div>
        <span className="rounded-full bg-[#1F7A45]/25 px-2.5 py-1 text-[11px] font-semibold text-[#7ddea8]">
          Balanced
        </span>
      </div>
      <div className="p-5">
        {rows.map(([label, value, color]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-white/8 py-3 last:border-0"
          >
            <span className="text-[13px] text-white/55">{label}</span>
            <span className={`text-[15px] font-semibold text-white ${color}`}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OrangeIcon({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
        dark
          ? "border border-orange/30 bg-orange/10 text-orange"
          : "bg-orange-soft text-orange"
      }`}
    >
      {children}
    </span>
  );
}

export function IconSvg({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
