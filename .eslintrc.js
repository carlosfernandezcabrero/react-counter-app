module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:cypress/recommended',
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'cypress'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
