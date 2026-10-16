import { Link, NavLink, Outlet } from "react-router-dom";
import CookieBanner from "./CookieBanner";
import "./layout.css";

const legalLinks = [
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/refund", label: "Refund policy" },
  { to: "/cookies", label: "Cookie policy" },
  { to: "/data-deletion", label: "Data deletion" },
];

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="Redstone Labs — home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#0A0F1E" />
                <path
                  d="M10 22V10h7.5a5 5 0 0 1 0 10H13v2h4.5a3 3 0 0 0 0-6H13v6z"
                  fill="#8B7CFF"
                />
                <circle cx="22.5" cy="21.5" r="2.5" fill="#3EE0FF" />
              </svg>
            </span>
            <span className="brand-name">Redstone&nbsp;Labs</span>
          </Link>

          <nav aria-label="Primary" className="primary-nav">
            <ul>
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/work">Work</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-business">
            <p className="footer-name">Redstone Labs</p>
            <p className="footer-detail">
              Delhi, India ·{" "}
              <a href="mailto:s90.vfx@gmail.com">s90.vfx@gmail.com</a>
            </p>
          </div>

          <nav aria-label="Footer" className="footer-nav">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
              <li>
                <a href="/sitemap.xml">Sitemap</a>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-cookie-settings"
                  onClick={() =>
                    window.dispatchEvent(new Event("rl:open-cookies"))
                  }
                >
                  Cookie settings
                </button>
              </li>
            </ul>
          </nav>

          <p className="footer-copy">
            © {new Date().getFullYear()} Redstone Labs. All rights reserved.
          </p>
        </div>
      </footer>

      <CookieBanner />
    </>
  );
}
