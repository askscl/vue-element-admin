import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/index')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/home',
        component: () => import('@/views/testToC/home'),
        hidden: true
    },
    {
        path: '/auth-redirect',
        component: () => import('@/views/login/auth-redirect'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/401'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',//首页
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: 'dashboard', icon: 'dashboard', affix: true }
            }
        ]
    },
    {
        path: '/documentation',//文档
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/documentation/index'),
                name: 'Documentation',
                meta: { title: 'documentation', icon: 'documentation', affix: true }
            }
        ]
    },
    {
        path: '/guide',//引导页
        component: Layout,
        redirect: '/guide/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/guide/index'),
                name: 'Guide',
                meta: { title: 'guide', icon: 'guide', noCache: true }
            }
        ]
    },
    {
        path: '/testSingle',// 单页测试
        component: Layout,
        redirect: '/testSingle/testSingle',
        children: [
            {
                path: 'testSingle',
                component: () => import('@/views/testSingle/testSingle'),
                name: 'testSingle',
                meta: { title: 'singlePage', icon: 'example', noCache: true }
            }
        ]
    },
    // 测试小组==========================================================================
    {
        path: '/test',// 测试小组
        component: Layout,
        meta: {
            title: 'testGroup',
            icon: 'example'
        },
        children: [
            {
                path: 'iframe',
                component: () => import('@/views/test/iframe'),
                meta: { title: 'iframe通信测试' }
            },

            {
                path: 'testUtils',
                component: () => import('@/views/test/testUtils'),
                meta: { title: '公共函数带异步操作测试' }
            },
            {
                path: 'testTree',
                component: () => import('@/views/test/testTree'),
                meta: { title: 'el懒加载树测试' }
            },
            {
              path: 'testTable',
              component: () => import('@/views/test/testTable'),
              meta: { title: 'elTable重构测试' }
            },
            {
                path: 'testLine',
                component: () => import('@/views/test/testLine'),
                meta: { title: '边界线功能' }
            },
            {
                path: 'testGrailLayout',
                component: () => import('@/views/test/testGrailLayout'),
                meta: { title: '圣杯[三栏]布局' }
            },
            {
                path: 'twoDivLayout',
                component: () => import('@/views/test/twoDivLayout'),
                meta: { title: '两栏布局' }
            },
            {
                path: 'testListMvvm',
                component: () => import('@/views/test/testListMvvm'),
                meta: { title: '解决修改数组下标的值，响应式失效' }
            },

            /* {
                path: 'vScrollPro',
                component: () => import('@/vlearns/testHtml/vScrollPro/vScrollPro.vue'),
                meta: { title: '不定高的虚拟滚动' }
            }, */
            {
                path: 'vScrollPro2',
                component: () => import('@/vlearns/testHtml/vScrollPro/vScrollPro2.vue'),
                meta: { title: '不定高的虚拟滚动' }
            },
            {
                path: 'functional',
                component: () => import('@/views/test/functional'),
                meta: { title: '函数式组件' }
            },
            {
                path: 'test08',
                component: () => import('@/views/test/test08'),
                meta: { title: '测试08' }
            },
        ]
    },
    {
        path: '/vueLearn',// vue学习
        component: Layout,
        meta: {
            title: 'vue学习',
            icon: 'example'
        },
        children: [
            {
                path: 'useSync',
                component: () => import('@/views/vueLearn/useSync/Parent.vue'),
                meta: { title: 'Sync父子组件' }
            },
            {
                path: 'Slot',
                component: () => import('@/views/vueLearn/SlotTest/SlotTest'),
                meta: { title: '插槽测试' }
            },
            {
                path: 'ProvideInject',
                component: () => import('@/views/vueLearn/ProvideInject/ProvideInject'),
                meta: { title: '依赖注入' }
            },
            {
                path: 'Attrs',
                component: () => import('@/views/vueLearn/Attrs/Attrs.vue'),
                meta: { title: '$attrs通信' }
            },
            {
                path: 'Listeners',
                component: () => import('@/views/vueLearn/Listeners/Listeners.vue'),
                meta: { title: '$listeners通信' }
            },
            {
                path: 'EventBusA',
                component: () => import('@/views/vueLearn/EventBus/EventBusA.vue'),
                meta: { title: '事件总线通信A' }
            },
            {
                path: 'EventBusB',
                component: () => import('@/views/vueLearn/EventBus/EventBusB.vue'),
                meta: { title: '事件总线通信B' }
            },
        ]
    },
    {
        path: '/cssLearn',// css学习
        component: Layout,
        meta: {
            title: 'css学习',
            icon: 'example'
        },
        children: [
            {
                path: 'scrollTimeline',
                component: () => import('@/views/cssLearn/scrollTimeline/scrollTimeline'),
                meta: { title: '滚动时间线' }
            },
            {
                path: 'scssMap',
                component: () => import('@/views/cssLearn/learnScss/scssMap'),
                meta: { title: 'scssMap' }
            },
            {
                path: 'learnScssStar',
                component: () => import('@/views/cssLearn/learnScss/Star/star.vue'),
                meta: { title: '星空' }
            },
            {
                path: 'autoHeight',
                component: () => import('@/views/cssLearn/autoHeight.vue'),
                meta: { title: '高度自适应' }
            },
            {
                path: 'HeightFull',
                component: () => import('@/views/cssLearn/HeightFull'),
                meta: { title: '高度撑满' }
            },
            {
                path: 'learn01',
                component: () => import('@/views/cssLearn/learn01'),
                meta: { title: 'learn01' }
            },

        ]
    },
    {
        path: '/profile',
        component: Layout,
        redirect: '/profile/index',
        hidden: true,
        children: [
            {
                path: 'index',
                component: () => import('@/views/profile/index'),
                name: 'Profile',
                meta: { title: 'profile', icon: 'user', noCache: true }
            }
        ]
    }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
    {
        path: '/permission',
        component: Layout,
        redirect: '/permission/page',
        alwaysShow: true, // will always show the root menu
        name: 'Permission',
        meta: {
            title: 'permission',
            icon: 'lock',
            roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [
            {
                path: 'page',
                component: () => import('@/views/permission/page'),
                name: 'PagePermission',
                meta: {
                    title: 'pagePermission',
                    roles: ['admin'] // or you can only set roles in sub nav
                }
            },
            {
                path: 'directive',
                component: () => import('@/views/permission/directive'),
                name: 'DirectivePermission',
                meta: {
                    title: 'directivePermission'
                    // if do not set roles, means: this page does not require permission
                }
            },
            {
                path: 'role',
                component: () => import('@/views/permission/role'),
                name: 'RolePermission',
                meta: {
                    title: 'rolePermission',
                    roles: ['admin']
                }
            }
        ]
    },

    {
        path: '/icon',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/icons/index'),
                name: 'Icons',
                meta: { title: 'icons', icon: 'icon', noCache: true }
            }
        ]
    },

    /** when your routing map is too long, you can split it into small modules **/
    componentsRouter,
    chartsRouter,
    nestedRouter,
    tableRouter,

    {
        path: '/example',
        component: Layout,
        redirect: '/example/list',
        name: 'Example',
        meta: {
            title: 'example',
            icon: 'el-icon-s-help'
        },
        children: [
            {
                path: 'create',
                component: () => import('@/views/example/create'),
                name: 'CreateArticle',
                meta: { title: 'createArticle', icon: 'edit' }
            },
            {
                path: 'edit/:id(\\d+)',
                component: () => import('@/views/example/edit'),
                name: 'EditArticle',
                meta: { title: 'editArticle', noCache: true, activeMenu: '/example/list' },
                hidden: true
            },
            {
                path: 'list',
                component: () => import('@/views/example/list'),
                name: 'ArticleList',
                meta: { title: 'articleList', icon: 'list' }
            }
        ]
    },

    {
        path: '/tab',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/tab/index'),
                name: 'Tab',
                meta: { title: 'tab', icon: 'tab' }
            }
        ]
    },

    {
        path: '/error',
        component: Layout,
        redirect: 'noRedirect',
        name: 'ErrorPages',
        meta: {
            title: 'errorPages',
            icon: '404'
        },
        children: [
            {
                path: '401',
                component: () => import('@/views/error-page/401'),
                name: 'Page401',
                meta: { title: 'page401', noCache: true }
            },
            {
                path: '404',
                component: () => import('@/views/error-page/404'),
                name: 'Page404',
                meta: { title: 'page404', noCache: true }
            }
        ]
    },

    {
        path: '/error-log',
        component: Layout,
        children: [
            {
                path: 'log',
                component: () => import('@/views/error-log/index'),
                name: 'ErrorLog',
                meta: { title: 'errorLog', icon: 'bug' }
            }
        ]
    },

    {
        path: '/excel',
        component: Layout,
        redirect: '/excel/export-excel',
        name: 'Excel',
        meta: {
            title: 'excel',
            icon: 'excel'
        },
        children: [
            {
                path: 'export-excel',
                component: () => import('@/views/excel/export-excel'),
                name: 'ExportExcel',
                meta: { title: 'exportExcel' }
            },
            {
                path: 'export-selected-excel',
                component: () => import('@/views/excel/select-excel'),
                name: 'SelectExcel',
                meta: { title: 'selectExcel' }
            },
            {
                path: 'export-merge-header',
                component: () => import('@/views/excel/merge-header'),
                name: 'MergeHeader',
                meta: { title: 'mergeHeader' }
            },
            {
                path: 'upload-excel',
                component: () => import('@/views/excel/upload-excel'),
                name: 'UploadExcel',
                meta: { title: 'uploadExcel' }
            }
        ]
    },

    {
        path: '/zip',
        component: Layout,
        redirect: '/zip/download',
        alwaysShow: true,
        name: 'Zip',
        meta: { title: 'zip', icon: 'zip' },
        children: [
            {
                path: 'download',
                component: () => import('@/views/zip/index'),
                name: 'ExportZip',
                meta: { title: 'exportZip' }
            }
        ]
    },

    {
        path: '/pdf',
        component: Layout,
        redirect: '/pdf/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/pdf/index'),
                name: 'PDF',
                meta: { title: 'pdf', icon: 'pdf' }
            }
        ]
    },
    {
        path: '/pdf/download',
        component: () => import('@/views/pdf/download'),
        hidden: true
    },

    {
        path: '/theme',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/theme/index'),
                name: 'Theme',
                meta: { title: 'theme', icon: 'theme' }
            }
        ]
    },

    {
        path: '/clipboard',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/clipboard/index'),
                name: 'ClipboardDemo',
                meta: { title: 'clipboardDemo', icon: 'clipboard' }
            }
        ]
    },

    {
        path: '/i18n',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/i18n-demo/index'),
                name: 'I18n',
                meta: { title: 'i18n', icon: 'international' }
            }
        ]
    },

    {
        path: 'external-link',
        component: Layout,
        children: [
            {
                path: 'https://github.com/PanJiaChen/vue-element-admin',
                meta: { title: 'externalLink', icon: 'link' }
            }
        ]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
