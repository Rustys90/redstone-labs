/**
 * TopStrip — fixed thin nav, per the voxel direction's global chrome.
 *
 * Left: 8x8 RS-rune sprite + "REDSTONE LABS" in the masthead face.
 * Center: nav items as recessed hotbar slots (2px redstone outline on
 * the active slot). Right: live VT323 IST clock + NIGHT/DAY toggle +
 * START PROJECT block button.
 */
import { useEffect, useState } from "react";
import { useIstClock } from "../hooks/useIstClock";
import { RSRune } from "./Pixel";
import "./top-strip.css";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

type Theme = "night" | "day";

function useHash(): string {
  const [hash, setHash] = useState(() =>
    typeof window === "undefined" ? "" : window.location.hash,
  );
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return window.localStorage.getItem("rs-theme") === "day"
        ? "day"
        : "night";
    } catch {
      return "night";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    // Suppress transitions during the swap (interface-craft rule).
    root.classList.add("theme-swap");
    if (theme === "day") {
      root.setAttribute("data-theme", "day");
    } else {
      root.removeAttribute("data-theme");
    }
    try {
      window.localStorage.setItem("rs-theme", theme);
    } catch {
      /* storage unavailable — theme still applies for the session */
    }
    const id = window.setTimeout(() => root.classList.remove("theme-swap"), 60);
    return () => window.clearTimeout(id);
  }, [theme]);

  return [theme, () => setTheme((t) => (t === "day" ? "night" : "day"))];
}

export default function TopStrip() {
  const clock = useIstClock();
  const hash = useHash();
  const [theme, toggleTheme] = useTheme();
  const isDay = theme === "day";

  return (
    <header className="top-strip">
      <a className="top-strip__brand" href="#top" aria-label="Redstone Labs — back to top">
        <RSRune px={3} />
        <span className="top-strip__wordmark">REDSTONE LABS</span>
      </a>
      <nav className="top-strip__nav" aria-label="Sections">
        <ul>
          {NAV.map((item) => {
            const active = hash === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="top-strip__meta">
        <span
          className="top-strip__clock"
          aria-label={`Current time in Delhi, India: ${clock}`}
        >
          {clock}
        </span>
        <button
          type="button"
          className="top-strip__toggle"
          onClick={toggleTheme}
          aria-pressed={isDay}
          aria-label={`Switch to ${isDay ? "night" : "day"} theme`}
        >
          {isDay ? "DAY" : "NIGHT"}
        </button>
        <a className="top-strip__cta" href="#contact">
          START PROJECT
        </a>
      </div>
    </header>
  );
}
