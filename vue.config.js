'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'vue Element Admin' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.//test_home
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9827 // dev port

//获取版本信息
let gitVersion = '';
function getGitVersion(){
    let fs = require('fs');
    let gitHead = fs.readFileSync(".git/HEAD", "utf-8").trim();
    let ref = gitHead.split(": ")[1];
    let version = fs.readFileSync(".git/" + ref, "utf-8").trim();
    gitVersion = version.slice(0, 8);
    console.log('版本号：', gitVersion);
}

//获取打包时间
let tiemVersion = ''
function getTiemVersion() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    tiemVersion = '' + year + month + day + hours + minutes;
    console.log('打包时间:', tiemVersion);
};

if(process.env.NODE_ENV === 'production'){
    getGitVersion();
    getTiemVersion();
}


// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
    /**
     * You will need to set publicPath if you plan to deploy your site under a sub path,
     * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then publicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     * Detail: https://cli.vuejs.org/config/#publicpath
     */
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    // lintOnSave: process.env.NODE_ENV === 'development', //是否在开发环境下每次保存代码时都启用 eslint验证。--
    /*
      配置Type: boolean | 'warning' | 'default' | 'error' 
      Default: true
      value：
        false：关闭每次保存都进行检测
        true：开启每次保存都进行检测，效果与warning一样
        ‘warning’：开启每次保存都进行检测，lint 错误将显示到控制台命令行，而且编译并不会失败。
        ‘error’：开启每次保存都进行检测，lint 错误将显示到浏览器页，且编译失败。
        ‘default’：同’error’
     */
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        before: require('./mock/mock-server.js'),
        /* proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            [process.env.VUE_APP_BASE_API]: {
                // target: 'http://192.168.10.88:8080/dsap', // xiang
                // target: 'http://192.168.10.4:8080/dsap', // qian
                target: 'http://localhost:8080/dsap', // 目标接口的域名
                changeOrigin: true, // 是否跨域
                pathRewrite: { // 重写路径
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        } */
    },


    // 通过操作对象的形式来修改默认的webpack配置
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.git版本号.打包时间】
            filename: `static/js/[name].${gitVersion}.${tiemVersion}.js`,
            chunkFilename: `static/js/[name].${gitVersion}.${tiemVersion}.js`
        }
    },


    // 通过链式编程的形式来修改默认的webpack配置
    chainWebpack(config) {
        // it can improve the speed of the first screen, it is recommended to turn on preload
        // it can improve the speed of the first screen, it is recommended to turn on preload
        config.plugin('preload').tap(() => [
            {
                rel: 'preload',
                // to ignore runtime.js
                // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
                /* 
                    这是一个排除列表，用于指定不应被预加载的文件。这里，我们排除了以下文件：
                    源码映射文件（.map 结尾）
                    hot-update.js（热更新文件）
                    runtime.*.js（所有以 runtime 开头的 JavaScript 文件）
                */
                fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],  
                include: 'initial'  //指定只有初始的 chunks（即页面上直接引用的 chunks）会被预加载。
            }
        ])

        // when there are many pages, it will cause too many meaningless requests--删除名为 'prefetch' 的插件
        config.plugins.delete('prefetch')

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        // 对于位于'src/icons'目录或其子目录中的.svg文件，使用'svg-sprite-loader'进行处理，并为每个SVG图标设置一个symbol ID，格式为'icon-'加上图标的名称
        // 将加载的SVG图片拼接成雪碧图，放到页面中，方便其它地方复用
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    // script-ext-html-webpack-plugin 是一个 Webpack 插件，它主要用于优化和控制 HTML 文档中引入的 <script> 标签的属性。
                    // 该插件能够给 script 标签添加额外的属性，例如 async、defer、module 等，以及内联脚本。
                    config
                        .plugin('ScriptExtHtmlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.js$/
                        }])
                        .end()
                    // 将不同的依赖项分割到不同的代码块中
                    config
                        .optimization.splitChunks({
                            chunks: 'all',
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // only package third parties that are initially dependent
                                },
                                elementUI: {
                                    name: 'chunk-elementUI', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: resolve('src/components'), // can customize your rules
                                    minChunks: 3, //  minimum common number
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        })
                    // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
                    config
                        .optimization.runtimeChunk('single')
                    /* 
                    config.optimization.runtimeChunk('single') 是 Webpack 配置中的一条指令，用于优化代码的打包和运行。
                    具体来说，runtimeChunk 选项用于指定是否将 runtime 代码分割成单独的 chunk。
                    >>>>>>>>>>>>当设置为 'single' 时，runtime 代码将被打包成一个单独的 chunk，这样可以减少重复的代码，提高加载性能。<<<<<<<<<<<<<<<
                    这个选项通常与 splitChunks 一起使用，用于控制代码的分割和加载方式。通过将 runtime 代码与其他的 chunks 分割开来，可以更好地利用缓存和加载性能。
                    需要注意的是，使用 runtimeChunk 选项可能会导致额外的 HTTP 请求数，因此在使用时需要权衡其带来的性能提升和可能的额外开销。
                    */
                }
            )
    },
    css:{
        loaderOptions:{
            sass:{
                //给sass-loader传递选项
            },
            css:{
                //给css-loader传递选项
            },
            postcss:{
                //给postcss-loader传递选项
                plugins:[
                    //使用pxtovw组件
                    require("postcss-px-to-viewport")({
                        unitToConvert: 'pw', //需要转换的单位，默认为"px"；
					    viewportWidth: 1920, //设计稿的视口宽度
					    unitPrecision: 5, //单位转换后保留的小数位数
					    propList: ['*'], //要进行转换的属性列表,*表示匹配所有,!表示不转换
					    viewportUnit: 'vw', //转换后的视口单位
					    fontViewportUnit: 'vw', //转换后字体使用的视口单位
					    selectorBlackList: [], //不进行转换的css选择器，继续使用原有单位
					    minPixelValue: 1, //设置最小的转换数值
					    mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
					    replace: true, //是否直接更换属性值，而不添加备用属性
					    exclude: [
                            /node_modules/,
                            // /gotop.vue/
                        ] //忽略某些文件夹下的文件
                    })
                ]
            }
        }
    }
}
