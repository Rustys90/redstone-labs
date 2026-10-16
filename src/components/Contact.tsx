import { useState, type FormEvent } from "react";
import { DustDivider } from "./TraceSystem";
import { OreBlock, PowerCell } from "./Pixel";
import "./contact.css";

/* Contact (§04): "PLACE YOUR BLOCK." — the transmission panel.
   Primary CTA is a direct email link; the form is honest
   mailto-backed — submit opens the visitor's mail client with the
   message pre-addressed to us. Nothing is stored on this site.
   Consent checkbox is explicit and unchecked by default. */

const EMAIL = "s90.vfx@gmail.com";

function TransmissionForm() {
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Project enquiry — ${name || "redstone-labs site"}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="contact__success" role="status">
        <p className="contact__success-title">Transmission received</p>
        <p className="contact__success-text">
          Your mail client opened with the message addressed to {EMAIL}. Nothing
          was stored on this site.
        </p>
        <span className="contact__cells" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <PowerCell key={i} lit />
          ))}
        </span>
        <button
          type="button"
          className="contact__again"
          onClick={() => {
            setSent(false);
            setConsent(false);
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="contact__form" onSubmit={onSubmit}>
      <div className="contact__field">
        <label className="contact__label" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          className="contact__input"
          autoComplete="name"
          required
        />
      </div>
      <div className="contact__field">
        <label className="contact__label" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className="contact__input"
          autoComplete="email"
          required
        />
      </div>
      <div className="contact__field">
        <label className="contact__label" htmlFor="contact-message">
          Project sketch
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="contact__input contact__textarea"
          rows={5}
          required
        />
      </div>
      <label className="contact__consent">
        <input
          type="checkbox"
          className="contact__check"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
        />
        <span>I agree to Redstone Labs contacting me about this enquiry.</span>
      </label>
      <p className="contact__micro">
        THIS FORM OPENS YOUR MAIL CLIENT — NO DATA IS STORED ON THIS SITE.
      </p>
      <button type="submit" className="contact__submit">
        Transmit
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <div className="contact__head">
          <span className="contact__ore" aria-hidden="true">
            <OreBlock />
          </span>
          <span className="contact__index" aria-hidden="true">
            04
          </span>
          <h2 className="contact__title" id="contact-title">
            Place your block.
          </h2>
          <p className="contact__flavor">OPEN CHANNEL — TRANSMISSION PANEL</p>
        </div>
        <div className="contact__panel">
          <div className="contact__direct">
            <p className="contact__direct-key">Prefer email?</p>
            <a className="contact__mail" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <p className="contact__micro">NO SPAM. REPLIES WITHIN 48H.</p>
          </div>
          <TransmissionForm />
        </div>
      </div>
      <DustDivider />
    </section>
  );
}
