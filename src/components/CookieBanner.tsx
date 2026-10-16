import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cookie-banner.css";

const STORAGE_KEY = "rl-consent";

interface ConsentRecord {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
}

function readConsent(): ConsentRecord | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>;
    if (typeof parsed.analytics !== "boolean") return null;
    if (typeof parsed.marketing !== "boolean") return null;
    return parsed as ConsentRecord;
  } catch {
    return null;
  }
}

function writeConsent(analytics: boolean, marketing: boolean): void {
  const record: ConsentRecord = {
    necessary: true,
    analytics,
    marketing,
    savedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Storage unavailable (private mode, disabled cookies): the banner
    // simply won't persist, and we'll ask again next visit. No crash.
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // First visit only: show the banner once consent is absent.
  useEffect(() => {
    if (readConsent() !== null) return;
    const timer = window.setTimeout(() => setVisible(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  // Re-open from the footer "Cookie settings" link.
  useEffect(() => {
    const reopen = () => {
      const saved = readConsent();
      setAnalytics(saved?.analytics ?? false);
      setMarketing(saved?.marketing ?? false);
      setCustomizing(true);
      setVisible(true);
    };
    window.addEventListener("rl:open-cookies", reopen);
    return () => window.removeEventListener("rl:open-cookies", reopen);
  }, []);

  const save = (analyticsChoice: boolean, marketingChoice: boolean) => {
    writeConsent(analyticsChoice, marketingChoice);
    setVisible(false);
    setCustomizing(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="region"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      {!customizing ? (
        <div className="cookie-banner-main">
          <div className="cookie-banner-copy">
            <p className="cookie-banner-title">We use cookies</p>
            <p className="cookie-banner-text">
              We use necessary cookies to make the site work. With your
              permission we&rsquo;d also like to use analytics and marketing
              cookies. Read our <Link to="/cookies">cookie policy</Link>.
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button
              type="button"
              className="cookie-btn cookie-btn-accept"
              onClick={() => save(true, true)}
            >
              Accept all
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn-decline"
              onClick={() => save(false, false)}
            >
              Decline all
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn-customize"
              onClick={() => setCustomizing(true)}
              aria-expanded="false"
            >
              Customize
            </button>
          </div>
        </div>
      ) : (
        <div className="cookie-banner-main">
          <div className="cookie-banner-copy">
            <p className="cookie-banner-title">Cookie preferences</p>
            <p className="cookie-banner-text">
              Choose which cookies we may use. Necessary cookies are always on
              because the site can&rsquo;t function without them.
            </p>
          </div>

          <fieldset className="cookie-toggles">
            <legend className="visually-hidden">Cookie categories</legend>

            <label className="cookie-toggle">
              <span className="cookie-toggle-text">
                <span className="cookie-toggle-name">Necessary</span>
                <span className="cookie-toggle-desc">
                  Required for the site to work. Always on.
                </span>
              </span>
              <input type="checkbox" checked disabled aria-label="Necessary cookies (always on)" />
              <span className="cookie-switch" aria-hidden="true" />
            </label>

            <label className="cookie-toggle">
              <span className="cookie-toggle-text">
                <span className="cookie-toggle-name">Analytics</span>
                <span className="cookie-toggle-desc">
                  Helps us understand how the site is used.
                </span>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
              />
              <span className="cookie-switch" aria-hidden="true" />
            </label>

            <label className="cookie-toggle">
              <span className="cookie-toggle-text">
                <span className="cookie-toggle-name">Marketing</span>
                <span className="cookie-toggle-desc">
                  Used to measure campaign performance.
                </span>
              </span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(event) => setMarketing(event.target.checked)}
              />
              <span className="cookie-switch" aria-hidden="true" />
            </label>
          </fieldset>

          <div className="cookie-banner-actions">
            <button
              type="button"
              className="cookie-btn cookie-btn-accept"
              onClick={() => save(analytics, marketing)}
            >
              Save choices
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn-customize"
              onClick={() => setCustomizing(false)}
              aria-expanded="true"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
