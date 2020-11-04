class Store{

}
const install = (_Vue)=>{
    let Vue = _Vue

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