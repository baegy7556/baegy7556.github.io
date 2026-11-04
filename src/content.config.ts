import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { flag, list, opt, optList, req } from './lib/schema-helpers';

// One Markdown file in src/content/projects/ = one project.
// The file name becomes the URL: robot-mcp.md -> /projects/robot-mcp/
// Field meanings are documented (in Korean) in .pages.yml and docs/EDITING.md.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: req(),
    summary: req(),
    cover: opt(),
    coverAlt: opt(),
    tags: optList(),
    role: opt(),
    period: opt(),
    status: opt(),
    featured: flag(),
    hidden: flag(),
    order: z
      .number({ error: '숫자여야 함' })
      .nullish()
      .transform((v) => v ?? 100),
    links: list(z.object({ label: req(), url: req() })),
    media: list(
      z.object({
        file: opt(),
        youtube: opt(),
        caption: opt(),
        alt: opt(),
      }),
    ),
  }),
});

export const collections = { projects };
