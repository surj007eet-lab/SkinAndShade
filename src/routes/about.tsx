import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "About SkinAndShade | Beauty Shopping Guide for Women in India" },
      { name: "description", content: "Learn how SkinAndShade organizes beauty product information and buying guides for women shopping in India." },
      { property: "og:title", content: "About SkinAndShade" },
      { property: "og:description", content: "Learn how SkinAndShade organizes beauty product information and buying guides for women shopping in India." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://amazon-finds-and-favorites.lovable.app/about" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://amazon-finds-and-favorites.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 pt-14 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">About</p>
      <h1 className="mt-4 text-4xl font-semibold text-primary sm:text-5xl">
        Why SkinAndShade exists
      </h1>

      <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground">
        <p>
          SkinAndShade is a beauty-shopping guide for women in India. It brings skincare, hair care,
          fragrance and bath &amp; body listings together so shoppers can compare product formats,
          stated details and practical buying considerations before visiting a retailer.
        </p>
        <p>
          Our catalogue notes are based on information available in product listings and other
          cited sources. Products are not represented as personally tested, clinically evaluated,
          dermatologist recommended or suitable for everyone. Product formulas, sellers, stock and
          prices can change, so check the current product page and packaging before ordering.
        </p>
        <p>
          Our guides explain how to compare labels and think through common buying decisions. We aim
          to make the information clear and useful, distinguish verified details from unknowns,
          and correct errors when they are brought to our attention. The current catalogue focuses
          on beauty; fashion may be considered as the site develops.
        </p>
      </div>

      <div id="affiliate-disclosure" className="mt-10 scroll-mt-24 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-card-foreground">How this site earns</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          As an Amazon Associate I earn from qualifying purchases. If you use an affiliate link
          and make a qualifying purchase, the site may earn a commission at no additional cost to
          you. Affiliate links do not replace the need to review product details, seller information
          and current terms on Amazon.
        </p>
      </div>

      <p className="mt-10">
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-ring"
        >
          Browse the picks →
        </Link>
      </p>
    </main>
  );
}
