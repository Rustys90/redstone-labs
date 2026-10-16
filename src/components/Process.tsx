import Section from "./Section";
import "./process.css";

/* Process (§03): numbered spec list with hairlines. Each row has a
   red mono number, an Archivo 600 title, one plain sentence, and a
   right-aligned mono note. */

const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    text: "Describe what you want built in plain words, and we turn it into a written spec with a fixed scope before any code is written.",
    note: "Fixed-scope quote in days",
  },
  {
    n: "02",
    title: "We build in the open",
    text: "You watch progress land in a shared repo as working builds, so you always see the real thing instead of a status update.",
    note: "Working build every week",
  },
  {
    n: "03",
    title: "You own the result",
    text: "The code, the docs, and the deployment land in your hands with everything needed to run it, extend it, or hand it on.",
    note: "Full handover, documented",
  },
];

export default function Process() {
  return (
    <Section id="process" index="03" title="Process">
      <ol className="process__list">
        {steps.map((s) => (
          <li key={s.n} className="process__row">
            <span className="process__num" aria-hidden="true">
              {s.n}
            </span>
            <div className="process__main">
              <h3 className="process__title">{s.title}</h3>
              <p className="process__text">{s.text}</p>
            </div>
            <p className="process__note meta">{s.note}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
