const CleanWebpackPlugin = require('clean-webpack-plugin'); 
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config');

const publicConfig = {
    mode:'production',
    optimization: {
        runtimeChunk: 'single',
        // minimizer: [new UglifyJsPlugin()],
        // minimize: false
        splitChunks: {
            cacheGroups: {
                vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "postcss-loader"]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:"[name].[contenthash:hex:5].css",
            allChunks:true
        }),
        new CleanWebpackPlugin('dist', {}),
    ]
};

module.exports = merge(baseConfig, publicConfig);