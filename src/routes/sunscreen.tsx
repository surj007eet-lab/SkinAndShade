import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
import { collections } from "@/data/collections";
import { pageHead, jsonLd, breadcrumbSchema } from "@/lib/seo";
export const Route = createFileRoute("/sunscreen")({
  staticData: { sitemap: true },
  head: () => {
    const collection = collections.find(c => c.slug === "sunscreen");
    return { ...pageHead("/sunscreen", collection?.title ?? "Beauty products", collection?.description ?? "Beauty catalogue options from SkinAndShade."), scripts: [jsonLd(breadcrumbSchema([{name: "Home", path: "/"}, {name: collection?.title ?? "Beauty products", path: "/sunscreen"}]))] };
  },
  component: () => <CollectionPage slug="sunscreen" />,
});
