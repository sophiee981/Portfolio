import { profile, skills } from '../data/content'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <div className="about__grid">
          {/* Avatar */}
          <div className="about__avatar-wrap">
            <div className="about__avatar">
              {/* Thay bằng <img src="..." alt="..." /> khi có ảnh thật */}
              <span>{profile.name.charAt(0)}</span>
            </div>
            {/* Social links */}
            <div className="about__socials">
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="about__social-link">
                  LinkedIn
                </a>
              )}
              {profile.behance && (
                <a href={profile.behance} target="_blank" rel="noopener noreferrer" className="about__social-link">
                  Behance
                </a>
              )}
              {profile.dribbble && (
                <a href={profile.dribbble} target="_blank" rel="noopener noreferrer" className="about__social-link">
                  Dribbble
                </a>
              )}
            </div>
          </div>

          {/* Text + Skills */}
          <div className="about__content">
            <h2 className="about__heading">
              Xin chào, tôi là {profile.name.split(' ')[0]} —<br />
              designer đam mê tạo ra<br />
              những trải nghiệm có ý nghĩa.
            </h2>
            <p className="about__bio">{profile.bio}</p>

            {/* Skills grid */}
            <div className="about__skills">
              {skills.map((group) => (
                <div key={group.category} className="about__skill-group">
                  <p className="about__skill-category">{group.category}</p>
                  <ul className="about__skill-list">
                    {group.items.map((skill) => (
                      <li key={skill} className="about__skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
