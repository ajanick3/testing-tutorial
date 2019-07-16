module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 'warn',
  },
}
