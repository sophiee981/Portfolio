// ─────────────────────────────────────────────────
//  PLACEHOLDER DATA — thay thế bằng thông tin thật
// ─────────────────────────────────────────────────

export const profile = {
  name: 'Xuan Sophie',
  role: 'UX/UI Designer',
  tagline: 'Hi, I\'m Xuan Sophie. I have 3 years of experiences designing products that people love.',
  bio: 'UI/UX Designer với 3 năm kinh nghiệm, chuyên về product design và user research. Tôi tin rằng design tốt xuất phát từ sự hiểu biết sâu sắc về người dùng.',
  available: true,
  email: 'hello@xuansophie.com',
  linkedin: 'https://linkedin.com/in/xuansophie',
  behance: 'https://behance.net/xuansophie',
  dribbble: 'https://dribbble.com/xuansophie',
  twitter: 'https://x.com/xuansophie',
  cvUrl: '/cv.pdf',
  // Tool badges shown in Hero — từ wireframe
  toolBadges: ['Figma', 'Claude Code', 'NotebookLM', 'Pencil.Dev'],
}

export const skills = [
  { category: 'Design', items: ['Figma', 'Adobe XD', 'Sketch', 'Protopie'] },
  { category: 'Research', items: ['User Interview', 'Usability Testing', 'Competitive Analysis', 'Persona'] },
  { category: 'Process', items: ['Design Thinking', 'Agile/Scrum', 'Design System', 'Wireframing'] },
  { category: 'Tools', items: ['Miro', 'Notion', 'Jira', 'Zeplin'] },
]

export type TimelineItem = {
  period: string
  role: string
  company: string
  type: 'work' | 'education'
  description: string[]
}

export const timeline: TimelineItem[] = [
  {
    period: '2022 – Hiện tại',
    role: 'Senior UI/UX Designer',
    company: 'Company Name',
    type: 'work',
    description: [
      'Dẫn dắt design cho 3 sản phẩm chính với hơn 100k người dùng',
      'Xây dựng và duy trì design system toàn công ty',
      'Phối hợp với PM và developers trong quy trình agile',
    ],
  },
  {
    period: '2021 – 2022',
    role: 'UI/UX Designer',
    company: 'Company Name',
    type: 'work',
    description: [
      'Thiết kế toàn bộ luồng người dùng cho ứng dụng mobile',
      'Thực hiện user research và usability testing',
      'Tăng retention rate 25% sau khi redesign onboarding',
    ],
  },
  {
    period: '2020 – 2021',
    role: 'Junior UI Designer',
    company: 'Company Name',
    type: 'work',
    description: [
      'Thiết kế UI cho web và mobile theo brief của khách hàng',
      'Tạo prototype và hand-off cho developer',
    ],
  },
  {
    period: '2016 – 2020',
    role: 'Cử nhân Thiết kế Đồ họa',
    company: 'Tên trường',
    type: 'education',
    description: [
      'Chuyên ngành thiết kế truyền thông',
      'Tốt nghiệp loại Giỏi',
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
  coverColor: string // placeholder màu khi chưa có ảnh
  featured?: boolean
  problem: string
  process: { phase: string; description: string }[]
  outcomes: { label: string; value: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'mention-network',
    title: 'Mention Network',
    subtitle: 'Redesign toàn bộ luồng onboarding, tăng completion rate 40%',
    client: 'Client / Company Name',
    year: '2024',
    role: 'Lead UX Designer',
    duration: '3 tháng',
    tools: ['Figma', 'Maze', 'Miro'],
    tags: ['Mobile App', 'UX Research', 'Onboarding'],
    coverColor: '#1a0a2e',
    featured: true,
    problem: 'Người dùng bỏ qua bước onboarding khiến activation rate thấp. Cần redesign để tăng tỷ lệ hoàn thành.',
    process: [
      { phase: 'Research', description: 'User interview 12 người, phân tích drop-off funnel, competitor analysis.' },
      { phase: 'Define', description: 'Xác định pain point chính, tạo persona và user journey map.' },
      { phase: 'Design', description: 'Sketching, wireframe low-fi, prototype hi-fi trong Figma.' },
      { phase: 'Test', description: 'Usability testing 8 người, A/B test trên Maze, iterate 2 vòng.' },
    ],
    outcomes: [
      { label: 'Completion rate', value: '+40%' },
      { label: 'Time-to-activate', value: '-2 phút' },
      { label: 'Support tickets', value: '-30%' },
    ],
  },
  {
    id: 'geo-report',
    title: 'Geo Report',
    subtitle: 'Xây dựng design system từ đầu cho toàn bộ product suite',
    client: 'Internal / Company Name',
    year: '2023',
    role: 'Design System Lead',
    duration: '4 tháng',
    tools: ['Figma', 'Storybook', 'Notion'],
    tags: ['Design System', 'Web App', 'B2B'],
    coverColor: '#0a1a1a',
    featured: true,
    problem: 'Thiếu nhất quán giữa các sản phẩm, mỗi team tự thiết kế dẫn đến UI không đồng bộ.',
    process: [
      { phase: 'Audit', description: 'Audit toàn bộ UI hiện tại, lập danh sách component.' },
      { phase: 'Tokenize', description: 'Định nghĩa design token: màu, typography, spacing, shadow.' },
      { phase: 'Build', description: 'Xây dựng 60+ component trong Figma với variants đầy đủ.' },
      { phase: 'Rollout', description: 'Phối hợp với 3 team engineer để implement và tài liệu hoá.' },
    ],
    outcomes: [
      { label: 'Components', value: '60+' },
      { label: 'Design time', value: '-50%' },
      { label: 'Teams dùng', value: '4 teams' },
    ],
  },
  {
    id: 'whales-market',
    title: 'Whales Market',
    subtitle: 'Nghiên cứu và redesign dashboard analytics cho B2B SaaS',
    client: 'Client / Company Name',
    year: '2023',
    role: 'UX Researcher & Designer',
    duration: '2 tháng',
    tools: ['Figma', 'Hotjar', 'Lookback'],
    tags: ['Dashboard', 'Data Viz', 'B2B SaaS'],
    coverColor: '#0a0a1a',
    featured: true,
    problem: 'Người dùng không hiểu data trên dashboard, dẫn đến không tận dụng được tính năng cao cấp.',
    process: [
      { phase: 'Research', description: 'Session recording, contextual inquiry với 6 power user.' },
      { phase: 'Synthesize', description: 'Affinity mapping, xác định top 5 confusion point.' },
      { phase: 'Redesign', description: 'Reorg information architecture, thiết kế data viz mới.' },
      { phase: 'Validate', description: 'Prototype test với 10 user, đo task success rate.' },
    ],
    outcomes: [
      { label: 'Task success', value: '+55%' },
      { label: 'Feature adoption', value: '+35%' },
      { label: 'Churn rate', value: '-18%' },
    ],
  },
  {
    id: 'design-system-v2',
    title: 'Design System v2',
    subtitle: 'Xây dựng lại design system với dark mode và token-based theming',
    client: 'Internal Project',
    year: '2024',
    role: 'Design System Designer',
    duration: '5 tháng',
    tools: ['Figma', 'Tokens Studio', 'Notion'],
    tags: ['Design System', 'Tokens', 'Dark Mode'],
    coverColor: '#120a1e',
    featured: false,
    problem: 'Design system cũ không hỗ trợ dark mode và thiếu token structure rõ ràng.',
    process: [
      { phase: 'Audit', description: 'Review toàn bộ component library hiện tại.' },
      { phase: 'Token Design', description: 'Thiết kế semantic token system cho màu, spacing, typography.' },
      { phase: 'Build', description: 'Rebuild 80+ components với full dark/light mode support.' },
      { phase: 'Doc', description: 'Viết documentation và usage guidelines đầy đủ.' },
    ],
    outcomes: [
      { label: 'Components', value: '80+' },
      { label: 'Dev handoff time', value: '-60%' },
      { label: 'Design consistency', value: '100%' },
    ],
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    subtitle: 'Redesign trải nghiệm chuyển khoản và quản lý tài chính cá nhân',
    client: 'Fintech Startup',
    year: '2023',
    role: 'Product Designer',
    duration: '4 tháng',
    tools: ['Figma', 'ProtoPie', 'Maze'],
    tags: ['Mobile', 'Fintech', 'iOS'],
    coverColor: '#0a1020',
    featured: false,
    problem: 'Người dùng gặp khó khăn khi thực hiện giao dịch và không hiểu rõ tình trạng tài khoản.',
    process: [
      { phase: 'Research', description: 'Interview 15 người dùng banking app, phân tích pain point.' },
      { phase: 'IA', description: 'Restructure information architecture và navigation flow.' },
      { phase: 'Design', description: 'Hi-fi design cho iOS với micro-interactions.' },
      { phase: 'Test', description: 'Usability test, A/B test với 2 phiên bản chính.' },
    ],
    outcomes: [
      { label: 'Task completion', value: '+48%' },
      { label: 'Error rate', value: '-65%' },
      { label: 'NPS score', value: '+32' },
    ],
  },
  {
    id: 'ecommerce-redesign',
    title: 'E-Commerce Redesign',
    subtitle: 'Tối ưu checkout flow và product discovery cho platform thương mại điện tử',
    client: 'Retail Company',
    year: '2022',
    role: 'UX Designer',
    duration: '3 tháng',
    tools: ['Figma', 'Hotjar', 'Optimizely'],
    tags: ['E-Commerce', 'Web', 'Conversion'],
    coverColor: '#0a180a',
    featured: false,
    problem: 'Tỷ lệ cart abandonment cao tới 72%, checkout flow quá nhiều bước và phức tạp.',
    process: [
      { phase: 'Analytics', description: 'Phân tích funnel, session recording qua Hotjar.' },
      { phase: 'Research', description: 'Guerrilla testing với 8 người dùng tại cửa hàng.' },
      { phase: 'Redesign', description: 'Simplify checkout từ 5 bước xuống còn 2 bước.' },
      { phase: 'A/B Test', description: 'Deploy qua Optimizely, đo conversion sau 4 tuần.' },
    ],
    outcomes: [
      { label: 'Cart abandonment', value: '-28%' },
      { label: 'Conversion rate', value: '+22%' },
      { label: 'Revenue uplift', value: '+15%' },
    ],
  },
]
