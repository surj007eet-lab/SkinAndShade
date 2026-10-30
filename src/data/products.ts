export const AFFILIATE_TAG = "zencart0c-21";

export const CATEGORIES = [
  "Skincare",
  "Hair Care",
  "Fragrance",
  "Personal Care",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CONCERNS = [
  "Acne",
  "Dry Skin",
  "Oily Skin",
  "Dry Hair",
  "Frizz",
  "Dandruff",
  "Lip Care",
  "Sun Care",
] as const;

export type Concern = (typeof CONCERNS)[number];

export const BUDGETS = ["Any", "Under 299", "Under 599", "Under 999"] as const;
export type Budget = (typeof BUDGETS)[number];

export const budgetLimit = (b: Budget): number | null =>
  b === "Under 299" ? 299 : b === "Under 599" ? 599 : b === "Under 999" ? 999 : null;

export interface Product {
  asin: string;
  brand: string;
  title: string;
  category: Category;
  concerns: Concern[];
  /** Historical captured value; not a current merchant price. Used only for labelled budget filtering. */
  price: number;
  mrp: number | null;
  description: string;
  whyPicked: string;
  bestFor: string;
  image?: string;
  affiliateUrl?: string;
  trending?: boolean;
}

export const amazonUrl = (asin: string) =>
  `https://www.amazon.in/dp/${asin}?tag=${AFFILIATE_TAG}`;

const img = (id: string) => `https://m.media-amazon.com/images/I/${id}._AC_UL640_.jpg`;

export const products: Product[] = [
  {
    asin: "B0B6Y3FNV7",
    brand: "L'Oreal Paris",
    title: "Hyaluron Moisture 72H Conditioner, 175ml",
    category: "Hair Care",
    concerns: ["Dry Hair"],
    price: 207,
    mrp: null,
    description:
      "Conditioner in a 175ml format; check the current label for ingredients and directions.",
    whyPicked: "Included as a single conditioner option rather than a full hair-care set.",
    bestFor: "Comparing conditioners for hair lengths",
    image: img("31i9VQAxpvL"),
    trending: false,
  },
  {
    asin: "B07VKM2HR5",
    brand: "NIVEA",
    title: "Nourishing Body Milk 600ml with Hyaluronic Acid",
    category: "Personal Care",
    concerns: ["Dry Skin"],
    price: 400,
    mrp: null,
    description:
      "Body lotion listed in a 600ml bottle; confirm the variant and ingredients on Amazon.",
    whyPicked: "Included for shoppers comparing larger body-lotion pack formats.",
    bestFor: "Comparing body lotions",
    image: img("31g-kdcdSeL"),
    trending: true,
  },
  {
    asin: "B0BDVG99J5",
    brand: "Dot & Key",
    title: "Barrier Repair Moisturizer for Normal to Dry Skin",
    category: "Skincare",
    concerns: ["Dry Skin"],
    price: 335,
    mrp: null,
    description:
      "Face moisturizer listed for normal to dry skin; confirm the current formula and pack size.",
    whyPicked: "Included as a cream option alongside cleansers and sunscreen.",
    bestFor: "Comparing face moisturizers",
    image: img("317vjj87F1L"),
  },
  {
    asin: "B0BVWDJTHF",
    brand: "The Derma Co",
    title: "1% Hyaluronic Sunscreen Aqua Gel SPF 50 PA++++",
    category: "Skincare",
    concerns: ["Sun Care", "Oily Skin"],
    price: 498,
    mrp: null,
    description:
      "Gel sunscreen listed as SPF 50 PA++++; verify protection claims and directions on the current pack.",
    whyPicked: "Included to compare a gel format with the other sunscreen listing.",
    bestFor: "Comparing gel sunscreen formats",
    image: img("31nvDjG7KVL"),
    trending: true,
  },
  {
    asin: "B07XS46Q73",
    brand: "Himalaya",
    title: "Purifying Neem Face Wash with Neem & Turmeric",
    category: "Skincare",
    concerns: ["Oily Skin"],
    price: 280,
    mrp: null,
    description:
      "Face wash listed with neem and turmeric; check fragrance and ingredients for your tolerances.",
    whyPicked: "Included as an alternative cleanser format, not an acne treatment.",
    bestFor: "Comparing face washes",
    image: img("31mvOiuL2CL"),
  },
  {
    asin: "B096PJMGPL",
    brand: "Minimalist",
    title: "Anti-Acne Salicylic Acid 2% Face Wash",
    category: "Skincare",
    concerns: ["Acne", "Oily Skin"],
    price: 270,
    mrp: null,
    description:
      "Face wash labelled with 2% salicylic acid; follow the current label and stop if irritation occurs.",
    whyPicked: "Included to compare an active-ingredient wash with a regular cleanser.",
    bestFor: "Comparing salicylic acid cleansers",
    image: img("31fIPTLyP0L"),
  },
  {
    asin: "B09FPS9D5T",
    brand: "Minimalist",
    title: "Sunscreen SPF 50 PA++++ with Niacinamide",
    category: "Skincare",
    concerns: ["Sun Care"],
    price: 368,
    mrp: null,
    description:
      "Sunscreen listed as SPF 50 PA++++ with niacinamide; verify the exact formulation and directions.",
    whyPicked: "Included for label comparison with the gel sunscreen option.",
    bestFor: "Comparing daily sunscreen options",
    image: img("3158BCnRsLL"),
    trending: true,
  },
  {
    asin: "B08FTQXWC7",
    brand: "Garnier",
    title: "Vitamin C Face Serum for Brightening, 30ml",
    category: "Skincare",
    concerns: [],
    price: 297,
    mrp: null,
    description:
      "Vitamin C face serum in a listed 30ml format; the exact vitamin C form and formula need checking.",
    whyPicked: "Included as a serum option, without a promise of brightening or a result timeline.",
    bestFor: "Comparing vitamin C serum listings",
    image: img("31tQ+MfWR9L"),
    trending: true,
  },
  {
    asin: "B0DL92QM79",
    brand: "Anua",
    title: "Niacinamide 10 + TXA 4 Serum, 30ml",
    category: "Skincare",
    concerns: [],
    price: 1515,
    mrp: 2000,
    description:
      "Serum labelled Niacinamide 10 + TXA 4 in a 30ml format; confirm concentrations and instructions.",
    whyPicked: "Included for comparison with a vitamin C serum, not as a proven upgrade.",
    bestFor: "Comparing multi-ingredient serums",
    image: img("61odQWUlZiL"),
    trending: true,
  },
  {
    asin: "B07DY2QRF6",
    brand: "Laneige",
    title: "Lip Glowy Balm, Berry, 10g",
    category: "Skincare",
    concerns: ["Lip Care"],
    price: 675,
    mrp: 750,
    description:
      "Berry lip balm in a listed 10g format; confirm the current ingredients and variant.",
    whyPicked: "Included as a lip-care format distinct from face moisturizers.",
    bestFor: "Comparing lip balms",
    image: img("612UcJQa1VL"),
    trending: true,
  },
  {
    asin: "B0HBQJR3V2",
    brand: "Balanced Barrier",
    title: "Barrier Creme with 5 Complex Ceramides",
    category: "Skincare",
    concerns: ["Dry Skin"],
    price: 1439,
    mrp: 1799,
    description:
      "Cream labelled with ceramides; verify the full ingredient list and pack size before ordering.",
    whyPicked: "Included as another cream option; no dermatologist endorsement is claimed.",
    bestFor: "Comparing ceramide cream listings",
    image: img("513lF6Fa72L"),
  },
  {
    asin: "B0HBQR4H5L",
    brand: "Hydration Creme",
    title: "Hydration Creme with Collagen, Peptides & Panthenol",
    category: "Skincare",
    concerns: ["Dry Skin"],
    price: 1439,
    mrp: 1799,
    description:
      "Cream labelled with collagen, peptides and panthenol; check fragrance and the full current label.",
    whyPicked: "Included as an alternative moisturizer format; sensitivity claims are not verified.",
    bestFor: "Comparing moisturizer formulations",
    image: img("41FAqdDdpcL"),
  },
  {
    asin: "B08F7RFSGX",
    brand: "Wella Professionals",
    title: "Elements Sulfate-Free Shampoo, Conditioner & Mask Set",
    category: "Hair Care",
    concerns: [],
    price: 1645,
    mrp: 2350,
    description:
      "Listing for a shampoo, conditioner and mask set; confirm included items and sizes.",
    whyPicked: "Included so shoppers can compare a set with individual hair-care products.",
    bestFor: "Comparing hair-care sets",
    image: img("41o3CPt4LZL"),
  },
  {
    asin: "B0GYTKR8LL",
    brand: "Brillare",
    title: "Tea Tree Anti Dandruff Shampoo, 200ml",
    category: "Hair Care",
    concerns: ["Dandruff"],
    price: 595,
    mrp: null,
    description:
      "Tea tree shampoo labelled Anti Dandruff in a 200ml format; check active ingredients and directions.",
    whyPicked: "Included as a shampoo listing, without promising dandruff or hair-fall treatment.",
    bestFor: "Comparing scalp shampoo labels",
    image: img("41du0O7Y2wL"),
  },
  {
    asin: "B0GZ8CNGQW",
    brand: "Sungboon Editor",
    title: "Glow Intensive Silk Peptide EGF Ampoule, 40ml",
    category: "Skincare",
    concerns: [],
    price: 1828,
    mrp: 2150,
    description:
      "Ampoule labelled Silk Peptide EGF in a 40ml format; confirm ingredients and usage on the pack.",
    whyPicked: "Included as an ampoule format; no clinical or firming outcome is implied.",
    bestFor: "Comparing ampoule listings",
    image: img("517-G+SEIYL"),
  },
  {
    asin: "B0GK939CR7",
    brand: "Calvin Klein",
    title: "Nude Vanilla Hair & Body Perfume Mist, 100ml",
    category: "Fragrance",
    concerns: [],
    price: 2340,
    mrp: 2600,
    description:
      "Hair and body perfume mist in a listed 100ml format; confirm the exact variant and seller.",
    whyPicked: "Included to compare a mist format with eau de toilette.",
    bestFor: "Comparing perfume mists",
    image: img("71j01Ni4T7L"),
  },
  {
    asin: "B0D1GGBM75",
    brand: "O3+",
    title: "Vitamin C Tonic Solution Toner, 200ml",
    category: "Skincare",
    concerns: [],
    price: 599,
    mrp: null,
    description:
      "Vitamin C tonic listed in a 200ml format; it is a toner, not a serum.",
    whyPicked: "Included to distinguish toner formats from leave-on serums.",
    bestFor: "Comparing toners",
    image: img("51yxC3kfn4L"),
  },
  {
    asin: "B07R2BR225",
    brand: "Avène",
    title: "Revitalising Nourishing Cream, 50ml",
    category: "Skincare",
    concerns: ["Dry Skin"],
    price: 2380,
    mrp: 2800,
    description:
      "Nourishing face cream in a listed 50ml format; verify fragrance and ingredients for your tolerances.",
    whyPicked: "Included as another cream option; suitability for sensitive skin is not guaranteed.",
    bestFor: "Comparing richer face creams",
    image: img("41C79hIHziL"),
  },
  {
    asin: "B0038K1BDE",
    brand: "John Varvatos",
    title: "Artisan Eau de Toilette, 75ml",
    category: "Fragrance",
    concerns: [],
    price: 3770,
    mrp: 5800,
    description:
      "Artisan eau de toilette in a listed 75ml format; confirm seller, variant and returns terms.",
    whyPicked: "Included to compare eau de toilette with the perfume mist; no discount is implied.",
    bestFor: "Comparing eau de toilette formats",
    image: img("6165GCihYbL"),
  },

  {
    asin: "B0G7HBDWRP",
    brand: "Kérastase",
    title: "Gloss Absolu Crème Anti-Frizz Mask, 200ml",
    category: "Hair Care",
    concerns: ["Frizz", "Dry Hair"],
    price: 3950,
    mrp: null,
    description: "Hair mask listed in a 200ml format. Check the current Amazon listing for the exact variant, ingredients, seller and directions.",
    whyPicked: "Included as another hair-care format to compare with shampoos, conditioners and sets.",
    bestFor: "Comparing hair masks for dry, frizz-prone lengths",
    affiliateUrl: "https://link.amazon/B097v9iHF",
  },
  {
    asin: "B0BR585QS2",
    brand: "FACES CANADA",
    title: "Strobe Cream - Rose Gold, 30ml",
    category: "Skincare",
    concerns: [],
    price: 489,
    mrp: null,
    description: "Face cream listed in a 30ml Rose Gold shade. Check the current Amazon listing for the intended use, ingredients and seller details.",
    whyPicked: "Included as a face product listing; check the shade and intended use on the current listing.",
    bestFor: "Comparing illuminating face-prep products",
    affiliateUrl: "https://link.amazon/B09YvMLom",
  },

];
