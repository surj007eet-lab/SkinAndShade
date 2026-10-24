import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";
import { policies } from "@/data/policies";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/affiliate-disclosure")({
  staticData: { sitemap: true },
  head: () => pageHead("/affiliate-disclosure", policies["affiliate-disclosure"].title, policies["affiliate-disclosure"].description),
  component: () => <PolicyPage policy="affiliate-disclosure" />,
});
