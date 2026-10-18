import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Globe from "../components/Globe";
import { usePageTitle } from "../hooks/usePageTitle";
import { company, countries } from "../data/content";
import { serviceSentence } from "../data/geography";

export default function Locations() {
  usePageTitle(
    "Geography",
    `GBS is based in Tashkent. Current assignments are in Uzbekistan, Kazakhstan, Kyrgyzstan, and Tajikistan. The firm can also serve clients in ${serviceSentence()}.`
  );

  return (
    <>
      <PageHero
        eyebrow="Geography"
        title="Based in Tashkent. Able to serve well beyond it."
        deck={`Current assignments are in Uzbekistan, Kazakhstan, Kyrgyzstan, and Tajikistan. GBS can also serve clients in ${serviceSentence()}.`}
        image="/images/civic-street.jpg"
      />
      <section className="section">
        <div className="container region-layout">
          <div className="address-card">
            <p className="eyebrow">Tashkent</p>
            <h2>Tashkent</h2>
            <address>
              {company.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <ul>
              {company.phones.map((phone) => (
                <li key={phone.number}>
                  <span className="phone-label">{phone.label}</span>
                  {phone.label === "Fax" ? (
                    phone.number
                  ) : (
                    <a href={`tel:${phone.number.replace(/\s/g, "")}`}>{phone.number}</a>
                  )}
                </li>
              ))}
            </ul>
            <a className="text-link" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
          <Globe />
        </div>
      </section>
      <section className="section section-paper">
        <div className="container country-grid">
          {countries.map((country) => (
            <article key={country.name}>
              <p className="eyebrow">{country.role}</p>
              <h2>{country.name}</h2>
              <p>{country.text}</p>
              <Link to={country.href}>View assignments</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
