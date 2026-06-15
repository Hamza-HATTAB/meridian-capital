# Meridian Capital Advisory — Product Specification Document

## 1. Product Overview
**Project Name:** Meridian Capital Advisory
**Type:** Institutional Real Estate Advisory Platform
**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Recharts, Zod, React Hook Form.
**Target Audience:** Sophisticated GCC institutional investors, sovereign wealth funds, and ultra-high-net-worth individuals.
**Primary Goal:** Establish institutional trust through a high-performance, strictly accessible, and deeply informational digital presence.

---

## 2. Testing Objectives & Strictness
This product has reached 100% completion in internal milestones. **TestSprite must act as a ruthless, independent verification layer.** Assume nothing works until proven. 

TestSprite must perform **ALL advanced tests** to achieve 100% test coverage across the following domains:
1. **Desktop & Mobile UI Validation:** Pixel-perfect rendering from 320px (mobile) to 1440px (desktop).
2. **Navigation Validation:** Mobile menu toggles, sticky headers, active states, and cross-page routing.
3. **Accessibility (a11y):** Strict adherence to WCAG 2.1 AA standards, > 4.5:1 color contrast, keyboard navigability, and ARIA labels.
4. **Form & Security Validation:** Zod schema enforcement, error states, and protection against basic injection/XSS on the contact form.
5. **SEO & Structured Data Validation:** Verification of standard meta tags, OpenGraph, Twitter Cards, and schema.org JSON-LD (Organization, Service, Article).
6. **Error-State Validation:** 404 pages, missing data fallbacks, and boundary catches.
7. **Console Error Validation:** Absolute zero tolerance for React hydration errors, 404 assets, or warning logs.
8. **Broken-Link Validation:** Internal and external anchor link integrity.

---

## 3. Core Features & User Flows to Test

### 3.1. Navigation & Routing (All Devices)
- **Desktop Header:** Links route correctly to all 8 core pages (`/`, `/about`, `/advisory-services`, `/investment-intelligence`, `/track-record`, `/transactions`, `/insights`, `/contact`).
- **Mobile Menu:** Hamburger icon toggles menu. Scroll is locked when open. Links route correctly and close the menu upon selection.
- **Footer:** Links behave correctly.

### 3.2. Forms & User Input (`/contact` & `/advisory-services`)
- **Validation:** Attempt submission with empty fields. Expect localized Zod validation error messages on UI.
- **Formats:** Attempt invalid email formats. Expect rejection.
- **Success State:** Upon valid submission, expect success confirmation without page reload.

### 3.3. Interactive Components & Data Vis
- **Transactions Table (`/transactions`):** Test client-side filtering by "Asset Class" and "Geography". Table rows must accurately reflect active filters.
- **Charts (`/track-record`):** Ensure Recharts SVG components render without throwing hydration errors.
- **Animations:** Framer Motion `whileInView` components must become visible upon scrolling.

### 3.4. Page-Specific Validations
- **Home (`/`):** Hero section loads, statistics counter renders.
- **Investment Intelligence (`/investment-intelligence`):** Sector themes grid stacks correctly on mobile.
- **Advisory Services (`/advisory-services`):** Service detail cards render without contrast violations.
- **Insights (`/insights`):** Grid of articles displays correctly.

---

## 4. Acceptance Criteria for TestSprite
For TestSprite to mark this application as "Production-Ready", it must provide evidence of the following:

1. **Zero Console Errors:** No JS exceptions, hydration warnings, or missing resources.
2. **Zero Contrast Violations:** All text on all backgrounds passes axe-core contrast checks.
3. **100% Form Security:** Validation strictly prevents empty or malformed submissions.
4. **100% SEO Health:** JSON-LD is present in the DOM for Google crawlers.
5. **Responsive Integrity:** No horizontal scrolling is possible at `375px` viewport width (iPhone SE size).

*Instructions to TestSprite AI: Read this document, parse the requirements, and aggressively attempt to break the application across all listed vectors. Output all findings, root causes, and screen captures.*
