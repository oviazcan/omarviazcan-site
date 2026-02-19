import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const albums = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		year: z.number(),
		cover: z.string(),
		featured: z.boolean().default(false),
		links: z
			.object({
				reverbnation: z.string().url().optional(),
				spotify: z.string().url().optional(),
				apple: z.string().url().optional(),
				youtube: z.string().url().optional(),
				bandcamp: z.string().url().optional(),
			})
			.optional(),
	}),
});

export const collections = { blog, albums };
