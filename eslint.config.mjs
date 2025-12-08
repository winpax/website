import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';
import reactCompiler from 'eslint-plugin-react-compiler';
import nextVitals from 'eslint-config-next/core-web-vitals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

const config = [...compat.extends('next/core-web-vitals', 'next/typescript')];

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
	...config,
	reactCompiler.configs.recommended
);
