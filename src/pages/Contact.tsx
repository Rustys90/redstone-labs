import { useRef, useState, type FormEvent, type RefObject } from 'react';
import Reveal from '../components/Reveal';
import '../styles/tokens.css';
import './Contact.css';

const CONTACT_EMAIL = 's90.vfx@gmail.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Fields {
  name: string;
  email: string;
  message: string;
  consent: boolean;
  keepDetails: boolean;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

const INITIAL_FIELDS: Fields = {
  name: '',
  email: '',
  message: '',
  consent: false,
  keepDetails: false,
};

function validate(fields: Fields): FieldErrors {
  const errors: FieldErrors = {};
  if (fields.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }
  if (!EMAIL_PATTERN.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (fields.message.trim().length < 10) {
    errors.message = 'Please write a little more — at least 10 characters.';
  }
  if (!fields.consent) {
    errors.consent = 'Consent is required before the form can be sent.';
  }
  return errors;
}

export default function Contact() {
  const [fields, setFields] = useState<Fields>(INITIAL_FIELDS);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  const describedBy = (field: keyof FieldErrors, error: string | undefined): string | undefined =>
    error ? `${field}-error` : undefined;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(fields);
    setErrors(nextErrors);

    const firstInvalid: RefObject<HTMLInputElement | HTMLTextAreaElement | null> | null =
      nextErrors.name
        ? nameRef
        : nextErrors.email
          ? emailRef
          : nextErrors.message
            ? messageRef
            : nextErrors.consent
              ? consentRef
              : null;

    if (firstInvalid) {
      firstInvalid.current?.focus();
      return;
    }

    // No backend on this form: open the visitor's own mail client with the
    // enquiry prefilled, so the message is actually delivered honestly.
    const subject = encodeURIComponent(`Website enquiry from ${fields.name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${fields.name.trim()}`,
        `Email: ${fields.email.trim()}`,
        `Keep my details for future work: ${fields.keepDetails ? 'Yes' : 'No'}`,
        '',
        fields.message.trim(),
      ].join('\n'),
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <article className="contact">
        <div className="contact-success" role="status">
          <h1 className="contact-title">Message received.</h1>
          <p className="contact-success-lede">I&apos;ll reply within 2 business days.</p>
          <p className="contact-success-note">
            Your email app should have opened with the enquiry prefilled — just hit send.
            If it didn&apos;t open, you can email me directly at{' '}
            <a className="contact-inline-link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="contact">
      <header className="contact-hero">
        <Reveal>
          <p className="contact-eyebrow">Contact</p>
          <h1 className="contact-title">Say hello.</h1>
          <p className="contact-lede">
            Three fields, nothing more. This form doesn&apos;t store anything on a
            server — submitting opens your own email app with the message prefilled,
            ready for you to send.
          </p>
        </Reveal>
      </header>

      <Reveal>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-name">
              Name
            </label>
            <input
              ref={nameRef}
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              className={`contact-input${errors.name ? ' has-error' : ''}`}
              value={fields.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describedBy('name', errors.name)}
              onChange={(event) => setFields({ ...fields, name: event.target.value })}
            />
            {errors.name && (
              <p id="name-error" className="contact-error" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-email">
              Email
            </label>
            <input
              ref={emailRef}
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              className={`contact-input${errors.email ? ' has-error' : ''}`}
              value={fields.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy('email', errors.email)}
              onChange={(event) => setFields({ ...fields, email: event.target.value })}
            />
            {errors.email && (
              <p id="email-error" className="contact-error" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-message">
              Message
            </label>
            <textarea
              ref={messageRef}
              id="contact-message"
              name="message"
              rows={6}
              className={`contact-input contact-textarea${errors.message ? ' has-error' : ''}`}
              value={fields.message}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={describedBy('message', errors.message)}
              onChange={(event) => setFields({ ...fields, message: event.target.value })}
            />
            {errors.message && (
              <p id="message-error" className="contact-error" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <div className="contact-field contact-checkbox-field">
            <input
              ref={consentRef}
              id="contact-consent"
              name="consent"
              type="checkbox"
              className="contact-checkbox"
              checked={fields.consent}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={describedBy('consent', errors.consent)}
              onChange={(event) => setFields({ ...fields, consent: event.target.checked })}
            />
            <label className="contact-checkbox-label" htmlFor="contact-consent">
              I agree to be contacted about my enquiry (required)
            </label>
            {errors.consent && (
              <p id="consent-error" className="contact-error" role="alert">
                {errors.consent}
              </p>
            )}
          </div>

          <div className="contact-field contact-checkbox-field">
            <input
              id="contact-keep-details"
              name="keepDetails"
              type="checkbox"
              className="contact-checkbox"
              checked={fields.keepDetails}
              onChange={(event) => setFields({ ...fields, keepDetails: event.target.checked })}
            />
            <label className="contact-checkbox-label" htmlFor="contact-keep-details">
              You may keep my details to follow up on future work.
            </label>
          </div>

          <p className="contact-privacy">
            Your details are used only to respond to this enquiry. Read the{' '}
            <a className="contact-inline-link" href="/privacy">
              privacy policy
            </a>
            .
          </p>

          <button type="submit" className="contact-submit">
            Send enquiry
          </button>
        </form>
      </Reveal>
    </article>
  );
}
