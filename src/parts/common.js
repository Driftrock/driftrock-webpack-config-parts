const HtmlWebpackPlugin = require('html-webpack-plugin')

const merge = require('webpack-merge')
const lintjs = require('./lintjs')

module.exports = ({
  title,
  paths,
}) => merge([
  {
    entry : {
      app: paths.app,
    },
    output: {
      path: paths.build,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title,
      }),
    ],
  },
  lintjs({include: paths.app}),
])
