<template>
  <div>
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
      <i :class="[item.value > 0 ? 'el-icon-top' : 'el-icon-bottom']"></i>
      <span class="budget-comment">{{ item.comment }}</span>
      <span class="budget-value" :class="[item.value > 0 ? 'success' : 'danger']">{{ item.value }}</span>
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
import { bus } from "@/main";

export default {
  name: "BudgetListItem",
  props: {
    list: {
      type: Object,
      default: () => ({}),
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
      bus.$emit("deleteItem", id);
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
</style>
