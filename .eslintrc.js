// .eslintrc.js
module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src'],
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-console': 0,
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
  },
};
