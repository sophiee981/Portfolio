import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/content'

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Timeline', href: '/#timeline' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('/#') && isHome) {
      const id = href.slice(2)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          {profile.name.split(' ')[0]}<span>.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
          <a href={profile.cvUrl} className="navbar__cv" download>
            Download CV
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__burger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
          <a href={profile.cvUrl} className="navbar__mobile-cv" download>
            Download CV
          </a>
        </div>
      )}
    </header>
  )
}
