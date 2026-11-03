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
  { asin: "B0DWXX7Y6Q", brand: "Vaamsi", title: "Paisley Print Straight Kurta Set", detail: "Paisley-patterned straight-cut ethnic outfit. Confirm the selected fabric, size and included pieces on Amazon.", affiliate: "https://link.amazon/B00A5tWFr", consider: "Everyday ethnic styling and casual gatherings", styleTip: "Let the paisley print stand out: try plain sandals and a small pair of earrings for a balanced daytime look.", whyConsider: "The straight-cut silhouette makes this a useful style to consider when you prefer a clean, less flared ethnic outfit.", image: "https://m.media-amazon.com/images/I/91ZUTlLx1jL._SX679_.jpg" },
  { asin: "B0C73VF7H3", brand: "Rajnandini", title: "Cotton Print Salwar Suit Set", detail: "Printed cotton ethnic-wear option; linked variant is Large. Check the listing for included pieces and measurements.", affiliate: "https://link.amazon/B0dNOrr9T", consider: "Daytime wear and traditional everyday outfits", styleTip: "Pair the printed suit with simple flats and a solid-colour handbag so the pattern remains the focus.", whyConsider: "A coordinated salwar-suit look is an easy starting point for everyday traditional dressing without planning separate pieces.", image: "https://m.media-amazon.com/images/I/91Da+J6yhvL._SX679_.jpg" },
  { asin: "B0CXTGJSN6", brand: "FABNEX", title: "Grey Cotton Kurta Set with Dupatta", detail: "Grey kurta outfit with dupatta, linked in size 2XL. Confirm fabric composition and garment measurements on Amazon.", affiliate: "https://link.amazon/B04Avm3Di", consider: "Understated daytime occasions and coordinated ethnic dressing", styleTip: "Style the grey outfit with silver-toned jewellery or a contrasting handbag for a subtle occasion look.", whyConsider: "Grey offers a neutral base for experimenting with accessories while keeping the kurta-and-dupatta combination visually coordinated.", image: "https://m.media-amazon.com/images/I/917F9xeB8BL._SX679_.jpg" },
  { asin: "B0DDCNQRQZ", brand: "Vaamsi", title: "Blue Printed Kurta Set with Dupatta", detail: "Blue printed straight-style ethnic outfit with dupatta; linked variant is 4XL. Check the seller's size chart.", affiliate: "https://link.amazon/B09y8OLgy", consider: "Casual celebrations and traditional daywear", styleTip: "Try pearl-look earrings or neutral footwear with the blue print; avoid competing patterns in your accessories.", whyConsider: "The blue printed set can suit occasions where you want colour and traditional styling without a heavily embellished look.", image: "https://m.media-amazon.com/images/I/715qtb1GseL._SX679_.jpg" },
  { asin: "B0DYF21LMS", brand: "LAVANDIS", title: "Embroidered Anarkali Kurti", detail: "Anarkali-style embroidered kurti for ethnic and occasion wear. Check the exact colour, fabric and included pieces on Amazon.", affiliate: "https://link.amazon/B0eigRBSw", consider: "Festive styling and occasion-ready ethnic looks", styleTip: "Give the Anarkali shape room to shine: pair it with delicate earrings and streamlined footwear.", whyConsider: "Anarkali silhouettes create a flowing, occasion-oriented look, especially when you prefer a dress-like ethnic style.", image: "https://m.media-amazon.com/images/I/81SE+5zzlTL._SX679_.jpg" },
  { asin: "B0HN5C5S8D", brand: "Brand to verify", title: "Maroon Printed Ethnic Outfit", detail: "Maroon printed traditional-style women's outfit. Confirm the brand, fabric, included pieces and available sizes on Amazon.", affiliate: "https://link.amazon/B0aks70z5", consider: "Traditional looks for casual and festive occasions", styleTip: "Combine the maroon print with gold-toned accessories for a festive feel, or keep jewellery minimal for daytime wear.", whyConsider: "Maroon is a versatile traditional colour to consider when building looks for family gatherings and seasonal celebrations.", image: "https://m.media-amazon.com/images/I/712Ys9TAzGL._SY879_.jpg" },
  { asin: "B0H5KTHGSK", brand: "LookMark", title: "Printed Ethnic Set with Dupatta", detail: "Printed traditional-style outfit with dupatta. Check the exact set contents, fabric and measurements on Amazon.", affiliate: "https://link.amazon/B0fJDgFbH", consider: "Coordinated ethnic looks for daytime outings", styleTip: "Choose accessories that pick up one colour from the print, and drape the dupatta simply to keep the outfit balanced.", whyConsider: "A printed outfit with a dupatta offers several styling options through different drapes and accessory choices.", image: "https://m.media-amazon.com/images/I/8191HQ8AOvL._SX679_.jpg" },
  { asin: "B0GRNNBGR9", brand: "Klosia", title: "Embroidered Straight Kurta Set", detail: "Straight-cut embroidered ethnic outfit with dupatta. Verify colour, included garments and fit details on Amazon.", affiliate: "https://link.amazon/B0iyd18M7", consider: "Polished ethnic dressing and small gatherings", styleTip: "Keep the neckline uncluttered if the embroidery is prominent; finish with small earrings and simple sandals.", whyConsider: "The embroidered detail can act as the focal point, making this a candidate for a polished look with fewer accessories.", image: "https://m.media-amazon.com/images/I/71vj0KOBKSL._SX679_.jpg" },
  { asin: "B0H6JL12YL", brand: "Nermosa", title: "Printed Palazzo Ethnic Set", detail: "Printed straight-style ethnic outfit with palazzo-style bottoms. Confirm included pieces, fabric and size chart on Amazon.", affiliate: "https://link.amazon/B01tPdnxF", consider: "Relaxed traditional dressing with palazzo-style bottoms", styleTip: "Balance the palazzo-style bottoms with a neat dupatta drape and simple footwear for a relaxed silhouette.", whyConsider: "Palazzo-style bottoms offer a different visual proportion from narrow trousers and may appeal if you prefer a wider-leg look.", image: "https://m.media-amazon.com/images/I/61awScTSePL._SX679_.jpg" },
  { asin: "B0FFBB38T6", brand: "Nermosa", title: "Orange Embroidered Ethnic Set", detail: "Orange embroidered ethnic-wear option with dupatta. Check the listing for exact colour, fabric, included pieces and sizes.", affiliate: "https://link.amazon/B0iFUBQIQ", consider: "Bright festive styling and celebrations", styleTip: "Let the orange shade take centre stage with understated jewellery and neutral footwear.", whyConsider: "A bright colour paired with embroidery can create a festive look without relying on multiple bold accessories.", image: "https://m.media-amazon.com/images/I/61-kNXVfMlL._SX679_.jpg" },
  { asin: "B0FB9GQFJ7", brand: "Pistaas", title: "Printed Anarkali Palazzo Set", detail: "Printed Anarkali-style ethnic outfit listed with palazzo and dupatta. Check fabric composition, sizing and included pieces on Amazon.", affiliate: "https://link.amazon/B0dM32vnE", consider: "Festive occasions and flowing Anarkali silhouettes", styleTip: "Try a compact clutch and minimal jewellery so the Anarkali flare and palazzo combination remain the focus.", whyConsider: "The combination of an Anarkali-style top and palazzo bottoms offers a layered traditional silhouette for celebrations.", image: "https://m.media-amazon.com/images/I/81GuKRXhlmL._SX679_.jpg" },
  { asin: "B0H3PW11N6", brand: "GoSriKi", title: "Green Viscose Straight Kurta Set", detail: "Green printed straight-style ethnic outfit listed as viscose; linked variant is XX-Large. Check the size chart and included garments.", affiliate: "https://link.amazon/B0h1PLzrm", consider: "Everyday traditional styling in a green printed design", styleTip: "Pair the green print with beige or tan accessories for a calm daytime palette.", whyConsider: "A green straight-style outfit can be a practical visual alternative to brighter festive colours for casual traditional looks.", image: "https://m.media-amazon.com/images/I/81byl2YbPeL._SX679_.jpg" },
  { asin: "B0H3PX2MH9", brand: "GoSriKi", title: "Brown Viscose Straight Kurta Set", detail: "Brown printed straight-style ethnic outfit listed as viscose; linked variant is Large. Verify garment measurements and included pieces.", affiliate: "https://link.amazon/B03bND96y", consider: "Subtle everyday ethnic outfits and casual outings", styleTip: "Use cream-toned accessories or a contrasting scarf to lift the brown print without overpowering it.", whyConsider: "The earthy brown palette makes this a useful style to consider for understated everyday ethnic dressing.", image: "https://m.media-amazon.com/images/I/81cDE69Zg+L._SX679_.jpg" },
  { asin: "B0FJS97Y96", brand: "Nermosa", title: "Printed Anarkali Set with Dupatta", detail: "Printed Anarkali-style ethnic outfit with dupatta. Check the exact colour, fabric, garment measurements and set contents on Amazon.", affiliate: "https://link.amazon/B02ridlYS", consider: "Festive styling and traditional celebrations", styleTip: "Try a simple dupatta drape and low-profile sandals to keep the focus on the Anarkali silhouette.", whyConsider: "A printed Anarkali with dupatta offers a more flowing alternative to straight-cut kurta sets for traditional occasions.", image: "https://m.media-amazon.com/images/I/81Ae4CNnwDL._SX679_.jpg" },
  { asin: "B0GTVX18KW", brand: "GoSriKi", title: "Banditha Viscose Printed Ethnic Set", detail: "Printed ethnic-wear option described as Banditha, in the seller's Kerosin colour variant and Large size. Verify fabric and included pieces on Amazon.", affiliate: "https://link.amazon/B0g6qrnJ7", consider: "Casual ethnic dressing and printed traditional looks", styleTip: "Build the look around one colour in the print, then add simple flats and a compact bag.", whyConsider: "A printed ethnic outfit is a flexible starting point for casual styling when you want the pattern to provide visual interest.", image: "https://m.media-amazon.com/images/I/91GSJqKX1cL._SX679_.jpg" },
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
      <p className="mt-4 max-w-3xl text-muted-foreground">Find your style by category. Select a fashion category to explore its products. Ethnic Wear picks appear below, while Western Wear has its own dedicated collection page.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" aria-label="Fashion subcategories">
        {sections.map((section) => (
          <a key={section.id} href={section.id === "ethnic" ? "#ethnic-products" : section.id === "western" ? "/fashion/western" : `/fashion/${section.id}`} className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 text-center transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-ring">
            <Shirt className="mb-3 h-6 w-6 text-accent" aria-hidden />
            <span className="text-sm font-semibold text-primary">{section.title}</span>
            <span className="mt-2 text-xs text-muted-foreground">Explore category</span>
          </a>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="https://link.amazon/A0aNtzL4K" target="_blank" rel="sponsored noopener noreferrer" className="rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">Explore More Fashion on Amazon ↗</a>
        <a href="#fashion-articles" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary hover:border-primary">Fashion Guides ↓</a>
      </div>
      <section id="ethnic-products" className="mt-14 scroll-mt-24" aria-labelledby="ethnic-products-heading">
        <h2 id="ethnic-products-heading" className="text-2xl font-semibold text-primary">Ethnic Wear Picks</h2>
        <p className="mt-2 text-sm text-muted-foreground">15 of 15 Ethnic Wear picks added. All 15 products have supplied Amazon image URLs. Styling ideas are editorial suggestions, not customer testimonials or claims of product performance. Check current reviews, sizes and variants on Amazon before ordering.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ethnicProducts.map((product) => (
            <article key={product.asin} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex aspect-[4/3] items-center justify-center bg-white p-3">
                {product.image ? <img src={product.image} alt={`${product.brand} ${product.title}`} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="h-full w-full object-contain" /> : <div className="text-center text-muted-foreground"><Shirt className="mx-auto h-9 w-9" aria-hidden /><p className="mt-2 text-xs">Photo awaiting Amazon image link</p></div>}
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
