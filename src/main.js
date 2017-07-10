import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import seller from './components/seller/seller';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';

Vue.use(VueRouter);
Vue.use(VueResource);

// Vue.config.productionTip = false
const routes = [ {
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
} ];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
