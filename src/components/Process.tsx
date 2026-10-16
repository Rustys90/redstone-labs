import { useEffect, useRef, useState } from "react";
import { DustDivider, Pulse, Trace } from "./TraceSystem";
import { usePowered } from "../hooks/usePowered";
import SectionHead from "./SectionHead";
import "./process.css";

/* Process (§03): numbered schematic stages on one horizontal trace.
   01 SURVEY → 02 WIRE → 03 POWER → 04 SHIP. The wire draws
   left-to-right on scroll and each station powers on in turn through
   its junction square. Mobile: stations stack with a short stub
   trace above each one. */

interface Stage {
  n: string;
  name: string;
  text: string;
}

const stages: Stage[] = [
  {
    n: "01",
    name: "Survey",
    text: "We map the scope in a one-page spec — what ships, what doesn't, and what it costs.",
  },
  {
    n: "02",
    name: "Wire",
    text: "We lay out the architecture and the interfaces before a single feature is coded.",
  },
  {
    n: "03",
    name: "Power",
    text: "We build in the open, with working builds you can touch every week.",
  },
  {
    n: "04",
    name: "Ship",
    text: "We launch, hand over the code and the keys, and stay on the wire for fixes.",
  },
];

function Station({ stage, index }: { stage: Stage; index: number }) {
  const { ref, powered } = usePowered<HTMLLIElement>(0.4);
  const branchId = `process-branch-${stage.n}`;
  return (
    <li
      ref={ref}
      className={powered ? "process__station process__station--powered" : "process__station"}
    >
      <span className="process__branch-m" aria-hidden="true">
        <Trace id={branchId} d="M0 4 H96" color={powered ? "red" : "dim"} />
      </span>
      <span className="process__junction" aria-hidden="true" />
      <span className="process__num" aria-hidden="true">
        {stage.n}
      </span>
      <h3 className="process__name">{stage.name}</h3>
      <p className="process__text">{stage.text}</p>
      <span className="process__step" aria-hidden="true">
        STEP {index + 1} / 4
      </span>
    </li>
  );
}

export default function Process() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [wireW, setWireW] = useState(0);

  /* The wire spans the measured track width; the path is authored in
     px (1 unit = 1px) so the trace fills its wrapper exactly. */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setWireW(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="process" className="process" aria-labelledby="process-title">
      <div className="process__inner">
        <SectionHead
          index="03"
          title="Process"
          titleId="process-title"
          flavor="SIGNAL PATH — SURVEY TO SHIP IN 4 STATIONS"
        />
        <div ref={trackRef} className="process__track">
          <div className="process__wire" aria-hidden="true">
            {wireW > 0 && (
              <>
                <Trace id="process-wire" d={`M0 4 H${wireW}`} color="dim" />
                <Pulse pathId="process-wire" />
              </>
            )}
          </div>
          <ol className="process__stations" aria-label="Process stages">
            {stages.map((s, i) => (
              <Station key={s.n} stage={s} index={i} />
            ))}
          </ol>
        </div>
      </div>
      <DustDivider />
    </section>
  );
}
