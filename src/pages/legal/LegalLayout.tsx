import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface LegalLayoutProps {
  /** Short document name, e.g. "Privacy policy". */
  title: string;
  /** ISO date of last republication, e.g. "2026-10-16". */
  updated: string;
  children: ReactNode;
}

function BackLink() {
  return (
    <p className="legal__back">
      <Link to="/">← Back to the studio</Link>
    </p>
  );
}

/**
 * Shared shell for the five legal documents: kicker, title,
 * mono last-updated line, 65ch body, back-to-home links.
 */
export default function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <article className="legal">
      <BackLink />
      <header className="legal__head">
        <p className="legal__kicker">
          <span aria-hidden="true">§</span> Redstone Labs · Legal
        </p>
        <h1 className="legal__title">{title}</h1>
        <p className="legal__updated">
          Last updated: <time dateTime={updated}>{updated}</time>
        </p>
      </header>
      <div className="legal__body">{children}</div>
      <footer className="legal__foot">
        <BackLink />
      </footer>
    </article>
  );
}

interface LegalSectionProps {
  /** Section number as shown on the live policy, e.g. "01". */
  num: string;
  /** Sentence-case heading carried over from the live policy. */
  title: string;
  children: ReactNode;
}

/** One numbered § section of a legal document. */
export function LegalSection({ num, title, children }: LegalSectionProps) {
  const headingId = `legal-section-${num}`;
  return (
    <section className="legal__section" aria-labelledby={headingId}>
      <h2 className="legal__h2" id={headingId}>
        <span className="legal__num" aria-hidden="true">
          §{num}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

/** The "Short version" lede paragraph carried over from the live policy. */
export function LegalLede({ children }: { children: ReactNode }) {
  return <p className="legal__lede">{children}</p>;
}
