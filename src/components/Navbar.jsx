import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Github, Linkedin, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">OH</span>
          <span>Owais<span className="accent">.</span></span>
        </Link>

        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mobile-socials">
            <a href="https://github.com/OwaisCodes" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={19} />
            </a>
            <a href="https://www.linkedin.com/in/owaiscodes/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={19} />
            </a>
          </div>
        </nav>

        <div className="nav-actions">
          <a className="icon-link" href="https://github.com/OwaisCodes" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <a className="icon-link" href="https://www.linkedin.com/in/owaiscodes/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={19} />
          </a>
          <Link className="nav-cta" to="/contact">Let's Talk</Link>
        </div>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}