import { DeviceUnit } from "@/components/pos-device/mockups";
import { PosPrinterUnit } from "@/components/pos-printer/mockups";

type ScreenState = "ready" | "tap" | "pin" | "processing" | "approved";
type ReaderSize = "sm" | "md" | "lg" | "xl";

/** Primary Vertex Card Reader hardware visual. */
export function CardReaderUnit({
  className = "",
  size = "md",
  showTap = false,
  state = "ready",
  angle = "flat",
  glow = false,
  imageSrc,
}: {
  className?: string;
  size?: ReaderSize;
  showTap?: boolean;
  state?: ScreenState;
  angle?: "flat" | "tilt" | "tilt-right";
  glow?: boolean;
  imageSrc?: string;
}) {
  if (imageSrc) {
    const w =
      size === "xl"
        ? "max-w-[280px]"
        : size === "lg"
          ? "max-w-[230px]"
          : size === "sm"
            ? "max-w-[120px]"
            : "max-w-[175px]";
    return (
      <div className={`relative mx-auto w-full ${w} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt="Vertex POS Card Reader"
          className="w-full object-contain"
        />
      </div>
    );
  }

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
      {glow ? (
        <div className="pointer-events-none absolute -inset-8 rounded-full bg-orange/15 blur-2xl" />
      ) : null}
      {showTap ? (
        <>
          <span className="pointer-events-none absolute left-1/2 top-[34%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange/35 md:h-36 md:w-36" />
          <span className="pointer-events-none absolute left-1/2 top-[34%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange/15 md:h-52 md:w-52" />
        </>
      ) : null}
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

/** Premium hero presentation on white stage. */
export function CardReaderHeroVisual({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="rounded-[32px] border border-line bg-white p-10 shadow-mock md:p-14">
        <CardReaderUnit size="xl" state="ready" glow imageSrc={imageSrc} />
      </div>
      <div
        aria-hidden
        className="absolute -bottom-4 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-full bg-black/10 blur-xl"
      />
    </div>
  );
}

/** Business environment scene. */
export function CardReaderBusinessScene({
  size = "lg" as ReaderSize,
  state = "ready" as ScreenState,
}: {
  size?: ReaderSize;
  state?: ScreenState;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#F0EDE7]">
      <div
        aria-hidden
        className="absolute left-4 top-4 rounded-lg border border-line/60 bg-white/60 px-3 py-2"
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
          Payments
        </p>
      </div>
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-0 h-14 rounded-t-[20px] bg-[#E8E4DC]"
      />
      <div className="relative flex min-h-[300px] items-end justify-center px-6 pb-10 pt-14 md:min-h-[360px]">
        <CardReaderUnit size={size} state={state} angle="tilt" />
      </div>
    </div>
  );
}

/** Customer payment interaction. */
export function CardReaderCustomerScene() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-white shadow-card">
      <div className="border-b border-line bg-[#FAF8F4] px-5 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Customer payment
        </p>
      </div>
      <div className="relative p-8 md:p-10">
        <CardReaderUnit size="lg" state="tap" showTap angle="tilt-right" />
        <p className="mt-6 text-center text-[12px] text-ink-faint">
          Tap · Insert · Wallet
        </p>
      </div>
    </div>
  );
}

/** Checkout workflow — Card Reader with POS hardware. */
export function CardReaderCheckoutScene() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-white shadow-card">
      <div className="border-b border-line bg-[#FAF8F4] px-5 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Connected checkout
        </p>
      </div>
      <div className="relative p-6 md:p-8">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <DeviceUnit size="sm" screen="table" />
          <CardReaderUnit size="md" state="approved" angle="tilt" />
        </div>
        <p className="mt-5 text-center text-[12px] text-ink-faint">
          POS Device + Card Reader on Vertex checkout
        </p>
      </div>
    </div>
  );
}

/** Payment methods visual — documented methods only. */
export function CardReaderPaymentMethodsVisual() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <MiniInteraction label="Contactless">
        <CardReaderUnit size="sm" state="tap" showTap />
      </MiniInteraction>
      <MiniInteraction label="Chip & PIN">
        <ChipCard />
      </MiniInteraction>
      <MiniInteraction label="Digital wallet">
        <PhonePay />
      </MiniInteraction>
    </div>
  );
}

/** Ecosystem visual — Card Reader with Vertex hardware family. */
export function CardReaderEcosystemVisual() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 rounded-2xl border border-orange/20 bg-orange-soft/30 p-6 shadow-card md:p-8">
        <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Complete POS setup
        </p>
        <div className="grid items-end gap-4 md:grid-cols-3">
          <DeviceUnit size="sm" screen="service" />
          <CardReaderUnit size="md" state="ready" />
          <div className="hidden md:block">
            <PosPrinterUnit size="sm" printing={false} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-2xl border border-line bg-white p-5 shadow-card">
        <DeviceUnit size="sm" screen="order" />
      </div>
      <div className="flex items-center justify-center rounded-2xl border border-line bg-white p-5 shadow-card">
        <CardReaderUnit size="sm" state="approved" />
      </div>
    </div>
  );
}

/** Small business-type preview card. */
export function CardReaderBusinessCard({
  title,
  state = "ready",
}: {
  title: string;
  state?: ScreenState;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-mock">
      <div className="border-b border-line bg-[#FAF8F4] px-4 py-3">
        <p className="text-[12px] font-semibold text-ink">{title}</p>
      </div>
      <div className="flex justify-center p-4">
        <CardReaderUnit size="sm" state={state} />
      </div>
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

export function MiniInteraction({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-28 w-full max-w-[140px] items-center justify-center rounded-2xl border border-line bg-white shadow-card">
        {children}
      </div>
      <p className="mt-3 text-[12px] font-semibold text-ink">{label}</p>
    </div>
  );
}

const readerDetailCallouts = {
  left: [
    {
      id: "contactless",
      title: "Contactless area",
      copy: "Tap eligible cards or phones for contactless checkout.",
    },
    {
      id: "display",
      title: "Payment display",
      copy: "Payment status display for clear customer interaction.",
    },
    {
      id: "chip",
      title: "Chip & PIN",
      copy: "Insert chip cards with PIN entry on device.",
    },
  ],
  right: [
    {
      id: "status",
      title: "Status indicator",
      copy: "Ready status visible during everyday checkout.",
    },
    {
      id: "connectivity",
      title: "Connectivity",
      copy: "Wi-Fi, Ethernet, and Bluetooth options for your counter.",
    },
    {
      id: "wallet",
      title: "Digital wallets",
      copy: "Accept mobile wallet payments on compatible devices.",
    },
  ],
} as const;

function ReaderDetailCallout({
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

function ReaderMobileDetailCard({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
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

/** Annotated hardware diagram. */
export function CardReaderProductDetailsDiagram({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="w-full">
      <div className="hidden items-center gap-4 lg:grid lg:grid-cols-[1fr_minmax(280px,400px)_1fr] lg:gap-6 xl:gap-10">
        <div className="flex flex-col justify-center gap-10 py-4">
          {readerDetailCallouts.left.map((item) => (
            <ReaderDetailCallout
              key={item.id}
              title={item.title}
              copy={item.copy}
              side="left"
            />
          ))}
        </div>
        <div className="relative mx-auto w-full max-w-[400px]">
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-2 top-10 rounded-[32px] bg-[#F0EDE7]"
          />
          <div className="relative px-2 py-8">
            <CardReaderUnit size="xl" state="ready" imageSrc={imageSrc} />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 py-4">
          {readerDetailCallouts.right.map((item) => (
            <ReaderDetailCallout
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
            <CardReaderUnit size="lg" state="ready" imageSrc={imageSrc} />
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[...readerDetailCallouts.left, ...readerDetailCallouts.right].map(
            (item) => (
              <ReaderMobileDetailCard
                key={item.id}
                title={item.title}
                copy={item.copy}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
