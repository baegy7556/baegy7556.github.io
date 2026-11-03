# baegy7556.github.io

Personal engineering portfolio of Geonyi Bae, built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live: https://baegy7556.github.io

## Run locally

Needs Node.js 22.23+ (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to dist/
```

## Where things live

| What | File |
| --- | --- |
| Name, tagline, links, "What I can do", skills, experience, education | `src/data/profile.ts` |
| Projects (one file each) | `src/content/projects/*.md` |
| Images, videos, CV | `public/media/` |
| Colours / fonts | `src/styles/global.css` (variables at the top) |

## Add a project (one file)

1. Copy an existing file in `src/content/projects/`, e.g. `warman-challenge.md` → `my-new-project.md`.
   The file name becomes the URL: `/projects/my-new-project/`.
2. Edit the frontmatter:

   ```yaml
   ---
   title: My New Project
   summary: One line shown on the card.
   cover: /media/projects/my-new-project/cover.jpg
   coverAlt: What the image shows (for screen readers)
   tags: [Arduino, C, PI control]   # first 4 appear on the card
   role: What I did
   period: "2026"
   status: Completed                # optional
   order: 3                         # lower = shown first
   draft: false                     # true hides it from the site
   links:                           # optional buttons
     - label: Source on GitHub
       href: https://github.com/baegy7556/...
   media:                           # optional, shown at the bottom
     - type: image                  # image | video | youtube
       src: /media/projects/my-new-project/photo-1.jpg
       alt: What the image shows
       caption: Optional caption
   ---
   ```

3. Write the body in Markdown under `## Overview`, `## My role`, `## Process`, `## Results`.
   ("Tech used" comes from `tags` automatically.)

The build checks the frontmatter, so a typo (e.g. a missing `title`) fails with a clear error.

## Replace an image / the CV

Placeholders are in `public/media/` and say what goes where.

- **Same file name:** just overwrite the file (e.g. a new `cover.svg`).
- **Different format** (most likely — `.jpg`, `.png`, `.webp`, `.gif`): put the file in the project's folder,
  then update the path in that project's frontmatter (`cover:` or `media[].src`) and delete the placeholder.
- Images look best at **16:9, about 1200×675**. Keep each under ~500 KB (export as WebP/JPG).
- **GIFs get heavy fast.** For anything longer than a few seconds, use a short `.mp4` (`type: video`)
  or upload to YouTube and use `type: youtube` with the video ID. Don't commit videos over ~20 MB.
- **CV:** replace `public/media/Geonyi_Bae_CV.pdf` (keep the same name, or change `cv` in `src/data/profile.ts`).
  It's a public file — remove your phone number from the web version if you don't want it public.

Before sharing the site, find any leftover placeholders:

```bash
grep -rn TODO src/
```

## Deploy

Deploys automatically with GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

One-time setup: GitHub repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.

After that: edit, commit, push to `main`, and the site updates in about a minute.
Check progress in the repo's **Actions** tab. You can also re-run it manually there ("Run workflow").
