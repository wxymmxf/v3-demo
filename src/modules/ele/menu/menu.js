const menu = {
  path: '/ele',
  name: 'ele',
  children: [
    {
      path: '/ele/table',
      name: '表格组件',
      icon: 'List'
    },
    {
      path: '/ele/menu',
      name: '菜单实例',
      icon: 'Menu',
      children: [
        {
          path: '/ele/menu/subMenu1',
          name: 'subMenu1'
        },
        {
          path: '/ele/menu/subMenu2',
          name: 'subMenu2'
        }
      ]
    }
  ]
}
export default menu
