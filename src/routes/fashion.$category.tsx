import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

const everydayProducts = [
  {asin:"B0BS9W3H2J",brand:"Rock Paper Scissors",title:"Stretchable Leggings",detail:"Stretchable leggings for daily outfits; check sizing and fabric.",tip:"Style with a longline top or tunic.",affiliate:"https://link.amazon/B0d0Ux0dB",image:"https://m.media-amazon.com/images/I/81GLK1cOQ3L._SX679_.jpg"},
  {asin:"B0G4S2612T",brand:"Leriya Fashion",title:"Western Co-ord Set",detail:"Casual coordinated outfit; verify included pieces and sizing.",tip:"Wear as a set or mix with neutral separates.",affiliate:"https://link.amazon/B0dthzEiF",image:"https://m.media-amazon.com/images/I/91IZ1hG6TwL._SX679_.jpg"},
  {asin:"B0CJRC1YPN",brand:"TOPLOT",title:"Black Everyday Fashion Piece",detail:"Black fashion item; check exact garment type, fit and material on Amazon.",tip:"Pair with denim or contrasting basics.",affiliate:"https://link.amazon/B09qwgjm2",image:"https://m.media-amazon.com/images/I/91ilUJhOM8L._SX679_.jpg"},
  {asin:"B0CTJQJ7ZM",brand:"London Hills",title:"Zipper Sports Running Shoes",detail:"Sports shoes with zipper styling; check fit, sole and closure.",tip:"Wear with leggings or casual trousers.",affiliate:"https://link.amazon/B00EFlDjm",image:"https://m.media-amazon.com/images/I/918oWAdtcoL._SX679_.jpg"},
  {asin:"B0H727T2ZK",brand:"Brand not confirmed",title:"Cotton Sports Bra Pack",detail:"Women's sports bra pack; confirm fabric, pack quantity and support.",tip:"Check bust measurements and preferred fit.",affiliate:"https://link.amazon/B0hknKzAn",image:"https://m.media-amazon.com/images/I/61gvemmCgtL._SX679_.jpg"},
  {asin:"B0HBB9NZNY",brand:"RIEKA",title:"Embroidered Quarter-Sleeve Top",detail:"Embroidered everyday garment; verify exact cut and fabric.",tip:"Combine with simple trousers or jeans.",affiliate:"https://link.amazon/B074jFVDd",image:"https://m.media-amazon.com/images/I/91URFGQ2jUL._SX679_.jpg"},
  {asin:"B0GK6W3XV3",brand:"SHIENZY",title:"Printed Nightwear",detail:"Printed sleepwear; verify garment type, fabric and size.",tip:"Consider for comfortable homewear.",affiliate:"https://link.amazon/B0i47GBYn",image:"https://m.media-amazon.com/images/I/71g80PFV2vL._SX679_.jpg"},
  {asin:"B0H23TQQXD",brand:"Celary",title:"Relaxed Printed T-Shirt",detail:"Printed relaxed-fit T-shirt; verify material and fit.",tip:"Pair with jeans or casual trousers.",affiliate:"https://link.amazon/B01WqpNHy",image:"https://m.media-amazon.com/images/I/71IP8bwk5CL._SX679_.jpg"},
  {asin:"B0HHPYLX3P",brand:"BALACTOR",title:"Cotton Hipster Underwear",detail:"Hipster-style underwear; check fabric, size and pack quantity.",tip:"Compare the size chart before choosing.",affiliate:"https://link.amazon/B0g4oeLyT",image:"https://m.media-amazon.com/images/I/41E48OIYMLL.jpg"},
  {asin:"B0H4Z28CWT",brand:"PREFIT",title:"Ribbed Tank Top",detail:"Women's ribbed tank top; check fabric and measurements.",tip:"Layer beneath an open shirt or pair with wide-leg trousers.",affiliate:"https://link.amazon/B09DXQC4o",image:"https://m.media-amazon.com/images/I/81tM7yQb+kL._SX679_.jpg"},
] as const;

const categories: Record<string, { title: string; description: string }> = {
  everyday: { title: "Everyday Fashion", description: "Browse everyday clothing, shoes and wardrobe essentials with practical buying considerations." },
  formal: { title: "Formal Wear", description: "Office-ready outfits and smart occasion dressing. Product selections are coming soon." },
  winter: { title: "Winter Wear", description: "Sweaters, jackets and practical layering ideas. Product selections are coming soon." },
  accessories: { title: "Fashion Accessories", description: "Bags, jewellery and finishing touches. Product selections are coming soon." },
};

export const Route = createFileRoute("/fashion/$category")({
  staticData: { sitemap: false },
  head: ({ params }) => {
    const category = categories[params.category];
    return pageHead(`/fashion/${params.category}`, `${category?.title ?? "Fashion Category"} | SkinAndShade`, category?.description ?? "Explore fashion categories at SkinAndShade.");
  },
  component: FashionCategoryPage,
});

function FashionCategoryPage() {
  const { category } = Route.useParams();
  const details = categories[category];
  if (!details) {
    return <main className="mx-auto max-w-6xl px-4 py-16"><h1 className="text-3xl font-semibold text-primary">Category not found</h1><Link to="/fashion" className="mt-6 inline-block underline">Browse Fashion categories</Link></main>;
  }
  if (category === "everyday") return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6">
      <Link to="/fashion" className="text-sm font-semibold text-primary underline">← All Fashion categories</Link>
      <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-accent">Fashion / Everyday Fashion</p>
      <h1 className="mt-3 text-4xl font-semibold text-primary">Everyday Fashion</h1>
      <p className="mt-5 max-w-3xl text-muted-foreground">Explore casual tops, leggings, coordinated outfits, footwear and everyday essentials. Compare sizes, materials and current product details on Amazon before ordering.</p>
      <section className="mt-12" aria-label="Everyday Fashion Picks">
        <h2 className="text-2xl font-semibold text-primary">Everyday Fashion Picks</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {everydayProducts.map(p => (
            <article key={p.asin} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex aspect-[4/3] items-center justify-center bg-white p-3"><img src={p.image} alt={p.brand + " " + p.title} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="h-full w-full object-contain" /></div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase text-accent">{p.brand}</p>
                <h3 className="mt-2 text-lg font-semibold text-primary">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.detail}</p>
                <p className="mt-3 text-sm text-muted-foreground"><strong className="text-foreground">Styling / buying tip:</strong> {p.tip}</p>
                <a href={p.affiliate} target="_blank" rel="sponsored noopener noreferrer" className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">View on Amazon ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <p className="mt-10 text-xs text-muted-foreground">Some links are affiliate links. We may earn a commission from qualifying purchases. Confirm details on Amazon.</p>
    </main>
  );
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6">
      <Link to="/fashion" className="text-sm font-semibold text-primary underline underline-offset-4">← All Fashion categories</Link>
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Fashion / {details.title}</p>
      <h1 className="mt-3 text-4xl font-semibold text-primary sm:text-5xl">{details.title}</h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">{details.description}</p>
      <div className="mt-10 rounded-2xl border border-border bg-card p-7">
        <h2 className="text-xl font-semibold text-primary">Products coming soon</h2>
        <p className="mt-3 text-sm text-muted-foreground">We are preparing this collection. No products have been published in this category yet.</p>
      </div>
    </main>
  );
}
