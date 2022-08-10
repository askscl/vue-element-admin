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
    lintOnSave: process.env.NODE_ENV === 'development', //是否在开发环境下每次保存代码时都启用 eslint验证。--
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
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack(config) {
        // it can improve the speed of the first screen, it is recommended to turn on preload
        // it can improve the speed of the first screen, it is recommended to turn on preload
        config.plugin('preload').tap(() => [
            {
                rel: 'preload',
                // to ignore runtime.js
                // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
                fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
                include: 'initial'
            }
        ])

        // when there are many pages, it will cause too many meaningless requests
        config.plugins.delete('prefetch')

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
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
                    config
                        .plugin('ScriptExtHtmlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.js$/
                        }])
                        .end()
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
                    config.optimization.runtimeChunk('single')
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
