/** Smart Ordering Table product UI — consistent device + screen language. */

type Size = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<Size, string> = {
  sm: "max-w-[220px]",
  md: "max-w-[300px]",
  lg: "max-w-[380px]",
  xl: "max-w-[460px]",
};

export function OrderingScreenUI({
  variant = "menu",
}: {
  variant?: "menu" | "customize" | "cart" | "status";
}) {
  if (variant === "customize") {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-[12px] bg-[#f8f6f3] p-3 text-ink">
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Customize
        </p>
        <p className="mt-1 text-[13px] font-semibold">Truffle Pasta</p>
        <div className="mt-3 space-y-2">
          {["Extra parmesan", "No garlic", "Add shrimp"].map((opt, i) => (
            <div
              key={opt}
              className={`flex items-center justify-between rounded-lg border px-2.5 py-2 text-[10px] ${
                i === 0
                  ? "border-orange/30 bg-orange/[0.06] font-semibold"
                  : "border-line bg-white"
              }`}
            >
              <span>{opt}</span>
              <span className="text-ink-muted">{i === 0 ? "+$2" : "—"}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-lg bg-night px-3 py-2 text-center text-[10px] font-semibold text-white">
          Add to order
        </div>
      </div>
    );
  }

  if (variant === "cart") {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-[12px] bg-[#f8f6f3] p-3 text-ink">
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Your order
        </p>
        <div className="mt-3 space-y-2">
          {[
            ["Truffle Pasta", "$20"],
            ["Citrus Salad", "$12"],
          ].map(([name, price]) => (
            <div key={name} className="flex justify-between text-[11px]">
              <span className="font-medium">{name}</span>
              <span className="font-semibold">{price}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto border-t border-line pt-3">
          <div className="flex justify-between text-[12px] font-semibold">
            <span>Total</span>
            <span>$32.00</span>
          </div>
          <div className="mt-2 rounded-lg bg-orange px-3 py-2 text-center text-[10px] font-semibold text-white">
            Send to kitchen
          </div>
        </div>
      </div>
    );
  }

  if (variant === "status") {
    return (
      <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-[12px] bg-[#f8f6f3] p-4 text-center text-ink">
        <span className="h-2.5 w-2.5 rounded-full bg-orange" />
        <p className="mt-3 text-[12px] font-semibold">Order sent</p>
        <p className="mt-1 text-[10px] text-ink-muted">Kitchen is preparing Table 12</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[12px] bg-[#f8f6f3] p-2.5 text-ink md:p-3">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold tracking-[0.16em] text-ink/40">VERTEX</span>
        <span className="rounded-full bg-orange/10 px-2 py-0.5 text-[7px] font-semibold text-orange">
          Table 12
        </span>
      </div>
      <div className="mt-2 flex gap-1.5 text-[7px]">
        {["All", "Starters", "Mains", "Drinks"].map((cat, i) => (
          <span
            key={cat}
            className={`rounded-full px-2 py-0.5 font-semibold ${
              i === 0 ? "bg-night text-white" : "bg-fog text-ink-muted"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="mt-2.5 grid flex-1 grid-cols-2 gap-2">
        {[
          { name: "Truffle Pasta", price: "$18" },
          { name: "Citrus Salad", price: "$12" },
          { name: "Grilled Salmon", price: "$24" },
          { name: "House Wine", price: "$9" },
        ].map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg border border-line bg-white"
          >
            <div className="h-10 bg-gradient-to-br from-[#e8ddd0] to-[#d4c4b0] md:h-12" />
            <div className="p-1.5">
              <p className="text-[8px] font-semibold leading-tight">{item.name}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[8px] font-semibold text-orange">{item.price}</span>
                <span className="rounded bg-fog px-1.5 text-[7px] font-bold text-ink-muted">
                  +
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between rounded-lg bg-night px-2.5 py-1.5 text-white">
        <div>
          <p className="text-[7px] text-white/50">Cart · 2 items</p>
          <p className="text-[10px] font-semibold">$30.00</p>
        </div>
        <span className="rounded-md bg-orange px-2.5 py-1 text-[8px] font-semibold">
          Order
        </span>
      </div>
    </div>
  );
}

/** Restaurant tabletop with flush built-in touchscreen. */
export function SmartOrderingTableUnit({
  size = "lg",
  showScreen = true,
  screenVariant = "menu",
}: {
  size?: Size;
  showScreen?: boolean;
  screenVariant?: "menu" | "customize" | "cart" | "status";
}) {
  return (
    <div className={`relative mx-auto w-full ${sizeMap[size]}`}>
      {/* Table surface */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-[#c9b8a4]/60 bg-gradient-to-br from-[#d7c4ad] via-[#c9b49a] to-[#b89f84] shadow-mock">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute inset-x-[12%] top-[18%] bottom-[22%]">
          <div className="relative h-full overflow-hidden rounded-[14px] border border-[#1a1a1a]/80 bg-[#1a1a1a] p-1.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
            {showScreen ? (
              <OrderingScreenUI variant={screenVariant} />
            ) : (
              <div className="h-full rounded-[10px] bg-[#2a2a2a]" />
            )}
          </div>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/25 px-2.5 py-1 text-[9px] font-semibold tracking-[0.12em] text-white/80 backdrop-blur-sm">
          VERTEX TABLE
        </div>
      </div>
    </div>
  );
}

export function MiniFlowChip({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold ${
        active
          ? "border-orange/30 bg-orange/10 text-orange"
          : "border-line bg-white text-ink-muted"
      }`}
    >
      {label}
    </span>
  );
}

export function FlowStageVisual({ index }: { index: number }) {
  const variants = ["menu", "menu", "customize", "cart", "status"] as const;
  return (
    <div className="h-28 w-24 overflow-hidden rounded-xl border border-line bg-white p-1 shadow-card md:h-32 md:w-28">
      <OrderingScreenUI variant={variants[index] ?? "menu"} />
    </div>
  );
}
