/**
 * Hero — the showpiece.
 *
 * Left: Press Start 2P masthead (the wordmark IS the hero), Inter
 * lead, VT323 flavor row, two block buttons. Right (desktop): the
 * live schematic panel — bus A enters, branches feed the three
 * discipline nodes (WEB / MOBILE / SYSTEMS), pulses travel on load.
 * Mobile: a single horizontal trace with three small nodes.
 *
 * Copy: "Independent software studio — Delhi. We design, engineer,
 * and ship." + "CHUNK 0,0 · SEED RS-2026 · PWR 15/15".
 */
import { useState } from "react";
import { DustDivider, Node, Pulse, Trace } from "./TraceSystem";
import { CursorArrow } from "./Pixel";
import "./hero.css";

const DISCIPLINES = [
  { label: "WEB", tag: "BLK-01" },
  { label: "MOBILE", tag: "BLK-02" },
  { label: "SYSTEMS", tag: "BLK-03" },
];

/** Hero load sequence: 900ms bus draw, then branches stagger 150ms. */
const BUS_DRAW_MS = 900;
const BRANCH_DRAW_MS = 1200;
const LINK_DRAW_MS = 800;

function usePowered(count: number): [boolean[], (index: number) => void] {
  const [powered, setPowered] = useState<boolean[]>(() =>
    Array.from({ length: count }, () => false),
  );
  const power = (index: number) =>
    setPowered((prev) =>
      prev.map((p, i) => (i <= index ? true : p)),
    );
  return [powered, power];
}

function BranchCircuit({
  powered,
  power,
}: {
  powered: boolean[];
  power: (index: number) => void;
}) {
  return (
    <div className="hero__circuit">
      <div className="hero__buscol">
        <svg
          className="hero__bus"
          viewBox="0 0 8 340"
          preserveAspectRatio="none"
        >
          <Trace
            id="hero-bus"
            d="M4 0 V340"
            width={4}
            tone="wire"
            powerOn={powered[0]}
            duration={BUS_DRAW_MS}
            onDrawn={() => power(0)}
          />
        </svg>
      </div>
      <div className="hero__branches">
        {DISCIPLINES.map((d, i) => {
          const delay = BUS_DRAW_MS + i * 150;
          return (
            <div className="hero__branch" key={d.label}>
              <span
                className={`circuit-junction${powered[i] ? " is-powered" : ""}`}
              />
              <svg
                className="hero__trace"
                viewBox="0 0 120 8"
                preserveAspectRatio="none"
              >
                <Trace
                  id={`hero-branch-${i}`}
                  d="M0 4 H120"
                  width={3}
                  nonScalingStroke
                  delay={delay}
                  duration={BRANCH_DRAW_MS}
                  powerOn={powered[i]}
                  onDrawn={() => power(i)}
                />
                <Pulse
                  targetId={`hero-branch-${i}`}
                  begin={(delay + BRANCH_DRAW_MS) / 1000}
                  x={0}
                  y={4}
                />
              </svg>
              <Node
                powered={powered[i]}
                label={d.label}
                tag={d.tag}
                size={64}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StationCircuit({
  powered,
  power,
}: {
  powered: boolean[];
  power: (index: number) => void;
}) {
  return (
    <div className="hero__station">
      {DISCIPLINES.map((d, i) => (
        <div className="hero__station-cell" key={d.label}>
          <Node powered={powered[i]} label={d.label} tag={d.tag} size={48} />
          {i < DISCIPLINES.length - 1 ? (
            <svg
              className="hero__link"
              viewBox="0 0 120 8"
              preserveAspectRatio="none"
            >
              <Trace
                id={`hero-link-${i}`}
                d="M0 4 H120"
                width={3}
                nonScalingStroke
                delay={i * 150}
                duration={LINK_DRAW_MS}
                powerOn={powered[i + 1]}
                onDrawn={() => power(i + 1)}
              />
              {i === 0 ? (
                <Pulse
                  targetId={`hero-link-${i}`}
                  begin={LINK_DRAW_MS / 1000}
                  x={0}
                  y={4}
                />
              ) : null}
            </svg>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [powered, power] = usePowered(DISCIPLINES.length);
  const online = powered.filter(Boolean).length;

  return (
    <section className="hero" id="top" aria-labelledby="masthead">
      <div className="hero__grid">
        <div className="hero__copy">
          <h1 className="hero__masthead" id="masthead">
            <span className="hero__word">REDSTONE</span>{" "}
            <span className="hero__word">LABS</span>
          </h1>
          <p className="hero__lead">
            Independent software studio — Delhi. We design, engineer, and
            ship.
          </p>
          <p className="hero__flavor">
            CHUNK 0,0 · SEED RS-2026 · PWR 15/15
          </p>
          <div className="hero__ctas">
            <a className="hero__btn hero__btn--primary" href="#contact">
              Start a project
            </a>
            <a className="hero__btn hero__btn--ghost" href="#work">
              See the work
            </a>
          </div>
          <p className="hero__scroll">
            <CursorArrow />
            <span>SCROLL</span>
          </p>
        </div>
        <div className="hero__schematic">
          <div
            className="hero__schem-fig"
            role="img"
            aria-label="Live schematic: power bus A feeding the studio's three disciplines — web, mobile, systems."
          >
            <div aria-hidden="true">
              <BranchCircuit powered={powered} power={power} />
              <StationCircuit powered={powered} power={power} />
            </div>
          </div>
          <p className="hero__schem-notes">
            <span>BUS-A · 4PX</span>
            <span>BR 01–03 · 3PX</span>
            <span>
              NODES {online}/3 · PWR 15/15
            </span>
          </p>
        </div>
      </div>
      <DustDivider powered className="hero__divider" />
    </section>
  );
}
