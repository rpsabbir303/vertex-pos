/** In-page Menu Engineering visuals — HTML/CSS product UI + photography context. */

import Image from "next/image";
import {
  categoryRows,
  itemRows,
  matrixQuadrants,
  overviewMetrics,
} from "@/components/menu-engineering/catalog";
import {
  categoryPhotoByName,
  itemThumbByName,
  mePhotos,
} from "@/components/menu-engineering/photos";

export function MenuEngineeringHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -right-6 -top-8 h-36 w-36 rounded-full bg-orange/15 blur-3xl" />
      <div className="absolute -bottom-8 -left-4 h-40 w-40 rounded-full bg-night/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-line bg-white shadow-mock">
        <div className="relative h-48 overflow-hidden md:h-56">
          <Image
            src={mePhotos.heroRestaurant}
            alt="Premium restaurant dining room with plated dishes ready for service"
            fill
            priority
            className="object-cover"
            sizes="(max-width:768px) 100vw, 560px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
                Menu Engineering
              </p>
              <p className="mt-1 text-[15px] font-semibold text-white">
                From dining room to decision
              </p>
            </div>
            <span className="rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              This week
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3">
          {overviewMetrics.slice(0, 3).map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-line bg-[#FAF8F4] px-3 py-3"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                {m.label}
              </p>
              <p className="mt-1.5 text-[16px] font-semibold tracking-tight text-ink sm:text-[17px]">
                {m.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 border-t border-line p-4 sm:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-line bg-[#FAF8F4] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
              Best sellers
            </p>
            <ul className="mt-3 space-y-2.5">
              {[
                { name: "Truffle Burger", meta: "184 orders · Star", hot: true },
                { name: "Salmon Bowl", meta: "126 orders · Star", hot: true },
                {
                  name: "Classic Burger",
                  meta: "198 orders · Plowhorse",
                  hot: false,
                },
              ].map((row) => (
                <li
                  key={row.name}
                  className="flex items-center justify-between gap-2"
                >
                  <div>
                    <p className="text-[13px] font-semibold text-ink">{row.name}</p>
                    <p className="text-[11px] text-ink-muted">{row.meta}</p>
                  </div>
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      row.hot ? "bg-orange" : "bg-night/25"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-white p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
              Mini matrix
            </p>
            <div className="mt-3 grid aspect-square grid-cols-2 grid-rows-2 overflow-hidden rounded-xl border border-line text-[10px] font-semibold uppercase tracking-[0.08em]">
              <div className="border-b border-r border-line bg-[#FAF8F4] p-2 text-ink-muted">
                Puzzle
              </div>
              <div className="border-b border-line bg-orange/[0.07] p-2 text-orange">
                Star
              </div>
              <div className="border-r border-line p-2 text-ink-muted">Dog</div>
              <div className="bg-[#F7F5F2] p-2 text-ink-muted">Plowhorse</div>
            </div>
            <p className="mt-3 text-[12px] leading-5 text-ink-muted">
              Popularity × profitability at a glance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MenuPerformanceDashboard() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-white shadow-mock">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 md:px-6">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
            Menu performance
          </p>
          <p className="mt-1 text-[17px] font-semibold text-ink">Connected overview</p>
        </div>
        <p className="text-[12px] text-ink-muted">Sample restaurant data · this period</p>
      </div>

      <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
        {overviewMetrics.map((m, i) => (
          <div key={m.label} className="bg-white px-5 py-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
              {m.label}
            </p>
            <p
              className={`mt-2 text-[22px] font-semibold tracking-tight md:text-[24px] ${
                i < 2 ? "text-ink" : i === 4 ? "text-ink-muted" : "text-orange"
              }`}
            >
              {m.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 border-t border-line p-5 md:grid-cols-[1.1fr_0.9fr] md:p-6">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
            Sales mix trend
          </p>
          <div className="mt-4 flex h-28 items-end gap-2 sm:gap-3" aria-hidden>
            {[42, 55, 48, 68, 60, 74, 70, 82, 76, 88].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-md ${
                  i >= 7 ? "bg-orange" : "bg-night/12"
                }`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="mt-3 text-[13px] text-ink-muted">
            Menu sales trending up across the last ten service days.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-[#FAF8F4] p-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
            Attention list
          </p>
          <ul className="mt-3 space-y-3">
            <li className="flex justify-between gap-3 text-[14px]">
              <span className="font-semibold text-ink">Truffle Burger</span>
              <span className="text-orange">Promote</span>
            </li>
            <li className="flex justify-between gap-3 text-[14px]">
              <span className="font-semibold text-ink">Chicken Sandwich</span>
              <span className="text-ink-muted">Review margin</span>
            </li>
            <li className="flex justify-between gap-3 text-[14px]">
              <span className="font-semibold text-ink">Veggie Wrap</span>
              <span className="text-ink-muted">Underperforming</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function MenuMatrixChart() {
  const points = [
    { name: "Truffle Burger", x: 82, y: 78, tone: "star" as const },
    { name: "Salmon Bowl", x: 70, y: 74, tone: "star" as const },
    { name: "Steak Frites", x: 28, y: 80, tone: "puzzle" as const },
    { name: "Shrimp Pasta", x: 34, y: 72, tone: "puzzle" as const },
    { name: "Classic Burger", x: 86, y: 34, tone: "plow" as const },
    { name: "Chicken Sandwich", x: 78, y: 38, tone: "plow" as const },
    { name: "Veggie Wrap", x: 22, y: 26, tone: "dog" as const },
    { name: "Seasonal Soup", x: 18, y: 30, tone: "dog" as const },
  ];

  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-white shadow-mock">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 md:px-6">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
            The menu matrix
          </p>
          <p className="mt-1 text-[16px] font-semibold text-ink">
            Popularity × Profitability
          </p>
        </div>
        <p className="text-[12px] text-ink-muted">Sample mix · current period</p>
      </div>

      <div className="relative aspect-[1.1/1] min-h-[320px] p-6 md:aspect-[1.2/1] md:p-10">
        <div className="absolute inset-6 grid grid-cols-2 grid-rows-2 overflow-hidden rounded-2xl border border-line md:inset-10">
          <div className="border-b border-r border-line bg-[#FAF8F4]/90 p-3 md:p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
              Puzzles
            </p>
          </div>
          <div className="border-b border-line bg-orange/[0.06] p-3 md:p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
              Stars
            </p>
          </div>
          <div className="border-r border-line bg-white p-3 md:p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
              Dogs
            </p>
          </div>
          <div className="bg-[#F7F5F2] p-3 md:p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
              Plowhorses
            </p>
          </div>
        </div>

        <p className="absolute left-1 top-1/2 origin-center -translate-y-1/2 -rotate-90 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted md:left-2">
          Profitability
        </p>
        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted md:bottom-3">
          Popularity →
        </p>

        {points.map((point) => (
          <div
            key={point.name}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${20 + point.x * 0.62}%`,
              top: `${78 - point.y * 0.56}%`,
            }}
          >
            <span
              className={`mx-auto block h-3.5 w-3.5 rounded-full border-2 border-white shadow-card ${
                point.tone === "star" ? "bg-orange" : "bg-night/50"
              }`}
              aria-hidden
            />
            <span className="mt-1 block whitespace-nowrap rounded-full border border-line bg-white px-2 py-0.5 text-[9px] font-semibold text-ink shadow-card sm:text-[10px]">
              {point.name}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-3 border-t border-line bg-[#FAF8F4] p-4 sm:grid-cols-2 lg:grid-cols-4 md:p-5">
        {matrixQuadrants.map((q) => (
          <div key={q.key} className="rounded-xl border border-line bg-white px-3 py-3">
            <p
              className={`text-[12px] font-semibold ${
                q.key === "stars" ? "text-orange" : "text-ink"
              }`}
            >
              {q.title}
            </p>
            <p className="mt-1 text-[11px] text-ink-muted">
              {q.popularity} · {q.profitability}
            </p>
            <p className="mt-2 text-[12px] font-medium text-ink">
              {q.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PerformanceBadge({ label }: { label: string }) {
  const styles: Record<string, string> = {
    Star: "bg-orange/10 text-orange",
    Puzzle: "bg-night/5 text-ink",
    Plowhorse: "bg-night/5 text-ink-muted",
    Dog: "bg-night/5 text-ink-muted",
  };
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
        styles[label] ?? "bg-fog text-ink"
      }`}
    >
      {label}
    </span>
  );
}

export function ItemPerformanceTable() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-white shadow-mock">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 md:px-6">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
            Item analysis
          </p>
          <p className="mt-1 text-[17px] font-semibold text-ink">
            Performance by dish
          </p>
        </div>
        <p className="text-[12px] text-ink-muted">Orders · revenue · cost · margin</p>
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[760px] text-left">
          <thead>
            <tr className="border-b border-line bg-[#FAF8F4] text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
              <th className="px-5 py-3 md:px-6">Item</th>
              <th className="px-3 py-3">Category</th>
              <th className="px-3 py-3">Orders</th>
              <th className="px-3 py-3">Revenue</th>
              <th className="px-3 py-3">Food Cost</th>
              <th className="px-3 py-3">Profit</th>
              <th className="px-3 py-3">Margin</th>
              <th className="px-5 py-3 md:px-6">Performance</th>
            </tr>
          </thead>
          <tbody>
            {itemRows.map((row) => {
              const thumb = itemThumbByName[row.item];
              return (
                <tr key={row.item} className="border-b border-line last:border-0">
                  <td className="px-5 py-3.5 md:px-6">
                    <div className="flex items-center gap-3">
                      {thumb && (
                        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-line">
                          <Image
                            src={thumb}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </span>
                      )}
                      <span className="text-[14px] font-semibold text-ink">
                        {row.item}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-3.5 text-[13px] text-ink-muted">
                    {row.category}
                  </td>
                  <td className="px-3 py-3.5 text-[13px] text-ink">{row.orders}</td>
                  <td className="px-3 py-3.5 text-[13px] text-ink">{row.revenue}</td>
                  <td className="px-3 py-3.5 text-[13px] text-ink-muted">
                    {row.foodCost}
                  </td>
                  <td className="px-3 py-3.5 text-[13px] text-ink">{row.profit}</td>
                  <td className="px-3 py-3.5 text-[13px] font-semibold text-ink">
                    {row.margin}
                  </td>
                  <td className="px-5 py-3.5 md:px-6">
                    <PerformanceBadge label={row.performance} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 p-4 md:hidden">
        {itemRows.map((row) => {
          const thumb = itemThumbByName[row.item];
          return (
            <article
              key={row.item}
              className="rounded-2xl border border-line bg-[#FAF8F4] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {thumb && (
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-line">
                      <Image
                        src={thumb}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </span>
                  )}
                  <div>
                    <p className="text-[15px] font-semibold text-ink">{row.item}</p>
                    <p className="mt-0.5 text-[12px] text-ink-muted">{row.category}</p>
                  </div>
                </div>
                <PerformanceBadge label={row.performance} />
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-[13px]">
                <div>
                  <dt className="text-ink-muted">Orders</dt>
                  <dd className="font-semibold text-ink">{row.orders}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Revenue</dt>
                  <dd className="font-semibold text-ink">{row.revenue}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Food Cost</dt>
                  <dd className="font-semibold text-ink">{row.foodCost}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Profit</dt>
                  <dd className="font-semibold text-ink">{row.profit}</dd>
                </div>
                <div>
                  <dt className="text-ink-muted">Margin</dt>
                  <dd className="font-semibold text-orange">{row.margin}</dd>
                </div>
              </dl>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function CategoryAnalysisVisual() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-white shadow-mock">
      <div className="border-b border-line px-5 py-4 md:px-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
          Category analysis
        </p>
        <p className="mt-1 text-[17px] font-semibold text-ink">
          Where your menu performs best
        </p>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-2 md:p-5">
        {categoryRows.map((row) => {
          const photo = categoryPhotoByName[row.category];
          return (
            <div
              key={row.category}
              className={`relative overflow-hidden rounded-2xl border border-line ${
                photo?.span === "large" ? "min-h-[200px] sm:min-h-[240px]" : "min-h-[180px]"
              }`}
            >
              {photo && (
                <Image
                  src={photo.src}
                  alt={`${row.category} menu category`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[15px] font-semibold">{row.category}</p>
                    <p className="mt-0.5 text-[12px] text-white/75">{row.sales} sales</p>
                  </div>
                  <p className="text-[15px] font-semibold">{row.margin}</p>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-orange"
                    style={{ width: `${row.bar}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
