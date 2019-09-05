const { resolve } = require('path')


const publicPath = resolve(__dirname, '..', 'public')

module.exports = {
  contentBase: publicPath,
  publicPath: '/',
  watchContentBase: true,
  hot: true,
  compress: true,
  historyApiFallback: {
    disableDotRule: true,
  },
  stats: {
    all: false,
    modules: true,
    maxModules: 0,
    errors: true,
    warnings: true,
    moduleTrace: true,
    errorDetails: true,
  },
  port: 8080,
  watchOptions: { aggregateTimeout: 300, poll: 1000 },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
}
