import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import reactCompiler from 'eslint-plugin-react-compiler';
import nextWebVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig(
	js.configs.recommended,
	...ts.configs.recommended,
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	...nextWebVitals,
	reactCompiler.configs.recommended
);
