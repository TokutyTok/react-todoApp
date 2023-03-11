const babelJest = require('babel-jest')
const babelOptions = {
  presets: [
      '@babel/preset-env',
      ['@babel/preset-react', {runtime: 'automatic'}],
  ],
}
module.exports = babelJest.createTransformer(babelOptions)