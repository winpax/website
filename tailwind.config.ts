import type { Config } from 'tailwindcss';
import daisyui, { type Config as DaisyConfig } from 'daisyui';
import { darkTheme, themes } from './src/lib/themes';
import typography from '@tailwindcss/typography';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			transitionProperty: {
				button:
					'color, background-color, border-color, text-decoration-color, fill, stroke, transform'
			}
		}
	},
	plugins: [typography, daisyui],
	darkMode: 'selector',

	daisyui: {
		themes,
		darkTheme
	} satisfies DaisyConfig
} satisfies Config;
