import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Bath,
  Shirt,
  Scissors,
  Search,
  Sparkles,
  SprayCan,
  type LucideIcon,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import {
  CATEGORIES,
  products,
  type Category,
} from "@/data/products";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "SkinAndShade | Shopping Guide for Women in India" },
      {
        name: "description",
        content:
          "A simple shopping guide for women in India. Explore beauty products, compare listed details and read practical buying guides. Explore our new fashion discovery section.",
      },
      { property: "og:title", content: "SkinAndShade — Shopping guide for women in India" },
      {
        property: "og:description",
        content:
          "Explore beauty products, compare the details shown on product listings and read practical guides before you shop. Fashion sections are being added.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://amazon-finds-and-favorites.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://amazon-finds-and-favorites.lovable.app/" }],
  }),
  component: Home,
});

const CATEGORY_ICONS: Record<Category, LucideIcon> = {
  Skincare: Sparkles,
  "Hair Care": Scissors,
  Fragrance: SprayCan,
  "Personal Care": Bath,
};

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-ring ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground hover:border-primary"
      }`}
    >
      {children}
    </button>
  );
}

function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");

  // A small editorial sample, not a popularity or sales ranking.
  const featuredPicks = useMemo(() => products.slice(0, 4), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (q && !`${p.brand} ${p.title} ${p.category}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, category]);

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-14 text-center sm:px-6 sm:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          SHOPPING GUIDE · INDIA
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] text-primary sm:text-6xl">
          Shopping, <em className="text-accent">made easier</em> to compare
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Explore beauty products, compare the details shown on listings, and check what matters before you buy. You can also browse our new fashion discovery section.
        </p>

        <div className="relative mx-auto mt-8 max-w-xl">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search serums, sunscreens, shampoos…"
            aria-label="Search products"
            className="w-full rounded-full border border-input bg-card py-3 pl-11 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-2 focus:outline-ring"
          />
        </div>
      </section>

      {/* Category tiles */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6" aria-label="Categories">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CATEGORIES.map((c) => {
            const Icon = CATEGORY_ICONS[c];
            const count = products.filter((p) => p.category === c).length;
            const active = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setCategory(active ? "All" : c);
                  setQuery("");
                  requestAnimationFrame(() =>
                    document.getElementById("all-picks")?.scrollIntoView({ behavior: "smooth" }),
                  );
                }}
                aria-pressed={active}
                className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-colors focus-visible:outline-2 focus-visible:outline-ring ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:border-primary"
                }`}
              >
                <Icon className={`h-6 w-6 ${active ? "text-primary-foreground" : "text-accent"}`} aria-hidden />
                <span className="text-xs font-semibold leading-tight">{c}</span>
                <span className={`text-[11px] ${active ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {count} {count === 1 ? "pick" : "picks"}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Separate Fashion discovery entry point; beauty product grid stays beauty-only */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6" aria-labelledby="fashion-preview-heading">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Fashion for women</p>
          <h2 id="fashion-preview-heading" className="mt-2 text-2xl font-semibold text-primary sm:text-3xl">Explore Fashion</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">Discover six fashion categories and upcoming guides for outfits, occasions and fabrics. Fashion products are kept separate from the beauty catalogue.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { id: "ethnic", title: "Ethnic Wear" },
              { id: "western", title: "Western Wear" },
              { id: "everyday", title: "Everyday Fashion" },
              { id: "formal", title: "Formal Wear" },
              { id: "winter", title: "Winter Wear" },
              { id: "accessories", title: "Accessories" },
            ].map((item) => (
              <a key={item.id} href={`/fashion#${item.id}`} className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background p-3 text-center transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-ring">
                <Shirt className="h-6 w-6 text-accent" aria-hidden />
                <span className="text-xs font-semibold text-primary">{item.title}</span>
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/fashion" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Explore Fashion & Style Guides →</a>
            <a href="https://link.amazon/A0aNtzL4K" target="_blank" rel="sponsored noopener noreferrer" className="rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary">Explore More on Amazon →</a>
          </div>
        </div>
      </section>

      {/* Editorial selection notes */}
      <section className="mx-auto mt-12 max-w-6xl rounded-2xl border border-border bg-card px-6 py-7 sm:px-8" aria-labelledby="selection-notes">
        <h2 id="selection-notes" className="text-2xl font-semibold text-primary">How we help you compare products</h2>
        <div className="mt-4 max-w-4xl space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>SkinAndShade is a shopping guide for women in India. We bring product information and buying guides together so you can compare a few options before visiting the retailer. Our current catalogue focuses on beauty products. Our fashion discovery section links to Amazon while we build individual fashion picks.</p>
          <p>We do not test products ourselves or make promises about results. Product details, sellers, stock and prices can change. Please check the current Amazon listing and product packaging for the latest information before ordering. Any old price used for a budget filter is only a past reference, not today’s price.</p>
          <p>Some links are affiliate links. If you buy through them, we may earn a commission at no extra cost to you. This does not change the product information on this site. Always check the listing and seller before you order. If you notice a mistake, you can contact us through the Editorial Policy page.</p>
        </div>
      </section>

      {/* Editorial sample — not a popularity ranking */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6" aria-label="A few products to explore">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">A few picks to explore</h2>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            A starting point for comparison
          </span>
        </div>
        <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-4">
          {featuredPicks.map((p) => (
            <div key={p.asin} className="w-64 shrink-0 snap-start">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Filters + full grid */}
      <section id="all-picks" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-12 sm:px-6" aria-label="All products">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">All picks</h2>
          <a
            href="https://www.amazon.in/b?node=1355016031&linkCode=ll2&tag=zencart0c-21&linkId=c22e1e16471594b90fe93ec1356db9b5&ref_=as_li_ss_tl"
            target="_blank"
            rel="sponsored noopener"
            className="rounded-full border border-primary px-4 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-ring"
          >
            Browse more on Amazon →
          </a>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip active={category === "All"} onClick={() => setCategory("All")}>
                All
              </Chip>
              {CATEGORIES.map((c) => (
                <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
                  {c}
                </Chip>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
            Showing {filtered.length} of {products.length} picks
          </p>
          {(query || category !== "All") && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring"
            >
              Clear all filters
            </button>
          )}
        </div>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.asin} product={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-10 rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
            No picks match this search or category. Clear your selection to see all products.
          </p>
        )}
      </section>
    </main>
  );
}
