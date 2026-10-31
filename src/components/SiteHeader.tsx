import { Link } from "@tanstack/react-router";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/guides", label: "Guides" },
] as const;

export const CATEGORY_NAV = [
  { to: "/skincare", label: "Skincare" },
  { to: "/haircare", label: "Hair Care" },
  { to: "/fragrance", label: "Fragrance" },
  { to: "/bath-body", label: "Personal Care" },
] as const;

export function SiteHeader() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode */
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-primary">
          Skin<span className="italic text-accent">And</span>Shade
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring"
              activeProps={{ className: "bg-secondary text-secondary-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
              Fashion <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <ul className="absolute right-0 z-50 mt-2 w-52 rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-lg">
              {[
                { id: "fashion", label: "All Fashion" },
                { id: "fashion-ethnic", label: "Ethnic Wear" },
                { id: "fashion-western", label: "Western Wear" },
                { id: "fashion-everyday", label: "Everyday Fashion" },
                { id: "fashion-formal", label: "Formal Wear" },
                { id: "fashion-winter", label: "Winter Wear" },
                { id: "fashion-accessories", label: "Accessories" },
              ].map((item) => (
                <li key={item.id}>
                  <a href={`/#${item.id}`} onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement | null)?.removeAttribute("open")} className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring">{item.label}</a>
                </li>
              ))}
            </ul>
          </details>
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
              Categories <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <ul className="absolute right-0 z-50 mt-2 w-48 rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-lg">
              {CATEGORY_NAV.map((c) => (
                <li key={c.to}>
                  <Link
                    to={c.to}
                    onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement | null)?.removeAttribute("open")}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring"
                    activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <button
            type="button"
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="ml-1 rounded-full border border-border p-2 text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-ring"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>
      </div>
    </header>
  );
}
