import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <p className="contact-tag">
          <span>✧</span> GET IN TOUCH
        </p>
        <h2>
          Let's build something <span>great together.</span>
        </h2>
        <p className="contact-description">
          Have a project idea, a question, or just want to connect? Feel free to
          reach out.
        </p>
      </div>

      <div className="contact-content container">
        {/* Left Side: Links */}
        <div className="neon-contact-info">
          <h3>Let's connect</h3>
          <p>
            I'm always open to discussing new opportunities, interesting
            projects, and creative ideas.
          </p>

          <div className="contact-links-column">
            <a href="mailto:sayandas90298@gmail.com">
              <span className="icon-box">✉</span> sayandas90298@gmail.com
            </a>
            <a
              href="https://github.com/Sayan-das-04"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-box">🐙</span> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-box">in</span> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side: Status Card */}
        <div className="neon-contact-card">
          <div className="status-icon-wrapper">
            <span className="status-icon">✦</span>
          </div>
          <p className="status-sub">Currently open to</p>
          <h3>Learning, Building & Collab</h3>
          <span className="status-desc">
            Always looking for opportunities to grow and create.
          </span>

          <div className="availability-indicator">
            <span className="pulse-dot"></span>
            Available for opportunities
          </div>
          <div className="card-bg-glow"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
