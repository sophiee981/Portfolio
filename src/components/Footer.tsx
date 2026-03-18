import { profile } from '@/data/content'

const socials = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Behance', href: profile.behance },
  { label: 'Dribbble', href: profile.dribbble },
  { label: 'X', href: profile.twitter },
].filter((s) => s.href)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="text-xs text-muted-foreground">
          © {year} {profile.name}. Designed & built with care.
        </p>

        <nav className="flex items-center gap-5">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  )
}
