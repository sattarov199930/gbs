import { useState } from "react";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../hooks/usePageTitle";
import { Link } from "react-router-dom";
import { company } from "../data/content";
import { sendEnquiry } from "../lib/sendEnquiry";

const disciplines = [
  "Civil and utilities engineering",
  "Economics and financial analysis",
  "Accounting and procurement",
  "Environmental and social safeguards",
  "Institutional reform and management",
  "Information systems for utilities",
  "Architecture and urban infrastructure",
  "Legal and regulatory support",
];

const empty = { name: "", email: "", discipline: disciplines[0], note: "" };

export default function Careers() {
  usePageTitle(
    "Careers",
    "Global Business Services welcomes associate experts at any time. An expression of interest opens a message to info@gbs.uz."
  );
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    if (form.name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Add your name and a valid email so GBS can reply.");
      return;
    }
    if (form.note.trim().length < 30) {
      setError("A short note of at least a few sentences helps the firm read your background.");
      return;
    }
    setError("");
    sendEnquiry({
      to: company.email,
      subject: `Expression of interest — ${form.discipline}`,
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.note.trim(),
      honey: event.currentTarget.elements.honey.value,
      fields: { discipline: form.discipline },
    });
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Talent is always welcome."
        deck="GBS keeps a pool of associate experts and is glad to hear from people with the disciplines an assignment needs. Write, even if nothing is posted."
        image="/images/engineering-plans.jpg"
      />
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Associate experts</p>
            <h2>Selected for the work, not collected for a brochure.</h2>
            <p>
              The selection standard — education, technical experience, project practice, and
              communication — is set out with the team on the{" "}
              <Link to="/capabilities">capabilities page</Link>.
            </p>
            <ul className="point-list">
              {disciplines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <form className="form-card" onSubmit={submit}>
            <h2>Express an interest</h2>
            <p>
              Send opens your email program with this note addressed to {company.email}. Nothing is
              kept on this website. Good people are of interest whether or not a role is posted.
            </p>
            {sent ? (
              <p className="form-success" role="status">
                Your email program has the message to {company.email}.
              </p>
            ) : null}
            <label>
              Name
              <input name="name" value={form.name} onChange={update} autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" />
            </label>
            <label>
              Discipline
              <select name="discipline" value={form.discipline} onChange={update}>
                {disciplines.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label>
              Note
              <textarea name="note" rows="5" value={form.note} onChange={update} />
            </label>
            <input className="honey" name="honey" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            {error ? <p className="form-error">{error}</p> : null}
            <button className="btn btn-dark" type="submit">
              Send to {company.email}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
