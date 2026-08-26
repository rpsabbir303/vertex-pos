import { StatusPill } from "@/components/production-planner/mockups";

export function TenderMark({
  type,
}: {
  type: "visa" | "cash" | "apple" | "google" | "gift";
}) {
  const label = {
    visa: "VISA",
    cash: "$",
    apple: "Pay",
    google: "G",
    gift: "GC",
  }[type];

  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-[9px] font-bold tracking-wide text-ink">
      {label}
    </span>
  );
}

export function MetricCell({
  label,
  value,
  hint,
  accent = false,
}: {
  label: string;
  value: string;
  hint?: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-line bg-fog px-3 py-3">
      <p className="text-[11px] text-ink-muted">{label}</p>
      <p className={`mt-1 text-[18px] font-semibold tracking-tight ${accent ? "text-orange" : "text-ink"}`}>
        {value}
      </p>
      {hint && <p className="mt-0.5 text-[11px] text-ink-faint">{hint}</p>}
    </div>
  );
}

export function PaidProgress({
  paid = "$170.00",
  total = "$248.60",
  remaining = "$78.60",
  percent = 68,
}: {
  paid?: string;
  total?: string;
  remaining?: string;
  percent?: number;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Payment progress
          </p>
          <p className="mt-1 text-[13px] text-ink-muted">
            {paid} paid of {total}
          </p>
        </div>
        <p className="text-[13px] font-semibold text-ink">{percent}% settled</p>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-line">
        <div className="h-full rounded-full bg-orange" style={{ width: `${percent}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-[12px]">
        <span className="text-ink-muted">
          Paid <span className="font-semibold text-ink">{paid}</span>
        </span>
        <span className="text-ink-muted">
          Remaining <span className="font-semibold text-orange">{remaining}</span>
        </span>
      </div>
    </div>
  );
}

export function MixBars() {
  const rows = [
    ["Visa", 80, 47],
    ["Cash", 40, 24],
    ["Apple Pay", 30, 18],
    ["Gift card", 20, 12],
  ] as const;

  return (
    <div className="space-y-2.5">
      {rows.map(([name, amount, width]) => (
        <div key={name}>
          <div className="mb-1 flex justify-between text-[12px]">
            <span className="text-ink-muted">{name}</span>
            <span className="font-semibold">${amount.toFixed(2)}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-orange" style={{ width: `${width}%` }} />
          </div>
        </div>
      ))}
      <div className="flex justify-between border-t border-line pt-2 text-[12px]">
        <span className="text-ink-muted">Remaining</span>
        <span className="font-semibold text-orange">$78.60</span>
      </div>
    </div>
  );
}

export function GuestStatusRow({
  guest,
  amount,
  status,
}: {
  guest: string;
  amount: string;
  status: "Paid" | "Partial" | "Pending";
}) {
  const tone = status === "Paid" ? "ready" : status === "Partial" ? "medium" : "neutral";
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-fog px-3 py-2.5">
      <p className="text-[13px] font-semibold text-ink">{guest}</p>
      <div className="flex items-center gap-3">
        <p className="text-[13px] font-semibold">{amount}</p>
        <StatusPill tone={tone}>
          {status === "Paid" ? "✓ Paid" : status}
        </StatusPill>
      </div>
    </div>
  );
}
