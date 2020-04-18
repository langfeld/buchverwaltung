import Vue from 'vue'
import App from './App.vue'

// Tailwind CSS einbinden
import './assets/styles/index.css';

// Axios
import Axios from 'axios'
Vue.prototype.$axios = Axios;

// VueX Store einbinden
import { store } from './store/store'

// Router einbinden
import VueRouter from 'vue-router'
import Routes from './routes'

// Router benutzen
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes
});

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
  router: router
}).$mount('#app')