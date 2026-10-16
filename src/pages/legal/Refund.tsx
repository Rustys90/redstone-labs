import LegalLayout, { LegalLede, LegalSection } from "./LegalLayout";

const UPDATED = "2026-10-16";
const EMAIL = "s90.vfx@gmail.com";

export default function Refund() {
  return (
    <LegalLayout title="Refund policy" updated={UPDATED}>
      <LegalLede>
        <strong>Short version:</strong> our work is project-based, so refunds
        are milestone-based: full refund before work starts, pro-rata refunds
        after that. No hidden fees, no fine-print traps.
      </LegalLede>

      <LegalSection num="01" title="Our approach">
        <p>
          We&rsquo;re a small studio and we price per project, not per hour or
          per seat. Every project is split into milestones agreed in your
          written quote, and refunds follow those same milestones.
          What&rsquo;s written below is the whole policy — there&rsquo;s no
          separate fine print.
        </p>
      </LegalSection>

      <LegalSection num="02" title="Full refund before work starts">
        <p>
          If you cancel before we&rsquo;ve started work on your project — no
          code written, no design begun — you get a{" "}
          <strong>full refund</strong> of anything you&rsquo;ve paid.
        </p>
      </LegalSection>

      <LegalSection num="03" title="Milestone-based refunds after work starts">
        <p>If you cancel mid-project:</p>
        <ul>
          <li>
            <strong>Completed and accepted milestones are non-refundable</strong>{" "}
            — you&rsquo;ve received that work, and you keep it.
          </li>
          <li>
            <strong>The current, incomplete milestone is refunded pro-rata</strong>{" "}
            for the work not yet done.
          </li>
          <li>
            <strong>Future milestones you haven&rsquo;t paid for are simply
            cancelled</strong>{" "}
            — nothing owed, nothing to refund.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="04" title="How refunds are paid">
        <p>
          Refunds go back to your original payment method within{" "}
          <strong>14 days</strong> of us agreeing the amount. We&rsquo;ll
          confirm the refund by email once it&rsquo;s sent.
        </p>
      </LegalSection>

      <LegalSection num="05" title="No fees deducted">
        <p>
          No cancellation fees. No processing fees deducted from refunds. The
          amount we quote is the amount you pay; the refund we agree is the
          refund you get.
        </p>
      </LegalSection>

      <LegalSection num="06" title="Something wrong with the work?">
        <p>
          If a deliverable doesn&rsquo;t match what was agreed, tell us first
          — we&rsquo;ll fix it. Fixes within the agreed scope are free. This
          refund policy covers cancellations; defects are handled as fixes, not
          refunds, unless we agree otherwise.
        </p>
        <p>
          Questions about a refund:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> — Redstone Labs, Delhi, India.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
