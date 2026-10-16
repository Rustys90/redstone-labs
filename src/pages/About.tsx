import Reveal from '../components/Reveal';
import '../styles/tokens.css';
import './About.css';

const STACK = [
  'TypeScript',
  'React',
  'Next.js',
  'Python',
  'PostgreSQL',
  'Yjs',
  'TipTap',
  'Tauri',
  'Three.js',
  'GSAP',
] as const;

const PRINCIPLES = [
  {
    title: 'Design-led',
    body: 'The interface is the product. I start from how something should feel in the hand, then build the engineering to get there — not the other way round.',
  },
  {
    title: 'Ships fast',
    body: 'Working software beats perfect plans. I cut scope aggressively, ship something real, and let actual use decide what gets built next.',
  },
  {
    title: 'Clean-room original',
    body: 'Everything here is built from scratch — no templates reskinned, no cloned products. If a piece exists, it exists because it needed to.',
  },
] as const;

export default function About() {
  return (
    <article className="about">
      <header className="about-hero">
        <Reveal>
          <p className="about-eyebrow">About</p>
          <h1 className="about-title">
            I&apos;m Ankush Chauhan. Redstone Labs is my independent software studio.
          </h1>
        </Reveal>
      </header>

      <Reveal>
        <section className="about-story" aria-labelledby="about-story-heading">
          <h2 id="about-story-heading" className="about-section-title">
            The short version
          </h2>
          <div className="about-prose">
            <p>
              I&apos;m a solo builder based in Delhi, India. Redstone Labs is the name I ship
              under — web apps, mobile apps, and open-source tools, all designed and built
              by hand, one at a time.
            </p>
            <p>
              The studio isn&apos;t built around one product or one market. I go where the
              opportunity is, build fast, and let the work speak for itself. I&apos;d rather
              have two real products in the world than one perfect deck.
            </p>
            <p>
              No clients on retainer, no agency overhead, no inflated claims — just a long
              record of starting things and finishing them.
            </p>
          </div>
        </section>
      </Reveal>

      <section className="about-approach" aria-labelledby="about-approach-heading">
        <Reveal>
          <h2 id="about-approach-heading" className="about-section-title">
            How I work
          </h2>
        </Reveal>
        <div className="about-cards">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 90}>
              <div className="about-card">
                <h3 className="about-card-title">{principle.title}</h3>
                <p className="about-card-body">{principle.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="about-stack" aria-labelledby="about-stack-heading">
          <h2 id="about-stack-heading" className="about-section-title">
            The stack I ship with
          </h2>
          <ul className="about-stack-grid" aria-label="Technologies used">
            {STACK.map((tech) => (
              <li key={tech} className="about-stack-item">
                <span className="about-stack-name">{tech}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section className="about-cta" aria-labelledby="about-cta-heading">
          <h2 id="about-cta-heading" className="about-section-title">
            Have something to build?
          </h2>
          <p className="about-prose">
            If it&apos;s real, interesting, and within reach of one determined builder —
            I&apos;m interested.
          </p>
          <a className="about-cta-link" href="/contact">
            Get in touch
            <span aria-hidden="true">&nbsp;→</span>
          </a>
        </section>
      </Reveal>
    </article>
  );
}
