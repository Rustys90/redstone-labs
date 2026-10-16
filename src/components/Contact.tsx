import Section from "./Section";
import "./contact.css";

/* Contact (§04): the giant email. One line, then the address set
   large with a red underline that thickens on hover, wrapped in a
   mailto link with a 48px hit area on mobile. */

const EMAIL = "redstonelabssupport@gmail.com";

export default function Contact() {
  return (
    <Section id="contact" index="04" title="Contact">
      <p className="contact__line">Start with an email.</p>
      <a className="contact__email" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <p className="contact__hint">
        Include what you want built, your timeline, and your budget range.
      </p>
    </Section>
  );
}
