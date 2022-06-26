<template>
  <div class="simple-menu">
    <div>{{ currentMenu }}</div>
    <el-menu @open="handleOpen" @close="handleClose" :default-openeds="defaultOpeneds">
      <template v-for="(item, index) in menu.children" :key="index">
        <template v-if="item.children && item.children.length > 1">
          <el-sub-menu :index="item.path" class="menu-item">
            <template #title>
              <div @click="goPath(item)">
                <el-icon><component :is="item.icon"></component></el-icon>
                <span>{{ item.name }}</span>
              </div>
            </template>
            <el-menu-item
              :index="subItem.path + ''"
              v-for="(subItem, subIndex) in item.children"
              class="sub-menu"
              :key="subIndex"
              @click="goPath(subItem)"
              :class="currentPath === subItem.path ? 'active' : ''"
            >
              <div>{{ subItem.name }}</div>
            </el-menu-item>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" class="menu-item" :class="currentPath === item.path ? 'active' : ''" @click="goPath(item)">
            <el-icon><component :is="item.icon"></component></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import menu from '@ele/menu/menu'
export default {
  name: 'SimpleMenu',
  data() {
    return {
      menu: menu,
      currentMenu: '表格组件',
      currentPath: '', // 当前路径
      defaultOpeneds: [] // 默认打开的sub-menu 的 index 的数组
    }
  },
  created() {
    this.init(menu.children)
  },
  methods: {
    /**
     * 根据当前路由初始化当前菜单,获取当前菜单的name,path
     * 若当前菜单为子菜单，则获取所属sub-menu的index
     */
    init(list, parent) {
      list.forEach(item => {
        if (this.$route.path === item.path) {
          this.currentMenu = item.name
          this.currentPath = item.path
          if (parent && parent.path) {
            this.defaultOpeneds.push(parent.path)
          }
        } else if (item.children) {
          this.init(item.children, item)
        }
      })
    },
    // 路由跳转
    goPath(item) {
      this.currentMenu = item.name
      this.currentPath = item.path
      this.$router.push(item.path)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.simple-menu {
  .menu-item {
    // 定制菜单样式
  }
  .active {
    background: #ecf5ff;
  }
}
</style>
