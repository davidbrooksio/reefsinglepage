module.exports = {
  plugins: {
    'postcss-advanced-variables': {},
    'postcss-preset-env': {
      importFrom: './src/styles/main.css',
      stage: 0,
      features: {
        'color-mod-function': {
          importFrom: './src/styles/vars.css',
          unresolved: 'warn'
        }
      }
    },
    'postcss-extend-rule': {
      name: 'extend',
      onFunctionalSelector: 'warn',
      onRecursiveExtend: 'warn',
      onUnusedExtend: 'warn'
    },
    'postcss-percentage': {},
    'postcss-inline-svg': {
      paths: ['src/images/'],
      removeFill: true
    },
    'cssnano': {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          },
          autoprefixer: true,
          colorMin: false,
          mergeLonghand: false,
          mergeRules: false
        }
      ]
    }
  },
}
