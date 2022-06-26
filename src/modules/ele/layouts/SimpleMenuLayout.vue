<template>
  <div class="simple-menu-layout">
    <SimpleMenu class="menu"></SimpleMenu>
    <router-view></router-view>
  </div>
</template>
<script>
import SimpleMenu from '@ele/menu/components/SimpleMenu'
export default {
  name: 'SimpleMenuLayout',
  components: {
    SimpleMenu
  }
}
</script>
<style lang="scss" scoped>
.simple-menu-layout {
  display: flex;
  .menu {
    min-width: 200px;
  }
}
</style>
