export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null
  },
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ]
}
