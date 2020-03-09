import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/feature',
    name: 'Feature',
    component: () => import('../views/Feature.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue'),
  },
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
});

export default router;
