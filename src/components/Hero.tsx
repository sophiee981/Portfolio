import { profile } from '@/data/content'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh flex items-center overflow-hidden pt-16"
    >
      {/* Purple glow blob — top-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/3 -left-1/4 w-[55vw] h-[55vw] rounded-full animate-glow"
        style={{
          background:
            'radial-gradient(circle, var(--portfolio-accent-dim) 0%, transparent 68%)',
        }}
      />

      <div className="relative z-10 w-full mx-auto max-w-5xl px-6 md:px-8 py-20">
        {/* ── 2-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col">
            {/* Available badge */}
            {profile.available && (
              <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-green-400 animate-pulse-dot" />
                <span className="text-xs font-semibold text-green-400 tracking-wide">
                  Available for work
                </span>
              </div>
            )}

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-[1.08] mb-5">
              {profile.tagline}
            </h1>

            {/* Accent underline — từ wireframe */}
            <div
              className="h-1 w-24 rounded-full mb-8"
              style={{ background: 'var(--portfolio-accent)' }}
            />

            {/* Tool badges */}
            <div className="flex flex-wrap gap-2.5">
              {profile.toolBadges.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-lg border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground tracking-tight transition-colors hover:border-[var(--portfolio-accent-border)] hover:bg-[var(--portfolio-accent-dim)] hover:text-[var(--portfolio-accent)] cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — overlapping photo boxes ── */}
          <div className="relative hidden md:flex justify-center items-center h-80">
            {/* Back box — rotated slightly */}
            <div
              className="absolute w-52 h-64 rounded-2xl border border-border bg-card"
              style={{
                transform: 'rotate(6deg) translate(16px, 8px)',
                background: 'var(--card)',
              }}
            />
            {/* Front box — main avatar placeholder */}
            <div
              className="relative w-52 h-64 rounded-2xl border border-[var(--portfolio-accent-border)] overflow-hidden flex items-end"
              style={{
                background:
                  'linear-gradient(160deg, #1a0a2e 0%, #0a0a0f 100%)',
              }}
            >
              {/* Glow inside box */}
              <div
                className="absolute top-0 left-0 w-full h-full opacity-40"
                style={{
                  background:
                    'radial-gradient(ellipse at 60% 20%, var(--portfolio-accent-dim), transparent 70%)',
                }}
              />
              {/* Initial letter */}
              <span
                className="absolute inset-0 flex items-center justify-center text-7xl font-extrabold tracking-tighter opacity-[0.07] select-none"
                style={{ color: 'var(--portfolio-accent)' }}
              >
                {profile.name.charAt(0)}
              </span>
              {/* Bottom label */}
              <div className="relative z-10 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-xs font-semibold text-white/70 uppercase tracking-widest">
                  {profile.role}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-2xs text-muted-foreground uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div
          className="w-px h-10 animate-scroll-line"
          style={{
            background:
              'linear-gradient(to bottom, var(--portfolio-accent), transparent)',
          }}
        />
      </div>
    </section>
  )
}
