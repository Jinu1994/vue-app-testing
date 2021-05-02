module.exports = {
  'extends': [
    'plugin:vue/strongly-recommended'
  ],
  plugins: [
    'vuetify'
  ],
  rules: {
    'semi': 'off',
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'none',
      'ignoreRestSiblings': false,
      'caughtErrors': 'none',
      'varsIgnorePattern': 'v'
    }],
    'quotes': ['error', 'single'],
    'no-mixed-spaces-and-tabs': 'error',
    'camelcase': 'error',
    'no-tabs': 'off',
    'vue/require-prop-type-constructor': 'off',
    'vue/require-prop-types': 'off',
    'no-array-constructor': 'off',
    'no-new-object': 'off',
    'no-new-wrappers': 'off',
    'no-multiple-empty-lines': ['error', {
      'max': 1
    }],
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-console': 'error',
    'space-infix-ops': 'error',
    'newline-per-chained-call': 'error',
    'no-whitespace-before-property': 'error',
    'padded-blocks': ['error', 'never'],
    'space-in-parens': 'error',
    'array-bracket-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'key-spacing': 'error',
    'no-trailing-spaces': 'error',
    'comma-style': 'error',
    'comma-dangle': 'error',
    'indent': ['error', 2],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/component-name-in-template-casing': 'off',
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/grid-unknown-attributes': 'error',
    'vuetify/no-legacy-grid': 'error'
  },
  'parserOptions': {
    'parser': 'babel-eslint',
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
    'codeFrame': false
  },
  'overrides': [
    {
      'files': ['validationMessages.js', 'vue.config.js'],
      'rules': {
        'camelcase': 'off'
      }
    }
  ]
}