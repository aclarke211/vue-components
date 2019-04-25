import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue'),
    },
    {
      path: '/module/:moduleName',
      name: 'modulesShowcase',
      component: () => import(/* webpackChunkName: "ModuleShowcase" */ './views/ModuleShowcase.vue'),
      props: true,
    },
  ],
});
