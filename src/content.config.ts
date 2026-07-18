import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    image: z.string().optional(),
    demoUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = { projects };