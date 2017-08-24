const merge = require('webpack-merge')
const path = require('path')

const commonConfig = require('../src/parts/common')
const devServer = require('../src/parts/devServer')
const loadCss = require('../src/parts/loadCss')

const paths = {
  app: path.join(__dirname, './'),
  build: path.join(__dirname, './'),
}

const developmentConfig = merge([
])

module.exports = merge(
  commonConfig({title: 'Devpack', paths}),
  loadCss(),
  devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  })
)
