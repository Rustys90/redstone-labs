import { useEffect, useState } from "react";
import "./hero.css";

interface ManifestRow {
  folio: string;
  name: string;
  description?: string;
  license?: string;
  status?: string;
}

const ROWS: ManifestRow[] = [
  {
    folio: "N°001",
    name: "Folio",
    description: "open-source Notion alternative",
    license: "MIT",
    status: "shipped",
  },
  {
    folio: "N°002",
    name: "SkillForge",
    description: "registry for AI agent skills",
    status: "live",
  },
  { folio: "N°003", name: "Flylio" },
  { folio: "N°004", name: "Mock-GPS apps", description: "Android" },
];

const ROTATE_MS = 6000;

function useManifestIndex(count: number): number {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, [count]);

  return index;
}

function rowLabel(row: ManifestRow): string {
  return [row.folio, row.name, row.description, row.license, row.status]
    .filter(Boolean)
    .join(", ");
}

export default function Hero() {
  const index = useManifestIndex(ROWS.length);
  const row = ROWS[index];

  return (
    <section className="hero" aria-labelledby="masthead">
      <h1 className="hero__masthead" id="masthead">
        Redstone Labs<span className="hero__stop" aria-hidden="true">.</span>
      </h1>
      <p className="hero__lede">
        Independent software studio. We design, build, and ship real products.
      </p>
      <div className="hero__foot">
        <div className="hero__rule" aria-hidden="true" />
        <a
          className="manifest"
          href="#work"
          aria-label={`See the work ledger: ${rowLabel(row)}`}
        >
          <span className="manifest__inner" key={index} aria-live="polite">
            <span className="manifest__primary">
              <span className="manifest__folio">{row.folio}</span>
              <span className="manifest__dot" aria-hidden="true">
                ·
              </span>
              <span className="manifest__name">{row.name}</span>
            </span>
            {row.description || row.license || row.status ? (
              <span className="manifest__secondary">
                {row.description ? (
                  <>
                    <span className="manifest__dot" aria-hidden="true">
                      ·
                    </span>
                    <span>{row.description}</span>
                  </>
                ) : null}
                {row.license ? (
                  <>
                    <span className="manifest__dot" aria-hidden="true">
                      ·
                    </span>
                    <span>{row.license}</span>
                  </>
                ) : null}
                {row.status ? (
                  <>
                    <span className="manifest__dot" aria-hidden="true">
                      ·
                    </span>
                    <span className="manifest__status">
                      <i className="manifest__square" aria-hidden="true" />
                      {row.status}
                    </span>
                  </>
                ) : null}
              </span>
            ) : null}
          </span>
        </a>
      </div>
    </section>
  );
}
