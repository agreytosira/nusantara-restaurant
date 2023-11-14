/** @type {import('jest').Config} */
const config = {
  testMatch: ['**/tests/**/*.test.[jt]s?(x)'],

  testEnvironment: 'jsdom',

  setupFiles: ['fake-indexeddb/auto'],

  transform: {
    '^.+\\.(js|ts)$': 'babel-jest'
  }
}

module.exports = config
