import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for /fashion/*. The page shown at /fashion itself lives in
// fashion.index.tsx; ethnic/western/$category render through this Outlet.
export const Route = createFileRoute("/fashion")({
  staticData: { sitemap: false },
  component: () => <Outlet />,
});
