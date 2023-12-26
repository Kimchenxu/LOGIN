<template>
  <div>
    <UserSignup v-if="huaMian==='signup'"  />
    <LoginPage v-else/>
    
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage.vue";
import UserSignup from "./components/UserSignup.vue";
import {mapState,mapActions} from 'vuex';


export default {
  name: 'App',
  components: {
    LoginPage,
    UserSignup
  },
  computed:{
  ...mapState(['huaMian']),
},
  methods:{
    ...mapActions(['huamianchange'])
  }
}
</script>

<style>
</style>




