export default {
  path: '/v3',
  name: 'v3',
  component: () => import('@v3/layouts/MainLayout'),
  children: [
    // 路由/v3的默认页面指向Demo1
    {
      path: '',
      name: 'v3-default',
      component: () => import('@v3/demo/Demo1')
    },
    {
      path: 'directive',
      name: 'directive',
      component: () => import('@v3/directive/DisplayKey')
    },
    {
      path: 'demo',
      name: 'demo',
      component: () => import('@v3/layouts/Router'),
      children: [
        // 路由/v3/demo的默认页面指向Demo1
        {
          path: '',
          name: 'demo-default',
          component: () => import('@v3/demo/Demo1')
        },
        {
          path: 'framework',
          name: 'framework',
          component: () => import('@v3/demo/Framework')
        },
        {
          path: 'demo1',
          name: 'demo1',
          component: () => import('@v3/demo/Demo1')
        },
        {
          path: 'demo2',
          name: 'demo2',
          component: () => import('@v3/demo/Demo2')
        }
      ]
    }
  ]
}
