/*
 * @Author: hypocrisy
 * @Date: 2022-05-20 20:25:29
 * @LastEditors: hypocrisy
 * @LastEditTime: 2022-05-20 20:29:38
 * @FilePath: \ts-axios\.eslintrc.js
 */
module.exports = {
	globals: { BASE_URL: false },
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': 0,
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-unused-vars': 'off',
	},
	plugins: ['@typescript-eslint'],
}
