module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'eslint-config-prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		// "prettier"
	],
	rules: {
		'prettier/prettier': [
			'error',
			{
				tabWidth: 4,
				printWidth: 120,
				singleQuote: true,
				trailingComma: 'es5',
				useTabs: true,
			},
		],
	},
};
