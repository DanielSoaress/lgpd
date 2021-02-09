import Vue from 'vue'
import App from './App.vue'

import store from './store/store'
import router from './router'
import VueTheMask from 'vue-the-mask'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueTheMask);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
