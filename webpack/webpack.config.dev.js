const fs = require('fs')
const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.config')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const appDirectory = fs.realpathSync(process.cwd())

const config = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(appDirectory, 'dist'),
        port: 3385,
        compress: true
    },
    plugins: [
    ]
}

module.exports = merge(base, config);