import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    img: z.string().url(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url()
    })
  })
});

export const collections = { blog }

// 26:18