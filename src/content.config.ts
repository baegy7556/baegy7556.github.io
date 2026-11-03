import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file in src/content/projects/ = one project.
// The file name becomes the URL: robot-mcp.md -> /projects/robot-mcp/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** One line, shown on the card. */
    summary: z.string(),
    /** Path under public/, e.g. /media/projects/robot-mcp/cover.svg */
    cover: z.string(),
    coverAlt: z.string(),
    /** Technologies / skills. First 4 are shown on the card, all on the detail page. */
    tags: z.array(z.string()).default([]),
    /** Short "my role" line for the spec block at the top of the detail page. */
    role: z.string(),
    period: z.string(),
    status: z.string().optional(),
    /** Lower number = shown first. */
    order: z.number().default(100),
    /** Set to true to hide a project without deleting it. */
    draft: z.boolean().default(false),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    media: z
      .array(
        z.object({
          type: z.enum(['image', 'video', 'youtube']),
          /** image/video: path under public/. youtube: the video ID. */
          src: z.string(),
          alt: z.string().default(''),
          caption: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };
