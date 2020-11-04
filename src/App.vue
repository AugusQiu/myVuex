<template>
  <div>
      <child></child>
  </div>
</template>

<script>
import child from './components/child.vue'
export default {
   created(){
     console.log(this)
   }, 
   data(){
       return{
           msg:'hello vuex'
       }
   },
   components:{
       child
   }
}
</script>

<style>

</style>