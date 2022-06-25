<template>
  <div>
    <div>Custom Svg Icon</div>
    <svg-icon iconClass="edit" />
  </div>
  <hr />
  <div class="pingfang">
    <div class="Regular">苹方黑体-标准</div>
    <div class="Semibold">苹方黑体-中黑</div>
    <div class="Medium">苹方黑体-中粗</div>
    <div class="Light">苹方黑体-细</div>
  </div>
  <hr />
</template>
<script>
export default {
  name: 'Demo1',
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.pingfang {
  .Regular {
    font-family: 'PingFangSC-Regular';
  }
  .Semibold {
    font-family: 'PingFangSC-Semibold';
  }
  .Medium {
    font-family: 'PingFangSC-Medium';
  }
  .Light {
    font-family: 'PingFangSC-Light';
  }
}
</style>
