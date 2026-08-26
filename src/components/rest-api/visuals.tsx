"use client";

import { useId, useState } from "react";
import {
  codeExamples,
  endpointGroups,
  webhookEvents,
} from "./catalog";

export function MethodBadge({
  method,
  className = "",
}: {
  method: string;
  className?: string;
}) {
  const tone =
    method === "GET"
      ? "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30"
      : method === "POST"
        ? "bg-orange/20 text-orange-mid ring-orange/35"
        : method === "PATCH"
          ? "bg-sky-500/15 text-sky-300 ring-sky-500/30"
          : "bg-white/10 text-white/80 ring-white/20";

  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wide ring-1 transition-colors ${tone} ${className}`}
    >
      {method}
    </span>
  );
}

export function LightMethodBadge({
  method,
  className = "",
}: {
  method: string;
  className?: string;
}) {
  const tone =
    method === "GET"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200 group-hover:bg-emerald-100"
      : method === "POST"
        ? "bg-orange-soft text-orange ring-orange/25 group-hover:bg-[#FFE4D6]"
        : method === "PATCH"
          ? "bg-sky-50 text-sky-700 ring-sky-200 group-hover:bg-sky-100"
          : "bg-fog text-ink-muted ring-line";

  return (
    <span
      className={`inline-flex min-w-[3.5rem] items-center justify-center rounded px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wide ring-1 transition-colors ${tone} ${className}`}
    >
      {method}
    </span>
  );
}

export function HeroApiPanel() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-orange/25 via-transparent to-transparent opacity-80 blur-2xl md:-inset-4"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0B1220] shadow-mock ring-1 ring-orange/30">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 font-mono text-[11px] text-white/45">
              request · orders
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/30">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            200 OK
          </span>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
              Request
            </p>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <MethodBadge method="GET" />
              <code className="font-mono text-[13px] text-orange-mid">
                /v1/orders
              </code>
            </div>
            <pre className="overflow-x-auto font-mono text-[12px] leading-5 text-white/70">
              <span className="text-white/40">Authorization:</span> Bearer
              •••••••••••
            </pre>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-black/30 p-3 font-mono text-[12px] leading-5 text-white/75">
              {`{
  "table": 12,
  "status": "open"
}`}
            </pre>
          </div>

          <div className="p-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
              Response
            </p>
            <pre className="overflow-x-auto font-mono text-[12px] leading-6">
              <span className="text-white/40">{"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-sky-300">&quot;order_id&quot;</span>
              <span className="text-white/40">: </span>
              <span className="text-amber-200">&quot;ORD-1842&quot;</span>
              <span className="text-white/40">,</span>
              {"\n"}
              {"  "}
              <span className="text-sky-300">&quot;status&quot;</span>
              <span className="text-white/40">: </span>
              <span className="text-amber-200">&quot;preparing&quot;</span>
              <span className="text-white/40">,</span>
              {"\n"}
              {"  "}
              <span className="text-sky-300">&quot;total&quot;</span>
              <span className="text-white/40">: </span>
              <span className="text-emerald-300">42.50</span>
              <span className="text-white/40">,</span>
              {"\n"}
              {"  "}
              <span className="text-sky-300">&quot;table&quot;</span>
              <span className="text-white/40">: </span>
              <span className="text-emerald-300">12</span>
              {"\n"}
              <span className="text-white/40">{"}"}</span>
            </pre>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5">
          <span className="font-mono text-[10px] text-white/35">
            illustrative example
          </span>
          <span className="font-mono text-[11px] text-orange-mid">48 ms</span>
        </div>
      </div>
    </div>
  );
}

export function CodeExamplesPanel() {
  const [active, setActive] = useState(0);
  const tabId = useId();
  const example = codeExamples[active];

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B1220] shadow-mock ring-1 ring-white/5">
      <div
        role="tablist"
        aria-label="API code examples"
        className="flex gap-1 overflow-x-auto border-b border-white/10 px-2 pt-2"
      >
        {codeExamples.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${tabId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${tabId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`shrink-0 rounded-t-md px-3.5 py-2.5 font-mono text-[12px] font-medium transition-colors ${
                selected
                  ? "bg-white/[0.07] text-white ring-1 ring-inset ring-white/10"
                  : "text-white/45 hover:text-white/80"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${tabId}-panel-${example.id}`}
        aria-labelledby={`${tabId}-tab-${example.id}`}
        className="p-4 md:p-5"
      >
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <MethodBadge method={example.method} />
          <code className="font-mono text-[13px] text-white/80">
            {example.path}
          </code>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            200 OK
          </span>
          <span className="font-mono text-[11px] text-white/40">52 ms</span>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
              Request
            </p>
            <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/35 p-4 font-mono text-[12px] leading-6 text-white/75">
              {example.request}
            </pre>
          </div>
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
              Response
            </p>
            <pre className="overflow-x-auto rounded-lg border border-orange/20 bg-black/35 p-4 font-mono text-[12px] leading-6 text-emerald-200/90">
              {example.response}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EndpointExplorer() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white">
      {endpointGroups.map((group, groupIndex) => (
        <div
          key={group.title}
          className={groupIndex > 0 ? "border-t border-line" : undefined}
        >
          <div className="flex items-center justify-between bg-[#FAF8F4] px-4 py-3 md:px-5">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">
              {group.title}
            </h3>
            <span className="font-mono text-[11px] text-ink-faint">
              {group.endpoints.length} endpoints
            </span>
          </div>
          <ul>
            {group.endpoints.map((endpoint) => (
              <li key={`${endpoint.method}-${endpoint.path}`}>
                <div className="group flex cursor-default items-center gap-3 border-t border-line/80 px-4 py-3.5 transition-colors first:border-t-0 hover:bg-orange-soft/40 md:gap-4 md:px-5">
                  <LightMethodBadge method={endpoint.method} />
                  <div className="min-w-0 flex-1">
                    <code className="block truncate font-mono text-[13px] text-ink md:text-[14px]">
                      {endpoint.path}
                    </code>
                    <p className="mt-0.5 text-[13px] text-ink-muted">
                      {endpoint.description}
                    </p>
                  </div>
                  <span
                    className="hidden shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-orange sm:inline"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function eventToPayloadName(event: string) {
  return event.toLowerCase();
}

export function WebhookStream() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-xl border border-line bg-white p-4 md:p-5">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
          Event stream
        </p>
        <ul className="space-y-2">
          {webhookEvents.map((event, index) => {
            const isActive = index === active;
            return (
              <li key={event}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left font-mono text-[12px] transition-all md:text-[13px] ${
                    isActive
                      ? "border-orange/40 bg-orange-soft text-ink shadow-[0_0_0_1px_rgba(241,90,36,0.12)]"
                      : "border-transparent bg-fog/60 text-ink-muted hover:border-line hover:bg-white"
                  }`}
                >
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      isActive
                        ? "animate-pulse bg-orange"
                        : "bg-ink-faint/50"
                    }`}
                    aria-hidden
                  />
                  {event}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
          <span className="h-px flex-1 bg-line" aria-hidden />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-orange">
            Your application
          </span>
          <span className="h-px flex-1 bg-line" aria-hidden />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B1220] p-4 shadow-mock md:p-5">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
            Webhook payload
          </p>
          <span className="font-mono text-[11px] text-orange-mid">
            POST · live
          </span>
        </div>
        <pre className="overflow-x-auto font-mono text-[12px] leading-6 text-white/80 md:text-[13px]">
          {`{
  "event": "${eventToPayloadName(webhookEvents[active])}",
  "timestamp": "2026-08-24T12:45:10Z",
  "data": {
    "order_id": "ORD-1842",
    "status": "new"
  }
}`}
        </pre>
        <p className="mt-4 font-mono text-[10px] text-white/30">
          Illustrative payload for UI demonstration
        </p>
      </div>
    </div>
  );
}

export function SecurityPanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
      <div className="border-b border-line bg-[#FAF8F4] px-5 py-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
          Integration credentials
        </p>
      </div>
      <div className="space-y-5 p-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
            API Key
          </p>
          <p className="mt-1.5 font-mono text-[15px] tracking-wider text-ink">
            ••••••••••••••••••
          </p>
        </div>
        <div className="border-t border-line pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
            Status
          </p>
          <p className="mt-1.5 flex items-center gap-2 text-[14px] font-semibold text-ink">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            Connected
          </p>
        </div>
        <div className="border-t border-line pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
            Access
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {["Orders", "Menu", "Customers"].map((scope) => (
              <span
                key={scope}
                className="rounded-md border border-line bg-fog px-2.5 py-1 text-[12px] font-medium text-ink-muted"
              >
                {scope}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CtaCodeAccent() {
  return (
    <div className="relative hidden overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-[11px] leading-5 text-white/55 lg:block">
      <div
        className="absolute right-0 top-0 h-24 w-24 bg-orange/20 blur-3xl"
        aria-hidden
      />
      <p className="text-orange-mid">GET /v1/orders</p>
      <p className="mt-2 text-white/35">Authorization: Bearer •••••</p>
      <p className="mt-3 text-emerald-300/80">{`{ "status": "ok" }`}</p>
    </div>
  );
}
