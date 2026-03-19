import { profile } from '../data/content'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-heading contact__heading">
          Let's work<br />
          together.
        </h2>
        <p className="contact__desc">
          Open to full-time and freelance opportunities.
          Don't hesitate to reach out — I'd love to collaborate!
        </p>

        <a href={`mailto:${profile.email}`} className="contact__email">
          {profile.email}
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <div className="contact__links">
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social">
              LinkedIn
            </a>
          )}
          {profile.behance && (
            <a href={profile.behance} target="_blank" rel="noopener noreferrer" className="contact__social">
              Behance
            </a>
          )}
          {profile.dribbble && (
            <a href={profile.dribbble} target="_blank" rel="noopener noreferrer" className="contact__social">
              Dribbble
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
