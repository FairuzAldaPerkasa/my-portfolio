import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({ 
    title: z.string(),
    description: z.string(),
    problem: z.string(),
    tech: z.array(z.string()),
    role: z.string(),
    impact: z.string(),
    githubUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    date: z.date(),
    image: image().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    position: z.string(),
    company: z.string(),
    duration: z.string(),
    description: z.string(),
    achievements: z.array(z.string()),
  }),
});

export const collections = { projects, experience };