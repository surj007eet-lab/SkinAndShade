import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

const categories: Record<string, { title: string; description: string }> = {
  everyday: { title: "Everyday Fashion", description: "Comfortable, versatile outfits for daily routines. Product selections are coming soon." },
  formal: { title: "Formal Wear", description: "Office-ready outfits and smart occasion dressing. Product selections are coming soon." },
  winter: { title: "Winter Wear", description: "Sweaters, jackets and practical layering ideas. Product selections are coming soon." },
  accessories: { title: "Fashion Accessories", description: "Bags, jewellery and finishing touches. Product selections are coming soon." },
};

export const Route = createFileRoute("/fashion/$category")({
  staticData: { sitemap: false },
  head: ({ params }) => {
    const category = categories[params.category];
    return pageHead(`/fashion/${params.category}`, `${category?.title ?? "Fashion Category"} | SkinAndShade`, category?.description ?? "Explore fashion categories at SkinAndShade.");
  },
  component: FashionCategoryPage,
});

function FashionCategoryPage() {
  const { category } = Route.useParams();
  const details = categories[category];
  if (!details) {
    return <main className="mx-auto max-w-6xl px-4 py-16"><h1 className="text-3xl font-semibold text-primary">Category not found</h1><Link to="/fashion" className="mt-6 inline-block underline">Browse Fashion categories</Link></main>;
  }
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6">
      <Link to="/fashion" className="text-sm font-semibold text-primary underline underline-offset-4">← All Fashion categories</Link>
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Fashion / {details.title}</p>
      <h1 className="mt-3 text-4xl font-semibold text-primary sm:text-5xl">{details.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{details.description}</p>
      <div className="mt-10 rounded-2xl border border-border bg-card p-7">
        <h2 className="text-xl font-semibold text-primary">Products coming soon</h2>
        <p className="mt-3 text-sm text-muted-foreground">We are preparing this collection. No products have been published in this category yet.</p>
      </div>
    </main>
  );
}
