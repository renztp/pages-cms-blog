import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

const photoSets = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sets' })
});

export const collections = { photoSets };
