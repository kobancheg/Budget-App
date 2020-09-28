<template>
  <div class="total-value" :class="colorCount">Balance: {{ total }}</div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    colorCount: function () {
      return this.total > 0 ? "success" : this.total < 0 ? "danger" : "";
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}

.success {
  color: #67c23a;
}

.danger {
  color: #f56c6c;
}
</style>
