import { amazonUrl, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const off =
    product.mrp && product.mrp > product.price
      ? Math.round((1 - product.price / product.mrp) * 100)
      : null;

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
        <img
          src={product.image}
          alt={`${product.brand} ${product.title}`}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        {off && (
          <span className="absolute left-2 top-2 rounded-full bg-accent px-2 py-1 text-[11px] font-bold text-accent-foreground">
            −{off}%
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
          {product.brand}
        </span>
        <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
          {product.category}
        </span>
      </div>

      <h3 className="mt-2 text-lg leading-snug text-card-foreground">{product.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>

      <p className="mt-3 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Best for:</span> {product.bestFor}
      </p>
      <p className="mt-1 text-xs italic text-muted-foreground">
        “{product.whyPicked}”
      </p>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-lg font-bold text-foreground">
          ₹{product.price.toLocaleString("en-IN")}
        </span>
        {product.mrp && (
          <span className="text-sm text-muted-foreground line-through">
            ₹{product.mrp.toLocaleString("en-IN")}
          </span>
        )}
      </div>

      <a
        href={amazonUrl(product.asin)}
        target="_blank"
        rel="sponsored noopener"
        className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-ring"
      >
        View on Amazon →
      </a>
    </article>
  );
}
