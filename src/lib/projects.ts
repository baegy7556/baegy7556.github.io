import { getCollection } from 'astro:content';

/** Visible projects: featured first, then by order (small number first), then by title. */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.hidden);
  return all.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      a.data.order - b.data.order ||
      a.data.title.localeCompare(b.data.title),
  );
}
