/* ------------------------------------------------------------------
   Redstone Labs — project ledger data.
   Every entry is a real shipped project; descriptions use plain
   verbs and are kept generic-but-true where the facts are not
   pinned down. No invented details.
   ------------------------------------------------------------------ */

export interface Project {
  /** Folio number, e.g. "001". Rendered as a red oversized numeral. */
  folio: string;
  name: string;
  /** One plain-verb sentence of what it is. */
  description: string;
  /** Stack as shown in the ledger; kept sparse where unconfirmed. */
  stack: string;
  /** Ledger status: shipped, live, or internal. */
  status: "shipped" | "live" | "internal";
  /** Where the row links. */
  link: string;
  /** Only the flagship expands inline with a real screenshot. */
  expandable?: boolean;
}

export const projects: Project[] = [
  {
    folio: "001",
    name: "Folio",
    description: "An open-source alternative to Notion with a block editor, databases, and realtime collaboration.",
    stack: "TypeScript, React, TipTap, Yjs, Tauri",
    status: "shipped",
    link: "https://github.com/Rustys90/folio",
    expandable: true,
  },
  {
    folio: "002",
    name: "SkillForge",
    description: "A registry that indexes, scans, and installs AI agent skills from public GitHub.",
    stack: "Next.js, Postgres, Vercel",
    status: "live",
    link: "https://skillforge-jet-chi.vercel.app",
  },
  {
    folio: "003",
    name: "Flylio",
    description: "A flight search and booking interface that explores a simpler way to book travel.",
    stack: "Duffel",
    status: "live",
    link: "https://flylio.netlify.app",
  },
  {
    folio: "004",
    name: "Mock-GPS apps",
    description: "Region-locked mock-location tools for Android that teleport only inside selected island regions.",
    stack: "Android, Kotlin",
    status: "shipped",
    link: "https://github.com/Rustys90",
  },
  {
    folio: "005",
    name: "Travel platforms and wallet simulators",
    description: "Web apps and simulators built to prototype travel and wallet flows.",
    stack: "Web",
    status: "internal",
    link: "https://github.com/Rustys90",
  },
];
