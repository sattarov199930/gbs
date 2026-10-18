import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieNotice from "./components/CookieNotice";
import HomePage from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Capabilities from "./pages/Capabilities";
import AboutUs from "./pages/AboutUs";
import Locations from "./pages/Locations";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const node = document.getElementById(hash.slice(1));
      if (node) {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    const bar = document.querySelector(".scroll-progress");
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? window.scrollY / height : 0;
      if (bar) bar.style.transform = `scaleX(${progress})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollManager />
      <Navbar />
      <CookieNotice />
      <main id="content" key={location.pathname} className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Legal page="privacy" />} />
          <Route path="/terms-of-service" element={<Legal page="terms" />} />
          <Route path="/cookie-policy" element={<Legal page="cookies" />} />

          <Route path="/Services" element={<Navigate to="/services" replace />} />
          <Route path="/Industries" element={<Navigate to="/industries" replace />} />
          <Route path="/Capabilities" element={<Navigate to="/capabilities" replace />} />
          <Route path="/AboutUs" element={<Navigate to="/about" replace />} />
          <Route path="/Locations" element={<Navigate to="/locations" replace />} />
          <Route path="/Careers" element={<Navigate to="/careers" replace />} />
          <Route path="/Contact" element={<Navigate to="/contact" replace />} />
          <Route path="/Customers" element={<Navigate to="/projects" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
