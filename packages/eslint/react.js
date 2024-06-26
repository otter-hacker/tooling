/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    './base.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': [
      'error',
      { ignore: ['css', 'tw', 'cmdk-input-wrapper'] },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/heading-has-content': 'off',
  },
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
};

module.exports = config;
