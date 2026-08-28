import { StatusPill } from "@/components/production-planner/mockups";

type DeviceScreen = "service" | "order" | "table" | "dashboard";
type DeviceSize = "sm" | "md" | "lg" | "xl";

const deviceSizeMap: Record<DeviceSize, string> = {
  sm: "max-w-[200px]",
  md: "max-w-[280px]",
  lg: "max-w-[360px]",
  xl: "max-w-[440px]",
};

function DeviceScreenContent({ screen }: { screen: DeviceScreen }) {
  switch (screen) {
    case "order":
      return <MenuOrderScreen />;
    case "table":
      return <TableCheckScreen />;
    case "dashboard":
      return <ServiceDashboard />;
    default:
      return <TodaysServiceScreen />;
  }
}

/** Primary POS Device hardware visual — swap imageSrc when photography is available. */
export function DeviceUnit({
  size = "lg",
  screen = "service",
  className = "",
  imageSrc,
}: {
  size?: DeviceSize;
  screen?: DeviceScreen;
  className?: string;
  imageSrc?: string;
}) {
  return (
    <div className={`relative mx-auto w-full ${deviceSizeMap[size]} ${className}`}>
      <TerminalFrame>
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt="Vertex POS Device"
            className="aspect-[4/3] w-full object-contain"
          />
        ) : (
          <DeviceScreenContent screen={screen} />
        )}
      </TerminalFrame>
    </div>
  );
}

/** Premium hero presentation on white stage. */
export function DeviceHeroVisual({ imageSrc }: { imageSrc?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="rounded-[32px] border border-line bg-white p-10 shadow-mock md:p-14">
        <DeviceUnit size="xl" screen="service" imageSrc={imageSrc} />
      </div>
      <div
        aria-hidden
        className="absolute -bottom-4 left-1/2 h-4 w-[70%] -translate-x-1/2 rounded-full bg-black/10 blur-xl"
      />
    </div>
  );
}

/** Counter environment — device as visual hero, no stock photography. */
export function DeviceCounterScene({
  screen = "order",
  size = "xl" as DeviceSize,
}: {
  screen?: DeviceScreen;
  size?: DeviceSize;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-line bg-[#F0EDE7]">
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-0 h-20 rounded-t-[20px] bg-[#E8E4DC]"
      />
      <div className="relative flex min-h-[320px] items-end justify-center px-6 pb-8 pt-12 md:min-h-[380px]">
        <DeviceUnit size={size} screen={screen} />
      </div>
    </div>
  );
}

export function TerminalFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-[28px] border border-[#d8d8d6] bg-[#2b2b2b] p-3 shadow-mock md:p-4">
        <div className="mb-3 hidden items-center justify-between px-1 md:flex">
          <span className="text-[10px] font-medium tracking-wide text-white/40">VERTEX POS</span>
          <span className="h-1.5 w-14 rounded-full bg-white/20" />
          <span className="text-[10px] text-white/40">15.6″</span>
        </div>
        <div className="overflow-hidden rounded-2xl bg-white">{children}</div>
      </div>
      <div className="mx-auto h-6 w-16 bg-[#2b2b2b]" />
      <div className="mx-auto h-1.5 w-40 rounded-full bg-[#1a1a1a]" />
    </div>
  );
}

export function TodaysServiceScreen() {
  return (
    <div className="p-4 md:p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Today&apos;s service
          </p>
          <p className="mt-1 text-[15px] font-semibold">Harbor Dining Room</p>
        </div>
        <StatusPill tone="ready">Live</StatusPill>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["Tables", "18 Active"],
          ["Orders", "42 Open"],
          ["Today's sales", "$4,286"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-line bg-fog px-3 py-2.5">
            <p className="text-[11px] text-ink-muted">{label}</p>
            <p className="mt-1 text-[14px] font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {[
          ["Table 12", "$86.40", "Seated"],
          ["Table 14", "$124.80", "Ordered"],
          ["Table 18", "$52.60", "Pay"],
        ].map(([table, amount, status]) => (
          <div
            key={table}
            className="flex items-center justify-between rounded-xl border border-line bg-fog px-3 py-2"
          >
            <p className="text-[13px] font-semibold">{table}</p>
            <div className="flex items-center gap-3">
              <p className="text-[13px] font-semibold">{amount}</p>
              <StatusPill tone={status === "Pay" ? "medium" : "neutral"}>{status}</StatusPill>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <span className="rounded-lg bg-orange py-2.5 text-center text-[12px] font-semibold text-white">
          New Order
        </span>
        <span className="rounded-lg border border-line bg-fog py-2.5 text-center text-[12px] font-semibold">
          View Tables
        </span>
      </div>
    </div>
  );
}

export function TableCheckScreen() {
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
          Today&apos;s service
        </p>
        <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold">
          {["Tables", "Orders", "Menu", "Payments"].map((tab, i) => (
            <span
              key={tab}
              className={`rounded-full px-3 py-1 ${
                i === 0 ? "bg-orange text-white" : "bg-fog text-ink-muted"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between">
        <div>
          <p className="text-[20px] font-semibold tracking-tight">Table 18</p>
          <p className="mt-1 text-[13px] text-ink-muted">4 guests</p>
        </div>
        <StatusPill tone="medium">Open check</StatusPill>
      </div>
      <div className="mt-4 text-sm">
        {[
          ["2 × Ribeye", "$72.00"],
          ["1 × Pasta", "$18.00"],
          ["2 × Drinks", "$24.00"],
          ["Subtotal", "$114.00"],
          ["Tax", "$11.40"],
        ].map(([item, amount]) => (
          <div key={item} className="flex justify-between border-b border-line py-2">
            <span className="text-ink-muted">{item}</span>
            <span className="font-semibold">{amount}</span>
          </div>
        ))}
        <div className="flex justify-between py-2.5">
          <span className="font-semibold">Total</span>
          <span className="text-[18px] font-semibold">$125.40</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <span className="rounded-lg border border-line bg-fog py-2.5 text-center text-[12px] font-semibold">
          Send to Kitchen
        </span>
        <span className="rounded-lg bg-orange py-2.5 text-center text-[12px] font-semibold text-white">
          Pay
        </span>
      </div>
    </div>
  );
}

export function ServiceDashboard() {
  const hours = [28, 36, 42, 58, 74, 86, 80, 64, 48];
  return (
    <div className="p-5 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Service performance
          </p>
          <p className="mt-1 text-[15px] font-semibold">Friday dinner · Harbor Dining Room</p>
        </div>
        <StatusPill tone="ready">Live service</StatusPill>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {[
          ["Average order time", "02:14"],
          ["Payment time", "00:18"],
          ["Orders / hour", "86"],
          ["Tables active", "24"],
          ["Peak service", "7:30 PM"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-line bg-fog px-3 py-3">
            <p className="text-[11px] text-ink-muted">{label}</p>
            <p className="mt-1 text-[20px] font-semibold tracking-tight">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-[12px] font-semibold text-ink">Orders by hour</p>
          <div className="mt-3 flex h-28 items-end gap-1.5">
            {hours.map((h, i) => (
              <span
                key={i}
                className={`w-full rounded-sm ${i === 5 ? "bg-orange" : "bg-line"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-ink-faint">
            <span>4 PM</span>
            <span>8 PM</span>
            <span>12 AM</span>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-fog p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Operating smoothly
          </p>
          <p className="mt-3 text-[36px] font-semibold tracking-tight">84%</p>
          <p className="mt-1 text-[13px] text-ink-muted">Tickets on time this hour</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-line">
            <div className="h-full w-[84%] rounded-full bg-orange" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Staff ordering screen — menu + cart focused on the POS Device. */
export function MenuOrderScreen() {
  return (
    <div className="p-3 md:p-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            New order
          </p>
          <p className="mt-0.5 text-[13px] font-semibold">Table 12 · Walk-in</p>
        </div>
        <StatusPill tone="neutral">Staff</StatusPill>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Mains", "Sides", "Drinks", "Dessert"].map((cat, i) => (
          <span
            key={cat}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
              i === 0 ? "bg-orange text-white" : "bg-fog text-ink-muted"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["Ribeye", "Pasta", "Burger", "Salmon", "Salad", "Tacos"].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-line bg-fog px-2 py-2.5 text-center text-[11px] font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-line bg-fog p-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
          Current check
        </p>
        <div className="mt-2 space-y-1.5 text-[12px]">
          <div className="flex justify-between">
            <span>1 × Ribeye · Medium</span>
            <span className="font-semibold">$36.00</span>
          </div>
          <div className="flex justify-between">
            <span>2 × Sparkling water</span>
            <span className="font-semibold">$8.00</span>
          </div>
          <div className="flex justify-between border-t border-line pt-1.5 font-semibold">
            <span>Total</span>
            <span>$44.00</span>
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <span className="rounded-lg border border-line py-2 text-center text-[11px] font-semibold">
          Send to Kitchen
        </span>
        <span className="rounded-lg bg-orange py-2 text-center text-[11px] font-semibold text-white">
          Checkout
        </span>
      </div>
    </div>
  );
}

const deviceDetailCallouts = {
  left: [
    {
      id: "display",
      title: "Touchscreen display",
      copy: '15.6" Full HD touchscreen for fast, responsive staff workflows.',
    },
    {
      id: "interface",
      title: "Staff interface",
      copy: "Clear navigation for orders, tables, menu, and checkout.",
    },
    {
      id: "build",
      title: "Commercial build",
      copy: "Restaurant-ready enclosure designed for everyday counter use.",
    },
  ],
  right: [
    {
      id: "software",
      title: "Vertex POS",
      copy: "Runs Vertex POS for orders, kitchen routing, and reporting.",
    },
    {
      id: "payments",
      title: "Checkout workflow",
      copy: "Integrated payment and checkout from the same terminal.",
    },
    {
      id: "connectivity",
      title: "Connectivity",
      copy: "Wi-Fi, Ethernet, and Bluetooth for your restaurant setup.",
    },
  ],
} as const;

function DeviceDetailCallout({
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

function DeviceMobileDetailCard({
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

/** Annotated hardware diagram — premium product presentation. */
export function DeviceProductDetailsDiagram({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className="w-full">
      <div className="hidden items-center gap-4 lg:grid lg:grid-cols-[1fr_minmax(300px,440px)_1fr] lg:gap-6 xl:gap-10">
        <div className="flex flex-col justify-center gap-10 py-4">
          {deviceDetailCallouts.left.map((item) => (
            <DeviceDetailCallout
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
            <DeviceUnit size="xl" screen="table" imageSrc={imageSrc} />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 py-4">
          {deviceDetailCallouts.right.map((item) => (
            <DeviceDetailCallout
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
            <DeviceUnit size="lg" screen="table" imageSrc={imageSrc} />
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[...deviceDetailCallouts.left, ...deviceDetailCallouts.right].map(
            (item) => (
              <DeviceMobileDetailCard
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
