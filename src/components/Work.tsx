import { useState } from "react";
import Section from "./Section";
import { projects } from "../data/projects";
import "./work.css";

/* The Shipping Ledger (§01): full-width index table.
   Rows invert on hover; the Folio row expands inline to reveal
   a real screenshot of the app's UI. */

function StatusCell({ status }: { status: string }) {
  return (
    <span className="ledger__status">
      {status === "shipped" && (
        <span className="ledger__status-square" aria-hidden="true" />
      )}
      {status}
    </span>
  );
}

function FolioRow() {
  const [open, setOpen] = useState(false);
  const panelId = "folio-panel";

  return (
    <li className="ledger__item">
      <button
        type="button"
        className="ledger__row ledger__row--toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="ledger__cell ledger__folio">001</span>
        <span className="ledger__cell ledger__name">Folio</span>
        <span className="ledger__cell ledger__desc">
          An open-source alternative to Notion with a block editor, databases, and realtime
          collaboration.
        </span>
        <span className="ledger__cell ledger__stack meta">
          TypeScript, React, TipTap, Yjs, Tauri
        </span>
        <span className="ledger__cell ledger__statuscell">
          <StatusCell status="shipped" />
        </span>
        <span className="ledger__cell ledger__afford meta" aria-hidden="true">
          {open ? "Close" : "View"}
        </span>
      </button>
      {open && (
        <div className="ledger__panel" id={panelId}>
          <figure className="ledger__figure">
            <img
              src="/folio-screenshot.png"
              alt="Screenshot of the Folio app: its real block editor UI"
              className="ledger__screenshot"
              loading="lazy"
            />
            <figcaption className="ledger__caption meta">
              Folio's block editor, running locally. A real capture of the app's UI.
            </figcaption>
          </figure>
          <p className="ledger__repo">
            <a href="https://github.com/Rustys90/folio" target="_blank" rel="noreferrer">
              github.com/Rustys90/folio
            </a>
            <span className="meta ledger__repo-tag">MIT licensed, open source</span>
          </p>
        </div>
      )}
    </li>
  );
}

export default function Work() {
  const rest = projects.filter((p) => !p.expandable);

  return (
    <Section id="work" index="01" title="Work">
      <ul className="ledger" aria-label="Shipping ledger: projects by Redstone Labs">
        <li className="ledger__head meta" aria-hidden="true">
          <span className="ledger__cell">N°</span>
          <span className="ledger__cell">Project</span>
          <span className="ledger__cell">What it is</span>
          <span className="ledger__cell">Stack</span>
          <span className="ledger__cell">Status</span>
          <span className="ledger__cell">&nbsp;</span>
        </li>
        <FolioRow />
        {rest.map((p) => (
          <li key={p.folio} className="ledger__item">
            <a className="ledger__row" href={p.link} target="_blank" rel="noreferrer">
              <span className="ledger__cell ledger__folio">{p.folio}</span>
              <span className="ledger__cell ledger__name">{p.name}</span>
              <span className="ledger__cell ledger__desc">{p.description}</span>
              <span className="ledger__cell ledger__stack meta">{p.stack}</span>
              <span className="ledger__cell ledger__statuscell">
                <StatusCell status={p.status} />
              </span>
              <span className="ledger__cell ledger__afford meta" aria-hidden="true">
                Open
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
