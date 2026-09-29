import { ArrowRight, Bot, Braces, Code2, Layers3, ServerCog } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Frontend Development",
    description: "Responsive, modern interfaces built with React and a strong focus on usability, performance, and maintainable component architecture.",
    items: ["React applications", "Responsive UI", "Dashboards & admin panels", "API integration"],
  },
  {
    icon: ServerCog,
    number: "02",
    title: "Backend Development",
    description: "Reliable server-side systems and APIs designed to support real-world business workflows and scalable applications.",
    items: ["Node.js & Express", "NestJS APIs", "REST APIs", "Database integration"],
  },
  {
    icon: Layers3,
    number: "03",
    title: "Full Stack Development",
    description: "End-to-end application development, connecting polished frontend experiences with robust backend logic and data layers.",
    items: ["MERN applications", "Authentication & authorization", "Business workflows", "Production-ready architecture"],
  },
  {
    icon: Bot,
    number: "04",
    title: "AI Applications",
    description: "Practical AI-powered applications and workflow integrations that help turn repetitive processes and ideas into useful software.",
    items: ["AI-powered features", "Automation workflows", "API integrations", "Intelligent assistants"],
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Software solutions built around your needs."
        description="From a focused frontend to a complete product, I can help design and develop the technical side of your idea."
      />

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map(({ icon: Icon, ...service }) => (
              <article className="service-card" key={service.title}>
                <div className="service-top">
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon"><Icon size={22} /></div>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container service-process">
          <div>
            <span className="eyebrow">How I work</span>
            <h2>Clear process. Clean execution.</h2>
          </div>
          <div className="process-list">
            <div><span>01</span><div><strong>Understand</strong><p>Clarify the goal, users, workflow, and technical requirements.</p></div></div>
            <div><span>02</span><div><strong>Build</strong><p>Develop the solution with clean architecture and practical engineering decisions.</p></div></div>
            <div><span>03</span><div><strong>Refine</strong><p>Test, improve, and polish the product for a smooth user experience.</p></div></div>
            <div><span>04</span><div><strong>Deliver</strong><p>Prepare the application for deployment and future iteration.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mini-cta">
          <div>
            <span className="eyebrow"><Braces size={15} /> Have a project?</span>
            <h2>Tell me what you're trying to build.</h2>
          </div>
          <Link className="button primary" to="/contact">Contact me <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}