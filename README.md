# med-mentor

A Claude skill for teaching medical personnel — board prep, CME, clinical reasoning, pharmacology, procedural/OSCE skills — through short, interactive HTML lessons built up over many sessions.

## Folder layout

```
med-mentor/
├── SKILL.md                        Entry point. Trigger description + a table
│                                    pointing to the right reference file per task.
│                                    Keep this thin — it's loaded on every trigger.
├── README.md                        This file. Human-facing map, not read by Claude.
├── formats/
│   ├── MISSION-FORMAT.md            Template for the workspace's MISSION.md
│   ├── RESOURCES-FORMAT.md          Template for the workspace's RESOURCES.md
│   └── LEARNING-RECORD-FORMAT.md    Template for ./learning-records/*.md entries
└── references/
    ├── mission-and-resources.md     Establishing/updating MISSION.md, building
    │                                RESOURCES.md, finding communities (wisdom).
    ├── learning-design.md           Philosophy, fluency vs. storage strength,
    │                                zone of proximal development, knowledge vs. skills.
    ├── lesson-authoring.md          How to write a lesson, the interactive HTML
    │                                widget catalog (quizzes, calculators, checklists,
    │                                flashcards, diagrams, algorithms), and asset reuse.
    └── safety-and-sourcing.md       Non-negotiable rules: no real patient data,
                                     cite every clinical figure, education-only
                                     framing, redirect on real-patient questions.
```

## Why it's split up this way

A single monolithic `SKILL.md` gets re-read in full on every trigger, whether the task is "set up my mission for the first time" or "add one quiz question to lesson 12." Splitting by concern means:

- `SKILL.md` stays short (loaded every time, so it should be cheap)
- Each `references/*.md` is only opened when that specific job comes up
- `safety-and-sourcing.md` is the one exception — it's small and applies to almost everything, so it's cheap to keep in mind throughout a session rather than re-deriving

If you're extending this skill (e.g. adding a specialty-specific reference pack, like an ICU-specific dosing set), add it as its own file under `references/` and add a row to the table in `SKILL.md` rather than growing any single file past a couple hundred lines.

## The actual teaching workspace

This skill folder is *not* where lessons live. When the skill runs, it treats the *user's current working directory* as the teaching workspace and creates `MISSION.md`, `RESOURCES.md`, `learning-records/`, `lessons/`, `assets/`, and `NOTES.md` there. This folder only holds the skill's own instructions and templates.
