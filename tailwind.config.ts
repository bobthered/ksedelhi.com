import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/sveltewind/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				slate: {
					50: '#fafafa',
					100: '#f2f2f2',
					200: '#e6e6e6',
					300: '#d1d1d1',
					400: '#a3a3a3',
					500: '#757575',
					600: '#545454',
					700: '#3d3d3d',
					800: '#292929',
					900: '#121212',
					950: '#0a0a0a'
				}
			},
			fontFamily: {
				sans: ['Raleway', 'sans-serif']
			}
		}
	},

	plugins: [
		plugin(({ addVariant }) => {
			addVariant('pwa', '@media all and (display-mode: standalone)');
		})
	]
} as Config;
