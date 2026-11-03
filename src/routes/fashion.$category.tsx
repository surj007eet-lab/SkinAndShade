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
  {asin:"B0G6DXCP75",brand:"NAINVISH",title:"Printed Safari-Style Everyday Wear",detail:"Printed clothing from NAINVISH. Check the listing for garment type, fabric, measurements and colour.",tip:"Try with simple accessories to keep the print in focus.",affiliate:"https://link.amazon/B0boedB3s",image:"https://m.media-amazon.com/images/I/81i0qvJAmsL._SX679_.jpg"},
  {asin:"B0HMLM6Z4G",brand:"Salbay",title:"Striped Button-Down Workwear",detail:"Striped button-down style suitable for smart-casual outfit planning. Confirm the garment type and fit on Amazon.",tip:"Pair stripes with plain trousers or denim.",affiliate:"https://link.amazon/B0gDdaa3x",image:"https://m.media-amazon.com/images/I/71bZUlZbtJL._SX679_.jpg"},
  {asin:"B0G6ZSDP3H",brand:"Youthnic",title:"Women’s Light Green Rayon Yoke Embroidery Straight Short Kurti",detail:"Light green rayon short kurti with yoke embroidery, suitable for office or college outfit planning. Check size, length and care instructions on Amazon.",tip:"Pair with straight trousers or jeans for a simple everyday look.",affiliate:"https://link.amazon/B07pp5uHL",image:"https://m.media-amazon.com/images/I/71aZJp5w0aL._SY879_.jpg"},
  {asin:"B0FLQF93S8",brand:"FableStreet",title:"Cotton Collared Oversized Shirt - White",detail:"White oversized collared shirt described as cotton. Check the size chart, fabric composition and care details on Amazon.",tip:"Style with tailored trousers for work or denim for casual wear.",affiliate:"https://link.amazon/B0ii6vCrN",image:"https://m.media-amazon.com/images/I/81GtNzPZmlL._SX679_.jpg"},
  {asin:"B09K44FLG1",brand:"Miss Chase",title:"Multicoloured Sleeveless Outfit",detail:"Multicoloured sleeveless women's outfit from Miss Chase. Verify exact style and selected size before buying.",tip:"Keep footwear and accessories understated to complement the colours.",affiliate:"https://link.amazon/B0e6TTsSh",image:"https://m.media-amazon.com/images/I/A1HMW+56DKL._SX679_.jpg"},
] as const;

const formalProducts = [
  {asin:"B0GBWJ557Z",brand:"Classy Fashion",title:"White Collared Polyester Formal Top",detail:"White collared polyester garment; check the exact fit and sleeve details on the retailer listing.",tip:"Pair with dark tailored trousers for a clean office outfit.",affiliate:"https://link.amazon/B05gHhJ01",image:"https://m.media-amazon.com/images/I/91FXQLEjDZL._SX679_.jpg"},
  {asin:"B0GSQJX35M",brand:"TOOCHKI",title:"Lightweight Longline Blazer",detail:"Longline blazer for office layering; confirm lining, measurements and closure.",tip:"Wear over a plain shirt with straight-leg trousers.",affiliate:"https://link.amazon/B0gtXj40L",image:"https://m.media-amazon.com/images/I/81NraLgpCtL._SX679_.jpg"},
  {asin:"B0GNMX2JSY",brand:"LITZO",title:"Women's Western Workwear",detail:"Workwear fashion item; check the garment style, material and fit on Amazon.",tip:"Coordinate with understated accessories for a work-ready look.",affiliate:"https://link.amazon/B01Fpu5Rd",image:"https://m.media-amazon.com/images/I/81n5TOZ-CbL._SX679_.jpg"},
  {asin:"B0GQSP9QQG",brand:"TOOCHKI",title:"High-Waisted Straight Formal Trousers",detail:"High-waisted straight-cut trousers described as stretchable; check the size chart.",tip:"Pair with a tucked-in blouse or structured shirt.",affiliate:"https://link.amazon/B05mvGdT4",image:"https://m.media-amazon.com/images/I/61L6W-1iZaL._SX679_.jpg"},
  {asin:"B0CSG5R4N2",brand:"Symbol Premium",title:"Women's Regular-Fit Shirt — Peach",detail:"Peach regular-fit women's shirt; check fabric and sleeve details on the listing.",tip:"Combine with neutral trousers for everyday office wear.",affiliate:"https://link.amazon/B0eCnNF20",image:"https://m.media-amazon.com/images/I/91nVujywkTL._SX679_.jpg"},
  {asin:"B0HDJK4TST",brand:"Gufrina",title:"Tailored Collared Western Wear",detail:"Tailored collared women's workwear item; verify the exact garment type and fit.",tip:"Style with plain formal bottoms and simple footwear.",affiliate:"https://link.amazon/B01OtYBKN",image:"https://m.media-amazon.com/images/I/916m1351wpL._SX679_.jpg"},
  {asin:"B0G4WLQR3S",brand:"KERI PERRY",title:"High-Waisted Stretchable Trousers",detail:"High-waisted trousers described as stretchable; compare waist and inseam measurements.",tip:"Pair with a button-down shirt or blazer.",affiliate:"https://link.amazon/B03Pj5vJf",image:"https://m.media-amazon.com/images/I/71XQJ+e8NNL._SX679_.jpg"},
  {asin:"B0D4Z95Z53",brand:"Allen Solly",title:"Women's Regular-Fit Navy Top",detail:"Navy regular-fit women's clothing item; confirm exact style and material on Amazon.",tip:"Navy pairs well with beige, grey or black workwear.",affiliate:"https://link.amazon/B0hsXjGel",image:"https://m.media-amazon.com/images/I/81bStZCLb8L._SX679_.jpg"},
  {asin:"B0G38Y5HS6",brand:"BlissClub",title:"Ultimate Regular-Fit Trousers",detail:"Regular-fit trousers for smart-casual outfits; verify fabric, cut and size.",tip:"Wear with a collared shirt or relaxed blazer.",affiliate:"https://link.amazon/B07FiPBqv",image:"https://m.media-amazon.com/images/I/814gwT2+2JL._SX679_.jpg"},
  {asin:"B0GTYRSMMB",brand:"Selvia",title:"Women's Brown Formal Trousers",detail:"Brown women's trousers; check rise, length and material before ordering.",tip:"Pair with ivory or cream tops for a coordinated work look.",affiliate:"https://link.amazon/B04CQ6vnD",image:"https://m.media-amazon.com/images/I/8119SoiSoWL._SX679_.jpg"},
  {asin:"B0GQGDQWXX",brand:"IUGA",title:"Women's Sleeveless Collared Western Wear",detail:"Sleeveless collared style for smart-casual and office outfits. Check fabric, fit and length on the listing.",tip:"Pair with tailored trousers and a light layer when needed.",affiliate:"https://link.amazon/B0dis6w8k",image:"https://m.media-amazon.com/images/I/81HLTL1mL+L._SX679_.jpg"},
  {asin:"B0CM17ZQMG",brand:"Leriya Fashion",title:"Two-Piece Payjama Set",detail:"Coordinated two-piece set described as a payjama style. Check included pieces, fabric and suitability for your workplace.",tip:"Try with minimal accessories for a coordinated outfit.",affiliate:"https://link.amazon/B09fKKvFE",image:"https://m.media-amazon.com/images/I/91wM8WIGEvL._SX679_.jpg"},
  {asin:"B0GNMX3FCH",brand:"LITZO",title:"Women's Oversized Workwear Shirt",detail:"Oversized women's shirt for relaxed workwear styling. Compare shoulder, bust and length measurements.",tip:"Balance the loose fit with straight or tapered trousers.",affiliate:"https://link.amazon/B0hf7qrLo",image:"https://m.media-amazon.com/images/I/81pD5htGe7L._SX679_.jpg"},
  {asin:"B0GFM6SLTC",brand:"Rangkathaa",title:"Women's Corporate & Meeting Wear",detail:"A workwear option marketed for professional meetings. Confirm the garment type, cut and fabric on Amazon.",tip:"Choose accessories and footwear appropriate for your office dress code.",affiliate:"https://link.amazon/B02lsb3OG",image:"https://m.media-amazon.com/images/I/81SbGk0dOoL._SX679_.jpg"},
  {asin:"B0D9BS36XH",brand:"Selvia",title:"Women's Brown Bodycon Western Dress",detail:"Brown bodycon-style western dress. Check the length, fabric stretch and fit before ordering.",tip:"Consider a structured blazer for a smart occasion outfit.",affiliate:"https://link.amazon/B0eHSMaW7",image:"https://m.media-amazon.com/images/I/81vNw9iqEgL._SX679_.jpg"},
] as const;

const categories: Record<string, { title: string; description: string }> = {
  everyday: { title: "Everyday Fashion", description: "Browse everyday clothing, shoes and wardrobe essentials with practical buying considerations." },
  formal: { title: "Formal Wear", description: "Explore shirts, blazers and tailored trousers for office outfits and smart occasions." },
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
  if (category === "everyday" || category === "formal") {
    const currentProducts = category === "formal" ? formalProducts : everydayProducts;
    const isFormal = category === "formal";
    return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6">
      <Link to="/fashion" className="text-sm font-semibold text-primary underline">← All Fashion categories</Link>
      <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-accent">Fashion / {isFormal ? "Formal Wear" : "Everyday Fashion"}</p>
      <h1 className="mt-3 text-4xl font-semibold text-primary">{isFormal ? "Formal Wear" : "Everyday Fashion"}</h1>
      <p className="mt-5 max-w-3xl text-muted-foreground">{isFormal ? "Explore work-ready shirts, blazers and trousers for office days and smart occasions. Check fabric, measurements and garment details on Amazon before ordering." : "Explore casual tops, leggings, coordinated outfits, footwear and everyday essentials. Compare sizes, materials and current product details on Amazon before ordering."}</p>
      <section className="mt-12" aria-label={isFormal ? "Formal Wear Picks" : "Everyday Fashion Picks"}>
        <h2 className="text-2xl font-semibold text-primary">{isFormal ? "Formal Wear Picks" : "Everyday Fashion Picks"}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentProducts.map(p => (
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
  }
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
