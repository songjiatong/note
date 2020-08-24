import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:sessionStorage.getItem('isLogined') ? sessionStorage.getItem('isLogined') : false
  },
  mutations: {
    login_state:(state)=>{
      state.isLogin=true;
    },
    logout_state:(state)=>{
      state.isLogin=false;
      sessionStorage.clear()
    }
  },
  actions: {
  },
  modules: {
  }
})
