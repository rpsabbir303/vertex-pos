import Image from "next/image";
import { Container } from "@/components/ui/LayoutBits";
import { StatusPill } from "@/components/production-planner/mockups";

const kitchenImage =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80";

const pipeline = [
  {
    label: "Sales Forecast",
    body: (
      <>
        <p className="text-[20px] font-semibold tracking-tight">412 covers</p>
        <p className="mt-1 text-[11px] leading-4 text-ink-muted">
          Thu dinner + 64 reservations
        </p>
        <div className="mt-3 flex h-9 items-end gap-0.5">
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
    body: (
      <>
        <p className="text-[13px] font-semibold">18 batches queued</p>
        <p className="mt-2 text-[12px] leading-5 text-ink-muted">
          Chicken 32 · Patties 40 · Fries 45
        </p>
        <p className="mt-3 text-[11px] font-semibold text-orange">Gap vs prepared</p>
      </>
    ),
  },
  {
    label: "Recipe",
    body: (
      <>
        <p className="text-[13px] font-semibold">Herb roasted chicken</p>
        <p className="mt-2 text-[12px] text-ink-muted">Yield 12 portions / batch</p>
        <p className="mt-1 text-[12px] text-ink-muted">3 batches · 45 min</p>
      </>
    ),
  },
  {
    label: "Ingredient Needs",
    body: (
      <div className="space-y-1.5">
        {[
          ["Chicken thighs", "12.8 kg"],
          ["Ground beef", "18.4 kg"],
          ["Potatoes", "22.0 kg"],
        ].map(([name, qty]) => (
          <div key={name} className="flex justify-between gap-2 text-[12px]">
            <span className="text-ink-muted">{name}</span>
            <span className="font-semibold text-ink">{qty}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Kitchen Production",
    body: (
      <>
        <p className="text-[13px] font-semibold">Published to 4 stations</p>
        <p className="mt-2 text-[12px] text-ink-muted">Prep · Grill · Fry · Assembly</p>
        <div className="mt-3">
          <StatusPill tone="medium">Dinner prep 4:00 PM</StatusPill>
        </div>
      </>
    ),
  },
];

const schedule = [
  { time: "10:30 AM", item: "Chicken prep", qty: "24 kg", station: "Prep", status: "Complete", tone: "ready" as const },
  { time: "11:15 AM", item: "Fries", qty: "95 covers", station: "Fry", status: "Complete", tone: "ready" as const },
  { time: "11:30 AM", item: "Burger patties", qty: "80", station: "Grill", status: "Complete", tone: "ready" as const },
  { time: "3:30 PM", item: "Dinner prep", qty: "18 batches", station: "All", status: "In progress", tone: "medium" as const, active: true },
  { time: "4:00 PM", item: "Station handoff", qty: "4 stations", station: "Expo", status: "Queued", tone: "neutral" as const },
];

const outcomes = [
  {
    title: "Less Waste",
    copy: "Prepare closer to actual demand.",
    path: "M8 18c0-5 8-5 8 0M7 9h10l-1.2 9H8.2z",
  },
  {
    title: "Fewer 86’d Items",
    copy: "Keep high-demand products ready.",
    path: "M4 16c3-7 6-10 8-10s5 3 8 10M8 16a4 4 0 1 0 8 0",
  },
  {
    title: "Better Timing",
    copy: "Start the right batches at the right time.",
    path: "M7 5v14M7 5h8l2 2v12H7M11 10h4M11 14h3",
  },
  {
    title: "Aligned Kitchen",
    copy: "Every station follows the same production plan.",
    path: "M5 19V8l7-4 7 4v11M9 19v-6h6v6",
  },
];

export function ForecastToPrep() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <h2 className="serif-tight max-w-xl text-3xl md:text-5xl">
          One plan from forecast to finished prep.
        </h2>
        <p className="mt-5 max-w-2xl text-[16px] leading-7 text-ink-muted">
          Sales forecasts, production plans, recipes, ingredient pulls, and
          station work stay connected in Vertex.
        </p>

        <div className="mt-10 overflow-hidden rounded-panel border border-line bg-white p-5 shadow-mock md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[13px] font-semibold text-ink">
                How demand becomes kitchen-ready production
              </p>
              <p className="mt-1 text-[12px] text-ink-muted">
                Harbor Kitchen · Thursday dinner
              </p>
            </div>
            <StatusPill tone="ready">Live from POS</StatusPill>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {pipeline.map((stage, index) => (
              <div key={stage.label} className="flex min-w-0 flex-1">
                <div className="min-w-0 flex-1 rounded-2xl border border-line bg-fog p-3.5 md:p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-orange">
                    {stage.label}
                  </p>
                  <div className="mt-2.5">{stage.body}</div>
                </div>
                {index < pipeline.length - 1 && (
                  <div className="flex items-center px-1 text-orange lg:px-1.5">
                    <span className="hidden text-base font-semibold lg:inline">→</span>
                    <span className="mx-auto py-1.5 text-sm lg:hidden">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 border-t border-line pt-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
                Today’s prep schedule
              </p>
              <div className="mt-4 hidden md:block">
                <div className="relative mb-5 flex items-center px-3">
                  <span className="absolute inset-x-8 top-1.5 h-px bg-line" />
                  <span className="absolute left-8 right-[20%] top-1.5 h-px bg-orange" />
                  {schedule.map((stop) => (
                    <div key={stop.time} className="relative z-10 flex flex-1 flex-col items-center">
                      <span
                        className={`h-3 w-3 rounded-full border-2 border-white ${
                          stop.active ? "bg-orange" : stop.tone === "ready" ? "bg-[#1F7A45]" : "bg-line"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {schedule.map((stop) => (
                    <div
                      key={stop.time}
                      className={`rounded-xl border p-3 ${
                        stop.active ? "border-orange/40 bg-orange-soft" : "border-line bg-fog"
                      }`}
                    >
                      <p className="text-[11px] font-semibold text-orange">{stop.time}</p>
                      <p className="mt-1 text-[13px] font-semibold text-ink">{stop.item}</p>
                      <p className="mt-1 text-[11px] text-ink-muted">
                        {stop.qty} · {stop.station}
                      </p>
                      <div className="mt-2">
                        <StatusPill tone={stop.tone}>{stop.status}</StatusPill>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 space-y-2 md:hidden">
                {schedule.map((stop) => (
                  <div
                    key={stop.time}
                    className={`flex items-start gap-3 rounded-xl border p-3 ${
                      stop.active ? "border-orange/40 bg-orange-soft" : "border-line bg-fog"
                    }`}
                  >
                    <p className="w-[72px] shrink-0 text-[11px] font-semibold text-orange">
                      {stop.time}
                    </p>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-semibold text-ink">{stop.item}</p>
                      <p className="mt-0.5 text-[11px] text-ink-muted">
                        {stop.qty} · {stop.station}
                      </p>
                    </div>
                    <StatusPill tone={stop.tone}>{stop.status}</StatusPill>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={kitchenImage}
                alt="Kitchen team preparing food before service"
                width={720}
                height={480}
                className="h-52 w-full object-cover md:h-full md:min-h-[240px]"
              />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/70 bg-white p-3 shadow-card">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
                  Dinner prep
                </p>
                <p className="mt-1 text-[13px] font-semibold text-ink">4:00 PM station handoff</p>
                <p className="mt-0.5 text-[12px] text-ink-muted">
                  Plan published to Prep, Grill, Fry, and Assembly.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 border-t border-line pt-6 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
                Production health
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  ["Waste avoided", "18%", "Closer to actual demand"],
                  ["High-demand ready", "94%", "Favorites on the line"],
                  ["86’d items", "2 → 0", "Fries held through lunch"],
                  ["Prep accuracy", "92%", "Prepared vs sold"],
                ].map(([label, value, note]) => (
                  <div key={label} className="rounded-xl border border-line bg-fog px-3 py-3">
                    <p className="text-[11px] text-ink-muted">{label}</p>
                    <p className="mt-1 text-[20px] font-semibold tracking-tight text-ink">
                      {value}
                    </p>
                    <p className="mt-1 text-[11px] text-ink-faint">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
                Kitchen status
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  ["Prep", "Chicken — Ready", "Ready", "ready" as const],
                  ["Grill", "Patties — 24 / 40", "In progress", "medium" as const],
                  ["Fry", "Fries — 45 / 45", "Ready", "ready" as const],
                  ["Assembly", "Waiting for grill", "Waiting", "neutral" as const],
                ].map(([station, task, status, tone]) => (
                  <div key={station} className="rounded-xl border border-line bg-fog p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                        {station}
                      </p>
                      <StatusPill tone={tone}>{status}</StatusPill>
                    </div>
                    <p className="mt-2 text-[13px] font-semibold text-ink">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-fog p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-soft text-orange">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d={item.path}
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mt-3 text-[15px] font-semibold">{item.title}</h3>
                <p className="mt-1 text-[13px] leading-5 text-ink-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
