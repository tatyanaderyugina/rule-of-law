# ruleoflawfail.com

Static GitHub Pages site (no build step) documenting Trump administration actions that are likely unconstitutional, likely illegal, or abuses of power. Live at https://ruleoflawfail.com (CNAME in repo root). Pushing to `main` publishes immediately — never push without the user's approval of content changes.

## Structure

- `index.html` — landing page with links to category pages
- Category pages, each a table (Date | Administration Action | Why this violates... | Notes): `first-amendment`, `fifth-amendment`, `tenth-amendment`, `federal-spending`, `separation-of-powers`, `miscellaneous-violations`, `illegal-actions`, `abuse-of-power` (+ sub-pages `attack-on-education`, `foreign-deals`)
- Each category's **main page holds only the most egregious cases**; the rest live on the companion `<category>-additional.html` page
- `styles.css` — shared styles, including a mobile layout that turns table rows into cards via `td::before { content: attr(data-label) }` — every `<td>` needs a correct `data-label`
- `script.js` — opens external links in new tabs
- `update-state.md` — date and Trump Tyranny Tracker day number through which content is current

## Conventions

- Entries are chronological within each table (oldest first); new rows go at the bottom of `<tbody>`
- Every entry cites reputable primary sources (court documents, AP, Reuters, NYT, WaPo, etc.) with links embedded in the cell text; never cite aggregator substacks
- Inclusion rubric and the full update workflow live in the user-level `update-tracker` skill (`~/.claude/skills/update-tracker/SKILL.md`)
- Keep HTML hand-written and simple; match existing formatting
