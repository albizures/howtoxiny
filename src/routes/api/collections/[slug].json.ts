import fs from 'node:fs/promises';
import type { RequestHandler } from '@sveltejs/kit';
import { createCollection } from '../../../utils';
import { JSONString } from '@sveltejs/kit/types/helper';

export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;

	try {
		const markdown = await fs.readFile(
			`./src/routes/how-to/_${slug}.md`,
			'utf-8',
		);

		return {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			body: createCollection(markdown) as JSONString,
		};
	} catch (error) {
		return {
			status: 404,
			error: new Error(`File not found: ${slug}`),
		};
	}
};
