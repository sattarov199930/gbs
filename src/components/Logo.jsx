import mark from "../assets/common/logo.svg";

export default function Logo() {
  return (
    <span className="brand">
      <img src={mark} alt="" className="brand-mark" />
      <span className="brand-name">Global Business Services</span>
    </span>
  );
}
