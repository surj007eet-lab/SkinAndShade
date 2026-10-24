import { Link, createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "@/data/policies";
import { pageHead } from "@/lib/seo";
export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => pageHead("/contact", "Contact SkinAndShade", "Contact SkinAndShade with product-information corrections, editorial questions or privacy enquiries."),
  component: ContactPage,
});
function ContactPage() {
  return <main id="main-content" className="mx-auto max-w-3xl px-4 pt-10 sm:px-6"><Link to="/" className="text-primary underline">Home</Link><h1 className="mt-8 text-4xl font-semibold text-primary">Contact SkinAndShade</h1><p className="mt-6 leading-relaxed text-muted-foreground">For editorial questions, factual corrections or privacy enquiries, email <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-primary underline">{CONTACT_EMAIL}</a>.</p><p className="mt-6 leading-relaxed text-muted-foreground">Please include the page address and the information you want corrected. Do not send passwords, payment details or medical records. For orders, delivery or returns, contact Amazon or the seller directly. SkinAndShade does not process purchases or provide individual medical advice.</p></main>;
}
