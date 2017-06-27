const path = require("path");
const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: [
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
            }, 

            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    devServer: {
        contentBase: 'build/',
        inline: true
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: './index.html'
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]

}