import { profile } from '@/data/content'

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-svh flex flex-col overflow-hidden">

      {/* ── Teal mesh background ── */}
      <div className="absolute inset-0 hero-bg" aria-hidden="true" />

      {/* ── Subtle vertical grid lines ── */}
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />

      {/* ── Content: pushed to bottom ── */}
      <div className="relative z-10 flex flex-col flex-1 mx-auto w-full max-w-6xl px-6 md:px-8 pt-14">

        {/* Spacer pushes content down */}
        <div className="flex-1" />

        {/* ── Main content ── */}
        <div className="pb-20">

          {/* Avatar */}
          <div className="mb-6">
            <div className="size-10 rounded-full border-2 border-white/20 bg-gradient-to-br from-teal-800 to-slate-900 overflow-hidden flex items-center justify-center">
              {/* Replace with <img src="..." /> when real photo available */}
              <span className="text-sm font-bold text-white/60 select-none">
                {profile.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-4">
            Hey, I'm {profile.name.split(' ')[1] || profile.name.split(' ')[0]}.
          </h1>

          {/* Mixed-color subtext — clone Ezhil style */}
          <p className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-foreground">I specialize in taking products from </span>
            <span className="text-foreground/30">zero to one</span>
            <br />
            <span className="text-foreground">shaping </span>
            <span className="text-foreground/30">B2B</span>
            <span className="text-foreground"> and </span>
            <span className="text-foreground/30">B2C</span>
            <span className="text-foreground"> web & mobile applications</span>
            <br />
            <span className="text-foreground">over the past 3+ years to drive business </span>
            <span className="text-foreground/30">impact.</span>
          </p>

          {/* ── Bottom bar ── */}
          <div className="mt-12 flex items-end justify-between border-t border-white/10 pt-5">
            <div className="flex flex-col gap-0.5">
              <p className="text-xs text-muted-foreground">
                Currently designing at{' '}
                <a href="#" className="text-green-400 hover:underline font-medium">
                  {profile.currentCompany || 'Company Name'}
                </a>
              </p>
              <p className="text-xs text-muted-foreground">{profile.location || 'Based in Vietnam'}</p>
            </div>

            <button
              onClick={scrollToWork}
              className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              See selected works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                className="group-hover:translate-y-0.5 transition-transform">
                <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
