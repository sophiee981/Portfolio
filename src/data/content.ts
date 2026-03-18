// ─────────────────────────────────────────────────
//  PLACEHOLDER DATA — thay thế bằng thông tin thật
// ─────────────────────────────────────────────────

export const profile = {
  name: 'Your Name',
  role: 'UI/UX Designer',
  tagline: 'Tôi thiết kế những trải nghiệm có ý nghĩa.',
  bio: 'UI/UX Designer với 3 năm kinh nghiệm, chuyên về product design và user research. Tôi tin rằng design tốt xuất phát từ sự hiểu biết sâu sắc về người dùng.',
  available: true,
  email: 'hello@yourname.com',
  linkedin: 'https://linkedin.com/in/yourname',
  behance: 'https://behance.net/yourname',
  dribbble: 'https://dribbble.com/yourname',
  twitter: 'https://x.com/yourname',
  cvUrl: '/cv.pdf',
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
    id: 'project-one',
    title: 'Project One Title',
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
    id: 'project-two',
    title: 'Project Two Title',
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
    id: 'project-three',
    title: 'Project Three Title',
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
]
