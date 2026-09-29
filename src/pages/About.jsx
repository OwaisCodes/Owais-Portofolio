import { ArrowRight, CheckCircle2, Code2, GraduationCap, Layers3, Server, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const strengths = [
  "Full-stack feature development",
  "Scalable fintech and banking applications",
  "REST APIs and backend systems",
  "Responsive, production-ready React interfaces",
  "Data-heavy workflows and dashboards",
  "Continuous learning and problem solving",
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="Developer focused on useful, scalable software."
        description="A closer look at my background, approach, and the kind of engineering work I enjoy."
      />

      <section className="section">
        <div className="container about-layout">
          <div className="about-main">
            <span className="eyebrow">My story</span>
            <h2>Building across the stack, with a fintech mindset.</h2>
            <div className="about-copy">
              <p>
                I'm a MERN Stack Developer with a Bachelor's degree in Computer Science and two years of professional experience building software for the fintech industry. I work at a fintech firm, where I design and develop scalable, modern banking applications used to handle real financial workflows.
              </p>
              <p>
                I work across the full stack, using MongoDB, Express.js, React, and Node.js to take features from idea to production. I enjoy solving complex problems, collaborating with cross-functional teams, and continuously learning new technologies to improve the way I build.
              </p>
              <p>
                I'm always open to new opportunities and interesting projects. Feel free to explore my work below or get in touch.
              </p>
            </div>
            <Link className="button primary" to="/contact">Let's work together <ArrowRight size={17} /></Link>
          </div>

          <aside className="about-side">
            <div className="info-card">
              <div className="info-icon"><GraduationCap size={20} /></div>
              <span>Education</span>
              <strong>Bachelor's in Computer Science</strong>
            </div>
            <div className="info-card">
              <div className="info-icon"><Layers3 size={20} /></div>
              <span>Core stack</span>
              <strong>MongoDB · Express · React · Node</strong>
            </div>
            <div className="info-card">
              <div className="info-icon"><Server size={20} /></div>
              <span>Industry</span>
              <strong>Fintech & Banking</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">What I bring</span>
              <h2>Practical engineering, not just code.</h2>
            </div>
            <Code2 size={30} className="heading-icon" />
          </div>

          <div className="strength-grid">
            {strengths.map((item) => (
              <div className="strength-item" key={item}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mini-cta">
          <div>
            <span className="eyebrow"><Sparkles size={15} /> Next chapter</span>
            <h2>Let's build something meaningful.</h2>
          </div>
          <Link className="button secondary" to="/contact">Get in touch <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}