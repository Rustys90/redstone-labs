import { Link } from "react-router-dom";
import { Trace } from "./TraceSystem";
import { RsRune } from "./Pixel";
import "./footer.css";

/* Footer: the colophon. Business details, legal routes, build meta,
   and the dry one-liner. A short grounding trace ornaments the
   wordmark — it terminates the schematic. */

const legalLinks = [
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/refund", label: "Refund" },
  { to: "/cookies", label: "Cookies" },
  { to: "/data-deletion", label: "Data deletion" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__rune" aria-hidden="true">
            <RsRune />
          </span>
          <p className="footer__wordmark">Redstone Labs</p>
          <span className="footer__ground" aria-hidden="true">
            <Trace d="M0 4 H144" color="dim" />
          </span>
        </div>
        <p className="footer__business">
          Redstone Labs · Delhi, India ·{" "}
          <a href="mailto:s90.vfx@gmail.com">s90.vfx@gmail.com</a>
        </p>
        <nav className="footer__legal" aria-label="Legal">
          <ul>
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer__meta">bld 9f3a2c1 · voxel round 3</p>
        <p className="footer__meta">28.6139°N 77.2090°E — New Delhi</p>
        <p className="footer__meta">© 2026 Redstone Labs</p>
        <p className="footer__colophon">
          Set in Press Start 2P, Silkscreen, VT323 &amp; Inter. No Mojang assets
          were used or harmed.
        </p>
      </div>
    </footer>
  );
}
