import { useRef, useState, type FormEvent } from 'react';
import './DataDeletion.css';

const CONTACT_EMAIL = 's90.vfx@gmail.com';
const REVIEW_DAYS = 30;

interface FormErrors {
  email?: string;
  details?: string;
  confirm?: string;
}

/**
 * Data deletion request. There is no backend on this site, so submitting
 * opens the visitor's email client with a pre-filled request to
 * s90.vfx@gmail.com (same pattern as the contact page) and shows a
 * confirmation state. We never claim the request was "sent" — only that
 * the email draft was prepared.
 */
export default function DataDeletion() {
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [prepared, setPrepared] = useState(false);
  const successRef = useRef<HTMLHeadingElement>(null);

  function validate(): FormErrors {
    const next: FormErrors = {};
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      next.email = 'That doesn\u2019t look like a valid email address.';
    }
    if (!details.trim()) {
      next.details = 'Please tell us what you\u2019d like deleted.';
    }
    if (!confirmed) {
      next.confirm = 'Please tick the confirmation box so we know the request is yours.';
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = 'Data deletion request';
    const body = [
      'Hello Redstone Labs,',
      '',
      'Please delete the personal data you hold about me.',
      '',
      `My email address: ${email.trim()}`,
      '',
      'Details of my request:',
      details.trim(),
      '',
      'I confirm this email address is mine and I want my data deleted.',
    ].join('\n');

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setPrepared(true);
    // Move keyboard focus to the confirmation for screen-reader users.
    window.setTimeout(() => successRef.current?.focus(), 0);
  }

  return (
    <article className="deletion" aria-labelledby="deletion-title">
      <header className="deletion__header">
        <p className="deletion__kicker">Redstone Labs · Privacy</p>
        <h1 id="deletion-title" className="deletion__title">
          Request data deletion
        </h1>
        <p className="deletion__meta">
          Last updated: <time dateTime="2026-10-16">16 October 2026</time>
        </p>
      </header>

      <div className="deletion__body">
        <section aria-labelledby="how-it-works-h">
          <h2 id="how-it-works-h">How it works</h2>
          <ol>
            <li>
              <strong>You send the request</strong> using the form below — it opens your email app
              with the request already written, addressed to us.
            </li>
            <li>
              <strong>We review it within {REVIEW_DAYS} days</strong> and delete the personal data
              we hold about that email address.
            </li>
            <li>
              <strong>We email you confirmation</strong> once the deletion is done.
            </li>
          </ol>
        </section>

        <section aria-labelledby="what-gets-deleted-h">
          <h2 id="what-gets-deleted-h">What gets deleted</h2>
          <ul>
            <li>Contact-form enquiries (your name, email address, and message).</li>
            <li>Any other correspondence you ask us to remove.</li>
          </ul>
          <p>
            The one exception: records we&rsquo;re legally required to keep (for example,
            invoices and tax records). If that applies to your request, we&rsquo;ll tell you
            exactly what we kept and why.
          </p>
        </section>

        {prepared ? (
          <section
            className="deletion__success"
            aria-labelledby="deletion-success-h"
            aria-live="polite"
          >
            <h2 id="deletion-success-h" ref={successRef} tabIndex={-1}>
              Request prepared
            </h2>
            <p>
              Your email app should have opened with the deletion request ready to send to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Just press send — we&rsquo;ll
              confirm within {REVIEW_DAYS} days.
            </p>
            <p>
              Didn&rsquo;t open? Email us directly at{' '}
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Data deletion request')}`}>
                {CONTACT_EMAIL}
              </a>{' '}
              with the subject &ldquo;Data deletion request&rdquo;.
            </p>
          </section>
        ) : (
          <section aria-labelledby="request-form-h">
            <h2 id="request-form-h">Make the request</h2>
            <form className="deletion__form" onSubmit={handleSubmit} noValidate>
              <div className="deletion__field">
                <label htmlFor="deletion-email">Your email address</label>
                <p className="deletion__hint" id="deletion-email-hint">
                  The address our records are under — we&rsquo;ll reply here with confirmation.
                </p>
                <input
                  id="deletion-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="deletion-email-hint deletion-email-error"
                  aria-invalid={errors.email ? true : undefined}
                />
                {errors.email && (
                  <p className="deletion__error" id="deletion-email-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="deletion__field">
                <label htmlFor="deletion-details">What should we delete?</label>
                <p className="deletion__hint" id="deletion-details-hint">
                  For example: &ldquo;everything you hold about me&rdquo; or &ldquo;my enquiry
                  emails from March&rdquo;.
                </p>
                <textarea
                  id="deletion-details"
                  name="details"
                  rows={5}
                  required
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  aria-describedby="deletion-details-hint deletion-details-error"
                  aria-invalid={errors.details ? true : undefined}
                />
                {errors.details && (
                  <p className="deletion__error" id="deletion-details-error" role="alert">
                    {errors.details}
                  </p>
                )}
              </div>

              <div className="deletion__field deletion__field--check">
                <input
                  id="deletion-confirm"
                  name="confirm"
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  aria-describedby="deletion-confirm-error"
                  aria-invalid={errors.confirm ? true : undefined}
                />
                <label htmlFor="deletion-confirm">
                  I confirm this email address is mine and I want Redstone Labs to delete my
                  personal data associated with it.
                </label>
                {errors.confirm && (
                  <p className="deletion__error" id="deletion-confirm-error" role="alert">
                    {errors.confirm}
                  </p>
                )}
              </div>

              <button type="submit" className="deletion__submit">
                Prepare deletion request
              </button>
              <p className="deletion__note">
                This opens your email app with the request pre-filled — nothing is sent until you
                press send.
              </p>
            </form>
          </section>
        )}
      </div>
    </article>
  );
}
