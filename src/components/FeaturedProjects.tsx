import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { caseStudies } from '@/data/content'

const featured = caseStudies.filter((cs) => cs.featured).slice(0, 3)

export default function FeaturedProjects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 md:px-8 py-24">

      {/* Section header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--portfolio-accent)' }}>
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground">
            Featured Projects
          </h2>
        </div>
        <Link
          to="/projects"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group"
        >
          View all
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featured.map((cs, i) => (
          <Link
            key={cs.id}
            to={`/case-study/${cs.id}`}
            className={[
              'group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card',
              'hover:border-[var(--portfolio-accent-border)] transition-all duration-300 hover:-translate-y-1',
              i === 0 ? 'md:col-span-2' : '',
            ].join(' ')}
          >
            {/* Cover */}
            <div
              className={[
                'flex items-center justify-center shrink-0 relative overflow-hidden',
                i === 0 ? 'h-56 md:h-72' : 'h-48',
              ].join(' ')}
              style={{ background: cs.coverColor }}
            >
              {/* Placeholder initial */}
              <span className="text-6xl font-extrabold tracking-tighter opacity-10 select-none text-white">
                {cs.title.charAt(0)}
              </span>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-sm font-semibold text-white flex items-center gap-2">
                  View Case Study <ArrowRight size={14} />
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3 p-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {cs.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-2xs border-[var(--portfolio-accent-border)] text-[var(--portfolio-accent)] bg-[var(--portfolio-accent-dim)]">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h3 className="text-lg font-bold tracking-tight text-foreground leading-snug">
                {cs.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {cs.subtitle}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto pt-2 border-t border-border/50">
                <span>{cs.client}</span>
                <span>·</span>
                <span>{cs.year}</span>
                <span>·</span>
                <span>{cs.role}</span>
              </div>
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
          View all projects <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}
