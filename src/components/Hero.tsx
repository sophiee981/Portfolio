import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/content'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-svh flex flex-col justify-center overflow-hidden pt-16">

      {/* Purple glow blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full animate-glow"
        style={{
          background: 'radial-gradient(circle, var(--portfolio-accent-dim) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8 py-20">

        {/* Available badge */}
        {profile.available && (
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5">
            <span className="size-2 rounded-full bg-green-400 animate-pulse-dot" />
            <span className="text-xs font-semibold text-green-400 tracking-wide">
              Available for work
            </span>
          </div>
        )}

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground leading-none mb-4">
          {profile.name}
        </h1>

        {/* Role */}
        <p
          className="text-xl sm:text-2xl font-semibold mb-6"
          style={{ color: 'var(--portfolio-accent)' }}
        >
          {profile.role}
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mb-12">
          {profile.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center">
          <Button asChild size="lg" className="bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)]/80 text-white border-0 gap-2">
            <Link to="/projects">
              View Work
              <ArrowRight size={16} />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} />
              Get in touch
            </a>
          </Button>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap gap-8 sm:gap-12">
          {[
            { value: '3+', label: 'Years experience' },
            { value: '20+', label: 'Projects delivered' },
            { value: '10+', label: 'Happy clients' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-extrabold tracking-tight text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-2xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div
          className="w-px h-12 animate-scroll-line"
          style={{ background: 'linear-gradient(to bottom, var(--portfolio-accent), transparent)' }}
        />
      </div>
    </section>
  )
}
