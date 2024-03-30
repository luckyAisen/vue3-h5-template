// /* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution');

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//     'vue/setup-compiler-macros': true
//   },
//   extends: [
//     'plugin:vue/vue3-essential',
//     'eslint:recommended',
//     '@vue/eslint-config-typescript/recommended',
//     '@vue/eslint-config-prettier'
//   ],
//   plugins: [],
//   parserOptions: {
//     ecmaVersion: 'latest'
//   },
//   rules: {
//     /**
//      * 必须使用 === 或 !==，禁止使用 == 或 !=
//      */
//     eqeqeq: 'error',
//     'vue/eqeqeq': 'error',
//     'vue/attributes-order': 'error',
//     'no-empty': ['error', { allowEmptyCatch: true }],
//     '@typescript-eslint/no-explicit-any': 'off'
//   },
//   overrides: [
//     {
//       files: ['src/views/index.vue', 'src/views/**/index.vue'],
//       rules: {
//         'vue/multi-word-component-names': 'off'
//       }
//     }
//   ]
// };

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    // 'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    // '@vue/eslint-config-typescript',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  },
  overrides: [
    {
      files: ['src/layout/index.vue', 'src/views/index.vue', 'src/views/**/index.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
};
