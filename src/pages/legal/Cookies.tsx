import LegalLayout, { type LegalSection } from '../../components/LegalLayout';

const SECTIONS: LegalSection[] = [
  { id: 'what-we-store', title: 'What we store' },
  { id: 'strictly-necessary', title: 'Strictly necessary' },
  { id: 'optional', title: 'Optional — none by default' },
  { id: 'third-party', title: 'Third-party cookies' },
  { id: 'changing-your-choice', title: 'Changing your choice' },
  { id: 'contact', title: 'Contact' },
];

export default function Cookies() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="16 October 2026" sections={SECTIONS}>
      <p>
        <strong>Short version:</strong> we store exactly one thing in your browser — your
        cookie-consent choice. No analytics cookies, no advertising cookies, no third-party
        trackers. If that ever changes, this page will say so before anything new is set.
      </p>

      <section id="what-we-store" aria-labelledby="what-we-store-h">
        <h2 id="what-we-store-h">1. What we store</h2>
        <p>
          We use browser storage — cookies and localStorage — for a single functional purpose:
          remembering the choice you made in our consent banner. We do not use tracking pixels,
          fingerprinting, or behavioural analytics.
        </p>
      </section>

      <section id="strictly-necessary" aria-labelledby="strictly-necessary-h">
        <h2 id="strictly-necessary-h">2. Strictly necessary</h2>
        <ul>
          <li>
            <strong>
              <code>rl-consent</code> (localStorage)
            </strong>{' '}
            — remembers whether you accepted or declined optional cookie categories. Without it,
            we&rsquo;d have to ask you on every visit. It never leaves your device and contains
            no personal data.
          </li>
        </ul>
        <p>
          Because this storage is strictly necessary for the consent feature to work, it
          doesn&rsquo;t require your opt-in — but you can clear it any time (see section 5).
        </p>
      </section>

      <section id="optional" aria-labelledby="optional-h">
        <h2 id="optional-h">3. Optional — none by default</h2>
        <p>
          We run <strong>no analytics, advertising, or marketing cookies by default</strong>. If we
          ever add optional categories (for example, privacy-respecting analytics), they will be
          switched off until you explicitly opt in through the consent banner — and they will be
          listed on this page first.
        </p>
      </section>

      <section id="third-party" aria-labelledby="third-party-h">
        <h2 id="third-party-h">4. Third-party cookies</h2>
        <p>
          None. We set no third-party cookies, and we load no third-party scripts that set them.
        </p>
      </section>

      <section id="changing-your-choice" aria-labelledby="changing-your-choice-h">
        <h2 id="changing-your-choice-h">5. Changing your choice</h2>
        <p>You can change your mind at any time:</p>
        <ul>
          <li>
            Click <strong>&ldquo;Cookie settings&rdquo;</strong> in the site footer to re-open
            the consent banner and update your choice.
          </li>
          <li>
            Or clear site data in your browser&rsquo;s settings, which removes the{' '}
            <code>rl-consent</code> entry — we&rsquo;ll simply ask you again next visit.
          </li>
        </ul>
      </section>

      <section id="contact" aria-labelledby="contact-h">
        <h2 id="contact-h">6. Contact</h2>
        <p>
          Questions about cookies or your choices:{' '}
          <a href="mailto:s90.vfx@gmail.com">s90.vfx@gmail.com</a> — Redstone Labs, Delhi, India.
        </p>
      </section>
    </LegalLayout>
  );
}
