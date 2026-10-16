import LegalLayout, { type LegalSection } from '../../components/LegalLayout';

const SECTIONS: LegalSection[] = [
  { id: 'what-we-collect', title: 'What we collect' },
  { id: 'why-we-collect-it', title: 'Why we collect it' },
  { id: 'how-long-we-keep-it', title: 'How long we keep it' },
  { id: 'who-we-share-it-with', title: 'Who we share it with' },
  { id: 'your-rights', title: 'Your rights' },
  { id: 'children', title: 'Children' },
  { id: 'data-minimisation', title: 'Data minimisation' },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'Contact' },
];

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="16 October 2026" sections={SECTIONS}>
      <p>
        <strong>Short version:</strong> Redstone Labs is a small custom software studio in Delhi, India.
        This website collects almost nothing about you — just what you send us through the contact
        form, and your cookie-consent choice, which stays in your own browser.
      </p>

      <section id="what-we-collect" aria-labelledby="what-we-collect-h">
        <h2 id="what-we-collect-h">1. What we collect</h2>
        <ul>
          <li>
            <strong>Contact form.</strong> When you send us a message, we receive your name, your
            email address, and the message itself. It arrives in our inbox at{' '}
            <a href="mailto:s90.vfx@gmail.com">s90.vfx@gmail.com</a>. We don&rsquo;t ask for anything
            else — no phone number, no company details, no account.
          </li>
          <li>
            <strong>Cookie-consent choice.</strong> Whether you accepted or declined optional cookies
            is stored in your browser&rsquo;s localStorage under the key <code>rl-consent</code>.
            This record never leaves your device.
          </li>
          <li>
            <strong>Nothing else.</strong> No analytics by default, no tracking pixels, no
            advertising networks, no third-party scripts observing your visit.
          </li>
        </ul>
      </section>

      <section id="why-we-collect-it" aria-labelledby="why-we-collect-it-h">
        <h2 id="why-we-collect-it-h">2. Why we collect it</h2>
        <p>
          To read and reply to your enquiry. That is the only reason we hold your name, email, and
          message. Your consent choice is stored so we don&rsquo;t have to ask you about cookies on
          every visit.
        </p>
      </section>

      <section id="how-long-we-keep-it" aria-labelledby="how-long-we-keep-it-h">
        <h2 id="how-long-we-keep-it-h">3. How long we keep it</h2>
        <ul>
          <li>
            <strong>Enquiry data:</strong> kept for a maximum of 12 months from our last exchange
            with you, then deleted.
          </li>
          <li>
            <strong>Project records:</strong> if an enquiry turns into a project, records follow the
            terms agreed in your contract instead.
          </li>
          <li>
            <strong>Consent choice:</strong> stays in your browser until you clear it or change it —
            see our <a href="/cookies">Cookie Policy</a>.
          </li>
        </ul>
      </section>

      <section id="who-we-share-it-with" aria-labelledby="who-we-share-it-with-h">
        <h2 id="who-we-share-it-with-h">4. Who we share it with</h2>
        <p>
          Nobody. We do not sell, rent, or share your personal data with anyone, for any reason.
          Your enquiry goes to our inbox and stays there.
        </p>
      </section>

      <section id="your-rights" aria-labelledby="your-rights-h">
        <h2 id="your-rights-h">5. Your rights</h2>
        <p>You can, at any time:</p>
        <ul>
          <li>ask what personal data we hold about you;</li>
          <li>ask us to correct it if it&rsquo;s wrong;</li>
          <li>ask us to delete it.</li>
        </ul>
        <p>
          Email <a href="mailto:s90.vfx@gmail.com">s90.vfx@gmail.com</a> and we&rsquo;ll respond
          within 30 days. There&rsquo;s also a dedicated form at{' '}
          <a href="/data-deletion">Data Deletion</a> if you&rsquo;d like everything removed.
        </p>
      </section>

      <section id="children" aria-labelledby="children-h">
        <h2 id="children-h">6. Children</h2>
        <p>
          This site is not directed at children under 13, and our services are business services. If
          you&rsquo;re under 13, please don&rsquo;t submit the contact form. If we learn that a
          child under 13 has sent us personal data, we&rsquo;ll delete it.
        </p>
      </section>

      <section id="data-minimisation" aria-labelledby="data-minimisation-h">
        <h2 id="data-minimisation-h">7. Data minimisation</h2>
        <p>
          We only collect what&rsquo;s needed to reply to you, and nothing more. If a field
          isn&rsquo;t necessary, we don&rsquo;t ask for it. We won&rsquo;t expand what we collect
          later without updating this policy first.
        </p>
      </section>

      <section id="changes" aria-labelledby="changes-h">
        <h2 id="changes-h">8. Changes to this policy</h2>
        <p>
          If this policy changes, we&rsquo;ll update the date at the top of this page. Material
          changes will be noted on the site itself.
        </p>
      </section>

      <section id="contact" aria-labelledby="contact-h">
        <h2 id="contact-h">9. Contact</h2>
        <p>
          Questions about this policy or your data:{' '}
          <a href="mailto:s90.vfx@gmail.com">s90.vfx@gmail.com</a> — Redstone Labs, Delhi, India.
        </p>
      </section>
    </LegalLayout>
  );
}
