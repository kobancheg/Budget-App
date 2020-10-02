import Vue from "vue";

const debetStore = {
    namespaced: true,
    state: {
        list: {
            1: {
              type: "INCOME",
              value: 100,
              comment: "Some comment",
              id: 1,
            },
            2: {
              type: "OUTCOME",
              value: 50,
              comment: "Some outcome comment",
              id: 2,
            },
          },
    },
    getters: {
      debetList: ({ list }) => Object.values(list)
    },
    mutations: {
      REMOVE_ITEM (state, id) {
        // state.list.$remove(id)
        Vue.delete(state.list, id);
        console.log(state.list)
      }
    },
    actions: {
      onDeleteItem({ commit }, id) {
        // this.$delete(this.debetList, id);
        console.log(id)
        commit("REMOVE_ITEM", id);
      }
    },
}

export default debetStore;
