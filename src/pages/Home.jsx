import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2, Database, ExternalLink, Github, Linkedin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg";
// import {
//   ArrowDown,
//   ArrowRight,
//   ArrowUpRight,
//   BriefcaseBusiness,
//   Code2,
//   Database,
//   Github,
//   Linkedin,
//   Sparkles
// } from "lucide-react";
const highlights = [
  { value: "2+", label: "Years Experience" },
  { value: "Fintech", label: "Industry Experience" },
  { value: "Full Stack", label: "Development Focus" },
];

const projects = [
  {
    title: "Reconciliation Automation System",
    text: "A banking reconciliation platform focused on bulk processing, mismatch detection, reporting, and high-volume data visualization.",
    tags: ["NestJS", "React", "SQL Server"],
  },
  {
    title: "Orbit Fintech App",
    text: "A scalable fintech application for secure transaction management, real-time processing, and an intuitive operational dashboard.",
    tags: ["MERN", "Fintech", "Real-time"],
  },
  {
    title: "Drone Simulator",
    text: "A real-time drone simulation project featuring virtual flight control, navigation, telemetry, and physics-based movement.",
    tags: ["Simulation", "Telemetry", "FYP"],
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow"><span className="pulse-dot" /> MERN Stack Developer</span>
            <h1>Building software that <span>solves real problems.</span></h1>
            <p className="hero-lead">
              I build modern, scalable web applications and fintech solutions across the full stack — from polished React interfaces to reliable backend systems.
            </p>

            <div className="hero-buttons">
              <Link className="button primary" to="/projects">Explore My Work <ArrowRight size={17} /></Link>
              <Link className="button secondary" to="/contact">Let's Connect</Link>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/OwaisCodes" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/owaiscodes/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-glow" />
            <div className="portrait-card">
              <img src={profile} alt="Owais Hasan" />
              <div className="portrait-caption">
                <div>
                  <strong>Owais Hasan</strong>
                  <span>Fintech & Web Developer</span>
                </div>
                <span className="portrait-badge">Available</span>
              </div>
            </div>
            <div className="floating-card floating-card-top">
              <Code2 size={19} />
              <span><b>Full Stack</b><small>React · Node · APIs</small></span>
            </div>
            <div className="floating-card floating-card-bottom">
              <Database size={19} />
              <span><b>Fintech</b><small>Scalable systems</small></span>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#intro"><ArrowDown size={16} /> Scroll to explore</a>
      </section>

      <section id="intro" className="section section-soft">
        <div className="container">
          <div className="intro-grid">
            <div>
              <span className="eyebrow">A little about me</span>
              <h2>From idea to production, I enjoy building the whole thing.</h2>
            </div>
            <div>
              <p>
                I'm a MERN Stack Developer with a Bachelor's degree in Computer Science and two years of professional experience building software for the fintech industry.
              </p>
              <Link className="text-link" to="/about">More about me <ArrowRight size={16} /></Link>
            </div>
          </div>

          <div className="stats-grid">
            {highlights.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2>Projects built for real use.</h2>
            </div>
            <Link className="text-link" to="/projects">View all projects <ArrowRight size={16} /></Link>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-icon"><BriefcaseBusiness size={20} /></div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tag-row">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <Link to="/projects" className="project-link">View case study <ArrowUpRight size={16} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div>
              <span className="eyebrow"><Sparkles size={15} /> Open to opportunities</span>
              <h2>Have an idea worth building?</h2>
              <p>Let's turn it into a clean, reliable, and scalable product.</p>
            </div>
            <Link className="button primary" to="/contact">Start a conversation <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}