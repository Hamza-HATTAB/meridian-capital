# Meridian Capital Advisory — Product Specification Document (PRD)

## 1. Product Overview
Meridian Capital Advisory is an institutional real estate advisory platform. Unlike traditional marketing websites, this platform functions as a **clinical, high-conviction digital artifact**. It is designed to act as an extension of an Investment Committee (IC) briefing—projecting extreme competence, rigorous analytical discipline, and institutional-grade credibility.

**Mission:** Make the first 10 seconds unforgettable by proving institutional credibility without resorting to generic luxury aesthetics or sales-driven marketing copy.

## 2. Target Audience
- **Primary:** Chief Investment Officers (CIOs), Institutional Asset Managers, Sovereign Wealth Funds, and UHNW Family Offices.
- **Psychographics:** Highly analytical, risk-averse, immune to marketing fluff, values data over adjectives, respects contrarian judgment (e.g., advising a client *not* to buy).

## 3. Core Architecture & Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Vanilla CSS (Custom Design System Tokens)
- **Animation:** Framer Motion (Subtle, strictly non-floating, micro-interactions only)
- **Backend/Forms:** React Hook Form + Zod + Resend (Email Infrastructure)
- **Security:** Cloudflare Turnstile (Bot protection) + Upstash Redis (Rate Limiting)
- **Hosting:** Vercel (Edge Network)

## 4. Design & Aesthetic Mandate (The "Anti-Marketing" Rules)
- **Visual Anchor:** The Hero section must mimic a redacted Investment Committee Memorandum.
- **Typography:** Strict adherence to Serif (editorial authority) and Monospace (data/ledger representation).
- **Color Palette:** Clinical Monochromes. White (`#FFFFFF`), Off-White (`#FAFAFA`), Deep Charcoal (`#000000`), with semantic red (`#D90000`) used strictly for warnings/declines. 
- **Banned Elements:** No gradients, no glassmorphism, no drop-shadows, no bouncing/floating animations, no generic skyline photography, no "Learn More" buttons. 
- **Navigation:** Understated, persistent, and highly functional. 

## 5. Information Architecture
1. **Home (`/`)**: IC Memo Hero, Discipline Pipeline, Institutional Track Record overview.
2. **Advisory Services (`/advisory-services`)**: Deep dive into the 5 core disciplines (Intelligence, Analysis, Due Diligence, Recommendations, Execution).
3. **Investment Intelligence (`/investment-intelligence`)**: Sector coverage metrics and thesis generation.
4. **Track Record (`/track-record`)**: Hard data visualization using Recharts.
5. **Transactions (`/transactions`)**: Forensic ledger of closed/declined deals with filtering.
6. **Insights (`/insights`)**: Whitepapers and macroeconomic analysis.
7. **About (`/about`)**: Firm methodology, governance, and structural alignment.
8. **Contact (`/contact`)**: Secure, rate-limited dialogue initiation pipeline.

## 6. Functional Requirements
- **Responsive Layout:** The platform must degrade gracefully from a 4K Desktop display down to a 320px Mobile viewport without breaking the strict tabular/ledger layouts.
- **Form Security:** The Contact form must prevent spam through dual-layer validation (Turnstile frontend challenge + Upstash Redis IP-based rate limiting on the backend).
- **Accessibility (a11y):** The platform must maintain a minimum 4.5:1 color contrast ratio (WCAG AA) on all text, including "redacted" curiosity loops. Screen readers must be able to parse data tables sequentially.
- **Performance:** 100/100 Lighthouse score. Largest Contentful Paint (LCP) must remain under 1.2s. Zero Cumulative Layout Shift (CLS).

## 7. Security & Compliance
- Environment variables must be strictly validated at build time.
- All outbound emails (Resend) must utilize verified domain sending with SPF/DKIM/DMARC configuration to guarantee inbox delivery to strict corporate firewalls.
- Rate limiting is set to 3 requests per 10 minutes per IP to prevent API abuse.



# Critical User Journey & QA Test Plan

**Scope:** This document outlines the deep, forensic User Acceptance Testing (UAT) and Quality Assurance (QA) procedures required for launching the Meridian Capital Advisory platform. 

*Note: This is not a load-testing plan (e.g., 500-loop stress tests). This is a qualitative and functional test plan focusing on the exact journeys real Institutional Investors will take across Desktop, Tablet (iPad), and Mobile devices.*

---

## 1. Device Matrix
All tests below must be executed across the following profiles:
- **Desktop:** macOS Safari (1440p) & Windows Chrome (1080p).
- **Tablet:** iPad Pro (11-inch) in both Portrait and Landscape orientations.
- **Mobile:** iPhone 14/15 Pro (Safari) & Android Pixel (Chrome).

---

## 2. Forensic Test Scenarios (The Critical Paths)

### Test Case 1: The "10-Second Impression" (Homepage Hero)
**Goal:** Verify that the IC Memo renders flawlessly and the curiosity loop engages the user immediately.
- **Desktop Action:** Load the homepage. Verify the IC Memo borders are crisp, the monospace text is highly legible, and the `WITHDRAW / DECLINE` red text stands out.
- **Mobile Action:** Load the homepage. Verify the IC Memo layout collapses gracefully without horizontal scrolling. The "Firm Data" metrics (18 Years, 14.2B Advised) must stack vertically and remain readable.
- **Acceptance Criteria:** The page scores 100/100 in Lighthouse Accessibility (no contrast errors on the `rgba(0,0,0,0.75)` redaction text). No CLS (Cumulative Layout Shift) occurs as fonts load.

### Test Case 2: Deep Due Diligence (Navigation & Routing)
**Goal:** A CIO wants to investigate the firm's track record and methodology without friction.
- **Desktop Action:** Click through `/advisory-services`, `/track-record`, `/transactions`, and `/about` using the top navigation bar. 
- **iPad Action:** Rotate the iPad from landscape to portrait. Verify the desktop navigation seamlessly converts to the mobile hamburger menu without breaking the layout.
- **Mobile Action:** Open the mobile menu. Navigate to `/transactions`. Verify the mobile menu closes completely after the route change and focus is returned to the page content.
- **Acceptance Criteria:** Client-side routing is instantaneous. The active state indicator in the navigation accurately reflects the current page.

### Test Case 3: Data Integrity Parsing (Transactions Ledger)
**Goal:** An analyst needs to read past transaction evidence on a smaller screen.
- **Desktop Action:** Go to `/transactions`. Filter the transactions. Verify the table animations are smooth.
- **Mobile Action:** Go to `/transactions`. Verify that the complex data tables either scroll horizontally with a visible scrollbar hint, or collapse into card-based layouts. 
- **Acceptance Criteria:** No text truncation occurs. The user does not need to zoom in to read the transaction values.

### Test Case 4: The Dialogue Pipeline (Contact Form & Security)
**Goal:** A prospect submits a highly confidential inquiry. The system must accept it securely and block spam.
- **Cross-Device Action:** Go to `/contact`. 
- **Validation Check:** Attempt to submit the form while leaving the "Corporate Email" empty. Verify native browser HTML5 validation blocks the submission.
- **Turnstile Check:** Fill out the form completely. Wait for the Cloudflare Turnstile widget to verify the session. Click submit.
- **Rate Limit Check:** Immediately attempt to submit the form 4 more times in rapid succession. 
- **Acceptance Criteria:** The first submission succeeds and shows the `[ DIALOGUE INITIATED ]` success state. The subsequent submissions are blocked by the Upstash Redis rate limiter, displaying the `[ RATE LIMIT EXCEEDED ]` error state.

### Test Case 5: The "Broken Link" Recovery (404 Page)
**Goal:** The user accidentally types a bad URL.
- **Action:** Navigate to `meridian-capital-six.vercel.app/hidden-dossier`.
- **Acceptance Criteria:** The user is met with the custom, clinically designed `_not-found.tsx` page. The "Return to Index" button routes them back to the homepage.

---

## 3. Automated Fallback Verification
While the manual forensic tests cover the human element, the CI/CD pipeline acts as the final gatekeeper:
1. **Playwright Suite:** 51/51 tests must pass (simulating clicks, navigation, and accessibility audits automatically).
2. **Axe-core Accessibility:** Zero contrast or ARIA-label violations on the production build.
3. **TypeScript Strict Mode:** Zero `any` types escaping into the production build logic.
