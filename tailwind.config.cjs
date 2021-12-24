module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			minHeight: {
				'fill-page': '40rem',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['synthwave'],
	},
};
