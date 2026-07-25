# Meridian Capital Advisory — Product Specification Document (PRD)

## 1. Product Overview
Meridian Capital Advisory is an institutional real estate advisory platform. Unlike traditional marketing websites, this platform functions as a **clinical, high-conviction digital artifact**. It is designed to act as an extension of an Investment Committee (IC) briefing—projecting extreme competence, rigorous analytical discipline, and institutional-grade credibility.

**Mission:** Make the first 10 seconds unforgettable by proving institutional credibility without resorting to generic luxury aesthetics or sales-driven marketing copy.

## 2. Target Audience
- **Primary:** Chief Investment Officers (CIOs), Institutional Asset Managers, Sovereign Wealth Funds, and UHNW Family Offices.
- **Psychographics:** Highly analytical, risk-averse, immune to marketing fluff, values data over adjectives, respects contrarian judgment (e.g., advising a client *not* to buy).

## 3. Core Architecture & Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Vanilla CSS (Custom Design System Tokens)
- **Animation:** Framer Motion (Subtle, strictly non-floating, micro-interactions only)
- **Backend/Forms:** React Hook Form + Zod + Resend (Transactional Email via mail.northstaradvisory.pro)
- **Security:** Cloudflare Turnstile (Bot protection) + Upstash Redis (Rate Limiting)
- **Analytics:** Google Analytics 4 (Quantitative) + Microsoft Clarity (Qualitative)
- **Hosting:** Vercel (Edge Network)
- **Domain:** northstaradvisory.pro (Registered via Namecheap)

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
- Environment variables strictly validated at build time.
- Outbound emails via Resend utilize verified domains (`mail.northstaradvisory.pro`) with SPF/DKIM/DMARC configuration to guarantee inbox delivery to strict corporate firewalls.
- Inbound emails are handled by Zoho Workplace (`hamza@northstaradvisory.pro`).
- Rate limiting is set to 3 requests per 10 minutes per IP to prevent API abuse.
