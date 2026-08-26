import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/LayoutBits";
import { footerColumns } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-night text-white">
      <div className="rounded-t-[28px] bg-white px-5 py-14 text-ink md:px-8 md:py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.1fr_1.6fr_0.9fr]">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-sm leading-6 text-ink-muted">
                The restaurant platform for POS, kitchen, production planning,
                and payments — built for every rush.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <p className="text-sm font-semibold">{column.title}</p>
                  <ul className="mt-4 space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-ink-muted hover:text-ink"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm font-semibold">How can we help?</p>
              <p className="mt-4 text-sm leading-6 text-ink-muted">
                Talk with a Vertex specialist about hardware, onboarding, and
                the right modules for your kitchen.
              </p>
              <div className="mt-5 flex gap-3">
                {["in", "x", "ig"].map((name) => (
                  <span
                    key={name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-xs font-semibold uppercase text-ink-muted"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-orange">
        <Container className="flex flex-col items-start justify-between gap-4 py-5 md:flex-row md:items-center">
          <p className="text-[17px] font-semibold text-white">
            See how Vertex POS stacks up
          </p>
          <div className="flex items-center gap-3 text-white/90">
            <span className="text-sm">Compare plans</span>
            <span className="text-white/50">·</span>
            <Link href="/get-started" className="text-sm font-semibold underline-offset-4 hover:underline">
              Book a demo
            </Link>
          </div>
        </Container>
      </div>

      <div className="py-10 text-center">
        <p className="serif-tight text-5xl text-white md:text-7xl">Vertex POS</p>
      </div>
    </footer>
  );
}
