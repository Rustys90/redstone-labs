import { useState } from "react";
import type { FormEvent } from "react";
import LegalLayout, { LegalSection } from "./LegalLayout";

const UPDATED = "2026-10-16";
const EMAIL = "s90.vfx@gmail.com";

export default function DataDeletion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const valid =
    name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    description.trim().length > 0 &&
    confirmed;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!valid) return;
    const subject = `Data deletion request — ${email.trim()}`;
    const body = [
      "Hello Redstone Labs,",
      "",
      "I am requesting deletion of my personal data.",
      "",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `What to delete: ${description.trim()}`,
      "",
      "I confirm this email address is mine and I want Redstone Labs to delete my personal data associated with it.",
    ].join("\n");
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <LegalLayout title="Data deletion" updated={UPDATED}>
      <LegalSection num="01" title="How it works">
        <ol className="legal__steps">
          <li>
            <span className="legal__step-text">
              <strong>You send the request</strong> using the form below — it
              opens your email app with the request already written, addressed
              to us.
            </span>
          </li>
          <li>
            <span className="legal__step-text">
              <strong>We review it within 30 days</strong> and delete the
              personal data we hold about that email address.
            </span>
          </li>
          <li>
            <span className="legal__step-text">
              <strong>We email you confirmation</strong> once the deletion is
              done.
            </span>
          </li>
        </ol>
      </LegalSection>

      <LegalSection num="02" title="What gets deleted">
        <ul>
          <li>Contact-form enquiries (your name, email address, and message).</li>
          <li>Any other correspondence you ask us to remove.</li>
        </ul>
        <p>
          The one exception: records we&rsquo;re legally required to keep (for
          example, invoices and tax records). If that applies to your request,
          we&rsquo;ll tell you exactly what we kept and why.
        </p>
      </LegalSection>

      <LegalSection num="03" title="Make the request">
        <form className="legal__form" onSubmit={handleSubmit}>
          <div className="legal__field">
            <label htmlFor="deletion-name">Your name</label>
            <input
              id="deletion-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="legal__field">
            <label htmlFor="deletion-email">Your email address</label>
            <p className="legal__hint">
              The address our records are under — we&rsquo;ll reply here with
              confirmation.
            </p>
            <input
              id="deletion-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="legal__field">
            <label htmlFor="deletion-description">What should we delete?</label>
            <p className="legal__hint">
              For example: “everything you hold about me” or “my enquiry emails
              from March”.
            </p>
            <textarea
              id="deletion-description"
              name="description"
              rows={4}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div>

          <div className="legal__field legal__consent">
            <input
              id="deletion-confirm"
              name="confirm"
              type="checkbox"
              checked={confirmed}
              onChange={(event) => setConfirmed(event.target.checked)}
              required
            />
            <label htmlFor="deletion-confirm">
              I confirm this email address is mine and I want Redstone Labs to
              delete my personal data associated with it.
            </label>
          </div>

          <button type="submit" className="legal__button" disabled={!valid}>
            Send deletion request
          </button>

          <p className="legal__note">
            This opens your email app with the request pre-filled — nothing is
            sent until you press send.
          </p>
        </form>
      </LegalSection>
    </LegalLayout>
  );
}
