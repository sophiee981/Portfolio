import { profile } from '../data/content'

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        {/* Available badge */}
        {profile.available && (
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for work
          </div>
        )}

        {/* Heading */}
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        {/* CTAs */}
        <div className="hero__actions">
          <button className="btn-primary" onClick={scrollToWork}>
            View Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a href={`mailto:${profile.email}`} className="btn-ghost">
            Get in touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll-indicator">
          <span />
        </div>
      </div>

      {/* Background decoration */}
      <div className="hero__glow" aria-hidden="true" />
    </section>
  )
}
