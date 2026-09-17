# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **SEO & Social Share Optimization**:
  - Generated and applied high-contrast VoiceBox SVG favicon (`assets/images/favicon.svg`) and standard 32x32 PNG favicon (`assets/images/favicon.png`) with `<link rel="icon">` tags.
  - Generated and integrated 1200x630 Open Graph & Twitter Card preview image (`assets/images/og-image.png`) with `og:image` and `twitter:image` tags.
  - Pre-rendered static project cards directly in `index.html` inside `#projects-grid` for complete indexation by non-JS search engine crawlers (Naver Yeti, Bingbot, social scrapers).
  - Added `<link rel="preconnect">` resource hints for `cdn.jsdelivr.net` and `unpkg.com` to boost Core Web Vitals (FCP/LCP).
  - Added `defer` attribute to Lucide script to prevent render-blocking parser halts in `<head>`.
  - Enriched structured data (JSON-LD) with `image` and `author` relationships.
  - Added Webmaster tools registration and asset replacement checklist to `TODO.md`.
- **SEO Audit Skill Integration**:
  - Installed `seo-audit` skill (`.agents/skills/seo-audit/SKILL.md`) to systematically diagnose technical SEO, crawlability, on-page factors, and structured data.
- **Header & Footer Hierarchy Normalization**:
  - Separated combined `<div class="container masthead-inner">` and `<div class="container footer-inner">` into proper parent-child nesting (`.container > .masthead-inner`), eliminating CSS property overrides and vertical alignment discrepancies.
  - Aligned all spacing and paddings strictly to `DESIGN.md` 8px scale tokens (`var(--spacing-md)` 16px vertical padding on masthead, `var(--spacing-xl)` 32px horizontal padding on container).
- **Mobile Footer Compacting**:
  - Reduced excessive mobile footer padding from 48px to 24px (`var(--spacing-lg)`).
  - Compacted mobile grid bottom padding from 96px to 48px (`var(--spacing-2xl)`).
- **Responsive 3-Tier Grid Hierarchy**:
  - Restored 3-column desktop layout (`repeat(3, 1fr)`) for screens >= 1024px.
  - Preserved 2-column layout (`repeat(2, 1fr)`) for tablet screens (641px - 1023px, including 768px).
  - Maintained single-column full-width stack for mobile screens (<= 640px).

### Changed
- **Card Hierarchy & Layout Simplification**:
  - Removed top red border (`border-top: 4px solid #EF4444`) and `featured` attribute to present all projects with uniform editorial weight.
  - Updated branding from "HAKSOO" to "HS" across header logo, rubrics, JSON-LD, and footer.
  - Simplified filter buttons: `[전체 (ALL)]`, `[sosoFactory]`, `[개인 프로젝트]`.
  - Added `word-break: keep-all;` and `overflow-wrap: break-word;` on `body` to prevent awkward Korean word wrapping.
  - Standardized all outbound navigation and repository links to use Lucide `external-link` (↗) icons with pixel-perfect vertical alignment.

### Removed
- Removed framework credit text ("Built with...") from footer for a cleaner, minimal aesthetic.
- **VoiceBox Editorial Design System**:
  - Implemented high-contrast magazine-style layout (`assets/css/style.css`).
  - Strict 0px border radius, no shadows, 2px bold borders, and `#EF4444` red accent.
  - Set Pretendard as the unified primary typeface for both Korean and English.
- **Projects Showcase Hub**:
  - Replaced legacy blog redirect with dynamic single-page project portal (`index.html`).
  - Separated project dataset into `data/projects.json` for easy maintenance.
  - Included initial projects: sosoFactory (Calculator, Start Page), Personal & Labs (Bitcoin Quant, Tech Blog).
  - Dynamic category filter tabs (ALL / sosoFactory / Personal & Labs) with full Korean comments (`assets/js/main.js`).
- **Search Engine Optimization (SEO)**:
  - Added semantic HTML5 structure and Open Graph / Twitter Cards metadata.
  - Configured JSON-LD structured data (`WebSite`, `Person`).
  - Generated `robots.txt` and `sitemap.xml`.
- **Project Guidelines**:
  - Added operational protocols (`GEMINI.md`) and product specifications (`PRD.md`).
