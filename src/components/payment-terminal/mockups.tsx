/**
 * Vertex Payment Terminal visuals — dedicated customer-facing payment device.
 * Distinct from Card Reader (compact reader) and POS Monitor (display).
 */

export type TerminalState =
  | "ready"
  | "tap"
  | "insert"
  | "approved"
  | "processing";

type TerminalSize = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<TerminalSize, string> = {
  sm: "max-w-[150px]",
  md: "max-w-[220px]",
  lg: "max-w-[280px]",
  xl: "max-w-[320px]",
};

function TerminalScreen({ state }: { state: TerminalState }) {
  if (state === "tap") {
    return (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
          Tap to pay
        </p>
        <p className="mt-2 text-[24px] font-semibold tracking-tight text-ink">
          $42.50
        </p>
        <div className="mt-3 flex justify-center">
          <span className="relative flex h-12 w-12 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-orange/30" />
            <span className="absolute inset-2 rounded-full border border-orange/50" />
            <span className="h-2 w-2 rounded-full bg-orange" />
          </span>
        </div>
        <p className="mt-2 text-center text-[10px] text-ink-muted">
          Hold card or phone near reader
        </p>
      </>
    );
  }

  if (state === "insert") {
    return (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
          Insert card
        </p>
        <p className="mt-2 text-[22px] font-semibold tracking-tight text-ink">
          $42.50
        </p>
        <div className="mx-auto mt-3 flex h-9 w-16 items-center justify-center rounded-lg border border-dashed border-orange/50 bg-orange/5">
          <span className="text-[9px] font-semibold text-orange">CHIP IN</span>
        </div>
        <p className="mt-2 text-center text-[10px] text-ink-muted">
          Follow on-screen guidance
        </p>
      </>
    );
  }

  if (state === "processing") {
    return (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
          Processing
        </p>
        <p className="mt-3 text-[14px] font-semibold text-ink">Please wait…</p>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-fog">
          <div className="h-full w-[60%] rounded-full bg-orange" />
        </div>
      </>
    );
  }

  if (state === "approved") {
    return (
      <>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#1F7A45]">
          Approved
        </p>
        <p className="mt-2 text-[24px] font-semibold tracking-tight text-ink">
          $42.50
        </p>
        <div className="mt-3 rounded-xl bg-[#E8F6EE] py-2 text-center text-[10px] font-semibold text-[#1F7A45]">
          Payment complete
        </div>
      </>
    );
  }

  return (
    <>
      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
        Ready to pay
      </p>
      <p className="mt-2 text-[26px] font-semibold tracking-tight text-ink">
        $42.50
      </p>
      <p className="mt-1 text-[10px] text-ink-muted">Tap · Insert · Digital</p>
      <div className="mt-3 flex justify-center gap-1.5">
        {["Tap", "Chip", "Pay"].map((label) => (
          <span
            key={label}
            className="rounded bg-fog px-1.5 py-0.5 text-[8px] font-bold text-ink-muted"
          >
            {label}
          </span>
        ))}
      </div>
    </>
  );
}

/** Primary Payment Terminal hardware unit. */
export function PaymentTerminalUnit({
  className = "",
  size = "md",
  state = "ready",
  showTap = false,
  imageSrc,
}: {
  className?: string;
  size?: TerminalSize;
  state?: TerminalState;
  showTap?: boolean;
  imageSrc?: string;
}) {
  if (imageSrc) {
    return (
      <div className={`relative mx-auto w-full ${sizeMap[size]} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt="Vertex Payment Terminal"
          className="w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`relative mx-auto w-full ${sizeMap[size]} ${className}`}>
      {showTap ? (
        <>
          <span className="pointer-events-none absolute left-1/2 top-[14%] h-20 w-20 -translate-x-1/2 rounded-full border border-orange/35 md:h-28 md:w-28" />
          <span className="pointer-events-none absolute left-1/2 top-[14%] h-32 w-32 -translate-x-1/2 rounded-full border border-orange/15 md:h-40 md:w-40" />
        </>
      ) : null}

      {/* Contactless top bezel */}
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

        <div className="relative -rotate-[3deg] rounded-[18px] border border-[#333] bg-[#111] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="min-h-[128px] overflow-hidden rounded-[14px] bg-[#f8f6f3] p-3 md:min-h-[148px]">
            <TerminalScreen state={state} />
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
  );
}

function ChipCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-10 w-[62px] rounded-lg border border-[#c4b896] bg-gradient-to-br from-[#e8dcc4] to-[#c9b896] p-1.5 shadow-card ${className}`}
    >
      <div className="h-3 w-4 rounded-[2px] bg-[#b8a06e]" />
    </div>
  );
}

function PhonePay({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-14 w-8 rounded-lg border border-line bg-night p-0.5 shadow-card ${className}`}
    >
      <div className="flex h-full flex-col items-center rounded-md bg-[#1c222b] pt-1.5">
        <span className="h-0.5 w-4 rounded-full bg-white/25" />
        <span className="mt-1.5 rounded bg-orange px-1 py-0.5 text-[6px] font-bold text-white">
          Pay
        </span>
      </div>
    </div>
  );
}

/** Premium hero presentation on white stage. */
export function TerminalHeroVisual({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="rounded-[32px] border border-line bg-white p-10 shadow-mock md:p-14">
        <PaymentTerminalUnit size="xl" state="ready" imageSrc={imageSrc} />
      </div>
      <div
        aria-hidden
        className="absolute -bottom-4 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-full bg-black/10 blur-xl"
      />
    </div>
  );
}

/** Payment in progress — terminal as main subject. */
export function TerminalPaymentScene({
  mode = "tap",
}: {
  mode?: "tap" | "insert" | "phone";
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#F0EDE7]">
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-0 h-16 rounded-t-[20px] bg-[#E8E4DC]"
      />
      <div className="relative flex min-h-[320px] flex-col items-center justify-end px-6 pb-10 pt-12 md:min-h-[380px]">
        <div className="relative">
          <PaymentTerminalUnit
            size="lg"
            state={mode === "insert" ? "insert" : "tap"}
            showTap={mode !== "insert"}
          />
          {mode === "phone" ? (
            <div className="absolute -right-2 top-6 md:-right-4 md:top-8">
              <PhonePay />
            </div>
          ) : mode === "insert" ? (
            <div className="absolute -left-1 bottom-10 md:-left-3">
              <ChipCard />
            </div>
          ) : (
            <div className="absolute -right-1 top-8 md:-right-3 md:top-10">
              <ChipCard />
            </div>
          )}
        </div>
        <p className="mt-5 text-[12px] font-medium text-ink-faint">
          {mode === "insert"
            ? "Chip card payment"
            : mode === "phone"
              ? "Contactless phone payment"
              : "Contactless card payment"}
        </p>
      </div>
    </div>
  );
}

/** Customer contactless payment — terminal remains visual hero. */
export function TerminalCustomerScene() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-white shadow-card">
      <div className="border-b border-line bg-[#FAF8F4] px-5 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Customer payment
        </p>
      </div>
      <div className="relative flex min-h-[300px] flex-col items-center justify-center p-8 md:min-h-[360px] md:p-10">
        <div className="relative">
          <PaymentTerminalUnit size="lg" state="tap" showTap />
          <div className="absolute -right-3 top-4 md:-right-6 md:top-6">
            <div className="flex flex-col items-center gap-2">
              <span
                aria-hidden
                className="h-8 w-8 rounded-full bg-[#E8E0D4] shadow-sm"
              />
              <PhonePay />
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-[12px] text-ink-faint">
          Hand + phone + Payment Terminal
        </p>
      </div>
    </div>
  );
}

/** Real-world checkout counter with terminal as primary subject. */
export function TerminalCheckoutScene() {
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
        <PaymentTerminalUnit size="lg" state="ready" />
      </div>
    </div>
  );
}

/** Product-only on pure white. */
export function TerminalProductOnlyVisual({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="rounded-[28px] border border-line bg-white p-10 shadow-card md:p-14">
      <PaymentTerminalUnit size="xl" state="ready" imageSrc={imageSrc} />
    </div>
  );
}

const hardwareCallouts = {
  left: [
    {
      id: "contactless",
      title: "Contactless payments",
      copy: "Tap-enabled payment area for quick contactless transactions.",
    },
    {
      id: "display",
      title: "Clear display",
      copy: "A bright, easy-to-follow screen keeps payment instructions visible.",
    },
    {
      id: "card",
      title: "Card acceptance",
      copy: "Support familiar card-payment interactions through the terminal.",
    },
  ],
  right: [
    {
      id: "flow",
      title: "Easy customer flow",
      copy: "Simple on-screen guidance helps customers complete payments confidently.",
    },
    {
      id: "secure",
      title: "Secure payment experience",
      copy: "Designed for professional payment processing and everyday business use.",
    },
    {
      id: "design",
      title: "Compact countertop design",
      copy: "A professional footprint that fits naturally into checkout environments.",
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

/** Annotated hardware details diagram. */
export function TerminalProductDetailsDiagram({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="w-full">
      <div className="hidden items-center gap-4 lg:grid lg:grid-cols-[1fr_minmax(240px,340px)_1fr] lg:gap-6 xl:gap-10">
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
        <div className="relative mx-auto w-full max-w-[340px]">
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-2 top-10 rounded-[32px] bg-[#F0EDE7]"
          />
          <div className="relative px-2 py-8">
            <PaymentTerminalUnit
              size="xl"
              state="ready"
              imageSrc={imageSrc}
            />
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
        <div className="mx-auto max-w-sm">
          <div className="rounded-[28px] border border-line bg-white p-6 shadow-card">
            <PaymentTerminalUnit size="lg" state="ready" imageSrc={imageSrc} />
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

/** Subtle atmospheric product for dark trust section. */
export function TerminalTrustAtmosphereVisual() {
  return (
    <div className="mx-auto mt-10 max-w-[200px] opacity-70">
      <PaymentTerminalUnit size="md" state="ready" />
    </div>
  );
}
