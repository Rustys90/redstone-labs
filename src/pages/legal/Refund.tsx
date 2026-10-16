import LegalLayout, { type LegalSection } from '../../components/LegalLayout';

const SECTIONS: LegalSection[] = [
  { id: 'our-approach', title: 'Our approach' },
  { id: 'before-work-starts', title: 'Full refund before work starts' },
  { id: 'milestone-refunds', title: 'Milestone-based refunds' },
  { id: 'how-refunds-are-paid', title: 'How refunds are paid' },
  { id: 'no-hidden-fees', title: 'No hidden fees' },
  { id: 'something-wrong', title: 'Something wrong with the work?' },
  { id: 'contact', title: 'Contact' },
];

export default function Refund() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="16 October 2026" sections={SECTIONS}>
      <p>
        <strong>Short version:</strong> our work is project-based, so refunds are milestone-based:
        full refund before work starts, pro-rata refunds after that. No hidden fees, no fine-print
        traps.
      </p>

      <section id="our-approach" aria-labelledby="our-approach-h">
        <h2 id="our-approach-h">1. Our approach</h2>
        <p>
          We&rsquo;re a small studio and we price per project, not per hour or per seat. Every
          project is split into milestones agreed in your written quote, and refunds follow those
          same milestones. What&rsquo;s written below is the whole policy — there&rsquo;s no
          separate fine print.
        </p>
      </section>

      <section id="before-work-starts" aria-labelledby="before-work-starts-h">
        <h2 id="before-work-starts-h">2. Full refund before work starts</h2>
        <p>
          If you cancel before we&rsquo;ve started work on your project — no code written, no
          design begun — you get a <strong>full refund</strong> of anything you&rsquo;ve paid.
        </p>
      </section>

      <section id="milestone-refunds" aria-labelledby="milestone-refunds-h">
        <h2 id="milestone-refunds-h">3. Milestone-based refunds after work starts</h2>
        <p>If you cancel mid-project:</p>
        <ul>
          <li>
            <strong>Completed and accepted milestones are non-refundable</strong> — you&rsquo;ve
            received that work, and you keep it.
          </li>
          <li>
            <strong>The current, incomplete milestone is refunded pro-rata</strong> for the work
            not yet done.
          </li>
          <li>
            <strong>Future milestones you haven&rsquo;t paid for are simply cancelled</strong> —
            nothing owed, nothing to refund.
          </li>
        </ul>
      </section>

      <section id="how-refunds-are-paid" aria-labelledby="how-refunds-are-paid-h">
        <h2 id="how-refunds-are-paid-h">4. How refunds are paid</h2>
        <p>
          Refunds go back to your original payment method within <strong>14 days</strong> of us
          agreeing the amount. We&rsquo;ll confirm the refund by email once it&rsquo;s sent.
        </p>
      </section>

      <section id="no-hidden-fees" aria-labelledby="no-hidden-fees-h">
        <h2 id="no-hidden-fees-h">5. No hidden fees</h2>
        <p>
          No cancellation fees. No processing fees deducted from refunds. The amount we quote is
          the amount you pay; the refund we agree is the refund you get.
        </p>
      </section>

      <section id="something-wrong" aria-labelledby="something-wrong-h">
        <h2 id="something-wrong-h">6. Something wrong with the work?</h2>
        <p>
          If a deliverable doesn&rsquo;t match what was agreed, tell us first — we&rsquo;ll fix
          it. Fixes within the agreed scope are free. This refund policy covers cancellations;
          defects are handled as fixes, not refunds, unless we agree otherwise.
        </p>
      </section>

      <section id="contact" aria-labelledby="contact-h">
        <h2 id="contact-h">7. Contact</h2>
        <p>
          Questions about a refund:{' '}
          <a href="mailto:s90.vfx@gmail.com">s90.vfx@gmail.com</a> — Redstone Labs, Delhi, India.
        </p>
      </section>
    </LegalLayout>
  );
}
