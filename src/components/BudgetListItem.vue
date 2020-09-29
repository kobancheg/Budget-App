<template>
  <div>
    <div class="list-item" v-for="(item, prop) in sortedList" :key="prop">
      <i v-if="item.type === 'INCOME'" class="el-icon-top"></i>
      <i v-else class="el-icon-bottom"></i>
      <span class="budget-comment">{{ item.comment }}</span>
      <span class="budget-value success" v-if="item.type === 'INCOME'">{{
        item.value
      }}</span>
      <span class="budget-value danger" v-else>{{ '-' + item.value }}</span>
      <ElButton type="danger" size="mini" @click="dialogVisible = true"
        >Delete</ElButton
      >
      <ElDialog
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span>Want to delete a post?</span>
        <span slot="footer" class="dialog-footer">
          <ElButton size="mini" @click="dialogVisible = false">Cancel</ElButton>
          <ElButton
            type="primary"
            size="mini"
            @click="(dialogVisible = false), deleteItem(item.id)"
            >Confirm</ElButton
          >
        </span>
      </ElDialog>
    </div>
  </div>
</template>

<script>
import { bus } from '@/main';

export default {
  name: 'BudgetListItem',
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
    sortParam: {
      type: String,
      default: 'all',
    },
  },
  data: () => ({
    dialogVisible: false,
  }),
  methods: {
    handleClose(done) {
      done();
    },
    deleteItem(id) {
      bus.$emit('deleteItem', id);
    },
  },
  computed: {
    sortedList() {
      switch (this.sortParam) {
        case 'profit':
          return Object.values(this.list).filter(
            (item) => item.type === 'INCOME'
          );
        case 'loss':
          return Object.values(this.list).filter(
            (item) => item.type === 'OUTCOME'
          );
        case 'all':
          return this.list;
        default:
          return this.list;
      }
    },
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}

.el-icon-top {
  color: #67c23a;
}

.el-icon-bottom {
  color: #f56c6c;
}
</style>
