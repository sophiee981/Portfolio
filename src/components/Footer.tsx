import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '@/data/content'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const socials = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Behance',  href: profile.behance },
  { label: 'Dribbble', href: profile.dribbble },
  { label: 'X',        href: profile.twitter },
].filter((s) => s.href)

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const year = new Date().getFullYear()

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer>
      {/* ── Playful CTA section — clone Ezhil style ── */}
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">

          {/* Left: Headline */}
          <p className="text-2xl md:text-3xl font-bold text-foreground leading-snug tracking-tight">
            You've seen my work,<br />that's all you need!
          </p>

          {/* Right: Action cards grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Interview (CTA) */}
            <a
              href={`mailto:${profile.email}`}
              className="col-span-2 rounded-2xl border border-border p-6 flex items-center gap-4 group hover:border-[var(--portfolio-accent-border)] transition-colors"
              style={{ background: '#111' }}
            >
              <span className="text-3xl">🚀</span>
              <div>
                <p className="text-sm font-semibold text-green-400 group-hover:underline">Let's connect</p>
                <p className="text-xs text-muted-foreground mt-0.5">Drop me a message</p>
              </div>
            </a>

            {/* Save for later */}
            <div className="rounded-2xl border border-border p-5 flex flex-col items-center gap-2"
              style={{ background: '#111' }}>
              <span className="text-3xl">📖</span>
              <p className="text-xs font-medium text-muted-foreground">Save for later</p>
            </div>

            {/* Reject */}
            <div className="rounded-2xl border border-border p-5 flex flex-col items-center gap-2"
              style={{ background: '#111' }}>
              <span className="text-3xl">🗑️</span>
              <p className="text-xs font-medium text-red-400">Reject</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer columns ── */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Col 1: Profile */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-gradient-to-br from-teal-800 to-slate-900 border border-border flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white/60">{profile.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{profile.name}</p>
                  <p className="text-xs text-muted-foreground">{profile.role}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
                {profile.bio.slice(0, 80)}...
              </p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs text-muted-foreground font-mono">{profile.email}</span>
                <button
                  onClick={copyEmail}
                  className="text-xs font-semibold text-foreground border border-border rounded-full px-3 py-1 hover:bg-card transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy my mail'}
                </button>
              </div>
            </div>

            {/* Col 2: Navigate */}
            <div>
              <p className="text-xs font-semibold text-foreground mb-4">Navigate</p>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Social */}
            <div>
              <p className="text-xs font-semibold text-foreground mb-4">Social</p>
              <ul className="flex flex-col gap-2.5">
                {socials.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                      {label}
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="opacity-40">
                        <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <p className="mt-10 text-xs text-muted-foreground border-t border-border/50 pt-6">
            © {year} {profile.name}. Designed & built with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
