import type { ReactNode } from "react";
import "./section.css";

interface SectionProps {
  id: string;
  /** Folio number without the §, e.g. "01". Rendered as §01 in mono red. */
  index: string;
  /** Sentence-case section title. Never all-caps. */
  title: string;
  children: ReactNode;
}

/**
 * Anchored page section with a Swiss folio marker header.
 * Worker 2 uses this for Work, About, Process, Contact.
 */
export default function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <header className="section__head">
        <span className="section__marker" aria-hidden="true">
          §{index}
        </span>
        <h2 className="section__title" id={headingId}>
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
