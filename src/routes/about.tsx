import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SkinAndShade" },
      {
        name: "description",
        content:
          "Why SkinAndShade exists: honest, budget-aware beauty picks for India, with a clear note on how the site earns.",
      },
      { property: "og:title", content: "About — SkinAndShade" },
      {
        property: "og:description",
        content:
          "Why SkinAndShade exists: honest, budget-aware beauty picks for India, with a clear note on how the site earns.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
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
          Beauty shopping in India is noisy. Every product claims to be a miracle, prices swing
          wildly between sale days, and it's hard to tell a genuine deal from a marked-up
          "discount". SkinAndShade is my attempt to cut through that.
        </p>
        <p>
          Every product on this site is something I'd hand to a friend without a caveat. Each card
          carries two short notes: <span className="font-semibold text-foreground">who it suits
          best</span> and <span className="font-semibold text-foreground">why it earned its
          place</span>. If a product doesn't have a clear answer to both, it doesn't get listed.
        </p>
        <p>
          I keep the catalogue small on purpose — a few dozen honest picks beat a thousand
          copy-pasted listings. The guides section shares the routines and label-reading tricks
          behind those choices.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-card-foreground">How this site earns</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          SkinAndShade is part of the Amazon Associates programme. When you tap "View on Amazon"
          and buy something, Amazon pays a small commission at no extra cost to you. That
          commission never decides what gets listed — a product earns its spot first, and the
          link comes after.
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
