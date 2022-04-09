const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const outputPath = path.resolve(__dirname, './dist');

const webpackConfig = {
    entry: './src/index.tsx',
    output: {
        path: outputPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            Root: path.resolve(__dirname, './src'),
            Components: path.resolve(__dirname, './src/components'),
            Redux: path.resolve(__dirname, './src/redux'),
            Interfaces: path.resolve(__dirname, './src/interfaces'),
            Utils: path.resolve(__dirname, './src/utils'),
            Public: path.resolve(__dirname, './public'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: "file-loader?name=/public/[name].[ext]",
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            path: outputPath
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 3030,
        historyApiFallback: true,
        devMiddleware: {
            publicPath: "https://localhost:3030",
        },
        hot: true,
    }
}

module.exports = webpackConfig;
