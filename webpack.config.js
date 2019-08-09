const path = require('path')
const utils = require('./config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    module: {
        loaders: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    outputPath: 'build',
                    name: utils.assetsPath('static/images/[name].[hash:7].[ext]')
                }
            },
            {
                // 假设我们拥有一个编译sass加载器
                // 匹配字符串
                test:/\.scss$/,
                // 使用的加载器，不可以省略加载器的后缀-loader
                loaders:['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    resolve: {
        extensions:['.js','.jsx','.json', 'scss', 'css'],
        alias: {
            '@model': path.resolve(__dirname, './src/model'),
            '@': path.resolve(__dirname, './src'),
            'theme': resolve('src/theme'),
            'assets': resolve('src/assets'),
        },
    },
    plugin: [
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css'),
            // Setting the following option to `false` will not extract CSS from codesplit chunks.
            // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
            // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
            // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
            allChunks: true,
        }),
    ],
    externals: {
        'Config': process.env.ENV === 'development' ? 'a' : 'b'
    },
    devServer: {
        contentBase: './build', //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //设置为true，当源文件改变时会自动刷新页面
        port: 8081, //设置默认监听端口，如果省略，默认为"8080"
    },
}