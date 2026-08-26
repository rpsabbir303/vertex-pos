import { Button } from "@/components/ui/Button";
import { FeatureWide, SectionLabel } from "@/components/ui/LayoutBits";
import {
  apiCapabilities,
  developerExperience,
  restApiProduct,
  securityPoints,
  useCases,
  workflowSteps,
} from "./catalog";
import {
  CodeExamplesPanel,
  CtaCodeAccent,
  EndpointExplorer,
  HeroApiPanel,
  SecurityPanel,
  WebhookStream,
} from "./visuals";

const flowNodes = [
  "Your application",
  "Vertex REST API",
  "Vertex POS",
  "Restaurant operations",
] as const;

export function RestApiHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F4] pt-28 pb-16 md:pt-32 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,26,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <FeatureWide className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <SectionLabel>{restApiProduct.name}</SectionLabel>
            <h1 className="serif-tight max-w-[18ch] text-[2.5rem] leading-[1.08] text-ink md:text-5xl lg:text-[3.35rem]">
              Connect Vertex POS to the way you work.
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-7 text-ink-muted md:text-[17px]">
              {restApiProduct.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#api-capabilities">Explore the API</Button>
              <Button href="/get-started" variant="secondary">
                Book a Demo
              </Button>
            </div>
            <p className="mt-6 font-mono text-[11px] tracking-wide text-ink-faint">
              Developers · Integrations · Real-time events
            </p>
          </div>
          <HeroApiPanel />
        </div>
      </FeatureWide>
    </section>
  );
}

export function ApiCapabilities() {
  return (
    <section id="api-capabilities" className="bg-white py-20 md:py-24">
      <FeatureWide>
        <div className="max-w-2xl">
          <SectionLabel>Built for integrations</SectionLabel>
          <h2 className="serif-tight text-3xl text-ink md:text-4xl">
            Everything you need to connect your POS.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {apiCapabilities.map((item, index) => (
            <article
              key={item.title}
              className={`border-t border-line pt-5 ${
                index % 2 === 1 ? "lg:translate-y-3" : ""
              }`}
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-line bg-[#FAF8F4]">
                <span className="h-3 w-3 rounded-[2px] bg-orange" aria-hidden />
              </div>
              <h3 className="text-[18px] font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                {item.copy}
              </p>
              <code className="mt-4 inline-block font-mono text-[12px] text-orange">
                {item.endpoint}
              </code>
            </article>
          ))}
        </div>
      </FeatureWide>
    </section>
  );
}

export function IntegrationWorkflow() {
  return (
    <section className="bg-[#F3F1EC] py-20 md:py-24">
      <FeatureWide>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="serif-tight text-3xl text-ink md:text-4xl">
            Connect your systems in a few simple steps.
          </h2>
        </div>

        {/* Desktop horizontal flow */}
        <div className="mt-12 hidden items-center justify-center gap-2 lg:flex">
          {flowNodes.map((node, index) => (
            <div key={node} className="flex items-center gap-2">
              <div className="min-w-[150px] rounded-lg border border-line bg-white px-4 py-3 text-center shadow-card transition-transform hover:-translate-y-0.5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-ink">
                  {node}
                </p>
              </div>
              {index < flowNodes.length - 1 ? (
                <div className="flex w-10 items-center" aria-hidden>
                  <span className="h-px flex-1 bg-orange/50" />
                  <span className="text-orange">→</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Mobile / tablet vertical timeline */}
        <ol className="relative mx-auto mt-10 max-w-md space-y-0 lg:hidden">
          {flowNodes.map((node, index) => (
            <li key={node} className="relative flex gap-4 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="mt-1.5 h-3 w-3 rounded-full bg-orange ring-4 ring-orange/15" />
                {index < flowNodes.length - 1 ? (
                  <span className="mt-1 w-px flex-1 bg-orange/35" aria-hidden />
                ) : null}
              </div>
              <div className="flex-1 rounded-lg border border-line bg-white px-4 py-3 shadow-card">
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink">
                  {node}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step) => (
            <div
              key={step.step}
              className="border-l-2 border-orange/40 bg-white/70 pl-4 pr-2 py-1"
            >
              <p className="font-mono text-[12px] text-orange">{step.step}</p>
              <h3 className="mt-1 text-[16px] font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-6 text-ink-muted">
                {step.copy}
              </p>
            </div>
          ))}
        </div>
      </FeatureWide>
    </section>
  );
}

export function CodeExampleSection() {
  return (
    <section className="bg-[#0B1220] py-20 md:py-24">
      <FeatureWide>
        <div className="max-w-2xl">
          <h2 className="serif-tight text-3xl text-white md:text-4xl">
            Simple requests. Powerful data.
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-white/55">
            Explore illustrative request and response patterns for orders, menu,
            and webhook events.
          </p>
        </div>
        <div className="mt-10">
          <CodeExamplesPanel />
        </div>
      </FeatureWide>
    </section>
  );
}

export function EndpointsSection() {
  return (
    <section id="api-reference" className="bg-[#FAF8F4] py-20 md:py-24">
      <FeatureWide>
        <div className="max-w-2xl">
          <SectionLabel>API reference</SectionLabel>
          <h2 className="serif-tight text-3xl text-ink md:text-4xl">
            One API for your restaurant data.
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-ink-muted">
            Example endpoints for demonstration. Treat paths and payloads as
            illustrative UI content.
          </p>
        </div>
        <div className="mt-10">
          <EndpointExplorer />
        </div>
      </FeatureWide>
    </section>
  );
}

export function WebhooksSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="serif-tight text-3xl text-ink md:text-4xl">
              Stay in sync with real-time events.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-ink-muted">
              Webhooks notify your application when important events happen
              inside Vertex POS.
            </p>
          </div>
          <WebhookStream />
        </div>
      </FeatureWide>
    </section>
  );
}

export function SecuritySection() {
  return (
    <section className="bg-[#F3F1EC] py-20 md:py-24">
      <FeatureWide>
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="serif-tight text-3xl text-ink md:text-4xl">
              Secure by design.
            </h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {securityPoints.map((point) => (
                <li key={point.title} className="border-t border-line/80 pt-4">
                  <h3 className="text-[16px] font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                    {point.copy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <SecurityPanel />
        </div>
      </FeatureWide>
    </section>
  );
}

export function UseCasesSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <FeatureWide>
        <h2 className="serif-tight max-w-2xl text-3xl text-ink md:text-4xl">
          Build the tools your restaurant needs.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {useCases.map((item, index) => {
            const shells = [
              "border-line bg-[#FAF8F4]",
              "border-white/10 bg-[#0B1220]",
              "border-line bg-white",
              "border-orange/25 bg-orange-soft/70",
            ];
            const isDark = index === 1;

            return (
              <article
                key={item.title}
                className={`rounded-xl border p-6 md:p-8 ${shells[index]}`}
              >
                <p
                  className={`font-mono text-[12px] ${
                    isDark ? "text-orange-mid" : "text-orange"
                  }`}
                >
                  {item.accent}
                </p>
                <h3
                  className={`mt-3 text-[22px] font-semibold md:text-[24px] ${
                    isDark ? "text-white" : "text-ink"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-3 max-w-xl text-[15px] leading-7 ${
                    isDark ? "text-white/60" : "text-ink-muted"
                  }`}
                >
                  {item.copy}
                </p>
              </article>
            );
          })}
        </div>
      </FeatureWide>
    </section>
  );
}

export function DeveloperExperienceSection() {
  return (
    <section className="border-y border-line bg-[#FAF8F4] py-20 md:py-24">
      <FeatureWide>
        <h2 className="serif-tight text-3xl text-ink md:text-4xl">
          Designed for developers.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {developerExperience.map((item, index) => (
            <div key={item.title} className="relative">
              {index > 0 ? (
                <span
                  className="absolute -left-4 top-0 hidden h-full w-px bg-line md:block"
                  aria-hidden
                />
              ) : null}
              <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-line bg-white px-2.5 py-1 font-mono text-[11px] text-ink-faint">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                dx · 0{index + 1}
              </div>
              <h3 className="text-[18px] font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </FeatureWide>
    </section>
  );
}

export function RestApiFinalCta() {
  return (
    <section className="bg-night py-20 md:py-24">
      <FeatureWide>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="serif-tight text-3xl text-white md:text-4xl">
              Build what comes next with Vertex.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/60">
              Connect Vertex POS to your applications, workflows, and restaurant
              technology stack.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#api-reference">Explore API</Button>
              <Button href="/get-started" variant="white">
                Book a Demo
              </Button>
            </div>
          </div>
          <CtaCodeAccent />
        </div>
      </FeatureWide>
    </section>
  );
}
