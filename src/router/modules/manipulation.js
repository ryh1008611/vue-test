import Layout from '@/layout'

// 定义路由

const manipulationRouter = {
    path: '/manipulation',
    compontent: Layout,
    name: 'manipulation',
    meta: {
        title: '数据操作',
        icon: 'component'
    },
    children: [
        {
            path: 'monitor',
            compontent: () => import('@/test/manipulation/monitor'),
            name: 'monitor',
            meta: { title: 'watch数据监听' }
        },
        {
            path: 'monitor',
            compontent: () => import('@/test/manipulation/monitor'),
            name: 'monitor',
            meta: { title: 'watch数据监听' }
        }
    ]
}
export default manipulationRouter