import { useEffect } from "react";

function setMeta(selector, attribute, value) {
  const node = document.querySelector(selector);
  if (node && value) node.setAttribute(attribute, value);
}

export function usePageTitle(title, description) {
  useEffect(() => {
    const full = title ? `${title} · Global Business Services` : "Global Business Services";
    document.title = full;
    if (!description) return;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", full);
  }, [title, description]);
}
