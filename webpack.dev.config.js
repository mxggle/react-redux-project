const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config');

const devConfig = {
    mode: 'development',
    optimization: {
        // runtimeChunk: 'single',
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
    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }],
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port:9000,
        historyApiFallback: true
    }
};
module.exports = merge(baseConfig, devConfig);
