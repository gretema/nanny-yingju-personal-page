import Vue from 'vue';
import 'bootstrap';
import 'animate.css';
import WOW from 'wow.js';
import VueMeta from 'vue-meta';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

new WOW({ live: false }).init();

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});
