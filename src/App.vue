<template>
  <div id="app">
    <Form />
    <TotalBalance :total="totalBalance" />
    <BudgetList />
  </div>
</template>

<script>
// import { bus } from "@/main";
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  computed: {
    ...mapGetters("debet", ["debetList"]),
    totalBalance() {
      return Object.values(this.debetList).reduce((acc, item) => {
        if (item.type === "OUTCOME" && item.value > 0) {
          return acc - item.value;
        } else {
          return acc + item.value;
        }
      }, 0);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.success {
  color: #67c23a;
}

.danger {
  color: #f56c6c;
}

.el-card__header {
  border-bottom: none !important;
}
</style>
