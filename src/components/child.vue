<template>
  <div>
   <h1>{{$store.state.name}}</h1>
   <h1>{{$store.getters.getfullName}}</h1>
   <button @click="change">change</button>
   <button @click="changeAsync">changeAsync</button>
  </div>
</template>

<script>
export default {
   created(){
      console.log(this)
   },
   data(){
      return{
      }
   },
   methods:{
      change(){
         this.$store.commit('changeName','x')
      },
      changeAsync(){
         this.$store.dispatch('changeAction','y')
      }
   }
}
</script>

<style>

</style>