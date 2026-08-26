import type { Metadata } from "next";
import Image from "next/image";
import { FaqSection } from "@/components/layout/FaqSection";
import { FinalCta } from "@/components/layout/FinalCta";
import { Button } from "@/components/ui/Button";
import { CheckItem, Container, SectionLabel } from "@/components/ui/LayoutBits";
import { PlannerWindow, StatusPill } from "@/components/production-planner/mockups";

export const metadata: Metadata = {
  title: "POS & Billing",
  description:
    "A fast Vertex POS for dine-in, takeaway, and delivery — with table management, flexible billing, and payments that hold up during the rush.",
};

const heroImage =
  "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=2000&q=80";
const orderImage =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80";

export default function PosBillingPage() {
  return (
    <>
      <section className="relative min-h-[640px] overflow-hidden bg-night md:min-h-[700px]">
        <Image
          src={heroImage}
          alt="Restaurant staff handing a takeaway order to a courier"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        <Container className="relative flex min-h-[640px] items-center pt-24 md:min-h-[700px]">
          <div className="max-w-xl text-white">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-orange-mid">
              POS & Billing
            </p>
            <h1 className="serif-tight mt-4 text-4xl leading-[1.08] md:text-6xl">
              A fast <span className="accent-word">POS for dine-in,</span> takeaway
              & delivery.
            </h1>
            <p className="mt-5 text-[16px] leading-7 text-white/85">
              Take the order, send it to the kitchen, and close the check — at
              the table, the counter, or the door — without switching systems.
            </p>
            <div className="mt-8">
              <Button href="/get-started">Get Started</Button>
            </div>
          </div>
        </Container>
        <div className="relative border-t border-white/10 bg-black/35">
          <Container className="grid grid-cols-2 gap-4 py-4 md:grid-cols-4 md:py-5">
            {[
              "Order at the table",
              "Quick billing & pay",
              "Online ordering",
              "Real-time reporting",
            ].map((item) => (
              <p key={item} className="text-sm font-medium text-white">
                {item}
              </p>
            ))}
          </Container>
        </div>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <div className="text-center">
            <h2 className="serif-tight text-3xl md:text-5xl">
              One POS. Every way you serve.
            </h2>
            <div className="mt-8 inline-flex rounded-full border border-line bg-fog p-1">
              {["Store", "Delivery", "Dine-in"].map((tab, i) => (
                <span
                  key={tab}
                  className={`rounded-full px-5 py-2 text-sm font-semibold ${
                    i === 2 ? "bg-orange text-white" : "text-ink-muted"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="serif-tight text-3xl md:text-4xl">
              Keep delivery details attached to every ticket.
            </h2>
            <ul className="mt-8 space-y-3">
              {[
                "Address, driver, and promised time on the order",
                "Status that updates from kitchen to the door",
                "One inbox for website, app, and aggregators",
                "Menu 86s that sync everywhere instantly",
              ].map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
          <PlannerWindow title="Order #45" subtitle="Delivery">
            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Harbor Kitchen</p>
                <StatusPill tone="medium">Out for delivery</StatusPill>
              </div>
              <Row label="Delivery address" value="18 Pine Street, Apt 4B" />
              <Row label="Driver" value="Elena · 6 min away" />
              <Row label="Amount" value="$42.80" />
              <div className="h-2 overflow-hidden rounded-full bg-fog">
                <div className="h-full w-2/3 rounded-full bg-orange" />
              </div>
            </div>
          </PlannerWindow>
        </Container>
      </section>

      <section className="section-pad bg-mist">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <PlannerWindow title="Floor plan" subtitle="Dine-in">
            <div className="grid grid-cols-3 gap-3 p-5">
              {["T1", "T2", "T3", "T4", "Bar", "T6", "Patio", "T8", "T9"].map(
                (table, i) => (
                  <div
                    key={table}
                    className={`flex aspect-square items-center justify-center rounded-xl text-sm font-semibold ${
                      i % 3 === 0
                        ? "bg-orange text-white"
                        : "border border-line bg-white text-ink"
                    }`}
                  >
                    {table}
                  </div>
                ),
              )}
            </div>
          </PlannerWindow>
          <div>
            <SectionLabel>Dine-in management</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-4xl">
              Keep every table and server in sync.
            </h2>
            <ul className="mt-8 space-y-3">
              {[
                "Live floor status for seated, ordered, and paid",
                "Move, merge, and split tables without a manager override",
                "Course firing that matches the kitchen’s pace",
                "Server views that stay current across handhelds",
              ].map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <h2 className="serif-tight max-w-xl text-3xl md:text-5xl">
            Flexible billing for real-world payments.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <BillingCard title="Split or merge bills">
              <p className="text-sm text-ink-muted">Seat 2 · $18.40 remaining</p>
              <div className="mt-3 flex gap-2">
                {["By seat", "By item", "Even"].map((mode, i) => (
                  <span
                    key={mode}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      i === 0 ? "bg-orange text-white" : "bg-fog text-ink-muted"
                    }`}
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </BillingCard>
            <BillingCard title="Card surcharge">
              <Row label="Subtotal" value="$64.00" />
              <Row label="Service fee" value="$1.92" />
              <Row label="New total" value="$65.92" />
            </BillingCard>
            <BillingCard title="Multi-tender payment">
              <Row label="Cash" value="$20.00" />
              <Row label="Card" value="$32.50" />
              <Row label="Gift card" value="$13.42" />
            </BillingCard>
            <BillingCard title="Tips">
              <div className="mt-2 flex flex-wrap gap-2">
                {["15%", "20%", "25%", "Other"].map((tip, i) => (
                  <span
                    key={tip}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                      i === 1 ? "bg-orange text-white" : "bg-fog text-ink"
                    }`}
                  >
                    {tip}
                  </span>
                ))}
              </div>
            </BillingCard>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-fog">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionLabel>Order control</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-4xl">
              Stay in control when plans change.
            </h2>
            <ul className="mt-8 space-y-3">
              {[
                "Voids, comps, and item moves with a reason code",
                "Send, hold, or rush a course without reprinting chaos",
                "Transfer checks between servers in a tap",
                "Keep a clean audit trail for close-of-day",
              ].map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-panel">
            <Image
              src={orderImage}
              alt="Restaurant team using a POS terminal"
              width={900}
              height={700}
              className="h-[420px] w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <PlannerWindow title="Handheld POS" subtitle="Offline mode">
            <div className="p-5">
              <StatusPill tone="medium">Offline · queueing 3 tickets</StatusPill>
              <p className="mt-4 text-sm font-semibold">Service continues</p>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                Orders, payments, and kitchen tickets keep moving. Everything
                syncs when the connection returns.
              </p>
              <div className="mt-4 rounded-xl bg-fog p-3 text-sm">
                Last synced 12 seconds ago
              </div>
            </div>
          </PlannerWindow>
          <div>
            <SectionLabel>Offline mode</SectionLabel>
            <h2 className="serif-tight text-3xl md:text-4xl">
              Keep selling when the internet drops.
            </h2>
            <ul className="mt-8 space-y-3">
              {[
                "Local order taking with automatic sync",
                "Card and cash still close the check",
                "Kitchen tickets continue to print or display",
                "No restart, no lost tables, no panic at the host stand",
              ].map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white pt-0">
        <Container>
          <h2 className="serif-tight max-w-xl text-3xl md:text-5xl">
            Built for every style of service.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Quick Service", "Counter speed with modifiers that do not slow the line."],
              ["Fine Dining", "Courses, seat numbers, and a quieter service flow."],
              ["Bar & Pub", "Tabs, splits, and handheld close-out at the rail."],
              ["Food Trucks", "Offline-ready billing in a tight space."],
              ["Coffee & Bakery", "Fast SKUs, loyalty, and a morning rush that stays orderly."],
              ["Ghost Kitchen", "Delivery tickets from every channel in one inbox."],
            ].map(([title, copy]) => (
              <article key={title} className="rounded-card border border-line p-6 shadow-card">
                <h3 className="text-[18px] font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{copy}</p>
                <p className="mt-4 text-sm font-semibold text-orange">Learn more</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection
        items={[
          {
            question: "Can Vertex handle dine-in, takeaway, and delivery together?",
            answer:
              "Yes. Every order type lands in the same POS, with the right ticket routing to the kitchen and a billing flow that matches how the guest is paying.",
          },
          {
            question: "Does billing support splits, tips, and multiple tenders?",
            answer:
              "Checks can be split by seat or item, combined, tipped, and paid with cash, card, gift card, or a mix in one close.",
          },
          {
            question: "What happens if the internet goes down?",
            answer:
              "The POS keeps taking orders and payments locally, then syncs tickets and settlements when the connection returns.",
          },
          {
            question: "Can servers take orders tableside?",
            answer:
              "Handhelds use the same menu, floor plan, and payments as the counter terminal, including course firing and table transfers.",
          },
          {
            question: "Is reporting available across locations?",
            answer:
              "Sales, tender mix, and product mix roll up by location or group, so operators are not exporting a spreadsheet to see the day.",
          },
        ]}
        title="POS questions, answered."
      />
      <FinalCta
        headline="Ready to run your whole restaurant on one platform?"
        copy="See Vertex POS on your floor plan, your menu, and your rush — with hardware that belongs in a real kitchen."
      />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line py-2 text-sm">
      <span className="text-ink-muted">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}

function BillingCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-card border border-line p-6 shadow-card">
      <h3 className="text-[18px] font-semibold">{title}</h3>
      <div className="mt-4">{children}</div>
    </article>
  );
}
