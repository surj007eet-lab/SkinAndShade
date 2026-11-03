import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("Route layout integrity", () => {
  // A file named `parent.child.tsx` nests under `parent.tsx`. If that parent renders
  // no <Outlet />, the child's page is silently hidden and the parent's own content
  // shows at the child's URL. Catch that here instead of in the browser.
  it("renders an Outlet in every route file that has child routes", () => {
    const routesDir = join(process.cwd(), "src/routes");
    const files = readdirSync(routesDir).filter((f) => f.endsWith(".tsx"));
    const parents = new Set<string>();

    for (const file of files) {
      const parts = file.replace(/\.tsx$/, "").split(".");
      if (parts.length > 1) parents.add(parts.slice(0, -1).join("."));
    }

    for (const parent of parents) {
      const parentFile = join(routesDir, `${parent}.tsx`);
      // `guides.index.tsx` / `guides.$slug.tsx` have no guides.tsx parent, so they
      // stay top-level siblings and need no Outlet.
      if (!existsSync(parentFile)) continue;
      const source = readFileSync(parentFile, "utf8");
      expect(source, `${parent}.tsx has child routes and must render <Outlet />`).toContain("<Outlet");
    }
  });
});
