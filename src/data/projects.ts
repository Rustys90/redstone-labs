/* ------------------------------------------------------------------
   Redstone Labs — project index data (voxel round 3).
   Every entry is a real shipped project. Descriptions are plain
   verbs; meta (stack, license, status) is real and checkable.
   No invented versions, metrics, or testimonials.
   ------------------------------------------------------------------ */

export interface Project {
  /** Folio number, e.g. "001". */
  folio: string;
  /** Schematic block ID, e.g. "RS-001". */
  id: string;
  name: string;
  /** One plain-verb sentence of what it is. */
  description: string;
  /** Stack tags, shown as chips. */
  stack: string[];
  /** Only when the license is known for certain. */
  license?: string;
  /** Real shipping state. */
  status: "shipped" | "live";
  /** Redstone power level: shipped = 15 (all cells lit), live = 12. */
  power: 15 | 12;
  /** Where the detail row links. */
  link: string;
  /** Human-readable link text. */
  linkLabel: string;
  /** Extra honest note shown in the detail row, when needed. */
  note?: string;
}

export const projects: Project[] = [
  {
    folio: "001",
    id: "RS-001",
    name: "Folio",
    description:
      "An open-source Notion alternative with a block editor, databases, and realtime collaboration.",
    stack: ["TypeScript", "React", "TipTap", "Yjs", "Tauri"],
    license: "MIT",
    status: "shipped",
    power: 15,
    link: "https://github.com/Rustys90/folio",
    linkLabel: "github.com/Rustys90/folio",
    note: "Flagship. Open source — the repo is the proof.",
  },
  {
    folio: "002",
    id: "RS-002",
    name: "SkillForge",
    description:
      "A registry that indexes, scans, and installs AI agent skills from public GitHub.",
    stack: ["Next.js", "Postgres", "Vercel"],
    status: "live",
    power: 12,
    link: "https://skillforge-jet-chi.vercel.app",
    linkLabel: "skillforge-jet-chi.vercel.app",
  },
  {
    folio: "003",
    id: "RS-003",
    name: "Flylio",
    description:
      "A flight search and booking interface exploring a simpler way to book travel.",
    stack: ["Duffel API"],
    status: "live",
    power: 12,
    link: "https://flylio.netlify.app",
    linkLabel: "flylio.netlify.app",
  },
  {
    folio: "004",
    id: "RS-004",
    name: "Mock-GPS apps",
    description:
      "Region-locked Android apps that teleport mock location only inside selected island regions.",
    stack: ["Kotlin", "Android"],
    status: "shipped",
    power: 15,
    link: "https://github.com/Rustys90",
    linkLabel: "github.com/Rustys90",
    note: "Shipped as signed APKs; source lives on the studio profile.",
  },
];
