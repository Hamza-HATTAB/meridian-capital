// content/services.ts
// North Star Advisory engagement types — real-estate operating systems.

import type { Service } from '@/types/service';

export const advisoryServices: Service[] = [
  {
    id: 'lead-to-appointment-diagnostic',
    num: '01',
    title: 'Lead-to-Appointment Diagnostic',
    description:
      'A structured review of where qualified enquiries are lost between your marketing campaigns, website, lead qualification process, sales routing, CRM handoff, and follow-up cadence.',
    challenge:
      'Most GCC real-estate businesses have no visibility into how many qualified enquiries they lose after the first contact. Marketing spend increases while conversion rates stay flat or decline — because the problem is not reach, it is process.',
    approach:
      'We map the full journey from enquiry source to appointment booked: what systems are in place, where handoffs break down, how quickly sales teams respond, what the CRM data actually shows, and where qualified prospects go quiet. We present findings as a structured gap analysis.',
    outcome:
      'A clear, prioritised action list of the process gaps costing you qualified appointments — with specific recommendations for each gap, ordered by likely conversion impact.',
  },
  {
    id: 'enquiry-capture-audit',
    num: '02',
    title: 'Enquiry Capture & Qualification Review',
    description:
      'Assessment of how enquiries arrive, how they are captured, and how quickly and accurately they are qualified for the right project, unit type, and sales team.',
    challenge:
      'Enquiries arrive through multiple channels — portals, WhatsApp, website, walk-in, referral — often without a consistent capture process. Qualification criteria are informal or inconsistent, leading to time spent on poor-fit prospects and qualified prospects going unserved.',
    approach:
      'Review all active enquiry channels, capture mechanics, and the qualification logic applied at each stage. Identify inconsistencies, delays, and gaps. Benchmark response times against the enquiry volume.',
    outcome:
      'A channel-by-channel assessment with specific recommendations on capture tooling, qualification criteria, and routing logic for each enquiry type.',
  },
  {
    id: 'crm-sales-routing-review',
    num: '03',
    title: 'CRM & Sales Routing Assessment',
    description:
      'Review of how qualified enquiries are assigned, tracked, and escalated within your CRM and sales team structure — covering assignment rules, visibility, follow-up triggers, and reporting.',
    challenge:
      'CRM implementations in GCC real-estate businesses frequently do not reflect the actual sales process. Leads sit unassigned, assignment rules are manual or informal, and follow-up discipline depends on individual sales staff rather than system-enforced workflows.',
    approach:
      'Audit the CRM configuration against the actual sales workflow. Identify leads that are unassigned, stale, or in undefined pipeline stages. Review follow-up cadence, escalation triggers, and reporting completeness.',
    outcome:
      'A practical CRM improvement brief covering assignment rules, pipeline stage definitions, follow-up automation opportunities, and the reporting metrics that would give management real conversion visibility.',
  },
  {
    id: 'conversion-measurement-setup',
    num: '04',
    title: 'Conversion Measurement & Reporting',
    description:
      'Definition and setup of the metrics that matter: enquiry-to-qualification rate, qualification-to-appointment rate, appointment-to-sale rate, and the time benchmarks at each stage.',
    challenge:
      'Most real-estate businesses track marketing spend and total sales, but not what happens in between. Without stage-level conversion data, it is impossible to identify which part of the funnel is the constraint — and whether fixing it requires a marketing, process, or people change.',
    approach:
      'Define the measurement framework, identify what data already exists, design the reporting structure, and recommend the minimal tooling needed to produce the key conversion metrics consistently.',
    outcome:
      'A functioning conversion reporting framework — either within your existing CRM and analytics tools, or as a lightweight standalone — that makes the enquiry-to-appointment funnel visible to management on a weekly basis.',
  },
  {
    id: 'follow-up-workflow-design',
    num: '05',
    title: 'Follow-Up Workflow Design',
    description:
      'Structured design of the follow-up cadence, messaging approach, and escalation logic for qualified enquiries that have not yet booked an appointment.',
    challenge:
      'Follow-up in GCC real estate is typically informal — one or two WhatsApp messages, then silence. Qualified prospects who need time, multiple touches, or a specific trigger to re-engage are abandoned, converting eventually through a competitor or not at all.',
    approach:
      'Design a structured follow-up sequence for each enquiry segment: warm leads, delayed decisions, price-sensitive, and project-specific. Define the channel mix, timing, messaging framework, and escalation trigger for each segment.',
    outcome:
      'A documented follow-up workflow with messaging templates, timing schedules, escalation rules, and the CRM/automation configuration needed to execute it consistently without relying on individual sales discipline.',
  },
];
