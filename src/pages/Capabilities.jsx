import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../hooks/usePageTitle";
import { capabilities, company, services } from "../data/content";

export default function Capabilities() {
  usePageTitle(
    "Capabilities",
    "Teams for policy, design, approval, and cost. Associate experts are chosen for education, technical experience, project practice, and communication."
  );

  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Integrated teams for policy, design, approval, and cost."
        deck="GBS helps clients unlock value in assets, apply technology to a real operating problem, and improve performance through organisation and programme management."
        image="/images/engineering-plans.jpg"
      />
      <section className="section">
        <div className="container capability-grid">
          {capabilities.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
          <p className="capability-note">
            Where an assignment can be taken is listed on the <Link to="/locations">geography page</Link>.
          </p>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container split">
          <div>
            <p className="eyebrow">People</p>
            <h2>A core staff, and a bench that is chosen carefully.</h2>
            <p>
              Associate experts are selected for education, technical experience, project practice,
              and the ability to communicate with a client who is under pressure. The arrangement
              gives GBS reach into industrial solutions, and gives the associates a way to build
              investment-project experience.
            </p>
            <p>
              Staff expertise runs from finance, accounting, and procurement through economics and
              management consulting to management information and civil engineering — water,
              heating, medical equipment, roads, and transport among them.
            </p>
          </div>
          <div>
            <p className="eyebrow">Standing with financiers</p>
            <ul className="register-list">
              {company.registrations.map((item) => (
                <li key={item.body}>
                  <strong>{item.body}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What the team is asked to produce</p>
            <h2>Eight lines of work. One standard of finish.</h2>
          </div>
          <div className="mini-grid">
            {services.map((service) => (
              <Link key={service.slug} to={`/services#${service.slug}`}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
