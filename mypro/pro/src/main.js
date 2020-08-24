import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
import store from '../src/store/index'



axios.defaults.baseURL = 'http://127.0.0.1:5050'
Vue.prototype.axios = axios;


Vue.component('my-header',Header)
Vue.component('my-footer',Footer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
