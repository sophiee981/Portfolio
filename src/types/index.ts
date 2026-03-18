export type ProjectCategory = 'UI-UX' | 'Branding' | 'Motion'

export type Project = {
  id: string
  title: string
  thumbnail: string
  category: ProjectCategory
  description: string
  year: string
  tags: string[]
  featured?: boolean
}

export type Experience = {
  role: string
  company: string
  duration: string
  type: 'work' | 'education'
  description: string[]
}
