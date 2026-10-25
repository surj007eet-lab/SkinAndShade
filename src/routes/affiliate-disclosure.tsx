import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/affiliate-disclosure")({
  staticData: { sitemap: false },
  beforeLoad: () => { throw redirect({ to: "/about", hash: "affiliate-disclosure", statusCode: 301 }); },
});
