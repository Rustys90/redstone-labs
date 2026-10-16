import { useIstClock } from "../hooks/useIstClock";
import "./top-strip.css";

export default function TopStrip() {
  const clock = useIstClock();

  return (
    <header className="top-strip" id="top">
      <p className="top-strip__wordmark">Redstone Labs</p>
      <p className="top-strip__center" aria-label="Studio location and time">
        <span>Delhi, India</span>
        <span className="top-strip__clock">{clock}</span>
      </p>
      <a className="top-strip__contact" href="#contact">
        Contact
      </a>
    </header>
  );
}
