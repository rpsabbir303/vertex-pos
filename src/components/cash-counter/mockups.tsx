import { cashCounterPhotos } from "@/components/cash-counter/photos";

export { CounterStationUnit } from "@/components/cash-counter/legacy-checkout-station";

type MachineSize = "sm" | "md" | "lg" | "xl";
type MachineVariant = "hero" | "counting" | "product" | "operator" | "default";

const sizeMap: Record<MachineSize, string> = {
  sm: "max-w-[180px]",
  md: "max-w-[260px]",
  lg: "max-w-[340px]",
  xl: "max-w-[420px]",
};

function BillStack({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-0.5 ${className}`} aria-hidden>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-2 w-10 rounded-sm border border-[#1f6b42]/30 bg-[#1f6b42]/20 md:h-2.5 md:w-12"
          style={{ marginLeft: i * 2 }}
        />
      ))}
    </div>
  );
}

/** Automatic banknote counting machine — primary product visual. */
export function BanknoteCounterUnit({
  size = "lg",
  variant = "default",
  className = "",
  imageSrc,
}: {
  size?: MachineSize;
  variant?: MachineVariant;
  className?: string;
  imageSrc?: string;
}) {
  if (imageSrc) {
    return (
      <div className={`relative mx-auto w-full ${sizeMap[size]} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt="Vertex Cash Counter automatic banknote counting machine"
          className="w-full object-contain"
        />
      </div>
    );
  }

  const showHopperBills = variant === "counting" || variant === "hero" || variant === "operator";
  const showOutputBills = variant === "counting" || variant === "operator";
  const bodyH =
    size === "xl" ? "h-44 md:h-52" : size === "lg" ? "h-36 md:h-44" : size === "sm" ? "h-28" : "h-32 md:h-36";

  return (
    <div className={`relative mx-auto w-full ${sizeMap[size]} ${className}`}>
      {/* Top hopper */}
      <div className="relative mx-auto w-[78%]">
        <div className="rounded-t-xl border border-b-0 border-[#3a3a3a] bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] px-3 pb-2 pt-3">
          <div className="mx-auto h-8 w-full max-w-[120px] rounded-md border border-[#555] bg-[#1a1a1a] md:h-10">
            {showHopperBills ? (
              <div className="flex h-full items-center justify-center">
                <BillStack />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Main body */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-[#2a2a2a] bg-gradient-to-b from-[#3d3d3d] via-[#2a2a2a] to-[#141414] shadow-mock ${bodyH}`}
      >
        {/* Display panel */}
        <div className="absolute left-1/2 top-4 w-[62%] -translate-x-1/2 rounded-lg border border-[#444] bg-[#0f0f0f] px-3 py-2 md:top-5">
          <p className="text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-white/40">
            Count
          </p>
          <p className="text-center text-[18px] font-semibold tracking-wide text-orange md:text-[22px]">
            {variant === "counting" ? "248" : "000"}
          </p>
        </div>

        {/* Control buttons */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-5">
          <span className="h-2 w-6 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-orange" />
          <span className="h-2 w-6 rounded-full bg-white/20" />
        </div>

        <div className="absolute bottom-3 left-3 text-[8px] font-bold tracking-[0.16em] text-white/35">
          VERTEX
        </div>
      </div>

      {/* Front output tray */}
      <div className="relative mx-auto -mt-1 w-[88%]">
        <div className="rounded-b-xl border border-t-0 border-[#333] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] px-4 py-3">
          <div className="mx-auto flex h-6 items-center justify-center rounded-md border border-[#444] bg-[#111] md:h-8">
            {showOutputBills ? <BillStack className="scale-90" /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Premium hero presentation. */
export function CounterHeroVisual({
  imageSrc = cashCounterPhotos.hero,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="rounded-[32px] border border-line bg-white p-8 shadow-mock md:p-12">
        <BanknoteCounterUnit size="xl" variant="hero" imageSrc={imageSrc} />
      </div>
      <div
        aria-hidden
        className="absolute -bottom-4 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-full bg-black/10 blur-xl"
      />
    </div>
  );
}

/** Actively counting — bills in hopper and tray. */
export function CountingSceneVisual({
  imageSrc = cashCounterPhotos.counting,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-10">
      <BanknoteCounterUnit size="lg" variant="counting" imageSrc={imageSrc} />
    </div>
  );
}

/** Professional business environment. */
export function BusinessEnvironmentVisual({
  imageSrc = cashCounterPhotos.business,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#F0EDE7]">
      <div
        aria-hidden
        className="absolute left-4 top-4 rounded-lg border border-line/60 bg-white/60 px-3 py-2"
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
          Cash handling
        </p>
      </div>
      <div className="relative flex min-h-[320px] items-center justify-center px-6 py-14 md:min-h-[380px]">
        <BanknoteCounterUnit
          size="lg"
          variant="counting"
          imageSrc={imageSrc}
        />
      </div>
    </div>
  );
}

/** Operator using the machine — machine remains focal. */
export function OperatorSceneVisual({
  imageSrc = cashCounterPhotos.operator,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-white shadow-card">
      <div className="border-b border-line bg-[#FAF8F4] px-5 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Daily cash processing
        </p>
      </div>
      <div className="relative grid items-end gap-6 p-6 md:grid-cols-[1fr_1.2fr] md:p-8">
        <div className="hidden md:block" aria-hidden>
          <div className="mx-auto h-32 w-20 rounded-t-full bg-[#E8E4DC]" />
          <div className="mx-auto h-16 w-28 rounded-lg bg-[#F0EDE7]" />
        </div>
        <div className="flex justify-center">
          <BanknoteCounterUnit
            size="lg"
            variant="operator"
            imageSrc={imageSrc}
          />
        </div>
      </div>
    </div>
  );
}

/** Product only on white background. */
export function ProductOnlyVisual({
  imageSrc = cashCounterPhotos.product,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="rounded-[28px] border border-line bg-white p-10 shadow-card md:p-14">
      <BanknoteCounterUnit size="xl" variant="product" imageSrc={imageSrc} />
    </div>
  );
}

/** Use case preview card. */
export function UseCaseCard({ title }: { title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-mock">
      <div className="border-b border-line bg-[#FAF8F4] px-4 py-3">
        <p className="text-[12px] font-semibold text-ink">{title}</p>
      </div>
      <div className="flex justify-center p-4">
        <BanknoteCounterUnit size="sm" variant="product" />
      </div>
    </div>
  );
}

const hardwareCallouts = {
  left: [
    {
      id: "fast",
      title: "Fast banknote counting",
      copy: "Designed to process bills quickly for efficient daily cash handling.",
    },
    {
      id: "display",
      title: "Clear digital display",
      copy: "Easy-to-read counting information at a glance.",
    },
    {
      id: "feed",
      title: "Automatic bill feeding",
      copy: "Feeds banknotes through the counting mechanism with minimal manual effort.",
    },
  ],
  right: [
    {
      id: "accurate",
      title: "Accurate counting",
      copy: "Helps businesses count cash efficiently and consistently.",
    },
    {
      id: "operation",
      title: "Easy operation",
      copy: "Simple controls make everyday cash counting straightforward.",
    },
    {
      id: "build",
      title: "Commercial build",
      copy: "Compact professional hardware designed for regular business use.",
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
export function CounterProductDetailsDiagram({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="w-full">
      <div className="hidden items-center gap-4 lg:grid lg:grid-cols-[1fr_minmax(280px,400px)_1fr] lg:gap-6 xl:gap-10">
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
        <div className="relative mx-auto w-full max-w-[400px]">
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-2 top-10 rounded-[32px] bg-[#F0EDE7]"
          />
          <div className="relative px-2 py-8">
            <BanknoteCounterUnit
              size="xl"
              variant="counting"
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
            <BanknoteCounterUnit size="lg" variant="counting" imageSrc={imageSrc} />
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

/** Trust section atmospheric product visual. */
export function TrustAtmosphereVisual() {
  return (
    <div className="mx-auto mt-10 max-w-xs opacity-80">
      <BanknoteCounterUnit size="md" variant="product" />
    </div>
  );
}
