module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundSize: {
				'size-200': '200% 200%'
			},
			backgroundPosition: {
				'pos-25': '25% 25%',
				'pos-75': '75% 75%'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')],
	safelist: ['hidden', 'w-8', 'h-8', 'text-stone-300']
};
