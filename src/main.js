import Vue from 'vue';
import App from './App.vue';
import Cookie from 'vue-cookie';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import routes from './router';
import axios from 'axios';

Vue.use(Router);
Vue.use(Cookie);
Vue.use(BootstrapVue);

let router = new Router({
  mode: 'history',
  routes: routes
});

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.requires_auth) {
    const token = Vue.cookie.get('user-token');
    if (!token) {
      router.push('/signin').catch(err => err);
    } else {
      next();
    }
  } else {
    next();
  }
});
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(config => {
  config.headers.common['X-jwt-token'] = Vue.cookie.get('user-token');
  return config;
});
window.axios = axios;
window.Vue = Vue;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
