"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { featureGroups, productLinks } from "@/lib/navigation";

const links = [
  { label: "Products", href: "/#products", menu: "products" as const },
  { label: "Features", href: "/features", menu: "features" as const },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Resources", href: "/#resources" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"products" | "features" | null>(
    null,
  );
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const overHero =
    pathname === "/" || pathname.startsWith("/products/");

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  function openMenu(menu: "products" | "features") {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[72px] max-w-site items-center justify-between px-5 md:px-8">
        <Logo tone={overHero ? "light" : "dark"} />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) =>
            link.menu ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => openMenu(link.menu)}
                onMouseLeave={scheduleClose}
              >
                <div className="flex items-center gap-1">
                  <Link
                    href={link.href}
                    className={`text-[15px] font-medium ${
                      overHero ? "text-white/95 hover:text-white" : "text-ink hover:text-orange"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    className={`flex items-center ${
                      overHero ? "text-white/95" : "text-ink"
                    }`}
                    aria-label={`${link.label} menu`}
                    aria-expanded={activeMenu === link.menu}
                    onClick={() =>
                      setActiveMenu((current) =>
                        current === link.menu ? null : link.menu,
                      )
                    }
                  >
                    <ChevronDown />
                  </button>
                </div>

                {activeMenu === link.menu && link.menu === "products" && (
                  <div className="absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-3">
                    <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-line bg-white p-2 shadow-mock">
                      {productLinks.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block rounded-xl px-4 py-3 hover:bg-fog"
                          onClick={() => setActiveMenu(null)}
                        >
                          <p className="text-[15px] font-semibold text-ink">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-sm text-ink-muted">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeMenu === link.menu && link.menu === "features" && (
                  <div className="absolute left-1/2 top-full z-50 w-[440px] -translate-x-1/2 pt-3">
                    <div className="rounded-2xl border border-line bg-white p-3 shadow-mock">
                      {featureGroups.map((group) => (
                        <div key={group.title} className="px-1 py-1">
                          <Link
                            href={group.href}
                            className="block px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange hover:underline"
                            onClick={() => setActiveMenu(null)}
                          >
                            {group.title}
                          </Link>
                          {group.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="block rounded-xl px-3 py-3 hover:bg-fog"
                              onClick={() => setActiveMenu(null)}
                            >
                              <p className="text-[15px] font-semibold text-ink">
                                {item.title}
                              </p>
                              <p className="mt-0.5 text-sm text-ink-muted">
                                {item.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      ))}
                      <div className="mt-1 border-t border-line px-3 pt-3">
                        <Link
                          href="/features"
                          className="text-[13px] font-semibold text-ink hover:text-orange"
                          onClick={() => setActiveMenu(null)}
                        >
                          View all features →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] font-medium ${
                  overHero
                    ? "text-white/95 hover:text-white"
                    : "text-ink hover:text-orange"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/get-started"
            className={`text-[15px] font-medium ${
              overHero ? "text-white" : "text-ink"
            }`}
          >
            Login
          </Link>
          <Button href="/get-started" size="sm">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
            overHero ? "text-white" : "text-ink"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div
          className={`border-t px-5 py-5 lg:hidden ${
            overHero
              ? "border-white/10 bg-night"
              : "border-line bg-white shadow-mock"
          }`}
        >
          <div className="flex flex-col gap-1">
            <p className="px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
              Products
            </p>
            {productLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`rounded-lg px-2 py-2.5 ${
                  overHero ? "text-white" : "text-ink"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <p className="mt-3 px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange">
              Features
            </p>
            {featureGroups.map((group) => (
              <div key={group.title}>
                <Link
                  href={group.href}
                  className={`rounded-lg px-2 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] ${
                    overHero ? "text-white/70" : "text-ink-muted"
                  }`}
                >
                  {group.title}
                </Link>
                {group.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`rounded-lg px-2 py-2.5 font-semibold ${
                      overHero ? "text-white" : "text-ink"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/features"
              className={`rounded-lg px-2 py-2.5 ${
                overHero ? "text-white" : "text-ink"
              }`}
            >
              All Features
            </Link>
            <Link
              href="/#pricing"
              className={`rounded-lg px-2 py-2.5 ${
                overHero ? "text-white" : "text-ink"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/#resources"
              className={`rounded-lg px-2 py-2.5 ${
                overHero ? "text-white" : "text-ink"
              }`}
            >
              Resources
            </Link>
            <div className="mt-3 flex gap-3">
              <Button href="/get-started" className="flex-1">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      {open ? (
        <path
          d="M5 5 17 17M17 5 5 17"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h14M4 11h14M4 15h14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
