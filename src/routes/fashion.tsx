import { createFileRoute, Link } from "@tanstack/react-router";
import { Shirt, ArrowUpRight, BookOpen } from "lucide-react";
import { pageHead } from "@/lib/seo";

const sections = [
  { id: "ethnic", title: "Ethnic Wear", description: "Kurtas, salwar suits, sarees and festive styles" },
  { id: "western", title: "Western Wear", description: "Dresses, tops, jeans and modern outfits" },
  { id: "everyday", title: "Everyday Fashion", description: "Easy, comfortable clothes for daily routines" },
  { id: "formal", title: "Formal Wear", description: "Office outfits and smart occasion dressing" },
  { id: "winter", title: "Winter Wear", description: "Sweaters, jackets and layering essentials" },
  { id: "accessories", title: "Fashion Accessories", description: "Bags, jewellery and finishing touches" },
] as const;

const ethnicProducts = [
  { asin: "B0DWXX7Y6Q", brand: "Vaamsi", title: "Paisley Printed Straight Kurta Set (VKSKD2318)", detail: "Paisley-patterned straight-cut ethnic outfit. Confirm the selected fabric, size and included pieces on Amazon.", affiliate: "https://link.amazon/B00A5tWFr" },
  { asin: "B0C73VF7H3", brand: "Rajnandini", title: "Cotton Printed Salwar Suit Set (VSMRW4267)", detail: "Printed cotton ethnic-wear option; linked variant is Large. Check the listing for included pieces and measurements.", affiliate: "https://link.amazon/B0dNOrr9T" },
  { asin: "B0CXTGJSN6", brand: "FABNEX", title: "Cotton Kurta Set with Dupatta (K-43, Grey, 2XL)", detail: "Grey kurta outfit with dupatta, linked in size 2XL. Confirm fabric composition and garment measurements on Amazon.", affiliate: "https://link.amazon/B04Avm3Di" },
  { asin: "B0DDCNQRQZ", brand: "Vaamsi", title: "Printed Straight Kurta Set with Dupatta (VKSKD2247, Blue, 4XL)", detail: "Blue printed straight-style ethnic outfit with dupatta; linked variant is 4XL. Check the seller's size chart.", affiliate: "https://link.amazon/B09y8OLgy" },
  { asin: "B0DYF21LMS", brand: "LAVANDIS", title: "Embroidered Anarkali Kurti for Women", detail: "Anarkali-style embroidered kurti for ethnic and occasion wear. Check the exact colour, fabric and included pieces on Amazon.", affiliate: "https://link.amazon/B0eigRBSw" },
] as const;

const plannedGuides = [
  { title: "What to Wear to a Job Interview", detail: "Choosing comfortable, polished outfits for different workplaces" },
  { title: "What to Wear to an Indian Wedding", detail: "Outfit ideas for daytime, evening and festive functions" },
  { title: "Choosing Fabrics for Indian Summers", detail: "Cotton, linen and breathable fabric considerations" },
  { title: "Building a Versatile Everyday Wardrobe", detail: "How to choose pieces that work together" },
  { title: "Winter Layering Without Bulk", detail: "Practical layering tips for different temperatures" },
];

export const Route = createFileRoute("/fashion")({
  staticData: { sitemap: true },
  head: () => pageHead("/fashion", "Women's Fashion Categories & Style Guides | SkinAndShade", "Explore women's fashion categories and upcoming practical outfit guides for occasions, work and everyday wear in India."),
  component: FashionPage,
});

function FashionPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Women's Fashion</p>
      <h1 className="mt-3 text-4xl font-semibold text-primary sm:text-5xl">Explore Fashion</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">Find your style by category. Browse the first Ethnic Wear selections below. Other fashion categories will be added in stages.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" aria-label="Fashion subcategories">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 text-center transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-ring">
            <Shirt className="mb-3 h-6 w-6 text-accent" aria-hidden />
            <span className="text-sm font-semibold text-primary">{section.title}</span>
            <span className="mt-2 text-xs text-muted-foreground">Explore category</span>
          </a>
        ))}
      </div>
      <section className="mt-14" aria-labelledby="fashion-categories">
        <h2 id="fashion-categories" className="text-2xl font-semibold text-primary">Shop by fashion category</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <article id={section.id} key={section.id} className="scroll-mt-28 rounded-2xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
              <p className="mt-2 min-h-12 text-sm text-muted-foreground">{section.description}</p>
              {section.id === "ethnic" ? <p className="mt-3 text-xs text-muted-foreground">{ethnicProducts.length} product picks added</p> : <p className="mt-3 text-xs text-muted-foreground">Individual product picks coming soon</p>}
              <a href="https://link.amazon/A0aNtzL4K" target="_blank" rel="sponsored noopener noreferrer" className="mt-4 inline-flex items-center gap-1 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">Browse Amazon Fashion <ArrowUpRight className="h-4 w-4" /></a>
            </article>
          ))}
        </div>
      </section>
      <section id="ethnic-products" className="mt-14 scroll-mt-24" aria-labelledby="ethnic-products-heading">
        <h2 id="ethnic-products-heading" className="text-2xl font-semibold text-primary">Ethnic Wear Picks</h2>
        <p className="mt-2 text-sm text-muted-foreground">Batch 1 of 3 · 5 of 15 products. Exact item photographs are being verified; no unrelated clothing images are used.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ethnicProducts.map((product) => (
            <article key={product.asin} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex aspect-[4/3] items-center justify-center bg-secondary/50 px-6 text-center">
                <div>
                  <Shirt className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden />
                  <p className="mt-3 text-xs text-muted-foreground">Product photograph pending verification</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{product.brand}</p>
                <h3 className="mt-2 text-lg font-semibold text-primary">{product.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{product.detail}</p>
                <a href={product.affiliate} target="_blank" rel="sponsored noopener noreferrer" className="mt-5 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">View on Amazon <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="fashion-articles" className="mt-16 scroll-mt-24" aria-labelledby="fashion-guides">
        <div className="flex items-center gap-3"><BookOpen className="h-6 w-6 text-accent" aria-hidden /><h2 id="fashion-guides" className="text-2xl font-semibold text-primary">Fashion & Occasion Guides</h2></div>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">Our planned articles will cover what to wear for different occasions, climates and everyday needs. These are upcoming topics, not published reviews.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plannedGuides.map((guide) => (
            <div key={guide.title} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Article planned</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">{guide.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{guide.detail}</p>
            </div>
          ))}
        </div>
      </section>
      <p className="mt-10 text-xs text-muted-foreground">Some links on this page are affiliate links. We may earn a commission from qualifying purchases. Product details and availability should be checked on Amazon.</p>
      <Link to="/" className="mt-5 inline-block text-sm font-semibold text-primary underline underline-offset-4">Return to Beauty & Home</Link>
    </main>
  );
}
