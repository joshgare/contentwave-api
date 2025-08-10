module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "/generated/**/*", // Ignore generated files.
    "/coverage/**/*", // Ignore coverage reports
    "**/*.test.ts", // Ignore test files
    "**/*.spec.ts", // Ignore spec files
    "jest.config.js", // Ignore jest config
    "src/__tests__/**/*", // Ignore test directory
  ],
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
    "import/no-unresolved": 0,
    "prettier/prettier": "error",
  },
};
