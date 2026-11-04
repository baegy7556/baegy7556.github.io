# baegy7556.github.io

Personal engineering portfolio of Geonyi Bae. Static site built with [Astro](https://astro.build), edited through
[Pages CMS](https://pagescms.org), deployed to GitHub Pages by GitHub Actions.

Live: https://baegy7556.github.io

**편집 방법(한국어): [docs/EDITING.md](docs/EDITING.md)**

## How it fits together

```
Pages CMS (browser form) ──save──▶ commit to main ──▶ GitHub Actions: build ──ok──▶ deploy to Pages
                                                                      └─fail──▶ nothing deployed, old site stays
```

| What | Where |
| --- | --- |
| All editable text (profile, highlights, skills, experience, education, UI labels) | `src/data/*.yml` |
| Projects, one Markdown file each | `src/content/projects/*.md` |
| Uploaded images / video / CV | `public/media/` |
| CMS form definition (labels + hints) | `.pages.yml` |
| Validation with readable errors | `src/lib/data.ts`, `src/content.config.ts` |
| Layout / components (no copy in here) | `src/layouts/`, `src/components/`, `src/pages/` |

Rules: empty optional fields hide their part of the page; missing required fields fail the build
with the file and field name, so a broken edit never reaches the live site.

## Local development

Needs Node.js 22.23+ (see `.nvmrc`).

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

## Deploy

Pushes to `main` deploy automatically (`.github/workflows/deploy.yml`). Pull requests run the build as a check
but are never deployed. One-time setup: **Settings → Pages → Source: GitHub Actions**.
