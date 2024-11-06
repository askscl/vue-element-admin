import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // internationalization
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

// elment-ui组件重构
import ElTable2 from './components/ElTable2/el-table2.vue'
Vue.component('el-table2', ElTable2)

import Tree2 from './components/ElTree2/el-tree2.vue'
Vue.component('el-tree2', Tree2)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
    const { mockXHR } = require('../mock')
    mockXHR()
}

Vue.use(Element, {
    size: Cookies.get('size') || 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false;

//事件总线声明：
Vue.prototype.$EventBus = new Vue();

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
})
