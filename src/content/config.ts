import { defineCollection, z } from 'astro:content'

const snippets = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()).nullish().transform((val) => val ?? []),
	}),
})

export const collections = {
	'how-to': snippets,
}
