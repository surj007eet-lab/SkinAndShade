import { createFileRoute, Link } from "@tanstack/react-router";
import { Shirt, BookOpen } from "lucide-react";
import { pageHead } from "@/lib/seo";

const sections = [
  { id: "ethnic", title: "Ethnic Wear", description: "Kurtas, salwar suits, sarees and festive styles" },
  { id: "western", title: "Western Wear", description: "Dresses, tops, jeans and modern outfits" },
  { id: "everyday", title: "Everyday Fashion", description: "Easy, comfortable clothes for daily routines" },
  { id: "formal", title: "Formal Wear", description: "Office outfits and smart occasion dressing" },
  { id: "winter", title: "Winter Wear", description: "Sweaters, jackets and layering essentials" },
  { id: "accessories", title: "Fashion Accessories", description: "Bags, jewellery and finishing touches" },
] as const;

const plannedGuides = [
  { title: "What to Wear to a Job Interview", detail: "Choosing comfortable, polished outfits for different workplaces" , slug: "what-to-wear-to-a-job-interview" },
  { title: "What to Wear to an Indian Wedding", detail: "Outfit ideas for daytime, evening and festive functions" , slug: "what-to-wear-to-an-indian-wedding" },
  { title: "Choosing Fabrics for Indian Summers", detail: "Cotton, linen and breathable fabric considerations" , slug: "choosing-fabrics-for-indian-summers" },
  { title: "Building a Versatile Everyday Wardrobe", detail: "How to choose pieces that work together" , slug: "building-a-versatile-everyday-wardrobe" },
  { title: "Winter Layering Without Bulk", detail: "Practical layering tips for different temperatures" , slug: "winter-layering-without-bulk" },
];

export const Route = createFileRoute("/fashion/")({
  staticData: { sitemap: true },
  head: () => pageHead("/fashion", "Women's Fashion Categories & Style Guides | SkinAndShade", "Explore women's fashion categories and upcoming practical outfit guides for occasions, work and everyday wear in India."),
  component: FashionPage,
});

function FashionPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Women's Fashion</p>
      <h1 className="mt-3 text-4xl font-semibold text-primary sm:text-5xl">Explore Fashion</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">Explore outfit ideas for work, weekends, celebrations and changing seasons. Choose a category to compare styles, think about fit and fabric, and find pieces that suit your wardrobe and everyday needs.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" aria-label="Fashion subcategories">
        {sections.map((section) => (
          <Link key={section.id} to="/fashion/$category" params={{ category: section.id }} className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 text-center transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-ring">
            <Shirt className="mb-3 h-6 w-6 text-accent" aria-hidden />
            <span className="text-sm font-semibold text-primary">{section.title}</span>
            <span className="mt-2 text-xs text-muted-foreground">View collection</span>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="https://link.amazon/A0aNtzL4K" target="_blank" rel="sponsored noopener noreferrer" className="rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">Explore More Fashion on Amazon ↗</a>
      </div>
      <section id="fashion-articles" className="mt-16 scroll-mt-24" aria-labelledby="fashion-guides">
        <div className="flex items-center gap-3"><BookOpen className="h-6 w-6 text-accent" aria-hidden /><h2 id="fashion-guides" className="text-2xl font-semibold text-primary">Fashion & Occasion Guides</h2></div>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">Read simple, practical guides for work, celebrations, summer weather and everyday outfits. Each article includes shopping considerations and optional Amazon product links.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plannedGuides.map((guide) => (
            <Link key={guide.title} to="/guides/$slug" params={{ slug: guide.slug }} className="block rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Read the guide</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">{guide.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{guide.detail}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary underline">Read article →</span>
            </Link>
          ))}
        </div>
      </section>
      <p className="mt-10 text-xs text-muted-foreground">Some links on this page are affiliate links. We may earn a commission from qualifying purchases. Product details and availability should be checked on Amazon.</p>
      <Link to="/" className="mt-5 inline-block text-sm font-semibold text-primary underline underline-offset-4">Return to Beauty & Home</Link>
    </main>
  );
}
