import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { caseStudies } from '../data/content'

export default function CaseStudy() {
  const { id } = useParams()
  const cs = caseStudies.find((c) => c.id === id)

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!cs) return <Navigate to="/" replace />

  const currentIndex = caseStudies.findIndex((c) => c.id === id)
  const next = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <main className="case-study">
      {/* Back link */}
      <div className="container">
        <Link to="/" className="case-study__back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All Work
        </Link>
      </div>

      {/* Hero banner */}
      <div
        className="case-study__hero"
        style={{ background: `linear-gradient(135deg, ${cs.coverColor} 0%, #0a0a0f 100%)` }}
      >
        <div className="container case-study__hero-inner">
          <div className="case-study__tags">
            {cs.tags.map((tag) => (
              <span key={tag} className="work-card__tag">{tag}</span>
            ))}
          </div>
          <h1 className="case-study__title">{cs.title}</h1>
          <p className="case-study__subtitle">{cs.subtitle}</p>

          {/* Cover image placeholder */}
          <div className="case-study__cover-placeholder">
            {/* Thay bằng <img src="..." alt="..." /> khi có ảnh mockup */}
            <p>[ Cover mockup image ]</p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Overview */}
        <section className="case-study__overview">
          <div className="case-study__overview-grid">
            {[
              { label: 'Client', value: cs.client },
              { label: 'My Role', value: cs.role },
              { label: 'Duration', value: cs.duration },
              { label: 'Year', value: cs.year },
              { label: 'Tools', value: cs.tools.join(', ') },
            ].map((item) => (
              <div key={item.label} className="case-study__overview-item">
                <p className="case-study__overview-label">{item.label}</p>
                <p className="case-study__overview-value">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section className="case-study__section">
          <h2 className="case-study__section-title">Problem Statement</h2>
          <p className="case-study__body">{cs.problem}</p>

          {/* Problem image placeholder */}
          <div className="case-study__img-placeholder">
            [ Research / Problem visualization image ]
          </div>
        </section>

        {/* Process */}
        <section className="case-study__section">
          <h2 className="case-study__section-title">Design Process</h2>
          <div className="case-study__process">
            {cs.process.map((step, i) => (
              <div key={i} className="case-study__process-step">
                <div className="case-study__process-number">0{i + 1}</div>
                <div>
                  <h3 className="case-study__process-phase">{step.phase}</h3>
                  <p className="case-study__body">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Process image placeholders */}
          <div className="case-study__img-row">
            <div className="case-study__img-placeholder">[ Wireframes / Sketches ]</div>
            <div className="case-study__img-placeholder">[ User Journey Map ]</div>
          </div>

          <div className="case-study__img-placeholder case-study__img-placeholder--tall">
            [ Hi-fi Prototype / Final Design ]
          </div>
        </section>

        {/* Outcomes */}
        <section className="case-study__section">
          <h2 className="case-study__section-title">Outcomes & Results</h2>
          <div className="case-study__outcomes">
            {cs.outcomes.map((o) => (
              <div key={o.label} className="case-study__outcome-card">
                <p className="case-study__outcome-value">{o.value}</p>
                <p className="case-study__outcome-label">{o.label}</p>
              </div>
            ))}
          </div>
          <p className="case-study__body" style={{ marginTop: '32px' }}>
            {/* Thêm mô tả chi tiết về kết quả tại đây */}
            Thêm mô tả về kết quả và học được gì từ project này.
          </p>
        </section>
      </div>

      {/* Next Case Study */}
      <div className="case-study__next">
        <div className="container">
          <p className="case-study__next-label">Next Case Study</p>
          <Link to={`/case-study/${next.id}`} className="case-study__next-link">
            <span>{next.title}</span>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}
