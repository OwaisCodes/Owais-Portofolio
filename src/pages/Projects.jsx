import { ArrowUpRight, Database, Gauge, Layers3, Radio, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";

const projects = [
  {
    title: "Reconciliation Automation System",
    category: "Fintech / Banking",
    description: "A banking reconciliation platform built to process large volumes of records, automate mismatch detection, and provide operational reporting.",
    tags: ["NestJS", "React.js", "SQL Server"],
    icon: Database,
    metrics: ["500K+ records", "Bulk Excel processing", "Virtualized UI"],
  },
  {
    title: "Orbit Fintech App",
    category: "Fintech Application",
    description: "A secure transaction management application with real-time data processing and a scalable MERN architecture.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    icon: ShieldCheck,
    metrics: ["Transaction workflows", "Real-time processing", "Scalable architecture"],
  },
  {
    title: "Drone Simulator",
    category: "Computer Science FYP",
    description: "A real-time drone simulation environment featuring virtual flight control, navigation, telemetry, and physics-based movement.",
    tags: ["Simulation", "Telemetry", "Physics"],
    icon: Radio,
    metrics: ["Real-time simulation", "Flight control", "Navigation"],
  },
];

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work & engineering experience."
        description="A selection of applications and systems that reflect my experience across fintech, full-stack development, and real-time software."
      />

      <section className="section">
        <div className="container">
          <div className="project-list">
            {projects.map(({ icon: Icon, ...project }, index) => (
              <article className="case-card" key={project.title}>
                <div className="case-number">0{index + 1}</div>
                <div className="case-icon"><Icon size={24} /></div>
                <div className="case-body">
                  <span className="eyebrow">{project.category}</span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="metric-row">
                    {project.metrics.map(metric => <span key={metric}><Gauge size={14} /> {metric}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="project-note">
            <div>
              <span className="eyebrow">More on GitHub</span>
              <h2>Explore the code and experiments.</h2>
              <p>Visit my GitHub profile for repositories, experiments, and future projects.</p>
            </div>
            <a className="button primary" href="https://github.com/OwaisCodes" target="_blank" rel="noreferrer">
              Open GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}