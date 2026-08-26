"use client";

import { useState } from "react";
import { CheckItem, Container } from "@/components/ui/LayoutBits";
import { PlannerWindow, StatusPill } from "@/components/production-planner/mockups";

const tabs = ["Guesswork", "Over-prep", "86’d items", "Timing"] as const;
type Tab = (typeof tabs)[number];

const problems = [
  "Guessing how much food to prepare for the next rush",
  "Preparing too much and creating waste at close",
  "Preparing too little and 86’ing items mid-service",
  "Not knowing which batches should start first",
  "Kitchen teams working without a shared production plan",
];

export function PrepProblem() {
  const [tab, setTab] = useState<Tab>("Guesswork");
  const activeIndex =
    tab === "Guesswork" ? 0 : tab === "Over-prep" ? 1 : tab === "86’d items" ? 2 : 3;

  return (
    <>
      <section className="section-pad bg-white">
        <Container>
          <div className="text-center">
            <h2 className="serif-tight text-3xl md:text-5xl">
              Know what to prepare before the kitchen gets busy.
            </h2>
            <div className="mt-8 inline-flex max-w-full flex-wrap justify-center rounded-full border border-line bg-fog p-1">
              {tabs.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTab(item)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors md:px-5 ${
                    tab === item ? "bg-orange text-white" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="serif-tight text-3xl md:text-4xl">
              Most kitchens still guess what to cook.
            </h2>
            <p className="mt-5 text-[16px] leading-7 text-ink-muted">
              Without a production plan, prep follows leftover trays, habit, or
              whoever got in first. That is how restaurants waste food in the
              morning and run out of the popular items by lunch.
            </p>
            <div className="mt-8 space-y-3">
              {problems.map((item, index) => {
                const tabForItem = tabs[index];
                const selected = index === activeIndex;
                return (
                  <div
                    key={item}
                    onClick={() => {
                      if (tabForItem) setTab(tabForItem);
                    }}
                    className={`rounded-2xl px-1 ${
                      selected ? "bg-orange-soft/70" : ""
                    } ${tabForItem ? "cursor-pointer" : ""}`}
                  >
                    <CheckItem>{item}</CheckItem>
                  </div>
                );
              })}
            </div>
          </div>
          <ProblemDashboard tab={tab} />
        </Container>
      </section>
    </>
  );
}

function ProblemDashboard({ tab }: { tab: Tab }) {
  return (
    <div className="relative">
      {tab !== "Over-prep" && (
        <div className="mb-3 md:absolute md:-top-5 md:right-0 md:z-10 md:mb-0 md:w-[210px]">
          <InsightCard>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
              Over-prepared
            </p>
            <p className="mt-2 text-[13px] font-semibold text-ink">Chicken</p>
            <p className="mt-1 text-[12px] text-ink-muted">Prepared 80 · Sold 52</p>
            <div className="mt-2">
              <StatusPill tone="high">28 portions left</StatusPill>
            </div>
          </InsightCard>
        </div>
      )}

      <div className={tab !== "Over-prep" ? "md:pt-6" : ""}>
        <PlannerWindow
          title="Prep clipboard · Harbor Kitchen"
          subtitle="No production plan"
        >
          <div className="p-4 md:p-5">
            {tab === "Guesswork" && <GuessworkState />}
            {tab === "Over-prep" && <OverprepState />}
            {tab === "86’d items" && <EightySixedState />}
            {tab === "Timing" && <TimingState />}
          </div>
        </PlannerWindow>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {tab !== "86’d items" ? (
          <InsightCard>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
              86’d during service
            </p>
            <p className="mt-2 text-[13px] font-semibold text-ink">French Fries</p>
            <p className="mt-1 text-[12px] text-ink-muted">Available 0</p>
            <div className="mt-2">
              <StatusPill tone="high">Out of stock · 12:40</StatusPill>
            </div>
          </InsightCard>
        ) : (
          <InsightCard>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
              Tonight’s guess
            </p>
            <p className="mt-2 text-[13px] font-semibold text-ink">Burgers</p>
            <p className="mt-1 text-[12px] text-ink-muted">Waste at close</p>
            <div className="mt-2">
              <StatusPill tone="medium">No forecast</StatusPill>
            </div>
          </InsightCard>
        )}

        {tab !== "Timing" ? (
          <InsightCard>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
              Prep timing
            </p>
            <p className="mt-2 text-[13px] font-semibold text-ink">Fries · 11:15 AM</p>
            <p className="mt-1 text-[12px] text-ink-muted">Starts after the rush builds</p>
            <div className="mt-2">
              <StatusPill tone="medium">Not aligned</StatusPill>
            </div>
          </InsightCard>
        ) : (
          <InsightCard>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
              Tonight’s guess
            </p>
            <p className="mt-2 text-[13px] font-semibold text-ink">Chicken</p>
            <p className="mt-1 text-[12px] text-ink-muted">22 extra portions</p>
            <div className="mt-2">
              <StatusPill tone="high">Guessing</StatusPill>
            </div>
          </InsightCard>
        )}
      </div>

      <div className="mt-3">
        <InsightCard>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Kitchen prep board
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              ["Prep", "Chicken — Pending"],
              ["Grill", "Burger Patties — Waiting"],
              ["Fry", "Fries — Ready"],
              ["Assembly", "No plan"],
            ].map(([station, task]) => (
              <div key={station} className="rounded-lg bg-fog px-2.5 py-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                  {station}
                </p>
                <p className="mt-1 text-[12px] font-medium leading-4 text-ink">{task}</p>
              </div>
            ))}
          </div>
        </InsightCard>
      </div>
    </div>
  );
}

function InsightCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-3 shadow-card">{children}</div>
  );
}

function GuessworkState() {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold text-ink">Tonight’s Guess</p>
          <p className="mt-1 text-[12px] text-ink-muted">
            Copied from last night · no forecast attached
          </p>
        </div>
        <StatusPill tone="high">Guessing</StatusPill>
      </div>
      <div className="mt-4 space-y-3">
        {[
          ["Chicken", "Same as Wednesday", "22 extra portions"],
          ["Fries", "Fill both fryers", "Ran out 12:40"],
          ["Burgers", "Prep the whole case", "Waste at close"],
        ].map(([item, plan, result]) => (
          <div key={item} className="rounded-xl border border-line bg-fog px-3 py-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[13px] font-semibold">{item}</p>
              <StatusPill tone="high">{result}</StatusPill>
            </div>
            <p className="mt-1 text-[12px] text-ink-muted">{plan}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function OverprepState() {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold text-ink">Over-prepared</p>
          <p className="mt-1 text-[12px] text-ink-muted">
            Lunch close · Harbor Kitchen
          </p>
        </div>
        <StatusPill tone="high">28 portions left</StatusPill>
      </div>
      <div className="mt-4 rounded-xl border border-line bg-fog p-4">
        <p className="text-[13px] font-semibold">Chicken</p>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[
            ["80", "Prepared"],
            ["52", "Sold"],
            ["28", "Unused"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-lg bg-white py-2">
              <p className="text-[18px] font-semibold text-ink">{value}</p>
              <p className="text-[11px] text-ink-muted">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
          <div className="h-full w-[65%] rounded-full bg-orange" />
        </div>
        <p className="mt-2 text-[12px] text-ink-muted">
          65% sold · 35% leftover after the rush
        </p>
      </div>
    </>
  );
}

function EightySixedState() {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold text-ink">86’d during service</p>
          <p className="mt-1 text-[12px] text-ink-muted">Lunch rush · popular item</p>
        </div>
        <StatusPill tone="high">Out of stock · 12:40 PM</StatusPill>
      </div>
      <div className="mt-4 rounded-xl border border-line bg-fog p-4">
        <p className="text-[13px] font-semibold">French Fries</p>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[
            ["120", "Prepared"],
            ["120", "Sold"],
            ["0", "Available"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-lg bg-white py-2">
              <p className={`text-[18px] font-semibold ${label === "Available" ? "text-[#C43A2F]" : "text-ink"}`}>
                {value}
              </p>
              <p className="text-[11px] text-ink-muted">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
          <div className="h-full w-full rounded-full bg-[#C43A2F]" />
        </div>
        <p className="mt-2 text-[12px] text-ink-muted">
          Sold out mid-rush. Tickets still coming in.
        </p>
      </div>
    </>
  );
}

function TimingState() {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold text-ink">Prep Timing</p>
          <p className="mt-1 text-[12px] text-ink-muted">
            Not knowing which batch should start first
          </p>
        </div>
        <StatusPill tone="medium">Not aligned with demand</StatusPill>
      </div>
      <div className="mt-4 space-y-3">
        {[
          ["Chicken", "Start 10:30 AM", "Too early for lunch"],
          ["Fries", "Start 11:15 AM", "Rush already forming"],
          ["Burger Patties", "Start 11:30 AM", "Starts with first tickets"],
        ].map(([item, time, note], index) => (
          <div key={item} className="flex items-center gap-3 rounded-xl border border-line bg-fog px-3 py-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-orange">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[13px] font-semibold text-ink">{item}</p>
                <p className="text-[12px] font-semibold text-ink">{time}</p>
              </div>
              <p className="mt-0.5 text-[12px] text-ink-muted">{note}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
