/**
 * Legacy checkout-station visuals — kept for ecosystem pages that still reference them.
 * The Cash Counter product page uses banknote counting machine visuals instead.
 */
import { DeviceUnit } from "@/components/pos-device/mockups";
import { MonitorUnit } from "@/components/pos-monitor/mockups";

type CounterSize = "sm" | "md" | "lg" | "xl";
type CounterLayout = "full" | "device" | "monitor" | "minimal";

const counterSizeMap: Record<
  CounterSize,
  {
    surface: string;
    device: "sm" | "md" | "lg";
    monitor: "sm" | "md" | "lg" | "xl";
  }
> = {
  sm: { surface: "min-h-[140px]", device: "sm", monitor: "sm" },
  md: { surface: "min-h-[180px]", device: "md", monitor: "md" },
  lg: { surface: "min-h-[220px] md:min-h-[260px]", device: "lg", monitor: "lg" },
  xl: { surface: "min-h-[260px] md:min-h-[300px]", device: "lg", monitor: "xl" },
};

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
      <div
        className={`relative overflow-hidden rounded-t-2xl border border-[#c8c4bc] bg-gradient-to-b from-[#f5f2ec] to-[#e8e4dc] shadow-mock ${scale.surface}`}
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />
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
        {layout === "full" ? (
          <div
            aria-hidden
            className="absolute bottom-2 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#d4cfc6]"
          />
        ) : null}
      </div>
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
      <div className="mx-auto mt-1 flex w-[88%] justify-between">
        <div className="h-3 w-3 rounded-b-sm bg-[#2a2826] md:h-4 md:w-4" />
        <div className="h-3 w-3 rounded-b-sm bg-[#2a2826] md:h-4 md:w-4" />
      </div>
    </div>
  );
}

/** @deprecated Used by POS Printer ecosystem visual only */
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
        <img src={imageSrc} alt="" className="w-full object-contain" />
      </div>
    );
  }
  return (
    <div className={`relative mx-auto w-full max-w-xl ${className}`}>
      <CounterBase size={size} layout={layout} />
    </div>
  );
}
