import { Suspense, lazy, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Reveal from "../components/Reveal";
import "./home.css";

// The WebGL hero is code-split so the first paint never waits on Three.js.
const HeroScene = lazy(() => import("../components/HeroScene"));

const services = [
  {
    title: "Web apps",
    description:
      "Production-grade web applications — from first prototype to a system your team can run and extend.",
  },
  {
    title: "Mobile apps",
    description:
      "Native-quality mobile apps for iOS and Android, built from a single codebase and shipped to the stores.",
  },
  {
    title: "Open-source tooling",
    description:
      "Developer tools we build in the open — libraries and utilities the wider community can use and improve.",
  },
];

const featuredWork = [
  {
    name: "Folio",
    tag: "Web app",
    blurb: "A portfolio platform for creative work.",
  },
  {
    name: "SkillForge",
    tag: "Web app",
    blurb: "A registry for AI agent skills.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description:
      "We map the problem, the users, and the constraints — then agree on what success looks like before a line of code is written.",
  },
  {
    title: "Build",
    description:
      "Design and engineering move together in short cycles. You see working software early and give feedback while it still matters.",
  },
  {
    title: "Ship",
    description:
      "We launch, measure, and hand over cleanly — with documentation and a codebase your team can own from day one.",
  },
];

function ServiceIcon({ kind }: { kind: string }) {
  if (kind === "web") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          d="M8 6l-5 6 5 6M16 6l5 6-5 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "mobile") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <rect
          x="7"
          y="2.5"
          width="10"
          height="19"
          rx="2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="18" r="1.2" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M14.5 6.5a4 4 0 0 0-5.6 5.1L3 17.5V21h3.5l5.9-5.9a4 4 0 0 0 5.1-5.6l-2.7 2.7-2.5-.7-.7-2.5 2.9-2.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);

  // ONE orchestrated page-load sequence for the hero overlay.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from(".hero-eyebrow", { y: 22, opacity: 0, duration: 0.7 }, 0.15)
        .from(
          ".hero-title .hero-line",
          { y: 64, opacity: 0, duration: 0.9, stagger: 0.12 },
          0.25,
        )
        .from(".hero-sub", { y: 24, opacity: 0, duration: 0.7 }, 0.6)
        .from(
          ".hero-ctas > *",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          0.75,
        )
        .from(".hero-scroll-hint", { opacity: 0, duration: 0.8 }, 1.1);
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="hero" ref={heroRef} aria-label="Introduction">
        <Suspense fallback={<div className="hero-canvas-fallback" aria-hidden="true" />}>
          <HeroScene />
        </Suspense>
        <div className="hero-veil" aria-hidden="true" />

        <div className="hero-content">
          <p className="hero-eyebrow">Redstone Labs — software studio</p>
          <h1 className="hero-title">
            <span className="hero-line">We build software</span>
            <span className="hero-line hero-line-accent">that ships.</span>
          </h1>
          <p className="hero-sub">
            Web apps, mobile apps, and open-source tooling — designed,
            engineered, and launched from Delhi, India.
          </p>
          <div className="hero-ctas">
            <Link to="/work" className="btn btn-primary">
              See our work
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Start a project
            </Link>
          </div>
        </div>

        <p className="hero-scroll-hint" aria-hidden="true">
          Scroll
        </p>
      </section>

      {/* ---------------------------- Services ---------------------------- */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <Reveal variant="fade">
            <p className="section-eyebrow">What we do</p>
            <h2 id="services-heading" className="section-title">
              Three crafts, one standard
            </h2>
          </Reveal>

          <div className="cards-3">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                variant="rise"
                delay={index * 90}
                className="card"
              >
                <article>
                  <span
                    className="card-icon"
                    aria-hidden="true"
                  >
                    <ServiceIcon
                      kind={index === 0 ? "web" : index === 1 ? "mobile" : "tool"}
                    />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- Featured work -------------------------- */}
      <section
        className="section section-alt"
        aria-labelledby="work-heading"
      >
        <div className="container">
          <Reveal variant="clip">
            <div className="section-head-row">
              <div>
                <p className="section-eyebrow">Selected work</p>
                <h2 id="work-heading" className="section-title">
                  Things we&rsquo;ve shipped
                </h2>
              </div>
              <Link to="/work" className="text-link">
                View all work →
              </Link>
            </div>
          </Reveal>

          <div className="cards-2">
            {featuredWork.map((project, index) => (
              <Reveal key={project.name} variant="rise" delay={index * 110}>
                <Link to="/work" className="work-card" aria-label={`${project.name} — view case study`}>
                  <span className="work-card-tag">{project.tag}</span>
                  <span className="work-card-name">{project.name}</span>
                  <span className="work-card-blurb">{project.blurb}</span>
                  <span className="work-card-cta">View case study →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- Process ----------------------------- */}
      <section className="section" aria-labelledby="process-heading">
        <div className="container">
          <Reveal variant="fade">
            <p className="section-eyebrow">How we work</p>
            <h2 id="process-heading" className="section-title">
              From idea to launch in three steps
            </h2>
          </Reveal>

          <ol className="process-list">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.title}
                variant="fade"
                delay={index * 100}
                className="process-item-wrap"
              >
                <li className="process-item">
                  <span className="process-marker" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ----------------------------- CTA band ---------------------------- */}
      <section className="cta-band" aria-labelledby="cta-heading">
        <div className="container">
          <Reveal variant="clip">
            <div className="cta-panel">
              <h2 id="cta-heading">Have something to build?</h2>
              <p>
                Tell us what you&rsquo;re working on — we&rsquo;ll reply with
                honest thoughts on scope, timeline, and whether we&rsquo;re the
                right team for it.
              </p>
              <Link to="/contact" className="btn btn-primary btn-large">
                Start a project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
