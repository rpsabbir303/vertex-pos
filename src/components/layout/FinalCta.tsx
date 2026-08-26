import { Button } from "@/components/ui/Button";
import { CheckItem, Container } from "@/components/ui/LayoutBits";

type FinalCtaProps = {
  headline: string;
  copy: string;
  points?: string[];
};

export function FinalCta({
  headline,
  copy,
  points = [
    "Live walkthrough of your kitchen workflow",
    "Hardware options that fit your stations",
    "No long setup before you see the product",
  ],
}: FinalCtaProps) {
  return (
    <section className="bg-orange">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="text-white">
          <h2 className="serif-tight text-4xl leading-tight md:text-5xl">
            {headline}
          </h2>
          <p className="mt-4 max-w-lg text-[16px] leading-7 text-white/90">
            {copy}
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <CheckItem key={point} tone="onOrange">
                {point}
              </CheckItem>
            ))}
          </ul>
          <form
            action="/get-started"
            className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              placeholder="Email or phone"
              className="h-12 flex-1 rounded-lg border-0 px-4 text-[15px] text-ink outline-none placeholder:text-ink-faint"
            />
            <Button href="/get-started" variant="white" className="sm:w-auto">
              Request Demo
            </Button>
          </form>
        </div>
        <HardwareVisual />
      </Container>
    </section>
  );
}

function HardwareVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -left-6 top-10 hidden h-40 w-28 rounded-2xl bg-night/20 blur-2xl md:block" />
      <div className="relative mx-auto w-[280px] rounded-[28px] border border-white/20 bg-[#1d1d1d] p-3 shadow-mock">
        <div className="rounded-2xl bg-[#f6f4f1] p-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2 w-16 rounded bg-line" />
            <div className="h-2 w-8 rounded bg-orange/40" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Grill", "Salad", "Pasta", "Fries", "Tacos", "Soup"].map((item) => (
              <div
                key={item}
                className="flex aspect-square flex-col justify-end rounded-lg bg-white p-2 text-[10px] font-medium text-ink shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-orange px-3 py-2 text-center text-xs font-semibold text-white">
            Send to kitchen
          </div>
        </div>
      </div>
      <div className="absolute -right-2 bottom-6 w-[150px] rounded-xl bg-white p-3 shadow-mock">
        <p className="text-[11px] font-semibold text-ink">Card reader</p>
        <p className="mt-1 text-[11px] text-ink-muted">Tap · Chip · Swipe</p>
        <div className="mt-3 h-8 rounded-md bg-night" />
      </div>
    </div>
  );
}
