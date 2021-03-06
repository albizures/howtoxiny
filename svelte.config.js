import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		vite: {
			plugins: [],
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
		//adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
	},
};

export default config;
