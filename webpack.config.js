const path = require('path')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist-modules')
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
      },
    }]
  },
}
