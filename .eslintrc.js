module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'always',
      },
    ],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false, argsIgnorePattern: '^_' },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: ['lodash'],
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'export' },
    ],
    'quote-props': [2, 'consistent-as-needed'],
    'import/no-relative-parent-imports': 'error',
    'import/order': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': [
      'error',
      'always',
      {
        null: 'always',
      },
    ],
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/padding-line-between-blocks': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error',
    'vue/order-in-components': 'error',
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'v-slot',
        default: 'v-slot',
        named: 'longform',
      },
    ],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/v-on-event-hyphenation': ['error', 'always'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/no-lone-template': 'off',
  },
}
