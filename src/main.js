import Vue from 'vue';
import App from './App.vue';
import './plugins/elements';

export const bus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
