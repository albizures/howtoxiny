import fs from 'node:fs/promises';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
	const { slug } = params;

	try {
		const markdown = await fs.readFile(
			`./src/routes/how-to/_${slug}.md`,
			'utf-8',
		);

		return {
			body: markdown,
		};
	} catch (error) {
		return {
			status: 404,
			error: new Error(`File not found: ${slug}`),
		};
	}
};
