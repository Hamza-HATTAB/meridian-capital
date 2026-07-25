# Critical User Journey & QA Test Plan

**Scope:** This document outlines the deep, forensic User Acceptance Testing (UAT) and Quality Assurance (QA) procedures required for launching the Meridian Capital Advisory platform. 

*Note: This is not a load-testing plan. This is a qualitative and functional test plan focusing on the exact journeys real Institutional Investors will take across Desktop, Tablet, and Mobile devices.*

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
- **Desktop Action:** Load `https://northstaradvisory.pro`. Verify the IC Memo borders are crisp, the monospace text is highly legible, and the `WITHDRAW / DECLINE` red text stands out.
- **Mobile Action:** Load the homepage. Verify the IC Memo layout collapses gracefully without horizontal scrolling. The "Firm Data" metrics must stack vertically and remain readable.
- **Acceptance Criteria:** The page scores 100/100 in Lighthouse Accessibility. No CLS occurs as fonts load.

### Test Case 2: Deep Due Diligence (Navigation & Routing)
**Goal:** A CIO wants to investigate the firm's track record and methodology without friction.
- **Desktop Action:** Click through `/advisory-services`, `/track-record`, `/transactions`, and `/about`.
- **iPad Action:** Rotate from landscape to portrait. Verify the desktop navigation seamlessly converts to the mobile hamburger menu.
- **Mobile Action:** Open the mobile menu, navigate to `/transactions`. Verify the menu closes completely after route change.
- **Acceptance Criteria:** Client-side routing is instantaneous. Active state indicators accurately reflect the current page.

### Test Case 3: Data Integrity Parsing (Transactions Ledger)
**Goal:** An analyst needs to read past transaction evidence on a smaller screen.
- **Desktop Action:** Go to `/transactions`. Filter transactions. Verify animations are smooth.
- **Mobile Action:** Go to `/transactions`. Verify complex data tables scroll horizontally or collapse into cards.
- **Acceptance Criteria:** No text truncation.

### Test Case 4: The Dialogue Pipeline (Contact Form & Security)
**Goal:** A prospect submits a highly confidential inquiry. System must accept it securely and block spam.
- **Cross-Device Action:** Go to `/contact`. 
- **Validation Check:** Leave "Corporate Email" empty. Verify HTML5 validation blocks submission.
- **Turnstile Check:** Fill form. Wait for Cloudflare Turnstile widget to verify session. Click submit.
- **Rate Limit Check:** Attempt to submit 4 more times in rapid succession. 
- **Acceptance Criteria:** First submission succeeds (`[ DIALOGUE INITIATED ]`). Subsequent blocked by Upstash Redis (`[ RATE LIMIT EXCEEDED ]`). Email arrives in Zoho inbox via Resend.

### Test Case 5: The "Broken Link" Recovery (404 Page)
**Goal:** The user accidentally types a bad URL.
- **Action:** Navigate to `https://northstaradvisory.pro/hidden-dossier`.
- **Acceptance Criteria:** The user is met with the custom `_not-found.tsx` page. The "Return to Index" button routes back to homepage.

---

## 3. Automated Fallback Verification
1. **Playwright Suite:** 51/51 tests must pass.
2. **Axe-core Accessibility:** Zero contrast or ARIA-label violations.
3. **TypeScript Strict Mode:** Zero `any` types escaping into production build.
