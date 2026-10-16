import type { ReactNode } from 'react';
import './LegalLayout.css';

export interface LegalSection {
  /** Anchor id of the <section> — must match the id used in the page body. */
  id: string;
  /** Short title shown in the table of contents. */
  title: string;
}

interface LegalLayoutProps {
  /** Page title, rendered as the single <h1>. */
  title: string;
  /** e.g. "16 October 2026". */
  lastUpdated: string;
  /** Sections for the table of contents. */
  sections: LegalSection[];
  children: ReactNode;
}

/**
 * Shared wrapper for legal pages: centered readable column (~70ch),
 * title + last-updated line, and an anchor-linked table of contents.
 * Pages render their own <section id="..."> blocks inside.
 */
export default function LegalLayout({ title, lastUpdated, sections, children }: LegalLayoutProps) {
  return (
    <article className="legal" aria-labelledby="legal-title">
      <header className="legal__header">
        <p className="legal__kicker">Redstone Labs · Legal</p>
        <h1 id="legal-title" className="legal__title">
          {title}
        </h1>
        <p className="legal__meta">
          Last updated: <time dateTime="2026-10-16">{lastUpdated}</time>
        </p>
      </header>

      <nav className="legal__toc" aria-label="Table of contents">
        <p className="legal__toc-heading">On this page</p>
        <ol className="legal__toc-list">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="legal__body">{children}</div>
    </article>
  );
}
