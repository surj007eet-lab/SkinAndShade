import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/contact")({
  staticData: { sitemap: false },
  beforeLoad: () => { throw redirect({ to: "/editorial-policy", statusCode: 301 }); },
});
