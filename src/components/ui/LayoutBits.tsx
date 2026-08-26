export function FeatureWide({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`feature-container ${className}`}>
      {children}
    </div>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-site px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-orange">
      {children}
    </p>
  );
}

export function CheckItem({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "onOrange";
}) {
  const mark =
    tone === "onOrange"
      ? "bg-white text-orange"
      : "bg-orange text-white";
  const text = tone === "onOrange" ? "text-white/95" : "text-ink-muted";

  return (
    <li className={`flex items-start gap-3 text-[15px] leading-6 ${text}`}>
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${mark}`}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path
            d="M1.5 5.2 3.8 7.5 8.5 2.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}
