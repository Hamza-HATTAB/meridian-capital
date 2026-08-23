// content/transactions.ts
// Illustrative engagement types — how the Lead-to-Appointment Diagnostic
// applies across different GCC real-estate operator contexts.
//
// IMPORTANT: These are illustrative engagement scenarios, not documented
// transactions. They describe the type of work, not specific past clients.

import type { Transaction } from '@/types/transaction';

export const transactions: Transaction[] = [
  {
    id: 'master-planned-uae',
    name: 'Master-Planned Community Operator',
    description: 'Multi-phase development, UAE — enquiry capture to appointment diagnostic',
    type: 'Residential',
    market: 'UAE',
    strategy: 'Enquiry Capture Audit',
    role: 'Illustrative Scenario',
    year: 2024,
    featured: true,
  },
  {
    id: 'hospitality-linked-ksa',
    name: 'Hospitality-Linked Real Estate',
    description: 'Branded residence operator, KSA — qualification and routing review',
    type: 'Hospitality',
    market: 'KSA',
    strategy: 'Qualification & Routing Review',
    role: 'Illustrative Scenario',
    year: 2024,
    featured: true,
  },
  {
    id: 'multi-project-developer',
    name: 'Multi-Project Developer',
    description: 'Portfolio developer across 4 active projects — CRM and follow-up workflow',
    type: 'Mixed-Use',
    market: 'UAE',
    strategy: 'CRM & Follow-Up Workflow',
    role: 'Illustrative Scenario',
    year: 2024,
    featured: true,
  },
  {
    id: 'portfolio-business-ksa',
    name: 'Portfolio Real-Estate Business',
    description: 'KSA operator, multiple asset classes — conversion measurement setup',
    type: 'Mixed-Use',
    market: 'KSA',
    strategy: 'Conversion Measurement Setup',
    role: 'Illustrative Scenario',
    year: 2023,
    featured: true,
  },
];
