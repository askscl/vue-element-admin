/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
    path: '/charts',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Charts',
    meta: {
        title: 'charts',
        icon: 'chart'
    },
    children: [
        {
            path: 'keyboard',
            component: () => import('@/views/charts/keyboard'),
            name: 'KeyboardChart',
            meta: { title: 'keyboardChart', noCache: true }
        },
        {
            path: 'line',
            component: () => import('@/views/charts/line'),
            name: 'LineChart',
            meta: { title: 'lineChart', noCache: true }
        },
        {
            path: 'mix-chart',
            component: () => import('@/views/charts/mix-chart'),
            name: 'MixChart',
            meta: { title: 'mixChart', noCache: true }
        },
        {
            path: 'mapChart',
            component: () => import('@/views/charts/mapChart'),
            meta: { title: '地图图表' }
        },
        {
            path: 'bar',
            component: () => import('@/views/charts/bar'),
            meta: { title: '柱状图' }
        },
        {
            path: 'pie',
            component: () => import('@/views/charts/pie'),
            meta: { title: '饼图' }
        }
    ]
}

export default chartsRouter
