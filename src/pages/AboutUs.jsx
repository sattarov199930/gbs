import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../hooks/usePageTitle";
import { values } from "../data/content";

const timeline = [
  {
    year: "2002",
    title: "The firm is established",
    text: "Global Business Services begins in Tashkent as a private consultancy for economic and social assignments in Central Asia.",
  },
  {
    year: "IFI practice",
    title: "A lender-facing record",
    text: "The team builds its work on programmes financed by ADB, the World Bank, EBRD, AFD, SECO, the Islamic Development Bank, KfW, and IFC.",
  },
  {
    year: "Registration",
    title: "Known to the institutions",
    text: "GBS is registered with the World Bank and EBRD, with ADB under DACON No. 003966 and the Islamic Development Bank under No. G0772.",
  },
  {
    year: "Today",
    title: "The record so far",
    text: "More than fifty IFI-financed projects and about a hundred clients. The work is answered from Tashkent.",
  },
];

export default function AboutUs() {
  usePageTitle(
    "About",
    "Global Business Services began in Tashkent in 2002. The practice covers utilities, infrastructure, health, agriculture, and the management questions beside them."
  );

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Quality, and the sustainability of the achievement."
        deck="That is the firm’s own philosophy. Partnerships are meant to last, and they are built on trust, respect, professionalism, and commitment to the goal."
        image="/images/city-dusk.jpg"
      />
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Since 2002</p>
            <h2>Hands-on strategies, not a stack of generalities.</h2>
          </div>
          <div className="prose">
            <p>
              The practice began in Tashkent in 2002. The fields are practical ones: agriculture and
              natural resources, healthcare, public utilities, urban infrastructure, and the
              management questions that sit beside them.
            </p>
            <p>
              The team is focused on advantages that come from joint work — solving a complicated
              issue, or taking an opportunity that is further away than the current budget cycle.
              Permanent employees carry assignments financed by international institutions. They are
              not a temporary roster assembled for a proposal.
            </p>
            <p>
              Devex describes the firm accurately: business optimisation and improvement, with
              particular weight on institutional strengthening, financial advisory, and turnaround.
              The aim is to help a client build value, manage risk, and perform.
            </p>
            <Link className="text-link" to="/capabilities">
              How the team is organised
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-ink">
        <div className="container timeline">
          {timeline.map((item) => (
            <article key={item.year}>
              <p>{item.year}</p>
              <h3>{item.title}</h3>
              <span>{item.text}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow">What the work is judged by</p>
          <div className="value-grid">
            {values.map((value) => (
              <article key={value.title}>
                <h2>{value.title}</h2>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container quote-block">
          <blockquote>
            “GBS strives to deliver innovative, inclusive and sustainable solutions. The firm’s
            philosophy is quality and sustainability of achievements.”
          </blockquote>
          <p>From the firm’s own description of its practice.</p>
          <Link className="btn btn-dark" to="/contact">
            Contact GBS
          </Link>
        </div>
      </section>
    </>
  );
}
