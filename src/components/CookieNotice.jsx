import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const KEY = "gbs-cookie-choice";

export default function CookieNotice() {
  const bannerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("has-cookie", visible);
    return () => document.body.classList.remove("has-cookie");
  }, [visible]);

  useEffect(() => {
    const node = bannerRef.current;
    if (!visible || !node) {
      document.documentElement.style.removeProperty("--banner");
      return undefined;
    }
    const apply = () => {
      document.documentElement.style.setProperty("--banner", `${node.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--banner");
    };
  }, [visible]);

  const choose = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* private mode */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-label="Cookie notice" ref={bannerRef}>
      <p>
        This site stores one choice in your browser so this notice stays dismissed. No advertising
        cookies are set. Read the <Link to="/cookie-policy">cookie note</Link>.
      </p>
      <div>
        <button className="btn btn-small btn-ghost" onClick={() => choose("essential")}>
          Essential only
        </button>
        <button className="btn btn-small" onClick={() => choose("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}
