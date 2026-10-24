import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";
import { policies } from "@/data/policies";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/editorial-policy")({
  staticData: { sitemap: true },
  head: () => pageHead("/editorial-policy", policies["editorial-policy"].title, policies["editorial-policy"].description),
  component: () => <PolicyPage policy="editorial-policy" />,
});
