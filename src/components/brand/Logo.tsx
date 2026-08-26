import Link from "next/link";

export function Logo({
  tone = "dark",
  compact = false,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const text = tone === "light" ? "text-white" : "text-ink";

  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Vertex POS home">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange text-[15px] font-semibold tracking-tight text-white">
        V
      </span>
      {!compact && (
        <span className={`text-[17px] font-semibold tracking-tight ${text}`}>
          Vertex <span className="font-medium">POS</span>
        </span>
      )}
    </Link>
  );
}
