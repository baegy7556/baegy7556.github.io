// Loads the YAML files in src/data/ and checks them.
// If something is wrong the build stops with a message saying which file and which field.
import { z } from 'astro/zod';
import { parse } from 'yaml';
import { flag, list, opt, optList, req } from './schema-helpers';

import profileRaw from '../data/profile.yml?raw';
import highlightsRaw from '../data/highlights.yml?raw';
import skillsRaw from '../data/skills.yml?raw';
import experienceRaw from '../data/experience.yml?raw';
import educationRaw from '../data/education.yml?raw';
import siteRaw from '../data/site.yml?raw';

function formatPath(path: PropertyKey[]): string {
  return path.reduce<string>(
    (out, key) => (typeof key === 'number' ? `${out}[${key + 1}번째]` : out ? `${out}.${String(key)}` : String(key)),
    '',
  ) || '(파일 전체)';
}

function load<S extends z.ZodType>(file: string, raw: string, schema: S): z.output<S> {
  let data: unknown;
  try {
    data = parse(raw) ?? {};
  } catch (e) {
    throw new Error(`\n[데이터 오류] src/data/${file}\n  YAML 문법이 깨짐: ${(e as Error).message}\n`);
  }
  const result = schema.safeParse(data);
  if (!result.success) {
    const lines = result.error.issues.map((i) => `  • ${formatPath(i.path)}: ${i.message}`);
    throw new Error(`\n[데이터 오류] src/data/${file}\n${lines.join('\n')}\n`);
  }
  return result.data;
}

export const profile = load(
  'profile.yml',
  profileRaw,
  z.object({
    name: req(),
    headline: opt(),
    tagline: opt(),
    facts: optList(),
    cv: opt(),
    email: opt(),
    github: opt(),
    linkedin: opt(),
  }),
);

export const highlights = load(
  'highlights.yml',
  highlightsRaw,
  z.object({
    items: list(z.object({ title: req(), body: opt(), proof: opt(), hidden: flag() })),
  }),
).items.filter((h) => !h.hidden);

export const skills = load(
  'skills.yml',
  skillsRaw,
  z.object({ groups: list(z.object({ name: req(), items: optList() })) }),
).groups.filter((g) => g.items.length > 0);

export const experience = load(
  'experience.yml',
  experienceRaw,
  z.object({
    items: list(
      z.object({ role: req(), org: opt(), location: opt(), period: opt(), points: optList(), hidden: flag() }),
    ),
  }),
).items.filter((e) => !e.hidden);

export const education = load(
  'education.yml',
  educationRaw,
  z.object({
    items: list(z.object({ degree: req(), school: opt(), period: opt(), points: optList(), hidden: flag() })),
  }),
).items.filter((e) => !e.hidden);

export const site = load(
  'site.yml',
  siteRaw,
  z.object({
    seo: z.object({ title: req(), description: opt() }),
    nav: z.object({ projects: req(), skills: req(), experience: req(), cv: req() }),
    buttons: z.object({ downloadCv: req(), github: req(), linkedin: req(), email: req() }),
    sections: z.object({ highlights: req(), projects: req(), skills: req(), experience: req(), education: req() }),
    project: z.object({
      back: req(),
      role: req(),
      period: req(),
      status: req(),
      tech: req(),
      links: req(),
      media: req(),
      featured: req(),
    }),
    notFound: z.object({ title: req(), link: req() }),
    a11y: z.object({ skipLink: req(), themeToggle: req(), techList: req() }),
  }),
);
