鈾?{
  mode: 'development',
  context: 'F:\\Myapp\\App\\vue-element-admin',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'F:\\Myapp\\App\\vue-element-admin\\dist',
    filename: 'static/js/[name]...js',
    publicPath: '/',
    chunkFilename: 'static/js/[name]...js'
  },
  resolve: {
    alias: {
      '@': 'F:\\Myapp\\App\\vue-element-admin\\src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'F:\\Myapp\\App\\vue-element-admin\\node_modules',
      'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // 炉\_(銉?_/炉
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing() {
            // 炉\_(銉?_/炉
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'F:\\Myapp\\App\\vue-element-admin\\node_modules',
      'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // 炉\_(銉?_/炉
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '25c6be39'
            }
          },
          {
            loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-loader\\lib\\index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '25c6be39'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'static/img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        exclude: [
          'F:\\Myapp\\App\\vue-element-admin\\src\\icons'
        ],
        use: [
          {
            loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'static/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'static/media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'static/fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\raw-loader\\index.js'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.2\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.2\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.2\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.2\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.2\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.2\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.2\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.2\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.1\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: 'd52e5894'
            }
          },
          {
            loader: 'F:\\Myapp\\App\\vue-element-admin\\node_modules\\babel-loader\\lib\\index.js'
          }
        ]
      },
      /* config.module.rule('icons') */
      {
        test: /\.svg$/,
        include: [
          'F:\\Myapp\\App\\vue-element-admin\\src\\icons'
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: false,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      },
      {
        options: {
          test: /\.js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: false,
          cache: false,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: false,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          uglifyOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              drop_console: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          VUE_APP_BASE_API: '"/dev-api"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-element-admin',
        templateParameters: function () { /* omitted long function */ },
        template: 'F:\\Myapp\\App\\vue-element-admin\\public\\index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/,
          /runtime\..*\.js$/
        ],
        include: 'initial'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: 'F:\\Myapp\\App\\vue-element-admin\\public',
          to: 'F:\\Myapp\\App\\vue-element-admin\\dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    /* config.plugin('CompressionPlugin') */
    {},
    {
      opts: {
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        reportFilename: null,
        reportTitle: function () { /* omitted long function */ },
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: null,
        excludeAssets: null,
        logLevel: 'info',
        startAnalyzer: true,
        analyzerPort: 8888
      },
      server: null,
      logger: {
        activeLevels: new Set([
          'info',
          'warn',
          'error',
          'silent'
        ])
      }
    }
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  },
  name: 'Vue Element Admin',
  devtool: 'source-map'
}
