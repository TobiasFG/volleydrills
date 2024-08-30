import { xl } from 'flowbite-svelte';
import flowbitePlugin from 'flowbite/plugin';

import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',
	theme: {
		fontFamily: {
			heading: ['Quicksand', 'system-ui'],
			body: ['system-ui']
		},
		extend: {
			colors: {
				// flowbite-svelte
				skovbakken: '#013B76',
				primary: {
					50: '#9ACCFE',
					100: '#72B8FE',
					200: '#49A3FD',
					300: '#218FFD',
					400: '#027AF2',
					500: '#0266CA',
					600: '#0252A2',
					700: '#013B76',
					800: '#012951',
					900: '#001428'
				}
			}
		}
	},

	plugins: [flowbitePlugin]
} as Config;
