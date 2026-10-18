import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Stat from "../components/Stat";
import Globe from "../components/Globe";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  heroSlides,
  industries,
  method,
  perspectives,
  projects,
  services,
  stats,
} from "../data/content";
import { servicePlaces, serviceSentence } from "../data/geography";

export default function HomePage() {
  usePageTitle(
    "",
    "Global Business Services is an international consulting firm based in Tashkent, established in 2002. Current assignments are in Central Asia. The firm can also serve clients further afield."
  );
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [hoverPaused, setHoverPaused] = useState(false);
  const current = heroSlides[slide];

  useEffect(() => {
    if (paused || hoverPaused) return undefined;
    const timer = setInterval(() => {
      setSlide((n) => (n + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [paused, hoverPaused]);

  return (
    <>
      <section
        className="hero"
        onMouseEnter={() => setHoverPaused(true)}
        onMouseLeave={() => setHoverPaused(false)}
      >
        {heroSlides.map((item, index) => (
          <div
            key={item.title}
            className={`hero-media ${index === slide ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
            aria-hidden={index !== slide}
          />
        ))}
        <div className="hero-shade" />
        <div className="container hero-grid">
          <div className="hero-copy" key={current.title}>
            <p className="eyebrow light">{current.kicker}</p>
            <h1>{current.title}</h1>
            <p className="deck">{current.deck}</p>
            <div className="hero-actions">
              <Link className="btn" to="/projects">
                Selected work
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Speak with GBS
              </Link>
            </div>
          </div>
          <div className="hero-aside">
            <p>{current.caption}</p>
            <div className="hero-index">
              <div role="tablist" aria-label="Introduction">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.kicker}
                    role="tab"
                    aria-selected={index === slide}
                    className={index === slide ? "is-active" : ""}
                    onClick={() => setSlide(index)}
                  >
                    0{index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className={`hero-toggle${paused ? " is-paused" : ""}`}
          aria-label={paused ? "Play introduction" : "Pause introduction"}
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? (
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3.1 1.4 L10.2 6 L3.1 10.6 Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <rect x="2.3" y="1.6" width="2.3" height="8.8" />
              <rect x="7.4" y="1.6" width="2.3" height="8.8" />
            </svg>
          )}
        </button>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <Reveal>
            <p className="eyebrow">The firm</p>
            <h2>An international consultancy, based in Tashkent.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              Since 2002, Global Business Services has advised on agriculture and natural resources,
              healthcare, public utilities, and urban infrastructure. The work runs the full cycle:
              identification, design, implementation, monitoring, and evaluation.
            </p>
            <p>
              Clients stay because the advice is usable. Permanent staff carry the relationships.
              Associate experts — engineers, economists, architects, lawyers, finance, procurement,
              and information technology — join when an assignment needs them.
            </p>
            <Link className="text-link" to="/about">
              Read the firm’s story
            </Link>
          </Reveal>
        </div>
        <div className="container geo-stats">
          <div>
            <p className="eyebrow">Current assignments</p>
            <div className="stat-row">
              {stats.map((item) => (
                <Stat key={item.label} {...item} />
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Able to serve</p>
            <div className="stat-row">
              <Stat value={servicePlaces.length} label="Places beyond the current assignments" />
            </div>
            <p className="geo-places">{serviceSentence()}.</p>
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow light">Services</p>
            <h2>Advice along the whole utilities value chain.</h2>
            <Link className="text-link light" to="/services">
              All services
            </Link>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <Link className="service-card" to={`/services#${service.slug}`}>
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Selected assignments</p>
            <h2>Work that can be named.</h2>
            <Link className="text-link" to="/projects">
              Full list
            </Link>
          </div>
          <ul className="assignment-list">
            {projects.slice(0, 5).map((project) => (
              <li key={project.id}>
                <Link to={`/projects/${project.id}`}>
                  <span className="assignment-place">
                    {project.city}
                    <small>{project.country}</small>
                  </span>
                  <span className="assignment-title">
                    <strong>{project.title}</strong>
                    <em>{project.role}</em>
                  </span>
                  <span className="assignment-go" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Industries</p>
            <h2>Sectors where the firm is already known.</h2>
          </div>
          <div className="mosaic">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                to={`/industries#${industry.slug}`}
                className="mosaic-card"
                style={{ backgroundImage: `url(${industry.image})` }}
              >
                <span>
                  <strong>{industry.title}</strong>
                  <em>View practice</em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container method-grid">
          <div>
            <p className="eyebrow">How an assignment moves</p>
            <h2>Design is the beginning, not the product.</h2>
            <p className="lead">
              GBS is hired to stay. Identification without implementation is a brochure. Implementation
              without evaluation is a claim.
            </p>
          </div>
          <ol className="method">
            {method.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container region-layout">
          <div>
            <p className="eyebrow">Geography</p>
            <h2>Based in Tashkent. Working internationally.</h2>
            <p>
              The firm is based at 21 Khusnutdin Asomov Street. Current assignments are in
              Uzbekistan, Kazakhstan, Kyrgyzstan, and Tajikistan. GBS can also serve clients in{" "}
              {serviceSentence()}.
            </p>
            <Link className="text-link" to="/locations">
              Geography
            </Link>
          </div>
          <Globe />
        </div>
      </section>

      <section className="section">
        <div className="container perspective-grid">
          {perspectives.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <p className="eyebrow light">Tashkent</p>
          <h2>If the project is real, the conversation can start this week.</h2>
          <Link className="btn" to="/contact">
            Write to GBS
          </Link>
        </div>
      </section>
    </>
  );
}
