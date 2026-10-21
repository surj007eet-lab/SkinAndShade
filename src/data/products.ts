export const AFFILIATE_TAG = "zencart0c-21";

export const CATEGORIES = [
  "Skincare",
  "Makeup",
  "Hair Care",
  "Fragrance",
  "Bath & Body",
  "Men's Grooming",
  "Tools & Brushes",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CONCERNS = [
  "Acne",
  "Dry Skin",
  "Oily Skin",
  "Hair Fall",
  "Sun Care",
  "Anti-ageing",
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
  price: number;
  mrp: number | null;
  description: string;
  whyPicked: string;
  bestFor: string;
  image: string;
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
    concerns: ["Dry Skin"],
    price: 207,
    mrp: null,
    description:
      "A hyaluronic acid conditioner that coats dry lengths with lightweight moisture and keeps hair soft for up to 72 hours.",
    whyPicked: "Salon-style slip and shine at a two-hundred-rupee price point.",
    bestFor: "Dry, frizzy lengths",
    image: img("31i9VQAxpvL"),
    trending: false,
  },
  {
    asin: "B07VKM2HR5",
    brand: "NIVEA",
    title: "Nourishing Body Milk 600ml with Hyaluronic Acid",
    category: "Bath & Body",
    concerns: ["Dry Skin"],
    price: 400,
    mrp: null,
    description:
      "A big bottle of classic Nivea body lotion with hyaluronic acid for 72-hour moisture on dry arms, legs and elbows.",
    whyPicked: "The 600ml size lasts a whole season and costs less per ml than most body lotions.",
    bestFor: "Dry body skin in winter",
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
      "A ceramide-rich cream that rebuilds a damaged skin barrier and calms tight, flaky patches without feeling heavy.",
    whyPicked: "Ceramides at this price usually come in tiny tubes — this one is generous.",
    bestFor: "Compromised, flaky skin barrier",
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
      "A water-light aqua gel sunscreen with SPF 50 PA++++ that disappears into skin with zero white cast.",
    whyPicked: "One of the few truly invisible sunscreens that oily skin will actually reapply.",
    bestFor: "Oily skin, no white cast",
    image: img("31nvDjG7KVL"),
    trending: true,
  },
  {
    asin: "B07XS46Q73",
    brand: "Himalaya",
    title: "Purifying Neem Face Wash with Neem & Turmeric",
    category: "Skincare",
    concerns: ["Acne", "Oily Skin"],
    price: 280,
    mrp: null,
    description:
      "A soap-free gel face wash with neem and turmeric that cuts through oil and helps keep breakouts in check.",
    whyPicked: "A budget classic that has survived every skincare trend for a reason.",
    bestFor: "Oily, pimple-prone skin",
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
      "A 2% salicylic acid cleanser that unclogs pores and reduces blackheads without stripping the skin.",
    whyPicked: "Real BHA at drugstore pricing — a genuine acne routine starter.",
    bestFor: "Blackheads and clogged pores",
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
      "A broad-spectrum SPF 50 sunscreen with niacinamide and multivitamins that sits well under makeup.",
    whyPicked: "High protection plus brightening niacinamide in one tube under 400.",
    bestFor: "Daily wear under makeup",
    image: img("3158BCnRsLL"),
    trending: true,
  },
  {
    asin: "B08FTQXWC7",
    brand: "Garnier",
    title: "Vitamin C Face Serum for Brightening, 30ml",
    category: "Skincare",
    concerns: ["Anti-ageing", "Acne"],
    price: 297,
    mrp: null,
    description:
      "A lightweight vitamin C serum that targets dark spots and dullness for visibly brighter skin in weeks.",
    whyPicked: "The cheapest vitamin C serum that actually shows results on dark spots.",
    bestFor: "Dark spots and dullness",
    image: img("31tQ+MfWR9L"),
    trending: true,
  },
  {
    asin: "B0DL92QM79",
    brand: "Anua",
    title: "Niacinamide 10 + TXA 4 Serum, 30ml",
    category: "Skincare",
    concerns: ["Acne", "Anti-ageing"],
    price: 1515,
    mrp: 2000,
    description:
      "A Korean glass-skin serum combining 10% niacinamide and 4% tranexamic acid to fade dark spots and even tone.",
    whyPicked: "The K-beauty serum everyone talks about — worth it when it dips below 1600.",
    bestFor: "Stubborn pigmentation",
    image: img("61odQWUlZiL"),
    trending: true,
  },
  {
    asin: "B07DY2QRF6",
    brand: "Laneige",
    title: "Lip Glowy Balm, Berry, 10g",
    category: "Skincare",
    concerns: ["Dry Skin"],
    price: 675,
    mrp: 750,
    description:
      "A glossy lip treatment with vitamin C and shea butter that softens dry, chapped lips with a sheer berry tint.",
    whyPicked: "The lip sleeping mask's daytime sibling — one tube lasts months.",
    bestFor: "Dry, chapped lips",
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
      "A dermat-recommended ceramide cream with collagen and peptides that moisturises within 30 minutes and repairs the barrier.",
    whyPicked: "Five ceramides plus peptides — a formula you usually see at twice the price.",
    bestFor: "Sensitive, reactive skin",
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
      "A fragrance-free gel creme with collagen, peptides and panthenol for long-lasting, non-sticky hydration.",
    whyPicked: "A rare fragrance-free option for combination skin that hates heavy creams.",
    bestFor: "Combination skin",
    image: img("41FAqdDdpcL"),
  },
  {
    asin: "B08F7RFSGX",
    brand: "Wella Professionals",
    title: "Elements Sulfate-Free Shampoo, Conditioner & Mask Set",
    category: "Hair Care",
    concerns: ["Hair Fall"],
    price: 1645,
    mrp: 2350,
    description:
      "A three-step sulfate-free and paraben-free set — shampoo, conditioner and mask — for chemically treated hair.",
    whyPicked: "A full salon repair routine for less than one salon visit.",
    bestFor: "Coloured or straightened hair",
    image: img("41o3CPt4LZL"),
  },
  {
    asin: "B0GYTKR8LL",
    brand: "Brillare",
    title: "Tea Tree Anti Dandruff Shampoo, 200ml",
    category: "Hair Care",
    concerns: ["Hair Fall", "Oily Skin"],
    price: 595,
    mrp: null,
    description:
      "A tea tree shampoo that tackles dandruff and itchy scalp while staying gentle on the lengths.",
    whyPicked: "Natural actives that actually calm a flaky scalp within a few washes.",
    bestFor: "Flaky, itchy scalp",
    image: img("41du0O7Y2wL"),
  },
  {
    asin: "B0GZ8CNGQW",
    brand: "Sungboon Editor",
    title: "Glow Intensive Silk Peptide EGF Ampoule, 40ml",
    category: "Skincare",
    concerns: ["Anti-ageing"],
    price: 1828,
    mrp: 2150,
    description:
      "A Korean firming ampoule with copper peptides, EGF, collagen and 24K gold for plumper, smoother skin.",
    whyPicked: "An ingredient list that reads like a clinic treatment, at serum prices.",
    bestFor: "Fine lines and loss of firmness",
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
      "A warm vanilla mist for hair and body — soft, skin-close and easy to layer with other scents.",
    whyPicked: "A designer vanilla that works for daily wear, not just evenings.",
    bestFor: "Everyday soft vanilla scent",
    image: img("71j01Ni4T7L"),
  },
  {
    asin: "B0D1GGBM75",
    brand: "O3+",
    title: "Vitamin C Tonic Solution Toner, 200ml",
    category: "Skincare",
    concerns: ["Anti-ageing"],
    price: 599,
    mrp: null,
    description:
      "A vitamin C toner that preps skin after cleansing and adds a brightening step to any routine.",
    whyPicked: "An easy glow-boosting step for people who won't commit to a full routine.",
    bestFor: "Dull, tired-looking skin",
    image: img("51yxC3kfn4L"),
  },
  {
    asin: "B0HDP19ZNZ",
    brand: "Generic",
    title: "10% Vitamin C Serum with Ferulic Acid & Collagen",
    category: "Skincare",
    concerns: ["Anti-ageing", "Acne"],
    price: 1199,
    mrp: 1499,
    description:
      "A 10% vitamin C serum stabilised with ferulic acid that brightens, evens tone and fades acne marks.",
    whyPicked: "The ferulic-acid combo keeps the vitamin C effective for longer in the bottle.",
    bestFor: "Acne marks and uneven tone",
    image: img("71U0l6TkTQL"),
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
      "A rich antioxidant day-and-night cream with berry extracts for very dry and sensitive skin.",
    whyPicked: "French pharmacy comfort for skin that reacts to everything else.",
    bestFor: "Very dry, sensitive skin",
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
      "A citrus-woody EDT in the iconic hand-woven bottle — fresh, clean and quietly distinctive.",
    whyPicked: "At 35% off, this is the cheapest entry into niche-smelling designer fragrance.",
    bestFor: "A signature office scent",
    image: img("6165GCihYbL"),
  },
];
