<template>
  <h1>{{name}}</h1>
</template>

<script>
export default {
   created(){
      console.log(this)
   },
   data(){
      return{
          name:'我，子组件'
      }
   }
}
</script>

<style>

</style>