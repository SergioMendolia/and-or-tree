import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

window.AOT = new Vue({
  render: h => h(App),
  data: { ...window.AOTData },
}).$mount('#app');
