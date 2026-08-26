/** Premium Card Reader product renders + payment state UIs. */

type ScreenState = "ready" | "tap" | "pin" | "processing" | "approved";

export function CardReaderUnit({
  className = "",
  size = "md",
  showTap = false,
  state = "ready",
  angle = "flat",
  glow = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTap?: boolean;
  state?: ScreenState;
  angle?: "flat" | "tilt" | "tilt-right";
  glow?: boolean;
}) {
  const w =
    size === "xl"
      ? "w-[220px] md:w-[280px]"
      : size === "lg"
        ? "w-[190px] md:w-[230px]"
        : size === "sm"
          ? "w-[120px]"
          : "w-[155px] md:w-[175px]";

  const rotate =
    angle === "tilt"
      ? "rotate-[-8deg]"
      : angle === "tilt-right"
        ? "rotate-[7deg]"
        : "";

  const screens: Record<ScreenState, React.ReactNode> = {
    ready: (
      <>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-orange">
          Ready to pay
        </p>
        <p className="mt-2 text-[26px] font-semibold tracking-tight text-ink">$46.20</p>
        <p className="mt-1 text-[11px] text-ink-muted">Tap · Insert · Wallet</p>
        <div className="mt-4 rounded-xl bg-orange/10 py-2.5 text-center text-[11px] font-semibold text-orange">
          Contactless ready
        </div>
      </>
    ),
    tap: (
      <>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-orange">
          Tap to pay
        </p>
        <p className="mt-2 text-[24px] font-semibold tracking-tight">$46.20</p>
        <div className="mt-4 flex justify-center">
          <span className="relative flex h-12 w-12 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-orange/30" />
            <span className="absolute inset-2 rounded-full border border-orange/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-orange" />
          </span>
        </div>
        <p className="mt-3 text-center text-[11px] text-ink-muted">Hold near reader</p>
      </>
    ),
    pin: (
      <>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-orange">
          Enter PIN
        </p>
        <p className="mt-3 text-[20px] font-semibold tracking-[0.3em]">••••</p>
        <div className="mt-3 grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }, (_, i) => (
            <span
              key={i}
              className="rounded-md bg-fog py-1.5 text-center text-[10px] font-semibold text-ink-muted"
            >
              {i + 1}
            </span>
          ))}
        </div>
      </>
    ),
    processing: (
      <>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-orange">
          Processing
        </p>
        <p className="mt-4 text-[15px] font-semibold">Securing payment…</p>
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-fog">
          <div className="h-full w-[70%] rounded-full bg-orange" />
        </div>
        <p className="mt-3 text-[11px] text-ink-muted">Encrypted transaction</p>
      </>
    ),
    approved: (
      <>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1F7A45]">
          Approved
        </p>
        <p className="mt-2 text-[26px] font-semibold tracking-tight">$46.20</p>
        <p className="mt-1 text-[11px] text-ink-muted">Visa ·••• 4242</p>
        <div className="mt-4 rounded-xl bg-[#E8F6EE] py-2.5 text-center text-[11px] font-semibold text-[#1F7A45]">
          ✓ Payment complete
        </div>
      </>
    ),
  };

  return (
    <div className={`relative mx-auto ${w} ${rotate} ${className}`}>
      {glow && (
        <div className="pointer-events-none absolute -inset-8 rounded-full bg-orange/15 blur-2xl" />
      )}
      {showTap && (
        <>
          <span className="pointer-events-none absolute left-1/2 top-[34%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange/35 md:h-36 md:w-36" />
          <span className="pointer-events-none absolute left-1/2 top-[34%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange/15 md:h-52 md:w-52" />
        </>
      )}
      <div className="relative overflow-hidden rounded-[30px] border border-[#222] bg-gradient-to-b from-[#333] via-[#1a1a1a] to-[#0c0c0c] p-3 shadow-mock md:p-3.5">
        <div className="mb-2.5 flex items-center justify-between px-1">
          <span className="text-[9px] font-bold tracking-[0.18em] text-white/50">
            VERTEX
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#3dd68c] shadow-[0_0_8px_rgba(61,214,140,0.8)]" />
        </div>
        <div className="min-h-[148px] overflow-hidden rounded-[20px] bg-[#f8f6f3] p-3.5 md:min-h-[168px]">
          {screens[state]}
        </div>
        <div className="mt-3 flex items-center justify-between px-1">
          <div className="h-1.5 w-9 rounded-full bg-white/15" />
          <div className="h-2.5 w-14 rounded-sm border border-white/20 bg-[#151515]" />
          <div className="h-1.5 w-9 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  );
}

export function GlassLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
}

export function SoftLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-ink shadow-card backdrop-blur ${className}`}
    >
      {children}
    </span>
  );
}

export function PaymentApprovedChip() {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/90 p-4 shadow-mock backdrop-blur">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1F7A45]">
        Payment Approved
      </p>
      <p className="mt-1 text-[22px] font-semibold tracking-tight">$46.20</p>
      <p className="mt-0.5 text-[11px] text-ink-muted">Contactless · Visa ·••• 4242</p>
    </div>
  );
}

export function MiniInteraction({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-24 w-28 items-center justify-center rounded-2xl border border-line bg-white shadow-card">
        {children}
      </div>
      <p className="mt-2 text-[12px] font-semibold">{label}</p>
    </div>
  );
}

export function ChipCard() {
  return (
    <div className="h-12 w-[72px] rounded-lg border border-[#c4b896] bg-gradient-to-br from-[#e8dcc4] to-[#c9b896] p-2 shadow-card">
      <div className="h-3.5 w-5 rounded-[2px] bg-[#b8a06e]" />
    </div>
  );
}

export function PhonePay() {
  return (
    <div className="relative h-16 w-9 rounded-lg border border-line bg-night p-1 shadow-card">
      <div className="flex h-full flex-col items-center rounded-md bg-[#1c222b] pt-2">
        <span className="h-0.5 w-5 rounded-full bg-white/25" />
        <span className="mt-2 rounded bg-orange px-1 py-1 text-[7px] font-bold text-white">
          Pay
        </span>
      </div>
      <span className="absolute -right-3 top-4 h-8 w-8 rounded-full border border-orange/45" />
    </div>
  );
}
