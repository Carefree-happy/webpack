const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

console.log('process.env.NODE_ENV=', process.env.NODE_ENV) // 打印环境变量

const config = {
    entry: "./src/index.js", // 打包入口地址
    output: {
        filename: "bundle.js", // 输出文件名
        path: path.join(__dirname, "dist"), // 输出文件目录
    },
    module: {
        rules: [    // 转换规则
            {
                test: /\.(s[ac]|c)ss$/i, //匹配所有的 sass/scss/css 文件
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader','postcss-loader','sass-loader',] // use: 对应的 Loader 名称
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                type: 'asset',
                generator: {
                    // 输出文件位置以及文件名
                    // [ext] 自带 "." 这个与 url-loader 配置不同
                    filename: "[name][hash:8][ext]"
                },
                parser: {
                    dataUrlCondition: {
                    maxSize: 50 * 1024 //超过50kb不转 base64
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                type: 'asset',
                generator: {
                    // 输出文件位置以及文件名
                    filename: "[name][hash:8][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 超过100kb不转 base64
                    }
                }
            },
        ]
    },
    plugins: [ // 配置插件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({ // 添加插件
            filename: '[name].[contenthash:8].css'
        }),
        new CleanWebpackPlugin() // 引入打包前清空打包目录插件
    ],
    devServer: {
        static: [
            {
                directory: path.resolve(__dirname, 'asserts')
            }
        ], // 静态文件目录
        compress: true, //是否启动压缩 gzip
        port: 8000, // 端口号
        open:true  // 是否自动打开浏览器
    },
};

module.exports = (env, argv) => {
    console.log('argv.mode=',argv.mode) // 打印 mode(模式) 值
    // 这里可以通过不同的模式修改 config 配置
    return config;
}