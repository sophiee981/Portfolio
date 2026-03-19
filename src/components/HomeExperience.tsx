import { timeline } from '@/data/content'

const workItems = timeline.filter((t) => t.type === 'work')

export default function HomeExperience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 md:px-8 py-20">

      {/* Huge uppercase heading — clone Ezhil style */}
      <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase text-foreground tracking-tight mb-10">
        Experience
      </h2>

      {/* Experience cards */}
      <div className="flex flex-col gap-3">
        {workItems.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border p-6 md:p-8"
            style={{ background: '#0d0d0d' }}
          >
            {/* Top: Company + Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-7">
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                {item.company}
              </h3>
              <span className="text-xs text-muted-foreground font-mono shrink-0">{item.period}</span>
            </div>

            {/* 3-col: ROLE | KEY PROJECTS | SCOPE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

              {/* ROLE */}
              <div>
                <p className="text-2xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">
                  Role
                </p>
                <p className="text-sm font-semibold text-foreground leading-snug">{item.role}</p>
              </div>

              {/* KEY PROJECTS */}
              <div>
                <p className="text-2xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">
                  Key Projects
                </p>
                <ul className="flex flex-col gap-2">
                  {item.description.map((line, j) => (
                    <li key={j} className="text-xs text-muted-foreground leading-relaxed">{line}</li>
                  ))}
                </ul>
              </div>

              {/* SCOPE — use item.scope if available, else fallback */}
              <div>
                <p className="text-2xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-3">
                  Scope
                </p>
                <div className="flex flex-wrap gap-2">
                  {((item as any).scope ?? ['UI Design', 'UX Research', 'Prototyping']).map((s: string) => (
                    <span key={s}
                      className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
