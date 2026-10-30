import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Bath,
  Scissors,
  Search,
  Sparkles,
  SprayCan,
  type LucideIcon,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import {
  BUDGETS,
  CATEGORIES,
  CONCERNS,
  budgetLimit,
  products,
  type Budget,
  type Category,
  type Concern,
} from "@/data/products";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "SkinAndShade | Beauty Shopping Guide for Women in India" },
      {
        name: "description",
        content:
          "A practical beauty shopping guide for women in India. Compare skincare, hair care, fragrance and bath products, check product details and read buying guides before you shop.",
      },
      { property: "og:title", content: "SkinAndShade — Beauty product comparisons for India" },
      {
        property: "og:description",
        content:
          "Compare skincare, hair care, fragrance and bath products for India. Explore product details, buying considerations and practical guides before you shop.",
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
  "Bath & Body": Bath,
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
  const [budget, setBudget] = useState<Budget>("Any");
  const [concern, setConcern] = useState<Concern | "All">("All");

  // A small editorial sample, not a popularity or sales ranking.
  const featuredPicks = useMemo(() => products.slice(0, 4), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const limit = budgetLimit(budget);
    return products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (limit !== null && p.price >= limit) return false;
      if (concern !== "All" && !p.concerns.includes(concern)) return false;
      if (q && !`${p.brand} ${p.title} ${p.category}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, category, budget, concern]);

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-14 text-center sm:px-6 sm:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          BEAUTY SHOPPING GUIDE · INDIA
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] text-primary sm:text-6xl">
          Beauty shopping, <em className="text-accent">made easier</em> to compare
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Explore skincare, hair care, fragrance and bath essentials. Compare listed product details, understand what to check before buying, and make a more informed choice.
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
                  setBudget("Any");
                  setConcern("All");
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

      {/* Editorial selection notes */}
      <section className="mx-auto mt-12 max-w-6xl rounded-2xl border border-border bg-card px-6 py-7 sm:px-8" aria-labelledby="selection-notes">
        <h2 id="selection-notes" className="text-2xl font-semibold text-primary">How we help you compare beauty products</h2>
        <div className="mt-4 max-w-4xl space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>SkinAndShade is an independent shopping guide for people comparing skincare, hair care, fragrance and bath &amp; body products available to shoppers in India. We organize catalogue listings by product type, concern and budget so you can narrow your options before visiting the retailer. Our notes focus on details shoppers can verify: the stated product format, named ingredients, pack size where available, and what to check on the current product page.</p>
          <p>We do not claim that a product is personally tested, dermatologist recommended, the most popular, or right for everyone unless that evidence is documented. Product formulas, sellers, stock and prices can change, so confirm the current listing, seller, ingredients, directions, expiry and final checkout price on Amazon before ordering. Prices previously captured by this site are historical reference points, not live quotes.</p>
          <p>Some links are affiliate links. If you buy through them, we may earn a commission at no additional cost to you. Affiliate relationships do not guarantee product quality or change the need to compare options. Use our guides to understand labels and buying considerations; for persistent skin or scalp concerns, seek advice from a qualified professional. We review catalogue notes as information becomes available and welcome corrections through our contact page.</p>
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
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Budget · historical listing price
            </p>
            <p className="mb-2 text-xs text-muted-foreground">Budget filters use previously captured prices, not live Amazon prices. Check the current listing for today’s price.</p>
            <div className="flex flex-wrap gap-2">
              {BUDGETS.map((b) => (
                <Chip key={b} active={budget === b} onClick={() => setBudget(b)}>
                  {b === "Any" ? "Any budget" : `Under ₹${b.replace("Under ", "")}`}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Concern
            </p>
            <div className="flex flex-wrap gap-2">
              <Chip active={concern === "All"} onClick={() => setConcern("All")}>
                All concerns
              </Chip>
              {CONCERNS.map((c) => (
                <Chip key={c} active={concern === c} onClick={() => setConcern(c)}>
                  {c}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground" role="status">
          Showing {filtered.length} of {products.length} picks
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.asin} product={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-10 rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
            No picks match those filters yet — try widening the budget or clearing a filter.
          </p>
        )}
      </section>
    </main>
  );
}
