export interface CaseStudySection {
  overview: string;
  problem: string;
  approach: string[];
  results: string[];
  learnings: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  slug: string;
  caseStudy: CaseStudySection | null;
}

export const projects: Project[] = [
  {
    title: 'Healthcare Analytics Dashboard',
    description: 'Designed and managed an analytics dashboard for mental wellness programs, enabling administrators to track enrollment pipelines, service utilization, provider visits, and insurance claims across multiple school sites.',
    tags: ['Healthcare', 'Data Visualization', 'Dashboard Design', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
    slug: 'healthcare-analytics',
    caseStudy: {
      overview: 'As the product manager at a technical development firm, I partnered with a behavioral health organization to design and build a program monitoring dashboard for their school district clients. The dashboard gave school administrators real-time visibility into the health of their behavioral health programs, tracking key metrics including program enrollment, number of delivered services, claims filed, and total billed versus paid amounts.',
      problem: 'Program administrators were relying on disconnected spreadsheets and manual reports to track student enrollment, provider visits, and insurance billing across dozens of school sites. Data was often weeks old by the time it reached decision-makers, leading to underutilized provider capacity, missed billing opportunities, and an inability to demonstrate program impact to district partners.',
      approach: [
        'Conducted discovery interviews with 8 program administrators and 5 district partners to map their reporting workflows and identify the highest-value metrics.',
        'Defined a phased MVP scope focused on four key dashboards: enrollment pipeline, service utilization, provider visits, and claims tracking.',
        'Integrated with each district\'s Student Information System (SIS) to onboard students, and built a provider experience where clinicians could log delivered services, write SOAP notes, and upload documentation, creating the unified data source for the analytics dashboard.',
        'Created wireframes and interactive prototypes in Figma, iterating through 3 rounds of feedback with end users.',
        'Worked with engineering to implement role-based access controls so each school site could see only their own data.',
      ],
      results: [
        'Reduced time-to-insight from 2-3 weeks to real-time for enrollment and utilization data.',
        'Automated claims submission via an Availity integration, submitting $5K in claims within the first week of launch.',
        'Enabled administrators to proactively reallocate provider capacity, improving utilization rates by 18%.',
        'Enabled real-time tracking of provider adoption by surfacing which clinicians had completed encounters with students across all school sites.',
      ],
      learnings: [
        'Starting with the decision the user needs to make (rather than the data available) led to a much more focused and useful dashboard.',
        'Role-based access control was essential given the range of provider roles, from certified to associate social workers, and the need to meet both HIPAA and FERPA requirements across all school sites.',
        'Iterating on prototypes with real administrators caught usability issues that would have been costly to fix post-launch.',
        'Building the Availity integration required structuring encounter data in X12 EDI format, a compliance requirement that shaped how we designed service documentation in the provider experience.',
      ],
    },
  },
  {
    title: 'Legacy System Overhaul',
    description: 'Led the consolidation of multiple legacy tools into a unified SaaS platform in under 5 months, streamlining operations and reducing client spend by 50%.',
    tags: ['Product Strategy', 'MVP', 'B2B SaaS', 'Go-to-Market'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
    slug: 'legacy-system-overhaul',
    caseStudy: {
      overview: 'I led the product strategy to consolidate multiple disconnected legacy tools into a single unified SaaS platform for a B2B healthcare services company. The project was delivered in under 5 months, reducing client operational costs by 50% and positioning the company for scalable growth.',
      problem: 'The organization had accumulated multiple separate tools over the years for scheduling, documentation, billing, reporting, and communication, each from a different vendor with no integration. Staff toggled between systems constantly, data was duplicated or inconsistent, and clients were paying licensing fees for overlapping functionality.',
      approach: [
        'Audited all legacy tools to map feature usage, identifying that only 40% of features across all tools were actively used.',
        'Conducted workflow mapping sessions with operations staff to understand cross-system dependencies and pain points.',
        'Defined an MVP feature set covering the high-usage features, with a migration plan for remaining functionality in later phases.',
        'Designed a unified data model that eliminated redundancy and enabled real-time data flow between modules.',
        'Established a go-to-market plan including client communication, training materials, and a phased migration schedule to minimize disruption.',
        'Ran a 3-week pilot with 2 existing clients to validate the platform before broader rollout.',
      ],
      results: [
        'Consolidated multiple tools into 1 platform delivered in under 5 months.',
        'Reduced client software spend by 50% through elimination of redundant vendor licenses.',
        'Cut new client onboarding time from 3-4 weeks to 3 days.',
        'Staff reported saving an average of 6 hours per week previously spent on cross-system data entry.',
        'Achieved zero data loss during migration for all pilot clients.',
      ],
      learnings: [
        'Feature audits are essential before consolidation — building everything from every legacy tool would have tripled scope without adding value.',
        'Client communication and change management were as important as the technical build. Early transparency about timelines reduced resistance.',
        'A phased migration approach (pilot first) built confidence internally and with clients before committing to full rollout.',
        'The unified data model was the hardest and most important architectural decision — getting it right early prevented rework downstream.',
      ],
    },
  },
  {
    title: 'HIPAA Consent Integration',
    description: 'Led end-to-end initiative to capture third-party HIPAA consent during patient registration, building integrations to sync consent status and digitally signed PDFs, updating the registration flow, and extending the experience to Android devices. Delivered as a solo PM leveraging Claude Code.',
    tags: ['HIPAA Compliance', 'Integrations', 'Patient Registration', 'Claude Code'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
    slug: 'hipaa-consent-integration',
    caseStudy: {
      overview: 'As the solo product manager, I led the end-to-end initiative to capture third-party HIPAA consent during patient registration. The project involved building integrations to sync consent status and digitally signed PDFs with external partners, updating the registration workflow, and extending the experience to Android devices. I leveraged Claude Code extensively to accelerate delivery.',
      problem: 'The organization needed to capture HIPAA consent from patients on behalf of a third-party partner during the existing registration flow. Without this, the partner could not access patient records needed for care coordination, creating delays and compliance risk. The consent capture had to be legally valid (digitally signed PDFs), synced in real-time with the partner\'s system, and work across both web and Android registration flows.',
      approach: [
        'Mapped the existing registration flow and identified the optimal insertion point for consent capture that minimized friction for patients.',
        'Worked with legal and compliance teams to define the exact consent language and digital signature requirements for HIPAA validity.',
        'Designed the integration architecture: consent capture in the registration UI, PDF generation with digital signature, and API sync to the partner\'s system.',
        'Used Claude Code to rapidly prototype the API integration layer, reducing development time for the integration logic by approximately 60%.',
        'Extended the consent flow to the Android application, ensuring feature parity with the web experience.',
        'Built monitoring and alerting for consent sync failures to ensure no patient records fell through the cracks.',
      ],
      results: [
        'Launched consent capture across web and Android with zero compliance issues.',
        'Achieved 98.5% consent sync success rate in the first month, with automated retry handling the remaining 1.5%.',
        'Reduced partner onboarding friction, enabling care coordination to begin at registration rather than days later.',
        'Claude Code usage reduced the integration development cycle by approximately 3 weeks compared to initial estimates.',
        'The pattern established became the template for 2 subsequent third-party consent integrations.',
      ],
      learnings: [
        'HIPAA compliance requirements must be locked down before any design work begins — late changes to consent language rippled through the entire flow.',
        'Claude Code proved especially valuable for boilerplate integration code and API contract validation, but required careful human review for compliance-sensitive logic.',
        'Feature parity across web and Android was non-negotiable for this use case — patients could not be treated differently based on their registration device.',
        'Real-time sync monitoring was critical; without it, consent failures would have been invisible until a compliance audit surfaced them.',
      ],
    },
  },
  {
    title: 'Product Manager Portfolio',
    description: 'Designed and built a personal portfolio website from scratch using React, Tailwind CSS, and Claude Code to showcase product management experience and case studies.',
    tags: ['Personal Branding', 'Side Project', 'Claude Code', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
    slug: 'product-manager-portfolio',
    caseStudy: {
      overview: 'I designed and built this portfolio website from scratch to showcase my product management work through detailed case studies. The project doubled as an exercise in applying product thinking to a personal brand: defining the audience, prioritizing content, iterating on design, and shipping quickly using modern tools including Claude Code.',
      problem: 'As a product manager, I needed a way to present my work that went beyond resume bullet points. Recruiters and hiring managers want to see how you think, not just what you shipped. Existing portfolio templates were either developer-focused (code showcases) or designer-focused (visual portfolios), neither fitting the PM use case of demonstrating strategic thinking, cross-functional leadership, and measurable outcomes.',
      approach: [
        'Defined the target audience (hiring managers, recruiters, potential collaborators) and their key questions: What problems has this person solved? How do they think? What impact have they driven?',
        'Chose React + Tailwind CSS + Vite for fast iteration and a polished result, with Framer Motion for subtle animations that add personality without distraction.',
        'Structured the site around case studies as the primary content, with the home page serving as a curated overview.',
        'Used Claude Code as a development accelerator — from component scaffolding to CSS debugging to content drafting — treating it as a force multiplier for a solo builder.',
        'Deployed on Netlify for zero-config hosting with automatic builds from Git pushes.',
        'Iterated on content and design over several rounds, treating feedback from peers as user research.',
      ],
      results: [
        'Shipped a complete portfolio site in under 2 weeks as a side project alongside full-time work.',
        'Site serves as a living document that evolves with each new project and case study.',
        'Claude Code reduced development time by an estimated 40-50%, particularly for boilerplate, styling, and content iteration.',
        'The case study format has received positive feedback from hiring managers for its clarity and depth.',
      ],
      learnings: [
        'Applying product thinking to a personal project (audience definition, prioritization, iteration) made the result significantly more focused and effective.',
        'Claude Code works best when you have a clear vision of what you want — it accelerates execution but does not replace product judgment.',
        'Shipping something good quickly is better than shipping something perfect slowly — the site can always be iterated on.',
        'Writing case studies forces you to reflect on your own work more critically, which itself is a valuable exercise.',
      ],
    },
  },
];
