const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'plugin:import/errors',
  ],
  plugins: ['prettier', 'jest', 'import', 'react', 'jsx-a11y', 'json'],
  env: { es6: true, node: true, browser: true, 'jest/globals': true },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      warn,
      {
        bracketSpacing: true,
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
      },
    ],
    'react/prop-types': ignore,
    'react/jsx-filename-extension': [
      warn,
      {
        extensions: ['.js', 'jsx'],
      },
    ],
    'import/prefer-default-export': ignore,
    'react/jsx-no-bind': [
      error,
      {
        ignoreDOMComponents: true,
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: true,
        allowBind: true,
      },
    ],
  },
};
