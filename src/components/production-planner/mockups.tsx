export function StatusPill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "high" | "medium" | "ready" | "neutral";
}) {
  const map = {
    high: "bg-[#FDECEC] text-[#C43A2F]",
    medium: "bg-[#FFF4E5] text-[#C56A12]",
    ready: "bg-[#E8F6EE] text-[#1F7A45]",
    neutral: "bg-fog text-ink-muted",
  }[tone];

  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${map}`}>
      {children}
    </span>
  );
}

export function PlannerWindow({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-panel border border-line bg-white shadow-mock ${className}`}
    >
      <div className="flex items-center justify-between border-b border-line bg-[#FAFAF8] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E35D5D]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E2B93B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#62C554]" />
        </div>
        <p className="text-[12px] font-medium text-ink-muted">{title}</p>
        <p className="text-[11px] text-ink-faint">{subtitle ?? "Vertex POS"}</p>
      </div>
      {children}
    </div>
  );
}

const planRows = [
  {
    item: "Herb Roasted Chicken",
    station: "Grill",
    forecast: 84,
    prepared: 52,
    needed: 32,
    time: "45 min",
    priority: "High" as const,
    progress: 62,
  },
  {
    item: "Smash Burger Patties",
    station: "Grill",
    forecast: 120,
    prepared: 80,
    needed: 40,
    time: "25 min",
    priority: "High" as const,
    progress: 67,
  },
  {
    item: "Hand-cut Fries",
    station: "Fry",
    forecast: 140,
    prepared: 95,
    needed: 45,
    time: "18 min",
    priority: "Medium" as const,
    progress: 68,
  },
  {
    item: "Rice",
    station: "Prep",
    forecast: 90,
    prepared: 70,
    needed: 20,
    time: "30 min",
    priority: "Medium" as const,
    progress: 78,
  },
  {
    item: "Caesar Salad Mix",
    station: "Prep",
    forecast: 62,
    prepared: 62,
    needed: 0,
    time: "Done",
    priority: "Ready" as const,
    progress: 100,
  },
  {
    item: "House Marinara",
    station: "Prep",
    forecast: 36,
    prepared: 20,
    needed: 16,
    time: "35 min",
    priority: "Medium" as const,
    progress: 56,
  },
];

export function ProductionDashboard() {
  return (
    <PlannerWindow title="Vertex POS · Production Planner" subtitle="Harbor Kitchen">
      <div className="grid md:grid-cols-[168px_1fr]">
        <aside className="hidden border-r border-line bg-[#FAFAF8] p-4 md:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
            Kitchen
          </p>
          {["Overview", "Production Plan", "Recipes", "Inventory", "Stations"].map(
            (item, index) => (
              <p
                key={item}
                className={`mt-2 rounded-lg px-3 py-2 text-[13px] ${
                  index === 1
                    ? "bg-orange font-semibold text-white"
                    : "text-ink-muted"
                }`}
              >
                {item}
              </p>
            ),
          )}
        </aside>

        <div className="p-4 md:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[15px] font-semibold text-ink">
                Today’s Production Plan
              </p>
              <p className="mt-1 text-[12px] text-ink-muted">
                Thursday, Aug 19 · Dinner shift · Harbor Kitchen
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-fog px-3 py-1 text-[11px] font-semibold text-ink">
                Dinner · 4:00–10:00
              </span>
              <StatusPill tone="medium">In production</StatusPill>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {[
              ["412", "Forecasted covers"],
              ["137", "Portions still needed"],
              ["18", "Batches in progress"],
              ["72%", "Prep complete"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-line bg-fog px-3 py-3">
                <p className="text-[20px] font-semibold tracking-tight text-ink">{value}</p>
                <p className="mt-0.5 text-[11px] text-ink-muted">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-[12px]">
              <thead>
                <tr className="text-[11px] uppercase tracking-wide text-ink-faint">
                  <th className="pb-2 pr-3 font-medium">Item</th>
                  <th className="pb-2 font-medium">Forecast</th>
                  <th className="pb-2 font-medium">Prepared</th>
                  <th className="pb-2 font-medium">Needed</th>
                  <th className="pb-2 font-medium">Priority</th>
                  <th className="pb-2 font-medium">Time</th>
                  <th className="pb-2 font-medium">Progress</th>
                </tr>
              </thead>
              <tbody>
                {planRows.map((row) => (
                  <tr key={row.item} className="border-t border-line">
                    <td className="py-3 pr-3">
                      <p className="font-semibold text-ink">{row.item}</p>
                      <p className="text-[11px] text-ink-faint">{row.station} station</p>
                    </td>
                    <td className="py-3 text-ink-muted">{row.forecast}</td>
                    <td className="py-3 text-ink-muted">{row.prepared}</td>
                    <td className="py-3 font-semibold text-ink">{row.needed}</td>
                    <td className="py-3">
                      <StatusPill
                        tone={
                          row.priority === "High"
                            ? "high"
                            : row.priority === "Ready"
                              ? "ready"
                              : "medium"
                        }
                      >
                        {row.priority}
                      </StatusPill>
                    </td>
                    <td className="py-3 text-ink-muted">{row.time}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-fog">
                          <div
                            className="h-full rounded-full bg-orange"
                            style={{ width: `${row.progress}%` }}
                          />
                        </div>
                        <span className="text-[11px] text-ink-faint">{row.progress}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PlannerWindow>
  );
}

const timeline = [
  {
    label: "Morning Prep",
    time: "7:00 AM",
    status: "Complete",
    items: [
      { name: "Chicken brine", qty: "24 kg", minutes: "40 min", station: "Prep", priority: "High" },
      { name: "Sauce base", qty: "18 L", minutes: "50 min", station: "Prep", priority: "Medium" },
    ],
  },
  {
    label: "Lunch Rush",
    time: "11:30 AM",
    status: "Complete",
    items: [
      { name: "Burger patties", qty: "80", minutes: "25 min", station: "Grill", priority: "High" },
      { name: "Hand-cut fries", qty: "95", minutes: "18 min", station: "Fry", priority: "High" },
    ],
  },
  {
    label: "Afternoon",
    time: "2:30 PM",
    status: "On track",
    items: [
      { name: "Salad mix", qty: "12 kg", minutes: "20 min", station: "Prep", priority: "Medium" },
      { name: "Rice", qty: "20 portions", minutes: "30 min", station: "Prep", priority: "Medium" },
    ],
  },
  {
    label: "Dinner Prep",
    time: "4:00 PM",
    status: "Due now",
    items: [
      { name: "Roast chicken", qty: "32", minutes: "45 min", station: "Grill", priority: "High" },
      { name: "Marinara", qty: "16 L", minutes: "35 min", station: "Prep", priority: "Medium" },
    ],
  },
  {
    label: "Dinner Rush",
    time: "5:30 PM",
    status: "Queued",
    items: [
      { name: "Burger patties", qty: "40", minutes: "25 min", station: "Grill", priority: "High" },
      { name: "Fries", qty: "45 portions", minutes: "18 min", station: "Fry", priority: "High" },
    ],
  },
];

export function RushTimelineBoard() {
  return (
    <PlannerWindow title="Service timeline" subtitle="Thu · Harbor Kitchen">
      <div className="border-b border-line px-4 py-3 md:px-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[13px] font-semibold text-ink">
            Prepare by window — not everything at 7 AM
          </p>
          <StatusPill tone="medium">Dinner prep due</StatusPill>
        </div>
        <div className="mt-4 hidden grid-cols-5 gap-2 lg:grid">
          {timeline.map((period, index) => (
            <div key={period.label} className="flex items-center">
              <div className="flex flex-1 flex-col items-center">
                <span
                  className={`h-3 w-3 rounded-full ${
                    period.status === "Complete" ? "bg-[#1F7A45]" : "bg-orange"
                  }`}
                />
                <p className="mt-2 text-center text-[11px] font-semibold text-ink">
                  {period.time}
                </p>
              </div>
              {index < timeline.length - 1 && (
                <span className="mb-5 h-px flex-1 bg-line" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-5">
        {timeline.map((period, index) => (
          <div
            key={period.label}
            className={`p-4 ${index < timeline.length - 1 ? "border-b border-line lg:border-b-0 lg:border-r" : ""}`}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-[13px] font-semibold text-ink">{period.label}</p>
              <StatusPill
                tone={
                  period.status === "Complete"
                    ? "ready"
                    : period.status === "Due now"
                      ? "high"
                      : "medium"
                }
              >
                {period.status}
              </StatusPill>
            </div>
            <p className="mt-1 text-[11px] font-medium text-orange lg:hidden">
              {period.time}
            </p>
            <div className="mt-4 space-y-3">
              {period.items.map((item) => (
                <div key={item.name} className="rounded-xl border border-line bg-fog p-3">
                  <p className="text-[13px] font-semibold text-ink">{item.name}</p>
                  <p className="mt-1 text-[11px] leading-5 text-ink-muted">
                    {item.qty} · {item.minutes}
                  </p>
                  <p className="mt-2 text-[11px] text-ink-faint">
                    {item.station} · {item.priority} priority
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PlannerWindow>
  );
}

export function ForecastFlowBoard() {
  const stages = [
    {
      label: "Sales Forecast",
      ui: (
        <>
          <p className="text-[22px] font-semibold tracking-tight">412 covers</p>
          <p className="mt-1 text-[11px] text-ink-muted">Thu dinner + 64 reservations</p>
          <div className="mt-3 flex h-10 items-end gap-1">
            {[28, 36, 32, 48, 44, 62, 70].map((h, i) => (
              <span
                key={i}
                className={`w-full rounded-sm ${i === 6 ? "bg-orange" : "bg-line"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </>
      ),
    },
    {
      label: "Production Plan",
      ui: (
        <>
          <p className="text-[13px] font-semibold">18 batches queued</p>
          <p className="mt-2 text-[12px] text-ink-muted">Chicken 32 · Patties 40 · Fries 45</p>
          <p className="mt-3 text-[11px] font-semibold text-orange">Gap vs prepared</p>
        </>
      ),
    },
    {
      label: "Recipe Requirements",
      ui: (
        <>
          <p className="text-[13px] font-semibold">Herb roasted chicken</p>
          <p className="mt-2 text-[12px] text-ink-muted">Yield 12 portions / batch</p>
          <p className="mt-1 text-[12px] text-ink-muted">3 batches · 45 min</p>
        </>
      ),
    },
    {
      label: "Ingredient Needs",
      ui: (
        <>
          {[
            ["Chicken thighs", "12.8 kg"],
            ["Ground beef", "18.4 kg"],
            ["Potatoes", "22.0 kg"],
          ].map(([name, qty]) => (
            <div key={name} className="flex justify-between text-[12px]">
              <span className="text-ink-muted">{name}</span>
              <span className="font-semibold text-ink">{qty}</span>
            </div>
          ))}
        </>
      ),
    },
    {
      label: "Kitchen Production",
      ui: (
        <>
          <p className="text-[13px] font-semibold">Published to 4 stations</p>
          <p className="mt-2 text-[12px] text-ink-muted">Prep · Grill · Fry · Assembly</p>
          <StatusPill tone="medium">Dinner prep 4:00 PM</StatusPill>
        </>
      ),
    },
  ];

  return (
    <PlannerWindow title="Forecast to kitchen" subtitle="Connected Vertex modules">
      <div className="p-4 md:p-6">
        <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
          {stages.map((stage, index) => (
            <div key={stage.label} className="flex min-w-0 flex-1 items-stretch">
              <div className="min-w-0 flex-1 rounded-2xl border border-line bg-fog p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
                  {stage.label}
                </p>
                <div className="mt-3 space-y-1">{stage.ui}</div>
              </div>
              {index < stages.length - 1 && (
                <div className="flex items-center px-1.5 text-orange lg:px-2">
                  <span className="hidden text-lg font-semibold lg:inline">→</span>
                  <span className="mx-auto py-2 text-sm lg:hidden">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PlannerWindow>
  );
}

export function StationTaskBoard() {
  const tasks = [
    { station: "Prep", item: "Chicken", qty: "32 portions", status: "In progress", tone: "medium" as const },
    { station: "Grill", item: "Burger Patties", qty: "40", status: "Due 4:20", tone: "high" as const },
    { station: "Fry", item: "Fries", qty: "45 portions", status: "Queued", tone: "neutral" as const },
    { station: "Assembly", item: "Ready for service", qty: "Expo hold", status: "Waiting", tone: "ready" as const },
  ];

  return (
    <PlannerWindow title="Station tasks" subtitle="Published 3:58 PM">
      <div className="p-4">
        <div className="mb-4 rounded-xl border border-line bg-fog p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Manager
          </p>
          <p className="mt-1 text-[13px] font-semibold text-ink">
            Dinner production plan published
          </p>
          <p className="mt-1 text-[12px] text-ink-muted">
            Harbor Kitchen · 18 batches · 4 stations
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {tasks.map((task) => (
            <div key={task.station} className="rounded-xl border border-line p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
                  {task.station}
                </p>
                <StatusPill tone={task.tone}>{task.status}</StatusPill>
              </div>
              <p className="mt-3 text-[14px] font-semibold text-ink">{task.item}</p>
              <p className="mt-1 text-[12px] text-ink-muted">{task.qty}</p>
            </div>
          ))}
        </div>
      </div>
    </PlannerWindow>
  );
}

export function OutcomeMetric({
  value,
  label,
  note,
  bars,
}: {
  value: string;
  label: string;
  note: string;
  bars: number[];
}) {
  return (
    <article className="rounded-card border border-line bg-white p-6 shadow-card">
      <p className="serif-tight text-4xl text-orange">{value}</p>
      <h3 className="mt-3 text-[18px] font-semibold">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-muted">{note}</p>
      <div className="mt-5 flex h-12 items-end gap-1.5">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`w-full rounded-sm ${i === bars.length - 1 ? "bg-orange" : "bg-fog"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </article>
  );
}
