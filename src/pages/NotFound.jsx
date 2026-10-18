import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found", "That page is not on the Global Business Services site.");
  return (
    <section className="section not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>That page is not on this site.</h1>
        <p className="lead">GBS is still at the same address in Tashkent.</p>
        <Link className="btn btn-dark" to="/">
          Return home
        </Link>
      </div>
    </section>
  );
}
