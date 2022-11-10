```mermaid
graph TD;
    Webpack知识体系-->config[配置相关];
    Webpack知识体系-->principle[原理相关];
    Webpack知识体系-->else[其他];
    
    config --> Loader[Loader what & how]
    config --> Plugin[Plugin what & how]
    config --> Optimize[性能优化]

    principle --> core[webpack核心库 Tapble]
    principle --> debug[webpack 调试与构建流程]
    principle --> hot[webpack 热更新HMR原理]
    principle --> shake[tree-shaking 原理]
    principle --> babel[原理与开发babel插件]

    else --> Rollup[Rollup]
    else --> webpack[webpack5]
    else --> vite[vite]
```
由知识体系可知，
- 基础 -- 会配置
- 进阶 -- 会优化
- 深入 -- 懂原理

通过分层，后面再遇到新的知识可立即加入到这个体系中

## 一、Webpack基础
需要掌握的部分；
1、webpack 的常规配置项有哪些？
2、常用的 Loader 有哪些？如何配置？
3、常用插件（Plugin）有哪些？如何配置？
4、Babel如何配置？Babel插件如何使用？

### 1.1安装依赖
```sh
npm install webpack webpack-cli -D
```
安装完成 ✅
```sh
    "webpack": "^5.75.0",
    "webpack-cli": "^4.10.0"
```
### 1.2工作模式
1、新建 ./src/index.js 文件
```js
const a = 'sun'
console.log(a)
let b = a + ' hello'
console.log(b)
export default b
```


|选项|描述|
|---|---|
|development|开发模式，打包更加快速，省了代码优化步骤
|production|生产模式，打包比较慢，会开启 tree-shaking 和 压缩代码
|none|不使用任何默认优化选项

配置mode(模式)
- 1. 只需在配置对象中提供 mode 选项:
```js
module.exports = {
    mode: 'development',
};
```
- 2. 从 CLI 参数中传递:
```js
npx webpack --mode=development
```

### 1.3配置文件
1. 跟路径下新建一个配置文件 webpack.config.js
2. 新增基本配置信息
```js
const path = require('path')

module.exports = {
    mode: 'development', // 模式
    entry: './src/index.js', // 打包入口地址
    output: {
        filename: 'bundle.js', // 输出文件名
        path: path.join(__dirname, 'dist') // 输出文件目录
    }
}
```