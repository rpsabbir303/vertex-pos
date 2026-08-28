import { DeviceUnit } from "@/components/pos-device/mockups";

type DrawerVisual = "open" | "closed";
type DrawerSize = "sm" | "md" | "lg" | "xl";

const drawerSizeMap: Record<DrawerSize, string> = {
  sm: "max-w-[220px]",
  md: "max-w-[300px]",
  lg: "max-w-[380px]",
  xl: "max-w-[420px]",
};

/** Open cash drawer with bill and coin tray. */
export function CashDrawerOpen({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const billH =
    size === "lg" ? "h-[72px] md:h-28" : size === "sm" ? "h-14" : "h-16 md:h-20";
  const coinH =
    size === "lg" ? "h-14 md:h-[68px]" : size === "sm" ? "h-11" : "h-12 md:h-14";

  return (
    <div className={`w-full ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#2a2a2a] to-[#111] p-2.5 shadow-mock md:p-3">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-[10px] font-bold tracking-[0.18em] text-white/55">
            VERTEX
          </span>
          <span className="h-1 w-10 rounded-full bg-white/15" />
        </div>
        <div className="rounded-xl bg-gradient-to-b from-[#e8dcc6] to-[#c9b896] p-2.5 md:p-3">
          <div className="grid grid-cols-5 gap-1 md:gap-1.5">
            {["$1", "$5", "$10", "$20", "$50"].map((d) => (
              <div
                key={d}
                className="relative overflow-hidden rounded border border-[#a89068] bg-[#bfa882]"
              >
                <div className={`flex ${billH} flex-col items-center justify-end pb-1.5`}>
                  <div className="absolute inset-x-0.5 top-1 space-y-0.5">
                    <div className="h-1.5 rounded-sm bg-[#1f6b42]/70" />
                    <div className="h-1.5 rounded-sm bg-[#1f6b42]/45" />
                    <div className="h-1.5 rounded-sm bg-[#1f6b42]/30" />
                  </div>
                  <span className="relative z-10 rounded bg-[#1f6b42] px-1 py-0.5 text-[8px] font-bold text-white md:text-[9px]">
                    {d}
                  </span>
                </div>
                <div className="absolute inset-x-1 top-[42%] h-0.5 rounded bg-[#8a734f]/60" />
              </div>
            ))}
          </div>
          <div className="mt-1.5 grid grid-cols-5 gap-1 md:gap-1.5">
            {["1¢", "5¢", "10¢", "25¢", "$1"].map((c) => (
              <div
                key={c}
                className={`flex ${coinH} flex-col items-center justify-center rounded border border-[#a89068] bg-[#bfa882]`}
              >
                <span className="h-6 w-6 rounded-full border border-[#8a734f] bg-gradient-to-b from-[#d4c4a4] to-[#b8a47e] shadow-sm md:h-7 md:w-7" />
                <span className="mt-1 text-[8px] font-semibold text-[#5c4a30] md:text-[9px]">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between px-1">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-[#222]">
            <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
          </span>
          <span className="h-1 w-12 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}

/** Closed cash drawer with lock indicator. */
export function CashDrawerClosed({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-[#1a1a1a] bg-gradient-to-b from-[#2a2a2a] to-[#0f0f0f] p-3 shadow-mock">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-[10px] font-bold tracking-[0.18em] text-white/50">
            VERTEX
          </span>
          <span className="text-[10px] text-white/35">Locked</span>
        </div>
        <div className="relative flex h-32 items-end justify-center rounded-xl border border-white/10 bg-[#161616] pb-5 md:h-40">
          <div className="h-2 w-20 rounded-full bg-white/20" />
          <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#1f1f1f]">
            <span className="h-3 w-3 rounded-full bg-[#d4af37]" />
            <span className="absolute -right-2 top-1/2 h-1.5 w-4 -translate-y-1/2 rounded-sm bg-[#d4af37]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Primary Cash Counter Box hardware visual. */
export function CashBoxUnit({
  size = "lg",
  visual = "open",
  className = "",
  imageSrc,
}: {
  size?: DrawerSize;
  visual?: DrawerVisual;
  className?: string;
  imageSrc?: string;
}) {
  const innerSize = size === "xl" || size === "lg" ? "lg" : size === "sm" ? "sm" : "md";

  return (
    <div className={`relative mx-auto w-full ${drawerSizeMap[size]} ${className}`}>
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt="Vertex Cash Counter Box"
          className="w-full object-contain"
        />
      ) : visual === "closed" ? (
        <CashDrawerClosed />
      ) : (
        <CashDrawerOpen size={innerSize} />
      )}
    </div>
  );
}

/** Premium hero presentation on white stage. */
export function CashBoxHeroVisual({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="rounded-[32px] border border-line bg-white p-10 shadow-mock md:p-14">
        <CashBoxUnit size="xl" visual="closed" imageSrc={imageSrc} />
      </div>
      <div
        aria-hidden
        className="absolute -bottom-4 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-full bg-black/10 blur-xl"
      />
    </div>
  );
}

/** Checkout environment with cash drawer. */
export function CashBoxCheckoutScene({
  size = "lg" as DrawerSize,
  visual = "open" as DrawerVisual,
}: {
  size?: DrawerSize;
  visual?: DrawerVisual;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#F0EDE7]">
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-0 h-16 rounded-t-[20px] bg-[#E8E4DC]"
      />
      <div className="relative grid min-h-[320px] items-end gap-6 px-6 pb-8 pt-12 md:min-h-[380px] md:grid-cols-2">
        <div className="flex justify-center">
          <DeviceUnit size="sm" screen="table" />
        </div>
        <div className="flex justify-center">
          <CashBoxUnit size={size} visual={visual} />
        </div>
      </div>
    </div>
  );
}

/** Business environment scene. */
export function CashBoxBusinessScene({
  size = "lg" as DrawerSize,
}: {
  size?: DrawerSize;
}) {
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
        <CashBoxUnit size={size} visual="open" />
      </div>
    </div>
  );
}

/** Ecosystem visual with Vertex hardware. */
export function CashBoxEcosystemVisual() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 rounded-2xl border border-orange/20 bg-orange-soft/30 p-6 shadow-card md:p-8">
        <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Complete checkout setup
        </p>
        <div className="grid items-end gap-4 md:grid-cols-3">
          <DeviceUnit size="sm" screen="service" />
          <CashBoxUnit size="md" visual="open" />
          <div className="hidden justify-center md:flex">
            <CashBoxUnit size="sm" visual="closed" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-2xl border border-line bg-white p-5 shadow-card">
        <CashBoxUnit size="sm" visual="open" />
      </div>
      <div className="flex items-center justify-center rounded-2xl border border-line bg-white p-5 shadow-card">
        <CashBoxUnit size="sm" visual="closed" />
      </div>
    </div>
  );
}

/** Small business-type preview card. */
export function CashBoxBusinessCard({
  title,
  visual = "open",
}: {
  title: string;
  visual?: DrawerVisual;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-mock">
      <div className="border-b border-line bg-[#FAF8F4] px-4 py-3">
        <p className="text-[12px] font-semibold text-ink">{title}</p>
      </div>
      <div className="p-4">
        <CashBoxUnit size="sm" visual={visual} />
      </div>
    </div>
  );
}

const cashBoxDetailCallouts = {
  left: [
    {
      id: "bills",
      title: "Bill compartments",
      copy: "Multi-slot bill organization for faster access during checkout.",
    },
    {
      id: "coins",
      title: "Coin tray",
      copy: "Dedicated coin tray keeps denominations organized.",
    },
    {
      id: "handle",
      title: "Drawer access",
      copy: "Easy front access during busy counter service.",
    },
  ],
  right: [
    {
      id: "lock",
      title: "Locking mechanism",
      copy: "Lockable drawer with key for secure cash storage.",
    },
    {
      id: "steel",
      title: "Steel housing",
      copy: "Commercial-grade steel for everyday restaurant use.",
    },
    {
      id: "footprint",
      title: "Countertop base",
      copy: "Counter-ready compact design for your checkout area.",
    },
  ],
} as const;

function CashBoxDetailCallout({
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

function CashBoxMobileDetailCard({
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
export function CashBoxProductDetailsDiagram({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="w-full">
      <div className="hidden items-center gap-4 lg:grid lg:grid-cols-[1fr_minmax(300px,440px)_1fr] lg:gap-6 xl:gap-10">
        <div className="flex flex-col justify-center gap-10 py-4">
          {cashBoxDetailCallouts.left.map((item) => (
            <CashBoxDetailCallout
              key={item.id}
              title={item.title}
              copy={item.copy}
              side="left"
            />
          ))}
        </div>
        <div className="relative mx-auto w-full max-w-[440px]">
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-2 top-10 rounded-[32px] bg-[#F0EDE7]"
          />
          <div className="relative px-2 py-8">
            <CashBoxUnit size="lg" visual="open" imageSrc={imageSrc} />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 py-4">
          {cashBoxDetailCallouts.right.map((item) => (
            <CashBoxDetailCallout
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
            <CashBoxUnit size="lg" visual="open" imageSrc={imageSrc} />
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[...cashBoxDetailCallouts.left, ...cashBoxDetailCallouts.right].map(
            (item) => (
              <CashBoxMobileDetailCard
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

/** Open drawer internal organization visual. */
export function CashBoxOpenDrawerVisual() {
  return (
    <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-12">
      <CashBoxUnit size="xl" visual="open" />
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {["Bill slots", "Coin tray", "Lock", "Vertex POS"].map((label) => (
          <span
            key={label}
            className="rounded-full border border-line bg-[#FAF8F4] px-3 py-1 text-[11px] font-medium text-ink-muted"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
