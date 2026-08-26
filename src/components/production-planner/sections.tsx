import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckItem, Container, SectionLabel } from "@/components/ui/LayoutBits";
import {
  OutcomeMetric,
  ProductionDashboard,
  RushTimelineBoard,
  StationTaskBoard,
} from "@/components/production-planner/mockups";

export { PrepProblem } from "@/components/production-planner/PrepProblem";
export { ForecastToPrep } from "@/components/production-planner/ForecastToPrep";


const heroImage =
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2000&q=80";
const stationImage =
  "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=80";

export function PlannerHero() {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-night md:min-h-[700px]">
      <Image
        src={heroImage}
        alt="Chefs preparing food in a restaurant kitchen before service"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <Container className="relative flex min-h-[640px] items-center pt-24 md:min-h-[700px]">
        <div className="max-w-xl text-white">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-orange-mid">
            Production Planner
          </p>
          <h1 className="serif-tight mt-4 text-4xl leading-[1.08] md:text-6xl">
            Plan prep before{" "}
            <span className="accent-word">the rush hits.</span>
          </h1>
          <p className="mt-5 text-[16px] leading-7 text-white/85">
            Vertex Production Planner helps restaurants plan food preparation
            from forecasted demand — including quantity, timing, and the station
            that owns each batch.
          </p>
          <div className="mt-8">
            <Button href="/get-started">Get Started</Button>
          </div>
        </div>
      </Container>
      <div className="relative border-t border-white/10 bg-black/35">
        <Container className="grid grid-cols-2 gap-4 py-4 md:grid-cols-4 md:py-5">
          {[
            "Forecasted demand",
            "Batch quantities",
            "Prep windows",
            "Station routing",
          ].map((item) => (
            <p key={item} className="text-sm font-medium text-white">
              {item}
            </p>
          ))}
        </Container>
      </div>
    </section>
  );
}

export function DemandPlanning() {
  return (
    <section id="demand-plan" className="section-pad bg-mist">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="order-2 lg:order-1">
          <div className="rounded-[28px] border border-[#d8d8d6] bg-[#2b2b2b] p-3 shadow-mock md:p-4">
            <div className="mb-3 hidden h-3 items-center justify-center md:flex">
              <span className="h-1.5 w-16 rounded-full bg-white/20" />
            </div>
            <ProductionDashboard />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionLabel>Demand-based planning</SectionLabel>
          <h2 className="serif-tight text-3xl md:text-4xl">
            Turn demand into a production plan.
          </h2>
          <p className="mt-5 text-[16px] leading-7 text-ink-muted">
            Vertex compares forecasted covers with what is already prepared,
            then shows the kitchen exactly what is still needed — by item,
            priority, prep time, and station.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Forecast tonight from recent same-day sales and reservations",
              "Subtract batches already on the line",
              "Issue the gap as production needed",
              "Attach priority and timing before the rush starts",
            ].map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function RushTimeline() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <h2 className="serif-tight max-w-xl text-3xl md:text-5xl">
          Plan every rush, not one giant morning list.
        </h2>
        <p className="mt-5 max-w-2xl text-[16px] leading-7 text-ink-muted">
          Morning prep, lunch, afternoon, dinner prep, and dinner service each
          get a quantity, a station, and a time. The kitchen cooks for the
          window ahead — not for the entire day at once.
        </p>
        <div className="mt-10">
          <RushTimelineBoard />
        </div>
      </Container>
    </section>
  );
}

export function KitchenSync() {
  return (
    <section className="section-pad bg-mist">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel>Kitchen coordination</SectionLabel>
          <h2 className="serif-tight text-3xl md:text-4xl">
            Keep every kitchen station in sync.
          </h2>
          <p className="mt-5 text-[16px] leading-7 text-ink-muted">
            The manager publishes a plan. Prep, grill, fry, and assembly each
            receive the batches they own. Everyone knows what to prepare, how
            much, and when it has to be ready.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Manager creates and publishes the production plan",
              "Stations receive actionable batch tasks",
              "Cooks complete work against the same list",
              "Managers see progress before the doors get busy",
            ].map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </div>
        <div className="relative pb-6 md:min-h-[540px] md:pb-0">
          <div className="overflow-hidden rounded-panel">
            <Image
              src={stationImage}
              alt="Chef plating dishes during service"
              width={900}
              height={720}
              className="h-[420px] w-full object-cover md:h-[540px]"
            />
          </div>
          <div className="relative z-10 mx-auto -mt-24 w-[min(100%,420px)] md:absolute md:bottom-6 md:right-4 md:mx-0 md:mt-0 md:w-[340px]">
            <StationTaskBoard />
          </div>
        </div>
      </Container>
    </section>
  );
}

const capabilities = [
  {
    title: "Demand Forecasting",
    copy: "Plan production around expected demand from recent sales and upcoming reservations.",
  },
  {
    title: "Batch Planning",
    copy: "Prepare the right quantities in efficient batches, with yield already attached.",
  },
  {
    title: "Prep Scheduling",
    copy: "Know what needs to be prepared and when — morning, lunch, afternoon, and dinner.",
  },
  {
    title: "Production Tracking",
    copy: "Track preparation progress throughout the shift as stations complete each batch.",
  },
  {
    title: "Waste Reduction",
    copy: "Reduce unnecessary production and leftover ingredient waste without running short.",
  },
  {
    title: "Inventory Awareness",
    copy: "Plan production with current ingredient availability and recipe yields in mind.",
  },
];

export function Capabilities() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <h2 className="serif-tight max-w-xl text-3xl md:text-5xl">
          Built for the work a kitchen actually does.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <article
              key={item.title}
              className="rounded-card border border-line bg-white p-6 shadow-card"
            >
              <CapabilityIcon index={index} />
              <h3 className="mt-5 text-[18px] font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CapabilityIcon({ index }: { index: number }) {
  const paths = [
    "M4 16c3-7 6-10 8-10s5 3 8 10M8 16a4 4 0 1 0 8 0",
    "M8 9h8v10H8zM10 9V7h4v2M8 13h8",
    "M7 5v14M7 5h8l2 2v12H7M11 10h4M11 14h3",
    "M5 19V8l7-4 7 4v11M9 19v-6h6v6",
    "M8 18c0-5 8-5 8 0M7 9h10l-1.2 9H8.2z",
    "M6 8h12v11H6zM9 8V6h6v2M9 13h6",
  ];

  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-soft text-orange">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d={paths[index]}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Outcomes() {
  return (
    <section className="section-pad bg-fog">
      <Container>
        <h2 className="serif-tight max-w-xl text-3xl md:text-5xl">
          A calmer kitchen, with numbers that hold up at close.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <OutcomeMetric
            value="Less waste"
            label="Prepare closer to actual demand."
            note="Fewer extra pans at close when prep follows forecasted covers instead of leftover trays."
            bars={[70, 62, 58, 50, 46, 40, 32]}
          />
          <OutcomeMetric
            value="Better readiness"
            label="Keep popular items ready before peaks."
            note="High movers are on the line before lunch and dinner, not after tickets start stacking."
            bars={[40, 48, 52, 60, 68, 74, 86]}
          />
          <OutcomeMetric
            value="Faster operations"
            label="Give teams clear preparation priorities."
            note="Stations start the right batch first, so the rush is met with work already in motion."
            bars={[34, 42, 40, 55, 52, 64, 78]}
          />
          <OutcomeMetric
            value="Smarter planning"
            label="Use actual restaurant data to decide."
            note="Production decisions come from sales, reservations, recipes, and on-hand inventory."
            bars={[30, 38, 44, 42, 58, 66, 80]}
          />
        </div>
      </Container>
    </section>
  );
}
