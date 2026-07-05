# Lesson Authoring & Interactive HTML Capabilities

Read this when: writing or revising a lesson, or building any interactive widget.

## Lesson basics

A lesson is one self-contained HTML file in `./lessons/`, titled `0001-<dash-case-name>.html`, incrementing.

It should be **beautiful and clinical-reference-grade** — clean typography, generous whitespace, Tufte-like restraint — because the user will revisit it before boards or before a shift.

Keep it short with one tangible clinical win per lesson (e.g. "confidently distinguish SIADH from diabetes insipidus," not "master fluid and electrolyte disorders"). Stay in the zone of proximal development established via `learning-design.md`. Every lesson must:

- Tie directly to the mission
- Recommend one primary source — the highest-quality guideline, review, or textbook chapter found — with a link
- Include a visible reminder to ask the agent follow-up questions; the agent is their teacher and can clarify edge cases the lesson didn't cover
- Carry a small, unobtrusive footer noting the lesson is for **education only** — see `safety-and-sourcing.md`, which applies to every lesson without exception

## Editorial, non-technical UX

The audience is a clinician, not a developer — a nurse on a ten-minute break, a resident post-call, someone who has never called something a "widget" in their life. The UI should read like a well-edited medical magazine or a beautifully typeset handout, not like software. Nothing about the experience should require figuring out how an interface works before engaging with the medicine.

**Read like editorial, not like an app.**
Think *New England Journal* meets a well-designed print handout, not a dashboard. Generous margins, a clear type hierarchy (one confident heading, calm body text, restrained use of color), and real whitespace — not because it looks nice, but because it lowers the cognitive load competing with the clinical content itself. Pick one deliberate palette and typeface pairing per workspace (stored in `./assets/styles.css`) and hold it steady across every lesson, so the course feels authored, not templated.

**Every control should be self-explanatory, with zero instructions needed.**
If a button, card, or input needs a tooltip or a line of instructions to be understood, redesign it instead of explaining it. Use plain, active-voice labels a clinician would actually say out loud: "Check my answer," "Show the reasoning," "Next case" — never "Submit," "Validate," or "Proceed." A person should be able to look at the screen for two seconds and know exactly what will happen if they tap something.

**Design for a distracted, tired, possibly-on-a-phone user.**
Large tap targets (44px minimum), high contrast, generous line height, no hover-only interactions (everything must work on tap alone), no timed elements unless the lesson is explicitly timing a skill on purpose. Assume one thumb, imperfect lighting, and a ten-minute window, not a mouse and a quiet desk.

**Feedback should feel like a good attending, not a system message.**
When an answer is right: quiet, confident affirmation plus the one-line "why." When it's wrong: no red X, no buzzer — state plainly what the correct answer is and why, the same way a good teacher corrects without embarrassing. Never say "Incorrect" alone; always pair it with the reasoning that makes the correction useful.

**Hide the machinery.**
No visible JSON, no console logs, no raw technical error states. If something can't be computed (e.g. a calculator input is out of range), say what's wrong in plain clinical terms ("Weight must be greater than 0 kg") — never a stack trace or a generic "invalid input."

## Interactive HTML capabilities

This is what makes a lesson more than a static page. Every lesson should include at least one interactive element with immediate feedback — a tight feedback loop matters more in medicine than almost anywhere else, since uncorrected misconceptions here have real stakes. Build every widget to the editorial, non-technical UX standard above — the interaction should feel like turning a page, not operating a tool.

Build lessons as plain, self-contained HTML/CSS/vanilla JS (no build step, no server) so they open directly in a browser and survive being copied or archived. Pull shared behavior from `./assets/` rather than re-inlining it per lesson.

Widget patterns, by purpose:

**Clinical vignette quiz**
A short stem (history, exam findings, labs/imaging) → multiple choice or free-recall answer → immediate reveal with reasoning and a citation. Keep every answer option the same length/word count so formatting never leaks the answer.

**Differential-diagnosis builder**
User selects candidate diagnoses given a presentation, then the widget reveals discriminating features that rule conditions in or out.

**Dosage / calculation drills**
Interactive calculators (weight-based dosing, Parkland formula, corrected calcium, anion gap, CHA₂DS₂-VASc, etc.) where the user computes the answer first, then checks against the tool — never a black box that just gives the number.

**Spaced-repetition flashcards**
Front/back cards pulling from `learning-records/`'s flagged weak spots, resurfaced across sessions rather than only within one lesson.

**OSCE / procedural checklists**
Step-by-step interactive checklist for a physical exam maneuver or procedure, with self-marking completion and a note on common errors at each step.

**Annotatable diagrams**
SVG anatomy, ECG strips, or imaging with clickable/hoverable labels the user must identify before the label is revealed.

**Algorithm walkthroughs**
Click-through clinical algorithms (ACLS, sepsis bundles, stroke workup) where the user picks the next step and gets branching feedback, mirroring how the algorithm is used under time pressure.

### Technical rules

- Never use real, identifiable patient data in any vignette — write original, clearly fictional cases
- Every factual claim (dosing, diagnostic criteria, algorithm steps) cites its source, right in the lesson
- Keep interactivity dependency-free (vanilla JS) unless the user's environment is known to support more
- A shared `./assets/styles.css` is the first component every workspace earns, so lessons read as one consistent course
- Every interactive control uses a plain-language, active-voice label ("Check my answer," not "Submit") and needs no instructions to understand
- Minimum 44px tap targets, no hover-only interactions, high contrast, responsive down to a phone screen
- Wrong answers are corrected with the reasoning attached, never a bare "Incorrect" or a red buzzer-style flag
- No visible technical machinery — no raw error states, no jargon-y system messages; invalid input gets a plain clinical explanation

## Assets

Reusable components live in `./assets/`: the stylesheet, a quiz engine, a dosage-calculator helper, a flashcard/spaced-repetition component, a differential-builder, an annotatable-diagram helper — anything a second lesson would otherwise duplicate.

Reuse is the default. Read `./assets/` before writing a lesson. When a lesson needs something new and reusable, write it into `./assets/` and link to it rather than inlining it where a future lesson would just copy-paste it again.
