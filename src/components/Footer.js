import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="footer-logo">SD</span>
          <div className="brand-text">
            <h3>Sayan Das</h3>
            <p>B.Tech IT Student | Full-Stack Developer</p>
          </div>
        </div>

        <div className="footer-center">
          <p>© 2026 Sayan Das. Built with React.</p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a
              href="https://github.com/Sayan-das-04"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:sayandas90298@gmail.com">Email</a>
          </div>
          <span className="signature">Better Everyday</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
