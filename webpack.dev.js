const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: true
      }
    },
    compress: true,
    plugins: [new BundleAnalyzerPlugin()]
  }
})
