# REDSTONE UNIVERSE — Voxel Direction (Round 3)

**Status:** committed direction for the Redstone Labs redesign. Build workers execute this; do not reinterpret it.
**Date:** 2026-10-16. Owner: Stark (Redstone Labs, Delhi, India).
**Supersedes:** `DESIGN-DIRECTION.md` (v2, Swiss paper-white — rejected as "too generic"). That document is archived, not a reference.

---

## 1. Direction brief (design-inspiration format)

**Subject:** The public face of Redstone Labs — Stark's independent software studio (Delhi-based full-stack engineer; ships Folio, SkillForge, Flylio, mobile apps). Single page; proof-of-shipment for collaborators, clients, recruiters, curious developers.

**Feeling (one sentence):** A powered schematic you can walk through — the page reads as one continuous redstone circuit, and scrolling lays the dust that powers each section on.

**Three adjectives:** blocky, charged, deliberate.

### The three dials

- **DESIGN_VARIANCE: high, but on-grid.** Everything snaps to an 8px block grid; radius 0 everywhere. Variance comes from the schematic itself — branching traces, powered vs unpowered node states, pixel ornament — not from mixed aesthetics. Justification: the voxel universe is geometric by nature; freedom lives inside the grid, the way a great build lives inside the chunk.
- **MOTION_INTENSITY: one orchestrated system.** The *only* auto-motion is the circuit: traces draw on scroll, charge pulses travel the paths, nodes power on when reached. No fade-and-slide-up section reveals, no parallax, no floating decorations. Justification: motion must be the product's own mechanic (power flowing through a circuit), never atmosphere. If a motion doesn't read as electricity, it doesn't ship.
- **VISUAL_DENSITY: high.** Mono annotation layer (coordinates, power levels, block IDs), stat tiles, node index. Justification: density is the anti-slop and the flavor — a schematic is *supposed* to be annotated. Quiet moments come from section spacing, not emptiness.

### Family and substyle

**Family 7: Playful / Geometric** — but pulled toward **Family 6: Technical / Mono** for the annotation layer. This is the permitted blend: the *play* is in the blocky forms and the power mechanic; the *discipline* is in the mono-flavored schematic annotations and real data. One family leads (Playful/Geometric), one supports (Technical/Mono); the support never becomes the lead.

**What was rejected, and why:**

- **Refined Minimal dark (Linear mode):** the single most dangerous neighbor. A dark page with a red accent and Inter headlines collapses straight into v1's failure. The pixel display face and the schematic-as-structure are the load-bearing differences — remove either and we're back in slop.
- **Technical / Mono as lead:** the terminal-as-hero is a recognizable trope for dev-studio sites and reads as costume when it's the whole personality. Mono is our *annotation voice*, not our *display voice*.
- **Brutalist loud (Slam Jam mode):** wrong volume for trust. We borrow its radius-0 discipline and block geometry, not its noise.
- **Swiss / v2:** archived. Sharing v2's density and real-data discipline, but v2's paper-white ledger is the thing Stark called generic. This direction is its deliberate inversion on the light/dark axis with a completely different information language (circuit, not ledger).

---

## 2. References (6, three actionable traits each)

Every trait below is buildable — a value, a size, a behavior. Provenance noted honestly.

| # | Reference | Trait 1 | Trait 2 | Trait 3 |
|---|---|---|---|---|
| 1 | Voxel-game HUD vernacular (inventory slots, hotbar — from subject-matter knowledge, re-implemented original) | **Recessed slot construction:** 2px inset borders (light top/left, dark bottom/right) make panels read as set *into* the surface. Our form inputs, project nodes, and stat tiles use this recessed construction. | **Selected-slot outline:** the active hotbar slot gets a 2px solid bright outline. Our nav's active item gets a 2px solid redstone outline — same mechanic, original geometry. | **Hard stepped text shadow:** overlay pixel text carries a 1px-offset hard dark shadow for legibility on busy grounds (no blur). Our pixel display type gets a 4px stepped hard shadow on the hero, never a blurred drop shadow. |
| 2 | GitHub contribution graph (blocky data as design) | **Single-hue 5-step ramp:** intensity is encoded in lightness steps of one hue, not multiple colors. Our trace power states and the "shipped" strip use the redstone ramp's 5 steps the same way. | **Every square is real data:** no cell is decoration. Rule adopted as law: every pixel ornament on our page encodes state (powered/unpowered/step index) or divides sections — never pure decoration. | **Friendly micro-rounding rejected:** the graph rounds 2px; we go radius 0. The sharpness *is* the differentiator — write it down so no builder "softens" it later. |
| 3 | Factorio circuit-network overlay (from game knowledge) | **Orthogonal routing only:** wires turn at 90°, never diagonally. Adopted as the schematic law: every hand-designed trace path uses axis-aligned segments; junction dots are 6px squares where paths meet. | **Signal readout rows:** combinators display icon + number rows. Our mono annotation rows under nodes ("PWR 15 · ID RS-042 · NEW DELHI") copy the *pattern*, not the content. | **Hidden-logic-layer reveal:** alt-mode exposes the wiring under the world. Our day/night toggle plays this role — the schematic layer stays, the world tint shifts. |
| 4 | CRT terminal / DEC VT320 heritage | **Phosphor glow on dark:** bright text blooms slightly against near-black. Powered traces and the hero pixel type get a tight glow (`drop-shadow` ≤ 8px, redstone hue only) — glow is a *state* (powered), never a style. | **Terse status lines:** "READY.", "SIGNAL LOCK". Our mono flavor copy is terse caps: "TRACE COMPLETE", "NODE POWERED", "CHUNK LOADED". | **Scanline rhythm rejected:** we do not add scanlines or flicker. Borrowed the glow and the voice, not the CRT costume — one layer of nostalgia is enough. |
| 5 | basement.studio (documented in aesthetic-directions) | **Type is the image:** the oversized studio name is the hero, no illustration. Our hero is the pixel masthead + the live schematic — typography and circuit, zero illustration. | **Two colors, zero gradients.** Adopted absolutely: redstone red + copper + neutrals; no gradient fills anywhere (glow ≠ gradient). | **Loud/quiet alternation:** dense schematic sections alternate with quiet node-garden spacing. Our section rhythm follows this. |
| 6 | fly.io (documented in aesthetic-directions) | **Status indicators used semantically:** ●/◯ mean something. Our powered/unpowered node states are the same idea in voxel form. | **Real numbers as design elements.** Our equivalents: power levels (0–15), block IDs, coordinates, versions, license strings — all real, all checkable. | **Mono carries metadata, never headlines.** VT323 is annotation-only; headlines are pixel display. The register split is the rule. |

### Committed direction (the one-accent / one-move / one-typeface commit)

- **One signature accent: redstone red.** The studio's name *is* the material. Redstone dust powers circuits; the accent powers the page. Rationale is the subject matter itself — this accent cannot be swapped onto another studio without renaming them. Copper exists only as the *unpowered state* of the same system (semantic job, not a second brand hue); ore-gold exists only as section-marker glints (semantic job: "here is a point of interest").
- **One signature move: the continuous powered schematic.** The whole page is one circuit. Traces draw on scroll, charge pulses travel them, nodes power on when reached. If you can't point at the trace that connects two elements, one of them is decoration and gets cut.
- **One typeface decision: pixel display + clean sans + terminal mono, in strict registers.** Press Start 2P for the masthead/hero (the one loud moment), Silkscreen 700 for section display, VT323 for mono annotations, Inter for body/UI. Verified: all OFL 1.1 on Google Fonts (see §4). Pixel faces never set paragraphs; Inter never sets headlines.

### Anti-slop check (run against the concept itself)

- [x] No purple/indigo/blue gradients — no gradients at all; glow is state-only.
- [x] No glassmorphism — solid surfaces + hairlines + rings; dark-mode depth = lighter surfaces, never shadows.
- [x] No default Inter-on-branded-surface — Inter is body/UI only; the brand voice is pixel type.
- [x] No 3-column icon-in-colored-circle grid — projects are circuit nodes with power states, each visually distinct.
- [x] No generic hero copy — hero copy is specific ("Independent software studio. Delhi. We ship." plus live schematic); copy goes through the ux-copywriting bar at build time.
- [x] No centered-everything — hero is left-aligned schematic composition; sections are asymmetric.
- [x] No uniform bubbly radii — radius 0 everywhere, by law.
- [x] No random particles / aurora / blob noise — the *only* ambient motion is charge pulses on engineered paths. A pulse with no path is slop and is deleted.
- [x] No gradient text, no emoji icons, no text drop shadows (blurred) — hard stepped shadow only, on hero pixel type only.
- [x] Copy patterns count double — no "empowering/building the future" verb stacks; claims are checkable (repos, versions, licenses, email).

---

## 3. Uniqueness self-test (anthropics-frontend-design procedure)

**The test:** describe the brief the way a generic prompt would — "dark dev portfolio site, red accent, for an independent software studio" — and check whether the default output lands where our plan lands.

**What the default model produces for that prompt** (the 2026 calibration): near-black `#0B0B0B` background; Inter or Geist display headlines at −0.03em tracking; a vermilion/acid-red accent; radial gradient washes and/or an aurora blob behind the hero; glassmorphic cards; centered hero with eyebrow label, headline, subhead, two pill CTAs; 3-column feature-card grid; fade-and-slide-up reveals on every section; meta strings joined with middle dots; "→" appended to links; tracked-out ALL-CAPS eyebrows above every heading.

**Where our plan provably diverges** (every item is a committed spec below, not a vibe):

1. **Display typeface category.** The default never picks a pixel face. Press Start 2P on the masthead is a category break — no generic portfolio sets headlines in a bitmap font, and the pairing rules (§4) keep it from becoming a costume.
2. **The page has an information architecture the default doesn't have.** A generic portfolio is a *stack of sections*; ours is a *schematic*. Traces are structural: the hero's bus line physically continues into the work section's branches. Remove the traces and the layout breaks — that is the test that they're engineered, not decorated.
3. **Power states.** Powered vs unpowered nodes (dim copper → glowing red) give every project card a *state*, not a style. The default's cards have hover lifts; ours have an electrical condition tied to scroll position.
4. **Radius 0 + 8px block grid as law.** The default rounds everything (cards 8–12px, pills for chips). Our geometry is sharp by statute (§6) — the sharpness is visible in thumbnails, which is where distinctiveness is decided.
5. **The annotation layer.** VT323 mono flavor text (coordinates, power levels, block IDs) is a *register* the default doesn't use — it uses mono for code snippets, not as the page's whisper track.
6. **vs v1 (dark + purple/cyan particles):** different hue (single red vs purple/cyan), different motion (engineered pulses on paths vs ambient particle field), different type (pixel display vs generic sans), different structure (schematic vs SaaS sandwich).
7. **vs v2 (Swiss paper-white):** shares density and real-data discipline — deliberately. Differs on the light/dark axis, the display voice (pixel vs grotesque), and the information language (circuit vs ledger). Nobody mistakes a glowing schematic for a printed spec sheet.

**Verdict: passes.** The plan does not arrive where the generic prompt arrives, on any axis the skill names (palette, typography, layout, motion, copy register).

---

## 4. Type system

**Registers are law.** Each face has a job; faces never cover for each other.

| Role | Face | Weights | Where | Notes |
|---|---|---|---|---|
| Masthead / hero display | **Press Start 2P** | 400 only | Studio name, hero headline, 404 page title | The one loud moment. ALL CAPS by design (the face is caps-only). |
| Section display | **Silkscreen** | 700 (heads), 400 (labels) | H2s, node titles, button labels, kbd-ish labels | More legible than PS2P at 20–32px; has a real bold. |
| Mono annotations | **VT323** | 400 only | Coordinates, power levels, block IDs, status lines, footer meta, form microcopy | The whisper track. Set 18–22px (VT323 runs small). |
| Body / UI | **Inter** | 400 (body), 500 (UI), 600 (subheads) | Paragraphs, nav items, form inputs, legal pages | Never headlines. `font-variant-numeric: tabular-nums` for data. |

**Fallback stacks:** `--font-display: "Press Start 2P", "Silkscreen", monospace;` `--font-section: "Silkscreen", "Press Start 2P", monospace;` `--font-mono: "VT323", "IBM Plex Mono", monospace;` `--font-body: "Inter", system-ui, sans-serif;`

**Scale (fluid, rem-based):**

| Token | Size | Leading | Tracking | Use |
|---|---|---|---|---|
| `display-hero` | `clamp(2.25rem, 7vw, 4.5rem)` | 1.25 | 0 | Hero headline (PS2P). Pixel faces need *looser* leading than grotesques — 1.25 min. |
| `display-masthead` | `clamp(1.5rem, 4vw, 2.5rem)` | 1.2 | 0 | Nav logo, footer wordmark (PS2P). |
| `h2` | `clamp(1.5rem, 3vw, 2.25rem)` | 1.3 | 0 | Section titles (Silkscreen 700). |
| `h3` | 1.25rem | 1.35 | 0 | Node titles, card titles (Silkscreen 700). |
| `mono-ann` | 1.125rem (18px) | 1.4 | 0 | Annotations (VT323). Minimum 16px — never micro-pixel text. |
| `body` | 1rem | 1.65 | 0 | Paragraphs (Inter 400). Max 65ch; `text-wrap: pretty`. |
| `lead` | 1.25rem | 1.5 | 0 | Hero subhead (Inter 400). |
| `label` | 0.875rem | 1.45 | +0.04em | Buttons, nav (Silkscreen 400, sentence case — never all-caps per the anthropic tell; the pixel face already shouts). |

**Rules:** body copy is never set in a pixel face (unreadable in paragraphs — direct order). Headlines never set in Inter. All-caps kickers are banned (pixel faces are inherently caps; adding tracked-out caps labels elsewhere is the AI tell — use Silkscreen labels in sentence case instead). Link underlines: 1px, offset 4px.

**Loading:** self-host via Fontsource (`@fontsource/press-start-2p`, `@fontsource/silkscreen`, `@fontsource/vt323`, `@fontsource/inter`), latin subset, `font-display: swap`, preload PS2P (above the fold), `size-adjust` fallback metrics to kill layout shift. License: all four are **SIL OFL 1.1** — verified 2026-10-16 against Google Fonts source listings (google/fonts `ofl/pressstart2p`, `ofl/silkscreen`, `ofl/vt323` all carry OFL-1.1). Ship each family's `OFL.txt` in `public/fonts/`.

---

## 5. Palette (oklch-authored, hex fallbacks)

Author in `oklch()`; ship a hex fallback line above each declaration. Hexes are approximate — verify with culori at build time.

**The world (dark, earned):** circuits glow in the dark; the background is near-black warm, tinted with red chroma so it never reads as neutral `#111`.

| Token | oklch | hex (fallback) | Job |
|---|---|---|---|
| `--bg` | `oklch(0.10 0.015 28)` | `#141013` | Page ground. Never pure black. |
| `--surface` | `oklch(0.145 0.02 28)` | `#1E1717` | Node bodies, cards, panels. |
| `--surface-2` | `oklch(0.185 0.022 28)` | `#2A1F1E` | Recessed slots, inputs, elevated panels. Elevation on dark = lighter surfaces, never shadows. |
| `--hairline` | `oklch(0.24 0.025 28)` | `#3B2E2D` | 1px dividers, borders. |
| `--ink` | `oklch(0.94 0.008 28)` | `#F5EFEA` | Primary text. Warm near-white, not `#fff` (halation). |
| `--ink-muted` | `oklch(0.68 0.02 28)` | `#A89C94` | Secondary text. |
| `--ink-faint` | `oklch(0.47 0.02 28)` | `#6E625C` | Tertiary/meta text. Min 16px when used. |

**Redstone ramp (the accent — chroma peaks mid-ramp, tapers at ends):**

| Token | oklch | hex (fallback) | Job |
|---|---|---|---|
| `--rs-300` | `oklch(0.80 0.13 26)` | `#FF9A8A` | Pulse cores, brightest glints. |
| `--rs-400` | `oklch(0.72 0.19 26)` | `#FF6B5E` | Pulse bodies, hover states. |
| `--rs-500` | `oklch(0.65 0.23 26)` | `#FF3D33` | **Primary.** Powered traces, powered node borders, primary CTA. |
| `--rs-600` | `oklch(0.55 0.20 26)` | `#D92D24` | Powered fills, active states. |
| `--rs-700` | `oklch(0.42 0.15 26)` | `#A11F1B` | Deep fills, pressed states. |
| `--rs-900` | `oklch(0.22 0.06 26)` | `#4A1512` | Dormant trace beds, faint grid. |

**Semantic secondaries (each has a job — the one-accent rule holds):**

| Token | oklch | hex (fallback) | Job |
|---|---|---|---|
| `--cu-500` | `oklch(0.60 0.11 62)` | `#B07A3F` | **Unpowered trace** color. Copper = the wire before it carries charge. |
| `--cu-300` | `oklch(0.72 0.09 62)` | `#D09A5C` | Unpowered node borders, dim ornaments. |
| `--ore-400` | `oklch(0.82 0.15 85)` | `#F2B83B` | **Ore glints only** — section markers, 5 glints max per marker, never large fills. |
| `--ok` | `oklch(0.72 0.17 145)` | `#4ADE80` | Form success states only. |
| `--sel` | `oklch(0.94 0.008 28)` | `#F5EFEA` | Selection background: `--rs-600` at 35% alpha; selected text stays `--ink`. |

**Contrast:** `--ink` on `--bg` ≈ 14:1. `--ink-muted` on `--bg` ≈ 7:1. `--rs-500` on `--bg` ≈ 4.6:1 — passes for large/bold UI text and graphics, never for body copy (body is `--ink`). Re-verify every pair at build with APCA; color is never the only signal (powered nodes also change border width and annotation text: "PWR 15" vs "PWR 0").

**60-30-10:** 60% `--bg`, 30% `--surface`/`--surface-2`, 10% redstone ramp. Copper and ore-gold together stay under 3% of pixels.

---

## 6. Pixel-ornament system (CSS/SVG only — no image files)

**Geometry law:** radius 0 on everything, 8px base grid (`--px: 8px`), ornament pixels in 4px units. Sharp corners are the differentiator — no builder "softens" anything.

**Technique:** box-shadow pixel sprites. One 4×4px base element, `box-shadow` list plots the pixels (the standard clean-room pixel technique; zero image bytes, zero requests). All sprites are **original 8×8 or 16×16 designs drawn for this site** — see §11 clean-room.

**Sprite inventory (each spec'd as grid + palette, builder draws them):**

| Sprite | Grid | Palette | Use |
|---|---|---|---|
| Logo mark "RS rune" | 8×8 | `--rs-500` on transparent | Nav, footer, favicon (SVG rects version). An original angular R built from blocks — not a letterform trace, a block construction. |
| Ore block | 16×16 | `--surface-2` base with noise dither (3 tones), 5 `--ore-400` glints + 2 `--rs-500` glints | Section markers. Sits left of each H2 with the section number. |
| Redstone torch | 8×16 | `--cu-300` stick, `--rs-400` flame head (3px) + `--rs-300` core pixel | Divider ornament between major sections; flame head glows when its section is in view (powered state). |
| Dust-trail divider | 8px-tall band | `--rs-900`/`--rs-700` alternating | Full-width section dividers: `repeating-linear-gradient(90deg, var(--rs-700) 0 8px, var(--rs-900) 8px 16px)` — hard stops only, blocky dashes. Powered variant swaps to `--rs-500`/`--rs-600` when the following section activates. |
| Cursor arrow | 8×8 | `--ink` | "Scroll" hint in hero; custom `cursor` on node hover is banned (a11y), the arrow is inline ornament only. |
| Power cell | 8×8 | `--cu-500` dim / `--rs-500` lit | Repeating status glyph in the work index: each project row carries cells showing its "power" (shipped = all lit). |

**Rules:** sprites are `aria-hidden="true"` (decorative; meaning is carried by adjacent text). No sprite exceeds 16×16. No sprite is used at more than 2× scale (pixelation must stay crisp — `image-rendering: pixelated` on any scaled SVG-rect versions).

---

## 7. Circuit / trace system (the signature move, engineered)

**The law:** every trace connects something to something. The page is one schematic: a master **bus** runs down the left rail (desktop), branches feed each section's nodes, and pulses travel bus → branch → node. If a trace can't name both endpoints, it's deleted.

**Path design (hand-designed, orthogonal only):**
- Routing: axis-aligned segments only (90° turns), 8px grid snap. Junctions marked with 6×6px squares (`--rs-500` when powered).
- Widths: bus 4px · branches 3px · dust-trail dividers 2px (decorative-dividers are the *only* non-connecting linework, and they're dividers, not traces).
- Colors: dormant bed `--rs-900` (always visible, faint — the schematic is legible even unpowered) → unpowered wire `--cu-500` → powered `--rs-500` with tight glow.
- One continuous SVG per viewport column (not per section) so dash animation can chain: hero bus → work branches → about → process → contact. Sections are *stations on the wire*.

**Node design (projects as nodes):**
- Geometry: 64×64px block (48px on mobile), recessed-slot construction (§2 ref 1), radius 0.
- **Unpowered state:** `--surface` fill, 2px `--cu-300` border, sprite icon at 40% opacity, annotation "PWR 0".
- **Powered state:** `--rs-700` fill at 40% + `--surface` base, 2px `--rs-500` border, `0 0 0 1px rgba(255,61,51,.35)` ring + `drop-shadow(0 0 8px rgba(255,61,51,.5))`, icon 100%, annotation flips to "PWR 15".
- Power-on transition: 300ms `ease-out` (the powering), preceded by a 150ms spark flash (opacity keyframe on the ring). Exits (scrolling back up) fade 200ms, no bounce — exits quieter than entrances.

**Animation spec (what / trigger / duration / curve):**

| What | Trigger | Duration | Curve | Notes |
|---|---|---|---|---|
| Trace draw (bus + branches) | `IntersectionObserver`, once, threshold 0.3 | 1200ms per path, staggered 150ms down the chain | `cubic-bezier(0.16, 1, 0.3, 1)` | `stroke-dasharray`/`dashoffset` technique; dash length = path length via `pathLength="1"` normalization. |
| Charge pulses | After its path draws; infinite | 2400ms loop | `linear` (constant motion) | SVG `<animateMotion>` along the path — no JS per frame, compositor-cheap. Pulse = 6×6px `--rs-300` square. Max 3 concurrent pulses per viewport. |
| Node power-on | When its branch trace's draw completes (chained, not timed) | 300ms + 150ms spark | `ease-out` | State change answers the trace — this is motion answering an event, per interface-craft. |
| Hero load sequence | Page load | 900ms bus draw → pulses start | same as above | The *one* orchestrated entrance moment. Nothing else animates on load. |
| Hover (nodes, buttons) | Pointer | 150ms | `ease-out` | Border brightens `--rs-500`→`--rs-400`, translate 0. **Never** scale nodes (amplitude rule: buttons press to 0.96, not 0.8). |
| Torch flame | Section in view | 200ms | `ease-out` | Flame head swaps `--cu-300`→`--rs-400` + glow. |

**Tokens:** `--ease-out: cubic-bezier(0.16, 1, 0.3, 1);` `--ease-linear: linear;` All motion params are CSS custom properties with these defaults.

**Mobile simplification (≤768px):** the left-rail bus is hidden; each section gets a short horizontal branch trace above its node row (drawn once, 800ms). Pulses: 1 per visible section max. Node size 48px. No layout change between states — the schematic degrades to stations, never breaks.

**Reduced motion (`prefers-reduced-motion`):** all traces render fully drawn and powered on load (dashoffset 0, no transition); pulses hidden; node power-on becomes instant (no transition); hover feedback keeps color change only, ≤200ms. Reduce, don't remove: the *information* (powered states) stays, the *travel* goes.

**Performance budget:** SVG + CSS only. No canvas, no WebGL, no per-frame JS. Animate `stroke-dashoffset` (paint, one-shot) and `transform`/`opacity` only. Pulse count capped. Fonts subsetted. This must hold 60fps on a mid-range Android — the trace system is the *only* animation on the page, which is how it affords to be nice.

---

## 8. Section-by-section layout notes

**Global chrome:**
- **Nav:** fixed top, `--bg` at 95% + 2px `--hairline` bottom border. Left: 8×8 RS-rune sprite + "REDSTONE LABS" in `--font-masthead`. Center/left: nav items as hotbar slots (recessed, 2px outline on active — §2 ref 1). Right: VT323 clock "IST 14:32" (live, real) + day/night toggle + "START PROJECT" block button (`--rs-600` fill, radius 0, 4px stepped hard shadow, presses to translateY(2px) with shadow collapsing to 2px — the *block press*).
- **Footer:** build hash (`bld 9f3a2c1`), version, coordinates "28.6139°N 77.2090°E — NEW DELHI", copyright, legal links (privacy/terms/cookies/refund/data-deletion) in VT323. Ore-block sprite + colophon line: "Set in Press Start 2P, Silkscreen, VT323 & Inter. No Mojang assets were used or harmed." (keep the joke dry, one line max).

**Hero (the showpiece):** full viewport. Left 7/12: PS2P masthead "REDSTONE LABS" (the wordmark *is* the hero — basement.studio rule), lead subhead in Inter ("Independent software studio — Delhi. We design, engineer, and ship."), two block buttons (Start a project / See the work). VT323 flavor row: "CHUNK 0,0 · SEED RS-2026 · PWR 15/15". Right 5/12 (desktop): the live schematic panel — the bus enters from the left edge, branches to three mini-nodes labeled with the studio's disciplines (WEB / MOBILE / SYSTEMS), pulses traveling on load. Below the fold edge: the dust-trail divider, already drawing. Mobile: masthead → subhead → buttons → a single horizontal trace with three small nodes (the panel's simplified station).

**Work (projects as nodes):** the index. Each project = a node block (64px sprite icon, original pixel art per project) on a branch trace, with Silkscreen title, Inter one-liner, VT323 meta row (stack · version · license — real, from `src/data/`), and power cells (shipped = lit). Layout: asymmetric — nodes alternate branch sides off the bus on desktop (no 3-column grid, ever); single column on mobile. Nodes power on as their branch draws. *No metrics, no testimonials* — proof is repos, versions, licenses, live links. Interaction: clicking a node expands an inline detail row (trace stays connected — the expansion grows *along* the branch, feedback at the trigger).

**About:** "WORLD STATS" panel — game stat-screen language, real contents only: based in New Delhi, independent studio, full-stack (list the actual stack from existing pages), working worldwide. Stat tiles as recessed slots with VT323 numerals. A short Inter paragraph in Stark's voice — plain, no "passionate ninja" copy. Portrait: optional; if used, pixel-dithered treatment at 8px cells (original processing of a real photo, `image-rendering: pixelated`) — never a stock photo, never an AI avatar.

**Process / services:** numbered schematic stages — 01 SURVEY → 02 WIRE → 03 POWER → 04 SHIP. Numbered markers are justified here (it *is* a sequence). Each stage is a station on one horizontal trace with a junction square; the trace draws left-to-right on scroll and each station powers on in turn. One Inter sentence per stage, specific verbs ("We map the scope in a one-page spec…").

**Contact:** "PLACE YOUR BLOCK." Big PS2P line, then the transmission panel: email link as the primary CTA (block button), plus a minimal form (name / email / project sketch) with recessed-slot inputs, VT323 microcopy ("NO SPAM. REPLIES WITHIN 48H."). Submit button press = block press. Success state: "TRANSMISSION RECEIVED" + power cells light up — feedback at the trigger, no toast.

**404:** full-page PS2P "CHUNK NOT FOUND" + VT323 "The chunk at these coordinates was never generated." + block button home. (Already exists as `404.html` — restyle to match.)

**Legal pages (privacy / terms / cookies / refund / data-deletion):** separate routes, restyle-to-match only: `--bg` ground, Inter body, Silkscreen H2s, VT323 meta, dust-trail divider under the title. No schematic, no pulses — quiet pages. Cookie banner: bottom block bar, `--surface` fill, 2px `--hairline` top border, Silkscreen buttons; compliance copy unchanged, styling only.

---

## 9. Day / night treatment

**Default: night** (the earned dark — §5). **Optional toggle** in nav (VT323 "NIGHT"/"DAY"): day mode swaps the token layer to a light stone schematic — `--bg` → `oklch(0.93 0.01 70)` warm light, traces keep the redstone ramp but drop the glow (glow needs dark), ore markers unchanged, ink → dark warm. The schematic, nodes, and power states are identical; only the world tint shifts (the Factorio alt-mode idea, §2 ref 3). Implementation: `data-theme="day"` attribute swapping custom properties; transitions suppressed during the swap (interface-craft rule). **Marked stretch:** if QA time is short, ship night-only — the toggle must never ship half-working. `prefers-color-scheme` does *not* auto-switch (the dark is the brand; the toggle is a toy, not a setting).

---

## 10. What makes this unmistakably Redstone Labs?

The name is the mechanic. "Redstone" isn't a label stuck on a generic portfolio — it's the material the page is built from: the dust you lay to carry power, the ore you mine for it, the circuit that comes alive when the trace completes. Scrolling this site *is* laying redstone: each section powers on because you brought the charge to it. No other studio's site has a power-state visual language — powered vs unpowered is ours the way the ledger was v2's. The pixel display type makes it recognizable in a thumbnail; the schematic makes it recognizable in motion; the mono whisper track (coordinates, power levels, block IDs) makes it recognizable in the details. Take any one away and it's still a Redstone Labs page — that's the test.

---

## 11. Clean-room note

All pixel art in this spec is **original clean-room craft**: sprites are drawn from scratch on 8×8/16×16 grids for this site (RS rune, ore block, torch, power cell, dust divider). **No Mojang assets, textures, or trademarked imagery are used or referenced anywhere in the spec:** no Minecraft logo, no Creeper faces or silhouettes, no grass-block clones, no ripped terrain textures, no "Minecraft" wordmark in copy. Game-UI *conventions* (recessed slots, hotbar selection outline, hard stepped text shadow) are re-implemented as original geometry — mechanics, not assets. The words "redstone," "ore," "chunk," "power level" are used descriptively for the studio's own name and the circuit metaphor. Builders: if any element starts to look like it was lifted from the game rather than inspired by the *idea* of the game, redraw it. When in doubt, simplify toward blocks — originality lives in restraint.

---

## 12. Constraints for builders (non-negotiable)

1. **Single page.** Legal pages are separate routes, restyle-to-match only (§8).
2. **Cookie banner + compliance + accessibility preserved.** Banner restyled, copy/behavior unchanged. Focus-visible rings: `box-shadow: 0 0 0 2px var(--rs-500)` (never `outline`). Semantic HTML, real headings order, sprites `aria-hidden`, color never the sole signal (power states also change text: "PWR 0"→"PWR 15").
3. **`prefers-reduced-motion`:** static fully-powered traces, no pulses, instant node states, ≤200ms color-only hover. (§7)
4. **No lorem ipsum.** Every string is real or clearly marked for Stark to fill. No fake metrics, no testimonials, no invented clients — proof is repos, versions, licenses.
5. **Performance:** CSS/SVG only — no WebGL, no canvas, no image files for ornament. Self-hosted subsetted fonts. Animate transform/opacity/dashoffset only. 60fps on mid-range mobile.
6. **Mobile:** 390px first-class. Bus hidden ≤768px, stations simplify (§7). No horizontal overflow. Touch targets ≥44px.
7. **Tokens only, never raw values.** Every color, easing, duration, and size is a custom property. No `transition: all`. No Tailwind-arbitrary color values.
8. **Do not reinterpret this document.** Execute it. Ambiguity → ask Stark; do not freelance a second signature move.

---

*End of direction. Next: build workers execute §§4–9; slop-audit (§2 checklist) runs against the built page before ship.*
