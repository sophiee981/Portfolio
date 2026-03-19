import { Link } from 'react-router-dom'
import { caseStudies } from '@/data/content'

const featured = caseStudies.filter((cs) => cs.featured).slice(0, 3)

const yearRange = (() => {
  const years = featured.map((cs) => parseInt(cs.year))
  const min = Math.min(...years).toString().slice(-2)
  const max = Math.max(...years).toString().slice(-2)
  return `${min}-${max}`
})()

export default function FeaturedProjects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 md:px-8 py-20">

      {/* Section header */}
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-sm font-medium text-foreground">Selected works</h2>
        <span className="text-xs text-muted-foreground font-mono">{yearRange}</span>
      </div>

      {/* Stacked cards — light bg on dark page, clone Ezhil style */}
      <div className="flex flex-col gap-4">
        {featured.map((cs) => (
          <Link
            key={cs.id}
            to={`/case-study/${cs.id}`}
            className="group relative flex flex-col md:flex-row rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
            style={{ background: '#f2f2f0' }}
          >
            {/* LEFT: Info */}
            <div className="flex flex-col justify-between p-8 md:p-10 md:w-[44%] shrink-0">
              <div>
                <p className="text-sm font-medium text-neutral-700 leading-relaxed mb-6 max-w-[280px]">
                  {cs.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {cs.tags.map((tag) => (
                    <span key={tag}
                      className="text-xs font-medium text-neutral-500 border border-neutral-300 rounded-full px-3 py-1 bg-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2 key metrics */}
              {cs.outcomes.length >= 2 && (
                <div className="flex gap-10">
                  {cs.outcomes.slice(0, 2).map((o) => (
                    <div key={o.label}>
                      <p className="text-2xl font-bold text-neutral-900 tracking-tight">{o.value}</p>
                      <p className="text-xs text-neutral-400 mt-0.5 leading-snug max-w-[110px]">{o.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Cover/mockup */}
            <div className="relative flex-1 min-h-[240px] md:min-h-[280px] overflow-hidden">
              {/* Gradient bg */}
              <div className="absolute inset-0 rounded-r-2xl"
                style={{ background: `linear-gradient(145deg, ${cs.coverColor} 0%, #101014 100%)` }} />

              {/* Mockup frame placeholder */}
              <div className="absolute inset-5 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                <span className="text-3xl font-extrabold text-white/[0.07] select-none tracking-tighter text-center px-4">
                  {cs.title}
                </span>
              </div>

              {/* Shipped badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-neutral-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-white/60">
                shipped
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
