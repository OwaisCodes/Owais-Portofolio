import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "owaishasan124@gmail.com",
    href: "mailto:owaishasan124@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/OwaisCodes",
    href: "https://github.com/OwaisCodes",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/owaiscodes",
    href: "https://www.linkedin.com/in/owaiscodes/",
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what you're building."
        description="Have a project, freelance opportunity, or simply want to connect? Reach out through any of the channels below."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-copy">
            <div className="contact-intro">
              <div className="contact-icon"><MessageCircle size={24} /></div>
              <span className="eyebrow">Start a conversation</span>
              <h2>Good ideas usually start with a simple message.</h2>
              <p>
                I'm always open to new opportunities and interesting projects. Email me directly or connect with me on GitHub or LinkedIn.
              </p>
            </div>

            <div className="contact-links">
              {contactLinks.map(({ icon: Icon, ...item }) => (
                <a className="contact-link" href={item.href} key={item.label} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                  <span className="contact-link-icon"><Icon size={18} /></span>
                  <span><small>{item.label}</small><strong>{item.value}</strong></span>
                  <ArrowUpRight size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-card">
            <span className="eyebrow">Quick contact</span>
            <h3>Send me an email</h3>
            <p>
              The fastest way to reach me is by email. Click below and your email client will open with my address ready.
            </p>
            <a className="button primary full-width" href="mailto:owaishasan124@gmail.com?subject=Project%20Inquiry">
              <Mail size={17} /> Email Owais
            </a>
            <div className="contact-divider"><span>or connect</span></div>
            <div className="contact-mini-links">
              <a href="https://github.com/OwaisCodes" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/owaiscodes/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}