import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link className="brand footer-brand" to="/">
              <span className="brand-mark">OH</span>
              <span>Owais<span className="accent">.</span></span>
            </Link>
            <p className="footer-copy">
              MERN Stack Developer building modern, scalable software for real-world problems.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span className="footer-label">Navigate</span>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <span className="footer-label">Connect</span>
              <a href="mailto:owaishasan124@gmail.com"><Mail size={15} /> Email</a>
              <a href="https://github.com/OwaisCodes" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
              <a href="https://www.linkedin.com/in/owaiscodes/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Owais Hasan. All rights reserved.</span>
          <span className="footer-status"><span className="status-dot" /> Available for opportunities</span>
        </div>
      </div>
    </footer>
  );
}