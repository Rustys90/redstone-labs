import LegalLayout, { LegalLede, LegalSection } from "./LegalLayout";

const UPDATED = "2026-10-16";
const EMAIL = "s90.vfx@gmail.com";

/** Custom event the consent banner listens for; dispatches re-open. */
function openCookieSettings() {
  window.dispatchEvent(new CustomEvent("rl:open-consent"));
}

export default function Cookies() {
  return (
    <LegalLayout title="Cookie policy" updated={UPDATED}>
      <LegalLede>
        <strong>Short version:</strong> we store exactly one thing in your
        browser — your cookie-consent choice. No analytics cookies, no
        advertising cookies, no third-party trackers. If that ever changes,
        this page will say so before anything new is set.
      </LegalLede>

      <LegalSection num="01" title="What we store">
        <p>
          We use browser storage — cookies and localStorage — for a single
          functional purpose: remembering the choice you made in our consent
          banner. We do not use tracking pixels, fingerprinting, or behavioural
          analytics.
        </p>
      </LegalSection>

      <LegalSection num="02" title="Strictly necessary">
        <ul>
          <li>
            <strong>
              <code>rl-consent</code> (localStorage)
            </strong>{" "}
            — remembers whether you accepted or declined optional cookie
            categories. Without it, we&rsquo;d have to ask you on every visit.
            It never leaves your device and contains no personal data.
          </li>
        </ul>
        <p>
          Because this storage is strictly necessary for the consent feature to
          work, it doesn&rsquo;t require your opt-in — but you can clear it any
          time (see section 5).
        </p>
      </LegalSection>

      <LegalSection num="03" title="Optional — none by default">
        <p>
          We run <strong>no analytics, advertising, or marketing cookies by
          default</strong>. If we ever add optional categories (for example,
          privacy-respecting analytics), they will be switched off until you
          explicitly opt in through the consent banner — and they will be
          listed on this page first.
        </p>
      </LegalSection>

      <LegalSection num="04" title="Third-party cookies">
        <p>
          None. We set no third-party cookies, and we load no third-party
          scripts that set them.
        </p>
      </LegalSection>

      <LegalSection num="05" title="Changing your choice">
        <p>You can change your mind at any time:</p>
        <ul>
          <li>
            Use the <strong>“Cookie settings”</strong> button below to re-open
            the consent banner and update your choice.
          </li>
          <li>
            Or clear site data in your browser&rsquo;s settings, which removes
            the <code>rl-consent</code> entry — we&rsquo;ll simply ask you again
            next visit.
          </li>
        </ul>
        <p>
          <button
            type="button"
            className="legal__button"
            onClick={openCookieSettings}
          >
            Cookie settings
          </button>
        </p>
        <p>
          Questions about cookies or your choices:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> — Redstone Labs, Delhi, India.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
