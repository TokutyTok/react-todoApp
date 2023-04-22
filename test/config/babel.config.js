const babelJest = require('babel-jest')
const babelOptions = {
  presets: [
      '@babel/preset-env',{'modules': 'false',
      'useBuiltIns': 'usage',
      'targets': '> 0.25%, not dead',},
      ['@babel/preset-react', {targets: {node: 'current'}}],
  ],
}
module.exports = babelJest.createTransformer(babelOptions)