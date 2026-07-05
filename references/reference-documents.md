# Reference Documents

Read this when: creating or updating anything in `./reference/*.html`.

Lessons are rarely revisited; reference documents are — so build them for anything the user will need to look up quickly, not re-derive:

- Dosing tables
- Diagnostic criteria
- Algorithm flowcharts
- Lab reference ranges
- Drug-class comparison charts
- A running **glossary** of clinical terminology

Once a glossary exists, adhere to its terms consistently across every future lesson and reference doc — don't introduce a synonym for a term it already defines.

Keep these dense, scannable, and print-friendly: this is the document the user pulls up on shift or the night before boards, not something they read start to finish. Favor tables and short flowcharts over prose. Same sourcing rules as lessons apply — see `safety-and-sourcing.md`.

## Visual treatment: full-weight editorial system

Reference documents are where the **full weight** of `design-system.md` belongs — they're revisited often enough to earn the complete component set:

- A proper **hero** (topic, one-line dek, source/updated/reading-time metadata)
- **Chapter numbers** and a **sticky section nav**, if the document is genuinely multi-part
- **Drop cap** on the true opening paragraph
- **Margin notes** for key terms or facts that shouldn't interrupt the main flow
- **Evidence blocks** in place of citation tables, for any landmark trial or guideline being summarized
- **Figures** with numbered captions for every mechanism worth diagramming
- **Reading progress** indicator, if the document is long enough that a user would want one

Read `design-system.md` for the palette, type scale, and exact component patterns before building any of the above — don't improvise a variant per document.
