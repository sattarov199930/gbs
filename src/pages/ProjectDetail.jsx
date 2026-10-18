import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../hooks/usePageTitle";
import { projects } from "../data/content";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  usePageTitle(project ? project.title : "Project", project ? project.summary : "That project is not on this site.");

  if (!project) return <NotFound />;

  const others = projects.filter((item) => item.id !== project.id && item.sector === project.sector).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${project.country} · ${project.sector}`}
        title={project.title}
        deck={project.summary}
        image={
          project.sector === "Solid waste"
            ? "/images/waste-yard.jpg"
            : project.sector.startsWith("Water")
              ? "/images/water-works.jpg"
              : "/images/engineering-plans.jpg"
        }
      />
      <section className="section">
        <div className="container detail-layout">
          <article>
            <p className="eyebrow">Assignment</p>
            <h2>What GBS was asked to do</h2>
            <p className="lead">{project.role}.</p>
            <p>{project.summary}</p>
            {project.facts?.length ? (
              <>
                <dl className="project-facts">
                  {project.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="fact-source">
                  These figures describe the financed project in the public record. They are not a
                  claim about a fee, and not a result beyond what that record states.
                </p>
              </>
            ) : (
              <p>
                The description follows the firm’s public project note. It is a record of the
                mandate.
              </p>
            )}
            <Link className="text-link" to="/projects">
              Back to all projects
            </Link>
          </article>
          <aside className="fact-card">
            <dl>
              <div>
                <dt>Country</dt>
                <dd>{project.country}</dd>
              </div>
              <div>
                <dt>Place</dt>
                <dd>{project.city}</dd>
              </div>
              <div>
                <dt>Sector</dt>
                <dd>{project.sector}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
            </dl>
            <Link className="btn btn-dark" to="/contact">
              Ask about similar work
            </Link>
          </aside>
        </div>
        {others.length > 0 ? (
          <div className="container related">
            <p className="eyebrow">In the same sector</p>
            <ul className="assignment-list">
              {others.map((item) => (
                <li key={item.id}>
                  <Link to={`/projects/${item.id}`}>
                    <span className="assignment-place">
                      {item.city}
                      <small>{item.country}</small>
                    </span>
                    <span className="assignment-title">
                      <strong>{item.title}</strong>
                      <em>{item.role}</em>
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
      </section>
    </>
  );
}
