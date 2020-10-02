<template>
  <div>
    <div class="list-item" v-for="(item, prop) in sortedList" :key="prop">
      <i v-if="item.type === 'INCOME'" class="el-icon-top"></i>
      <i v-else class="el-icon-bottom"></i>
      <span class="budget-comment">{{ item.comment }}</span>
      <span class="budget-value success" v-if="item.type === 'INCOME'">{{
        item.value
      }}</span>
      <span class="budget-value danger" v-else>{{ "-" + item.value }}</span>
      <ElButton type="danger" size="mini" @click="open(item.id)"
        >Delete</ElButton
      >
    </div>
  </div>
</template>

<script>
import { MessageBox, Message } from "element-ui";
// import { bus } from "@/main";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BudgetListItem",
  props: {
    // list: {
    //   type: Object,
    //   default: () => ({}),
    // },
    sortParam: {
      type: String,
      default: "all",
    },
  },
  methods: {
    ...mapActions("debet", ["onDeleteItem"]),
    deleteItem(id) {
      this.onDeleteItem(id);
    },
    open(id) {
      MessageBox.confirm(
        "This will permanently delete the entry. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          this.deleteItem(id);
          Message({
            type: "success",
            message: "Delete completed",
          });
        })
        .catch(() => {
          Message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
  },
  computed: {
    ...mapGetters("debet", ["debetList"]),
    sortedList() {
      switch (this.sortParam) {
        case "profit":
          return Object.values(this.debetList).filter(
            (item) => item.type === "INCOME"
          );
        case "loss":
          return Object.values(this.debetList).filter(
            (item) => item.type === "OUTCOME"
          );
        case "all":
          return this.debetList;
        default:
          return this.debetList;
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
