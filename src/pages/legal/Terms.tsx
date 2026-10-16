import { Link } from "react-router-dom";
import LegalLayout, { LegalLede, LegalSection } from "./LegalLayout";

const UPDATED = "2026-10-16";
const EMAIL = "s90.vfx@gmail.com";

export default function Terms() {
  return (
    <LegalLayout title="Terms of service" updated={UPDATED}>
      <LegalLede>
        <strong>Short version:</strong> we build custom software for clients.
        You own what we build for you once you&rsquo;ve paid for it. We work
        honestly and carefully, but we don&rsquo;t promise perfection — and our
        liability is capped at what you paid us.
      </LegalLede>

      <LegalSection num="01" title="Who we are">
        <p>
          Redstone Labs — a custom software development studio based in Delhi,
          India. Contact: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </LegalSection>

      <LegalSection num="02" title="Services">
        <p>
          We design and build custom software: websites, web applications, and
          related development work. The exact scope of each engagement is agreed
          per project in a written quote or proposal — these terms apply
          alongside that quote, not instead of it.
        </p>
      </LegalSection>

      <LegalSection num="03" title="Quotes and payment">
        <ul>
          <li>
            Work begins after you accept a written quote. Nothing is billed
            without agreement.
          </li>
          <li>
            Payment amounts, milestones, and schedules are set out in the quote.
          </li>
          <li>
            Significantly late payments may pause work — we&rsquo;ll always warn
            you first and give you a chance to catch up.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="04" title="Intellectual property">
        <p>
          <strong>You own the deliverables</strong> — the code, designs, copy,
          and assets we create specifically for your project — once you have
          paid for them in full. Until final payment, ownership remains with
          us. We may reuse general skills, techniques, and non-identifying
          know-how gained during your project on other work; we won&rsquo;t
          reuse your proprietary content, branding, or confidential material.
        </p>
      </LegalSection>

      <LegalSection num="05" title="Your responsibilities">
        <p>
          You provide the content, access, credentials, and timely feedback we
          need to do the work. Delays on your side — late content, slow
          approvals — can move timelines, and we&rsquo;ll tell you plainly when
          that happens.
        </p>
      </LegalSection>

      <LegalSection num="06" title="No warranties">
        <p>
          We build carefully and put in honest, professional effort on every
          project. But software is complex: we don&rsquo;t warrant that
          deliverables will be error-free, uninterrupted, or suitable for a
          purpose you didn&rsquo;t tell us about. If something we delivered
          doesn&rsquo;t match the agreed scope, tell us — we&rsquo;ll fix it.
        </p>
      </LegalSection>

      <LegalSection num="07" title="Limitation of liability">
        <p>
          If something goes wrong on our side, our total liability is limited
          to the amount you paid us for the project in question. We&rsquo;re not
          liable for indirect or consequential losses — lost profits, lost
          business, or data loss beyond the project scope.
        </p>
      </LegalSection>

      <LegalSection num="08" title="Termination">
        <p>
          Either side can end a project with written notice (email counts). You
          pay for work completed up to that point, and keep the deliverables
          for completed milestones. Refunds follow our{" "}
          <Link to="/refund">Refund Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection num="09" title="Governing law">
        <p>
          These terms are governed by the laws of India. Any disputes will be
          subject to the jurisdiction of the courts of Delhi, India.
        </p>
      </LegalSection>

      <LegalSection num="10" title="Changes to these terms">
        <p>
          We may update these terms and will post the new version here with a
          fresh date. Ongoing projects continue under the terms they started
          with unless we both agree otherwise. Questions:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
