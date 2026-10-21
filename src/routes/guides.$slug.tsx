import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { guides } from "@/data/guides";

export const Route = createFileRoute("/guides/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const guide = guides.find((g) => g.slug === params.slug);
    if (!guide) throw notFound();
    return guide;
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — SkinAndShade` : "Guide — SkinAndShade" },
      {
        name: "description",
        content: loaderData?.excerpt ?? "A beauty guide from SkinAndShade.",
      },
      { property: "og:title", content: loaderData?.title ?? "Guide — SkinAndShade" },
      {
        property: "og:description",
        content: loaderData?.excerpt ?? "A beauty guide from SkinAndShade.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `https://amazon-finds-and-favorites.lovable.app/guides/${params.slug}` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `https://amazon-finds-and-favorites.lovable.app/guides/${params.slug}` }],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.title,
              description: loaderData.excerpt,
              datePublished: loaderData.date,
            }),
          },
        ]
      : [],
  }),
  component: GuidePage,
});

function GuidePage() {
  const guide = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-2xl px-4 pt-14 sm:px-6">
      <Link
        to="/guides"
        className="text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-ring"
      >
        ← All guides
      </Link>
      <p className="mt-8 text-xs text-muted-foreground">
        {new Date(guide.date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        · {guide.readTime}
      </p>
      <h1 className="mt-3 text-4xl font-semibold leading-tight text-primary sm:text-5xl">
        {guide.title}
      </h1>

      <article className="mt-10 space-y-6">
        {guide.blocks.map((block, i) => (
          <section key={i}>
            {block.heading && (
              <h2 className="mb-2 text-2xl font-semibold text-foreground">{block.heading}</h2>
            )}
            <p className="leading-relaxed text-muted-foreground">{block.body}</p>
          </section>
        ))}
      </article>

      <p className="mt-12 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
        Product prices mentioned were checked when this guide was written and may have changed on
        Amazon since.
      </p>
    </main>
  );
}
