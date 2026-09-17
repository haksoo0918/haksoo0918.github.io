# Development Protocol & Guidelines

This document defines the operational standards and workflow for AI assistants in this repository.

## 1. Core Workflow

1. **Propose Approaches**: For new features or major changes, present 2 to 3 technical options with pros and cons.
2. **Update PRD**: Once a direction is selected, record specifications in `./PRD.md` before modifying source code. (Exemptions: cosmetic styling tweaks and direct bug fixes.)
3. **Implement**: Write code following repository conventions with clear Korean comments.
4. **Present & Verify**: Share completed work and verification results with the user, then wait for feedback.
5. **Commit on Instruction**: Create a Git commit only when the user explicitly asks to commit. Record changes in `CHANGELOG.md`.

## 2. Language Standards

- **Code Comments**: Written in Korean for all constants, major variables, functions, and business logic.
- **Git Commit Messages**: Written in Korean using standard descriptive prefixes:
  - `기능: ...` (features)
  - `수정: ...` (bug fixes)
  - `문서: ...` (documentation)
  - `스타일: ...` (styling / CSS)
  - `리팩토링: ...` (refactoring)
  - `빌드: ...` (build / dependencies)

## 3. Git & Terminal Operation Boundaries

- **Commits**: Execute `git commit` only upon explicit user instruction (e.g., "커밋해", "commit").
- **Rollbacks & Resets**: Execute `git reset`, `git revert`, or branch operations only when the user specifically instructs to do so.
- **Handling Feedback**: When receiving user feedback, questions, or corrections, explain the assessment and proposed fix in text first before running modifying commands.


