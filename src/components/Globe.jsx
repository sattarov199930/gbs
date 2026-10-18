import { useEffect, useRef, useState } from "react";
import { geoContains, geoOrthographic, geoPath, geoGraticule10 } from "d3-geo";
import {
  featureIsActive,
  featureIsCapable,
  featureKey,
  featureNote,
  globePlaces,
} from "../data/geography";

const sphere = { type: "Sphere" };
const graticule = geoGraticule10();

export default function Globe() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const featuresRef = useRef([]);
  const rotation = useRef([-64, -28]);
  const target = useRef([-64, -28]);
  const velocity = useRef([0, 0]);
  const dragging = useRef(false);
  const last = useRef([0, 0]);
  const moved = useRef(0);
  const hoverRef = useRef(null);
  const sizeRef = useRef(480);
  const [tip, setTip] = useState(null);
  const [activePlace, setActivePlace] = useState("central");

  useEffect(() => {
    let frame = 0;
    let alive = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas.getContext("2d");
    const projection = geoOrthographic().clipAngle(90).precision(0.4);

    const resize = () => {
      const width = Math.min(wrap.clientWidth, 560);
      sizeRef.current = width;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${width}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(width * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(wrap);

    fetch("/geo/map-units.json")
      .then((response) => response.json())
      .then((collection) => {
        if (!alive) return;
        featuresRef.current = collection.features;
      });

    let lastScroll = window.scrollY;
    const onScroll = () => {
      const next = window.scrollY;
      const delta = next - lastScroll;
      lastScroll = next;
      if (reduce || dragging.current) return;
      const rect = wrap.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
      if (!visible) return;
      target.current[0] += delta * 0.08;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const draw = () => {
      const width = sizeRef.current;
      const ease = dragging.current ? 0.42 : 0.085;
      if (!dragging.current) {
        target.current[0] += velocity.current[0];
        target.current[1] += velocity.current[1];
        velocity.current[0] *= 0.92;
        velocity.current[1] *= 0.92;
      }
      target.current[1] = Math.max(-62, Math.min(62, target.current[1]));
      rotation.current[0] += (target.current[0] - rotation.current[0]) * ease;
      rotation.current[1] += (target.current[1] - rotation.current[1]) * ease;
      projection.rotate(rotation.current).translate([width / 2, width / 2]).scale(width * 0.46);

      ctx.clearRect(0, 0, width, width);
      const path = geoPath(projection, ctx);
      const glow = ctx.createRadialGradient(width * 0.38, width * 0.34, width * 0.05, width / 2, width / 2, width * 0.48);
      glow.addColorStop(0, "#243456");
      glow.addColorStop(0.55, "#10182e");
      glow.addColorStop(1, "#070b16");
      ctx.beginPath();
      path(sphere);
      ctx.fillStyle = glow;
      ctx.fill();

      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = "rgba(168, 190, 230, 0.16)";
      ctx.lineWidth = 0.6;
      ctx.stroke();

      const hover = hoverRef.current;
      for (const shape of featuresRef.current) {
        const active = featureIsActive(shape.properties);
        const capable = featureIsCapable(shape.properties);
        const hot = hover === featureKey(shape.properties);
        ctx.beginPath();
        path(shape);
        if (hot && active) ctx.fillStyle = "rgba(78, 132, 255, 0.92)";
        else if (hot && capable) ctx.fillStyle = "rgba(56, 196, 176, 0.9)";
        else if (hot) ctx.fillStyle = "rgba(186, 204, 236, 0.45)";
        else if (active) ctx.fillStyle = "rgba(78, 124, 255, 0.5)";
        else if (capable) ctx.fillStyle = "rgba(46, 168, 156, 0.38)";
        else ctx.fillStyle = "rgba(214, 226, 248, 0.035)";
        ctx.fill();
        const bright = active || capable || hot;
        ctx.strokeStyle = bright ? "rgba(214, 228, 255, 0.95)" : "rgba(190, 208, 236, 0.38)";
        ctx.lineWidth = hot ? 1.25 : 0.55;
        ctx.stroke();
      }

      ctx.beginPath();
      path(sphere);
      ctx.strokeStyle = "rgba(186, 208, 255, 0.55)";
      ctx.lineWidth = 1.15;
      ctx.stroke();

      for (const place of globePlaces) {
        const point = projection([place.lon, place.lat]);
        if (!point) continue;
        ctx.beginPath();
        ctx.arc(point[0], point[1], 3.2, 0, Math.PI * 2);
        ctx.fillStyle = "#dbe6ff";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(point[0], point[1], 7, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(219, 230, 255, 0.7)";
        ctx.stroke();
      }
    };

    const tick = () => {
      draw();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const pointFromEvent = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return [event.clientX - rect.left, event.clientY - rect.top];
  };

  const countryAt = (x, y) => {
    const width = sizeRef.current;
    const projection = geoOrthographic().clipAngle(90).precision(0.6);
    projection.rotate(rotation.current).translate([width / 2, width / 2]).scale(width * 0.46);
    const lonlat = projection.invert([x, y]);
    if (!lonlat) return null;
    const shape = featuresRef.current.find((item) => geoContains(item, lonlat));
    if (!shape) return null;
    return {
      id: featureKey(shape.properties),
      name: shape.properties.name || "Country",
      note: featureNote(shape.properties),
    };
  };

  const onPointerDown = (event) => {
    dragging.current = true;
    moved.current = 0;
    velocity.current = [0, 0];
    last.current = [event.clientX, event.clientY];
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (dragging.current) {
      const dx = event.clientX - last.current[0];
      const dy = event.clientY - last.current[1];
      last.current = [event.clientX, event.clientY];
      moved.current += Math.abs(dx) + Math.abs(dy);
      target.current[0] += dx * 0.28;
      target.current[1] -= dy * 0.28;
      velocity.current = [dx * 0.12, -dy * 0.12];
      return;
    }
    const [x, y] = pointFromEvent(event);
    const next = countryAt(x, y);
    if ((next?.id || null) === hoverRef.current) {
      if (next) setTip((current) => (current ? { ...current, x, y } : current));
      return;
    }
    hoverRef.current = next?.id || null;
    setTip(next ? { ...next, x, y } : null);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const flyTo = (place) => {
    velocity.current = [0, 0];
    target.current = [-place.lon, -place.lat];
    setActivePlace(place.id);
  };

  return (
    <div className="globe-block" ref={wrapRef}>
      <div className="globe-stage">
        <canvas
          ref={canvasRef}
          className="globe-canvas"
          aria-label="Globe. Drag to turn it. Scroll while it is on screen and it turns with the page."
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={() => {
            if (dragging.current) return;
            hoverRef.current = null;
            setTip(null);
          }}
        />
        {tip ? (
          <div className="globe-tip" style={{ left: tip.x, top: tip.y }}>
            <strong>{tip.name}</strong>
            <span>{tip.note}</span>
          </div>
        ) : null}
      </div>
      <ul className="globe-legend">
        {globePlaces.map((place) => (
          <li key={place.id}>
            <button
              type="button"
              className={activePlace === place.id ? "is-on" : ""}
              onClick={() => flyTo(place)}
            >
              <strong>
                <i className={`swatch ${place.id === "central" ? "swatch-current" : "swatch-serve"}`} aria-hidden="true" />
                {place.name}
              </strong>
              <span>{place.note}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
