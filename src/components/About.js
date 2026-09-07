import "./About.css";

function About() {
  return (
    <section className="bento-section" id="about">
      <div className="container">
        <div className="bento-grid">
          {/* 1. About Me Card */}
          <div className="bento-card about-card">
            <div className="bento-card-content">
              <p className="bento-tag">About Me</p>
              <h3>A little about me</h3>
              <p className="bento-desc">
                I'm Sayan Das, a B.Tech Information Technology student at
                Kalyani Government Engineering College. I enjoy building web
                applications, learning new technologies and solving programming
                problems. My current focus is on strengthening my full-stack
                development skills and improving my DSA knowledge with Java.
              </p>
              <p className="bento-highlight">
                Passionate about technology, always curious to learn.
              </p>
            </div>
            <div className="about-list">
              <ul>
                <li>
                  <span>🎓</span> B.Tech in Information Technology
                </li>
                <li>
                  <span>🏫</span> Kalyani Government Engineering College
                </li>
                <li>
                  <span>📅</span> Graduation: 2028
                </li>
                <li>
                  <span>💻</span> Full-Stack Development
                </li>
                <li>
                  <span>☕</span> DSA with Java
                </li>
                <li>
                  <span>📍</span>Kolkata, West Bengal, India
                </li>
              </ul>
            </div>
          </div>

          {/* 2. Education Card */}
          <div className="bento-card edu-card">
            <p className="bento-tag">Education</p>
            <h3>My Academic Journey</h3>

            <div className="timeline">
              <span className="year">2024</span>
              <div className="timeline-line"></div>
              <span className="year">2028</span>
            </div>

            <div className="edu-details">
              <h4>B.Tech in Information Technology</h4>
              <p>Kalyani Government Engineering College</p>
              <span className="status-badge">Currently Pursuing</span>
            </div>
            <div className="bg-icon">🎓</div>
          </div>

          {/* 3. Exploring Next Card */}
          <div className="bento-card explore-card">
            <div className="explore-content">
              <p className="bento-tag">Currently Learning</p>
              <h3>What I'm Exploring Next</h3>
              <p className="bento-desc">
                I'm continuously improving my skills and exploring new
                technologies for better opportunities and growth.
              </p>
            </div>
            <div className="explore-pills">
              <span>Data Structures & Algorithms</span>
              <span>Advanced JavaScript</span>
              <span>React Development</span>
              <span>Backend Development</span>
              <span>AI & Modern Web Tech</span>
            </div>
          </div>

          {/* 4. Contact Card */}
          <div className="bento-card contact-card" id="contact">
            <p className="bento-tag">Get In Touch</p>
            <h3>Let's Connect</h3>
            <p className="bento-desc">
              Have a project idea, internship opportunity or just want to
              connect? Feel free to reach out. I'm always open to learning and
              collaborating.
            </p>
            <div className="contact-links">
              <a
                href="https://github.com/Sayan-das-04"
                target="_blank"
                rel="noreferrer"
              >
                <span>🐙</span> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span>in</span> LinkedIn
              </a>
              <a href="mailto:sayandas90298@gmail.com">
                <span>✉</span> Email Me
              </a>
            </div>
            <div className="bg-icon">✉️</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
