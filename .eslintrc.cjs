/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  plugins: ["simple-import-sort"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    eqeqeq: "error",
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    "vue/eqeqeq": "error",
    "vue/attributes-order": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "@typescript-eslint/no-explicit-any": "off",
  },
};
