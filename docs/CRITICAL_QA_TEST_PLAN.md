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
