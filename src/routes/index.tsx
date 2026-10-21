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
  head: () => ({
    meta: [
      { title: "SkinAndShade — Beauty picks worth your money" },
      {
        name: "description",
        content:
          "Handpicked skincare, makeup, hair care and fragrance deals for India, with honest notes on why each product earned its place.",
      },
      { property: "og:title", content: "SkinAndShade — Beauty picks worth your money" },
      {
        property: "og:description",
        content:
          "Handpicked skincare, makeup, hair care and fragrance deals for India, with honest notes on why each product earned its place.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

  const trending = useMemo(() => products.filter((p) => p.trending), []);

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
          Curated beauty · India
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] text-primary sm:text-6xl">
          Beauty picks <em className="text-accent">worth</em> your money
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Every product here earned its spot — with a short note on why, and who it suits best.
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

      {/* Trending picks */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6" aria-label="Trending picks">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Trending picks</h2>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Most loved this week
          </span>
        </div>
        <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-4">
          {trending.map((p) => (
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
              Budget
            </p>
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
