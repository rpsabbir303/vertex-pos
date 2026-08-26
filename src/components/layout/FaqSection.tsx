"use client";

import { useState } from "react";
import { Container } from "@/components/ui/LayoutBits";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Questions operators ask first.",
  compact = false,
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(0);

  const body = (
    <>
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
        {eyebrow}
      </p>
      <h2 className="serif-tight mt-3 max-w-xl text-3xl md:text-4xl">{title}</h2>
      <div className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
        {items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.question}>
              <button
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="text-[16px] font-semibold text-ink">
                  {item.question}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d={isOpen ? "M2 6h8" : "M2 6h8M6 2v8"}
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <p className="max-w-3xl px-5 pb-5 text-[15px] leading-7 text-ink-muted md:px-6">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <section className={`bg-fog ${compact ? "py-16 md:py-20" : "section-pad"}`}>
      {compact ? (
        <div className="mx-auto w-full max-w-[960px] px-5 md:px-8">{body}</div>
      ) : (
        <Container>{body}</Container>
      )}
    </section>
  );
}
