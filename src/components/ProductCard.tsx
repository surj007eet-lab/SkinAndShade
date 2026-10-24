import { Bath, FlaskConical, Scissors, SprayCan } from "lucide-react";
import { amazonUrl, type Product } from "@/data/products";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const Icon = product.category === "Hair Care" ? Scissors : product.category === "Fragrance" ? SprayCan : product.category === "Bath & Body" ? Bath : FlaskConical;
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex aspect-square flex-col items-center justify-center gap-4 rounded-xl bg-secondary p-6 text-center">
        <Icon className="h-12 w-12 text-primary" aria-hidden />
        <span className="font-display text-xl text-primary">{product.brand}</span>
        <span className="text-xs text-muted-foreground">{product.category} · product photo not displayed</span>
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
        <a href={amazonUrl(product.asin)} target="_blank" rel="sponsored noopener" aria-label={`View ${product.brand} ${product.title} on Amazon (opens in a new tab)`}>View on Amazon →</a>
      </Button>
      <p className="mt-2 text-center text-xs text-muted-foreground">Affiliate link · Amazon handles your purchase</p>
    </article>
  );
}
