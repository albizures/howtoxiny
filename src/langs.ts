import { z } from 'astro:content'

export type Lang = z.infer<typeof langSchema>
export const langSchema = z.union([
	z.literal('js'),
	z.literal('rust'),
	z.literal('python'),
	z.literal('go'),
	z.literal('c'),
	z.literal('cpp'),
])

export const langs: Record<Lang, string> = {
	js: 'javascript',
	rust: 'rust',
	python: 'python',
	go: 'go',
	c: 'c',
	cpp: 'c++',
} as const
