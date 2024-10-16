/*
手写plugin--webpack
功能：在main.js里添加一行注释

本质：一个拥有apply方法的类或者函数参数：
    compiler，compiler.hooks.钩子名称拿到对应的hook
    实现过程：找到对应的hook并注册，然后再回调函数中使用传入的上下文参数实现逻辑的过程

思考：
compiler.hooks.emit.tapAsync是Webpack Plugin中的一个固定格式，用于监听Webpack的emit事件，并在该事件触发时执行自定义的处理函数。
在这个函数中，我们可以对编译结果进行处理或修改。
其中，
    emit是Webpack的一个生命周期钩子，表示编译过程即将结束并准备输出结果。
    tapAsync是Webpack中定义插件的一种方法，表示该插件是一个异步插件。
    通过tapAsync方法，我们可以注册一个异步函数，在Webpack的emit事件触发时执行该函数。
在这个函数中，我们可以获取到编译结果，对其进行处理或修改，并通过回调函数通知Webpack继续执行后续的步骤。

需要注意的是，这个固定格式只是Webpack Plugin中的一种写法
*/

class MyPlugin{
    constructor(options){
        this.options = options;
    }
    apply(compiler){
        //compiler.hooks.emit.tapAsync('插件名'，（编译结果，回调函数）=> {处理})，这个是固定格式吗？
        // 异步注册
        compiler.hooks.emit.tapAsync('MyPlugin', (compilation, callback) =>{
            //compilation是编译后的结果？
            /*
                compilation 对象代表一次资源的构建，compilation 实例能够访问所有的模块和它们的依赖。
                一个 compilation 对象会对构建依赖图中所有模块，进行编译。 在编译阶段，模块会被加载(load)、封存(seal)、优化(optimize)、 分块(chunk)、哈希(hash)和重新创建(restore)。
                主要属性
                    compilation.modules 可以访问所有模块，打包的每一个文件都是一个模块
                    compilation.chunks chunk 即是多个 modules 组成而来的一个代码块。入口文件引入的资源组成一个 chunk，通过代码分割的模块又是另外的
                    chunkcompilation.assets 可以访问本次打包生成所有文件的结果
                    compilation.hooks 可以注册 tapable 的不同种类 Hook，用于在 compilation 编译模块阶段进行逻辑添加以及修改
                compilation 暴露了与模块和依赖有关的粒度更小的事件钩子
            */
            compilation.assets['main.js'] = {
                source: () =>{
                    const originalSource = compilation.assets['main.js'].source();
                    return `//Loaded by custom plugin\n${originalSource}`;
                },
                size: () =>{
                    return Buffer.byteLength(compilation.assets['main.js'].source(), 'utf8');
                }
            };
            callback();
        })
    }
}

module.exports = MyPlugin;
