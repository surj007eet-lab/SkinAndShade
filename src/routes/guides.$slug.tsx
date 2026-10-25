import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { guides } from "@/data/guides";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { AffiliateNotice } from "@/components/AffiliateNotice";
import { breadcrumbSchema, jsonLd, pageHead, pageUrl, SITE_URL } from "@/lib/seo";
import editorialImage from "@/assets/skincare-editorial.jpg";

export const Route = createFileRoute("/guides/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => { const guide = guides.find(g => g.slug === params.slug); if (!guide) throw notFound(); return guide; },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { ...pageHead(`/guides/${params.slug}`, "Guide unavailable", "This guide is unavailable."), meta: [...pageHead(`/guides/${params.slug}`, "Guide unavailable", "This guide is unavailable.").meta, { name: "robots", content: "noindex" }] };
    return { ...pageHead(`/guides/${params.slug}`, loaderData.title, loaderData.excerpt, "article"), scripts: [
      jsonLd({ "@context": "https://schema.org", "@type": "Article", headline: loaderData.title, description: loaderData.excerpt, dateModified: loaderData.updated, publisher: { "@type": "Organization", name: "SkinAndShade", "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: pageUrl(`/guides/${params.slug}`) }),
      jsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: loaderData.title, path: `/guides/${params.slug}` }])),
    ] };
  },
  component: GuidePage,
});
function GuidePage() {
  const guide = Route.useLoaderData();
  return <main id="main-content" className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
    <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-primary"><Link to="/">Home</Link><span aria-hidden>/</span><Link to="/guides">Guides</Link><span aria-hidden>/</span><span className="text-muted-foreground">{guide.title}</span></nav>
    <article>
      <p className="mt-8 text-xs text-muted-foreground">Editorially updated <time dateTime={guide.updated}>23 October 2026</time> · {guide.readTime} · Not personally tested</p>
      <h1 className="mt-3 text-4xl font-semibold leading-tight text-primary sm:text-5xl">{guide.title}</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{guide.excerpt}</p>
      <div className="mt-5"><AffiliateNotice /></div>
      <figure className="mt-8"><img src={editorialImage} width={1536} height={1024} loading="lazy" alt="Unbranded cleanser bottle, moisturizer jar and sunscreen tube on a blush surface" className="aspect-[3/2] w-full rounded-lg object-cover"/><figcaption className="mt-2 text-xs text-muted-foreground">Illustrative image, not a photograph of the products listed below.</figcaption></figure>
      <div className="mt-10 max-w-3xl space-y-7">{guide.blocks.map((block, i) => <section key={i}>{block.heading && <h2 className="mb-3 text-2xl font-semibold text-foreground">{block.heading}</h2>}<p className="leading-relaxed text-muted-foreground">{block.body}</p></section>)}</div>
      <section className="mt-12"><h2 className="text-2xl font-semibold text-primary">Catalogue options to compare</h2><p className="mt-3 text-sm text-muted-foreground">Listed specifications have not been independently reverified. No current prices, test scores or treatment results are claimed.</p><div className="mt-4"><AffiliateNotice /></div><div className="mt-6 grid items-stretch gap-5 sm:grid-cols-2">{guide.productAsins.map(asin => { const p = products.find(p => p.asin === asin); return p ? <ProductCard key={asin} product={p}/> : null; })}</div></section>
      <section className="mt-12"><h2 className="text-2xl font-semibold text-primary">Sources and scope</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Sources support general skincare and sun-safety advice, not these products' efficacy. This is buying information, not medical advice. No personal testing or clinical review is claimed.</p><ul className="mt-4 space-y-3">{guide.sources.map(s => <li key={s.url}><a href={s.url} rel="noopener" target="_blank" className="text-primary underline">{s.title} <span className="text-xs">(external source)</span></a></li>)}</ul><p className="mt-4"><Link to="/editorial-policy" className="text-primary underline">Our editorial policy</Link> · <Link to="/editorial-policy" className="text-primary underline">Report a correction</Link></p></section>
    </article>
    <section className="mt-12"><h2 className="text-2xl font-semibold text-primary">Continue reading</h2><ul className="mt-4 space-y-3">{guide.related.map(slug => { const related = guides.find(g => g.slug === slug); return related ? <li key={slug}><Link to="/guides/$slug" params={{slug}} className="text-primary underline">{related.title}</Link></li> : null; })}</ul><p className="mt-5"><Link to="/skincare" className="text-primary underline">Skincare</Link> · <Link to="/sunscreen" className="text-primary underline">Sunscreen</Link> · <Link to="/serums" className="text-primary underline">Serums</Link> · <Link to="/moisturizers" className="text-primary underline">Moisturizers</Link></p></section>
  </main>;
}
