# Redstone Labs - Design Direction

**Status:** committed direction for the single-page rebuild. Build workers execute this; do not reinterpret it.
**Date:** 2026-10-16. Owner: Stark (Redstone Labs, Delhi, India).

---

## 1. Design read

Reading this as: a **proof-of-shipment document** for **collaborators, clients, recruiters, and curious developers**, with a **plain, declarative, print-grade** language, leaning toward **Swiss / International Typographic with an industrial-print inflection**.

The brief in three lines, written before any browsing:

- **Subject:** the public face of an independent software studio that ships real products (Folio, SkillForge, Flylio, mobile apps).
- **Feeling:** a printed spec sheet you can trust. Evidence, not atmosphere. Every claim is checkable: a repo, a license, a version, an email address.
- **Three adjectives:** archival, exact, self-assured.

## 2. The three dials

- **DESIGN_VARIANCE: low-moderate.** A strict 12-column Swiss grid, hairlines, and one grotesque do the work. Variance comes from scale (giant masthead, oversized folio numerals) and one asymmetric bleed in the Work section, not from decoration. Justification: a ledger should feel printed, not decorated; restraint is what makes the loud moments land.
- **MOTION_INTENSITY: minimal.** Exactly one auto motion moment (the hero manifest row crossfades every 6s, 200ms) plus instant table-row hover inversions. No scroll choreography, no parallax, no reveals. Justification: motion must be content or feedback, never atmosphere; a studio that ships proves it with records, not particle fields.
- **VISUAL_DENSITY: high.** Dense index tables, mono metadata columns, folio numbers everywhere. Justification: density is the anti-slop; real data in real tables reads as evidence, and it gives desktop a reason to exist while mobile stacks cleanly.

## 3. Chosen family and substyle

**Family 3: Swiss / International Typographic**, with the **Swiss Industrial Print** inflection (the unbleached-newsprint, aviation-red mode documented under the brutalist family, but executed inside Swiss rules: strict grid, left-aligned type, numbered sections, folio numbers, tables as typography).

**Why this one:**

1. The site's single job is "prove the studio ships real software." Swiss print treats the page as a document, and a shipping ledger is native to that language. The design and the proof are the same object.
2. It is the cleanest possible break from the rejected dark-plus-neon particle site. Nothing about white paper, carbon ink, and one red reads as the old site.
3. Slop cannot do restraint. Hairlines, folio numbers, a 12-column grid, and a table that inverts on hover are cheap to describe and expensive to fake; they signal a human made decisions.
4. It scales down honestly. Swiss left-aligned type at 390px is just good typesetting, not a collapsed desktop fantasy.

**What was rejected, and why:**

- **Editorial / magazine:** needs photography as the design. We have product screenshots, not photography, and the serif ban removes the two best display options. Would read as a costume.
- **Brutalist loud (Slam Jam mode):** the right volume for fashion, the wrong register for trust. Collaborators and recruiters need exactness, not noise.
- **Refined Minimal dark (Linear mode):** explicitly ruled out. Repeating any dark theme risks echoing the site Stark rejected.
- **Technical / mono:** the terminal-as-hero is now a recognizable trope for dev-studio sites, and per the skill it reads as costume without genuine technical content. Our technical content is real (versions, licenses, stack), so it belongs in a ledger, not a fake shell.
- **Soft / warm hand-crafted:** warmth without evidence. The banned beige-plus-brass-plus-oxblood-plus-espresso palette also lives next door to this family; too easy to drift into it.

## 4. References (5-8, three actionable traits each)

| # | Reference | Trait 1 | Trait 2 | Trait 3 |
|---|---|---|---|---|
| 1 | darkroom.engineering (screenshot verified) | One saturated red used as the field (`#E61919`-ish), black type reversed out of it. Borrow the discipline, invert the ratio: we use red as punctuation on paper, not as the field. | Top strip of mono 11-12px uppercase micro labels: three live timezone clocks (ARG / CET / UTC). We steal this: a live IST clock in the hero strip, real and functional. | Sharp black nav blocks, radius 0, white mono labels, no pills. Buttons on our page are rectangles with 1px ink borders, radius 0. |
| 2 | stripe.com (screenshot verified) | Ink is deep navy `#0A2540`, not black; headlines at -0.02em tracking, left aligned, hero asymmetric (headline 5/12, product UI 7/12). | Accent `#635BFF` appears in exactly two places: the micro kicker and the CTA. One accent, spent twice. | Numbered feature lists (01/02/03) instead of three-card rows. Our Process section is a numbered spec list, not cards. |
| 3 | vercel.com (documented) | Geist Sans display at -0.04em tracking with Geist Mono for micro labels and numbers; tabular numerals everywhere. | All-caps mono micro labels with tight tracking, used for metadata only, never headlines. | Sharp corners (radius 0-4px); black/white theme inversion used as an interaction (our table-row hover inversion). |
| 4 | fly.io (documented) | Mono family carries display duty; status indicators (`●`/`◯`) used semantically, not decoratively. Our ledger uses a single red square for "shipped" status. | Real numbers as design elements (latency, regions). Our equivalent: version numbers, licenses, folio indices. | Docs-first density; long pages that reward reading. Our density dial follows this. |
| 5 | basement.studio (documented) | Type is the image: oversized studio name as the whole hero, no illustration. | High contrast, two colors, zero gradients. | Loud moments alternate with quiet ones; density is rhythmic, not constant. |
| 6 | are.na (documented) | The archive is the interface: dense index of channels, everything one click from everything. Our Work section is an index, not a gallery. | Metadata (counts, dates) set small next to titles, never hidden behind hover. | No hero at all; the index IS the landing. We keep a masthead but the hero's second half is already the index. |

Extraction rule used: every trait above is buildable (a hex, a size, a behavior). No vibes were kept.

## 5. Committed direction

### One signature accent

**Redstone red.** The accent is the studio's name. Redstone is the powered circuit component: the material that makes builds come alive. The name is the color; the color is not decoration.

- Primitive: `--red-500: oklch(0.55 0.22 27)` (hex fallback `#D92B21`; close to aviation red `#E61919` and Swiss red `#D62828`)
- Full ramp (chroma peaks mid, tapers at both ends):
  - `--red-50: oklch(0.97 0.02 27)` / `--red-100: oklch(0.93 0.04 27)` / `--red-200: oklch(0.86 0.08 27)` / `--red-300: oklch(0.76 0.13 27)` / `--red-400: oklch(0.65 0.19 27)`
  - `--red-500: oklch(0.55 0.22 27)` (the accent; used at 500 only for large/non-text uses)
  - `--red-600: oklch(0.46 0.20 27)` (small-text red when red must carry words)
  - `--red-700: oklch(0.37 0.16 27)` / `--red-800: oklch(0.28 0.12 27)` / `--red-900: oklch(0.21 0.08 27)` / `--red-950: oklch(0.15 0.04 27)`
- **Spend rule:** red appears as (a) the full stop after the masthead, (b) folio numerals in the ledger, (c) the "shipped" status square, (d) the contact link underline. Nowhere else. Red never carries body copy at small sizes.

### One signature move (named)

**The Shipping Ledger.** Every project, everywhere on the page, is rendered as a numbered ledger entry: folio number, name, one plain-verb description, stack, license or status. Hairline rules between rows. Hover (or tap) inverts the row: ink background, paper text, red folio numeral. The hero shows one live ledger row; the Work section shows the full ledger; the footer colophon closes the book. If you can name the move, you have one. This is it.

### One typeface decision

- **Display and text: Archivo** (variable, self-hosted via Fontsource, latin subset). One neutral grotesque used ruthlessly, per the Swiss rule. The Expanded width axis gives the masthead its poster voice without a second family.
- **Mono third: JetBrains Mono** (tabular figures) for kickers, metadata, numerals, the ledger, the clock. Never for body.
- **Weights on the page: 3.** 400 body, 500 labels and buttons, 700/800 display moments only.
- **Why not the defaults:** Inter-everywhere is the template tell Stark is paying us to escape; the system stack is giving up. Archivo is Swiss-correct, free, and has a real Black weight and width axis that Inter lacks, so the masthead can be a poster without importing a display serif. Serifs were considered and rejected: the brief bans the two best free options, and a ledger wants a grotesque.

## 6. Hero concept

**The idea (3-5 sentences):** The hero is a shipping manifest, not a pitch. Redstone Labs proves it ships by showing its shipping record the way a print house shows its colophon: one folio number, one project name, one version, one status. The masthead states the studio; the manifest row underneath is the evidence, and it rotates through the real catalog (Folio, SkillForge, Flylio, mock-GPS apps) because shipping is an ongoing verb, not a past-tense claim. A live IST clock in the top strip says this studio is awake and working right now. The whole hero fits the viewport with four text elements: the strip, the masthead, one declarative sentence, one ledger row.

**What the visitor sees on load:**

- **Desktop:** a mono 12px top strip (left: "Redstone Labs"; center: "Delhi, India" and a live "IST 07:57" clock; right: "Contact" link). Below, the masthead "REDSTONE LABS" in Archivo Expanded Black, `clamp(3.5rem, 9vw, 8rem)`, tracking -0.03em, leading 0.9, left aligned, with a red full stop. One sentence under it: "Independent software studio. We design, build, and ship real products." Then a red hairline rule and the live manifest row in mono: `N°001 · Folio · open-source Notion alternative · MIT · shipped`. The row is a real link to the Folio page.
- **Mobile (390px):** the strip collapses to wordmark left and Contact right (clock and location drop below 480px). The masthead scales to its clamp minimum and wraps to two lines. The sentence wraps to two lines. The manifest row stacks into a full-bleed bar: folio number and name on one line, description and status in mono beneath, the whole bar tappable. Nothing is cut; the hero is still one viewport.

**The one interaction/motion moment:** the manifest row crossfades (200ms) to the next real project every 6 seconds: Folio, then SkillForge ("registry for AI agent skills · live"), then Flylio, then the mock-GPS apps. Justification in one sentence: the motion is content changing, not decoration, and it turns "we ship" from a slogan into a rotating receipt.

**Why it could not be mistaken for another AI agency site:** AI agency sites never show version numbers, licenses, or a live clock; they show gradients and particles. A hero whose second half is a checkable ledger row with a real link is un-fakeable by a template.

## 7. Uniqueness self-test

The generic "make an agency site" prompt produces: a dark hero with a purple/cyan gradient or particle field; a centered headline ("We build digital experiences"), a subhead, and two pill CTAs; a three-card services row with gradient icons; a fake stats band ("500+ projects delivered"); a testimonial carousel; a glassy contact form; a link-soup footer.

Five concrete ways this direction differs:

1. **Light paper document, not a dark stage.** The whole page is one warm-white theme; the drama comes from ink, not glow.
2. **The hero is a manifest, not a pitch.** Four text elements, one of them a real ledger row linking to a real product. No headline/subhead/CTA stack.
3. **One red from the name, spent four ways.** No gradient anywhere on the page, by rule.
4. **Type is the image.** The masthead and the oversized folio numerals (001-005) are the visual system; there is no illustration, no stock photo, no generated visual. The only image on the page is a real screenshot of Folio's actual UI, revealed inside its ledger row.
5. **Work is an invertible table, not cards.** Hover inverts a ledger row to ink with a red numeral, a direct Swiss hallmark no template ships.
6. **The footer is a colophon.** Type credits ("Set in Archivo and JetBrains Mono"), Delhi, the build date, and the email address. No link soup, no newsletter input.
7. **A live IST clock in the hero strip.** A small, real, functional detail that says a human is on the other side of this page.

## 8. Token handoff

### CSS custom properties

```css
:root {
  /* Accent ramp: redstone red, hue 27. Accent spent only at 500/600. */
  --red-50: #FBEBE9;  --red-50: oklch(0.97 0.02 27);
  --red-100: #F6D7D2; --red-100: oklch(0.93 0.04 27);
  --red-200: #EFA9A0; --red-200: oklch(0.86 0.08 27);
  --red-300: #E4776A; --red-300: oklch(0.76 0.13 27);
  --red-400: #D64A3A; --red-400: oklch(0.65 0.19 27);
  --red-500: #D92B21; --red-500: oklch(0.55 0.22 27); /* THE accent */
  --red-600: #B02318; --red-600: oklch(0.46 0.20 27); /* red that carries small text */
  --red-700: #8C1D13; --red-700: oklch(0.37 0.16 27);
  --red-800: #661510; --red-800: oklch(0.28 0.12 27);
  --red-900: #47100D; --red-900: oklch(0.21 0.08 27);
  --red-950: #2E0B09; --red-950: oklch(0.15 0.04 27);

  /* Surfaces: warm-tinted paper, never pure gray. ONE theme for the page. */
  --paper: #FBFAF7;   --paper: oklch(0.985 0.006 100);
  --paper-2: #F4F1EA; --paper-2: oklch(0.96 0.008 100);
  --ink: #23211D;     --ink: oklch(0.17 0.008 100);
  --ink-2: #6E6A61;   --ink-2: oklch(0.44 0.012 100);
  --hairline: #DDD8CC;--hairline: oklch(0.87 0.01 100);

  /* Inversion pair for ledger hover */
  --invert-bg: var(--ink);
  --invert-fg: var(--paper);

  /* Type */
  --font-display: "Archivo", "Archivo Fallback", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --text-xs: 0.75rem;   /* 12px captions, metadata */
  --text-sm: 0.875rem;  /* 14px secondary UI */
  --text-base: 1rem;    /* 16px body */
  --text-lg: 1.25rem;   /* 20px lead */
  --text-xl: 1.5625rem; /* 25px H4 */
  --text-2xl: 1.9375rem;/* 31px H3 */
  --text-3xl: 2.4375rem;/* 39px H2 */
  --text-4xl: 3.0625rem;/* 49px H1 */
  --text-hero: clamp(3.5rem, 9vw, 8rem);
  --text-folio: clamp(4rem, 10vw, 9rem); /* oversized index numerals */

  /* Geometry: the grid is the design */
  --radius: 0;
  --rule: 1px solid var(--hairline);
  --rule-red: 2px solid var(--red-500);
  --section-pad: clamp(4rem, 10vw, 8rem);
  --gutter: clamp(1rem, 4vw, 3rem);
  --measure: 65ch;
}
```

Type rules: display tracking -0.02em to -0.04em; headings leading 1.05-1.15; body leading 1.6, left aligned, ragged right, `text-wrap: pretty`; all-caps only for mono metadata at 12px with +0.08em tracking; tabular numerals on; custom link underline 1px with 4px offset.

Contrast notes: ink on paper passes AAA. Red 500 on paper is ~4:1: allowed for the masthead full stop, folio numerals at display size, rules, and the status square; any red that carries words at 14px or below uses red 600. Verified pairs ship; unverified pairs do not.

Font loading: self-host via Fontsource (`@fontsource/archivo` variable with wdth axis, `@fontsource/jetbrains-mono`), latin subset, preload the Archivo Black/Expanded cut used above the fold, `font-display: swap`, fallback metrics with `size-adjust` to kill layout shift.

### Section-by-section layout plan (single page)

Distinct layout family per section. No zigzag of identical splits. Eyebrow budget: 2 max for the whole page; sections use Swiss folio markers (`§01`-`§04`) instead of marketing eyebrows.

1. **Hero - masthead plus manifest.** Asymmetric: masthead full-bleed left, statement at 5/12, manifest row full-width under a red rule. Top strip in mono. Layout family: broadsheet masthead.
2. **Work - the full Shipping Ledger.** `§01`. One full-width index table, columns: N° / Project / What it is / Stack / Status. Five rows: 001 Folio (open-source Notion alternative; flagship), 002 SkillForge (registry for AI agent skills; live), 003 Flylio, 004 Mock-GPS apps (Android), 005 Travel platforms and wallet simulators. Row hover: inversion to ink background, paper text, red numeral. Tapping the Folio row expands it inline to reveal a real screenshot of Folio's UI with a caption. Layout family: ledger table. No cards, no carousel.
3. **About - meta-column.** `§02`. 200px mono meta column ("Studio", "Delhi, India", "Independent", "Est. 2025") plus a 1fr statement column at 65ch: who Stark is, what the studio does, three numbered principles (each one plain sentence). Layout family: meta-column.
4. **Process - numbered spec list.** `§03`. 01/02/03 rows with hairlines: "Tell us what you need" / "We build it in the open" / "You own the result". Each row: number in red mono, title in Archivo 600, one sentence of plain description, and a right-aligned mono note (typical timeline or deliverable). Layout family: spec list, borrowed from Stripe's numbered features.
5. **Contact - the giant email.** `§04`. One line: "Start with an email." Then `redstonelabssupport@gmail.com` set at `clamp(1.75rem, 5vw, 4rem)`, Archivo 600, with a red underline that thickens on hover. One sentence beneath: what to include (what you want built, timeline, budget range). No form, no glass, no pill button. Layout family: oversized type CTA.
6. **Footer - colophon.** Mono 12px, three columns on desktop: left "© 2026 Redstone Labs, Delhi, India"; center "Set in Archivo and JetBrains Mono"; right "Back to top". A final hairline above, and the IST clock repeated small. Layout family: printer's colophon.

### Mobile behavior notes (390px)

- **Hero:** strip collapses to wordmark plus Contact; masthead wraps to two lines at clamp minimum; manifest row becomes a full-bleed tappable bar, stacked two lines.
- **Work:** the table becomes stacked ledger blocks: oversized folio numeral (red, display size) above each project name; meta items (stack, status) as a mono line beneath. Tap to expand Folio screenshot. No horizontal scroll, ever.
- **About:** meta-column stacks above the statement; principles stay numbered.
- **Process:** spec rows stack; mono notes move under the description.
- **Contact:** email scales to clamp minimum and may wrap once; underline stays tappable with 48px hit area.
- **Footer:** single column, centered left, clock dropped.

## 9. Slop-audit pre-pass

Run against the plan; hits caught and fixed before handoff:

| Slop catalog item | Verdict on this plan | Fix applied |
|---|---|---|
| Purple/blue gradient hero | Clean | No gradient anywhere, by token rule |
| Particle-field / wireframe 3D hero | Clean | Hero is type plus a ledger row |
| Centered headline plus subhead plus CTA | Clean | Left-aligned masthead; the "CTA" is a ledger link |
| Glassmorphism soup | Clean | Flat paper, hairlines, zero blur |
| Emoji icons | Clean | No icons at all; numerals and type carry meaning |
| Pill-button soup | Fixed | All buttons rectangular, radius 0, 1px ink borders |
| Em-dashes in copy | Fixed | Banned from the copy spec; commas and colons only |
| All-caps micro-labels as default | Fixed | All-caps mono reserved for metadata (nav, folio numbers, clock) with +0.08em tracking; headlines and body never all-caps. Section markers use §01 numerals, and the 2-eyebrow budget holds. |
| Fake terminal / product UI from styled divs | Fixed | The manifest row is a real ledger with real links, not a fake shell; the only product UI shown is a real Folio screenshot |
| Fake metrics / testimonials | Clean | No stats band, no testimonials, no invented numbers |
| Middle-dot separators as universal glue | Fixed | Ledger uses grid columns and hairlines; dots appear only inside the mono metadata line where they separate real fields |
| Beige plus brass plus oxblood plus espresso | Clean | Warm paper plus one red; the four-color warm scheme is explicitly excluded |
| Fraunces / Instrument Serif | Clean | Archivo plus JetBrains Mono |
| Dark-plus-neon repeat of the old site | Clean | One light theme for the whole page |
| Three-adjective stacks, "empowering", "seamless" | Fixed | Copy spec mandates plain verbs, sentence case, specific claims |
| Generic hero copy | Fixed | "Independent software studio. We design, build, and ship real products." Names the thing, states the verb, no adjectives |

**Open items for build workers:** capture a real screenshot of Folio's current UI for the expandable ledger row (a generated mock is not acceptable); confirm the live SkillForge URL before linking; the IST clock is client-side JS, one line, no library.

---

*Direction committed 2026-10-16. One family, one accent, one move. Execute, do not reinterpret.*
