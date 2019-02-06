const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    /*入口*/
    entry: path.join(__dirname, 'src/index.js'),
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
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
    resolve: {
        alias: {
            pages: path.resolve(__dirname, 'src/pages/'),
            component: path.resolve(__dirname, 'src/component/'),
            router: path.resolve(__dirname, 'src/router/'),
            reducers: path.resolve(__dirname, 'src/redux/reducers/'),
            actions: path.resolve(__dirname, 'src/redux/actions/')
        }
    },
    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }],
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/index.html')
    })],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port:9000,
        historyApiFallback: true
    }
};