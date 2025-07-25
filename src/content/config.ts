// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: ({ image }) => z.object({  // Note the { image } parameter here
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: image(),  // Now image() is defined
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('SmartRack'),
    category: z.string(),
    tags: z.array(z.string()),
    lang: z.string(),
  }),
});

const teamCollection = defineCollection({
  schema: ({ image }) => z.object({  // Add { image } parameter here
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    link: z.string(),
    avatar: z.object({
      src: image(),  // Now image() is defined
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
};