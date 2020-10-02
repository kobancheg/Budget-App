<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <ElRow type="flex" class="row-bg" justify="space-around">
        <ElButton
          type="text"
          icon="el-icon-sort"
          @click="sortParam = 'all'"
        ></ElButton>
        <ElButton
          class="success"
          type="text"
          icon="el-icon-sort-up"
          @click="sortParam = 'profit'"
        ></ElButton>
        <ElButton
          class="danger"
          type="text"
          icon="el-icon-sort-down"
          @click="sortParam = 'loss'"
        >
        </ElButton>
      </ElRow>
      <ElDivider></ElDivider>
      <template v-if="!isEmpty">
        <BudgetListItem :sortParam="sortParam" />
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";
import { mapGetters } from "vuex";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },
  data: () => ({
    header: "Budget List",
    emptyTitle: "Empty List",
    sortParam: "",
  }),
  computed: {
    ...mapGetters("debet", ["debetList"]),
    isEmpty() {
      return !Object.keys(this.debetList).length;
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}

.el-button--text {
  font-size: 20px;
}

.success {
  color: #67c23a;
}

.danger {
  color: #f56c6c;
}
</style>
