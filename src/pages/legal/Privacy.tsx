import { Link } from "react-router-dom";
import LegalLayout, { LegalLede, LegalSection } from "./LegalLayout";

const UPDATED = "2026-10-16";
const EMAIL = "s90.vfx@gmail.com";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy policy" updated={UPDATED}>
      <LegalLede>
        <strong>Short version:</strong> Redstone Labs is a small custom software
        studio in Delhi, India. This website collects almost nothing about you —
        just what you send us through the contact form, and your
        cookie-consent choice, which stays in your own browser.
      </LegalLede>

      <LegalSection num="01" title="What we collect">
        <ul>
          <li>
            <strong>Contact form.</strong> When you send us a message, we receive
            your name, your email address, and the message itself. It arrives in
            our inbox at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We don&rsquo;t
            ask for anything else — no phone number, no company details, no
            account.
          </li>
          <li>
            <strong>Cookie-consent choice.</strong> Whether you accepted or
            declined optional cookies is stored in your browser&rsquo;s
            localStorage under the key <code>rl-consent</code>. This record
            never leaves your device.
          </li>
          <li>
            <strong>Nothing else.</strong> No analytics by default, no tracking
            pixels, no advertising networks, no third-party scripts observing
            your visit.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="02" title="Why we collect it">
        <p>
          To read and reply to your enquiry. That is the only reason we hold
          your name, email, and message. Your consent choice is stored so we
          don&rsquo;t have to ask you about cookies on every visit.
        </p>
      </LegalSection>

      <LegalSection num="03" title="How long we keep it">
        <ul>
          <li>
            <strong>Enquiry data:</strong> kept for a maximum of 12 months from
            our last exchange with you, then deleted.
          </li>
          <li>
            <strong>Project records:</strong> if an enquiry turns into a
            project, records follow the terms agreed in your contract instead.
          </li>
          <li>
            <strong>Consent choice:</strong> stays in your browser until you
            clear it or change it — see our{" "}
            <Link to="/cookies">Cookie Policy</Link>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="04" title="Who we share it with">
        <p>
          Nobody. We do not sell, rent, or share your personal data with
          anyone, for any reason. Your enquiry goes to our inbox and stays
          there.
        </p>
      </LegalSection>

      <LegalSection num="05" title="Your rights">
        <p>You can, at any time:</p>
        <ul>
          <li>ask what personal data we hold about you;</li>
          <li>ask us to correct it if it&rsquo;s wrong;</li>
          <li>ask us to delete it.</li>
        </ul>
        <p>
          Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we&rsquo;ll respond
          within 30 days. There&rsquo;s also a dedicated form at{" "}
          <Link to="/data-deletion">Data Deletion</Link> if you&rsquo;d like
          everything removed.
        </p>
      </LegalSection>

      <LegalSection num="06" title="Children">
        <p>
          This site is not directed at children under 13, and our services are
          business services. If you&rsquo;re under 13, please don&rsquo;t submit
          the contact form. If we learn that a child under 13 has sent us
          personal data, we&rsquo;ll delete it.
        </p>
      </LegalSection>

      <LegalSection num="07" title="Data minimisation">
        <p>
          We only collect what&rsquo;s needed to reply to you, and nothing
          more. If a field isn&rsquo;t necessary, we don&rsquo;t ask for it. We
          won&rsquo;t expand what we collect later without updating this policy
          first.
        </p>
      </LegalSection>

      <LegalSection num="08" title="Changes to this policy">
        <p>
          If this policy changes, we&rsquo;ll update the date at the top of
          this page. Material changes will be noted on the site itself.
        </p>
        <p>
          Questions about this policy or your data:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> — Redstone Labs, Delhi, India.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
