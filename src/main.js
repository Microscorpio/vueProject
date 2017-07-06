import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import seller from './components/seller/seller';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';

Vue.use(VueRouter);

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
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
