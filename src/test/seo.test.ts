import { describe, expect, it } from "vitest";
import { pageHead, pageUrl, SITE_URL } from "@/lib/seo";

describe("published site address", () => {
  it("uses skinandshade.lovable.app for canonical page URLs", () => {
    expect(SITE_URL).toBe("https://skinandshade.lovable.app");
    expect(pageUrl("/guides/example")).toBe(
      "https://skinandshade.lovable.app/guides/example",
    );
  });

  it("uses the same absolute address for canonical and Open Graph URLs", () => {
    const head = pageHead("/about", "About", "About SkinAndShade");
    expect(head.links).toContainEqual({
      rel: "canonical",
      href: "https://skinandshade.lovable.app/about",
    });
    expect(head.meta).toContainEqual({
      property: "og:url",
      content: "https://skinandshade.lovable.app/about",
    });
  });
});
