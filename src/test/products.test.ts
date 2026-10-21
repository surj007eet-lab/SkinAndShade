import { describe, expect, it } from "vitest";
import { AFFILIATE_TAG, amazonUrl, budgetLimit, products } from "@/data/products";

describe("budget tiers", () => {
  it("Under 299 caps at 299, Under 599 at 599, Under 999 at 999, Any has no cap", () => {
    expect(budgetLimit("Under 299")).toBe(299);
    expect(budgetLimit("Under 599")).toBe(599);
    expect(budgetLimit("Under 999")).toBe(999);
    expect(budgetLimit("Any")).toBeNull();
  });
});

describe("affiliate links", () => {
  it("every product links to amazon.in with the affiliate tag", () => {
    for (const p of products) {
      expect(amazonUrl(p.asin)).toBe(
        `https://www.amazon.in/dp/${p.asin}?tag=${AFFILIATE_TAG}`,
      );
    }
  });

  it("uses the zencart0c-21 tag", () => {
    expect(AFFILIATE_TAG).toBe("zencart0c-21");
  });
});

describe("catalogue integrity", () => {
  it("every product has an image, description, why-picked and best-for", () => {
    for (const p of products) {
      expect(p.image).toMatch(/^https:\/\//);
      expect(p.description.length).toBeGreaterThan(20);
      expect(p.whyPicked.length).toBeGreaterThan(10);
      expect(p.bestFor.length).toBeGreaterThan(3);
    }
  });
});
