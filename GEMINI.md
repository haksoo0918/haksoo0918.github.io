# Project Operating Protocol & Agent Guidelines

This document outlines the mandatory operational workflow and development standards for AI coding assistants working in this repository.

---

## 1. Propose Implementation Approaches
- Before proceeding with feature implementation or major changes based on user requirements, present **2 to 3 distinct development approaches or architectural directions**.
- Outline the pros, cons, and trade-offs of each option to assist the user in making an informed decision.

## 2. PRD Update & Baseline Alignment
- Once the user selects their preferred direction, document and organize the specifications, data structures, and expected behaviors in `./PRD.md` before beginning implementation.
- **Exceptions**: Pure design/styling adjustments, cosmetic tweaks, or direct bug fixes are exempt from requiring a PRD update.

## 3. Development Guidelines

### 3.1 Korean Code Comments (한글 주석)
- Add clear, descriptive comments in Korean for all constants, major variables, functions, and core business logic.
- Ensure the comments explain the rationale and behavior concisely.

### 3.2 Active Use of Context7 MCP
- Actively utilize the `context7` MCP server tools (e.g., resolving library IDs, querying official documentation) whenever working with external libraries, APIs, frameworks, or configuration systems.
- Validate API versions, deprecations, and official patterns against authoritative sources rather than assuming or guessing behavior.

## 4. User Verification
- Upon completing implementation and local verification, present the changes and deliverables clearly to the user.
- Await the user's explicit review and confirmation before proceeding further.

## 5. Git Commit & Changelog
- Once the user confirms and approves the completed work:
  - Create a clean, descriptive Git commit following standard conventional commit guidelines.
  - Update or record the change history in the changelog (`CHANGELOG.md`).
