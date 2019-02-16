const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const appDirectory = fs.realpathSync(process.cwd())
const src = path.resolve(appDirectory, 'src')

const config = {
    entry: path.resolve(appDirectory, 'src/index.js'),
    output: {
        path: path.resolve(appDirectory, 'dist'),
        filename: 'boundle.js'
    },
    resolve: {
        alias: {
            pages: path.resolve(src, 'pages')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(appDirectory, 'webpack/index.html')
        }),
        // new BundleAnalyzerPlugin()//分析打包图 需要的时候打开
    ]
}

module.exports = config;