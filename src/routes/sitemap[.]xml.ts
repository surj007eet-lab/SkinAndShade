import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { guides } from "@/data/guides";
import {
  isSitemapRouteIncluded,
  sitemapPathForLocation,
  sitemapStaticPaths,
  sitemapXML,
  type SitemapEntry,
} from "@/lib/sitemap";

const BASE_URL = "https://amazon-finds-and-favorites.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));
        const routeId = "/guides/$slug";
        if (isSitemapRouteIncluded(router.routesById[routeId])) {
          for (const g of guides) {
            const location = router.buildLocation({
              to: "/guides/$slug",
              params: { slug: g.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, routeId);
            if (path) entries.push({ path });
          }
        }
        // Include valid dynamic fashion collection URLs as well as article slugs.
        const fashionRouteId = "/fashion/$category";
        if (isSitemapRouteIncluded(router.routesById[fashionRouteId])) {
          for (const category of ["everyday", "formal", "winter", "accessories"]) {
            const location = router.buildLocation({
              to: "/fashion/$category",
              params: { category },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, fashionRouteId);
            if (path) entries.push({ path });
          }
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
