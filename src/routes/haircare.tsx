import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
import { collections } from "@/data/collections";
import { pageHead, jsonLd, breadcrumbSchema } from "@/lib/seo";
export const Route = createFileRoute("/haircare")({
  staticData: { sitemap: true },
  head: () => {
    const collection = collections.find(c => c.slug === "haircare");
    return { ...pageHead("/haircare", collection?.title ?? "Beauty products", collection?.description ?? "Beauty catalogue options from SkinAndShade."), scripts: [jsonLd(breadcrumbSchema([{name: "Home", path: "/"}, {name: collection?.title ?? "Beauty products", path: "/haircare"}]))] };
  },
  component: () => <CollectionPage slug="haircare" />,
});
