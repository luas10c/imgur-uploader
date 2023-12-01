/** @type{import('eslint').Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['prettier', 'plugin:@typescript-eslint/recommended', 'next'],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
