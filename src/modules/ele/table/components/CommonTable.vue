<template>
  <el-table
    :key="timeStamp"
    :data="data"
    ref="commonTable"
    stripe
    :border="attrs.border === false ? attrs.border : true"
    class="common-table"
    :height="height"
    v-loading="attrs.loading"
    @row-click="handleRowClick"
    @sort-change="handleSortChange"
    @selection-change="handleSelectionChange"
    :row-class-name="tableRowClassName"
    row-key="id"
    default-expand-all
    :highlight-current-row="highlightCurrentRow"
    :tree-props="{ children: 'children' }"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-table-column
        v-if="item.type"
        :align="item.align"
        :fixed="item.hasOwnProperty('fixed') ? item.fixed : false"
        :type="item.type"
        :label="item.label"
        :width="item.width || 'auto'"
        :min-width="item.minWidth"
      ></el-table-column>
      <el-table-column
        v-else
        :type="item.type"
        :align="item.align"
        :fixed="item.hasOwnProperty('fixed') ? item.fixed : false"
        :prop="item.prop"
        :label="item.label"
        :width="item.width || 'auto'"
        :min-width="item.minWidth"
        :filters="item.filters"
        :filter-multiple="item.hasOwnProperty('filterMultiple') ? item.filterMultiple : false"
        :filter-method="item.filterMethod"
        :filter-placement="item.filterPlacement"
        :show-overflow-tooltip="item.hasOwnProperty('showOverflowTooltip') ? item.showOverflowTooltip : false"
        :sortable="item.hasOwnProperty('sortable') ? item.sortable : false"
        :class-name="item.className"
      >
        <template #default="scope">
          <slot :name="item.prop" v-bind="scope" v-if="item.slotName"></slot>
          <template v-else>{{ scope.row[item.prop] }}</template>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>
<script>
export default {
  name: 'CommonTable',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    height: {
      type: Number,
      default: () => {
        return 440
      }
    },
    attrs: {
      type: Object,
      default: () => {
        return {}
      }
    },
    timeStamp: {
      type: Number
    }
  },
  data() {
    return {
      highlightCurrentRow: false
    }
  },
  created() {},
  computed: {},
  methods: {
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex
    },
    // 选择框事件
    handleSelectionChange(val) {
      this.$emit('handleSelectionChange', val)
    },
    // 点击行事件
    handleRowClick(row, column, event) {
      this.$emit('handleRowClick', row, column, event)
    },
    // 排序事件
    handleSortChange(column, prop, order) {
      this.$emit('handleSortChange', column, prop, order)
    }
  }
}
</script>
<style lang="scss">
.common-table {
  .el-table .cell {
    white-space: pre-line;
  }
}
</style>
