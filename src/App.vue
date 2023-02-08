<template>
  <NavBar/>
  <RouterView/>
</template>
    
<style>
@import "./style.css";
</style>

<script>
import NavBar from './components/NavBar.vue';

export default{
  components:{
    NavBar
  }
}

</script>
