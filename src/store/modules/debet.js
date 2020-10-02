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
        Vue.delete(state.list, id);
      },
      ADD_ITEM (state, newObj) {
        Vue.set(state.list, newObj.id, newObj)
      }
    },
    actions: {
      addNewListItem({ commit }, data) {
        const newObj = { ...data, id: String(Math.random()) };
        commit("ADD_ITEM", newObj)
      },
      onDeleteItem({ commit }, id) {
        commit("REMOVE_ITEM", id);
      }
    },
}

export default debetStore;
