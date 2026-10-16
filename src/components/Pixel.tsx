/**
 * Pixel — box-shadow pixel sprites, zero image bytes.
 *
 * One base element; the `box-shadow` list plots the pixels (clean-room
 * pixel technique). All sprites are original 8x8 / 16x16 designs drawn
 * for this site — no game assets, no trademarked imagery.
 *
 * Rules: sprites are decorative (aria-hidden); meaning is carried by
 * adjacent text. No sprite exceeds 16x16. Ornament pixels in 4px units.
 */
import type { CSSProperties } from "react";

type Grid = string[];
type Palette = Record<string, string>;

function toBoxShadow(grid: Grid, palette: Palette, px: number): string {
  const shadows: string[] = [];
  grid.forEach((row, y) => {
    Array.from(row).forEach((ch, x) => {
      if (ch === "." || ch === " ") return;
      const color = palette[ch];
      if (!color) return;
      shadows.push(`${x * px}px ${y * px}px 0 0 ${color}`);
    });
  });
  return shadows.join(",");
}

export interface PixelSpriteProps {
  /** Pixel unit in px (default 4 — the ornament unit). Max 2x scale. */
  px?: number;
  className?: string;
  style?: CSSProperties;
  /** Accessible name; omit for decorative (aria-hidden) sprites. */
  title?: string;
}

interface SpriteDef {
  grid: Grid;
  palette: Palette;
}

function PixelSprite({
  grid,
  palette,
  px = 4,
  className,
  style,
  title,
}: PixelSpriteProps & SpriteDef) {
  const w = Math.max(...grid.map((row) => row.length)) * px;
  const h = grid.length * px;
  /* The box-shadow copies are element-sized, so the painted cell must be a
     single px×px unit anchored at the outer box's top-left; the outer box
     reserves the full grid footprint for layout. */
  return (
    <span
      className={["pixel-sprite", className ?? ""].filter(Boolean).join(" ")}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      style={{ width: w, height: h, position: "relative", ...style }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: px,
          height: px,
          boxShadow: toBoxShadow(grid, palette, px),
        }}
      />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* RS rune — 8x8. An original angular R built from blocks (not a
   letterform trace): bowl up top, diagonal leg. Nav, footer, favicon. */

const RS_RUNE: SpriteDef = {
  grid: [
    ".XXXXX..",
    ".X...X..",
    ".X...X..",
    ".XXXXX..",
    ".XX.....",
    ".X.X....",
    ".X..X...",
    ".X...X..",
  ],
  palette: { X: "var(--rs-500)" },
};

export function RSRune(props: PixelSpriteProps) {
  return <PixelSprite {...RS_RUNE} {...props} />;
}

/** Alias (sibling workers' import spelling). */
export const RsRune = RSRune;

/* ------------------------------------------------------------------ */
/* Ore block — 16x16. --surface-2 base with deterministic 3-tone
   dither, 5 --ore-400 glints + 2 --rs-500 glints. Section markers. */

function oreGrid(): Grid {
  const glints: Record<string, string> = {
    "3,2": "O",
    "11,4": "O",
    "6,7": "O",
    "13,10": "O",
    "4,12": "O",
    "9,9": "R",
    "12,13": "R",
  };
  const rows: string[] = [];
  for (let y = 0; y < 16; y++) {
    let row = "";
    for (let x = 0; x < 16; x++) {
      const g = glints[`${x},${y}`];
      if (g) {
        row += g;
      } else if ((x * 5 + y * 11) % 7 < 2) {
        row += "D"; // dark dither
      } else if ((x * 3 + y * 7) % 11 < 2) {
        row += "L"; // light dither
      } else {
        row += "B"; // base
      }
    }
    rows.push(row);
  }
  return rows;
}

const ORE_BLOCK: SpriteDef = {
  grid: oreGrid(),
  palette: {
    B: "var(--surface-2)",
    D: "var(--hairline)",
    L: "var(--ink-faint)",
    O: "var(--ore-400)",
    R: "var(--rs-500)",
  },
};

export function OreBlock(props: PixelSpriteProps) {
  return <PixelSprite {...ORE_BLOCK} {...props} />;
}

/* ------------------------------------------------------------------ */
/* Redstone torch — 8x16. --cu-300 stick, flame head that lights when
   its section is in view (powered state). Divider ornament. */

const TORCH_GRID: Grid = [
  "...FF...",
  "..FFFF..",
  "..FCFF..",
  "..FFFF..",
  "...SS...",
  "...SS...",
  "...SS...",
  "...SS...",
  "...SS...",
  "...SS...",
  "...SS...",
  "...SS...",
  "...SS...",
  "...SS...",
  "...SS...",
  "...SS...",
];

export interface TorchProps extends PixelSpriteProps {
  /** Flame head lit (section in view). Default false. */
  lit?: boolean;
}

export function Torch({ lit = false, ...props }: TorchProps) {
  return (
    <PixelSprite
      grid={TORCH_GRID}
      palette={{
        S: "var(--cu-300)",
        F: lit ? "var(--rs-400)" : "var(--cu-500)",
        C: lit ? "var(--rs-300)" : "var(--cu-300)",
      }}
      style={
        lit
          ? { filter: "drop-shadow(0 0 6px rgba(255,107,94,0.6))" }
          : undefined
      }
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Power cell — 8x8. --cu-500 dim / --rs-500 lit. Repeating status
   glyph in the work index: each project row carries cells showing
   its power (shipped = all lit). */

const CELL_GRID: Grid = [
  "XXXXXXXX",
  "XFFFFFFX",
  "XFFFFFFX",
  "XFFFFFFX",
  "XFFFFFFX",
  "XFFFFFFX",
  "XFFFFFFX",
  "XXXXXXXX",
];

export interface PowerCellProps extends PixelSpriteProps {
  lit?: boolean;
}

export function PowerCell({ lit = false, ...props }: PowerCellProps) {
  return (
    <PixelSprite
      grid={CELL_GRID}
      palette={
        lit
          ? { X: "var(--rs-500)", F: "var(--rs-600)" }
          : { X: "var(--cu-500)", F: "var(--surface-2)" }
      }
      {...props}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Cursor arrow — 8x8, --ink. "Scroll" hint in the hero; inline
   ornament only (custom cursors are banned for a11y). */

const ARROW_GRID: Grid = [
  "...XX...",
  "...XX...",
  "...XX...",
  "...XX...",
  "...XX...",
  ".XXXXX..",
  "..XXX...",
  "...X....",
];

export function CursorArrow(props: PixelSpriteProps) {
  return (
    <PixelSprite
      grid={ARROW_GRID}
      palette={{ X: "var(--ink)" }}
      {...props}
    />
  );
}

/** Generic sprite for one-off original grids (work-section icons etc.). */
export function CustomSprite({
  grid,
  palette,
  ...props
}: PixelSpriteProps & SpriteDef) {
  return <PixelSprite grid={grid} palette={palette} {...props} />;
}
