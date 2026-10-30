import { products, type Product } from "./products";

export interface Collection {
  slug: string;
  title: string;
  description: string;
  introduction: string;
  guideSlugs: string[];
  matches: (product: Product) => boolean;
}

export const collections: Collection[] = [
  { slug: "skincare", title: "Skincare", description: "Compare skincare options for Indian shoppers: cleansers, moisturizers, sunscreen and serums, with practical buying guides.", introduction: "Start with a cleanser, moisturizer and sun protection that suit your skin. Extra ingredients are optional, not a substitute for the basics. These are catalogue options to compare, not treatments or personally tested recommendations.", guideSlugs: ["simple-skincare-routine-under-1000"], matches: p => p.category === "Skincare" },
  { slug: "sunscreen", title: "Sunscreen", description: "Compare two SPF 50 sunscreen listings and learn how to read SPF, UVA protection and water-resistance labels.", introduction: "A comfortable texture matters, but appearance alone cannot tell you how well a sunscreen protects. Verify broad-spectrum protection, SPF 30 or higher and water resistance on the current pack; reapply as directed. Neither option here has been independently tested by SkinAndShade.", guideSlugs: ["sunscreen-101-india"], matches: p => /sunscreen/i.test(p.title) },
  { slug: "serums", title: "Face serums", description: "Compare face serum listings, understand their limitations and decide whether an extra skincare step is worth your budget.", introduction: "Serums are optional. Compare the exact ingredient list, concentration where stated, pack size and seller rather than assuming a higher price or more actives means better results. A wash and a toner are not leave-on serums.", guideSlugs: ["budget-serums-that-actually-work"], matches: p => /serum|ampoule/i.test(p.title) },
  { slug: "moisturizers", title: "Moisturizers", description: "Browse face moisturizers for dry-skin routines and learn what to check before choosing a cream.", introduction: "For dry skin, consider a cream rather than choosing solely by a trending ingredient. Check fragrance and your own tolerances on the current label. No product can be guaranteed suitable for sensitive skin; stop use if it irritates.", guideSlugs: ["simple-skincare-routine-under-1000"], matches: p => p.category === "Skincare" && /moisturizer|creme|cream/i.test(p.title) },
  { slug: "haircare", title: "Hair care", description: "Compare shampoo, conditioner and hair-care set listings, with notes on pack formats and what to verify on Amazon.", introduction: "Choose by whether you need a cleanser, a conditioner for lengths or a multi-product set. Hair fall and persistent scalp symptoms are not interchangeable with dry hair or dandruff; seek professional advice rather than relying on a cosmetic product promise.", guideSlugs: [], matches: p => p.category === "Hair Care" },
  { slug: "fragrance", title: "Fragrance", description: "Compare perfume mist and eau de toilette formats from the SkinAndShade fragrance catalogue.", introduction: "Compare fragrance format, pack size and the exact variant. Longevity and scent preference are personal; these products have not been tested by SkinAndShade. Check the seller and returns terms before ordering.", guideSlugs: [], matches: p => p.category === "Fragrance" },
  { slug: "bath-body", title: "Bath & body", description: "Explore the body-lotion option in SkinAndShade's catalogue and check pack size, ingredients and seller before buying.", introduction: "This is a small selection, currently one body-lotion listing rather than a best-of comparison. Face and body products may have different formulations; check the label and avoid ingredients you know irritate your skin.", guideSlugs: [], matches: p => p.category === "Bath & Body" },

  { slug: "makeup", title: "Makeup", description: "Compare makeup-base products, including illuminating creams and complexion-prep options, with practical notes on shades and formats.", introduction: "Makeup finishes and shades are personal. Check the exact shade, finish, ingredients and seller on the current listing; product descriptions are catalogue summaries, not wear tests by SkinAndShade.", guideSlugs: [], matches: p => p.category === "Makeup" },
];

export const collectionProducts = (collection: Collection) => products.filter(collection.matches);