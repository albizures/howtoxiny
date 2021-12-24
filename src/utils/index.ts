import { marked } from 'marked';
import hljs from 'highlight.js';
import { languageNames } from './languages';
import { SnipperCollection } from '../types';

export const highlight = (code: string, lang: string): string => {
	const language = languageNames[lang as keyof typeof languageNames];

	return hljs
		.highlight(code, { language })
		.value.split('\n')
		.map((line, index) => {
			return `<div class="line"><span class="number-line">${
				index + 1
			}</span>${line}</div>`;
		})
		.join('');
};

export const createCollection = (md: string): SnipperCollection => {
	const tokens = marked.lexer(md);

	return tokens.reduce(
		(result, token) => {
			if (
				!result.title &&
				token.type === 'heading' &&
				token.depth === 1
			) {
				result.title = token.text;
			}

			if (token.type === 'code' && token.lang) {
				if (!result.snippets[token.lang]) {
					result.snippets[token.lang] = [];
				}

				result.snippets[token.lang].push({
					code: token.text,
					lang: token.lang,
				});
			}

			return result;
		},
		{ title: '', snippets: {} } as SnipperCollection,
	);
};
