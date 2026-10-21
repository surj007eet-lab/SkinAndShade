export interface GuideBlock {
  heading?: string;
  body: string;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  blocks: GuideBlock[];
}

export const guides: Guide[] = [
  {
    slug: "simple-skincare-routine-under-1000",
    title: "Simple skincare routine under ₹1,000",
    excerpt:
      "A cleanser, a serum and a sunscreen — the only three steps most Indian skin actually needs, all for under a thousand rupees.",
    date: "2026-10-15",
    readTime: "5 min read",
    blocks: [
      {
        body: "Skincare doesn't need ten steps. For most people dealing with Indian heat, humidity and city pollution, three products done consistently beat a shelf full of half-used bottles. Here's the routine I'd put together with a ₹1,000 budget.",
      },
      {
        heading: "Step 1: A cleanser that matches your skin",
        body: "If your skin is oily or acne-prone, a salicylic acid face wash like Minimalist's 2% Salicylic Acid cleanser (₹270) unclogs pores without stripping. On a tighter budget, Himalaya's Neem face wash does a solid job too. Dry skin should pick a gentle, non-foaming cleanser instead.",
      },
      {
        heading: "Step 2: One serum, one job",
        body: "Pick the concern that bothers you most. Dark spots and dullness? Garnier's Vitamin C serum (₹297) is the cheapest one I've seen genuinely fade marks. Breakouts? Stick with the salicylic wash and skip a second active — more is not better.",
      },
      {
        heading: "Step 3: Sunscreen, every single morning",
        body: "This is the step that makes the other two work. Minimalist's SPF 50 PA++++ (₹368) sits invisibly under makeup and doesn't grease up by noon. Two fingers' worth for face and neck, reapplied if you're outdoors past lunch.",
      },
      {
        heading: "The math",
        body: "Face wash ₹270 + vitamin C serum ₹297 + sunscreen ₹368 = ₹935. That's a complete morning and evening routine with ₹65 to spare. Add a moisturiser next month; you don't need everything on day one.",
      },
    ],
  },
  {
    slug: "sunscreen-101-india",
    title: "Sunscreen 101: SPF, PA++++ and how much to actually apply",
    excerpt:
      "What those numbers on the tube really mean, why most of us apply half what we should, and the textures that survive Indian summers.",
    date: "2026-10-10",
    readTime: "4 min read",
    blocks: [
      {
        body: "Sunscreen is the highest-impact product in any routine, and also the most misunderstood. Two minutes of label-reading saves you from buying the wrong tube.",
      },
      {
        heading: "SPF measures UVB, PA measures UVA",
        body: "SPF 50 blocks roughly 98% of UVB — the rays that burn. The PA rating (look for PA++++) covers UVA, the rays that tan, spot and age you. In India you need both numbers high; a high-SPF cream with PA++ will still let pigmentation through.",
      },
      {
        heading: "The two-finger rule",
        body: "Squeeze sunscreen along your index and middle finger — that's the amount for face and neck. Most people apply a quarter of that and get a quarter of the labelled protection.",
      },
      {
        heading: "Texture decides whether you'll reapply",
        body: "The best sunscreen is the one you don't hate wearing. Oily skin tends to love aqua gels like The Derma Co 1% Hyaluronic Sunscreen — no white cast, no grease. Drier skin usually prefers lotion textures like Minimalist's SPF 50 with niacinamide.",
      },
    ],
  },
  {
    slug: "budget-serums-that-actually-work",
    title: "5 budget serums that actually work",
    excerpt:
      "Vitamin C, niacinamide and salicylic acid picks that punch above their price — and one splurge that's worth it.",
    date: "2026-10-02",
    readTime: "6 min read",
    blocks: [
      {
        body: "Serums are where brands overpromise the most, so price tags mean little. These are the ones where the formula justifies the money.",
      },
      {
        heading: "Garnier Vitamin C Serum — ₹297",
        body: "The budget benchmark for dark spots. Lightweight, layers well, and shows visible brightening in about four weeks of nightly use.",
      },
      {
        heading: "Minimalist Salicylic Acid 2% — ₹270 (as a wash)",
        body: "Technically a face wash, but the 2% BHA does the pore-clearing work of many leave-on serums. Ideal if leave-on acids irritate your skin.",
      },
      {
        heading: "O3+ Vitamin C Tonic — ₹599",
        body: "A gentle entry point for sensitive skin that flushes at stronger vitamin C. Use it as a toner step before moisturiser.",
      },
      {
        heading: "10% Vitamin C with Ferulic Acid — ₹1,199",
        body: "Ferulic acid stabilises vitamin C, so the bottle stays potent to the last drop. The pick for stubborn acne marks.",
      },
      {
        heading: "The splurge: Anua Niacinamide 10 + TXA 4 — ₹1,515",
        body: "When budget options plateau on pigmentation, this Korean serum's tranexamic acid is the step up. Buy it on a deal day — it regularly drops below ₹1,600.",
      },
    ],
  },
];
