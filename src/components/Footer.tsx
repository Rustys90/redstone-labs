import { Link } from "react-router-dom";
import { useIstClock } from "../hooks/useIstClock";
import "./footer.css";

const legalLinks = [
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/refund", label: "Refund" },
  { to: "/cookies", label: "Cookies" },
  { to: "/data-deletion", label: "Data deletion" },
];

export default function Footer() {
  const clock = useIstClock();

  return (
    <footer className="colophon">
      <div className="colophon__grid">
        <p className="colophon__cell">© 2026 Redstone Labs, Delhi, India</p>
        <p className="colophon__cell">Set in Archivo and JetBrains Mono</p>
        <p className="colophon__cell colophon__top">
          <a href="#top">Back to top</a>
          <span className="colophon__clock" aria-label="Current time in Delhi">
            {clock}
          </span>
        </p>
      </div>
      <nav className="colophon__legal" aria-label="Legal">
        <ul>
          {legalLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
