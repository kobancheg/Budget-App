<template>
  <div class="budget-list-wrap">
    <ElCard header="header">
      <div class="list-item" v-for="(item, prop) in list" :key="prop">
        <span class="budget-comment">{{ item.comment }}</span>
        <span class="budget-value">{{ item.value }}</span>
        <ElButton type="danger" size="mini">Delete</ElButton>
      </div>
    </ElCard>
  </div>
</template>

<script>
export default {
  name: "BudgetList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: "Budget List",
  }),
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}

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
