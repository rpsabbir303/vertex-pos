"use client";

import { useState } from "react";
import { StatusPill } from "@/components/production-planner/mockups";
import { PosChassis } from "@/components/split-pay/devices";

const tabs = ["Equal", "By item", "Custom"] as const;
type Tab = (typeof tabs)[number];

export function SplitMethodsBoard() {
  const [tab, setTab] = useState<Tab>("Equal");

  return (
    <PosChassis title="Harbor · Counter">
      <div className="border-b border-line bg-fog px-5 py-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
              Split bill
            </p>
            <p className="mt-1 text-[24px] font-semibold tracking-tight">Table 24</p>
            <p className="mt-1 text-[14px] text-ink-muted">6 guests · $248.60 total</p>
          </div>
          <div className="inline-flex rounded-full border border-line bg-white p-1">
            {tabs.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTab(item)}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold ${
                  tab === item ? "bg-orange text-white" : "text-ink-muted hover:text-ink"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-0 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="p-5 md:p-7">
          {tab === "Equal" && <EqualSplit />}
          {tab === "By item" && <ItemSplit />}
          {tab === "Custom" && <CustomSplit />}
        </div>
        <div className="border-t border-line bg-fog p-5 md:p-7 lg:border-l lg:border-t-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
            Check
          </p>
          <div className="mt-4 space-y-0 text-sm">
            {[
              ["Total", "$248.60"],
              ["Paid", "$150.00"],
              ["Remaining", "$98.60"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between border-b border-line py-3 last:border-0"
              >
                <span className={label === "Remaining" ? "font-semibold" : "text-ink-muted"}>
                  {label}
                </span>
                <span className={`font-semibold ${label === "Remaining" ? "text-orange" : ""}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PosChassis>
  );
}

function EqualSplit() {
  return (
    <div>
      <p className="mb-4 text-[13px] text-ink-muted">
        Equal split · <span className="font-semibold text-ink">$41.43 / guest</span>
      </p>
      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {[
          ["Guest 01", "Paid"],
          ["Guest 02", "Paid"],
          ["Guest 03", "Paid"],
          ["Guest 04", "Due"],
          ["Guest 05", "Due"],
          ["Guest 06", "Due"],
        ].map(([name, status]) => (
          <div
            key={name}
            className={`rounded-xl border px-4 py-3.5 ${
              status === "Paid" ? "border-line bg-fog" : "border-orange/30 bg-orange-soft"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-[13px] font-semibold">{name}</p>
              <StatusPill tone={status === "Paid" ? "ready" : "medium"}>
                {status === "Paid" ? "✓ Paid" : "Due"}
              </StatusPill>
            </div>
            <p className="mt-2 text-[20px] font-semibold tracking-tight">$41.43</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ItemSplit() {
  return (
    <div className="space-y-2">
      {[
        ["Ribeye", "Guest 01", true],
        ["Pasta", "Guest 02", true],
        ["Cocktail", "Guest 03", false],
        ["Dessert", "Guest 02", true],
      ].map(([item, guest, assigned]) => (
        <div
          key={String(item)}
          className={`flex items-center justify-between rounded-xl border px-4 py-3.5 ${
            assigned ? "border-orange/40 bg-orange-soft" : "border-line bg-fog"
          }`}
        >
          <div>
            <p className="text-[14px] font-semibold">{String(item)}</p>
            <p className="text-[12px] text-ink-muted">{String(guest)}</p>
          </div>
          <StatusPill tone={assigned ? "medium" : "neutral"}>
            {assigned ? "Assigned" : "Tap to assign"}
          </StatusPill>
        </div>
      ))}
    </div>
  );
}

function CustomSplit() {
  return (
    <div className="space-y-2">
      {[
        ["Guest 04", "$60.00", "Custom amount"],
        ["Guest 05", "$45.00", "Custom amount"],
        ["Guest 06", "$98.60", "Remaining balance"],
      ].map(([guest, amount, note]) => (
        <div
          key={guest}
          className="flex items-center justify-between rounded-xl border border-line bg-fog px-4 py-3.5"
        >
          <div>
            <p className="text-[14px] font-semibold">{guest}</p>
            <p className="text-[12px] text-ink-muted">{note}</p>
          </div>
          <p className="text-[18px] font-semibold">{amount}</p>
        </div>
      ))}
    </div>
  );
}
