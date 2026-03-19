import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import { profile } from '@/data/content'

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About',    to: '/about' },
  { label: 'Resume',   to: profile.cvUrl, external: true },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const firstName = profile.name.split(' ')[0]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between gap-8">

          {/* ── Logo: Name + role tagline — từ wireframe ── */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            {/* Circle icon placeholder */}
            <span className="size-7 rounded-full border-2 border-[var(--portfolio-accent)] flex items-center justify-center">
              <span
                className="text-xs font-extrabold"
                style={{ color: 'var(--portfolio-accent)' }}
              >
                {firstName.charAt(0)}
              </span>
            </span>
            {/* Name + role stacked */}
            <div className="leading-none">
              <p className="text-sm font-bold tracking-tight text-foreground group-hover:text-[var(--portfolio-accent)] transition-colors">
                {firstName}
              </p>
              <p className="text-2xs text-muted-foreground mt-0.5">{profile.role}</p>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map(({ label, to, external }) =>
              external ? (
                <a
                  key={label}
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={to}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    location.pathname === to
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {label}
                </Link>
              )
            )}

            {/* LinkedIn CTA button — từ wireframe */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold px-4 py-1.5 rounded-lg border border-border hover:border-[var(--portfolio-accent-border)] hover:bg-[var(--portfolio-accent-dim)] hover:text-[var(--portfolio-accent)] transition-all text-foreground"
            >
              LinkedIn
            </a>
          </nav>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, to, external }) =>
              external ? (
                <a
                  key={label}
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-base font-medium border-b border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={to}
                  className={cn(
                    'py-3 text-base font-medium border-b border-border/50 transition-colors',
                    location.pathname === to
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {label}
                </Link>
              )
            )}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-semibold text-[var(--portfolio-accent)]"
            >
              LinkedIn ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
