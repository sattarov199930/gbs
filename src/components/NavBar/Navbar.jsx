import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/common/logo.svg";
import "./Navbar.css"

function MainNavBar() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => setMobileOpen(!isMobileOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Add your search logic here
  };

  const navLinks = [
    { to: "/Services", label: "Services" },
    { to: "/Industries", label: "Industries" },
    { to: "/Capabilities", label: "Capabilities" },
    { to: "/AboutUs", label: "About Us" },
    { to: "/Careers", label: "Careers" },
    { to: "/Contact", label: "Contact" },
  ];

  return (
    <nav className="main_navbar">
      <Link to="/" className="navbar-logo-link" onClick={() => setMobileOpen(false)}>
        <div className="navbar-logo-container">
          <img src={Logo} alt="GBS Logo" className="navbar-logo" />
          <span className="navbar-logo-text">Global Business Services</span>
        </div>
      </Link>

      <div className="navbar-right">
        {/* Utility Bar */}
        <div className="utility-bar">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <svg className="search-icon-left" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>

        {/* Main Navigation Links */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          &#9776;
        </button>
        <ul className={`navbar-links ${isMobileOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="nav-link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MainNavBar;