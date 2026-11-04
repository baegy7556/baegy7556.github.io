const VIDEO_EXT = /\.(mp4|webm|mov|m4v)$/i;

/** Accepts a full YouTube URL (watch, youtu.be, shorts, embed) or a bare video ID. */
export function youtubeId(input: string): string | undefined {
  const m = input.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/);
  if (m) return m[1];
  return /^[\w-]{11}$/.test(input) ? input : undefined;
}

export type MediaItem = { file?: string; youtube?: string; caption?: string; alt?: string };
export type ResolvedMedia =
  | { kind: 'youtube'; id: string; caption?: string; alt?: string }
  | { kind: 'video' | 'image'; src: string; caption?: string; alt?: string };

/** Turns a media entry into what to render. Entries with nothing usable are dropped. */
export function resolveMedia(items: MediaItem[]): ResolvedMedia[] {
  return items.flatMap((m): ResolvedMedia[] => {
    const id = m.youtube ? youtubeId(m.youtube) : undefined;
    if (id) return [{ kind: 'youtube', id, caption: m.caption, alt: m.alt }];
    if (m.file) return [{ kind: VIDEO_EXT.test(m.file) ? 'video' : 'image', src: m.file, caption: m.caption, alt: m.alt }];
    return [];
  });
}
