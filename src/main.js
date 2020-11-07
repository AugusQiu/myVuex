import Vue from 'vue'
import App from './App.vue'
import Vuex from './store'
Vue.use(Vuex) 

const store = new Vuex.Store({
   state:{
     name:'qiu'
   },
   getters:{
     getfullName: state =>{
         return state.name + 'genquan'
     }
   },
   mutations:{
     changeName(state,payload){
         state.name +=payload
     }
   },
   actions:{
     changeAction({commit},payload){
         commit('changeName',payload)
     }
   }
})


new Vue({
    el:'#app',
    store, 
    render: h => h(App)
})