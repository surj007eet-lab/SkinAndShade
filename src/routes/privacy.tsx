import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";
import { policies } from "@/data/policies";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/privacy")({
  staticData: { sitemap: true },
  head: () => pageHead("/privacy", policies["privacy"].title, policies["privacy"].description),
  component: () => <PolicyPage policy="privacy" />,
});
