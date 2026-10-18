import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { industries, searchContent, services } from "../data/content";

const links = [
  { to: "/services", label: "Services", menu: "services" },
  { to: "/industries", label: "Industries", menu: "industries" },
  { to: "/projects", label: "Projects" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
];

const starters = [
  { type: "Service", title: "Financial & economic advisory", href: "/services#financial-advisory", text: "Tariffs, cost of service, due diligence." },
  { type: "Industry", title: "Water supply & sanitation", href: "/industries#water", text: "The centre of the practice." },
  { type: "Project", title: "Solid waste in Samarkand", href: "/projects/samarkand-swm", text: "Uzbekistan · integrated household waste." },
  { type: "Location", title: "Tashkent", href: "/contact", text: "21 Khusnutdin Asomov Street." },
];

const menus = {
  services: { label: "services", to: "/services", items: services },
  industries: { label: "industries", to: "/industries", items: industries },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(null);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const closeTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
    setSearchOpen(false);
    setQuery("");
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", open || searchOpen);
    return () => document.body.classList.remove("nav-locked");
  }, [open, searchOpen]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!searchOpen) return undefined;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 160);
    const onKey = (event) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [searchOpen]);

  const results = query.trim() ? searchContent(query) : starters;
  const closeSearch = () => setSearchOpen(false);
  const hoverable = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const showMenu = (id) => {
    window.clearTimeout(closeTimer.current);
    setMenu(id);
  };
  const hideMenu = () => {
    if (!hoverable()) return;
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenu(null), 160);
  };
  const closeMenu = () => {
    if (!hoverable()) return;
    window.clearTimeout(closeTimer.current);
    setMenu(null);
  };

  return (
    <header
      className={`site-header ${scrolled || open || searchOpen || menu ? "is-solid" : ""} ${searchOpen ? "is-searching" : ""} ${menu ? "is-menu" : ""}`}
      onMouseLeave={hideMenu}
    >
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="nav-bar">
        <Link to="/" className="brand-link" aria-label="Global Business Services, home" onClick={closeSearch}>
          <Logo />
        </Link>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((link) =>
            link.menu ? (
              <div
                key={link.to}
                className={`nav-item ${menu === link.menu ? "is-open" : ""}`}
                onMouseEnter={() => {
                  if (hoverable()) showMenu(link.menu);
                }}
              >
                <button
                  type="button"
                  className="nav-link"
                  aria-expanded={menu === link.menu}
                  onClick={() => showMenu(link.menu)}
                >
                  {link.label}
                  <span className="caret" aria-hidden="true" />
                </button>
                <div className="dropdown">
                  <div className="dropdown-panel">
                    <ul>
                      {menus[link.menu].items.map((item) => (
                        <li key={item.slug}>
                          <Link to={`${link.to}#${item.slug}`} onClick={() => setOpen(false)}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link className="dropdown-all" to={link.to} onClick={() => setOpen(false)}>
                          All {menus[link.menu].label}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
                onMouseEnter={closeMenu}
              >
                {link.label}
              </NavLink>
            )
          )}
          <Link to="/contact" className="btn btn-small nav-cta" onMouseEnter={closeMenu}>
            Contact
          </Link>
        </nav>

        <div className="nav-tools">
          <button
            className="icon-btn"
            aria-label={searchOpen ? "Close search" : "Search the site"}
            aria-expanded={searchOpen}
            onClick={() => {
              setOpen(false);
              setMenu(null);
              setSearchOpen((value) => !value);
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              {searchOpen ? (
                <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <>
                  <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M16 16.5 20 20.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </>
              )}
            </svg>
          </button>
          <button
            className={`menu-toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => {
              setSearchOpen(false);
              setOpen((value) => !value);
            }}
          >
            <span />
            <span />
          </button>
        </div>

        <div className={`search-layer ${searchOpen ? "is-open" : ""}`}>
          <form onSubmit={(event) => event.preventDefault()} role="search">
            <label htmlFor="site-search" className="sr-only">
              Search
            </label>
            <input
              ref={inputRef}
              id="site-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search services, projects, cities"
              autoComplete="off"
              tabIndex={searchOpen ? 0 : -1}
            />
          </form>
          <div className="search-suggest" aria-live="polite">
            <p className="search-hint">{query.trim() ? "Matches" : "Start typing, or open a frequent page"}</p>
            <ul className="search-results">
              {results.length === 0 ? (
                <li className="search-empty">Nothing matches that yet.</li>
              ) : (
                results.map((row) => (
                  <li key={row.href + row.title}>
                    <Link to={row.href} onClick={closeSearch} tabIndex={searchOpen ? 0 : -1}>
                      <em>{row.type}</em>
                      <strong>{row.title}</strong>
                      <span>{row.text}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
      <button
        className="search-backdrop"
        aria-label="Close search"
        tabIndex={searchOpen ? 0 : -1}
        onClick={closeSearch}
      />
    </header>
  );
}
