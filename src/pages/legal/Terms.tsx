import LegalLayout, { type LegalSection } from '../../components/LegalLayout';

const SECTIONS: LegalSection[] = [
  { id: 'who-we-are', title: 'Who we are' },
  { id: 'services', title: 'Services' },
  { id: 'quotes-and-payment', title: 'Quotes and payment' },
  { id: 'intellectual-property', title: 'Intellectual property' },
  { id: 'your-responsibilities', title: 'Your responsibilities' },
  { id: 'no-warranties', title: 'No warranties' },
  { id: 'liability', title: 'Limitation of liability' },
  { id: 'termination', title: 'Termination' },
  { id: 'governing-law', title: 'Governing law' },
  { id: 'changes', title: 'Changes to these terms' },
];

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="16 October 2026" sections={SECTIONS}>
      <p>
        <strong>Short version:</strong> we build custom software for clients. You own what we build
        for you once you&rsquo;ve paid for it. We work honestly and carefully, but we don&rsquo;t
        promise perfection — and our liability is capped at what you paid us.
      </p>

      <section id="who-we-are" aria-labelledby="who-we-are-h">
        <h2 id="who-we-are-h">1. Who we are</h2>
        <p>
          Redstone Labs — a custom software development studio based in Delhi, India. Contact:{' '}
          <a href="mailto:s90.vfx@gmail.com">s90.vfx@gmail.com</a>.
        </p>
      </section>

      <section id="services" aria-labelledby="services-h">
        <h2 id="services-h">2. Services</h2>
        <p>
          We design and build custom software: websites, web applications, and related development
          work. The exact scope of each engagement is agreed per project in a written quote or
          proposal — these terms apply alongside that quote, not instead of it.
        </p>
      </section>

      <section id="quotes-and-payment" aria-labelledby="quotes-and-payment-h">
        <h2 id="quotes-and-payment-h">3. Quotes and payment</h2>
        <ul>
          <li>Work begins after you accept a written quote. Nothing is billed without agreement.</li>
          <li>Payment amounts, milestones, and schedules are set out in the quote.</li>
          <li>
            Significantly late payments may pause work — we&rsquo;ll always warn you first and give
            you a chance to catch up.
          </li>
        </ul>
      </section>

      <section id="intellectual-property" aria-labelledby="intellectual-property-h">
        <h2 id="intellectual-property-h">4. Intellectual property</h2>
        <p>
          <strong>You own the deliverables</strong> — the code, designs, copy, and assets we create
          specifically for your project — once you have paid for them in full. Until final payment,
          ownership remains with us. We may reuse general skills, techniques, and non-identifying
          know-how gained during your project on other work; we won&rsquo;t reuse your proprietary
          content, branding, or confidential material.
        </p>
      </section>

      <section id="your-responsibilities" aria-labelledby="your-responsibilities-h">
        <h2 id="your-responsibilities-h">5. Your responsibilities</h2>
        <p>
          You provide the content, access, credentials, and timely feedback we need to do the work.
          Delays on your side — late content, slow approvals — can move timelines, and we&rsquo;ll
          tell you plainly when that happens.
        </p>
      </section>

      <section id="no-warranties" aria-labelledby="no-warranties-h">
        <h2 id="no-warranties-h">6. No warranties</h2>
        <p>
          We build carefully and put in honest, professional effort on every project. But software
          is complex: we don&rsquo;t warrant that deliverables will be error-free, uninterrupted,
          or suitable for a purpose you didn&rsquo;t tell us about. If something we delivered
          doesn&rsquo;t match the agreed scope, tell us — we&rsquo;ll fix it.
        </p>
      </section>

      <section id="liability" aria-labelledby="liability-h">
        <h2 id="liability-h">7. Limitation of liability</h2>
        <p>
          If something goes wrong on our side, our total liability is limited to the amount you
          paid us for the project in question. We&rsquo;re not liable for indirect or
          consequential losses — lost profits, lost business, or data loss beyond the project
          scope.
        </p>
      </section>

      <section id="termination" aria-labelledby="termination-h">
        <h2 id="termination-h">8. Termination</h2>
        <p>
          Either side can end a project with written notice (email counts). You pay for work
          completed up to that point, and keep the deliverables for completed milestones.
          Refunds follow our <a href="/refund">Refund Policy</a>.
        </p>
      </section>

      <section id="governing-law" aria-labelledby="governing-law-h">
        <h2 id="governing-law-h">9. Governing law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes will be subject to the
          jurisdiction of the courts of Delhi, India.
        </p>
      </section>

      <section id="changes" aria-labelledby="changes-h">
        <h2 id="changes-h">10. Changes to these terms</h2>
        <p>
          We may update these terms and will post the new version here with a fresh date. Ongoing
          projects continue under the terms they started with unless we both agree otherwise.
          Questions: <a href="mailto:s90.vfx@gmail.com">s90.vfx@gmail.com</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
