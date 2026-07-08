# Learning From a Provided PDF

Read this when: the user uploads or references a PDF within a teaching session — lecture slides, a textbook chapter, a journal article, a clinical guideline, a past exam or practice-test export, their own notes, or a syllabus/curriculum/rotation schedule.

## First: read it properly, don't skim from the filename

- Extract the actual text and structure before doing anything else — don't infer content from a title or table of contents alone.
- If it's a scanned or image-only PDF, it needs OCR before you can work with it; don't guess at content you can't actually read.
- Build a quick content inventory as you go: headings, figures/tables, whether it's dense prose, slide bullets, tabular data, or a question bank — this determines what you build from it next.

## Then: figure out what the user wants from it

This skill supports four things, not mutually exclusive:

- **Learn from it** — extract and compress its knowledge into references
- **Be questioned on it** — quizzes/practice grounded in its content
- **Be taught from it** — full lessons built on it, sequenced into the mission
- **Plan from it** — if it's a syllabus, exam blueprint, or schedule, turn it into a sequenced study plan

Infer intent from phrasing where it's clear ("quiz me on this" → Question; "help me get up to speed on this before my rotation" → Teach; "here's my course syllabus" → Plan). If it's genuinely ambiguous ("here's my cardiology notes"), ask one clarifying question rather than guessing — the four modes produce different artifacts and guessing wrong wastes the extraction work.

## Learn from it

- Where the material is dense, reference-grade content (a guideline, a chapter), compress it into a `./reference/*.html` document per `reference-documents.md` and `design-system.md` — same editorial system, same rules, no separate treatment for user-provided material.
- Log the PDF in `RESOURCES.md` as an ingested source (format below), so future lessons can cite it properly instead of re-extracting it each time.
- Never reproduce large verbatim excerpts — paraphrase in your own words. Quote at most a short phrase, and only when exact wording matters (e.g. a diagnostic criterion's precise phrasing). This applies even to material the user owns or uploaded themselves; copyright limits aren't waived by upload.

## Question from it

- Build clinical vignette quizzes (per `lesson-authoring.md`) grounded in the PDF's concepts — write original stems that test the same knowledge, don't lift questions verbatim from a past exam or question bank.
- If the PDF *is* a past exam or practice-test export, use it diagnostically instead of re-serving it: identify which topics were missed and log them as learning records (recurring misses) per `formats/LEARNING-RECORD-FORMAT.md`, then build fresh practice around those gaps.
- Cite the PDF as the source of the underlying concept, the same as any other resource in a lesson.

## Teach from it

- Treat it as a primary source for one or more lessons, held to the same authoring standard as any other lesson (`lesson-authoring.md`, `design-system.md`).
- If it covers more ground than fits one lesson, split it across multiple lessons at natural knowledge boundaries rather than cramming it into one dense page — one tangible win per lesson still applies.
- Still respects the user's zone of proximal development (`learning-design.md`): a dense chapter doesn't mean one dense lesson. Teach the parts most relevant to the mission first, and sequence the rest.

## Plan from it

- If it's a syllabus, curriculum outline, exam blueprint, or rotation schedule, extract its topic list/sequence and propose it as a study plan: which lessons to build, in what order, against what timeline.
- Reconcile it with `MISSION.md` — if it changes the scope of what the user is learning, update `MISSION.md` the usual way: confirm with the user first, and log a learning record for the change.
- Store the resulting sequence as a checklist inside `MISSION.md` (or a learning record describing it) rather than inventing a new top-level workspace file — the existing structure already has a place for this.

## Logging an ingested PDF in RESOURCES.md

Add it under a dedicated subsection so it's clear which sources came from the user rather than being found independently. See `formats/RESOURCES-FORMAT.md` for the exact block; the essentials are: filename/title, material type (lecture slides / chapter / article / guideline / past exam / syllabus), date ingested, which of the four modes it's being used for, and any notes on quality or currency (a five-year-old guideline PDF gets flagged the same way a stale web source would).
