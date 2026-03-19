import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { caseStudies } from '@/data/content'

// Show top 6 — đúng 2 hàng × 3 cột theo wireframe
const projects = caseStudies.slice(0, 6)

export default function FeaturedProjects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 md:px-8 pb-24">

      {/* Section header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em] mb-2"
            style={{ color: 'var(--portfolio-accent)' }}
          >
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground">
            My Projects
          </h2>
        </div>
        <Link
          to="/projects"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          View all
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 3-column uniform grid — từ wireframe */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((cs) => (
          <Link
            key={cs.id}
            to={`/case-study/${cs.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-[var(--portfolio-accent-border)] transition-all duration-300 hover:-translate-y-1"
          >
            {/* Thumbnail */}
            <div
              className="relative h-44 flex items-center justify-center overflow-hidden shrink-0"
              style={{ background: cs.coverColor }}
            >
              <span className="text-8xl font-extrabold tracking-tighter text-white/[0.06] select-none">
                {cs.title.charAt(0)}
              </span>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-white border border-white/30 rounded-full px-3 py-1.5">
                  View Project <ArrowRight size={11} />
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2 p-4">
              <div className="flex flex-wrap gap-1">
                {cs.tags.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-2xs border-[var(--portfolio-accent-border)] text-[var(--portfolio-accent)] bg-[var(--portfolio-accent-dim)] px-2 py-0"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-sm font-bold tracking-tight text-foreground leading-snug">
                {cs.title}
              </h3>
              <p className="text-xs text-muted-foreground">{cs.year} · {cs.role}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile "View all" */}
      <div className="mt-8 flex justify-center sm:hidden">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          View all projects <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  )
}
