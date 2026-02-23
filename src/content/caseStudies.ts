export interface CaseStudy {
  title: string;
  scope: string;
  artifacts: string[];
  outcome: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Console Development Platform',
    scope: 'Oracle Cloud — UX infrastructure enabling 100+ teams and 150+ JS products',
    artifacts: ['Component libraries', 'Templates', 'Telemetry / metrics', 'CI/CD', 'Governance'],
    outcome: 'Platform-scale design consistency and delivery velocity',
  },
  {
    title: 'Identity & Access Management',
    scope: 'AWS IAM — policy tooling and identity UX',
    artifacts: ['Policy editor UX', 'Permission flows', 'Guardrail patterns'],
    outcome: 'Usable security at enterprise scale',
  },
  {
    title: 'Cloud Financial Governance',
    scope: 'AWS Billing / Cost Management — Insights, Budgets, Organizations, Apptio context',
    artifacts: ['Dashboard UX', 'Budget controls', 'Organizational hierarchy', 'Suite coherence'],
    outcome: 'Measurable cloud cost governance',
  },
  {
    title: 'Enterprise Collaboration Suite',
    scope: 'AWS WorkMail / WorkDocs — admin and end-user UX',
    artifacts: ['Admin consoles', 'Onboarding flows', 'Suite branding'],
    outcome: 'Coherent enterprise collaboration tooling',
  },
  {
    title: 'Voice & Calendar Interaction',
    scope: 'Alexa for Business — group, time, and calendar management',
    artifacts: ['Interaction flows', 'Scheduling UX', 'Group admin'],
    outcome: 'Enterprise voice interface patterns',
  },
  {
    title: 'Infrastructure Engineering',
    scope: 'Istari Digital — infrastructure deployments, Lockheed Martin Skunk Works partnership',
    artifacts: ['Deployment tooling', 'Engineering leadership'],
    outcome: 'Production infrastructure at defense-grade standards',
  },
];
