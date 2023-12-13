/* 
练习一：
给源代码加前一行注释

思考：
1.compiler.hooks.emit.tapAsync是Webpack Plugin中的一个固定格式，用于监听Webpack的emit事件，
并在该事件触发时执行自定义的处理函数。在这个函数中，我们可以对编译结果进行处理或修改。
其中，emit是Webpack的一个生命周期钩子，表示编译过程即将结束并准备输出结果。
而tapAsync是Webpack中定义插件的一种方法，表示该插件是一个异步插件。
通过tapAsync方法，我们可以注册一个异步函数，
在Webpack的emit事件触发时执行该函数。
在这个函数中，我们可以获取到编译结果，对其进行处理或修改，并通过回调函数通知Webpack继续执行后续的步骤。

需要注意的是，这个固定格式只是Webpack Plugin中的一种写法，实际上Webpack的生态系统非常丰富，
还有许多其他的写法和用法可以实现不同的功能。因此，在实际开发中，我们需要根据具体的需求和场景
选择合适的写法和用法来实现我们的目标。
*/

class MyPlugin{
    constructor(options){
        this.options = options;
    }
    apply(compiler){
        //compiler.hooks.emit.tapAsync('插件名'，（编译结果，回调函数）=> {处理})，这个是固定格式吗？
        compiler.hooks.emit.tapAsync('MyPlugin', (compilation, callback) =>{
            //compilation是编译后的结果？
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