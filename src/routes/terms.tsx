import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";
import { policies } from "@/data/policies";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/terms")({
  staticData: { sitemap: true },
  head: () => pageHead("/terms", policies["terms"].title, policies["terms"].description),
  component: () => <PolicyPage policy="terms" />,
});
