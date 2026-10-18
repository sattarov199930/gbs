import { Link } from "react-router-dom";
import Logo from "./Logo";
import { company, financiers } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Logo />
          <p className="footer-lead">
            Quality, and the sustainability of what gets built.
          </p>
        </div>
        <div>
          <p className="footer-label">Visit</p>
          <address>
            {company.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
        </div>
        <div>
          <p className="footer-label">Talk</p>
          <ul className="footer-list">
            {company.phones.map((phone) => (
              <li key={phone.number}>
                {phone.label === "Fax" ? (
                  <span>
                    {phone.label} {phone.number}
                  </span>
                ) : (
                  <a href={`tel:${phone.number.replace(/\s/g, "")}`}>
                    {phone.label} {phone.number}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-label">Practice</p>
          <ul className="footer-list">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/capabilities">Capabilities</Link></li>
            <li><Link to="/locations">Geography</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
      </div>
      <div className="container financier-row" aria-label="International financiers of GBS assignments">
        {financiers.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Global Business Services. Tashkent.</p>
        <p className="footer-legal">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms-of-service">Terms</Link>
          <Link to="/cookie-policy">Cookies</Link>
        </p>
      </div>
    </footer>
  );
}
