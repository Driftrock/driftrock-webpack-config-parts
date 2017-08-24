const merge = require('webpack-merge')
const path = require('path')

const commonConfig = require('../src/parts/common')
const extractCss = require('../src/parts/extractCss')
const loadCss = require('../src/parts/loadCss')

const paths = {
  app: path.join(__dirname, './'),
  build: path.join(__dirname, '../build'),
}

module.exports = merge(
  commonConfig({title: 'Prodpack', paths}),
  extractCss({use: ['css-loader', 'sass-loader']})
)
