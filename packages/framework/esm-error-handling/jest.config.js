module.exports = {
  transform: {
    "^.+\\.tsx?$": ["@swc/jest"],
  },
  setupFiles: [],
  moduleNameMapper: {
    "@openmrs/esm-globals": "<rootDir>/__mocks__/openmrs-esm-globals.mock.tsx",
  },
  testEnvironment: "jsdom",
};
