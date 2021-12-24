import fs from 'node:fs/promises';
import type { RequestHandler } from '@sveltejs/kit';
import { createCollection } from '../../../utils';

export const get: RequestHandler = async () => {
	try {
		const files = await fs.readdir(`./src/routes/how-to/`, 'utf-8');

		const collections = await Promise.all(
			files
				.filter((file) => file.includes('.md'))
				.map((name) => {
					return fs
						.readFile(`./src/routes/how-to/${name}`, 'utf-8')
						.then((md) => {
							return {
								...createCollection(md),
								name: name.substring(1).replace('.md', ''),
							};
						});
				}),
		);

		return {
			body: collections.map(({ title, name }) => ({ title, name })),
		};
	} catch (error) {
		return {
			status: 500,
			error,
		};
	}
};
