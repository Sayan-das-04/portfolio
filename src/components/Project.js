import "./Project.css";

// Ensure these image paths match your actual folder structure
import wanderlistImg from "../images/Wanderlist.png";
import simonSaysImg from "../images/SimonSays.png";

const projects = [
  {
    title: "Wanderlist",
    description:
      "A full-stack travel listing platform where users can explore destinations, create listings, and share travel experiences.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Sayan-das-04/Wanderlist",
    demo: "https://lnkd.in/gu7Tn65E",
    image: wanderlistImg,
  },
  {
    title: "Simon Says Game",
    description:
      "An interactive memory game with random sequence generation, level progression, high score tracking, and button animations.",
    tech: ["HTML", "CSS", "JavaScript", "DOM"],
    github: "https://lnkd.in/g7aJVbG7",
    demo: "https://lnkd.in/gT5tVuzY",
    image: simonSaysImg,
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container container">
        {/* Header Block */}
        <div className="projects-header">
          <p className="projects-tag">
            <span>✧</span> My Work
          </p>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p className="projects-desc">
            Here are some of the projects I've built, showcasing my skills in
            full-stack development and problem solving.
          </p>
          <a
            href="https://github.com/Sayan-das-04"
            target="_blank"
            rel="noreferrer"
            className="view-all-link"
          >
            View All Projects <span>→</span>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="neon-project-card" key={project.title}>
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                />
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="external-icon"
                >
                  ↗
                </a>
              </div>

              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="card-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="card-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-github"
                  >
                    <span className="icon">🐙</span> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-demo"
                  >
                    Live Demo <span className="icon">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
