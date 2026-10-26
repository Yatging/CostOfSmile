import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseFields = {
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
  external_url: z.string().optional(),
  video_url: z.string().optional(),
  draft: z.boolean().default(false)
};

const process = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/process' }),
  schema: z.object({
    ...baseFields,
    date: z.coerce.date(),
    type: z.enum(['Research', 'Experiment', 'Meeting', 'Decision', 'Documentation']),
    stage: z.string(),
    featured: z.boolean().default(false)
  })
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    ...baseFields,
    date: z.coerce.date(),
    category: z.enum(['Theory', 'Artwork', 'Context']),
    creator: z.string().optional(),
    year: z.string().optional(),
    citation: z.string().optional()
  })
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
  schema: z.object({
    ...baseFields,
    date: z.coerce.date(),
    status: z.enum(['Planned', 'In progress', 'Complete', 'Failed', 'Iterating']),
    medium: z.string(),
    gallery: z.array(z.string()).default([])
  })
});

const materials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/materials' }),
  schema: z.object({
    ...baseFields,
    date: z.coerce.date(),
    status: z.enum(['Available', 'Collecting', 'Requested', 'Pending', 'Archived']),
    material_type: z.string(),
    gallery: z.array(z.string()).default([])
  })
});

const feedback = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/feedback' }),
  schema: z.object({
    ...baseFields,
    date: z.coerce.date(),
    meeting_with: z.string(),
    response: z.string(),
    next_action: z.string()
  })
});

export const collections = { process, research, experiments, materials, feedback };
