import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-box">SD</span>
          <div className="logo-text">
            <h2>Sayan Das</h2>
            <p>Developer</p>
          </div>
        </a>

        {/* Desktop / Mobile Menu */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            <span>01.</span> Home
          </a>
          <a href="#about" onClick={closeMenu}>
            <span>02.</span> About
          </a>
          <a href="#skills" onClick={closeMenu}>
            <span>03.</span> Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            <span>04.</span> Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            <span>05.</span> Contact
          </a>
        </div>

        {/* Contact Button */}
        <a href="#contact" className="nav-button" onClick={closeMenu}>
          Let's Talk <span>↗</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
