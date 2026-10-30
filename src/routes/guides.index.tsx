import { Link, createFileRoute } from "@tanstack/react-router";
import { guides } from "@/data/guides";

export const Route = createFileRoute("/guides/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Beauty Buying Guides | SkinAndShade" },
      { name: "description", content: "Practical beauty buying guides for women in India, covering skincare routines, sunscreen labels and how to compare face serums." },
      { property: "og:title", content: "Beauty Buying Guides | SkinAndShade" },
      { property: "og:description", content: "Practical beauty buying guides for women in India, covering skincare routines, sunscreen labels and how to compare face serums." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://amazon-finds-and-favorites.lovable.app/guides" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://amazon-finds-and-favorites.lovable.app/guides" }],
  }),
  component: GuidesPage,
});

function GuidesPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 pt-14 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Guides</p>
      <h1 className="mt-4 text-4xl font-semibold text-primary sm:text-5xl">
        Beauty buying guides, minus the confusion
      </h1>
      <p className="mt-4 text-muted-foreground">
        Clear, practical reads to help women in India compare beauty products, understand labels and shop with more confidence.
      </p>

      <ul className="mt-10 space-y-5">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link
              to="/guides/$slug"
              params={{ slug: g.slug }}
              className="block rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring"
            >
              <p className="text-xs text-muted-foreground">
                {new Date(g.updated).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · Editorial update · {g.readTime}
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-snug text-card-foreground">
                {g.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{g.excerpt}</p>
              <span className="mt-4 inline-block border-b border-primary pb-0.5 text-sm font-medium text-primary">
                Read the guide →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
