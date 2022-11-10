const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development", // 模式
    entry: "./src/index.js", // 打包入口地址
    output: {
        filename: "bundle.js", // 输出文件名
        path: path.join(__dirname, "dist"), // 输出文件目录
    },
    module: {
        rules: [    // 转换规则
            {
                test: /\.css$/, // 匹配所有的 css 文件
                use: 'css-loader' // use: 对应的 Loader 名称
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
