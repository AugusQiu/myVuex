let Vue
class Store{
   constructor(options={}){
     this._vm = new Vue({
         // 直接借助于Vue的data选项，实现vuex数据的响应式
         data(){
             return {
                 state:options.state
             }
         }
     })

     //getters
     let getters = options.getters
     this.getters = {}
     Object.keys(getters).forEach((getterName)=>{
         Object.defineProperty(this.getters,getterName,{
             get:()=>{
                 //getters[getterName] 对应 函数getfullName
                 return getters[getterName](this.state)
             }
         })
     })
  
     //mutations
     let mutations = options.mutations
     this.mutations = {}
     Object.keys(mutations).forEach((mutationName)=>{
         this.mutations[mutationName] = (payload)=>{
             //多加了层嵌套
             mutations[mutationName](this.state,payload)
         }
     })

     this.commit=(mutationName,payload)=>{
        this.mutations[mutationName](payload)
     }

     //actions
     let actions = options.actions || {}
     this.actions= {}
     Object.keys(actions).forEach((actionName)=>{
         this.actions[actionName] = (payload)=>{
             actions[actionName](this,payload)
         }
     })
     this.dispatch = (actionName,payload)=>{
         this.actions[actionName](payload)
     }
    }

   /**
    * 类的属性访问器，若不使用，将this.state直接放入data，
    * 取数据就变成$store.state.state.name，多了一层state
    */
   get state(){
       return this._vm.state
   }
}
const install = (_Vue)=>{
    Vue = _Vue

    /**
     * 每个vue组件都可调用$store,V1.0是借助Init函数挂载在原型上
     * 后来，是利用vue的Mixin机制挂入beforeCreate生命周期
     */
    Vue.mixin({
        beforeCreate(){
            if(this.$options && this.$options.store){
                this.$store = this.$options.store
            }else{
                //使用mixin机制，根组件和挂载到它身上的子组件都被初始化了一个共享的属性$store
                this.$store = this.$parent && this.$parent.$store  
            }
        }
    })
}

export default{
    install,
    Store
}