module.exports = {
  root: true,
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: '@typescript-eslint/parser',
  exclude: ["node_modules"], 
  esModuleInterop: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType:'module'
  },
  rules: {}
}
