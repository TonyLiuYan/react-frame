const fs = require('fs')
const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.config')

const appDirectory = fs.realpathSync(process.cwd())

const config = {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(appDirectory, 'dist'),
        port: 3385,
        compress: true
    }
}

module.exports = merge(base, config);