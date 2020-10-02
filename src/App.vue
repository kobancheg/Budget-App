<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
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
  data: () => ({
    // list: {
    //   1: {
    //     type: "INCOME",
    //     value: 100,
    //     comment: "Some comment",
    //     id: 1,
    //   },
    //   2: {
    //     type: "OUTCOME",
    //     value: 50,
    //     comment: "Some outcome comment",
    //     id: 2,
    //   },
    // },
  }),
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
  // created() {
  //   bus.$on("deleteItem", this.onDeleteItem);
  // },
  methods: {
    // onDeleteItem(id) {
    //   this.$delete(this.debetList, id);
    // },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };
      this.$set(this.list, newObj.id, newObj);
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
