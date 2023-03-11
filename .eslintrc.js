module.exports = {
  extends: [
    '@antfu/eslint-config-vue',
  ],
  ignorePatterns: ['auto-imports.d.ts', 'package.json', 'components.d.ts', 'coverage-ts/**/*'],
  rules: {
    '@typescript-eslint/semi': ['error', 'always'],
    'semi': ['error', 'always'],

    /* VUE */

    // Priority B: Strongly Recommended (Improving Readability)
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
    }],

    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
    }],
  },
};
