export const SITE_URL = "https://amazon-finds-and-favorites.lovable.app";
export const SITE_NAME = "SkinAndShade";
export const pageUrl = (path: string) => `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;

export function pageHead(path: string, title: string, description: string, type = "website") {
  const fullTitle = `${title} — ${SITE_NAME}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: pageUrl(path) },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: pageUrl(path) }],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name, item: pageUrl(item.path),
    })),
  };
}

export const jsonLd = (data: unknown) => ({
  type: "application/ld+json",
  children: JSON.stringify(data).replace(/</g, "\\u003c"),
});