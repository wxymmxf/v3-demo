<template>
  <div class="table-page">
    <CommonTable
      :options="tableOptions"
      :height="240"
      :data="tableList.slice((pageInfo.pageNum - 1) * pageInfo.pageSize, pageInfo.pageNum * pageInfo.pageSize)"
    >
      <template v-slot:column4="scope">
        <div class="text-link">{{ scope.row.column4 }}</div>
      </template>
    </CommonTable>
    <Pagination
      :queryInfo="pageInfo"
      @currentPageSizeChange="currentPageSizeChange"
      @currentPageNumChange="currentPageNumChange"
    ></Pagination>
  </div>
</template>
<script>
import CommonTable from '@ele/table/components/CommonTable'
import Pagination from '@ele/table/components/Pagination'
import { tableOptions, tableList } from './mock'
export default {
  name: 'OrderMgmt',
  components: {
    CommonTable,
    Pagination
  },
  data() {
    return {
      pageInfo: {
        pageSize: 5,
        pageNum: 1,
        total: 0
      },
      tableOptions: tableOptions,
      tableList: tableList
    }
  },
  created() {
    this.init()
  },
  mounted() {},
  methods: {
    init() {
      this.pageInfo.total = this.tableList.length
    },
    currentPageSizeChange(size) {
      this.pageInfo.pageSize = size
    },
    currentPageNumChange(num) {
      this.pageInfo.pageNum = num
    }
  }
}
</script>
<style lang="scss" scoped>
.table-page {
  padding: 24px;
  width: 1100px;
}
</style>
