/**
 * @file webpack config
 * @author
 */
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        'large-number': './src/index.js',
        'large-number.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'largeNumber', // 库的名字
        libraryTarget: 'umd', // 引用方式:AMD,CJS,ESM,script
        libraryExport: 'default'
    },
    // production模式下打包的文件默认为压缩后的
    mode: 'none',
    optimization: {
        minimize: true,
        minimizer: [
            // 可以编译ES6语法
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    }
};
