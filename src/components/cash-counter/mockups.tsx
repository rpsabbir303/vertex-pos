import { DeviceUnit } from "@/components/pos-device/mockups";
import { MonitorUnit } from "@/components/pos-monitor/mockups";

type CounterSize = "sm" | "md" | "lg" | "xl";
type CounterLayout = "full" | "device" | "monitor" | "minimal";

const counterSizeMap: Record<CounterSize, { surface: string; device: "sm" | "md" | "lg"; monitor: "sm" | "md" | "lg" | "xl" }> = {
  sm: { surface: "min-h-[140px]", device: "sm", monitor: "sm" },
  md: { surface: "min-h-[180px]", device: "md", monitor: "md" },
  lg: { surface: "min-h-[220px] md:min-h-[260px]", device: "lg", monitor: "lg" },
  xl: { surface: "min-h-[260px] md:min-h-[300px]", device: "lg", monitor: "xl" },
};

/** Physical checkout counter base — the primary Cash Counter product visual. */
function CounterBase({
  size = "lg",
  layout = "full",
  className = "",
}: {
  size?: CounterSize;
  layout?: CounterLayout;
  className?: string;
}) {
  const scale = counterSizeMap[size];
  const showDevice = layout === "full" || layout === "device";
  const showMonitor = layout === "full" || layout === "monitor";

  return (
    <div className={`relative w-full ${className}`}>
      {/* Counter work surface */}
      <div
        className={`relative overflow-hidden rounded-t-2xl border border-[#c8c4bc] bg-gradient-to-b from-[#f5f2ec] to-[#e8e4dc] shadow-mock ${scale.surface}`}
      >
        {/* Surface edge highlight */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />

        {/* Hardware placement area */}
        <div className="relative flex h-full items-end justify-center gap-3 px-4 pb-3 pt-8 md:gap-6 md:px-8 md:pb-4 md:pt-10">
          {showDevice ? (
            <div className="w-[42%] max-w-[160px] shrink-0 md:max-w-[200px]">
              <DeviceUnit size={scale.device} screen="service" />
            </div>
          ) : null}
          {showMonitor ? (
            <div className="w-[42%] max-w-[160px] shrink-0 md:max-w-[200px]">
              <MonitorUnit
                size={scale.monitor === "xl" ? "lg" : scale.monitor}
                angle="tilt"
                screen="showcase"
                label="POS Monitor"
              />
            </div>
          ) : null}
          {layout === "minimal" ? (
            <div className="flex flex-1 items-center justify-center">
              <div className="h-16 w-3/4 max-w-[280px] rounded-lg border border-dashed border-[#c8c4bc] bg-white/40" />
            </div>
          ) : null}
        </div>

        {/* Cable management hint */}
        {layout === "full" ? (
          <div
            aria-hidden
            className="absolute bottom-2 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#d4cfc6]"
          />
        ) : null}
      </div>

      {/* Counter front panel */}
      <div className="rounded-b-xl border border-t-0 border-[#b8b4ac] bg-gradient-to-b from-[#3a3632] to-[#1f1d1a] px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold tracking-[0.2em] text-white/40 md:text-[10px]">
            VERTEX
          </span>
          <span className="h-1 w-12 rounded-full bg-white/15 md:w-16" />
          <span className="text-[9px] font-medium text-white/35 md:text-[10px]">
            CASH COUNTER
          </span>
        </div>
      </div>

      {/* Counter legs / base */}
      <div className="mx-auto mt-1 flex w-[88%] justify-between">
        <div className="h-3 w-3 rounded-b-sm bg-[#2a2826] md:h-4 md:w-4" />
        <div className="h-3 w-3 rounded-b-sm bg-[#2a2826] md:h-4 md:w-4" />
      </div>
    </div>
  );
}

/** Primary Cash Counter hardware visual — complete checkout station. */
export function CounterStationUnit({
  size = "lg",
  layout = "full",
  className = "",
  imageSrc,
}: {
  size?: CounterSize;
  layout?: CounterLayout;
  className?: string;
  imageSrc?: string;
}) {
  if (imageSrc) {
    return (
      <div className={`relative mx-auto w-full max-w-xl ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt="Vertex Cash Counter checkout station"
          className="w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`relative mx-auto w-full max-w-xl ${className}`}>
      <CounterBase size={size} layout={layout} />
    </div>
  );
}

/** Premium hero presentation on white stage. */
export function CounterHeroVisual({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="rounded-[32px] border border-line bg-white p-8 shadow-mock md:p-12">
        <CounterStationUnit size="xl" layout="full" imageSrc={imageSrc} />
      </div>
      <div
        aria-hidden
        className="absolute -bottom-4 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-full bg-black/10 blur-xl"
      />
    </div>
  );
}

/** Business environment scene — complete station in counter context. */
export function CounterBusinessScene({
  size = "lg" as CounterSize,
  layout = "full" as CounterLayout,
}: {
  size?: CounterSize;
  layout?: CounterLayout;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#F0EDE7]">
      {/* Ambient business environment hints */}
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
        className="absolute right-4 top-4 h-8 w-8 rounded-full border border-line/60 bg-white/50"
      />
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-0 h-12 rounded-t-[20px] bg-[#E8E4DC]"
      />
      <div className="relative flex min-h-[300px] items-end justify-center px-6 pb-8 pt-14 md:min-h-[380px]">
        <div className="w-full max-w-md">
          <CounterStationUnit size={size} layout={layout} />
        </div>
      </div>
    </div>
  );
}

/** Checkout experience — station with active POS workflow. */
export function CounterCheckoutScene({
  size = "lg" as CounterSize,
}: {
  size?: CounterSize;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-white shadow-card">
      <div className="border-b border-line bg-[#FAF8F4] px-5 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Active checkout
        </p>
      </div>
      <div className="relative p-6 md:p-8">
        <div className="mx-auto max-w-md">
          <CounterBase size={size} layout="full" />
        </div>
        <p className="mt-5 text-center text-[12px] text-ink-faint">
          POS Device + Monitor on Vertex Cash Counter
        </p>
      </div>
    </div>
  );
}

/** Ecosystem visual — Cash Counter with Vertex hardware family. */
export function CounterEcosystemVisual() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 rounded-2xl border border-orange/20 bg-orange-soft/30 p-6 shadow-card md:p-8">
        <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Complete checkout setup
        </p>
        <CounterStationUnit size="lg" layout="full" />
      </div>
      <div className="flex items-center justify-center rounded-2xl border border-line bg-white p-5 shadow-card">
        <DeviceUnit size="sm" screen="order" />
      </div>
      <div className="flex items-center justify-center rounded-2xl border border-line bg-white p-5 shadow-card">
        <MonitorUnit size="sm" angle="tilt" screen="showcase" />
      </div>
    </div>
  );
}

/** Small business-type preview card. */
export function CounterBusinessCard({
  title,
  layout = "full",
}: {
  title: string;
  layout?: CounterLayout;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-mock">
      <div className="border-b border-line bg-[#FAF8F4] px-4 py-3">
        <p className="text-[12px] font-semibold text-ink">{title}</p>
      </div>
      <div className="p-4">
        <CounterStationUnit size="sm" layout={layout} />
      </div>
    </div>
  );
}

const counterDetailCallouts = {
  left: [
    {
      id: "device",
      title: "POS Device position",
      copy: "Dedicated placement for your staff-facing POS terminal.",
    },
    {
      id: "workspace",
      title: "Checkout workspace",
      copy: "Organized work surface for everyday counter operations.",
    },
    {
      id: "cables",
      title: "Cable management",
      copy: "Contact Vertex for available cable management configurations.",
    },
  ],
  right: [
    {
      id: "monitor",
      title: "Monitor position",
      copy: "Customer-facing display placement for order and total visibility.",
    },
    {
      id: "surface",
      title: "Work surface",
      copy: "Clean countertop designed for professional checkout presentation.",
    },
    {
      id: "hardware",
      title: "Hardware mounting area",
      copy: "Designed to accommodate Vertex POS hardware on the counter.",
    },
  ],
} as const;

function CounterDetailCallout({
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

function CounterMobileDetailCard({
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

/** Annotated hardware diagram — complete checkout station with callouts. */
export function CounterProductDetailsDiagram({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="w-full">
      <div className="hidden items-center gap-4 lg:grid lg:grid-cols-[1fr_minmax(300px,480px)_1fr] lg:gap-6 xl:gap-10">
        <div className="flex flex-col justify-center gap-10 py-4">
          {counterDetailCallouts.left.map((item) => (
            <CounterDetailCallout
              key={item.id}
              title={item.title}
              copy={item.copy}
              side="left"
            />
          ))}
        </div>
        <div className="relative mx-auto w-full max-w-[480px]">
          <div
            aria-hidden
            className="absolute inset-x-6 bottom-2 top-10 rounded-[32px] bg-[#F0EDE7]"
          />
          <div className="relative px-2 py-8">
            <CounterStationUnit
              size="xl"
              layout="full"
              imageSrc={imageSrc}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 py-4">
          {counterDetailCallouts.right.map((item) => (
            <CounterDetailCallout
              key={item.id}
              title={item.title}
              copy={item.copy}
              side="right"
            />
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <div className="mx-auto max-w-md">
          <div className="rounded-[28px] border border-line bg-white p-6 shadow-card">
            <CounterStationUnit size="lg" layout="full" imageSrc={imageSrc} />
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[...counterDetailCallouts.left, ...counterDetailCallouts.right].map(
            (item) => (
              <CounterMobileDetailCard
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
