import { marked, type Token, type Tokens } from 'marked'
import { type Lang, langSchema } from './langs'

export function createCollection(md: string): SnippetCollection {
	const tokens = marked.lexer(md)
	const collection: SnippetCollection = new Map()

	for (const token of tokens) {
		if (isCode(token) && token.lang) {
			const langResult = langSchema.safeParse(token.lang)

			if (!langResult.success) {
				continue
			}

			const lang = langResult.data
			const snippets = collection.get(lang) || []

			snippets.push(token.text)

			collection.set(lang, snippets)
		}
	}

	return collection
}

export type SnippetCollection = Map<Lang, Array<string>>

export function isCode(token: Token): token is Tokens.Code {
	return token.type === 'code'
}
