import type { Metadata } from "next";
import {
  ApiCapabilities,
  CodeExampleSection,
  DeveloperExperienceSection,
  EndpointsSection,
  IntegrationWorkflow,
  RestApiFinalCta,
  RestApiHero,
  SecuritySection,
  UseCasesSection,
  WebhooksSection,
} from "@/components/rest-api/sections";

export const metadata: Metadata = {
  title: "REST API",
  description:
    "Connect Vertex POS to your applications with secure APIs for orders, menus, customers, payments, inventory, and webhooks.",
};

export default function RestApiPage() {
  return (
    <>
      <RestApiHero />
      <ApiCapabilities />
      <IntegrationWorkflow />
      <CodeExampleSection />
      <EndpointsSection />
      <WebhooksSection />
      <SecuritySection />
      <UseCasesSection />
      <DeveloperExperienceSection />
      <RestApiFinalCta />
    </>
  );
}
