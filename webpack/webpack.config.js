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
            '@pages': path.resolve(src, 'pages'),
            '@components': path.resolve(src, 'components')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'],
                        plugins: [
                            ["import",
                                {
                                    "libraryName": "antd",
                                    "libraryDirectory": "es",
                                    "style": "css" // `style: true` 会加载 less 文件
                                }
                            ],
                            ['@babel/plugin-proposal-class-properties']
                        ]
                    },

                }
            },
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
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