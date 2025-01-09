import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser, // Adds browser globals like window, document, etc.
    },
    rules: {
      // Enforce semicolons at the end of statements
      'semi': ['error', 'always'], // Enforce semicolons at the end of statements
    },
  },
];