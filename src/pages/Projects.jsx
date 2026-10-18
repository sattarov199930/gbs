import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../hooks/usePageTitle";
import { projects } from "../data/content";

const sectors = ["All", ...new Set(projects.map((p) => p.sector))];
const countries = ["All", ...new Set(projects.map((p) => p.country))];

export default function Projects() {
  usePageTitle(
    "Projects",
    "Named water, sanitation, and solid waste assignments in Uzbekistan, Kazakhstan, Kyrgyzstan, and Tajikistan, with the public figures that exist for them."
  );
  const [params, setParams] = useSearchParams();
  const [sector, setSector] = useState("All");
  const country = params.get("country") || "All";

  const visible = useMemo(
    () =>
      projects.filter(
        (project) =>
          (sector === "All" || project.sector === sector) &&
          (country === "All" || project.country === country)
      ),
    [sector, country]
  );

  const setCountry = (value) => {
    const next = new URLSearchParams(params);
    if (value === "All") next.delete("country");
    else next.set("country", value);
    setParams(next);
  };

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="More than fifty IFI-financed projects. These are the ones we publish."
        deck="Water, sanitation, and solid waste assignments across Uzbekistan, Kazakhstan, Kyrgyzstan, and Tajikistan, plus reviews prepared for international practice."
        image="/images/water-works.jpg"
      />
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            <label>
              Country
              <select value={country} onChange={(e) => setCountry(e.target.value)}>
                {countries.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <div className="chip-row" aria-label="Filter by sector">
              {sectors.map((item) => (
                <button
                  key={item}
                  className={`chip ${sector === item ? "is-active" : ""}`}
                  onClick={() => setSector(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <p className="filter-count">
            {visible.length} assignment{visible.length === 1 ? "" : "s"}
          </p>
          <ul className="project-cards">
            {visible.map((project) => (
              <li key={project.id}>
                <Link to={`/projects/${project.id}`}>
                  <p className="eyebrow">{project.sector}</p>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <span>
                    {project.city} · {project.country}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {visible.length === 0 ? (
            <p className="empty">No published assignment matches that filter.</p>
          ) : null}
        </div>
      </section>
    </>
  );
}
