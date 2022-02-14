import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/saas-clients',
    component: Layout,
    redirect: 'noredirect',
    name: 'saas-clients',
    children: [
      {
        path: 'index',
        component: _import('saas-clients/pages/index'),
        name: 'saas-clients-index',
        meta: {title: 'SaaS企业管理', icon: 'component', noCache: true}
      },
      {
        path: 'detail/:id',
        component: _import('saas-clients/pages/detail'),
        name: 'saas-clients-detail',
        meta: {title: '企业详情', icon: 'component', noCache: true}
      }
    ]
  }
]
