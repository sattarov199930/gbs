import { Link, useLocation, useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../hooks/usePageTitle";
import { industries, projects } from "../data/content";

export default function Industries() {
  usePageTitle(
    "Industries",
    "Water, solid waste, power, agriculture, healthcare, and urban infrastructure. The published record is concentrated where the assignments have been."
  );
  const location = useLocation();
  const navigate = useNavigate();
  const active = Math.max(
    0,
    industries.findIndex((item) => `#${item.slug}` === location.hash)
  );
  const current = industries[active];

  const choose = (index) => navigate(`/industries#${industries[index].slug}`, { replace: true });

  const related = projects.filter((project) => project.sector === current.title).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Economic and social fields, taken one sector at a time."
        deck="Agriculture and natural resources. Healthcare. Public utilities. Urban infrastructure. The firm’s record is concentrated where Central Asian cities actually spend."
        image="/images/city-dusk.jpg"
      />
      <section className="section">
        <div className="container" id={current.slug}>
          <div className="chip-row" role="tablist" aria-label="Industries">
            {industries.map((industry, index) => (
              <button
                key={industry.slug}
                role="tab"
                aria-selected={index === active}
                className={`chip ${index === active ? "is-active" : ""}`}
                onClick={() => choose(index)}
              >
                {industry.title}
              </button>
            ))}
          </div>
          <article className="industry-feature" key={current.slug}>
            <img src={current.image} alt="" />
            <div>
              <p className="eyebrow">{current.title}</p>
              <h2>{current.summary}</h2>
              <ul className="point-list">
                {current.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
          {related.length > 0 ? (
            <div className="related">
              <p className="eyebrow">Related assignments</p>
              <ul className="assignment-list">
                {related.map((project) => (
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
          ) : null}
        </div>
      </section>
    </>
  );
}
