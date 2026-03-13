import './App.css'

const skills = [
  'React', 'TypeScript', 'JavaScript', 'HTML/CSS',
  'Tailwind CSS', 'Node.js', 'Git', 'Figma',
]

const projects = [
  {
    title: 'Project One',
    description: 'Mô tả ngắn về project này. Những gì bạn đã xây dựng và học được.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    description: 'Mô tả ngắn về project này. Những gì bạn đã xây dựng và học được.',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    description: 'Mô tả ngắn về project này. Những gì bạn đã xây dựng và học được.',
    tech: ['Vue.js', 'Firebase', 'CSS'],
    demo: '#',
    github: '#',
  },
]

function App() {
  return (
    <div className="portfolio">
      {/* Header / Nav */}
      <header className="nav">
        <span className="nav-logo">Sophie.</span>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-section" id="home">
        <p className="hero-greeting">Xin chào, tôi là</p>
        <h1 className="hero-name">Sophie Nguyen</h1>
        <p className="hero-role">Frontend Developer</p>
        <p className="hero-bio">
          Tôi yêu thích xây dựng những giao diện đẹp và trải nghiệm người dùng tốt.
          Đam mê với React, TypeScript và những công nghệ web hiện đại.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">Xem Projects</a>
          <a href="#contact" className="btn-secondary">Liên hệ</a>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-avatar">
            <div className="avatar-placeholder">S</div>
          </div>
          <div className="about-text">
            <p>
              Tôi là một Frontend Developer với đam mê tạo ra những trải nghiệm web
              đẹp và hiệu quả. Tôi luôn học hỏi những công nghệ mới và áp dụng vào
              các dự án thực tế.
            </p>
            <p>
              Ngoài coding, tôi thích thiết kế UI/UX, đọc sách về công nghệ, và
              đóng góp cho các dự án open source.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <h2 className="section-title">Contact</h2>
        <p className="contact-desc">
          Bạn muốn hợp tác hay chỉ muốn nói chuyện? Đừng ngại liên hệ với tôi!
        </p>
        <div className="contact-links">
          <a href="mailto:sophie@example.com" className="contact-link">
            <span>Email</span>
            <span>sophie@example.com</span>
          </a>
          <a href="https://github.com/sophiee981" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span>GitHub</span>
            <span>sophiee981</span>
          </a>
          <a href="https://linkedin.com/in/sophie" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span>LinkedIn</span>
            <span>Sophie Nguyen</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Sophie Nguyen. Built with React + Vite.</p>
      </footer>
    </div>
  )
}

export default App
