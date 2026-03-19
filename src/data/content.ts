// ─────────────────────────────────────────────────
//  PLACEHOLDER DATA — replace with real information
// ─────────────────────────────────────────────────

export const profile = {
  name: 'Xuan Sophie',
  role: 'UX/UI Designer',
  tagline: "Hi, I'm Xuan Sophie. I have 3 years of experiences designing products that people love.",
  bio: 'UI/UX Designer with 3 years of experience specializing in product design and user research. I believe great design starts with a deep understanding of the people who use it.',
  available: true,
  email: 'hello@xuansophie.com',
  linkedin: 'https://linkedin.com/in/xuansophie',
  behance: 'https://behance.net/xuansophie',
  dribbble: 'https://dribbble.com/xuansophie',
  twitter: 'https://x.com/xuansophie',
  cvUrl: '/cv.pdf',
  currentCompany: 'Company Name',
  location: 'Based in Vietnam',
  toolBadges: ['Figma', 'Claude Code', 'NotebookLM', 'Pencil.Dev'],
}

export const skills = [
  { category: 'Design',   items: ['Figma', 'Adobe XD', 'Sketch', 'ProtoPie'] },
  { category: 'Research', items: ['User Interviews', 'Usability Testing', 'Competitive Analysis', 'Personas'] },
  { category: 'Process',  items: ['Design Thinking', 'Agile / Scrum', 'Design Systems', 'Wireframing'] },
  { category: 'Tools',    items: ['Miro', 'Notion', 'Jira', 'Zeplin'] },
]

export type TimelineItem = {
  period: string
  role: string
  company: string
  type: 'work' | 'education'
  description: string[]
  scope?: string[]
}

export const timeline: TimelineItem[] = [
  {
    period: '2022 – Present',
    role: 'Senior UI/UX Designer',
    company: 'Company Name',
    type: 'work',
    description: [
      'Led design across 3 core products serving 100k+ users',
      'Built and maintained the company-wide design system',
      'Collaborated with PMs and engineers in agile sprints',
    ],
    scope: ['Product Strategy', 'UI Design', 'Design System', 'UX Research'],
  },
  {
    period: '2021 – 2022',
    role: 'UI/UX Designer',
    company: 'Company Name',
    type: 'work',
    description: [
      'Designed end-to-end user flows for a mobile application',
      'Conducted user research and moderated usability testing sessions',
      'Increased retention rate by 25% through onboarding redesign',
    ],
    scope: ['UI Design', 'UX Research', 'Prototyping', 'User Testing'],
  },
  {
    period: '2020 – 2021',
    role: 'Junior UI Designer',
    company: 'Company Name',
    type: 'work',
    description: [
      'Designed UI for web and mobile projects based on client briefs',
      'Created prototypes and prepared developer handoff assets',
    ],
    scope: ['UI Design', 'Wireframing', 'Prototyping'],
  },
  {
    period: '2016 – 2020',
    role: 'Bachelor of Graphic Design',
    company: 'University Name',
    type: 'education',
    description: [
      'Major in Visual Communication Design',
      'Graduated with Distinction',
    ],
  },
]

export type CaseStudy = {
  id: string
  title: string
  subtitle: string
  client: string
  year: string
  role: string
  duration: string
  tools: string[]
  tags: string[]
  coverColor: string
  featured?: boolean
  problem: string
  process: { phase: string; description: string }[]
  outcomes: { label: string; value: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'mention-network',
    title: 'Mention Network',
    subtitle: 'Redesigning the onboarding flow from scratch, increasing completion rate by 40%',
    client: 'Client / Company Name',
    year: '2024',
    role: 'Lead UX Designer',
    duration: '3 months',
    tools: ['Figma', 'Maze', 'Miro'],
    tags: ['Mobile App', 'UX Research', 'Onboarding'],
    coverColor: '#1a0a2e',
    featured: true,
    problem: 'Users were dropping off during onboarding, resulting in a low activation rate. The goal was to redesign the flow to increase completion.',
    process: [
      { phase: 'Research',  description: 'Interviewed 12 users, analyzed drop-off funnels, and ran competitive analysis.' },
      { phase: 'Define',    description: 'Identified core pain points, built personas and a user journey map.' },
      { phase: 'Design',    description: 'Sketched, wireframed low-fi, and prototyped hi-fi flows in Figma.' },
      { phase: 'Test',      description: 'Ran usability testing with 8 participants and A/B tests on Maze over 2 iterations.' },
    ],
    outcomes: [
      { label: 'Completion rate',  value: '+40%' },
      { label: 'Time to activate', value: '-2 min' },
      { label: 'Support tickets',  value: '-30%' },
    ],
  },
  {
    id: 'geo-report',
    title: 'Geo Report',
    subtitle: 'Building a design system from the ground up across the entire product suite',
    client: 'Internal / Company Name',
    year: '2023',
    role: 'Design System Lead',
    duration: '4 months',
    tools: ['Figma', 'Storybook', 'Notion'],
    tags: ['Design System', 'Web App', 'B2B'],
    coverColor: '#0a1a1a',
    featured: true,
    problem: 'Inconsistency across products — each team designed independently, resulting in a fragmented UI experience.',
    process: [
      { phase: 'Audit',    description: 'Audited the full existing UI and catalogued all components.' },
      { phase: 'Tokenize', description: 'Defined design tokens for color, typography, spacing, and shadow.' },
      { phase: 'Build',    description: 'Created 60+ components in Figma with full variant support.' },
      { phase: 'Rollout',  description: 'Coordinated with 3 engineering teams to implement and document.' },
    ],
    outcomes: [
      { label: 'Components',    value: '60+' },
      { label: 'Design time',   value: '-50%' },
      { label: 'Teams adopted', value: '4 teams' },
    ],
  },
  {
    id: 'whales-market',
    title: 'Whales Market',
    subtitle: 'Research-driven redesign of an analytics dashboard for a B2B SaaS platform',
    client: 'Client / Company Name',
    year: '2023',
    role: 'UX Researcher & Designer',
    duration: '2 months',
    tools: ['Figma', 'Hotjar', 'Lookback'],
    tags: ['Dashboard', 'Data Viz', 'B2B SaaS'],
    coverColor: '#0a0a1a',
    featured: true,
    problem: 'Users did not understand the data shown on the dashboard, leading to low adoption of premium features.',
    process: [
      { phase: 'Research',   description: 'Session recordings and contextual inquiry with 6 power users.' },
      { phase: 'Synthesize', description: 'Affinity mapping to identify the top 5 confusion points.' },
      { phase: 'Redesign',   description: 'Reorganized the information architecture and designed new data visualizations.' },
      { phase: 'Validate',   description: 'Prototype testing with 10 users, measuring task success rate.' },
    ],
    outcomes: [
      { label: 'Task success rate', value: '+55%' },
      { label: 'Feature adoption',  value: '+35%' },
      { label: 'Churn rate',        value: '-18%' },
    ],
  },
  {
    id: 'design-system-v2',
    title: 'Design System v2',
    subtitle: 'Rebuilding the design system with dark mode support and token-based theming',
    client: 'Internal Project',
    year: '2024',
    role: 'Design System Designer',
    duration: '5 months',
    tools: ['Figma', 'Tokens Studio', 'Notion'],
    tags: ['Design System', 'Tokens', 'Dark Mode'],
    coverColor: '#120a1e',
    featured: false,
    problem: 'The legacy design system lacked dark mode support and had no clear token structure, causing inconsistency.',
    process: [
      { phase: 'Audit',       description: 'Reviewed the entire existing component library.' },
      { phase: 'Token Design', description: 'Designed a semantic token system covering color, spacing, and typography.' },
      { phase: 'Build',       description: 'Rebuilt 80+ components with full dark and light mode support.' },
      { phase: 'Docs',        description: 'Wrote comprehensive documentation and usage guidelines.' },
    ],
    outcomes: [
      { label: 'Components',        value: '80+' },
      { label: 'Dev handoff time',  value: '-60%' },
      { label: 'Design consistency', value: '100%' },
    ],
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    subtitle: 'Redesigning the money transfer and personal finance management experience',
    client: 'Fintech Startup',
    year: '2023',
    role: 'Product Designer',
    duration: '4 months',
    tools: ['Figma', 'ProtoPie', 'Maze'],
    tags: ['Mobile', 'Fintech', 'iOS'],
    coverColor: '#0a1020',
    featured: false,
    problem: 'Users struggled to complete transactions and could not easily understand their account status.',
    process: [
      { phase: 'Research', description: 'Interviewed 15 banking app users to surface key pain points.' },
      { phase: 'IA',       description: 'Restructured the information architecture and navigation flow.' },
      { phase: 'Design',   description: 'Designed hi-fi iOS screens with micro-interactions.' },
      { phase: 'Test',     description: 'Ran usability tests and an A/B test across 2 design variants.' },
    ],
    outcomes: [
      { label: 'Task completion', value: '+48%' },
      { label: 'Error rate',      value: '-65%' },
      { label: 'NPS score',       value: '+32' },
    ],
  },
  {
    id: 'ecommerce-redesign',
    title: 'E-Commerce Redesign',
    subtitle: 'Optimizing the checkout flow and product discovery for an e-commerce platform',
    client: 'Retail Company',
    year: '2022',
    role: 'UX Designer',
    duration: '3 months',
    tools: ['Figma', 'Hotjar', 'Optimizely'],
    tags: ['E-Commerce', 'Web', 'Conversion'],
    coverColor: '#0a180a',
    featured: false,
    problem: 'Cart abandonment rate reached 72% — the checkout flow had too many steps and was overly complex.',
    process: [
      { phase: 'Analytics', description: 'Analyzed the funnel and ran session recordings via Hotjar.' },
      { phase: 'Research',  description: 'Guerrilla testing with 8 users in a retail environment.' },
      { phase: 'Redesign',  description: 'Simplified checkout from 5 steps down to 2.' },
      { phase: 'A/B Test',  description: 'Deployed via Optimizely and measured conversion over 4 weeks.' },
    ],
    outcomes: [
      { label: 'Cart abandonment', value: '-28%' },
      { label: 'Conversion rate',  value: '+22%' },
      { label: 'Revenue uplift',   value: '+15%' },
    ],
  },
]
