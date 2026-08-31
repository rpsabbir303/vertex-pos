/**
 * Vertex Smart POS Table visuals.
 * All-in-one countertop workstation — distinct from POS Device and POS Monitor.
 */

type TableSize = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<TableSize, string> = {
  sm: "max-w-[220px]",
  md: "max-w-[340px]",
  lg: "max-w-[440px]",
  xl: "max-w-[520px]",
};

/** Restaurant POS interface — menu + current order + checkout. */
export function SmartPosScreenUI({
  focus = "full",
}: {
  focus?: "full" | "menu" | "order";
}) {
  const categories = ["All", "Pizza", "Burgers", "Pasta", "Drinks"];
  const items = [
    { name: "Margherita", price: "$14", tone: "from-[#e8d5c4] to-[#d4b89a]" },
    { name: "Classic Burger", price: "$16", tone: "from-[#e4cbb0] to-[#c9a882]" },
    { name: "Penne Pasta", price: "$15", tone: "from-[#e6d8c8] to-[#d0bca4]" },
    { name: "Garden Salad", price: "$11", tone: "from-[#d8e4d0] to-[#b8c9a8]" },
    { name: "Crispy Fries", price: "$6", tone: "from-[#efe0c4] to-[#ddc896]" },
    { name: "Iced Tea", price: "$4", tone: "from-[#d4e4ec] to-[#aec8d8]" },
  ];

  const orderLines = [
    ["Classic Burger", "$16.00"],
    ["Crispy Fries", "$6.00"],
    ["Iced Tea", "$4.00"],
  ];

  return (
    <div className="flex h-full min-h-0 overflow-hidden rounded-[10px] bg-[#f7f5f2] text-ink">
      {/* Main menu */}
      <div
        className={`flex min-w-0 flex-col p-2 md:p-2.5 ${
          focus === "order" ? "hidden" : "flex-1"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-[7px] font-bold tracking-[0.16em] text-ink/35 md:text-[8px]">
            VERTEX
          </span>
          <div className="h-4 flex-1 max-w-[90px] rounded-full border border-line bg-white px-2 text-[6px] leading-4 text-ink-faint md:max-w-[120px] md:text-[7px]">
            Search menu…
          </div>
        </div>
        <div className="mt-1.5 flex gap-1 overflow-hidden">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`shrink-0 rounded-full px-1.5 py-0.5 text-[6px] font-semibold md:text-[7px] ${
                i === 0 ? "bg-night text-white" : "bg-white text-ink-muted"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="mt-1.5 grid flex-1 grid-cols-3 gap-1 content-start md:gap-1.5">
          {items.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-md border border-line bg-white"
            >
              <div
                className={`h-5 bg-gradient-to-br ${item.tone} md:h-7`}
              />
              <div className="p-1">
                <p className="truncate text-[6px] font-semibold leading-tight md:text-[7px]">
                  {item.name}
                </p>
                <p className="mt-0.5 text-[6px] font-bold text-orange md:text-[7px]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current order panel */}
      <div
        className={`flex w-[38%] min-w-[88px] flex-col border-l border-line bg-white p-2 md:min-w-[110px] md:p-2.5 ${
          focus === "menu" ? "hidden" : ""
        } ${focus === "order" ? "w-full border-l-0" : ""}`}
      >
        <p className="text-[7px] font-semibold uppercase tracking-[0.12em] text-ink-muted md:text-[8px]">
          Current order
        </p>
        <div className="mt-1.5 flex-1 space-y-1 overflow-hidden">
          {orderLines.map(([name, price]) => (
            <div key={name} className="flex justify-between gap-1 text-[6px] md:text-[7px]">
              <span className="truncate font-medium text-ink">{name}</span>
              <span className="shrink-0 font-semibold">{price}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto space-y-0.5 border-t border-line pt-1.5 text-[6px] md:text-[7px]">
          <div className="flex justify-between text-ink-muted">
            <span>Subtotal</span>
            <span>$26.00</span>
          </div>
          <div className="flex justify-between text-ink-muted">
            <span>Tax</span>
            <span>$2.08</span>
          </div>
          <div className="flex justify-between text-[7px] font-semibold text-ink md:text-[8px]">
            <span>Total</span>
            <span>$28.08</span>
          </div>
          <div className="mt-1 rounded-md bg-orange py-1.5 text-center text-[7px] font-semibold text-white md:text-[8px]">
            Checkout
          </div>
        </div>
      </div>
    </div>
  );
}

/** Primary Smart POS Table hardware unit. */
export function SmartPosTableUnit({
  className = "",
  size = "lg",
  screenFocus = "full",
  showPorts = true,
  imageSrc,
}: {
  className?: string;
  size?: TableSize;
  screenFocus?: "full" | "menu" | "order";
  showPorts?: boolean;
  imageSrc?: string;
}) {
  if (imageSrc) {
    return (
      <div className={`relative mx-auto w-full ${sizeMap[size]} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt="Vertex Smart POS Table"
          className="w-full object-contain"
        />
      </div>
    );
  }

  const screenH =
    size === "xl"
      ? "h-[168px] md:h-[200px]"
      : size === "lg"
        ? "h-[140px] md:h-[168px]"
        : size === "sm"
          ? "h-[96px]"
          : "h-[120px] md:h-[140px]";

  return (
    <div className={`relative mx-auto w-full ${sizeMap[size]} ${className}`}>
      {/* Main enclosure */}
      <div className="overflow-hidden rounded-[20px] border border-[#1a1a1a] bg-gradient-to-b from-[#2a2a2a] via-[#161616] to-[#0a0a0a] p-2.5 shadow-mock md:rounded-[24px] md:p-3">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-[8px] font-bold tracking-[0.18em] text-white/45 md:text-[9px]">
            VERTEX
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3dd68c]" />
            <span className="text-[8px] text-white/35">Ready</span>
          </span>
        </div>

        {/* Touchscreen */}
        <div
          className={`relative overflow-hidden rounded-[12px] border border-[#333] bg-[#111] p-1 ${screenH}`}
        >
          <SmartPosScreenUI focus={screenFocus} />
        </div>

        {/* Base controls row: contactless + ports */}
        <div className="mt-2.5 flex items-end justify-between gap-3 px-0.5">
          <div className="flex flex-col items-start gap-1">
            <span className="text-[6px] font-semibold uppercase tracking-[0.14em] text-white/30">
              Tap
            </span>
            <div className="flex h-7 w-14 items-center justify-center rounded-md border border-white/10 bg-[#111] md:h-8 md:w-16">
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-orange/35" />
                <span className="h-1.5 w-1.5 rounded-full bg-orange/80" />
              </span>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <span className="h-1 w-12 rounded-full bg-white/10 md:w-16" />
          </div>
          {showPorts ? (
            <div className="flex items-end gap-1.5 pb-0.5">
              <span className="h-2.5 w-4 rounded-[2px] border border-white/15 bg-[#0d0d0d]" />
              <span className="h-2.5 w-4 rounded-[2px] border border-white/15 bg-[#0d0d0d]" />
              <span className="h-2 w-2.5 rounded-full border border-white/15 bg-[#0d0d0d]" />
            </div>
          ) : (
            <div className="w-14" />
          )}
        </div>
      </div>

      {/* Table foot / countertop silhouette */}
      <div className="mx-auto -mt-0.5 h-2.5 w-[94%] rounded-b-[14px] border border-t-0 border-[#1a1a1a] bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
    </div>
  );
}

/** Premium hero on wooden countertop. */
export function SmartPosTableHeroVisual({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[32px] border border-line shadow-mock">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,#f4efe6_0%,#e8dfd0_55%,#c4a574_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[36%] bg-[repeating-linear-gradient(90deg,#b8956a_0px,#b8956a_2px,#c4a574_2px,#c4a574_18px)] opacity-40"
      />
      <div className="relative flex min-h-[360px] items-end justify-center px-6 pb-10 pt-12 md:min-h-[420px] md:px-10 md:pb-12">
        <SmartPosTableUnit size="xl" imageSrc={imageSrc} />
      </div>
    </div>
  );
}

/** Counter environment — 3/4 product presentation. */
export function SmartPosTableCounterScene({
  screenFocus = "full",
}: {
  screenFocus?: "full" | "menu" | "order";
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#F0EDE7]">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#c4a574]/45 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-[12%] h-2 rounded-full bg-[#a8885c]/35"
      />
      <div className="relative flex min-h-[320px] items-end justify-center px-6 pb-10 pt-12 md:min-h-[380px]">
        <SmartPosTableUnit size="lg" screenFocus={screenFocus} />
      </div>
    </div>
  );
}

/** Touchscreen-focused scene. */
export function SmartPosTableScreenScene() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-white shadow-card">
      <div className="border-b border-line bg-[#FAF8F4] px-5 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Touchscreen POS
        </p>
      </div>
      <div className="p-6 md:p-8">
        <SmartPosTableUnit size="lg" screenFocus="full" />
        <p className="mt-5 text-center text-[12px] text-ink-faint">
          Menu · Order · Total · Checkout
        </p>
      </div>
    </div>
  );
}

/** Restaurant counter lifestyle scene. */
export function SmartPosTableRestaurantScene() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#EDE8E0]">
      <div
        aria-hidden
        className="absolute left-4 top-4 rounded-lg border border-line/60 bg-white/60 px-3 py-2"
      >
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
          Service counter
        </p>
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#b8956a]/40 to-transparent"
      />
      <div className="relative flex min-h-[300px] items-end justify-center px-6 pb-10 pt-14 md:min-h-[360px]">
        <SmartPosTableUnit size="lg" />
      </div>
    </div>
  );
}

/** Product-only white studio. */
export function SmartPosTableProductOnlyVisual({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="rounded-[28px] border border-line bg-white p-8 shadow-card md:p-12">
      <SmartPosTableUnit size="xl" imageSrc={imageSrc} />
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {["Touchscreen", "Checkout", "Contactless", "Countertop"].map((label) => (
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

const hardwareCallouts = {
  left: [
    {
      id: "touch",
      title: "Built-in touchscreen",
      copy: "Large touchscreen interface designed for fast staff interaction.",
    },
    {
      id: "workstation",
      title: "Integrated POS workstation",
      copy: "Combines POS interaction and countertop operation in one setup.",
    },
    {
      id: "counter",
      title: "Countertop design",
      copy: "Designed to fit naturally into professional service counters.",
    },
  ],
  right: [
    {
      id: "pay",
      title: "Contactless payment area",
      copy: "Integrated payment interaction area for supported checkout workflows.",
    },
    {
      id: "ports",
      title: "Connectivity",
      copy: "Front-facing connectivity designed for practical everyday operation.",
    },
    {
      id: "build",
      title: "Restaurant-ready build",
      copy: "Professional enclosure designed for repeated business use.",
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

/** Annotated hardware details. */
export function SmartPosTableDetailsDiagram({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="w-full">
      <div className="hidden items-center gap-4 lg:grid lg:grid-cols-[1fr_minmax(300px,460px)_1fr] lg:gap-6 xl:gap-10">
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
        <div className="relative mx-auto w-full max-w-[460px]">
          <div
            aria-hidden
            className="absolute inset-x-6 bottom-2 top-8 rounded-[32px] bg-[#F0EDE7]"
          />
          <div className="relative px-2 py-8">
            <SmartPosTableUnit size="xl" imageSrc={imageSrc} />
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
        <div className="mx-auto max-w-md">
          <div className="rounded-[28px] border border-line bg-white p-6 shadow-card">
            <SmartPosTableUnit size="lg" imageSrc={imageSrc} />
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
export function SmartPosTableTrustAtmosphereVisual() {
  return (
    <div className="mx-auto mt-10 max-w-xs opacity-70">
      <SmartPosTableUnit size="md" />
    </div>
  );
}
