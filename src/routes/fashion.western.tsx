import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { pageHead } from "@/lib/seo";

const westernProducts = [
  { asin: "B0HPSY6GFC", brand: "Brand not confirmed", title: "Printed Smocked Western Dress", detail: "Printed women's dress with elastic-smocked styling. Check the seller's size chart, fabric and dress length for the selected variant.", consider: "Casual outings and relaxed printed-dress styling", styleTip: "Let the print take centre stage with solid-colour sandals and a compact crossbody bag.", whyConsider: "Smocked detailing creates a distinct silhouette to compare with more structured dresses.", affiliate: "https://link.amazon/B06esl1zg", image: "https://m.media-amazon.com/images/I/71IyICzr5NL._SX679_.jpg" },
  { asin: "B0H2QP1GDM", brand: "GRECIILOOKS", title: "Sleeveless Striped Vacation Dress", detail: "Sleeveless striped women's dress marketed for vacation wear. Verify length, fabric and fit on the Amazon listing.", consider: "Holiday looks and casual warm-weather outfits", styleTip: "Pair the stripes with simple flats, a straw-look bag or understated accessories.", whyConsider: "A striped sleeveless design offers a different visual direction from floral or solid-colour dresses.", affiliate: "https://link.amazon/B08WR8xzE", image: "https://m.media-amazon.com/images/I/81tKqwLJ3wL._SX679_.jpg" },
  { asin: "B0GZGTHC6F", brand: "Brand not confirmed", title: "Tribal-Print Flared-Sleeve Shirt Dress", detail: "Women's shirt-style dress with a tribal-inspired print and flared sleeves, as described in the listing URL. Confirm exact length and fabric.", consider: "Statement-print daywear and casual outings", styleTip: "Choose plain shoes and minimal jewellery to balance the patterned sleeves.", whyConsider: "The shirt-dress shape and flared sleeves make this a distinctive option among casual dresses.", affiliate: "https://link.amazon/B05U5hFK0", image: "https://m.media-amazon.com/images/I/61wK4PYlmCL._SX679_.jpg" },
  { asin: "B0G59MJ661", brand: "FYLTR", title: "Solid Midi Dress", detail: "Solid-colour women's midi dress. Check the current colour, fabric composition and measurements on Amazon.", consider: "Minimalist outfits and versatile day-to-evening styling", styleTip: "Add a contrasting belt or a small shoulder bag to give the solid colour a personal touch.", whyConsider: "A plain midi dress can be styled in several directions by changing shoes and accessories.", affiliate: "https://link.amazon/B0eg6JmCX", image: "https://m.media-amazon.com/images/I/41uFye+uAsL.jpg" },
  { asin: "B0FLK9RWQV", brand: "Shasmi", title: "Cinched-Waist Western Dress", detail: "Women's western dress with a cinched-waist design, based on the product listing. Verify silhouette, fabric and sizing on Amazon.", consider: "Dressier casual occasions and waist-defined silhouettes", styleTip: "Try a simple pendant and neutral footwear to keep attention on the waist detail.", whyConsider: "A cinched-waist design offers a shape-focused alternative to loose or straight-cut dresses.", affiliate: "https://link.amazon/B04ghPEwO", image: "https://m.media-amazon.com/images/I/81cIJSHLG7L._SX679_.jpg" },
  { asin: "B0GYS5MHCD", brand: "Brand not confirmed", title: "Textured Sleeve Stretchable Top", detail: "Women's textured-sleeve top described as stretchable in the listing title. Verify the exact sleeve design, fabric and measurements on Amazon.", consider: "Casual tops and easy separates", styleTip: "Pair with straight-leg jeans or tailored trousers and keep accessories simple.", whyConsider: "Textured sleeves add visual detail to a basic top.", affiliate: "https://link.amazon/B020FNAYs", image: "https://m.media-amazon.com/images/I/81owL-wNC0L._SX679_.jpg" },
  { asin: "B0CMQJWTYS", brand: "KE", title: "Backless Adjustable Women's Top", detail: "Backless adjustable top with sizing information in the product listing. Check bust measurements, adjustable features and garment length for your variant.", consider: "Occasion outfits and statement styling", styleTip: "Wear with high-waisted bottoms and choose layers suited to your comfort and the occasion.", whyConsider: "Adjustable styling offers a different silhouette from conventional fitted tops.", affiliate: "https://link.amazon/B07pCrTly", image: "https://m.media-amazon.com/images/I/A1503Ncp6QL._SX679_.jpg" },
  { asin: "B0GF2YY6P2", brand: "Zurity", title: "Women's Brown Shirt", detail: "Women's shirt listed in a brown variant. Confirm the selected size, cut and fabric on Amazon before purchasing.", consider: "Everyday smart-casual looks", styleTip: "Try with light denim, trousers or a neutral skirt for a balanced outfit.", whyConsider: "A brown shirt is a versatile alternative to patterned casual tops.", affiliate: "https://link.amazon/B0efpHHWN", image: "https://m.media-amazon.com/images/I/711Qgv8OQyL._SX679_.jpg" },
  { asin: "B0C53MNB9B", brand: "Brand not confirmed", title: "Printed Tie-Up Tunic", detail: "Women's printed tunic with tie-up detailing; the linked listing references a wine-colour variant. Verify the fit, material and exact print.", consider: "Relaxed daywear and tunic styling", styleTip: "Pair with solid-colour leggings or straight trousers to balance the print.", whyConsider: "Tie-up detailing offers an alternative to standard button-front tops.", affiliate: "https://link.amazon/B04wcJp7W", image: "https://m.media-amazon.com/images/I/71fbELX1vwL._SY879_.jpg" },
  { asin: "B0GSZY28SF", brand: "SANNIDHI", title: "V-Neck Crochet-Sleeve Top", detail: "Women's V-neck top with crochet-style sleeve detailing according to the listing title. Confirm fabric, sleeve construction and sizing on Amazon.", consider: "Casual outfits with decorative sleeve details", styleTip: "Let the sleeves stand out by combining the top with simple denim and minimal jewellery.", whyConsider: "Crochet-style sleeves offer a contrasting texture for a casual top.", affiliate: "https://link.amazon/B09QEQTCW", image: "https://m.media-amazon.com/images/I/71b5pBYKGXL._SX679_.jpg" },
] as const;

export const Route = createFileRoute("/fashion/western")({
  staticData: { sitemap: true },
  head: () => pageHead("/fashion/western", "Western Wear Dresses, Tops & Outfit Picks | SkinAndShade", "Explore curated women's Western Wear dresses with styling ideas, fit considerations and Amazon product links."),
  component: WesternWearPage,
});

function WesternWearPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6">
      <Link to="/fashion" className="text-sm font-semibold text-primary underline underline-offset-4">← All Fashion categories</Link>
      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Fashion / Western Wear</p>
      <h1 className="mt-3 text-4xl font-semibold text-primary sm:text-5xl">Western Wear</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">Explore dresses, tops and Western outfits with practical styling suggestions. More Western Wear products will be added as the collection grows.</p>
      <section id="western-products" className="mt-14 scroll-mt-24" aria-labelledby="western-products-heading">
        <h2 id="western-products-heading" className="text-2xl font-semibold text-primary">Western Wear Picks</h2>
        <p className="mt-2 text-sm text-muted-foreground">10 of 15 Western Wear picks added with supplied product image URLs and affiliate links. Styling suggestions are editorial ideas, not customer testimonials. Confirm sizes, materials and variants on Amazon before ordering.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {westernProducts.map((product) => (
            <article key={product.asin} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex aspect-[4/3] items-center justify-center bg-white p-3">
                <img src={product.image} alt={`${product.brand} ${product.title}`} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="h-full w-full object-contain" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{product.brand}</p>
                <h3 className="mt-2 text-lg font-semibold text-primary">{product.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{product.detail}</p>
                <p className="mt-3 text-sm text-muted-foreground"><strong className="font-semibold text-foreground">Best for:</strong> {product.consider}</p>
                <p className="mt-2 text-sm text-muted-foreground"><strong className="font-semibold text-foreground">Style tip:</strong> {product.styleTip}</p>
                <p className="mt-2 text-sm text-muted-foreground"><strong className="font-semibold text-foreground">Why consider it:</strong> {product.whyConsider}</p>
                <a href={product.affiliate} target="_blank" rel="sponsored noopener noreferrer" className="mt-5 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">View on Amazon <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <p className="mt-10 text-xs text-muted-foreground">Some links on this page are affiliate links. We may earn a commission from qualifying purchases. Verify product details, size and availability on Amazon.</p>
    </main>
  );
}
