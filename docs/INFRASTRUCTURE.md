# Northstar Advisory Infrastructure & Domain Architecture

**Root Domain:** `northstaradvisory.pro`
**Registrar:** Namecheap
**Hosting Provider:** Vercel

## 1. Domain Routing & DNS Strategy
All DNS records are managed in Namecheap Advanced DNS.
- **Primary Web Traffic (`@` and `www`):** A Record pointing to Vercel Edge Network (`216.198.79.1` and `76.76.21.21`).
- **Inbound Email (`@`):** MX Records pointing to Zoho Mail (`mx.zoho.com`, `mx2.zoho.com`, `mx3.zoho.com`).
- **Email Security (Root):** TXT Records for SPF (`v=spf1 include:zoho.com ~all`) and DKIM.
- **Transactional Outbound Email (`mail`):** MX and TXT records pointing to Resend / Amazon SES (`send.mail`, `resend._domainkey.mail`).

## 2. Portfolio Projects & Asset Mapping
1. **Real Estate Advisory** (Current Production)
   - Root Domain: `northstaradvisory.pro`
   - Vercel Project: `meridian-capital-six`
   - Tech Stack: Next.js 16, Tailwind CSS v4, Vercel Edge.
2. **Clinic** (Future)
   - Domain: `clinic.northstaradvisory.pro`
3. **Car Rental** (Future)
   - Domain: `carrental.northstaradvisory.pro`
4. **AI Product** (Future)
   - Domain: `ai.northstaradvisory.pro`
5. **Agency Main Site** (Future)
   - Domain: `agency.northstaradvisory.pro`

## 3. Third-Party Integrations
- **Cloudflare Turnstile:** Bot protection on Contact Form.
- **Upstash Redis:** API Rate limiting for Contact Form.
- **Resend:** Transactional email delivery via `@mail.northstaradvisory.pro`.
- **Zoho Workplace:** Primary enterprise inbox (`hamza@northstaradvisory.pro`).
- **Google Analytics 4:** Quantitative web analytics tracking.
- **Microsoft Clarity:** Qualitative user session recordings and heatmaps.
