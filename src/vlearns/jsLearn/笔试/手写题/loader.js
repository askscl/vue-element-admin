/*
手写loader--webpack

思考：
1.以下是您提供的map对象中各字段的解释：

version: 这是源码映射的版本。版本3是当前最新版本，它提供了更详细的映射信息。
sources: 这个数组用于存放原始源码的文件路径。通常，这个字段是空的，因为Webpack会自动填充它。
names: 这个数组用于存放被映射的标识符名称。通常，这个字段也是空的，除非有特殊的源码映射需求。
mappings: 这个字段用于存放实际的源码映射。这是一个基于SourceMap的压缩格式，用于描述如何从转换后的代码回溯到原始代码。

2.至于“为啥要加这个map是固定格式吗？”的问题：
不是固定格式。虽然Webpack提供了source-map插件来生成源码映射，但您不一定需要为每个配置都添加它。
使用源码映射的好处是在调试时，您可以查看转换后的代码是如何从原始代码生成的，从而更容易找到问题所在。
然而，生成源码映射会增加构建时间，并可能使构建结果变得更大。因此，在某些生产环境中，可能选择不生成源码映射。
总之，是否使用源码映射取决于您的具体需求和场景。
*/

//这两行是干啥的？--用于处理文件路径
const fs = require('fs'); //文件系统
const path = require('path'); //处理路径的工具函数

function loader(source){
    source = `//Loader by custom loader\n${source}`;
    return {
        code: source,
        // 为啥要加这个map是固定格式吗？--用于描述一个源码映射
        map: {
            version: 3,
            // 以下三行代码在表示什么
            sources: [], //原始源码的文件路径
            names: [], //被映射的标识符名称
            mappings: '' //实际的源码映射
        }
    }
}

module.exports = loader;
