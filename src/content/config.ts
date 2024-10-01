import { defineCollection, z } from 'astro:content';

const dateConfig: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
};
const dateFormat = 'en-US';

// content for markdown, data for JSON or YAML
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string({ description: 'Title of the page(H1)' }),
    og_title: z.string({
      description: 'Open-graph title of the article to show in previews',
    }),
    og_description: z.string({
      description: 'Open-graph description of the article to show in previews',
    }),
    og_image: z.string({
      description:
        'Open-graph image of the article to show in previews, preferred aspect ratio 1.21:1',
    }),
    og_type: z.enum(['article', 'website']),
    og_author: z.string({ description: 'Name of the author' }),
    og_publishedOn: z
      .string({ description: 'Date in YYYY-MM-DD format' })
      .default(Date.now().toString())
      .transform((date) =>
        new Date(date).toLocaleDateString(dateFormat, dateConfig)
      ),
    tags: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    isDraft: z.boolean().optional(),
  }),
});

const skillsCollection = defineCollection({
  type: 'data',
  schema: z.record(z.string(), z.array(z.string())),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    projectName: z.string(),
    githubLink: z.string().optional(),
    liveWebsiteLink: z.string().optional(),
    shortSummary: z.string(),
    orderNumber: z.number().default(100),
    keywords: z.array(z.string()).optional(),
  }),
});
export const collections = {
  blog: blogCollection,
  skills: skillsCollection,
  projects: projectsCollection,
};
