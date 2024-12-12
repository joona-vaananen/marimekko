/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['next/core-web-vitals'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;
