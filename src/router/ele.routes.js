export default {
  path: '/ele',
  name: 'ele',
  component: () => import('@ele/layouts/SimpleMenuLayout'),
  children: [
    {
      path: '',
      name: 'ele-default',
      // redirect: '/ele/menu'
      component: () => import('@ele/table/tablePage/TablePage')
    },
    {
      path: 'table',
      name: 'table',
      component: () => import('@ele/table/tablePage/TablePage')
    },
    {
      path: 'menu',
      name: 'menu',
      component: () => import('@ele/layouts/Router'),
      children: [
        {
          path: '',
          name: 'menu-default',
          component: () => import('@ele/menu/subMenu1/SubMenu1')
        },
        {
          path: 'subMenu1',
          name: 'subMenu1',
          component: () => import('@ele/menu/subMenu1/SubMenu1')
        },
        {
          path: 'subMenu2',
          name: 'subMenu2',
          component: () => import('@ele/menu/subMenu2/SubMenu2')
        }
      ]
    }
  ]
}
