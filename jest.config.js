module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'backend/**/*.js',
    '!backend/server.js',
  ],
  testMatch: ['**/tests/**/*.test.js'],
};
