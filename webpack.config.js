const path = require('path')



module.exports = {
    module: {
        loaders: [
            {
                // 假设我们拥有一个编译sass加载器
                // 匹配字符串
                test:/\.scss$/,
                // 使用的加载器，不可以省略加载器的后缀-loader
                loaders:['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
}