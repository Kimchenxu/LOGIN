<template>
    <el-input v-model="username" placeholder="Please input-2" />
    <el-input
      v-model="password"
      type="password"
      placeholder="Please input password-2"
      show-password
    />
    <button @click="asignup()" >
          click
      </button>
      <button @click="huamianchange('login')" >
        login
        <router-link to="/login"></router-link>
  </button>
  </template>
  
  <script>
  import {mapActions} from 'vuex';
  export default{
    data(){
      return{username: '',
            password:''
      };
    },
    /* 这里面API后面要在后端写一下*/
    methods: {
      ...mapActions(['signup']),
      ...mapActions(['huamianchange']),

      async asignup() {
        console.log('sign data:', { username: this.username, password: this.password });
          
        await this.$store.dispatch('signup',{
          username: this.username,
          password: this.password,
        })
        .catch ((error)=>{
        console.error('Login error1', error);
      });
      }
      }}
  </script>
  
  