import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import { profile } from '@/data/content'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const firstName = profile.name.split(' ')[0]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-lg font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
          >
            {firstName}
            <span className="text-[var(--portfolio-accent)]">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className={cn(
                  'text-sm font-medium transition-colors',
                  location.pathname === to
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {label}
              </Link>
            ))}
            <a
              href={profile.cvUrl}
              download
              className="text-sm font-semibold px-4 py-1.5 rounded-lg border border-border hover:border-[var(--portfolio-accent-border)] hover:bg-[var(--portfolio-accent-dim)] transition-all"
            >
              CV
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className={cn(
                  'py-3 text-base font-medium border-b border-border/50 transition-colors',
                  location.pathname === to
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {label}
              </Link>
            ))}
            <a
              href={profile.cvUrl}
              download
              className="mt-3 text-sm font-semibold text-[var(--portfolio-accent)]"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
