/**
 * POS Monitor product visuals — CSS/device mockups ready to swap for final photography.
 * Keep all visuals specifically about the customer-facing monitor (no lifestyle stock).
 */

function StatusPill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "ready" | "medium";
}) {
  const styles =
    tone === "ready"
      ? "bg-emerald-50 text-emerald-700"
      : tone === "medium"
        ? "bg-orange-soft text-orange"
        : "bg-fog text-ink-muted";
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${styles}`}
    >
      {children}
    </span>
  );
}

/** Optional image slot — drop a final product photo path when available. */
export function ProductImageSlot({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-contain ${className}`}
      />
    );
  }
  return null;
}

export function OrderScreenContent({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className={compact ? "p-3" : "p-4 md:p-5"}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Your order
          </p>
          <p className="mt-1 text-[12px] text-ink-muted">Guest view</p>
        </div>
        <StatusPill tone="ready">Live</StatusPill>
      </div>
      <div className={`mt-3 space-y-0 ${compact ? "text-[12px]" : "text-sm"}`}>
        {[
          ["2 × Classic Burger", "$28.00"],
          ["1 × Fries", "$6.00"],
          ["2 × Sparkling Water", "$8.00"],
        ].map(([item, amount]) => (
          <div
            key={item}
            className="flex justify-between border-b border-line py-1.5"
          >
            <span className="text-ink-muted">{item}</span>
            <span className="font-semibold">{amount}</span>
          </div>
        ))}
        <div className="flex justify-between border-b border-line py-1.5">
          <span className="text-ink-muted">Tax</span>
          <span className="font-semibold">$4.20</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="font-semibold">Total</span>
          <span
            className={`font-semibold tracking-tight ${
              compact ? "text-[18px]" : "text-[22px]"
            }`}
          >
            $46.20
          </span>
        </div>
      </div>
    </div>
  );
}

export function TotalScreenContent() {
  return (
    <div className="flex h-full flex-col justify-between p-4 md:p-5">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Your total
        </p>
        <p className="mt-2 text-[34px] font-semibold tracking-tight">$46.20</p>
        <p className="mt-1 text-[12px] text-ink-muted">Ready for payment</p>
      </div>
      <div className="rounded-lg bg-fog px-3 py-2.5 text-[12px] text-ink-muted">
        Review your order on screen
      </div>
    </div>
  );
}

/** Realistic checkout UI for the product-details showcase. */
export function ShowcaseOrderScreen() {
  return (
    <div className="flex h-full flex-col p-4 md:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
            Order #1025
          </p>
          <p className="mt-1 text-[12px] text-ink-muted">Guest display</p>
        </div>
        <StatusPill tone="ready">Open</StatusPill>
      </div>
      <div className="mt-4 flex-1 space-y-0 text-sm">
        {[
          ["2 × Classic Burger", "$28.00"],
          ["1 × French Fries", "$6.00"],
          ["1 × Iced Coffee", "$5.00"],
        ].map(([item, amount]) => (
          <div
            key={item}
            className="flex justify-between border-b border-line py-2"
          >
            <span className="text-ink-muted">{item}</span>
            <span className="font-semibold text-ink">{amount}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-end justify-between border-t border-line pt-3">
        <span className="text-[13px] font-semibold text-ink">Total</span>
        <span className="text-[24px] font-semibold tracking-tight text-ink">
          $43.20
        </span>
      </div>
    </div>
  );
}

type MonitorSize = "sm" | "md" | "lg" | "xl";
type MonitorAngle = "front" | "tilt" | "side";

const sizeMap: Record<MonitorSize, string> = {
  sm: "max-w-[180px]",
  md: "max-w-[260px]",
  lg: "max-w-[340px]",
  xl: "max-w-[420px]",
};

/**
 * Primary POS Monitor hardware visual.
 * Pass `imageSrc` later to replace the UI mock with product photography.
 */
export function MonitorUnit({
  size = "lg",
  angle = "front",
  screen = "order",
  label = "POS Monitor",
  className = "",
  imageSrc,
}: {
  size?: MonitorSize;
  angle?: MonitorAngle;
  screen?: "order" | "total" | "blank" | "showcase";
  label?: string;
  className?: string;
  imageSrc?: string;
}) {
  const tilt =
    angle === "tilt"
      ? "rotate-[-4deg]"
      : angle === "side"
        ? "rotate-[3deg] scale-x-[0.96]"
        : "";

  return (
    <div className={`relative mx-auto w-full ${sizeMap[size]} ${className}`}>
      <div className={`transition-transform duration-500 ${tilt}`}>
        {/* Bezel */}
        <div className="rounded-[18px] border border-[#2a2a2a] bg-[#1a1a1a] p-2.5 shadow-mock md:rounded-[22px] md:p-3">
          <div className="mb-2 flex items-center justify-between px-1">
            <span className="text-[9px] font-medium tracking-[0.14em] text-white/35">
              VERTEX
            </span>
            <span className="h-1 w-8 rounded-full bg-white/15" />
            <span className="text-[9px] text-white/35">{label}</span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-white md:rounded-[14px]">
            {imageSrc ? (
              <ProductImageSlot src={imageSrc} alt="Vertex POS Monitor" />
            ) : screen === "showcase" ? (
              <ShowcaseOrderScreen />
            ) : screen === "order" ? (
              <OrderScreenContent compact={size === "sm" || size === "md"} />
            ) : screen === "total" ? (
              <TotalScreenContent />
            ) : (
              <div className="flex h-full items-center justify-center bg-[#FAF8F4]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  POS Monitor
                </p>
              </div>
            )}
          </div>
        </div>
        {/* Neck + base */}
        <div className="mx-auto h-4 w-10 bg-[#222] md:h-5 md:w-12" />
        <div className="mx-auto h-2 w-28 rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#111] shadow-sm md:w-36" />
      </div>
    </div>
  );
}

/** Hero stage with soft product pedestal — ready for final photography. */
export function MonitorHeroStage({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-6 rounded-[40px] bg-gradient-to-br from-white via-[#F3F0EA] to-[#E8E4DC]"
      />
      <div
        aria-hidden
        className="absolute -right-6 top-10 h-40 w-40 rounded-full bg-orange/10 blur-3xl"
      />
      <div className="relative w-full px-4 py-10 md:px-8 md:py-14">
        <MonitorUnit size="xl" angle="tilt" screen="order" imageSrc={imageSrc} />
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Display", "Stand", "Customer-facing", "Compact"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-white/90 px-3 py-1 text-[11px] font-medium text-ink-muted shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Large presentation with annotation callouts. */
export function MonitorDetailStage() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Desktop callouts */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        <Callout
          className="left-0 top-[18%]"
          label="Customer-facing display"
          align="left"
        />
        <Callout
          className="right-0 top-[22%]"
          label="Clear screen visibility"
          align="right"
        />
        <Callout
          className="left-0 bottom-[28%]"
          label="Compact stand"
          align="left"
        />
        <Callout
          className="right-0 bottom-[24%]"
          label="Counter-friendly footprint"
          align="right"
        />
        <Callout
          className="left-1/2 top-[4%] -translate-x-1/2"
          label="Adjustable viewing position"
          align="center"
        />
      </div>

      <div className="relative mx-auto max-w-md px-4 py-8 md:py-12">
        <div className="rounded-[28px] border border-line bg-white p-6 shadow-card md:p-10">
          <MonitorUnit size="xl" angle="front" screen="order" />
        </div>
      </div>

      {/* Mobile callout chips */}
      <div className="mt-2 flex flex-wrap justify-center gap-2 lg:hidden">
        {[
          "Customer-facing display",
          "Adjustable viewing position",
          "Compact stand",
          "Clear screen visibility",
          "Counter-friendly footprint",
        ].map((label) => (
          <span
            key={label}
            className="rounded-full border border-line bg-white px-3 py-1.5 text-[12px] font-medium text-ink-muted"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Callout({
  label,
  className = "",
  align,
}: {
  label: string;
  className?: string;
  align: "left" | "right" | "center";
}) {
  return (
    <div className={`absolute z-10 ${className}`}>
      <div
        className={`flex items-center gap-2 ${
          align === "right"
            ? "flex-row-reverse text-right"
            : align === "center"
              ? "flex-col"
              : ""
        }`}
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-orange ring-4 ring-orange/15" />
        {align !== "center" ? (
          <span
            className={`h-px w-10 bg-line md:w-14 ${
              align === "right" ? "" : ""
            }`}
          />
        ) : (
          <span className="h-6 w-px bg-line" />
        )}
        <span className="rounded-md border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-ink shadow-sm">
          {label}
        </span>
      </div>
    </div>
  );
}

export function MiniMonitorCard({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-mock">
      <div className="flex min-h-[160px] items-center justify-center bg-[#FAF8F4] px-6 py-8">
        <MonitorUnit size="sm" angle="tilt" screen="order" />
      </div>
      <div className="border-t border-line p-5 md:p-6">
        <h3 className="text-[18px] font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-[14px] leading-6 text-ink-muted">{copy}</p>
      </div>
    </article>
  );
}

/** Legacy alias used by older imports — keep thin wrapper if needed. */
export function MonitorFrame({
  children,
  className = "",
  label = "Customer display",
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-[20px] border border-[#d0d0ce] bg-[#222] p-2.5 shadow-mock md:p-3">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-[9px] font-medium tracking-wide text-white/35">
            VERTEX
          </span>
          <span className="h-1 w-10 rounded-full bg-white/15" />
          <span className="text-[9px] text-white/35">{label}</span>
        </div>
        <div className="overflow-hidden rounded-xl bg-white">{children}</div>
      </div>
      <div className="mx-auto h-5 w-12 bg-[#222]" />
      <div className="mx-auto h-1.5 w-32 rounded-full bg-[#141414]" />
    </div>
  );
}

export function YourOrderScreen() {
  return <OrderScreenContent />;
}
