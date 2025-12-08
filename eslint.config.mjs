import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactCompiler from 'eslint-plugin-react-compiler';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig(
	js.configs.recommended,
	...ts.configs.recommended,
	...nextVitals,
	globalIgnores([
		// Default ignores of eslint-config-next:
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts'
	]),
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	reactCompiler.configs.recommended
);
