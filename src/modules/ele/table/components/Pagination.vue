<template>
  <div class="pagination-div">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pageNum"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="queryInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="queryInfo.total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    queryInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      pageParam: {
        pageSize: this.queryInfo.pageSize,
        pageNum: this.queryInfo.pageNum
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageParam.pageSize = val
      this.$emit('currentPageSizeChange', this.pageParam.pageSize)
    },
    handleCurrentChange(val) {
      this.pageParam.pageNum = val
      this.$emit('currentPageNumChange', this.pageParam.pageNum)
    }
  }
}
</script>
<style lang="scss">
.pagination-div {
  display: flex;
  justify-content: flex-end;
}
</style>
