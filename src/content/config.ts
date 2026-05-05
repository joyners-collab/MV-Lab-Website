// ----------------------------------------------------------------
//  Content collections — schemas for markdown content
//  Edit content by adding/editing files in src/content/<collection>/
// ----------------------------------------------------------------

import { defineCollection, z } from 'astro:content';

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number().default(100),       // controls sort order on Team page
    group: z.enum([
      'PI',
      'Postdoc',
      'Graduate Student',
      'Research Associate',
      'Undergraduate',
      'Alumni',
      'Staff',
    ]),
    photo: z.string().optional(),
    email: z.string().email().optional(),
    scholar: z.string().url().optional(),
    orcid: z.string().optional(),
    github: z.string().optional(),
    website: z.string().url().optional(),
    joined: z.string().optional(),         // free-form e.g. "2023"
    current: z.boolean().default(true),    // false for alumni
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),                   // free-form HTML allowed (e.g. <strong> for lab members)
    venue: z.string(),
    year: z.number(),
    date: z.coerce.date().optional(),      // for sorting within a year
    doi: z.string().optional(),
    pdf: z.string().optional(),
    preprint: z.string().url().optional(),
    code: z.string().url().optional(),
    highlight: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    image: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().default(100),
    summary: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { people, publications, news, research };
