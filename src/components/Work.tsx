import { Link } from 'react-router-dom'
import { caseStudies } from '../data/content'

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <p className="section-label">Selected Work</p>
        <h2 className="section-heading">Case Studies</h2>

        <div className="work__grid">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.id}
              to={`/case-study/${cs.id}`}
              className={`work-card${i === 0 ? ' work-card--featured' : ''}`}
            >
              {/* Cover placeholder — replace with <img> when image is ready */}
              <div
                className="work-card__cover"
                style={{ background: cs.coverColor }}
              >
                <div className="work-card__cover-placeholder">
                  <span>{cs.title.charAt(0)}</span>
                </div>
              </div>

              {/* Info */}
              <div className="work-card__info">
                <div className="work-card__tags">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="work-card__tag">{tag}</span>
                  ))}
                </div>
                <h3 className="work-card__title">{cs.title}</h3>
                <p className="work-card__subtitle">{cs.subtitle}</p>

                <div className="work-card__meta">
                  <span>{cs.client}</span>
                  <span>·</span>
                  <span>{cs.year}</span>
                  <span>·</span>
                  <span>{cs.role}</span>
                </div>

                <span className="work-card__cta">
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
