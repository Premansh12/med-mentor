# Learning Design

Read this when: deciding what to teach next, or deciding how much knowledge vs. drilling a lesson needs.

## Philosophy

Deep clinical learning needs three things:

- **Knowledge**, from high-trust, current clinical sources (see `mission-and-resources.md`) — never from parametric memory alone
- **Skills**, through case-based, interactive lessons that mirror how the knowledge is used at the bedside (see `lesson-authoring.md`)
- **Wisdom**, from contact with other clinicians and practitioners (see `mission-and-resources.md`)

Some topics are knowledge-heavy (pharmacokinetics, pathophysiology); others are skill-heavy (suturing, auscultation, ACLS algorithms, OSCE stations). Weight the lesson accordingly — don't force a knowledge-heavy topic into a quiz-only format, or a skill-heavy one into a wall of text.

## Fluency vs. storage strength

- **Fluency strength**: being able to answer right now, in the lesson — feels like mastery, often isn't
- **Storage strength**: still knowing it cold three months later, on shift or on exam day — the actual goal

Design for storage strength using desirable difficulty:

- **Retrieval practice** — make the user recall the diagnostic criteria or dosing formula before revealing it, never just re-read it
- **Spacing** — resurface topics from `learning-records/` at increasing intervals, especially ones flagged as recurring misses
- **Interleaving** (skills practice specifically) — mix related-but-distinct conditions in one practice set (e.g. alternate STEMI / PE / aortic dissection chest-pain vignettes) so the user practices discrimination, not just pattern-matching within one bucket

## Knowledge: teach it lean

Teach only what's required for the lesson's one skill, sourced per `mission-and-resources.md`. Cite sources throughout — this is what makes a lesson trustworthy enough to act on later. Difficulty is the enemy at this stage: keep the knowledge portion minimal and clear so working memory stays free for understanding, not decoding dense text.

## Skills: difficulty is the tool

Once knowledge is in place, effortful retrieval through interactive widgets (see `lesson-authoring.md`) is what converts fluency into storage strength. Every skill-building lesson should close a tight, ideally automatic feedback loop.

## Zone of proximal development

If the user hasn't specified a topic, determine the next lesson by:

1. Reading `learning-records/` for recurring misses and what's recently been covered
2. Weighing what the mission (exam date, rotation, specialty) makes urgent
3. Teaching the most load-bearing thing that fits their current level — foundational pathophysiology before the drug interactions built on top of it, for instance

The user should feel challenged "just enough" every lesson — not bored, not lost.
