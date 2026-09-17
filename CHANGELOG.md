# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Lucide Icons Integration**:
  - Integrated official Lucide Icons CDN script (`unpkg.com/lucide`).
  - Added `external-link` (↗) icons to all external outbound links (Tech Blog, live site buttons).
  - Added `github` icons to GitHub repository buttons and navigation links.
  - Implemented offline fallback dataset in `assets/js/main.js` to support direct `file:///` local browser double-click previews without CORS issues.
  - Added VoiceBox compliant icon styling in `assets/css/style.css` (15-18px stroke alignment).
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
