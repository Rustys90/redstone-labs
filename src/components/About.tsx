import Section from "./Section";
import "./about.css";

/* About (§02): meta-column layout. 200px mono meta column plus a
   1fr statement column at 65ch with three numbered principles. */

const principles = [
  {
    n: "01",
    text: "Ship working software, not slide decks. Every claim on this page links to a repo, a license, or a live build.",
  },
  {
    n: "02",
    text: "Build in the open. Progress lives in a shared repo with working builds, so there is always something real to point at.",
  },
  {
    n: "03",
    text: "Hand over everything. The code, the docs, and the deployment land in the client's hands, ready to run.",
  },
];

export default function About() {
  return (
    <Section id="about" index="02" title="About">
      <div className="about__grid">
        <dl className="about__meta meta">
          <div className="about__meta-row">
            <dt>Studio</dt>
            <dd>Redstone Labs</dd>
          </div>
          <div className="about__meta-row">
            <dt>Location</dt>
            <dd>Delhi, India</dd>
          </div>
          <div className="about__meta-row">
            <dt>Status</dt>
            <dd>Independent</dd>
          </div>
          <div className="about__meta-row">
            <dt>Est.</dt>
            <dd>2025</dd>
          </div>
        </dl>
        <div className="about__statement">
          <p>
            Redstone Labs is an independent software studio in Delhi, India, run by Stark. We design,
            build, and ship real products: open-source tools, agent registries, Android apps, and
            client work. This page is the shipping record; the ledger above is the proof.
          </p>
          <ol className="about__principles">
            {principles.map((p) => (
              <li key={p.n} className="about__principle">
                <span className="about__principle-num" aria-hidden="true">
                  {p.n}
                </span>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
