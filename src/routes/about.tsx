import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "About SkinAndShade | Shopping Guide for Women in India" },
      { name: "description", content: "Learn what SkinAndShade is, how we put product information together and how to contact us." },
      { property: "og:title", content: "About SkinAndShade" },
      { property: "og:description", content: "Learn what SkinAndShade is, how we put product information together and how to contact us." },
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
          SkinAndShade is a shopping guide for women in India. We put product information and buying guides together to make it easier to compare a few options before visiting a retailer. The catalogue currently focuses on beauty products, and fashion sections are being added.
        </p>
        <p>
          We use the information shown on product listings and the sources linked in our guides. We do not test products ourselves or promise results. Product details, sellers, stock and prices can change, so check the current Amazon listing and the product packaging before ordering.
        </p>
        <p>
          Our aim is to keep things simple and useful. We share the details available to us, avoid making claims we cannot support and correct mistakes when they are brought to our attention. We are working on adding fashion categories to the site.
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
