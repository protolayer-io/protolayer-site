# AGENTS.md

Working notes for AI agents contributing to the ProtoLayer website.

## Rule zero: everything in this repository is written in English

**Every artifact you produce must be in English.** No exceptions, regardless of
the language the human is speaking to you in. A contributor who reads only
English must be able to work with this repository without translating anything.

This covers:

- Source code — identifiers, variable names, function names, file names
- Code comments and docstrings
- Documentation — `README.md`, this file, any `docs/`
- Commit messages, branch names, PR titles and descriptions
- Issue titles and bodies, PR review comments, code review feedback
- Log messages, error strings, TODO notes

If the human writes to you in Spanish or Portuguese, answer them in their
language — but the moment you write to a file, a commit, or GitHub, switch to
English.

### The one deliberate exception: user-facing site copy

The website itself ships in **three locales — English, Spanish and Brazilian
Portuguese**. The translated strings in `src/i18n/ui.ts` are product content,
not repository language. Never "fix" the Spanish or Portuguese entries into
English. Rule zero governs how we write *about* the code; the `es` and `pt`
dictionaries are the code's *data*.

## What this project is

The marketing site for ProtoLayer OÜ — an Estonian company doing custom
development on free software and open protocols (Bitcoin, Lightning, Nostr) —
plus a dedicated landing page for Choke, its open-source BJJ scoring app.

It is a static Astro 5 site with no backend, no client framework and no
runtime dependencies beyond Astro itself. Deployed to GitHub Pages on every
push to `main` via `.github/workflows/deploy.yml`.

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server with hot reload
npm run build     # production build into dist/ — this is the gate that must pass
npm run preview   # serve the production build locally
```

There is no test suite and no linter configured. `npm run build` is the only
automated check; treat a clean build plus a manual inspection of the generated
HTML in `dist/` as the verification bar. If you change rendered copy, grep
`dist/` to confirm the new text is present and the old text is gone.

## Architecture

### Content lives in exactly one place

**All user-facing copy is in `src/i18n/ui.ts`.** Components read it through
`getSite(lang)` or `getChoke(lang)` and never hardcode display text.

The dictionary has two top-level branches:

- `site.*` — the ProtoLayer landing page
- `choke.*` — the Choke landing page

The `en` object is the source of truth. `es` and `pt` are typed as
`typeof en`, so **adding, removing or renaming any key forces you to update all
three locales** — TypeScript will not let you forget, and the build will fail.
Copy changes are never complete until all three read naturally.

Some values are trusted static HTML fragments (`titleHtml`, `leadHtml`,
`descHtml`, anything with inline `<a>` or `<span>`), rendered with `set:html`.
There is no user input anywhere in this site, so this is safe — but never route
untrusted data into those fields.

### Routing and locales

Defined in `src/i18n/utils.ts`. English is the default locale and lives at
un-prefixed paths; the others sit behind a locale prefix:

| Page   | en        | es           | pt           |
| ------ | --------- | ------------ | ------------ |
| Home   | `/`       | `/es/`       | `/pt/`       |
| Choke  | `/choke`  | `/es/choke`  | `/pt/choke`  |

Each route is a thin page in `src/pages/` that renders a design with a `lang`
prop. **Adding a page means adding all three locale variants** plus a `Page`
entry in `src/i18n/utils.ts`, so `hreflang` tags and the language switcher stay
correct.

### Two interchangeable designs

The home page has two complete design implementations, selected by
`SITE_DESIGN` in `src/site.config.ts`:

- `layered-bold` (**currently active**) — `src/designs/LayeredBold.astro`,
  components in `src/components/layered-bold/`
- `terminal-editorial` — `src/designs/TerminalEditorial.astro`, components in
  `src/components/terminal-editorial/`

Both consume the same `site.*` strings. **A content change must be checked
against both**, because the inactive design can silently break — it still
compiles, but nobody looks at it. Some strings are design-specific and live
under `site.te.*` (used only by `terminal-editorial`).

Shared across designs: `Nav`, `Footer`, `Terminal`, `Logo`, `ThemeToggle`,
`LangSwitcher`, `LangDetect`.

### Styling

Plain scoped CSS inside each `.astro` component, on top of design tokens in
`src/styles/tokens.css`. Light and dark themes are driven by a `data-theme`
attribute on `<html>` with `prefers-color-scheme` as the default. There is no
CSS framework — do not introduce one. Choke has its own stylesheet,
`src/styles/choke.css`, and its own visual identity; keep it separate from the
ProtoLayer tokens.

## Writing copy

The site's positioning is deliberate, and copy work here has failed before by
drifting back into generic marketing language. When you touch user-facing text:

- **Name real technologies.** Write "Bitcoin, Lightning and Nostr", not
  "distributed systems" or "emerging digital ecosystems".
- **Apply the opposite test.** If the inverse of your sentence is something no
  company would ever claim ("we build fragile, non-scalable systems"), the
  sentence carries no information. Rewrite it.
- **Never hardcode data that goes stale.** No block heights, no dates, no
  counts, no prices — unless the value is supplied dynamically. A demo terminal
  claiming a node is "synced" at a block height from two years ago is worse
  than showing no number at all.
- **Say what the reader gets**, not what we are. Prefer a claim a competitor
  could plausibly contradict.
- **Do not invent proof.** No fake clients, testimonials, logos, metrics or case
  studies. If a claim needs evidence the project does not have, cut the claim.
- **Keep jurisdiction separate from technology.** Estonia is where the company
  is registered, not part of the stack — it belongs in the About section and
  the footer, never in a list alongside protocol names.

## Git workflow

- Branch off `main`. Use a descriptive prefixed name: `copy/…`, `feat/…`,
  `fix/…`, `chore/…`.
- Conventional commit format: `type: description`, in English, imperative mood.
  Types in use: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `ci`.
- Explain **why** in the commit body, not just what — the diff already shows
  what changed.
- Never commit directly to `main`; it deploys to production on push.
- Never commit `dist/`, `node_modules/` or the `design_handoff_protolayer_site/`
  directory.

### Creating pull requests

The git remote still points at the repository's former name. The canonical
repository is **`protolayer-io/protolayer-site`**, so `gh pr create` fails with
a confusing `No commits between…` error unless you pass the repo explicitly:

```bash
gh pr create --repo protolayer-io/protolayer-site --base main --head <branch> ...
```

PR descriptions are English, and should state the problem before the solution,
list what changed, and include a test plan with honest checkboxes — leave items
unchecked when you did not actually verify them.

## Before you hand work back

- `npm run build` passes
- Copy changes are reflected in `dist/` for **all three locales**
- Both designs still render correctly if you touched shared strings
- No hardcoded values that will be false in six months
- Every word you wrote to disk or to GitHub is in English
