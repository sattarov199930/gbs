import { useCountUp, useInView } from "../hooks/useInView";

export default function Stat({ value, prefix = "", suffix = "", label }) {
  const { ref, inView } = useInView();
  const count = useCountUp(value, inView);

  return (
    <div className="stat" ref={ref}>
      <p className="stat-num">
        {prefix}
        {inView ? count : 0}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}
