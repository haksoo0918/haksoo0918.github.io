# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Project Thumbnail System**:
  - Added 16:9 sharp rectangular thumbnail area to all project cards adhering to VoiceBox design guidelines (`assets/css/style.css`).
  - Implemented smart fallback placeholder for cards without an image file (`assets/js/main.js`).
  - Added `thumbnail` path fields in `data/projects.json`.
- **User Checklist Document**:
  - Created `TODO.md` documenting deployment URLs, recommended thumbnail specifications, and repository linking tasks.

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
