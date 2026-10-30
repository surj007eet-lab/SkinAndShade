import { Link } from "@tanstack/react-router";
import { CATEGORY_NAV } from "./SiteHeader";

const linkCls = "text-sm text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-ring";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 text-center sm:grid-cols-3 sm:text-left">
          <nav aria-label="Explore">
            <h2 className="font-display text-lg text-primary">Explore</h2>
            <ul className="mt-3 space-y-2">
              <li><Link to="/" className={linkCls}>Home</Link></li>
              <li><Link to="/about" className={linkCls}>About</Link></li>
              <li><Link to="/guides" className={linkCls}>Guides</Link></li>
            </ul>
          </nav>
          <nav aria-label="Categories">
            <h2 className="font-display text-lg text-primary">Categories</h2>
            <ul className="mt-3 space-y-2">
              {CATEGORY_NAV.map((c) => (
                <li key={c.to}><Link to={c.to} className={linkCls}>{c.label}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Editorial and legal">
            <h2 className="font-display text-lg text-primary">Editorial &amp; legal</h2>
            <ul className="mt-3 space-y-2">
              <li><Link to="/editorial-policy" className={linkCls}>Editorial policy</Link></li>
              <li><Link to="/contact" className={linkCls}>Contact</Link></li>
              <li><Link to="/affiliate-disclosure" className={linkCls}>Affiliate disclosure</Link></li>
              <li><Link to="/privacy" className={linkCls}>Privacy policy</Link></li>
              <li><Link to="/terms" className={linkCls}>Terms of use</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-10 text-center">
          <p className="font-display text-xl text-primary">
            Skin<span className="italic text-accent">And</span>Shade
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            As an Amazon Associate I earn from qualifying purchases. Prices and
            availability on Amazon may change after this page was updated.
          </p>
        </div>
      </div>
    </footer>
  );
}
