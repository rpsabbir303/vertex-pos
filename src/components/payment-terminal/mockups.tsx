import Image from "next/image";

/** Vertex Payment Terminal product renders + payment state UIs. */

export type TerminalState =
  | "amount"
  | "ready"
  | "tap"
  | "insert"
  | "swipe"
  | "pin"
  | "processing"
  | "approved"
  | "receipt";

export type TerminalAngle = "front" | "side" | "back" | "angled";

export function PaymentTerminalUnit({
  className = "",
  size = "md",
  state = "ready",
  showTap = false,
  glow = false,
  angle = "front",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  state?: TerminalState;
  showTap?: boolean;
  glow?: boolean;
  angle?: TerminalAngle;
}) {
  const scale =
    size === "xl"
      ? "max-w-[320px]"
      : size === "lg"
        ? "max-w-[280px]"
        : size === "sm"
          ? "max-w-[150px]"
          : "max-w-[240px]";

  const angleClass =
    angle === "side"
      ? "[transform:perspective(900px)_rotateY(-28deg)]"
      : angle === "back"
        ? "[transform:perspective(900px)_rotateY(180deg)_scale(0.92)]"
        : angle === "angled"
          ? "[transform:perspective(900px)_rotateY(-12deg)_rotateX(6deg)]"
          : "";

  const screens: Record<TerminalState, React.ReactNode> = {
    amount: (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
          Enter amount
        </p>
        <p className="mt-2 text-[28px] font-semibold tracking-tight text-ink">$62.40</p>
        <p className="mt-1 text-[10px] text-ink-muted">Table 12 · Check total</p>
        <div className="mt-3 grid grid-cols-3 gap-1">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((n) => (
            <span
              key={n}
              className="rounded-md bg-fog py-1 text-center text-[9px] font-semibold text-ink-muted"
            >
              {n}
            </span>
          ))}
        </div>
      </>
    ),
    ready: (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
          Ready to pay
        </p>
        <p className="mt-2 text-[28px] font-semibold tracking-tight text-ink">$62.40</p>
        <p className="mt-1 text-[10px] text-ink-muted">Tap · Insert · Wallet</p>
        <div className="mt-3 flex justify-center gap-1.5">
          {["V", "M", "A", "D"].map((brand) => (
            <span
              key={brand}
              className="rounded bg-fog px-1.5 py-0.5 text-[8px] font-bold text-ink-muted"
            >
              {brand}
            </span>
          ))}
        </div>
      </>
    ),
    tap: (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
          Tap to pay
        </p>
        <p className="mt-2 text-[26px] font-semibold tracking-tight">$62.40</p>
        <div className="mt-3 flex justify-center">
          <span className="relative flex h-14 w-14 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-orange/30" />
            <span className="absolute inset-2 rounded-full border border-orange/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-orange" />
          </span>
        </div>
        <p className="mt-2 text-center text-[10px] text-ink-muted">Hold card or phone near reader</p>
      </>
    ),
    insert: (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
          Insert card
        </p>
        <p className="mt-2 text-[24px] font-semibold tracking-tight">$62.40</p>
        <div className="mx-auto mt-3 flex h-10 w-16 items-center justify-center rounded-lg border border-dashed border-orange/50 bg-orange/5">
          <span className="text-[10px] font-semibold text-orange">CHIP IN</span>
        </div>
        <p className="mt-2 text-center text-[10px] text-ink-muted">Do not remove card</p>
      </>
    ),
    swipe: (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
          Swipe card
        </p>
        <p className="mt-2 text-[24px] font-semibold tracking-tight">$62.40</p>
        <div className="mx-auto mt-3 flex h-10 w-20 items-center justify-center rounded-lg border border-orange/30 bg-orange/5">
          <span className="text-[10px] font-semibold text-orange">→ SWIPE</span>
        </div>
        <p className="mt-2 text-center text-[10px] text-ink-muted">Swipe through reader slot</p>
      </>
    ),
    pin: (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
          Enter PIN
        </p>
        <p className="mt-2 text-[22px] font-semibold tracking-[0.35em]">••••</p>
        <div className="mt-3 grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }, (_, i) => (
            <span
              key={i}
              className="rounded-md bg-fog py-1 text-center text-[9px] font-semibold text-ink-muted"
            >
              {i + 1}
            </span>
          ))}
        </div>
      </>
    ),
    processing: (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
          Processing payment
        </p>
        <p className="mt-3 text-[14px] font-semibold">Securing payment…</p>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-fog">
          <div className="h-full w-[65%] rounded-full bg-orange" />
        </div>
        <p className="mt-2 text-[10px] text-ink-muted">Encrypted transaction</p>
      </>
    ),
    approved: (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#1F7A45]">
          Payment Approved ✓
        </p>
        <p className="mt-2 text-[28px] font-semibold tracking-tight">$62.40</p>
        <p className="mt-1 text-[10px] text-ink-muted">Visa ·••• 4242</p>
        <div className="mt-3 rounded-xl bg-[#E8F6EE] py-2 text-center text-[10px] font-semibold text-[#1F7A45]">
          ✓ Payment complete
        </div>
      </>
    ),
    receipt: (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#1F7A45]">
          Confirmation
        </p>
        <p className="mt-2 text-[20px] font-semibold tracking-tight">$62.40 paid</p>
        <div className="mx-auto mt-3 w-[78%] rounded-lg border border-line bg-white p-2 text-left">
          <p className="text-[8px] font-semibold text-ink-muted">Receipt ready</p>
          <p className="mt-1 text-[9px] text-ink">Table 12 · Dinner service</p>
          <p className="mt-1 text-[9px] text-ink-muted">Auth #48291</p>
        </div>
        <p className="mt-2 text-center text-[10px] text-ink-muted">Guest may remove card</p>
      </>
    ),
  };

  return (
    <div className={`relative mx-auto w-full ${scale} ${className}`}>
      {glow && (
        <div className="pointer-events-none absolute -inset-10 rounded-full bg-orange/12 blur-3xl" />
      )}
      {showTap && (
        <>
          <span className="pointer-events-none absolute left-1/2 top-[18%] h-24 w-24 -translate-x-1/2 rounded-full border border-orange/35 md:h-32 md:w-32" />
          <span className="pointer-events-none absolute left-1/2 top-[18%] h-36 w-36 -translate-x-1/2 rounded-full border border-orange/15 md:h-44 md:w-44" />
        </>
      )}

      <div className={`relative transition-transform duration-500 ${angleClass}`}>
        <div className="absolute left-1/2 top-0 z-10 h-5 w-[72%] -translate-x-1/2 rounded-t-xl border border-b-0 border-[#2a2a2a] bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a]">
          <div className="flex h-full items-center justify-center">
            <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Tap
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[22px] border border-[#1f1f1f] bg-gradient-to-b from-[#2f2f2f] via-[#181818] to-[#0a0a0a] p-3 pt-7 shadow-mock md:p-3.5 md:pt-8">
          <div className="mb-2 flex items-center justify-between px-1">
            <span className="text-[8px] font-bold tracking-[0.2em] text-white/45">
              VERTEX
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#3dd68c] shadow-[0_0_8px_rgba(61,214,140,0.8)]" />
          </div>

          <div className="relative -rotate-[4deg] rounded-[18px] border border-[#333] bg-[#111] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="min-h-[132px] overflow-hidden rounded-[14px] bg-[#f8f6f3] p-3 md:min-h-[148px]">
              {screens[state]}
            </div>
          </div>

          <div className="mt-3 flex items-end justify-between px-1">
            <div className="h-2 w-14 rounded-sm bg-[#050505] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
            <div className="flex gap-1">
              <span className="h-1.5 w-6 rounded-full bg-white/12" />
              <span className="h-1.5 w-6 rounded-full bg-white/12" />
            </div>
            <div className="h-2 w-10 rounded-sm border border-white/10 bg-[#151515]" />
          </div>
        </div>

        <div className="mx-auto -mt-1 h-3 w-[88%] rounded-b-[14px] border border-t-0 border-[#1a1a1a] bg-gradient-to-b from-[#222] to-[#111]" />
      </div>
    </div>
  );
}

export function TerminalScene({
  image,
  alt,
  state = "ready",
  showTap = false,
  terminalPosition = "bottom-right",
  className = "",
  imageClassName = "",
  height = "h-[340px] md:h-[420px]",
}: {
  image: string;
  alt: string;
  state?: TerminalState;
  showTap?: boolean;
  terminalPosition?: "bottom-right" | "bottom-left" | "center-right";
  className?: string;
  imageClassName?: string;
  height?: string;
}) {
  const pos =
    terminalPosition === "bottom-left"
      ? "bottom-5 left-5"
      : terminalPosition === "center-right"
        ? "right-5 top-1/2 -translate-y-1/2"
        : "bottom-5 right-5";

  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-line shadow-mock ${height} ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className={`object-cover ${imageClassName}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <div
        className={`absolute ${pos} w-[38%] max-w-[160px] rounded-2xl border border-white/15 bg-black/25 p-2.5 backdrop-blur-md`}
      >
        <PaymentTerminalUnit size="sm" state={state} showTap={showTap} />
      </div>
    </div>
  );
}

export function TerminalMethodPanel({
  label,
  copy,
  state,
  showTap = false,
}: {
  label: string;
  copy: string;
  state: TerminalState;
  showTap?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-[22px] border border-line bg-white shadow-card transition-shadow hover:shadow-mock">
      <div className="border-b border-line bg-[#F7F5F2] px-4 py-5">
        <PaymentTerminalUnit size="sm" state={state} showTap={showTap} glow={state === "tap"} />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="text-[15px] font-semibold">{label}</h3>
        <p className="mt-1.5 text-[13px] leading-5 text-ink-muted">{copy}</p>
      </div>
    </article>
  );
}

export function TerminalScreenPanel({
  title,
  state,
  showTap = false,
}: {
  title: string;
  state: TerminalState;
  showTap?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-line bg-gradient-to-b from-white to-[#F7F5F2] shadow-card">
      <div className="border-b border-line px-5 py-6 md:px-6 md:py-8">
        <PaymentTerminalUnit
          size="md"
          state={state}
          showTap={showTap}
          glow={state === "approved"}
        />
      </div>
      <p className="px-5 py-4 text-center text-[14px] font-semibold md:px-6">{title}</p>
    </div>
  );
}

export function TerminalFeatureCallout({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md ${className}`}
    >
      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-orange" />
      {label}
    </span>
  );
}

export function CompactTerminalCard() {
  return (
    <div className="rounded-2xl border border-line bg-[#0f141c] p-5 shadow-mock">
      <PaymentTerminalUnit size="md" state="approved" glow />
    </div>
  );
}

export function TerminalNetworkMark({ label }: { label: string }) {
  return (
    <span className="rounded-lg border border-line bg-white px-3 py-2 text-[11px] font-bold tracking-wide text-ink-muted shadow-card">
      {label}
    </span>
  );
}
