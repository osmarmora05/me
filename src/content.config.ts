import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects/",
    pattern: "*/*/index.md",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      techStack: z.array(z.string()),
      repo: z.url().optional(),
      url: z.url().optional(),
      index: z.number(),
      initDay: z.string().optional(),
      endDay: z.string().optional(),
      cover: image(),
      accentColor: z.string(),
    }),
});

const copyright = defineCollection({
  loader: glob({ base: "./src/content/copyright/", pattern: "*/index.md" }),
  schema: z.object({
    title: z.string(),
  }),
});

const about = defineCollection({
  loader: glob({ base: "./src/content/about/", pattern: "*/index.mdx" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { projects, copyright, about };
