import { Link } from "@tanstack/react-router";

export function AffiliateNotice() {
  return (
    <p className="text-sm leading-relaxed text-muted-foreground">
      As an Amazon Associate I earn from qualifying purchases. Purchases through these links may
      earn a commission at no extra cost to you. Amazon handles orders; check its current price,
      seller and product label before buying. <Link to="/about" hash="affiliate-disclosure" className="text-primary underline">Affiliate disclosure</Link>.
    </p>
  );
}