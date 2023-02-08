/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // Automatically clear mock calls, instances, contexts and results before every test
  // clearMocks: false,

  preset: 'ts-jest',

  // Automatically reset mock state before every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // Automatically restore mock state and implementation before every test
  // restoreMocks: false,

  testEnvironment: "jsdom",

  testMatch: [
    "**/tests/**/*.(test|spec).[jt]sx",
  ],

  transform: {
    "node_modules/three/.+\\.(j|t)sx?$": "ts-jest",
  },

  transformIgnorePatterns: []
};
