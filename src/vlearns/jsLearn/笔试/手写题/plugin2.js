/*
  手写plugin--webpack
  功能：生成一个文件记录打包生成的文件名和大小

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
    constructor(){
        this.fileName = 'fileList.md';
    }
    apply(compiler){
        //compiler.hooks.emit.tapAsync('插件名'，（编译结果）=> {处理})，这个是固定格式吗？
        // 同步注册
        compiler.hooks.emit.tap('MyPlugin', (compilation) =>{
            const assets = compilation.assets;
            let content = `## 文件名    资源大小`
            Object.entries(assets).forEach(([filename, stat]) => {
                content += `\n${filename}    ${stat.size()}`;
            })
            assets['filelist.md'] = {
                source: () => content,
                size: () => content.length
            }
        })
    }
}

module.exports = MyPlugin;
