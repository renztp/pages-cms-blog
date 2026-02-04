import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const photoSets = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sets' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    photos: z.array(z.string())
  })
});

export const collections = { photoSets };
