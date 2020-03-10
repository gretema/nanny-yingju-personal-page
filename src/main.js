import Vue from 'vue';
import MetaInfo from 'vue-meta-info';
import 'bootstrap';
import 'animate';
import WOW from 'wowjs';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(MetaInfo);
new WOW({ live: false }).init();
