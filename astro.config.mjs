// @ts-check
import { defineConfig } from 'astro/config';

// baegy7556.github.io is a GitHub *user* site, so it is served from the root ("/").
// If you ever move this to a project repo (e.g. github.com/baegy7556/portfolio),
// add `base: '/portfolio'` here.
export default defineConfig({
  site: 'https://baegy7556.github.io',
});
