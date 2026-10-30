import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { collections, collectionProducts } from "@/data/collections";
import { guides } from "@/data/guides";
import { ProductCard } from "./ProductCard";
import { AffiliateNotice } from "./AffiliateNotice";

export function CollectionPage({ slug }: { slug: string }) {
  const collection = collections.find(c => c.slug === slug);
  const [query, setQuery] = useState("");
  const [concern, setConcern] = useState("All");
  const [sort, setSort] = useState("featured");

  const allProducts = collection ? collectionProducts(collection) : [];
  const availableConcerns = [...new Set(allProducts.flatMap(product => product.concerns))].sort();
  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return allProducts
      .filter(product => {
        const matchesQuery = !normalizedQuery || [product.brand, product.title, product.description, product.bestFor]
          .some(value => value.toLowerCase().includes(normalizedQuery));
        const matchesConcern = concern === "All" || product.concerns.includes(concern as typeof product.concerns[number]);
        return matchesQuery && matchesConcern;
      })
      .sort((a, b) => {
        if (sort === "price-low") return a.price - b.price;
        if (sort === "price-high") return b.price - a.price;
        return 0;
      });
  }, [allProducts, query, concern, sort]);

  if (!collection) return null;
  const hasActiveFilters = query.trim().length > 0 || concern !== "All" || sort !== "featured";

  return <main id="main-content" className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
    <nav aria-label="Breadcrumb" className="text-sm text-primary">
      <Link to="/">Home</Link> <span aria-hidden>/</span> <span className="text-muted-foreground">{collection.title}</span>
    </nav>

    <header className="mt-8 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">SkinAndShade collection</p>
      <h1 className="mt-3 text-4xl font-semibold text-primary sm:text-5xl">{collection.title}: options to compare</h1>
      <p className="mt-5 text-base leading-8 text-muted-foreground">{collection.introduction}</p>
      <p className="mt-3 text-sm text-muted-foreground">
        {allProducts.length} {allProducts.length === 1 ? "catalogue option" : "catalogue options"} currently listed. We do not claim personal testing or rank products by popularity.
      </p>
    </header>

    <div className="mt-5"><AffiliateNotice /></div>

    {collection.guideSlugs.length > 0 && (
      <section className="mt-8 rounded-2xl border border-border bg-card p-5 sm:p-6" aria-labelledby="collection-guides-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Shopping help</p>
        <h2 id="collection-guides-heading" className="mt-2 text-xl font-semibold text-primary">Read before you buy</h2>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {collection.guideSlugs.map(guideSlug => {
            const guide = guides.find(item => item.slug === guideSlug);
            return guide ? <li key={guideSlug}><Link to="/guides/$slug" params={{slug: guideSlug}} className="text-sm font-medium text-primary underline decoration-border underline-offset-4 hover:decoration-primary">{guide.title} →</Link></li> : null;
          })}
        </ul>
      </section>
    )}

    <section className="mt-10" aria-labelledby="catalogue-heading">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="catalogue-heading" className="text-2xl font-semibold text-primary">Explore the catalogue</h2>
          <p className="mt-1 text-sm text-muted-foreground">Search product names or filter by listed concern. Sort by the site's historical listing price, not today's Amazon price.</p>
        </div>
        <p className="text-sm font-medium text-muted-foreground" role="status" aria-live="polite">
          Showing {visibleProducts.length} of {allProducts.length}
        </p>
      </div>

      <div className="mt-5 grid gap-3 rounded-2xl border border-border bg-card p-4 sm:grid-cols-2 lg:grid-cols-3">
        <label className="text-sm font-medium text-foreground">
          Search this collection
          <input value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Try a brand or product name" className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm font-normal text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring" />
        </label>
        <label className="text-sm font-medium text-foreground">
          Filter by listed concern
          <select value={concern} onChange={event => setConcern(event.target.value)} className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <option value="All">All concerns</option>
            {availableConcerns.map(item => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label className="text-sm font-medium text-foreground">
          Sort products
          <select value={sort} onChange={event => setSort(event.target.value)} className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <option value="featured">Default catalogue order</option>
            <option value="price-low">Historical price: low to high</option>
            <option value="price-high">Historical price: high to low</option>
          </select>
        </label>
        {hasActiveFilters && (
          <div className="sm:col-span-2 lg:col-span-3">
            <button type="button" onClick={() => { setQuery(""); setConcern("All"); setSort("featured"); }} className="text-sm font-semibold text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-ring">
              Clear search and filters
            </button>
          </div>
        )}
      </div>

      {visibleProducts.length > 0 ? (
        <div className="mt-6 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map(product => <ProductCard key={product.asin} product={product} />)}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-border px-5 py-10 text-center">
          <h3 className="text-lg font-semibold text-primary">No matching products</h3>
          <p className="mt-2 text-sm text-muted-foreground">Try a different search term or clear the filters to see all options in this collection.</p>
          <button type="button" onClick={() => { setQuery(""); setConcern("All"); setSort("featured"); }} className="mt-4 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-ring">
            Show all products
          </button>
        </div>
      )}
    </section>

    <section className="mt-14 border-t border-border pt-8">
      <h2 className="text-lg font-semibold text-primary">Explore other collections</h2>
      <nav aria-label="Other product categories" className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-primary">
        {collections.filter(item => item.slug !== slug).map(item => (
          <Link key={item.slug} to={item.slug === "haircare" ? "/haircare" : item.slug === "bath-body" ? "/bath-body" : `/${item.slug}` as any} className="underline decoration-border underline-offset-4 hover:decoration-primary">
            {item.title}
          </Link>
        ))}
      </nav>
    </section>
  </main>;
}
