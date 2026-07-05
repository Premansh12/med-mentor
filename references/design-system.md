# Editorial Design System

Read this when: styling any lesson or reference document, or building/updating `./assets/styles.css`.

The bar: this should feel like a **premium digital medical journal** — closer to *Nature Reviews* or *NEJM* crossed with a well-made print magazine — than an e-learning dashboard. No cards, no gradients, no colorful widget chrome. The interface recedes; typography, figures, and evidence carry the page. A clinician-scientist should be comfortable reading this for an hour.

This system applies at two weights:

- **Full weight** for `./reference/*.html` — long-form, revisited often, earns the whole component set below (see `reference-documents.md`).
- **Condensed weight** for `./lessons/*.html` — same palette, type, and voice, but shorter: a hero, one or two sections, one interactive element, a footer. No sticky nav or reading-progress needed for something meant to take a few minutes.

Either way, every workspace holds to **one** system, defined once in `./assets/styles.css` and never redefined per file.

## Palette

Paper, not screen. Mostly monochrome, with one restrained accent used sparingly (a rule, a pull-quote mark, a status dot — never a background fill).

```css
--color-bg: #F8F6F1;       /* page background */
--color-paper: #FCFBF8;    /* content surface, if distinguished from bg */
--color-text: #0A0A0A;     /* body text */
--color-muted: #4E4D48;    /* captions, metadata, footnotes */
--color-accent: #6E1F2B;   /* deep burgundy — or forest green / oxidized bronze; pick one per workspace and hold it */
--color-hairline: #D0CBBF; /* dividers, table rules, borders */
```

No medical blue, no green-means-good/red-means-bad UI coloring. Correctness in quizzes is communicated with words and weight, not stoplight color (see `lesson-authoring.md` on feedback tone).

## Typography

Two families only. Typography *is* the product — spend the design budget here, not on decoration.

- **Serif** (headings, pull quotes, drop caps): EB Garamond, Cormorant Garamond, or Canela
- **Sans** (body, UI labels, captions, metadata): Inter, IBM Plex Sans, or Helvetica Neue

```css
--font-serif: "EB Garamond", "Cormorant Garamond", Georgia, serif;
--font-sans: "Inter", "IBM Plex Sans", -apple-system, sans-serif;
```

Type scale:

```
Topic / hero title     72px  serif
Section heading        40px  serif
Subsection             26px  sans, medium weight
Body                    19–20px  sans
Caption                14px  sans, muted
Footnote               13px  sans, muted
```

Large body text is deliberate, not a mistake — it's what makes long clinical reading comfortable. Set generous line-height (1.6–1.8 for body).

## Layout

No dashboard. No floating cards. Long-form reading with clear section breaks.

```
Hero: topic, one-line dek, metadata (source · updated · reading time)
──────────────────────────────────────
Section
  body copy, pull quote where warranted, figure with caption
──────────────────────────────────────
Section
  ...
──────────────────────────────────────
References
```

Single column for lessons; two-column body text is acceptable for longer reference documents where line length would otherwise run too wide — never for short lessons.

## Components

Use these by name so every lesson and reference doc stays visually consistent. Build each once in `./assets/`, don't redefine per file.

**Hero**
Topic as a large serif headline, a one-line editorial dek beneath it (not a generic subtitle — say what the piece actually argues or covers), then small-caps metadata: primary source, last updated, estimated reading time.

**Chapter number**
For multi-part reference documents only: a large, quiet serif numeral ("01") above a section heading. Only use where the content is genuinely sequential — don't add numbering as decoration.

**Section divider**
A hairline rule with the section name in small caps, sans-serif, letter-spaced. Replaces the card border as the unit of separation.

**Pull quote**
Large serif, centered, muted color, used sparingly — once per major section at most, and only for a claim genuinely worth pausing on (a key mechanism, a clinical maxim), never a random sentence pulled for decoration.

**Drop cap**
First letter of an opening paragraph set large or in the serif face. Reserve for a reference document's true opening paragraph, not every section.

**Margin note**
A short definitional or key-concept aside, set in the side margin (or, on narrow/mobile layouts, inline in a bordered box at the point of reference) — the textbook-marginalia pattern. Used for a term or fact worth flagging without breaking the main argument's flow.

**Figure**
Every important mechanism gets a real diagram (signaling pathway, flowchart, organ interaction, timeline) — not decorative illustration. Full width or centered, always with a numbered caption ("Figure 3 — AMPK-mediated regulation of hepatic ketogenesis.").

**Evidence block**
Replaces a boring citation table. One trial or source per block, styled like a journal abstract card:

```
Landmark trial     DCCT (1993)
Population         1,441 patients, Type 1 diabetes
Finding             [one-line result, in your own words, cited]
Limitation          Type 1 only — generalizability caveat
```

**Clinical pearl / controversy box**
A bordered aside (hairline border, no fill color) marked "Clinical pearl" or "Controversy" in small caps, for a practical tip or an area of genuine ongoing disagreement — flagged as such, not presented as settled.

**References list**
Not a bare numbered list. Each entry gets: journal name, year, and a link to the actual source. Skip invented metrics (citation counts, star ratings) unless they're real and sourced — the point is credibility, not decoration.

**Sticky section nav** *(full-weight reference documents only)*
A quiet left-hand list of section names, current section indicated by weight or a small marker — not a hamburger menu, not a hidden drawer.

**Reading progress** *(full-weight reference documents only)*
A minimal vertical indicator of sections completed vs. remaining — filled/hollow dots, Kindle-style. Skip this entirely for short lessons; it's overkill for a five-minute page.

## What this system explicitly avoids

- Gradients, drop shadows, colorful card backgrounds
- Rounded "widget" chrome — badges, pill buttons, colorful progress bars
- Stock medical iconography (stethoscopes, heartbeat lines, generic clipart)
- Emoji as UI decoration
- Any component that exists to look impressive rather than to carry a specific piece of content

## How this meets the non-technical-user bar

Editorial and minimal doesn't mean fragile or clever-for-its-own-sake. The interaction rules from `lesson-authoring.md` still apply on top of this visual system: plain active-voice labels, 44px+ tap targets, no hover-only interactions, corrections that carry their reasoning, no visible technical machinery. A beautiful page that's confusing to tap through has failed the same way a cluttered dashboard has — this system is the visual language, not a replacement for that usability bar.
