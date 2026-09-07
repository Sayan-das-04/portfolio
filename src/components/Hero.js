import "./Hero.css";
// Add your actual profile image here
import profileImg from "../images/image.png";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container container">
        {/* Left Content */}
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">
            Sayan <span>Das</span>
          </h1>
          <h2 className="hero-title">
            B.Tech IT Student & Full-Stack Developer
          </h2>

          <p className="hero-description">
            I build modern web applications using React, Node.js and MongoDB,
            and I'm continuously improving my problem-solving skills with Java.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Projects <span>→</span>
            </a>
            <a
              href="/resume.pdf"
              download="Sayan_Das_Resume.pdf"
              className="btn-secondary"
            >
              Download Resume <span>↓</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Sayan-das-04"
              target="_blank"
              rel="noreferrer"
            >
              🐙
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              in
            </a>
            <a href="mailto:sayandas90298@gmail.com">✉</a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-glow-ring">
            <img
              src={profileImg}
              alt="Sayan Das"
              className="hero-profile-img"
            />
          </div>

          {/* Floating Glass Card */}
          <div className="floating-code-card">
            <span className="code-icon">&lt;/&gt;</span>
            <p>
              Build.
              <br />
              Learn.
              <br />
              Ship.
            </p>
            <div className="card-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
