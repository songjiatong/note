import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'Tom',
    age:13,
    sex:true,
    friends:[
      {username:'aaa',sex:false,addr:'河北省'},
      {username:'bbb',sex:false,addr:'湖南省'},
      {username:'ccc',sex:false,addr:'陕西省'}
    ]
  },
  mutations: {
    age_increment_mutation:(state)=>{
      state.age++;
    },
    age_decrement_mutation:(state)=>{
      state.age--;
    },
    age_add_mutation:(state,payload)=>{
      state.age+=payload;
    },
    change_username_mutation:(state,payload)=>{
      state.username=payload;
    }
  },
  actions: {
    get_server_data_action:(context)=>{
      let username='frank';  //假定username是ajax请求回来的数据
      context.commit('change_username_mutation',username);
    }
  },
  modules: {
  }
})
