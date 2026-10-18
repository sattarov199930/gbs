import { Link, useLocation, useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../hooks/usePageTitle";
import { method, services } from "../data/content";

export default function Services() {
  usePageTitle(
    "Services",
    "Financial, institutional, technical, and implementation advice for utilities, ministries, and the financiers behind them."
  );
  const location = useLocation();
  const navigate = useNavigate();
  const current = services.find((service) => `#${service.slug}` === location.hash) ?? services[0];

  const choose = (slug) => navigate(`/services#${slug}`, { replace: true });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="High-quality advice, built for the institution that has to live with it."
        deck="Financial, economic, and technical consultancy. Operational support. The studies and measurements a lender, a ministry, or a utility needs before money moves."
        image="/images/engineering-plans.jpg"
      />

      <section className="section">
        <div className="container practice-layout" id={current.slug}>
          <aside className="practice-nav" aria-label="Services">
            {services.map((service, index) => (
              <button
                key={service.slug}
                className={service.slug === current.slug ? "is-active" : ""}
                onClick={() => choose(service.slug)}
              >
                <span>0{index + 1}</span>
                {service.title}
              </button>
            ))}
          </aside>
          <article className="practice-body" key={current.slug}>
            <figure>
              <img src={current.image} alt="" />
              <figcaption>{current.kicker}</figcaption>
            </figure>
            <div>
              <h2>{current.title}</h2>
              <p className="lead">{current.summary}</p>
              <ul className="point-list">
                {current.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className="btn btn-dark" to="/contact">
                Discuss an assignment
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <p className="eyebrow">Where the work usually sits</p>
          <h2>Restructuring, tariffs, and the cost of service.</h2>
          <p className="measure">
            Much of the utilities work is institutional. GBS advises government authorities and
            state-owned operators that are adapting to commercial discipline. Typical mandates
            improve the revenue or cost position, and many include a full cost-of-service study,
            tariff design, social and affordability analysis, and environmental impact assessment.
          </p>
          <ol className="method method-inline">
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
    </>
  );
}
