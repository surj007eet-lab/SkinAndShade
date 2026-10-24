import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
import { collections } from "@/data/collections";
import { pageHead, jsonLd, breadcrumbSchema } from "@/lib/seo";
export const Route = createFileRoute("/bath-body")({
  staticData: { sitemap: true },
  head: () => {
    const collection = collections.find(c => c.slug === "bath-body");
    return { ...pageHead("/bath-body", collection?.title ?? "Beauty products", collection?.description ?? "Beauty catalogue options from SkinAndShade."), scripts: [jsonLd(breadcrumbSchema([{name: "Home", path: "/"}, {name: collection?.title ?? "Beauty products", path: "/bath-body"}]))] };
  },
  component: () => <CollectionPage slug="bath-body" />,
});
