import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Heart, ShieldCheck } from "lucide-react";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "SkinAndShade | Fashion, Beauty & Everyday Style for Women" },
      { name: "description", content: "Find outfit ideas, skincare essentials and practical buying guides for women in India. Browse fashion and beauty picks, then check details directly on Amazon." },
      { property: "og:title", content: "SkinAndShade — Fashion & Beauty Finds for Women" },
      { property: "og:description", content: "Easy outfit ideas, beauty essentials and useful guides to help you shop with confidence." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://amazon-finds-and-favorites.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://amazon-finds-and-favorites.lovable.app/" }],
  }),
  component: Home,
});

const fashion = [
  { title: "Ethnic Wear", subtitle: "For celebrations and everyday elegance", href: "/fashion/ethnic", image: "https://m.media-amazon.com/images/I/71aZJp5w0aL._SY879_.jpg" },
  { title: "Western Wear", subtitle: "Easy looks for plans big and small", href: "/fashion/western", image: "https://m.media-amazon.com/images/I/91IZ1hG6TwL._SX679_.jpg" },
  { title: "Everyday Fashion", subtitle: "The pieces you'll reach for again", href: "/fashion/everyday", image: "https://m.media-amazon.com/images/I/81GtNzPZmlL._SX679_.jpg" },
  { title: "Formal Wear", subtitle: "Feel ready for the workday", href: "/fashion/formal", image: "https://m.media-amazon.com/images/I/91FXQLEjDZL._SX679_.jpg" },
  { title: "Winter Wear", subtitle: "Layers for cooler mornings", href: "/fashion/winter", image: "https://m.media-amazon.com/images/I/81Nn827f2CL._SX679_.jpg" },
  { title: "Accessories", subtitle: "Small details, a fresh look", href: "/fashion/accessories", image: "https://m.media-amazon.com/images/I/71okMzeZh6L._SY695_.jpg" },
] as const;

const beautyCategories = [
  { title: "Skincare", subtitle: "A little care, every day", href: "/skincare", image: "" },
  { title: "Hair Care", subtitle: "For your wash-day routine", href: "/haircare", image: "" },
  { title: "Fragrance", subtitle: "Find a scent that feels like you", href: "/fragrance", image: "" },
  { title: "Personal Care", subtitle: "Useful everyday essentials", href: "/bath-body", image: "" },
] as const;

const beautyAsins = ["B08M4QF7V9", "B0BDVG99J5", "B00JLGCPCU", "B0H6MC7DGG", "B0BVWDJTHF"];
const fashionPicks = [
  { name: "Paisley Print Kurta Set", note: "An easy ethnic look for family gatherings", image: "https://m.media-amazon.com/images/I/91ZUTlLx1jL._SX679_.jpg", href: "https://link.amazon/B00A5tWFr", category: "Ethnic Wear" },
  { name: "Striped Vacation Dress", note: "A relaxed choice for warm-weather outings", image: "https://m.media-amazon.com/images/I/81tKqwLJ3wL._SX679_.jpg", href: "https://link.amazon/B08WR8xzE", category: "Western Wear" },
  { name: "Relaxed Printed T-Shirt", note: "A simple piece to wear with your favourite jeans", image: "https://m.media-amazon.com/images/I/71IP8bwk5CL._SX679_.jpg", href: "https://link.amazon/B01WqpNHy", category: "Everyday Fashion" },
  { name: "Longline Blazer", note: "An extra layer for work and smart outfits", image: "https://m.media-amazon.com/images/I/81NraLgpCtL._SX679_.jpg", href: "https://link.amazon/B0gtXj40L", category: "Formal Wear" },
  { name: "Women's Puffer Jacket", note: "A practical outer layer for colder days", image: "https://m.media-amazon.com/images/I/81h3TrXIAFL._SX679_.jpg", href: "https://link.amazon/B0i5nPEKY", category: "Winter Wear" },
] as const;

const stories = [
  { title: "What should I wear to a job interview?", intro: "Put together a neat outfit without buying a whole new wardrobe.", href: "/guides/what-to-wear-to-a-job-interview", tag: "Fashion" },
  { title: "Skin feeling dry again?", intro: "Small changes that can make your skincare routine easier.", href: "/guides/dry-skin-simple-moisturising-routine", tag: "Beauty" },
  { title: "Make more outfits with fewer clothes", intro: "See how a few useful pieces can work together all week.", href: "/guides/building-a-versatile-everyday-wardrobe", tag: "Style ideas" },
] as const;

function Home() {
  const beautyPicks = beautyAsins.map(asin => products.find(p => p.asin === asin)).filter((p): p is (typeof products)[number] => Boolean(p));
  return (
    <main className="pb-20">
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-[#f8e9eb] via-[#fff9f7] to-[#f4e9d8]">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 sm:px-6 md:grid-cols-[1.05fr_.95fr] md:py-20">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-primary">Fashion • Beauty • Your everyday style</p>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.1] text-primary sm:text-5xl lg:text-6xl">Women’s Fashion &amp; Beauty <em className="text-accent">Finds in India.</em></h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-foreground/75">Some mornings, choosing what to wear takes longer than getting ready. On others, your skin feels dry or your hair has a mind of its own. SkinAndShade brings everyday fashion ideas and beauty essentials together, so you can start with what you actually need. Browse kurta sets for family gatherings, comfortable pieces for work, casual outfits for weekends and layers for cooler days. In beauty, explore skincare, hair care, fragrance and personal-care options without feeling that you need to buy everything at once. Our guides explain common questions in simple language, from choosing a moisturiser to building an outfit around clothes you already own. We share product details and styling ideas to help you compare options, not promises that every item will work for everyone. When something catches your eye, open its Amazon listing to check the current price, size, ingredients, seller and reviews before you decide.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/fashion" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Explore fashion <ArrowRight size={17}/></Link>
              <Link to="/guides" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5">Read beauty guides <ArrowRight size={17}/></Link>
            </div>
          </div>
          <div className="grid h-[320px] grid-cols-2 gap-3 sm:h-[430px]">
            <a href="/fashion/everyday" className="group relative overflow-hidden rounded-[2rem] bg-[#f0dedc]"><img src="https://m.media-amazon.com/images/I/81GtNzPZmlL._SX679_.jpg" alt="Everyday fashion outfit inspiration" fetchPriority="high" loading="eager" decoding="async" width={679} height={850} className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"/><span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-primary shadow-sm">Everyday style ↗</span></a>
            <div className="grid grid-rows-2 gap-3">
              <a href="/fashion/winter" className="group relative overflow-hidden rounded-[1.5rem] bg-[#eee1d8]"><img src="https://m.media-amazon.com/images/I/81Nn827f2CL._SX679_.jpg" alt="Knitted outfit for cooler days" loading="lazy" decoding="async" width={679} height={850} className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"/><span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary">Winter looks ↗</span></a>
              <a href="/fashion/accessories" className="group relative overflow-hidden rounded-[1.5rem] bg-[#f4e8eb]"><img src="https://m.media-amazon.com/images/I/71okMzeZh6L._SY695_.jpg" alt="Bracelet accessory" loading="lazy" decoding="async" width={695} height={695} className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"/><span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary">Accessories ↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-6" aria-labelledby="fashion-heading">
        <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-primary">Find your look</p><h2 id="fashion-heading" className="mt-2 text-3xl font-semibold text-primary sm:text-4xl">What are you dressing for?</h2><p className="mt-3 max-w-2xl text-muted-foreground">A family function, a workday or a quiet weekend? Start with what feels right for you.</p></div><Link to="/fashion" className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline underline-offset-4">See all fashion <ArrowRight size={16}/></Link></div>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {fashion.map(c => <a key={c.title} href={c.href} className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"><div className="aspect-[3/4] overflow-hidden bg-[#f7eef0]"><img src={c.image} alt={c.title} loading="lazy" decoding="async" width={679} height={850} className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"/></div><div className="p-3"><h3 className="font-semibold text-primary">{c.title}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{c.subtitle}</p></div></a>)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20 sm:px-6" aria-labelledby="fashion-picks-heading">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">Outfit inspiration</p><h2 id="fashion-picks-heading" className="mt-2 text-3xl font-semibold text-primary sm:text-4xl">A few pieces to start with</h2><p className="mt-3 max-w-2xl text-muted-foreground">You don't need to change your whole wardrobe. Sometimes one useful piece makes getting dressed easier.</p></div><Link to="/fashion" className="text-sm font-semibold text-primary underline underline-offset-4">Browse fashion collections</Link></div>
        <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {fashionPicks.map(p => <article key={p.href} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"><a href={p.href} target="_blank" rel="sponsored noopener noreferrer" className="block aspect-[4/5] bg-[#f8eff1]"><img src={p.image} alt={p.name} loading="lazy" decoding="async" width={679} height={850} className="h-full w-full object-contain p-3"/></a><div className="flex flex-1 flex-col p-4"><span className="text-[11px] font-semibold uppercase tracking-wide text-primary">{p.category}</span><h3 className="mt-2 font-semibold leading-snug text-primary">{p.name}</h3><p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{p.note}</p><a href={p.href} target="_blank" rel="sponsored noopener noreferrer" className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground">View on Amazon ↗</a></div></article>)}
        </div>
      </section>

      <section className="mt-20 bg-[#f8eef0] py-16" aria-labelledby="beauty-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">A little everyday care</p><h2 id="beauty-heading" className="mt-2 text-3xl font-semibold text-primary sm:text-4xl">Beauty, without the guesswork</h2><p className="mt-3 max-w-2xl text-muted-foreground">From a dry-skin day to a busy hair-wash morning, find the products and simple advice that fit your routine.</p></div><Link to="/guides" className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline underline-offset-4">Explore beauty guides <ArrowRight size={16}/></Link></div>
          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
            {beautyCategories.map(c => <Link key={c.title} to={c.href} className="group overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"><div className="flex aspect-[5/4] items-center justify-center overflow-hidden rounded-xl bg-[#f9f0f1]"><img src={products.find(p => p.category === c.title && p.image)?.image ?? ""} alt={c.title + " product selection"} loading="lazy" decoding="async" width={640} height={640} className="h-full w-full object-contain p-3"/></div><h3 className="mt-4 text-lg font-semibold text-primary">{c.title}</h3><p className="mt-1 text-sm text-muted-foreground">{c.subtitle}</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">Explore <ArrowRight size={14}/></span></Link>)}
          </div>
          <h3 className="mt-12 text-2xl font-semibold text-primary">Five everyday beauty essentials to compare</h3>
          <p className="mt-2 text-sm text-muted-foreground">A small selection from different routines, not a bestseller ranking. Check ingredients, sizes and current prices on Amazon.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {beautyPicks.map(p => <article key={p.asin} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"><a href={p.affiliateUrl ?? `https://www.amazon.in/dp/${p.asin}?tag=zencart0c-21`} target="_blank" rel="sponsored noopener noreferrer" className="aspect-[4/5] bg-white p-3"><img src={p.image} alt={p.title} loading="lazy" decoding="async" width={640} height={640} className="h-full w-full object-contain"/></a><div className="flex flex-1 flex-col p-4"><p className="text-xs font-semibold text-primary">{p.category}</p><h4 className="mt-2 text-sm font-semibold leading-6 text-primary">{p.brand} {p.title}</h4><p className="mt-2 flex-1 text-xs leading-5 text-muted-foreground">{p.bestFor}</p><a href={p.affiliateUrl ?? `https://www.amazon.in/dp/${p.asin}?tag=zencart0c-21`} target="_blank" rel="sponsored noopener noreferrer" className="mt-4 rounded-full border border-primary px-3 py-2 text-center text-xs font-semibold text-primary">View on Amazon ↗</a></div></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6" aria-labelledby="guides-heading">
        <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">Good to know</p><h2 id="guides-heading" className="mt-2 text-3xl font-semibold text-primary sm:text-4xl">A little help before you shop</h2><p className="mt-3 max-w-2xl text-muted-foreground">Real questions deserve clear answers. These guides are here to make everyday choices feel easier.</p></div><Link to="/guides" className="text-sm font-semibold text-primary underline underline-offset-4">More beauty guides</Link></div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">{stories.map(s => <a key={s.href} href={s.href} className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary"><BookOpen size={15}/>{s.tag}</div><h3 className="mt-4 text-xl font-semibold leading-snug text-primary">{s.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{s.intro}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Read the guide <ArrowRight size={16}/></span></a>)}</div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-6"><div className="grid gap-6 rounded-3xl border border-border bg-card p-7 sm:grid-cols-[auto_1fr] sm:p-9"><Heart className="h-8 w-8 text-accent"/><div><h2 className="text-2xl font-semibold text-primary">A thoughtful way to shop</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">We bring outfit ideas, product information and simple buying tips together so you can choose what works for you. We don't personally test every item, and prices, sizes and availability may change. Always check the latest details with the seller before ordering.</p><p className="mt-3 flex items-start gap-2 text-sm leading-7 text-muted-foreground"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-accent"/>Some links are affiliate links. As an Amazon Associate, we earn from qualifying purchases, at no extra cost to you.</p><Link to="/editorial-policy" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary underline underline-offset-4">How we choose what to share <ArrowRight size={15}/></Link></div></div></section>
    </main>
  );
}
