import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import { profile } from '@/data/content'

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/contact' },
  { label: 'Resume',   to: profile.cvUrl, external: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const firstName = profile.name.split(' ')[0]

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-background/70 backdrop-blur-md' : 'bg-transparent',
    )}>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-3 h-14 items-center">

          {/* ── COL 1: Name + Role ── */}
          <Link to="/" className="flex flex-col leading-none group w-fit">
            <span className="text-sm font-semibold text-foreground tracking-tight group-hover:opacity-70 transition-opacity">
              {firstName}
            </span>
            <span className="text-xs text-muted-foreground mt-0.5">{profile.role}</span>
          </Link>

          {/* ── COL 2: Pill nav (centered) ── */}
          <nav className="hidden md:flex justify-center">
            <div className="flex items-center gap-0.5 border border-border rounded-full px-1.5 py-1 bg-background/20 backdrop-blur-sm">
              {navLinks.map(({ label, to, external }) => {
                const isActive = location.pathname === to
                return external ? (
                  <a
                    key={label}
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={label}
                    to={to}
                    className={cn(
                      'px-3 py-1 text-xs font-medium transition-all rounded-full',
                      isActive
                        ? 'border border-border text-foreground bg-background/50'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {label}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* ── COL 3: Social (right aligned) ── */}
          <div className="hidden md:flex justify-end items-center gap-2">
            <span className="text-xs text-muted-foreground">Social:</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-foreground hover:opacity-60 transition-opacity flex items-center gap-1"
            >
              LinkedIn
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-60">
                <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <div className="flex md:hidden justify-end">
            <button
              className="p-1.5 text-muted-foreground hover:text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, to, external }) =>
              external ? (
                <a key={label} href={to} target="_blank" rel="noopener noreferrer"
                  className="py-3 text-sm border-b border-border/40 text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </a>
              ) : (
                <Link key={label} to={to}
                  className={cn('py-3 text-sm border-b border-border/40 transition-colors',
                    location.pathname === to ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground')}>
                  {label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
