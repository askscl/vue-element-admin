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
const isProduction = process.env.NODE_ENV === 'production';

//获取版本信息
let gitVersion = '';
function getGitVersion() {
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

if (isProduction) {
    getGitVersion();
    getTiemVersion();
}

//打包优化
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 分析包大小
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  // 压缩js
const TerserPlugin = require('terser-webpack-plugin');  // 压缩js
const CompressionPlugin = require('compression-webpack-plugin');  // 压缩文件gzip
const { PerfseePlugin } = require('@perfsee/webpack');  // 性能优化

//cdn配置star
    const CDNJsList = {
        title: '啦啦啦',
        css: [],
        js: [
            'https://npm.elemecdn.com/vue@2.6.10/dist/vue.js',
            'https://unpkg.com/vue-router@3.0.2/dist/vue-router.js',
            'https://unpkg.com/vuex@3.1.0/dist/vuex.js',
            'https://unpkg.com/axios@0.18.1/dist/axios.min.js'
        ]
    }

    const externals = {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        axios: 'axios'
    }
//cdn配置end


//开启多线程打包--未配置成功
    const threadLoader = require('thread-loader');
    const threadLoaderOptions = {
        // 这里填写对应 thread-loader 的配置
        // 预热时的配置和使用 thread-loader 时的配置要一致，所以这里统一使用一个变量来管理
        // 配置参考官方文档：https://github.com/webpack-contrib/thread-loader
        workers: 1,
        workerParallelJobs: 50,
        workerNodeArgs: ['--max-old-space-size=1024'],
        poolRespawn: false,
        poolTimeout: 2000,
        poolParallelJobs: 50,
        name: 'js-thread-pool'
    }

    // thread-loader 的预热，可以加速启动
    threadLoader.warmup(threadLoaderOptions, [
        // 'sass-loader',
        'svg-sprite-loader',

        //   'babel-loader',
        // 更多其他需要使用 thread-loader 的 loader
    ]);
//开启多线程打包end

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
    productionSourceMap: false, //关闭生成环境的sourceMap
    devServer: {
        port: port,
        open: true, // 配置自动启动浏览器
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
        // devtool: process.env.NODE_ENV === 'development' ? 'eval-cheap-module-source-map' : 'nosources-source-map', 
        // devtool: process.env.NODE_ENV === 'development' ? 'cheap-source-map' : 'nosources-source-map', 
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.git版本号.打包时间】
            filename: `static/js/[name].${gitVersion}.${tiemVersion}.js`,
            chunkFilename: `static/js/[name].${gitVersion}.${tiemVersion}.js`
        },
        plugins: [
            // new BundleAnalyzerPlugin(),打包分析
            /**
             * Perfsee 平台对应的项目 ID。--project
             *
             * 如果想要上传打包产物到平台进行分析，则该选项必填。**
             * 给打包的产物指定一个项目内唯一的名字。
             *
             * 
             * 在一次提交（单个 CI 工作流）中，如果有会构建多次，即有多个打包产物时会很有用。
             *
             * 因为我们和基准的对比是基于 `Entrypoint`，如果多次构建产生的打包产物的 `Entrypoint` 名字相同，我们无法确定哪个是正确的用来被对比的基准。
             *
             * 例如：`landing/main` 和 `customers/main` 很直接的告诉我们两份产物的区别，后续我们也可以用相同名字的产物进行对比。
             *
             * @default 'main'
             */
            /* new PerfseePlugin({
                project: 'vue-element-admin',
                artifactName: 'main',
                enableAudit: true, // 是否开启本地性能分析
            }), */
        ],
        optimization: {
            minimizer: [
                /* new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            drop_console: true, // 删除所有的 `console` 语句，可以自定义其他压缩选项  
                        },
                    },
                }), */
                //TerserPlugin可以更好地针对 ES6 的代码进行处理
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true, // 删除所有的 `console` 语句  
                            collapse_vars: true, // 内嵌定义了但是只用到一次的变量  
                            reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值  
                        },
                    },
                }),

            ],
        }
    },


    // 通过链式编程的形式来修改默认的webpack配置
    chainWebpack(config) {
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
                            chunks: 'all', // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // 只打包初始时依赖的第三方
                                },
                                elementUI: {
                                    name: 'chunk-elementUI', // split elementUI into a single package
                                    priority: 20, // // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: resolve('src/components'), // can customize your rules
                                    minChunks: 3, //  minimum common number // 最小共用次数
                                    priority: 5,
                                    reuseExistingChunk: true // 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新
                                }
                            }
                        })
                    // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
                    //入口chunk中的运行时代码是指在入口chunk中包含的代码，这些代码在应用运行时会被执行。通常，这些代码是应用程序的主要逻辑，例如根组件、应用程序状态管理等。
                    //在Webpack中，通过使用splitChunks可以将这些运行时代码提取出来，生成一个单独的chunk，以避免每次改动入口chunk时都需要重新打包整个应用。这样可以提高构建速度和缓存效率。
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

        // 添加图片加载器--尝试image-webpack-loader版本8或者6均报找不到imagemin-gifsicle（且无法安装） --评估: 本项目assets图片很少，估计效果也不好 
        /* 
            mozjpeg：用于压缩 JPEG 图片的选项。其中，progressive 设置为 true 表示使用渐进式 JPEG 格式，quality 设置为 65 表示压缩质量为 65%。
            optipng：用于优化 PNG 图片的选项。这里将 enabled 设置为 false 表示禁用 optipng 优化。
            pngquant：用于压缩 PNG 图片的选项。其中，quality 设置为 [0.65, 0.9] 表示压缩质量范围在 65% 到 90% 之间，speed 设置为 4 表示压缩速度为 4（速度越高，压缩时间越短）。
            gifsicle：用于优化 GIF 图片的选项。这里将 interlaced 设置为 false 表示禁用交错（interlaced）模式。
            webp：用于将图片转换为 WebP 格式的选项。其中，quality 设置为 75 表示压缩质量为 75%。
        */
        /* 
            config.module
                .rule('images')
                .use('image-webpack-loader')
                .loader('image-webpack-loader')
                .options({
                    mozjpeg: {
                        progressive: true,
                        quality: 65,
                    },
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: [0.65, 0.9],
                        speed: 4,
                    },
                    // 不支持WEBP就不要写这一项
                    webp: {
                        quality: 75,
                    },
                })
                .end()
                .test(/\.(gif|png|jpe?g|svg)$/i)
                .include.add(path.resolve(__dirname, 'src/assets')) // 设置需要处理的图片目录  
                .end();
        */

        // 开启gzip压缩
        config.plugin('CompressionPlugin').use(
            new CompressionPlugin({
                algorithm: 'gzip', // 压缩算法
                test: /\.js(\?.*)?$/i,
                threshold: 10240, // 只有大小大于该值的资源会被处理 10240（即10KB）
                minRatio: 0.8, //最小压缩率
            }),
        );

        //开启多进程打包
        /*
            报错：
            TypeError: this.getOptions is not a function，
            排查：
                1.sass-loader版本太高
                2.node16对应sass-loader6.0+---未实践验证
         */
        // config.module.rule('js').test(/\.js$/).use('thread-loader').loader('thread-loader').end();

        //cdn配置
        // 生产环境配置
        if (isProduction) {
            // 生产环境注入cdn
            config.plugin('html')
                .tap(args => {
                    console.log(args[0]);
                    args[0].cdn = CDNJsList
                    return args
                })

            config.externals(externals); // 生产环境注入cdn

            config.plugin('BundleAnalyzerPlugin').use(BundleAnalyzerPlugin);// 打包分析
        }

    },
    css: {
        loaderOptions: {
            sass: {
                //给sass-loader传递选项
            },
            css: {
                //给css-loader传递选项
            },
            postcss: {
                //给postcss-loader传递选项
                plugins: [
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
