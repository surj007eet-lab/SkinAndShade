import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import products from "@/data/products.json";

const AFFILIATE_TAG = "zencart0c-21";
const amazonUrl = (asin: string) => `https://www.amazon.in/dp/${asin}?tag=${AFFILIATE_TAG}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxe Edit — Steal Deals on Luxury Beauty" },
      { name: "description", content: "Handpicked luxury skincare, haircare and fragrance deals from Amazon India." },
      { property: "og:title", content: "Luxe Edit — Steal Deals on Luxury Beauty" },
      { property: "og:description", content: "Handpicked luxury skincare, haircare and fragrance deals from Amazon India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categoryOf = (t: string) => {
  const s = t.toLowerCase();
  if (/(perfume|edt|mist|fragrance)/.test(s)) return "Fragrance";
  if (/(shampoo|hair|conditioner)/.test(s)) return "Hair";
  if (/lip/.test(s)) return "Lips";
  return "Skin";
};

function Index() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Skin", "Hair", "Lips", "Fragrance"];
  const list = useMemo(
    () => products.filter((p) => filter === "All" || categoryOf(p.title) === filter),
    [filter],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <span className="font-display text-3xl italic">Luxe Edit</span>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Curated on Amazon.in</span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Steal deal · Luxury beauty</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
          Indulgent beauty, <em className="text-accent">unexpectedly</em> well priced.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Serums, balms, creams and scents we love — each one a tap away on Amazon.
        </p>
        <div className="mt-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl gap-x-6 gap-y-12 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <a
            key={p.asin}
            href={amazonUrl(p.asin)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex flex-col"
          >
            <div className="relative aspect-square overflow-hidden bg-card">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              />
              {p.off && (
                <span className="absolute left-3 top-3 bg-accent px-2 py-1 text-xs font-bold text-accent-foreground">
                  −{p.off}%
                </span>
              )}
            </div>
            <span className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {categoryOf(p.title)}
            </span>
            <h2 className="mt-1 line-clamp-3 text-lg leading-snug">{p.title}</h2>
            {p.rating && (
              <p className="mt-2 text-xs text-muted-foreground">
                ★ {p.rating} · {p.reviews} reviews
              </p>
            )}
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-lg font-bold">₹{p.price}</span>
              {p.mrp && <span className="text-sm text-muted-foreground line-through">₹{p.mrp}</span>}
            </div>
            <span className="mt-4 border-b border-primary pb-1 text-sm font-medium self-start group-hover:text-accent group-hover:border-accent">
              Shop on Amazon →
            </span>
          </a>
        ))}
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        As an Amazon Associate we earn from qualifying purchases. Prices may change on Amazon.
      </footer>
    </div>
  );
}
