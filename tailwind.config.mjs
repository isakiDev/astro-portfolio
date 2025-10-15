/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#171717',
				'secondary': '#191919',
				'tertiary': '#232323',
			}
		},
	},
	plugins: [],
}
