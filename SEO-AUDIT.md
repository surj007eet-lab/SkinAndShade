# SkinAndShade prioritized audit — 23 October 2026

## Before changes

Live homepage returned 200. The fresh foundations review passed all nine available checks: reachable homepage, SSR, crawler rules, sitemap, language/viewport, favicon, search metadata, social metadata and platform markdown rendering. These checks do not establish Google indexing or rankings.

### Critical
- Static captured prices and calculated discounts look current; no reliable feed or price-check history exists.
- Product copy promises results, zero white cast and dermatologist recommendations without substantiation.
- Routine guide calls cleanser + serum + sunscreen a complete routine for most people and postpones moisturizer; serum guide mislabels a wash/toner as serums and promises results.

### High
- No category URLs: discovery requires interactive filtering, despite SSR catalogue visibility.
- Guides have no contextual product links, sources or selection limitations.
- No editorial policy, affiliate disclosure, privacy, terms or contact page; personal testing/independence language is unverified.
- Product image licensing/permitted Amazon data access needs confirmation; existing images were originally scraped, not retrieved from a documented permitted feed.

### Medium
- Missing Organization/WebSite and breadcrumb schema; article publication dates lack documented provenance.
- Unsupported popularity labels: “Trending” / “Most loved this week.”
- Gold small text may have insufficient contrast on blush; controls and motion need checks.
- No GA4 measurement ID or verified conversion measurement; no confirmed Search Console access.

### Low
- One production origin is repeated throughout source; centralize for future domain configuration.
- No need to rename existing guide URLs or create thin keyword pages.

## Baseline observations

One Chromium desktop sample, 1280 × 1800: live TTFB 689 ms, DOMContentLoaded 1,145 ms, HTML transfer 12,953 bytes. Preview TTFB 31 ms, DOMContentLoaded 114 ms. 26 image elements; none broken at observation time (lazy images may not yet be requested). This is a lab sample, not field Core Web Vitals or a repeatable production benchmark.

Keyword research, policy review and full code/live audit are being checked separately. No traffic forecast, personal testing, verified indexing or ranking claim is made.