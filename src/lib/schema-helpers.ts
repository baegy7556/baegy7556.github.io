import { z } from 'astro/zod';

/** Required text. Empty / missing -> build error naming the field. */
export const req = () =>
  z
    .string({ error: '비어 있음 — 필수 항목이라 채워야 함' })
    .trim()
    .min(1, { error: '비어 있음 — 필수 항목이라 채워야 함' });

/** Optional text. Empty / missing -> undefined (the part is hidden on the site). */
export const opt = () =>
  z
    .string({ error: '글자(텍스트)여야 함' })
    .nullish()
    .transform((v) => v?.trim() || undefined);

/** Optional list of text. Empty items are dropped; empty list -> []. */
export const optList = () =>
  z
    .array(z.string().nullish(), { error: '목록이어야 함' })
    .nullish()
    .transform((v) => (v ?? []).map((s) => s?.trim()).filter((s): s is string => Boolean(s)));

/** Optional list of objects. Missing -> []. */
export const list = <T extends z.ZodType>(item: T) =>
  z
    .array(item, { error: '목록이어야 함' })
    .nullish()
    .transform((v) => v ?? []);

/** Optional yes/no. Missing -> false. */
export const flag = () =>
  z
    .boolean({ error: '체크(true/false)여야 함' })
    .nullish()
    .transform((v) => v ?? false);
