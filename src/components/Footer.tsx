import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__left">
          © {year} {profile.name}. Designed & built with care.
        </p>
        <p className="footer__right">
          Made with React + Vite
        </p>
      </div>
    </footer>
  )
}
