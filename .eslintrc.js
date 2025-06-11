module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debuuger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "indent": ["error", 2]
  },
  parserOptions: {
    ecmaVersion: 2020
  }
}