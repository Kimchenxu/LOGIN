<template>
    <div>
      <UserLogin v-if="!isLoggedIn"/>
      <Home v-else/>
    </div>
</template>
  
<script>
  import UserLogin from "./UserLogin.vue";
  import Home from "./Home.vue";
  import {mapState} from 'vuex';
  
  
  export default {
    name: 'App',
    components: {
      UserLogin,
      Home,
    },
    computed:{
    ...mapState(['isLoggedIn']),
}}
</script>
  
<style>
</style>
  
  
  
  
  