import { DustDivider } from "./TraceSystem";
import SectionHead from "./SectionHead";
import "./about.css";

/* About (§02): the WORLD STATS panel. Game stat-screen language,
   real contents only: base, mode, scope, stack. Recessed-slot tiles
   with VT323 readouts, plus one plain Inter paragraph in Stark's
   voice. No invented clients, awards, or metrics. */

const stats = [
  { key: "Base", value: "New Delhi, IN", sub: "28.6139°N 77.2090°E" },
  { key: "Mode", value: "Independent", sub: "one engineer, no handoffs" },
  { key: "Scope", value: "Worldwide", sub: "remote-first, async-friendly" },
  { key: "Stack", value: "TS · React · Kotlin", sub: "full-stack, web to Android" },
];

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__inner">
        <SectionHead
          index="02"
          title="World stats"
          titleId="about-title"
          flavor="READOUT — 28.6139°N 77.2090°E · CHUNK 0,0"
        />
        <ul className="about__tiles" aria-label="Studio stats">
          {stats.map((s) => (
            <li key={s.key} className="about__tile">
              <span className="about__key">{s.key}</span>
              <span className="about__value">{s.value}</span>
              <span className="about__sub">{s.sub}</span>
            </li>
          ))}
        </ul>
        <p className="about__voice">
          I&rsquo;m Ankush Chauhan. Redstone Labs is my independent studio — I design,
          engineer, and ship software from New Delhi: open-source tools, agent
          infrastructure, and Android apps. The person you talk to is the person
          who builds it. The ledger above is the proof — everything there links
          to a repo, a license, or a live build.
        </p>
      </div>
      <DustDivider />
    </section>
  );
}
