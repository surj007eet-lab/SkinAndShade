<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Product catalogue lives in `src/data/products.ts` (typed array, not JSON) because each entry carries curated copy (description, whyPicked, bestFor) alongside scraped fields; guides live in `src/data/guides.ts` as structured blocks.
- List + detail pairs use sibling routes (`guides.index.tsx` + `guides.$slug.tsx`), never a parent route with page content — a parent without `<Outlet />` hides the child.
- Header, footer and the dark-mode toggle live in `src/routes/__root.tsx` via `SiteHeader`/`SiteFooter` so every page shares them.
