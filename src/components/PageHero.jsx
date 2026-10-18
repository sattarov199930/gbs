import { Link } from "react-router-dom";

export default function PageHero({ eyebrow, title, deck, image, children }) {
  return (
    <header className="page-hero" style={image ? { backgroundImage: `url(${image})` } : undefined}>
      <div className="page-hero-shade" />
      <div className="container page-hero-inner">
        <p className="eyebrow light">
          <Link to="/">GBS</Link>
          <span aria-hidden="true"> / </span>
          {eyebrow}
        </p>
        <h1>{title}</h1>
        {deck ? <p className="deck">{deck}</p> : null}
        {children}
      </div>
    </header>
  );
}
