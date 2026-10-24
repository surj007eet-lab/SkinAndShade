import { Link } from "@tanstack/react-router";
import { collections, collectionProducts } from "@/data/collections";
import { guides } from "@/data/guides";
import { ProductCard } from "./ProductCard";
import { AffiliateNotice } from "./AffiliateNotice";

export function CollectionPage({ slug }: { slug: string }) {
  const collection = collections.find(c => c.slug === slug);
  if (!collection) return null;
  return <main id="main-content" className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
    <nav aria-label="Breadcrumb" className="text-sm text-primary"><Link to="/">Home</Link> <span aria-hidden>/</span> <span className="text-muted-foreground">{collection.title}</span></nav>
    <h1 className="mt-8 text-4xl font-semibold text-primary sm:text-5xl">{collection.title}: options to compare</h1>
    <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">{collection.introduction}</p>
    <div className="mt-5"><AffiliateNotice /></div>
    {collection.guideSlugs.length > 0 && <section className="mt-8"><h2 className="text-2xl text-primary">Before you buy</h2><ul className="mt-3 space-y-3">{collection.guideSlugs.map(slug => { const g = guides.find(g => g.slug === slug); return g ? <li key={slug}><Link to="/guides/$slug" params={{slug}} className="text-primary underline">{g.title}</Link></li> : null; })}</ul></section>}
    <section className="mt-10"><h2 className="text-2xl text-primary">{collectionProducts(collection).length} catalogue options</h2><div className="mt-6 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{collectionProducts(collection).map(p => <ProductCard key={p.asin} product={p}/>)}</div></section>
    <nav aria-label="Other product categories" className="mt-10 flex flex-wrap gap-4 text-sm text-primary"><Link to="/skincare">Skincare</Link><Link to="/sunscreen">Sunscreen</Link><Link to="/serums">Serums</Link><Link to="/moisturizers">Moisturizers</Link><Link to="/haircare">Hair care</Link><Link to="/fragrance">Fragrance</Link><Link to="/bath-body">Bath & body</Link></nav>
  </main>;
}