import { useState } from "react";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../hooks/usePageTitle";
import { company, services } from "../data/content";
import { sendEnquiry } from "../lib/sendEnquiry";

const empty = { name: "", email: "", organisation: "", service: services[0].title, message: "" };

export default function Contact() {
  usePageTitle(
    "Contact",
    "Write to Global Business Services in Tashkent. The form opens a message to info@gbs.uz. The address and telephone numbers are on the same page."
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
    if (form.name.trim().length < 2) {
      setError("Please add your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please add an email address GBS can answer.");
      return;
    }
    if (form.message.trim().length < 20) {
      setError("Tell us a little more about the assignment — at least a sentence or two.");
      return;
    }
    setError("");
    sendEnquiry({
      to: company.email,
      subject: `Enquiry — ${form.service}`,
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      honey: event.currentTarget.elements.honey.value,
      fields: {
        organisation: form.organisation.trim() || "—",
        interest: form.service,
      },
    });
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="GBS answers from Tashkent."
        deck="Write with a scope, a city, and the decision you need to make. A financier, a ministry, or a utility — the same address."
        image="/images/civic-street.jpg"
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="address-card">
            <p className="eyebrow">Visit or call</p>
            <h2>Global Business Services</h2>
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
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <p className="hours">Monday to Friday, Tashkent time.</p>
            <a
              className="text-link"
              href="https://maps.google.com/?q=21+Khusnutdin+Asomov+Street+Tashkent"
              target="_blank"
              rel="noreferrer"
            >
              Open the address in maps
            </a>
          </div>
          <form className="form-card" onSubmit={submit}>
            <h2>Send a message</h2>
            <p>
              Send opens your email program with this note addressed to {company.email}. The same
              address is listed beside the form. The website does not keep a copy.
            </p>
            {sent ? (
              <p className="form-success" role="status">
                Your email program has the message to {company.email}.
              </p>
            ) : null}
            <div className="form-row">
              <label>
                Name
                <input name="name" value={form.name} onChange={update} autoComplete="name" />
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Organisation
                <input name="organisation" value={form.organisation} onChange={update} />
              </label>
              <label>
                Interest
                <select name="service" value={form.service} onChange={update}>
                  {services.map((service) => (
                    <option key={service.slug}>{service.title}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea name="message" rows="6" value={form.message} onChange={update} />
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
