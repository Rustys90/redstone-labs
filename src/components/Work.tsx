import { useEffect, useRef, useState } from "react";
import { DustDivider, Node, Pulse, Trace } from "./TraceSystem";
import { PowerCell } from "./Pixel";
import { usePowered } from "../hooks/usePowered";
import { projects, type Project } from "../data/projects";
import SectionHead from "./SectionHead";
import "./work.css";

/* Work (§01): projects as circuit nodes.
   A vertical bus runs the left rail (desktop); each project taps it
   through a junction square and a horizontal branch trace into a node
   block, then a card with real meta — stack tags, license, status,
   and power cells (shipped = all lit). Nodes power on as their branch
   reaches them. Clicking a title expands an inline detail row along
   the branch. Mobile: rail hidden, nodes stack, short branch stubs. */

function ProjectGlyph({ name }: { name: string }) {
  const attrs = {
    "aria-hidden": true,
    width: 32,
    height: 32,
    viewBox: "0 0 16 16",
    className: "work__glyph",
  } as const;
  if (name === "Folio") {
    return (
      <svg {...attrs}>
        <rect x="2" y="2" width="12" height="2" fill="var(--rs-500)" />
        <rect x="2" y="7" width="12" height="2" fill="var(--rs-500)" />
        <rect x="2" y="12" width="8" height="2" fill="var(--rs-700)" />
        <rect x="12" y="12" width="2" height="2" fill="var(--rs-300)" />
      </svg>
    );
  }
  if (name === "SkillForge") {
    return (
      <svg {...attrs}>
        <rect x="2" y="2" width="12" height="2" fill="var(--cu-300)" />
        <rect x="2" y="12" width="12" height="2" fill="var(--cu-300)" />
        <rect x="2" y="4" width="2" height="8" fill="var(--cu-300)" />
        <rect x="12" y="4" width="2" height="8" fill="var(--cu-300)" />
        <rect x="6" y="6" width="4" height="4" fill="var(--rs-500)" />
      </svg>
    );
  }
  if (name === "Flylio") {
    return (
      <svg {...attrs}>
        <rect x="2" y="10" width="4" height="4" fill="var(--rs-500)" />
        <rect x="6" y="6" width="4" height="4" fill="var(--rs-500)" />
        <rect x="10" y="2" width="4" height="4" fill="var(--rs-500)" />
        <rect x="10" y="10" width="4" height="2" fill="var(--cu-300)" />
      </svg>
    );
  }
  return (
    <svg {...attrs}>
      <rect x="7" y="2" width="2" height="12" fill="var(--cu-300)" />
      <rect x="2" y="7" width="12" height="2" fill="var(--cu-300)" />
      <rect x="6" y="6" width="4" height="4" fill="var(--rs-500)" />
    </svg>
  );
}

function PowerCells({ lit }: { lit: number }) {
  return (
    <span className="work__cells" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <PowerCell key={i} lit={i < lit} />
      ))}
    </span>
  );
}

function WorkNode({ project, index }: { project: Project; index: number }) {
  const { ref, powered } = usePowered<HTMLLIElement>(0.35);
  const [open, setOpen] = useState(false);
  const branchId = `work-branch-${project.folio}`;
  const detailId = `work-detail-${project.folio}`;
  const near = index % 2 === 0;
  const lit = project.power === 15 ? 5 : 4;

  return (
    <li ref={ref} className={powered ? "work__row work__row--powered" : "work__row"}>
      <span className="work__junction" aria-hidden="true" />
      <span className="work__branch" aria-hidden="true">
        <Trace
          id={branchId}
          d={near ? "M0 4 H112" : "M0 4 H248"}
          color={powered ? "red" : "dim"}
        />
      </span>
      <span className="work__branch-m" aria-hidden="true">
        <Trace id={`${branchId}-m`} d="M0 4 H96" color={powered ? "red" : "dim"} />
      </span>
      <span className="work__nodewrap">
        <Node label={powered ? "PWR 15" : "PWR 0"} powered={powered} />
      </span>
      <article className="work__card">
        <div className="work__head">
          <ProjectGlyph name={project.name} />
          <h3 className="work__title">
            <button
              type="button"
              className="work__toggle"
              aria-expanded={open}
              aria-controls={detailId}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="work__name">{project.name}</span>
              <span className="work__chev" aria-hidden="true">
                {open ? "[-]" : "[+]"}
              </span>
            </button>
          </h3>
          <span className="work__folio">N° {project.folio}</span>
        </div>
        <p className="work__desc">{project.description}</p>
        <ul className="work__tags" aria-label={`${project.name} stack`}>
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="work__foot">
          <p className="work__meta">
            PWR {project.power} · ID {project.id} · NEW DELHI
          </p>
          <PowerCells lit={lit} />
        </div>
        {open && (
          <div className="work__detail" id={detailId}>
            <dl className="work__dl">
              <div>
                <dt>Status</dt>
                <dd>{project.status === "shipped" ? "Shipped" : "Live"}</dd>
              </div>
              {project.license && (
                <div>
                  <dt>License</dt>
                  <dd>{project.license}</dd>
                </div>
              )}
              <div>
                <dt>Link</dt>
                <dd>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.linkLabel}
                  </a>
                </dd>
              </div>
            </dl>
            {project.note && <p className="work__note">{project.note}</p>}
          </div>
        )}
      </article>
    </li>
  );
}

export default function Work() {
  const listRef = useRef<HTMLOListElement | null>(null);
  const [busH, setBusH] = useState(0);

  /* The rail bus spans the measured height of the node list so every
     junction square touches it, whatever the cards measure. */
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const measure = () => setBusH(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="work__inner">
        <SectionHead
          index="01"
          title="Work"
          titleId="work-title"
          flavor="TRACE COMPLETE — 4 NODES ON THE WIRE"
        />
        <div className="work__schematic">
          <div className="work__rail" aria-hidden="true">
            {busH > 0 && (
              <>
                <Trace id="work-bus" d={`M8 0 V${busH}`} color="dim" />
                <Pulse pathId="work-bus" />
              </>
            )}
          </div>
          <ol ref={listRef} className="work__nodes" aria-label="Project nodes">
            {projects.map((p, i) => (
              <WorkNode key={p.folio} project={p} index={i} />
            ))}
          </ol>
        </div>
      </div>
      <DustDivider />
    </section>
  );
}
