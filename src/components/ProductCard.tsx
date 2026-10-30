import { amazonUrl, type Product } from "@/data/products";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
        <img src={product.image} alt={`${product.brand} ${product.title}`} loading="lazy" decoding="async" width={640} height={640} className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-semibold text-primary">{product.brand}</span>
        <span className="text-xs text-muted-foreground">{product.category}</span>
      </div>
      <h3 className="mt-2 text-lg leading-snug text-card-foreground">{product.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
      <p className="mt-3 text-xs text-muted-foreground"><span className="font-semibold text-foreground">Consider for:</span> {product.bestFor}</p>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Why included:</span> {product.whyPicked}</p>
      <p className="mt-3 text-xs text-muted-foreground">Current price and availability: check Amazon.</p>
      <Button asChild className="mt-auto w-full rounded-full px-3 py-3 h-auto whitespace-normal">
        <a href={product.affiliateUrl ?? amazonUrl(product.asin)} target="_blank" rel="sponsored noopener" aria-label={`View ${product.brand} ${product.title} on Amazon (opens in a new tab)`}>View on Amazon →</a>
      </Button>
      <p className="mt-2 text-center text-xs text-muted-foreground">Affiliate link · Amazon handles your purchase</p>
    </article>
  );
}
