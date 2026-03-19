import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { timeline } from '@/data/content'

// Chỉ show experience (work), tối đa 3 items
const workItems = timeline.filter((t) => t.type === 'work').slice(0, 3)

export default function HomeExperience() {
  return (
    <section
      id="experience"
      className="border-t border-border mx-auto max-w-5xl px-6 md:px-8 py-20"
    >
      {/* 2-column: label trái — timeline phải — theo wireframe */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-16">

        {/* LEFT — label */}
        <div className="flex flex-col gap-3 md:pt-1">
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em]"
            style={{ color: 'var(--portfolio-accent)' }}
          >
            Career
          </p>
          <h2 className="text-2xl font-extrabold tracking-tighter text-foreground leading-tight">
            Experiences
          </h2>
          <Link
            to="/about"
            className="hidden md:inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group mt-2"
          >
            Full timeline
            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* RIGHT — experience list */}
        <div className="flex flex-col divide-y divide-border">
          {workItems.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5 first:pt-0">
              {/* Period — monospace, muted */}
              <span className="shrink-0 font-mono text-xs text-muted-foreground w-28">
                {item.period}
              </span>

              {/* Role + Company */}
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-foreground tracking-tight">
                  {item.role}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: 'var(--portfolio-accent)' }}
                >
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Mobile "Full timeline" link */}
      <div className="mt-8 flex md:hidden">
        <Link
          to="/about"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          Full timeline <ArrowRight size={11} />
        </Link>
      </div>
    </section>
  )
}
