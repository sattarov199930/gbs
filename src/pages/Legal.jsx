import { usePageTitle } from "../hooks/usePageTitle";
import { company } from "../data/content";

const pages = {
  privacy: {
    title: "Privacy",
    blocks: [
      `This website is a public presentation of Global Business Services. It does not run user accounts. Choosing send opens an email on your own computer, addressed to ${company.email}, with your note already written. This website does not receive or store that message. The same address is printed on the contact page.`,
      "If you email or telephone the firm, that correspondence is handled as a business enquiry. Do not include special-category personal data unless the assignment genuinely requires it.",
      "The only value this site writes in your browser is your cookie choice, so the notice does not return on every visit. You can clear it in your browser settings.",
      `Questions about this note can be sent to ${company.email}, or by post to ${company.address.join(", ")}.`,
    ],
  },
  terms: {
    title: "Terms",
    blocks: [
      "The pages describe the firm’s public practice. They are not an offer of engagement, a guarantee of availability, or a complete list of every assignment since 2002.",
      "Project descriptions follow published notes. They should be read as a record of the mandate, not as audited performance claims.",
      "The photographs were made for this website. They illustrate cities, infrastructure, and professional work. They are not records of a named GBS site.",
      "Engagements are agreed in a contract. Nothing on this website changes those terms.",
    ],
  },
  cookies: {
    title: "Cookies",
    blocks: [
      "The site does not use advertising or analytics cookies.",
      "If you dismiss the notice, one item is stored locally under the name gbs-cookie-choice. It remembers that you have already chosen. It is not sent to GBS.",
      "Essential operation of the site — pages, routing, and the notice itself — does not require any other cookie.",
    ],
  },
};

export default function Legal({ page = "privacy" }) {
  const current = pages[page] ?? pages.privacy;
  usePageTitle(current.title, current.blocks[0]);

  return (
    <section className="section legal">
      <div className="container prose">
        <p className="eyebrow">{current.title}</p>
        <h1>{current.title} note</h1>
        {current.blocks.map((block) => (
          <p key={block}>{block}</p>
        ))}
      </div>
    </section>
  );
}
