import { timeline } from '../data/content'

export default function Timeline() {
  return (
    <section className="section timeline" id="timeline">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-heading">Career Timeline</h2>

        <div className="timeline__list">
          {timeline.map((item, i) => (
            <div key={i} className={`timeline__item timeline__item--${item.type}`}>
              {/* Line + dot */}
              <div className="timeline__track">
                <div className="timeline__dot" />
                {i < timeline.length - 1 && <div className="timeline__line" />}
              </div>

              {/* Content */}
              <div className="timeline__content">
                <div className="timeline__meta">
                  <span className="timeline__period">{item.period}</span>
                  <span className="timeline__type-badge">
                    {item.type === 'work' ? 'Work' : 'Education'}
                  </span>
                </div>
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__company">{item.company}</p>
                <ul className="timeline__desc">
                  {item.description.map((line, j) => (
                    <li key={j}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
