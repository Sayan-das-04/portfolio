import "./Skills.css";
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql, SiC } from "react-icons/si";

const skills = [
  { name: "Java", level: 75, icon: <FaJava color="#f89820" /> },
  { name: "JavaScript", level: 80, icon: <SiJavascript color="#F7DF1E" /> },
  { name: "React", level: 75, icon: <FaReact color="#61DAFB" /> },
  { name: "Node.js", level: 70, icon: <FaNodeJs color="#339933" /> },
  { name: "MongoDB", level: 75, icon: <SiMongodb color="#47A248" /> },
  { name: "MySQL", level: 70, icon: <SiMysql color="#4479A1" /> },
  { name: "Git", level: 75, icon: <FaGitAlt color="#F05032" /> },
  { name: "C", level: 65, icon: <SiC color="#A8B9CC" /> },
  { name: "Python (Basic)", level: 50, icon: <FaPython color="#3776AB" /> },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <p>MY TECH STACK</p>
        <h2>Skills & Abilities</h2>
        <span>Technologies I use to build modern web applications.</span>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div
              className="skill-circle"
              style={{
                "--progress": `${skill.level * 3.6}deg`,
              }}
            >
              <div className="skill-inner">
                <div className="skill-logo">{skill.icon}</div>
                <strong>{skill.level}%</strong>
              </div>
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
