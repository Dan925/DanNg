import { z, defineCollection } from 'astro:content';

// 2. Define a schema for each collection you'd like to validate.
const project = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        tags: z.array(z.string()).max(3),
        sourceCode: z.string().url(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    project
};
