import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckItem, FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import { PlannerWindow, StatusPill } from "@/components/production-planner/mockups";
import { MixBars, TenderMark } from "@/components/split-pay/PayBits";
import { SplitMethodsBoard } from "@/components/split-pay/SplitMethodsBoard";
import { LaptopShell } from "@/components/split-pay/devices";

const heroImage =
  "https://images.unsplash.com/photo-1753351055179-3aeb172826f4?auto=format&fit=crop&w=2200&q=80";
const tableImage =
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1800&q=80";
const payImage =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80";

function Inner({
  max,
  children,
  className = "",
}: {
  max: string;
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full ${max} ${className}`}>{children}</div>;
}

export function SplitHero() {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-night md:min-h-[700px]">
      <Image
        src={heroImage}
        alt="Server taking payment from guests at a restaurant table"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <FeatureWide className="relative flex min-h-[640px] items-center pt-24 md:min-h-[700px]">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-xl text-white">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-orange-mid">
              Split & Partial Pay
            </p>
            <h1 className="serif-tight mt-4 text-4xl leading-[1.08] md:text-6xl">
              Split the bill. Keep every{" "}
              <span className="accent-word">payment simple.</span>
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-7 text-white/85">
              Vertex lets staff split bills, accept partial payments, combine
              payment methods, and settle group checks without slowing down the
              table.
            </p>
            <div className="mt-8">
              <Button href="/get-started">Get Started</Button>
            </div>
          </div>
          <div className="hidden w-[280px] lg:block">
            <PlannerWindow title="Table 24" subtitle="Open check">
              <div className="p-4">
                <p className="text-[20px] font-semibold tracking-tight">$248.60</p>
                <p className="mt-1 text-[12px] text-ink-muted">6 guests · 3 / 6 paid</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-fog">
                  <div className="h-full w-[68%] rounded-full bg-orange" />
                </div>
              </div>
            </PlannerWindow>
          </div>
        </div>
      </FeatureWide>
      <div className="relative border-t border-white/10 bg-black/35">
        <FeatureWide className="grid grid-cols-2 gap-4 py-4 md:grid-cols-4 md:py-5">
          {[
            "Split by item or equally",
            "Partial payments",
            "Mixed tenders",
            "Live remaining balance",
          ].map((item) => (
            <p key={item} className="text-sm font-medium text-white">
              {item}
            </p>
          ))}
        </FeatureWide>
      </div>
    </section>
  );
}

export function PaymentProblem() {
  return (
    <section className="bg-white py-16 md:py-20">
      <FeatureWide>
        <Inner max="max-w-[1320px]">
          <h2 className="serif-tight max-w-2xl text-3xl md:text-5xl">
            One table. Too many ways to pay.
          </h2>
          <div className="mt-8 grid items-center gap-10 xl:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="max-w-md text-[16px] leading-7 text-ink-muted">
                Group checks stall when staff are doing math on a notepad while
                guests decide who pays for what. Vertex keeps the bill, the
                shares, and the remaining balance on one check.
              </p>
              <ul className="mt-6 max-w-md space-y-3">
                {[
                  "One guest wants to pay by card",
                  "Another wants to pay cash",
                  "Someone only wants to pay for their own items",
                  "One person wants to cover part of the bill",
                  "Guests need to know what remains unpaid",
                  "Staff should not calculate the rest by hand",
                ].map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
            <LaptopShell>
              <div className="px-5 pb-5 pt-6 md:px-7">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[15px] font-semibold">Dinner Table 24</p>
                    <p className="mt-1 text-[12px] text-ink-muted">6 guests</p>
                  </div>
                  <StatusPill tone="high">$96.00 still unpaid</StatusPill>
                </div>
                <div className="mt-3 text-sm">
                  {[
                    ["2 × Ribeye", "$72.00"],
                    ["2 × Pasta", "$36.00"],
                    ["3 × Cocktails", "$42.00"],
                    ["1 × Dessert", "$12.00"],
                    ["Subtotal", "$186.00"],
                    ["Tax", "$18.60"],
                    ["Tip", "$30.00"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-line py-1.5">
                      <span className="text-ink-muted">{label}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-2">
                    <span className="font-semibold">Total</span>
                    <span className="text-[18px] font-semibold">$234.60</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-fog py-2">
                    <p className="text-[11px] text-ink-muted">Paid</p>
                    <p className="text-[13px] font-semibold">$138.60</p>
                  </div>
                  <div className="rounded-lg bg-orange-soft py-2">
                    <p className="text-[11px] text-ink-muted">Remaining</p>
                    <p className="text-[13px] font-semibold text-orange">$96.00</p>
                  </div>
                  <div className="rounded-lg bg-fog py-2">
                    <p className="text-[11px] text-ink-muted">Methods</p>
                    <p className="text-[13px] font-semibold">2</p>
                  </div>
                </div>
              </div>
            </LaptopShell>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function AnySplit() {
  return (
    <section className="bg-mist py-16 md:py-24">
      <FeatureWide>
        <Inner max="max-w-[1500px]">
          <h2 className="serif-tight max-w-2xl text-3xl md:text-5xl">
            Split the check the way your guests want.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-ink-muted">
            Equally, by item, or by custom amount — on the counter POS the staff
            already use.
          </p>
          <div className="mt-7">
            <SplitMethodsBoard />
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

const assignments = [
  { item: "Ribeye", amount: "$36", accent: "bg-orange" },
  { item: "Pasta", amount: "$18", accent: "bg-[#2b2b2b]" },
  { item: "Cocktail", amount: "$14", accent: "bg-orange" },
  { item: "Dessert", amount: "$12", accent: "bg-[#2b2b2b]" },
  { item: "Cocktail", amount: "$14", accent: "bg-ink-faint" },
];

export function ItemShares() {
  return (
    <section className="bg-white py-14 md:py-20">
      <FeatureWide>
        <Inner max="max-w-[1280px]">
          <h2 className="serif-tight max-w-2xl text-3xl md:text-5xl">
            Give every guest a fair share.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-ink-muted">
            Assign each dish to a guest. Matching marks show who owns each line.
          </p>
          <div className="mt-7 overflow-hidden rounded-panel border border-line bg-white shadow-mock">
            <div className="grid lg:grid-cols-2">
              <div className="bg-[#F7F4EE] px-8 py-8">
                <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-ink-faint">
                  VERTEX POS
                </p>
                <p className="mt-2 text-center text-[18px] font-semibold">Table 24</p>
                <div className="mt-5 border-t border-dashed border-[#d4cfc4]">
                  {assignments.map((row, i) => (
                    <div
                      key={`${row.item}-${i}`}
                      className="flex items-center justify-between border-b border-dashed border-[#d4cfc4] py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full ${row.accent}`} />
                        <span className="text-[14px]">{row.item}</span>
                      </div>
                      <span className="text-[14px] font-semibold">{row.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3 bg-fog p-6 md:p-8">
                {[
                  ["Guest 01", "Ribeye + Cocktail", "$50", "bg-orange"],
                  ["Guest 02", "Pasta + Dessert", "$30", "bg-[#2b2b2b]"],
                  ["Guest 03", "Cocktail", "$14", "bg-ink-faint"],
                ].map(([guest, items, amount, dot]) => (
                  <div
                    key={guest}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-white px-5 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`h-3 w-3 rounded-full ${dot}`} />
                      <div>
                        <p className="text-[16px] font-semibold">{guest}</p>
                        <p className="mt-0.5 text-[13px] text-ink-muted">{items}</p>
                      </div>
                    </div>
                    <p className="text-[18px] font-semibold">{amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function PartialPay() {
  return (
    <section className="bg-mist py-16 md:py-24">
      <FeatureWide>
        <Inner max="max-w-[1400px]">
          <h2 className="serif-tight max-w-2xl text-3xl md:text-5xl">
            Take payments as guests are ready.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-ink-muted">
            Partial tenders post against the live remaining balance. The check
            stays open until the table is settled.
          </p>
          <div className="mt-7 overflow-hidden rounded-panel border border-line bg-white p-5 shadow-mock md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    ["Total", "$248.60", ""],
                    ["Paid", "$170.00", ""],
                    ["Remaining", "$78.60", "text-orange"],
                  ].map(([label, value, color]) => (
                    <div key={label}>
                      <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${color || "text-ink-faint"}`}>
                        {label}
                      </p>
                      <p className={`mt-2 text-[28px] font-semibold tracking-tight md:text-[36px] ${color}`}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="flex items-end justify-between">
                    <p className="text-[14px] font-semibold">68% settled</p>
                    <p className="text-[13px] text-ink-muted">$78.60 still open</p>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-line">
                    <div className="h-full w-[68%] rounded-full bg-orange" />
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
                    Guest settlement
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {[
                      ["Guest 01", "100%"],
                      ["Guest 02", "100%"],
                      ["Guest 03", "100%"],
                      ["Guest 04", "50%"],
                      ["Guest 05", "0%"],
                      ["Guest 06", "0%"],
                    ].map(([guest, pct]) => (
                      <div key={guest} className="rounded-xl border border-line bg-fog px-3 py-2.5">
                        <p className="text-[12px] text-ink-muted">{guest}</p>
                        <p className="text-[14px] font-semibold">{pct} paid</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
                  Payment activity
                </p>
                <div className="mt-3 space-y-2">
                  {[
                    ["visa", "Visa", "$80.00", "Paid"],
                    ["cash", "Cash", "$40.00", "Paid"],
                    ["apple", "Apple Pay", "$30.00", "Paid"],
                    ["visa", "Visa", "$20.00", "Partial"],
                  ].map(([type, method, amount, status], i) => (
                    <div
                      key={`${method}-${i}`}
                      className="flex items-center justify-between rounded-xl border border-line bg-fog px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <TenderMark type={type as "visa" | "cash" | "apple"} />
                        <p className="text-[14px] font-semibold">{method}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-[14px] font-semibold">{amount}</p>
                        <StatusPill tone={status === "Paid" ? "ready" : "medium"}>{status}</StatusPill>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function MixedPayments() {
  return (
    <section className="bg-fog py-12 md:py-16">
      <FeatureWide>
        <Inner max="max-w-[1450px]">
          <div className="relative overflow-hidden rounded-panel shadow-mock">
            <Image
              src={tableImage}
              alt="Restaurant table ready for payment"
              width={1800}
              height={900}
              className="h-[480px] w-full object-cover md:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/25" />
            <div className="absolute bottom-6 left-6 max-w-sm text-white md:bottom-8 md:left-8">
              <h2 className="serif-tight text-3xl md:text-4xl">
                Many ways to pay. One table check.
              </h2>
              <p className="mt-3 text-[15px] leading-6 text-white/85">
                Card, cash, Apple Pay, and a gift card all post to Table 24.
              </p>
            </div>
            <div className="absolute left-6 top-6 hidden w-[140px] rounded-2xl bg-[#1a1a1a] p-3 text-white shadow-mock md:block">
              <p className="text-[10px] tracking-wide text-white/50">TERMINAL</p>
              <p className="mt-2 text-[18px] font-semibold">$80.00</p>
              <p className="mt-1 text-[11px] text-orange-mid">Visa</p>
            </div>
            <div className="absolute left-[22%] top-10 hidden w-[118px] rounded-[24px] bg-night p-1.5 shadow-mock lg:block">
              <div className="rounded-[18px] bg-white px-3 py-4 text-center">
                <p className="text-[9px] font-semibold tracking-wide text-ink-faint">APPLE PAY</p>
                <p className="mt-2 text-[16px] font-semibold">$30.00</p>
              </div>
            </div>
            <div className="absolute right-5 top-5 w-[min(100%-2.5rem,340px)] md:right-8 md:top-8">
              <PlannerWindow title="Table 24" subtitle="One check">
                <div className="p-4">
                  <p className="text-[24px] font-semibold tracking-tight">$248.60</p>
                  <div className="mt-3 space-y-1.5 text-sm">
                    {[
                      ["Card", "$80"],
                      ["Cash", "$40"],
                      ["Apple Pay", "$30"],
                      ["Gift card", "$20"],
                    ].map(([method, amount]) => (
                      <div key={method} className="flex justify-between border-b border-line py-1.5">
                        <span className="text-ink-muted">{method}</span>
                        <span className="font-semibold">{amount}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-1">
                      <span className="font-semibold">Remaining</span>
                      <span className="font-semibold text-orange">$78.60</span>
                    </div>
                  </div>
                </div>
              </PlannerWindow>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function PayFlexibility() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <Inner max="max-w-[1450px]" className="space-y-20 md:space-y-28">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="max-w-lg">
              <SectionLabel>Payment flexibility</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-4xl">
                Give every guest a way to pay.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                Vertex lets staff split checks equally, by item, or by custom
                amount while keeping every guest’s share on the same check.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Split equally",
                  "Split by item",
                  "Custom amounts",
                  "Partial payments",
                  "Mixed payment methods",
                ].map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
            <LaptopShell>
              <div className="px-5 pb-5 pt-6 md:px-6">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[16px] font-semibold">Table 24</p>
                    <p className="mt-1 text-[12px] text-ink-muted">6 guests · $248.60 total</p>
                  </div>
                  <div className="inline-flex rounded-full border border-line bg-fog p-0.5 text-[11px] font-semibold">
                    <span className="rounded-full bg-orange px-2.5 py-1 text-white">Equal</span>
                    <span className="px-2.5 py-1 text-ink-muted">By Item</span>
                    <span className="px-2.5 py-1 text-ink-muted">Custom</span>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {[
                    ["Guest 01", "$41.43", "Paid"],
                    ["Guest 02", "$41.43", "Paid"],
                    ["Guest 03", "$41.43", "Paid"],
                    ["Guest 04", "$41.43", "Partial"],
                    ["Guest 05", "$41.43", "Pending"],
                    ["Guest 06", "$41.43", "Pending"],
                  ].map(([guest, amount, status]) => (
                    <div
                      key={guest}
                      className="flex items-center justify-between rounded-xl border border-line bg-fog px-3 py-2"
                    >
                      <p className="text-[13px] font-semibold">{guest}</p>
                      <div className="flex items-center gap-3">
                        <p className="text-[13px] font-semibold">{amount}</p>
                        <StatusPill
                          tone={
                            status === "Paid" ? "ready" : status === "Partial" ? "medium" : "neutral"
                          }
                        >
                          {status === "Paid" ? "✓ Paid" : status}
                        </StatusPill>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between border-t border-line pt-3 text-[13px]">
                  <span className="text-ink-muted">
                    Paid <span className="font-semibold text-ink">$170.00</span>
                  </span>
                  <span className="font-semibold text-orange">Remaining $78.60</span>
                </div>
              </div>
            </LaptopShell>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-panel shadow-mock">
              <Image
                src="https://images.unsplash.com/photo-1758519289714-519a9d9b96e3?auto=format&fit=crop&w=1600&q=80"
                alt="Guest paying with a card at a restaurant table"
                width={1400}
                height={900}
                className="h-[380px] w-full object-cover md:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 w-[min(100%-2.5rem,260px)]">
                <PlannerWindow title="Table 24" subtitle="Live">
                  <div className="p-3.5">
                    <p className="text-[20px] font-semibold tracking-tight">$248.60</p>
                    <div className="mt-2 grid grid-cols-3 gap-1.5 text-center text-[10px]">
                      <div className="rounded-lg bg-fog py-1.5">
                        <p className="text-[13px] font-semibold">3</p>
                        <p className="text-ink-muted">Paid</p>
                      </div>
                      <div className="rounded-lg bg-orange-soft py-1.5">
                        <p className="text-[13px] font-semibold text-orange">1</p>
                        <p className="text-ink-muted">Partial</p>
                      </div>
                      <div className="rounded-lg bg-fog py-1.5">
                        <p className="text-[13px] font-semibold">2</p>
                        <p className="text-ink-muted">Pending</p>
                      </div>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-fog">
                      <div className="h-full w-[68%] rounded-full bg-orange" />
                    </div>
                    <p className="mt-1.5 text-[11px] text-ink-muted">68% settled</p>
                  </div>
                </PlannerWindow>
              </div>
            </div>
            <div className="max-w-lg">
              <SectionLabel>Live balance</SectionLabel>
              <h2 className="serif-tight text-3xl md:text-4xl">
                Always know what&apos;s still owed.
              </h2>
              <p className="mt-4 text-[16px] leading-7 text-ink-muted">
                Staff can see paid, partial, and pending shares in real time, so
                there is no manual math at the table.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                {[
                  ["$248.60", "Table total"],
                  ["$170.00", "Paid"],
                  ["$78.60", "Remaining"],
                  ["3 / 6", "Guests settled"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className={`text-[22px] font-semibold tracking-tight ${label === "Remaining" ? "text-orange" : ""}`}>
                      {value}
                    </p>
                    <p className="mt-1 text-[13px] text-ink-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function PaymentJourney() {
  const steps = [
    { title: "Unsplit", amount: "$248.60", note: "One open check", extra: "6 guests" },
    { title: "Split", amount: "6 guests", note: "Equal · item · custom", extra: "Shares set" },
    { title: "Payments", amount: "4 methods", note: "Visa · Cash · Apple Pay · Gift", extra: "Posting" },
    { title: "Partial", amount: "$170 paid", note: "$78.60 remaining", extra: "68%" },
    { title: "Settled", amount: "$248.60", note: "Table closed", extra: "Complete" },
  ];

  return (
    <section className="bg-fog py-20 md:py-24">
      <FeatureWide>
        <Inner max="max-w-[1450px]">
          <h2 className="serif-tight max-w-2xl text-3xl md:text-5xl">
            From one check to a fully settled table.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-ink-muted">
            The process stays on one Vertex check — from unsplit to complete.
          </p>
          <div className="mt-6 overflow-hidden rounded-panel border border-line bg-white p-4 shadow-mock md:p-6">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[15px] font-semibold">Table 24 payment journey</p>
                <p className="mt-1 text-[13px] text-ink-muted">Harbor Dining Room · one check</p>
              </div>
              <StatusPill tone="medium">Partial · $78.60 remaining</StatusPill>
            </div>
            <div className="mb-4 h-2 overflow-hidden rounded-full bg-line">
              <div className="h-full w-[68%] rounded-full bg-orange" />
            </div>
            <div className="grid md:grid-cols-5">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`py-2.5 md:px-4 md:py-0 ${
                    index < steps.length - 1 ? "border-b border-line md:border-b-0 md:border-r" : ""
                  }`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-orange">
                    {step.title}
                  </p>
                  <p className="mt-2 text-[18px] font-semibold tracking-tight">{step.amount}</p>
                  <p className="mt-1 text-[12px] leading-5 text-ink-muted">{step.note}</p>
                  <div className="mt-2">
                    <StatusPill tone={index === 4 ? "ready" : index === 3 ? "medium" : "neutral"}>
                      {index === 4 ? "✓ Complete" : step.extra}
                    </StatusPill>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-12 text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
            Table 24 · Live balance
          </p>
          <div className="relative mt-4 overflow-hidden rounded-panel shadow-mock">
            <Image
              src={payImage}
              alt="Server taking payment at a restaurant"
              width={1800}
              height={900}
              className="h-[480px] w-full object-cover md:h-[540px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
            <div className="absolute bottom-6 left-6 max-w-md text-white md:bottom-8 md:left-8">
              <h2 className="serif-tight text-3xl md:text-4xl">
                Let every guest pay their way.
              </h2>
              <p className="mt-3 text-[15px] leading-6 text-white/85">
                Staff see paid, partial, and pending shares while they are still
                at the table.
              </p>
            </div>
            <div className="absolute right-5 top-5 w-[min(100%-2.5rem,340px)] md:right-8 md:top-8">
              <PlannerWindow title="Table 24" subtitle="Live">
                <div className="p-4">
                  <p className="text-[13px] text-ink-muted">6 guests</p>
                  <p className="mt-1 text-[24px] font-semibold tracking-tight">$248.60</p>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="rounded-lg bg-fog py-2">
                      <p className="text-[15px] font-semibold">3</p>
                      <p className="text-ink-muted">Paid</p>
                    </div>
                    <div className="rounded-lg bg-orange-soft py-2">
                      <p className="text-[15px] font-semibold text-orange">1</p>
                      <p className="text-ink-muted">Partial</p>
                    </div>
                    <div className="rounded-lg bg-fog py-2">
                      <p className="text-[15px] font-semibold">2</p>
                      <p className="text-ink-muted">Pending</p>
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-fog">
                    <div className="h-full w-[68%] rounded-full bg-orange" />
                  </div>
                  <p className="mt-2 text-[12px] text-ink-muted">68% settled</p>
                </div>
              </PlannerWindow>
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

export function PayInsights() {
  return (
    <section className="bg-white py-16 md:py-24">
      <FeatureWide>
        <Inner max="max-w-[1400px]">
          <h2 className="serif-tight max-w-2xl text-3xl md:text-5xl">
            Always know where the table stands.
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-ink-muted">
            Live values on Table 24 — not campaign statistics.
          </p>
          <div className="mt-7 overflow-hidden rounded-panel border border-line bg-white p-5 shadow-mock md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-orange">
              Table payment snapshot
            </p>
            <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">
              {[
                ["$248.60", "Table total"],
                ["$170.00", "Paid"],
                ["$78.60", "Remaining"],
                ["6", "Guests"],
                ["3 / 6", "Settled"],
                ["4", "Methods"],
                ["68%", "Progress"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className={`text-[24px] font-semibold tracking-tight ${label === "Remaining" ? "text-orange" : ""}`}>
                    {value}
                  </p>
                  <p className="mt-1 text-[12px] text-ink-muted">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-8 border-t border-line pt-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex items-end justify-between text-[13px]">
                  <span className="font-semibold">Paid $170.00</span>
                  <span className="text-orange">Remaining $78.60</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-line">
                  <div className="h-full w-[68%] rounded-full bg-orange" />
                </div>
              </div>
              <MixBars />
            </div>
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}

const capabilities = [
  {
    title: "Split by Item",
    copy: "Assign specific dishes and drinks to each guest on the check.",
    path: "M7 5v14M7 5h8l2 2v12H7M11 10h4M11 14h3",
  },
  {
    title: "Split Equally",
    copy: "Divide the bill quickly across the table, down to the last cent.",
    path: "M5 12h14M12 5v14",
  },
  {
    title: "Custom Amounts",
    copy: "Enter a share by dollar amount, then apply the remaining balance.",
    path: "M4 7h16M7 12h7M7 16h10",
  },
  {
    title: "Partial Payments",
    copy: "Accept payments as guests are ready without closing the whole table.",
    path: "M4 16c3-7 6-10 8-10s5 3 8 10M8 16a4 4 0 1 0 8 0",
  },
  {
    title: "Mixed Payments",
    copy: "Combine card, cash, wallets, and gift cards on the same check.",
    path: "M4 8h16v10H4zM4 12h16",
  },
  {
    title: "Live Balance",
    copy: "Always know what remains unpaid as each tender posts.",
    path: "M12 5v14M7 9h10M7 15h7",
  },
];

export function FastService() {
  return (
    <section className="bg-mist py-12 md:py-16">
      <FeatureWide>
        <Inner max="max-w-[1400px]">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="serif-tight max-w-2xl text-3xl md:text-4xl">
            Everything staff need to close a group check.
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-card border border-line bg-white p-5 shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-soft text-orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d={item.path}
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mt-4 text-[17px] font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-ink-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </Inner>
      </FeatureWide>
    </section>
  );
}
