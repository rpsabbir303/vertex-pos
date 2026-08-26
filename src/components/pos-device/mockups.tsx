import { StatusPill } from "@/components/production-planner/mockups";

export function TerminalFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-[28px] border border-[#d8d8d6] bg-[#2b2b2b] p-3 shadow-mock md:p-4">
        <div className="mb-3 hidden items-center justify-between px-1 md:flex">
          <span className="text-[10px] font-medium tracking-wide text-white/40">VERTEX POS</span>
          <span className="h-1.5 w-14 rounded-full bg-white/20" />
          <span className="text-[10px] text-white/40">15.6″</span>
        </div>
        <div className="overflow-hidden rounded-2xl bg-white">{children}</div>
      </div>
      <div className="mx-auto h-6 w-16 bg-[#2b2b2b]" />
      <div className="mx-auto h-1.5 w-40 rounded-full bg-[#1a1a1a]" />
    </div>
  );
}

export function TodaysServiceScreen() {
  return (
    <div className="p-4 md:p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Today&apos;s service
          </p>
          <p className="mt-1 text-[15px] font-semibold">Harbor Dining Room</p>
        </div>
        <StatusPill tone="ready">Live</StatusPill>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["Tables", "18 Active"],
          ["Orders", "42 Open"],
          ["Today's sales", "$4,286"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-line bg-fog px-3 py-2.5">
            <p className="text-[11px] text-ink-muted">{label}</p>
            <p className="mt-1 text-[14px] font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {[
          ["Table 12", "$86.40", "Seated"],
          ["Table 14", "$124.80", "Ordered"],
          ["Table 18", "$52.60", "Pay"],
        ].map(([table, amount, status]) => (
          <div
            key={table}
            className="flex items-center justify-between rounded-xl border border-line bg-fog px-3 py-2"
          >
            <p className="text-[13px] font-semibold">{table}</p>
            <div className="flex items-center gap-3">
              <p className="text-[13px] font-semibold">{amount}</p>
              <StatusPill tone={status === "Pay" ? "medium" : "neutral"}>{status}</StatusPill>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <span className="rounded-lg bg-orange py-2.5 text-center text-[12px] font-semibold text-white">
          New Order
        </span>
        <span className="rounded-lg border border-line bg-fog py-2.5 text-center text-[12px] font-semibold">
          View Tables
        </span>
      </div>
    </div>
  );
}

export function TableCheckScreen() {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Today&apos;s service
        </p>
        <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold">
          {["Tables", "Orders", "Menu", "Payments"].map((tab, i) => (
            <span
              key={tab}
              className={`rounded-full px-3 py-1 ${
                i === 0 ? "bg-orange text-white" : "bg-fog text-ink-muted"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between">
        <div>
          <p className="text-[20px] font-semibold tracking-tight">Table 18</p>
          <p className="mt-1 text-[13px] text-ink-muted">4 guests</p>
        </div>
        <StatusPill tone="medium">Open check</StatusPill>
      </div>
      <div className="mt-4 text-sm">
        {[
          ["2 × Ribeye", "$72.00"],
          ["1 × Pasta", "$18.00"],
          ["2 × Drinks", "$24.00"],
          ["Subtotal", "$114.00"],
          ["Tax", "$11.40"],
        ].map(([item, amount]) => (
          <div key={item} className="flex justify-between border-b border-line py-2">
            <span className="text-ink-muted">{item}</span>
            <span className="font-semibold">{amount}</span>
          </div>
        ))}
        <div className="flex justify-between py-2.5">
          <span className="font-semibold">Total</span>
          <span className="text-[18px] font-semibold">$125.40</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <span className="rounded-lg border border-line bg-fog py-2.5 text-center text-[12px] font-semibold">
          Send to Kitchen
        </span>
        <span className="rounded-lg bg-orange py-2.5 text-center text-[12px] font-semibold text-white">
          Pay
        </span>
      </div>
    </div>
  );
}

export function ServiceDashboard() {
  const hours = [28, 36, 42, 58, 74, 86, 80, 64, 48];
  return (
    <div className="p-5 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Service performance
          </p>
          <p className="mt-1 text-[15px] font-semibold">Friday dinner · Harbor Dining Room</p>
        </div>
        <StatusPill tone="ready">Live service</StatusPill>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {[
          ["Average order time", "02:14"],
          ["Payment time", "00:18"],
          ["Orders / hour", "86"],
          ["Tables active", "24"],
          ["Peak service", "7:30 PM"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-line bg-fog px-3 py-3">
            <p className="text-[11px] text-ink-muted">{label}</p>
            <p className="mt-1 text-[20px] font-semibold tracking-tight">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-[12px] font-semibold text-ink">Orders by hour</p>
          <div className="mt-3 flex h-28 items-end gap-1.5">
            {hours.map((h, i) => (
              <span
                key={i}
                className={`w-full rounded-sm ${i === 5 ? "bg-orange" : "bg-line"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-ink-faint">
            <span>4 PM</span>
            <span>8 PM</span>
            <span>12 AM</span>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-fog p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Operating smoothly
          </p>
          <p className="mt-3 text-[36px] font-semibold tracking-tight">84%</p>
          <p className="mt-1 text-[13px] text-ink-muted">Tickets on time this hour</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-line">
            <div className="h-full w-[84%] rounded-full bg-orange" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Staff ordering screen — menu + cart focused on the POS Device. */
export function MenuOrderScreen() {
  return (
    <div className="p-3 md:p-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            New order
          </p>
          <p className="mt-0.5 text-[13px] font-semibold">Table 12 · Walk-in</p>
        </div>
        <StatusPill tone="neutral">Staff</StatusPill>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Mains", "Sides", "Drinks", "Dessert"].map((cat, i) => (
          <span
            key={cat}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              i === 0 ? "bg-orange text-white" : "bg-fog text-ink-muted"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["Ribeye", "Pasta", "Burger", "Salmon", "Salad", "Tacos"].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-line bg-fog px-2 py-2.5 text-center text-[11px] font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-line bg-fog p-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
          Current check
        </p>
        <div className="mt-2 space-y-1.5 text-[12px]">
          <div className="flex justify-between">
            <span>1 × Ribeye · Medium</span>
            <span className="font-semibold">$36.00</span>
          </div>
          <div className="flex justify-between">
            <span>2 × Sparkling water</span>
            <span className="font-semibold">$8.00</span>
          </div>
          <div className="flex justify-between border-t border-line pt-1.5 font-semibold">
            <span>Total</span>
            <span>$44.00</span>
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <span className="rounded-lg border border-line py-2 text-center text-[11px] font-semibold">
          Send to Kitchen
        </span>
        <span className="rounded-lg bg-orange py-2 text-center text-[11px] font-semibold text-white">
          Checkout
        </span>
      </div>
    </div>
  );
}
